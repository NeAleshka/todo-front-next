import {
  AboutSection,
  ContactSection,
  HeroSection,
  TeamSection,
  ValuesSection,
} from "@/app/about/components";

const AboutPage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
};

export default AboutPage;
