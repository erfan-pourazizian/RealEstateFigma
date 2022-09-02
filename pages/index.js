import Head from "next/head";
import {fetchApi, baseUrl} from '../utils/fetchApi'
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

export default function Home({propertiesForRent}) {
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
      <FeaturedProperties propertiesForRent={propertiesForRent}/>
      <PeopleSection />
      <Connect />
      <Footer />
    </div>
  );
}



export async function getStaticProps() {
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForRent: propertyForRent?.hits,
    },
  };
}