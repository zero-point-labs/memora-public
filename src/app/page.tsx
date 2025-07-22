import Hero from "@/components/Hero";
import NextTrip from "@/components/NextTrip";
import Reviews from "@/components/Reviews";
import AboutUs from "@/components/AboutUs";
import Blog from "@/components/Blog";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <NextTrip />
      <Reviews />
      <Gallery />
      <AboutUs />
      <Blog />
      <Contact />
      {/* Add more sections here as we build them */}
    </>
  );
}
