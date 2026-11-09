import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Projects by Ankit Kumar";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Projects",
    title: "Ankit Kumar",
    subtitle: "Product Engineering Portfolio",
    accent: "primary",
  });
}
