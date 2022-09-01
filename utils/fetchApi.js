import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "73058e7124msha049941532cd7e7p196941jsn1193a375a4c0",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};

// import axios from "axios";

// const options = {
//   method: "GET",
//   url: "https://bayut.p.rapidapi.com/properties/list",
//   params: {
//     locationExternalIDs: "5002,6020",
//     purpose: "for-rent",
//     hitsPerPage: "6",
//     page: "0",
//     lang: "en",
//     sort: "city-level-score",
//     rentFrequency: "monthly",
//     categoryExternalID: "4",
//   },
//   headers: {
//     "X-RapidAPI-Key": "73058e7124msha049941532cd7e7p196941jsn1193a375a4c0",
//     "X-RapidAPI-Host": "bayut.p.rapidapi.com",
//   },
// };
// export async function getProperties() {
//   try {
//     const response = await axios.request(options);
//     console.log(response.data.hits);
//     return response.data;
//   } catch (error) {
//     return response.data;
//   }
// }
