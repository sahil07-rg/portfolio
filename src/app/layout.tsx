import type { Metadata, Viewport } from "next";
import { Noto_Sans_Devanagari } from "next/font/google";
import Script from "next/script";
import "./kage-fonts.css";
import "./kage.css";
import "./site.css";

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Sahil Kumar | AI/ML Engineer",
  description:
    "Robotics and AI undergraduate and ML research intern at ISRO (IIRS). Machine learning for satellite, sensor and genomic data.",
  openGraph: {
    title: "Sahil Kumar | AI/ML Engineer",
    description: "Machine learning for satellite, sensor and genomic data.",
    images: ["/work/igp-haze.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#05070a",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={devanagari.variable}>
      {/* The data-layout-* switches pick Kage's "b" layouts in kage.css. */}
      <body
        data-layout-hero="b"
        data-layout-story="b"
        data-layout-gallery="b"
        data-layout-curriculum="b"
        data-layout-closing="b"
        data-layout-footer="b"
      >
        {children}
        <Script src="/kage/three.min.js" strategy="beforeInteractive" />
        <Script src="/kage/kage.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
