import Image from "next/image";
import Landing from "@/pages/index";
import LandingSection from "@/components/LandingPage/LandingSection";
import About from "@/components/About/About";
export default function Home() {
  return (
    <>
      <LandingSection />
      <About />
    </>
  );
}
