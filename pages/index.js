import { useEffect } from "react";
import { fetchApi, baseUrl } from "../utils/fetchApi";
import { toast } from "react-toastify";
import {
  Connect,
  Main,
  Discover,
  FeaturedProperties,
  OurServices,
  PeopleSection,
} from "../components";

export default function Home({ propertiesForRent }) {
  useEffect(() => {
  console.log('use effect test')
  }, []);

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
