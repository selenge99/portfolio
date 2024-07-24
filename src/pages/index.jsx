import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import SectionInfo from "@/components/section-info";
import SectionAbout from "@/components/section-about";
import SectionSkills from "@/components/section-skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <SectionInfo />
      <SectionAbout />
      <SectionSkills />
    </main>
  );
}
