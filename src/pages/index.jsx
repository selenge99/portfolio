import Header from "@/components/header";
import SectionInfo from "@/components/section-info";
import SectionAbout from "@/components/section-about";
import SectionSkills from "@/components/section-skills";
import SectionContact from "@/components/section-contact";
import Section5 from "@/components/section5";
import Experiences from "@/components/experience";

export default function Home() {
  return (
    <main>
      <Header />
      <SectionInfo />
      <SectionAbout />
      <SectionSkills />
      <Experiences/>
      <Section5 />
      <SectionContact />
      
    </main>
  );
}
