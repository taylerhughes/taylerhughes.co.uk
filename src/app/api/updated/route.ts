import { NextResponse } from "next/server";
import { GITHUB_REPO_URL, GITHUB_TOKEN } from "@/utils/constants";

export async function GET() {
  if (!GITHUB_REPO_URL) {
    return NextResponse.json(null, { status: 500 });
  }
  try {
    const res = await fetch(`${GITHUB_REPO_URL}/commits`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    const commits = await res.json();
    const lastUpdate = commits[0].commit.committer.date;
    return NextResponse.json(lastUpdate);
  } catch (error) {
    return NextResponse.json(null, { status: 500 });
  }
}
