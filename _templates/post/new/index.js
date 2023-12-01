const path = require("path");
const slugify = require("slugify");
const fs = require("fs-extra");
const config = require("../../../config.json");

// Function to recursively get all directories
const getDirectories = (srcPath, base = "", level = 0) => {
  let dirs = [];
  const files = fs.readdirSync(srcPath);

  files.forEach((file) => {
    const filePath = path.join(srcPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      dirs.push({
        name: path.join(base, file),
        level: level, // Add level attribute
      });
      // Recursively get subdirectories with increased level
      dirs = dirs.concat(
        getDirectories(filePath, path.join(base, file), level + 1),
      );
    }
  });

  return dirs;
};

// Helper function to create a directory and return its slug
const unSlugify = (slug) =>
  slug
    .toLowerCase()
    .replace(/\-/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase());

const validateNotEmpty = (input) => {
  return input.trim() !== "" || "This field cannot be empty.";
};

const validateSlug = (input) => {
  const slug = slugify(input, { lower: true, strict: true });
  return slug.length > 0 || "Please provide a valid name for the post.";
};

// Helper function to create a directory within the selected parent directory
const createDirectory = async (
  prompter,
  parentDirectoryFullPath,
  baseDirectory,
) => {
  let newCategoryQuestion = {
    type: "input",
    name: "newCategory",
    message: "Enter the new category name:",
    validate: validateSlug,
  };

  let newCategoryAnswer = await prompter.prompt(newCategoryQuestion);
  let categorySlug = slugify(newCategoryAnswer.newCategory, {
    lower: true,
    strict: true,
  });

  let fullPath = path.join(parentDirectoryFullPath, categorySlug);
  await fs.ensureDir(fullPath);
  console.log(`New category directory created at: ${fullPath}`);

  // Return the relative path from the base directory to the new directory
  return path.relative(baseDirectory, fullPath);
};

// Recursive directory choosing function
const chooseDirectory = async (baseDirectory, prompter) => {
  let parentDirectories = getDirectories(baseDirectory);
  let parentCategoryChoices = parentDirectories.map((dir) => {
    let prefix = dir.level > 0 ? `${"--".repeat(dir.level)} ` : "";
    let title = `${prefix}${unSlugify(path.basename(dir.name))}`;

    return {
      title: title,
      value: dir.name,
    };
  });

  parentCategoryChoices.push({
    title: "[+] Create new category?",
    value: "NEW",
  });

  let parentCategoryQuestion = {
    type: "autocomplete",
    name: "parentCategoryChoice",
    message: "Select a parent category or create a new one:",
    choices: parentCategoryChoices,
  };

  let parentCategoryAnswer = await prompter.prompt(parentCategoryQuestion);

  if (parentCategoryAnswer.parentCategoryChoice === "NEW") {
    // Pass the base directory itself if we're creating a new root-level directory
    return createDirectory(prompter, baseDirectory, baseDirectory);
  } else {
    // If an existing directory is selected, its full path needs to be calculated
    let selectedFullPath = path.join(
      baseDirectory,
      parentCategoryAnswer.parentCategoryChoice,
    );

    let subdirectoryQuestion = {
      type: "confirm",
      name: "createSubdirectory",
      message: "Is this post for a new category?",
      default: false,
    };

    let subdirectoryAnswer = await prompter.prompt(subdirectoryQuestion);

    if (subdirectoryAnswer.createSubdirectory) {
      // If the user wants to create a new subdirectory, call createDirectory with the selected directory's full path
      return await createDirectory(prompter, selectedFullPath, baseDirectory);
    }

    // If no new subdirectory is being created, return the relative path of the chosen directory
    return path.relative(baseDirectory, selectedFullPath);
  }
};

module.exports = {
  prompt: async ({ prompter, args }) => {
    const today = new Date().toISOString().slice(0, 10); // Gets today's date in YYYY-MM-DD format

    let questions = [
      {
        type: "input",
        name: "title",
        message: "What is the post title?",
        validate: (input) => validateNotEmpty(input) && validateSlug(input),
      },
      {
        type: "input",
        name: "description",
        message: "What is the post description?",
        validate: validateNotEmpty,
      },
      {
        type: "input",
        name: "imageUrl",
        message: "Featured image URL (leave empty if not applicable):",
      },
    ];

    let answers = await prompter.prompt(questions);

    // If imageUrl is not empty, ask for the rest of the image details.
    if (answers.imageUrl) {
      const imageQuestions = [
        {
          type: "input",
          name: "imageAlt",
          message: "Featured image alt text:",
          validate: validateNotEmpty,
        },
      ];

      const imageAnswers = await prompter.prompt(imageQuestions);
      answers = { ...answers, ...imageAnswers };
    }

    const fileName = slugify(answers.title, {
      lower: true,
      strict: true,
      trim: true,
    });

    // Use the chooseDirectory function to allow the user to select or create a new directory
    const parentCategorySlug = await chooseDirectory(config.blogRoot, prompter);

    // Check if the directory exists; if not, it will be created
    const fullPath = path.join(config.blogRoot, parentCategorySlug);
    await fs.ensureDir(fullPath);

    try {
      // Define the content of the index file
      const indexContent = `---
title: ${unSlugify(parentCategorySlug)}
date: ${today}
show_child_posts: true
description: "Add a description"
---
`;

      // Path to the index file
      const indexPath = path.join(fullPath, `index.mdx`);

      // Write the index file if it doesn't exist
      if (!fs.existsSync(indexPath)) {
        await fs.outputFile(indexPath, indexContent);
        console.log(`Index file created at: ${indexPath}`);
      } else {
        console.log(`Index file already exists at: ${indexPath}`);
      }
    } catch (error) {
      console.error(`An error occurred: ${error}`);
    }

    return {
      ...answers,
      imageWidth: config.featuredImage.width,
      imageHeight: config.featuredImage.height,
      date: today,
      authorName: config.defaultAuthorName,
      authorAvatar: config.defaultAvatarPath,
      fileName: `${fileName}.mdx`,
      parentCategoriesPath: parentCategorySlug,
    };
  },
};
