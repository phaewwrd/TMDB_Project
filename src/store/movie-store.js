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
  
    cart: [],
    addToCart: (movie) => {
        const cart = get().cart;
      const existingMovie = cart.find((item) => item.id === movie.id);
      if (!movie.proDuctQuantity) {
        return;
      }
      if (existingMovie) {
        set({
          cart: cart.map((item) =>
            item.id === movie.id
              ? { ...item, quantity: item.proDuctQuantity + movie.proDuctQuantity }
              : item
          ),
        });
      } else {
        set({ cart: [...cart, { ...movie, quantity: movie.proDuctQuantity}] });
      }
      console.log("cart", cart);
    },
    removeFromCart: (movie) => {
      const cart = get().cart;
      const existingMovie = cart.find((item) => item.id === movie.id);
      if (existingMovie) {
        if (existingMovie.quantity > 1) {
          set({
            cart: cart.map((item) =>
              item.id === movie.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          });
        } else {
          set({
            cart: cart.filter((item) => item.id !== movie.id),
          });
        }
      }
    },
    addFromCart: (movie) => {
      const cart = get().cart;
      const existingMovie = cart.find((item) => item.id === movie.id);
      if (existingMovie) {
        if (existingMovie.quantity >= 0) {
          set({
            cart: cart.map((item) =>
              item.id === movie.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            cart: cart.filter((item) => item.id !== movie.id),
          });
        }
      }
    },
    clearCart: () => {
      set({ cart: [] });
    },

  }))
);
