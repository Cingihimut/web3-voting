import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amivote | Blockchain Voting",
  description: "Sistem voting dengan teknologi Blockchain dan smart contract",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex w-full mt-16 flex-col items-center justify-between p-2">
          {children}
        </main>
      </body>
    </html>
  );
}
