import { useState, React } from 'react';

const PriceRange = () => {
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [currentMin, setCurrentMin] = useState(0);
  const [currentMax, setCurrentMax] = useState(100);

  const handleReset = () => {
    setCurrentMin(minPrice);
    setCurrentMax(maxPrice);
  };

  const handleApply = () => {
    console.log(`Applied Price Range: $${currentMin} - $${currentMax}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-80">
      <h3 className="font-semibold text-lg">Price Range</h3>
      <p className="text-sm text-gray-500">Price Range Details</p>



      <div className="flex flex-col mt-4">
       
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={currentMax}
          onChange={(e) => setCurrentMax(e.target.value)}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
        />
      </div>



      <div className="flex justify-between items-center mt-4">
        <input
          type="number"
          value={currentMin}
          onChange={(e) => setCurrentMin(e.target.value)}
          className="w-24 px-2 py-1 border border-gray-300 rounded-md"
        />
        <span className="mx-2">-</span>
        <input
          type="number"
          value={currentMax}
          onChange={(e) => setCurrentMax(e.target.value)}
          className="w-24 px-2 py-1 border border-gray-300 rounded-md"
        />
      </div>



      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handleReset}
          className="text-sm text-blue-500 flex items-center space-x-1"
        >
          <span className="material-icons">refresh</span>
          <span>Reset</span>
        </button>
        <button
          onClick={handleApply}
          className="bg-black text-white px-4 py-1 rounded-md"
        >
          Apply
        </button>
      </div>




    </div>
  );
};

export default PriceRange;
