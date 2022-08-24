import Head from "next/head";
import Image from "next/image";
import {
  Connect,
  Container,
  Discover,
  FeaturedProperties,
  Footer,
  OurServices,
  PeopleSection,
  Navbar
} from "../components/index";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Container />
      <Discover />
      <OurServices />
      <FeaturedProperties />
      <PeopleSection />
      <Connect />
      <Footer />
    </div>
  );
}
