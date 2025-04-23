import axios from "axios";
import { axiosInstance } from "../lib/axios";

export const fetchGetMovies = async (query = "a") => {

  try {
    const res = await axiosInstance.get(
      `search/movie?&query=${query}`
    );

    return res.data.results; 
  } catch (error) {
    console.error(
      "Failed to fetch movies:",
      error.response ? error.response.data : error.message
    );
  }
};
