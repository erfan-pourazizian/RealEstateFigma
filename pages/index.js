import Head from "next/head";
import { fetchApi, baseUrl } from "../utils/fetchApi";
import {
  Connect,
  Main,
  Discover,
  FeaturedProperties,
  OurServices,
  PeopleSection,
} from "../components";

export default function Home({ propertiesForRent }) {
  return (
    <>
      <Main />
      <Discover />
      <OurServices />
      <FeaturedProperties propertiesForRent={propertiesForRent} />
      <PeopleSection />
      <Connect />
    </>
  );
}

export async function getStaticProps() {
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
