import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Blog by Ankit Kumar";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Blog",
    title: "Ankit Kumar",
    subtitle: "Product Notes | Engineering",
    accent: "secondary",
  });
}
