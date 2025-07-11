import { formatPrice } from "../utils";
import { useState } from "react";
const FormRange = ({ label, name, size, price }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(maxPrice || price);

  return (
    <div className="form-control">
      <label htmlFor={name} className="label justify-between cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span className="label-text">{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size} w-full`}
        step={step}
      />
      <div className="flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};
export default FormRange;
