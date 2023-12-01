import fs from "fs";
import path from "path";
import { getPlaiceholder } from "plaiceholder";
import { isExternal } from "@/utils/imagery/utils";

const processImage = async (buffer: Buffer): Promise<any> => {
  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { height, width },
  };
};

export const getImage = async (src: string): Promise<any> => {
  try {
    let buffer: Buffer;

    if (isExternal(src)) {
      const res = await fetch(src);
      buffer = Buffer.from(await res.arrayBuffer());
    } else {
      buffer = await fs.promises.readFile(
        path.join(process.cwd(), "public", src),
      );
    }

    const imageResult = await processImage(buffer);
    return { ...imageResult, img: { ...imageResult.img, src } };
  } catch (error) {
    console.error("Failed to get image:", error);
    throw error;
  }
};
