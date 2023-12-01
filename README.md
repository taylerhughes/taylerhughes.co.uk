ZippyStarter is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies using:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, create a new file in the root directory called `.env.local`,
in it you need to store the following environment variables,
and any that you add for local development,
(I've added example values that you should replace):

```bash
# Mandatory: make sure you change this, it's used for opengraph & the sitemap
NEXT_PUBLIC_DOMAIN=https://yourwebsite.com

#optional
EMAIL_ADDRESS=info@yourwebsite.com
EMAIL_PASSWORD=password
EMAIL_HOST=secure.emailsrvr.com
GITHUB_REPO_URL=https://api.github.com/repos/{account}/{repo}
GITHUB_TOKEN=token_here
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Generating blog posts
There's a handy CLI for generating blog posts, and creating blog categories.
If you run the following script:

```bash
npm run post
# or
yarn post
# or
pnpm post
```

You'll be prompted for the information needed to create the category,
and post, and any associated meta data.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Docs

For the time-being docs can be found here: https://zippystarter.com/blog/docs.

## Potential issues
After installing all dependencies, the first time you run locally you may see the following error:

```
/src/app/page.tsx:5:0 Module not found: Package path ./generated is not exported from package /Users/zippystarter/node_modules/contentlayer (see exports field in /Users/zippystarter/node_modules/contentlayer/package.json)
```

This is normal as `contentLayer` generates data which Next.js needs,
and is still in the process of generating it,
if you refresh the page the error should go away.
You will not see this in production, and it should only happen once.

Related issue: https://github.com/contentlayerdev/contentlayer/issues/412 for reference
