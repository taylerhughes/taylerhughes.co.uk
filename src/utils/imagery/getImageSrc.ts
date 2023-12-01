import { isExternal } from "@/utils/imagery/utils";
import cropParams from "@/utils/cropParams";

const getImageSrc = (src: string, width: number, height: number) => {
  if (isExternal(src)) {
    return cropParams(src, width, height);
  }
  return src;
};

export default getImageSrc;
