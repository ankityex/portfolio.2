import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Refund Policy | Ankit Kumar";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Refund Policy",
    title: "Ankit Kumar",
    subtitle: "Service Refund Conditions",
    accent: "accent",
  });
}
