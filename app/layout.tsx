import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";

const ibmPlexSans = localFont({
 src: [
   {path: "/font/IBMPlexSans-Regular.ttf",weight:'400',style:'normal'},
   {path: "/font/IBMPlexSans-Medium.ttf",weight:'500',style:'normal'},
   {path: "/font/IBMPlexSans-Bold.ttf",weight:'600',style:'normal'},
   {path: "/font/IBMPlexSans-SemiBold.ttf",weight:'700',style:'normal'},
 ]
});

const bebanueu = localFont({
  src: [
    {path: "/font/BebasNeue-Regular.ttf",weight:'400',style:'normal'},
  ],
  variable: "--bebas-neue",
 });



export const metadata: Metadata = {
  title: "BookWise",
  description: "BookkWise is a book that contains information about books",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} ${bebanueu.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout
