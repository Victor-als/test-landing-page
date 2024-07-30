import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SectionAnalitycs } from "./components/SectionAnalitycs";
import { SectionCompanies } from "./components/SectionCompanies";
import { SectionFeatures } from "./components/SectionFeatures";
import { SectionHero } from "./components/SectionHero";
import { SectionLauch } from "./components/SectionLaunch/index";
import { SectionQuestions } from "./components/SectionQuestions";
import { SectionTestimonials } from "./components/SectionTestimonials";
import { SectionTrial } from "./components/SectionTrial";


export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionCompanies />
      <SectionFeatures />
      <SectionTestimonials />
      <SectionAnalitycs />
      <SectionQuestions />
      <SectionLauch />
      <SectionTrial /> 
    </> 
  );
}
