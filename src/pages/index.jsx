import Header from "@/components/header";
import SectionInfo from "@/components/section-info";
import SectionAbout from "@/components/section-about";
import SectionSkills from "@/components/section-skills";
import SectionExperiences from "@/components/section-experiences";
import SectionWork from "@/components/sectiom-work";
import SectionContact from "@/components/section-contact";
import Section5 from "@/components/section5";

export default function Home() {
  return (
    <main>
      <Header />
      <SectionInfo />
      <SectionAbout />
      <SectionSkills />
      <SectionExperiences />
      <SectionWork />
      <SectionContact />
      <Section5 />
    </main>
  );
}
