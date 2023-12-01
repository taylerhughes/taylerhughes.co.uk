import {
  StaticImport,
  PlaceholderValue,
  OnLoadingComplete,
} from "next/dist/shared/lib/get-img-props";
import Image, { ImageLoader } from "next/image";
import clsx from "clsx";
import React, {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  RefAttributes,
} from "react";
import { getImage } from "@/utils/imagery/getImage";

type ImageProps = JSX.IntrinsicAttributes &
  Omit<
    DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    "height" | "width" | "loading" | "ref" | "alt" | "src" | "srcSet"
  > & {
    src: string;
    alt: string;
    width?: number | `${number}`;
    height?: number | `${number}`;
    fill?: boolean;
    loader?: ImageLoader;
    quality?: number | `${number}`;
    priority?: boolean;
    loading?: "eager" | "lazy";
    placeholder?: PlaceholderValue;
    blurDataURL?: string;
    unoptimized?: boolean;
    onLoadingComplete?: OnLoadingComplete;
    layout?: string;
    objectFit?: string;
    objectPosition?: string;
    lazyBoundary?: string;
    lazyRoot?: string;
  } & RefAttributes<HTMLImageElement | null>;

const NextImage: React.FC<ImageProps> = async (props) => {
  if (!props.src) {
    return null;
  }

  const { css, img } = await getImage(props.src);

  return (
    <div
      className={clsx(
        props.className,
        "relative overflow-hidden rounded-[clamp(0.5rem,5cqw,1rem)]",
      )}
    >
      <div
        className="absolute inset-0 w-full h-full transform scale-150 filter blur-2xl z-[-1]"
        style={css}
      />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        {...props}
        className={clsx(props.className)}
        width={props.fill ? undefined : img.width}
        height={props.fill ? undefined : img.height}
      />
    </div>
  );
};

export default NextImage;
