import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "mukikim-rock-and-roll-piano",
  "fisher-price-infant-trio",
  "stoies-musical-instruments-set",
  "keyboard-xylophone-set",
  "loog-mini-acoustic-guitar",
  "electric-drum-set",
  "fisher-price-piano-gym",
  "taimasi-instruments-set",
  "bluewood-climbing-triangle",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://theplantsverse.com")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/reviews/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("ts", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/piano"],
};
