import { ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { movieStore } from "../../store/movie-store";

function MovieList({ language, id, title, vote, poster }) {
  const [ProDuctQuantity, setProDuctQuantity] = useState(0);
  const { cart, quantity, addToCart } = movieStore();

  const HdlInCrease = () => {
    setProDuctQuantity(ProDuctQuantity + 1);
  };
  const HdlDeCrease = () => {
    if (ProDuctQuantity <= 0) return;
    setProDuctQuantity(ProDuctQuantity - 1);
}

    const HdlAddToCart = (id) => {
      console.log(id);
      addToCart(...cart, {id: id, quantity: ProDuctQuantity});
      console.log(cart);
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
      <div className="flex gap-10 border-1 border-gray-300 rounded-md p-2">
          <div onClick={HdlDeCrease} className="cursor-pointer">
            -
          </div>
          <div>{ProDuctQuantity}</div>
          <div onClick={HdlInCrease} className="cursor-pointer">
            +
          </div>
        </div>
        <div
          className="button flex justify-center items-center"
          value={id}
          onClick={() => HdlAddToCart(id)}
        >
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}



export default MovieList;
