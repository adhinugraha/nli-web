import type { Metadata } from "next";
import "../styles/index.scss";
import Providers from "./providers";
import App from "./app";
import { MainHeader } from "@/components/MainHeader";
import { MainFooter } from "@/components/MainFooter";

export const metadata: Metadata = {
  title: "Bali Luxury Property Investment Developer | Nirvana Life",
  description: "The Sanctuary by Nirvana Life is a boutique wellness real estate investment in Bali, offering managed ownership, exclusive club access, and income potential.",
  icons: {
    icon: '/assets/icons/nirvanalife-logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`body`}>
        <Providers>
          <App>
            <MainHeader/>
            <div className="content app-content" id="app-content">
              {children}
            </div>
            <MainFooter/>
          </App>
        </Providers>
      </body>
    </html>
  );
}

