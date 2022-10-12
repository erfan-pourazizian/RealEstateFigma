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
    toast.info(<a href="https://www.figma.com/file/hw31QbF5nkROsEBiq3ng34/RealEstate-HomePage?node-id=0%3A1" target={'_blank'} rel="noreferrer" >check out figma design <span className="text-red-400">here</span></a>, {autoClose:8000}) ;
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
