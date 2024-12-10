import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import { PHProvider } from "./providers";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Devang Ray - Developer",
  description:
    "Devang Ray is a developer and student at the University of Virginia.",
};

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})

/*TO DO
* dark mode
* posthog session replay -- DONE
* know whats actually going on
*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PHProvider>
        <body
          className={twMerge(
            inter.className,
            "flex antialiased h-screen overflow-hidden bg-gray-100"
          )}
        >
          <PostHogPageView />
          <Sidebar />
          <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
            <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
              {children}
              <Footer />
            </div>
          </div>
        </body>
      </PHProvider>
    </html>
  );
}
