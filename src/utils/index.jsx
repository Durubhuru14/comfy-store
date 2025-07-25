import axios from "axios";

const prodUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: prodUrl,
});

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={index} value={amount}>
        {amount}
      </option>
    );
  });
};
