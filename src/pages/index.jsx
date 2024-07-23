import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Hi from "@/components/section-1";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Hi />
    </main>
  );
}
