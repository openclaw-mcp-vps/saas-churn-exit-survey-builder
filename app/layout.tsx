import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChurnSurvey — Build Smart Exit Surveys for Churning Customers",
  description: "Create dynamic exit surveys that adapt based on customer usage patterns and cancellation reasons. Turn churn into actionable insights."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c823bb6c-da7d-45b8-87c9-8886c03f5a3f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
