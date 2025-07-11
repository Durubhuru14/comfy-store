import { useSelector } from "react-redux";
import { CartItem } from ".";

const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div>
      {cartItems.map((cartItem) => {
        return <CartItem key={cartItem.cartId} cartItem={cartItem} />;
      })}
    </div>
  );
};
export default CartItemsList;
