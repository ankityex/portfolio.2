import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "About Ankit Kumar";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "About",
    title: "Ankit Kumar",
    subtitle: "Journey | Work | Open-Sourcerer",
    accent: "accent",
  });
}
