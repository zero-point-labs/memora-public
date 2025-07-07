import Hero from "@/components/Hero";
import NextTrip from "@/components/NextTrip";
import AboutUs from "@/components/AboutUs";
import Blog from "@/components/Blog";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <NextTrip />
      <AboutUs />
      <Blog />
      <Gallery />
      <Contact />
      {/* Add more sections here as we build them */}
    </>
  );
}
