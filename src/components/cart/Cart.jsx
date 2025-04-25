import React, { useState } from "react";
import { movieStore } from "../../store/movie-store";
import CheckOut from "./CheckOut";

function Cart() {
  const { cart, quantity, addToCart, clearCart, removeFromCart, addFromCart } =
    movieStore();
  const [showPopup, setShowPopup] = useState(false);

  const total = cart.reduce((total, item) => total + item.quantity, 0);

  const pricePerItem = (price, quantity) => {
    return price * quantity;
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const disCount = (total) => {
    if (total >= 5) {
      return 0.2;
    } else if (total >= 3) {
      return 0.1;
    } else {
      return 0;
    }
  };
  const discountRate = disCount(total);
  const discountAmount = totalPrice * discountRate;
  const finalPrice = totalPrice - discountAmount;

  const hanDleClear = () => {
    clearCart();
  };

  const HdlDeCreaseCart = (movie) => {
    removeFromCart(movie);
  };

  const HdlInCreaseCart = (movie) => {
    addFromCart(movie);
  };

  const handleCheckout = () => {

   

    if(total === 0) {
      alert("Your cart is empty.");
      return;
    }

    // handleStartTimer();
    setShowPopup(!showPopup);
 if (localStorage.getItem("startTime")) {
      return;
    }
  };

   

  return (
    <div>
      <div className="absolute top-14 right-10 bg-white p-4 rounded shadow-lg w-140">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold mb-2">Cart</h2>
          <div className="sm-text cursor-pointer" onClick={hanDleClear}>
            clear
          </div>
        </div>
        {cart?.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart?.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center z-10"
              >
                <div className="cart-drawer">
                  <div className="w-40 text-lg">{item.title}</div>
                  <div className="w-30 text-lg">Quantity: {item.quantity}</div>
                  <div className="w-20 text-lg">
                    ${pricePerItem(item.price, item.quantity).toFixed(2)}
                  </div>
                </div>
                <div className="cart-drawer">
                  <div
                    key={item.id}
                    onClick={() => HdlDeCreaseCart(item)}
                    className="cursor-pointer"
                  >
                    -
                  </div>
                  <div
                    key={item.id}
                    onClick={() => HdlInCreaseCart(item)}
                    className="cursor-pointer"
                  >
                    +
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <p className="sm-text">Quantity: {total}</p>
            <p className="sm-text">Total Price: {totalPrice}</p>
          </div>
          {discountRate > 0 && (
            <>
              <p className="text-green-600">
                Discount: -${discountAmount.toFixed(2)} ({discountRate * 100}%)
              </p>
              <p className="font-bold text-lg">
                Final Price: ${finalPrice.toFixed(2)}
              </p>
            </>
          )}
          {discountRate === 0 && (
            <p className="font-bold text-lg">
              Final Price: ${finalPrice.toFixed(2)}
            </p>
          )}

          <button className="button mt-5" onClick={handleCheckout}>Checkout</button>
        </div>
          {
            showPopup && (
                <CheckOut setShowPopup={setShowPopup}  />
            )
          }
      </div>
    </div>
  );
}

export default Cart;
