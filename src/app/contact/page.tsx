import type { Metadata } from "next";
import { ContactPageClient } from "@/components/pages/contact-page-client";
import { siteUrl } from "@/lib/site-config";

const contactOgImageUrl = `${siteUrl}/contact/opengraph-image`;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ankit Kumar for projects, consulting, and collaborations.",
  alternates: {
    canonical: "/contact",
  },
  keywords: [
    "contact Ankit Kumar",
    "hire full stack developer",
    "project inquiry",
    "software consulting",
  ],
  openGraph: {
    title: "Contact Ankit Kumar",
    description:
      "Send project goals and timelines for software execution, consulting, and delivery.",
    url: `${siteUrl}/contact`,
    type: "website",
    images: [
      {
        url: contactOgImageUrl,
        width: 1200,
        height: 630,
        alt: "Contact Ankit Kumar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ankit Kumar",
    description:
      "Send project goals and timelines for software execution, consulting, and delivery.",
    images: [contactOgImageUrl],
  },
};

function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Ankit Kumar",
    url: `${siteUrl}/contact`,
    description:
      "Contact page for project collaboration and software services.",
  };

  return (
    <>
      <script type="application/ld+json">
        {serializeJsonLd(contactJsonLd)}
      </script>
      <ContactPageClient />
    </>
  );
}
