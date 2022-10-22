import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "4db9197a97mshbb5955a8e4a93bbp1a1727jsnb7d857bf8217",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};

