import { Inter } from "next/font/google";
import Navbarr from "@/components/navbar/Navbarr";
import "./globals.css";
import "@/app/css/navbar.css";
import "@/app/css/loader.css";
import "@/app/css/edit_modal.css";
import "@/app/css/post-a-book.css";
import Provider from "@/config/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      </head>
      <body className={inter.className}>
        <Provider>
          <Navbarr />
          {children}
        </Provider>
      </body>
    </html>
  );
}
