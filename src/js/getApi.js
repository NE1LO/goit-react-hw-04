import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/photos",
  headers: {
    Authorization: "Client-ID splze3qGkkwbDpI9Es5qynMPccn391CUgvUpQ4TTPHE",
    "Content-Type": "application/json",
  },
});

const getPhotos = async (query, page) => {
  try {
    const response = await instance.get("", {
      params: {
        query,
        page,
        per_page: 20,
        orientation: "landscape",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("bad request");
  }
};

export default getPhotos;
