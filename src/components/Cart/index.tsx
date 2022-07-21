import { CartStyle } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const { quantityCoffeesInCart } = useContext(CoffeesContext);
  const navigate = useNavigate();

  function redirectToCheckout() {
    navigate("/checkout");
  }

  return (
    <CartStyle
      onClick={redirectToCheckout}
      disabled={quantityCoffeesInCart === 0}
    >
      <ShoppingCart size={22} weight="fill" />
      {!!quantityCoffeesInCart && (
        <div>
          <span>{quantityCoffeesInCart}</span>
        </div>
      )}
    </CartStyle>
  );
}
