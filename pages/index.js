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
  Navbar,
} from "../components/index";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Real State</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
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
