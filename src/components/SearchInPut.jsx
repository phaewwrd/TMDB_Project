import { Search, X } from "lucide-react";
import React, { useState } from "react";
import { movieStore } from "../store/movie-store";

export default function SearchInPut() {
  const [search, setSearch] = useState("");
  const { movieList, setMovieList, fetchMovie } = movieStore();

  const HanDleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const SearchBtn = () => {
   const searchedMovie = movieList.filter((el) => el.title.includes(search.toUpperCase()));
   console.log(searchedMovie);
   setMovieList(searchedMovie);
  };

  const CanCelBtn = () => {
    setSearch("");
    fetchMovie()
  };
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={search}
        placeholder="Search"
        className="input-search"
        onChange={HanDleSearch}
      />
      <Search onClick={SearchBtn} className="cursor-pointer text-red-700" />
      {
        search.length > 0 &&  <X onClick={CanCelBtn} className="cursor-pointer absolute right-30 top-3" />
      }
     
    </div>
  );
}
