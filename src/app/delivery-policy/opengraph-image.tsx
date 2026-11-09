import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Delivery Policy | Ankit Kumar";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildOgImage({
    eyebrow: "Delivery Policy",
    title: "Delivery Standards",
    subtitle: "Workflow And Handover Process",
    accent: "primary",
  });
}
