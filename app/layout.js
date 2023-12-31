import { Rubik } from "next/font/google";
import "./globals.css";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Navbar from "../components/Navbar";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
const rubik = Rubik({ subsets: ["latin"] });
import Footer from "../components/Footer";
import {NextAuthProvider} from './AuthProvider'

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <MaxWidthWrapper>
          <NextAuthProvider>
            <Navbar />

            <NextTopLoader
              color="#1E90FF"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={100}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
              template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
              zIndex={1600}
              showAtBottom={false}
            />

            <Toaster position="top-center" reverseOrder={false} />
<div className="min-h-[60vh]">
            {children}
            </div>
            <Footer />
          </NextAuthProvider>
        </MaxWidthWrapper>
      </body>
    </html>
  );
}
