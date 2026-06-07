import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MacroSnap – Calculate Macros from Food Photos Instantly",
  description: "Snap a photo of your meal and instantly get calories, protein, carbs, and fat. AI-powered macro tracking for fitness enthusiasts and dieters."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="38a04eee-11de-49a4-80f6-b7bfe8fa6d45"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
