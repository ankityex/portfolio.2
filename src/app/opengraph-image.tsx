import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Ankit Kumar Portfolio v5 preview";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return buildOgImage({
    eyebrow: "Ankit Kumar Portfolio v5",
    title: "Ankit Kumar",
    subtitle: "Founder | Full Stack Developer | Let's Connect",
    accent: "primary",
  });
}
