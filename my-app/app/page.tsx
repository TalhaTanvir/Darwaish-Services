import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import ServiceArea from "@/components/home/ServiceArea";
import Testimonilas from "@/components/home/Testimonilas";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <ServiceArea />
      <Testimonilas />
      <FAQ />
      <CTA />
    </>
  );
}
