import { ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { movieStore } from "../../store/movie-store";
import Quantity from "../cart/Quantity";

function MovieList({ language, id, title, vote, poster }) {
  const [ProDuctQuantity, setProDuctQuantity] = useState(0);
  const { cart, quantity, addToCart } = movieStore();

  const HdlInCrease = () => {
    setProDuctQuantity(ProDuctQuantity + 1);
  };
  const HdlDeCrease = () => {
    if (quantity <= 0) return;

    const HdlAddToCart = (value) => {
      console.log(value);
      addToCart(ProDuctQuantity);
    };

  return (
    <div className="movie-card w-full h-full">
      <div className="flex flex-col justify-between ">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt={title}
          className="w-[200px] h-auto rounded shadow"
        />
        <div className="flex gap-2">
          <label className="label-search">Score</label>
          <div>{vote}</div>
        </div>
        <div className="flex gap-2">
          <label className="label-search">Title</label>
          <div>{title}</div>
        </div>
        <div className="flex gap-2">
          <label className="label-search">Language</label>
          <div>{language}</div>
        </div>
      </div>
      <div className="flex-1" />
      <div className="flex flex-col items-center  gap-5 p-2">
        <Quantity HdlInCrease={HdlInCrease} HdlDeCrease={HdlDeCrease} HdlAddToCart={HdlAddToCart} />
      </div>
    </div>
  );
}
}

export default MovieList;
