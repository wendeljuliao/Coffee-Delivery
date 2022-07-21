import { CartStyle } from "./styles";
import { ShoppingCart } from "phosphor-react";

export function Cart() {
  return (
    <CartStyle>
      <ShoppingCart size={22} weight="fill" />
    </CartStyle>
  );
}
