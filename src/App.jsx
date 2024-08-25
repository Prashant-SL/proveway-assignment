import React, { useState } from 'react';
import './App.css';

const CartItem = ({ details, index, selectedOffer, handleSelection, sizes, colors }) => {
  const { quantity, price, discount, isPopular } = details;

  return (
    <div className={`mb-4 transition-all duration-300 ease-in-out ${selectedOffer === index ? 'h-auto border-primary border-2 rounded-lg pt-4' : 'h-[70px]'}`}>
      <div className={`flex items-center gap-14 shadow-md rounded-lg ${selectedOffer === index ? 'h-full' : 'h-full'}`}>
        {
          selectedOffer != index ?
            <>
              <div className="flex h-full">
                <div className="bg-primary text-[18px] font-semibold h-full flex flex-col justify-center px-4 py-6 rounded-tl-lg rounded-bl-lg text-white mr-4">
                  <p>{discount}</p>
                  <p>Off</p>
                </div>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="offer"
                    className="accent-primary mr-2 focus:outline-none focus:ring-transparent focus:ring-primary"
                    onChange={() => handleSelection(index)}
                    checked={selectedOffer === index}
                  />
                  <div className="font-normal ml-2 text-[16px]">
                    <p>Buy {quantity} Get {quantity + quantity}</p>
                    <p className="font-medium">
                      {price}
                    </p>
                  </div>
                </label>
              </div>
              {isPopular && <p className="text-primary font-semibold flex items-center text-sm">Most Popular</p>}
            </>
            :
            (
              <div className='px-6 flex-column'>
                <div className='flex items-start'>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="offer"
                      className="accent-pink-400 mr-2"
                      onChange={() => handleSelection(index)}
                      checked={selectedOffer === index}
                    />
                    <div className="font-normal ml-2 text-[16px] mb-2">
                      <p>Buy {quantity} Get {quantity + quantity}</p>
                      <p className="font-medium">
                        {price}
                      </p>
                    </div>
                  </label>
                  <div className='ml-2.5 pt-1'>
                    <p className="rounded-md bg-primary text-[16px] px-2 flex flex-col justify-center text-white mr-4">
                      {discount} Off
                    </p>
                    <p className='line-through opacity-40 text-[14px] text-left'>
                      $99.00 USD
                    </p>
                  </div>
                </div>

                <div className="flex flex-col space-x-2 mb-5">
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse -ml-2">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-left"></th>
                          <th className="px-1 text-left text-[14px] font-normal">Size</th>
                          <th className="px-1 text-left text-[14px] font-normal">Color</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: quantity }).map((_, index) => (
                          <tr key={index} className='items-end align-bottom'>
                            <td className="text-[14px]">#{index + 1}</td>
                            <td className="px-1 pt-2 mb-2">
                              <select className="border w-20 h-6 text-[14px] px-1 bg-white text-gray-600">
                                {sizes.map((size, i) => (
                                  <option key={i} value={size}>
                                    {size}
                                  </option>
                                ))}
                              </select>
                            </td>
                            <td className="px-1 pt-2 mb-2">
                              <select className="border w-20 h-6 text-[14px] px-1 bg-white text-gray-600">
                                {colors.map((color, i) => (
                                  <option key={i} value={color}>
                                    {color}
                                  </option>
                                ))}
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )
        }
      </div>
    </div>
  );
};

function App() {
  const [selectedOffer, setSelectedOffer] = useState(0);

  const data = [
    { quantity: 1, price: '$18.00 USD', discount: '30%', isPopular: false },
    { quantity: 2, price: '$24.00 USD', discount: '30%', isPopular: true },
    { quantity: 3, price: '$36.00 USD', discount: '10%', isPopular: false },
  ];

  const sizes = ["S", "M", "L"];
  const colors = ["Black", "Blue", "Red"];

  const handleSelection = (index) => {
    setSelectedOffer(index);
  };

  return (
    <div className="flex justify-center items-center h-[60%]">
      <div className="bg-white border-2 border-pink-300 rounded-lg p-6 px-10 w-[50%] max-w-md shadow-lg">
        <h2 className="text-center text-primary text-lg font-semibold mb-4">YAY! It's BOGO</h2>
        {data.map((elem, index) => (
          <CartItem
            details={elem}
            index={index}
            key={index}
            sizes={sizes}
            colors={colors}
            selectedOffer={selectedOffer}
            handleSelection={handleSelection}
          />
        ))}

        <div className="flex justify-between">
          <div className="text-center text-primary font-normal mb-4">Free Delivery</div>
          <div className="text-right text-gray-800 font-normal mb-4">Total: {data[selectedOffer].price}</div>
        </div>

        <button onClick={() => { alert(`Added ${data[selectedOffer].quantity} items!`) }} className="w-full bg-primary hover:bg-primary text-white font-semibold py-3 rounded-lg">
          <span className="text-pink-100 font-extrabold">+</span> Add to Cart
        </button>

        <div className="text-center text-gray-400 text-sm mt-4">
          Powered by <span className="text-pink-700 font-semibold">Pumper</span>
        </div>
      </div>
    </div>
  );
}

export default App;
