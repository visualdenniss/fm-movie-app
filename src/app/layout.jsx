import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ['300','500'],
  subsets:['latin'],
  variable:'--font-outfit'
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} min-h-screen md:p-8 gap-3 flex flex-col md:flex-row bg-bg text-white`}>
          {children}
      </body>
    </html>
  );
}
