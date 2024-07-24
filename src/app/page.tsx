import { Header } from "./components/Header";
import { SectionAnalitycs } from "./components/SectionAnalitycs";
import { SectionCompanies } from "./components/SectionCompanies";
import { SectionFeatures } from "./components/SectionFeatures";
import { SectionHero } from "./components/SectionHero";
import { SectionQuestions } from "./components/SectionQuestions";
import { SectionTestimonials } from "./components/SectionTestimonials";


export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionCompanies />
      <SectionFeatures />
      <SectionTestimonials />
      <SectionAnalitycs />
      <SectionQuestions />
    </> 
  );
}
