
import { ShoppingCart } from "lucide-react";

function Quantity({ HdlInCrease, HdlDeCrease, HdlAddToCart, ProDuctQuantity }) {


    return (
      <div>
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
          onClick={HdlAddToCart}
        >
          <ShoppingCart />
        </div>
      </div>
    );
  };


export default Quantity;
