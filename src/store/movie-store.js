import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstance } from "../lib/axios";

export const movieStore = create(
  persist((set, get) => ({
    movieList: [],
    setMovieList: (movieList) => set({ movieList }),

    fetchMovie: async (query = "a") => {
      const res = await axiosInstance.get(`search/movie?&query=${query}`);
      console.log(res);
      set({ movieList: res.data.results });
    },
  
    cart: [{
        id: '',
        quantity: '',
    }],
    addToCart: (movie) => {
        const cart = get().cart;
      const existingMovie = cart.find((item) => item.id === movie.id);
      if (existingMovie) {
        set({
          cart: cart.map((item) =>
            item.id === movie.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        });
      } else {
        set({ cart: [...cart, { ...movie, quantity: 1 }] });
      }
    },

  }))
);
