import { Search, ShoppingCart } from 'lucide-react'
import { useState } from 'react';
import SearchInPut from './SearchInPut';
import { movieStore } from '../store/movie-store';

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, quantity } = movieStore();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='w-full h-15 bg-transparent flex justify-between items-center px-10'>
      <div>IMDB</div>
      <div>
        <div className='flex gap-5'>
          <SearchInPut/>
          <ShoppingCart onClick={toggleNav} className='cursor-pointer' />
          { isOpen && (
            <div className='absolute top-14 right-10 bg-white p-4 rounded shadow-lg '>
              <h2 className='text-lg font-bold mb-2'>Cart</h2>
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <ul>
                  {cart?.map((item) => (
                    <li key={item.id} className='flex justify-between items-center mb-2'>
                      <span>{item.title}</span>
                      <span>Quantity: {item.quantity}</span>
                    </li>
                  ))}
                </ul>
              )}
              <p>Total Quantity: {quantity}</p>
              <button className='button mt-5'>Checkout</button>
            </div>
          )}
        </div>
      </div>


    </nav>
  )
}

export default MainNav