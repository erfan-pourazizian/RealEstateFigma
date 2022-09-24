import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "6a160a8f43msh75bebe39bb99d30p11c03cjsn5c7874bd8692",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};

