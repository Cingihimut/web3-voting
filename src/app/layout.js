import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Amivote | Blockchain Voting",
  description: "Sistem voting dengan teknologi Blockchain dan smart contract",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900">
        <Navbar />
        <main className="mt-16 xl:px-14 md:px-10 sm:px-6">{children}</main>
      </body>
    </html>
  );
}
