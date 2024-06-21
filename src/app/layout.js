import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ImDownload } from "react-icons/im";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shahin Alam",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white/90 bg-primary">
      <div className="fixed flex h-screen items-center">
          <NavBar></NavBar>
        </div>
        <div className="max-w-6xl mx-auto px-4 pt-7 flex justify-between">
          <p>shahinabrar33@gmail.com</p>
          <button className="cursor-pointer bg-secondary hover:bg-primary text-black/80 hover:text-white font-semibold duration-500 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.3rem_0.3rem_#F44336,-0.3rem_-0.3rem_#00BCD4] transition flex gap-2 items-center">
            <ImDownload className="text-lg" /> Resume
          </button>
        </div>
        {children}
      </body>
    </html>
  );
}
