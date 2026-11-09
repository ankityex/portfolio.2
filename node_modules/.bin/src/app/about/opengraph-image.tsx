import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "About Ankit Kumar";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildOgImage({
    eyebrow: "About",
    title: "About Ankit Kumar",
    subtitle: "Founder | Full Stack Developer | Open-Sourcerer",
    accent: "accent",
  });
}
