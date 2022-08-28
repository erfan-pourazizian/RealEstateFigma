import Head from "next/head";
import Image from "next/image";
import {
  Connect,
  Main,
  Discover,
  FeaturedProperties,
  Footer,
  OurServices,
  PeopleSection,
  Navbar,
} from "../components/index";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Real State</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <Discover />
      <OurServices />
      <FeaturedProperties />
      <PeopleSection />
      <Connect />
      <Footer />
    </div>
  );
}
