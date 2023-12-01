import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { formatUrl } from "@/contentlayer/utils";
import { DOMAIN as baseUrl } from "@/utils/constants";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const DOMAIN =
    process.env.VERCEL_ENV === "preview"
      ? `https://${process.env.VERCEL_BRANCH_URL}`
      : baseUrl;
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");
  const font = fetch(
    new URL("public/fonts/InterTight-Regular.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: `url(${formatUrl("/brand/ogcard-bg.png", DOMAIN)})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: "flex",
            fontSize: 120,
            fontFamily: "Inter Tight",
            fontStyle: "normal",
            color: "white",
            lineHeight: "130px",
            whiteSpace: "pre-wrap",
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Inter Tight",
          data: fontData,
          style: "normal",
        },
      ],
    },
  );
}
