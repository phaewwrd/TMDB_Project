import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import SearchInPut from "./SearchInPut";
import { movieStore } from "../store/movie-store";
import Cart from "./cart/Cart";

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, quantity } = movieStore();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full h-[700px] bg-transparent flex">
      <div className="flex justify-between items-start w-full backdrop-blur bg-gray/10 h-[70px]">
        <div className="text-red-700 text-2xl p-5 pl-15 ">MOVIESHOP</div>
        <div>
          <div className="flex gap-5 p-5">
            <SearchInPut />
            <ShoppingCart
              onClick={toggleNav}
              className="cursor-pointer text-red-700"
            />
            {isOpen && <Cart />}
          </div>
        </div>
      </div>
      <div className="bg-gray-900 absolute right-70 top-40 w-100 h-100 p-10 rounded-3xl -z-5">
        <img
          src="/public/the-last-of-us-2560-x-1600-background-c7bndvp8by3xom3b.jpg"
          className="w-100 "
        />
        <div className="text-red-700 pt-5">
          After a global pandemic destroys civilization, a hardened survivor
          takes charge of a 14-year-old girl who may be humanity's last hope.
        </div>
      </div>
      <img
        src="/public/the-last-of-us-ka.avif"
        alt="My Image"
        className="w-full h-auto absolute -z-10 "
      />
    </nav>
  );
}

export default MainNav;
