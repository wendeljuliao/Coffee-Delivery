import { IconButtonStyle } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";

interface IIconButtonProps {
  handleAddCoffeeInCart: () => void;
}

export function IconButton({ handleAddCoffeeInCart }: IIconButtonProps) {
  const { setActiveCoffees } = useContext(CoffeesContext);

  return (
    <IconButtonStyle onClick={handleAddCoffeeInCart}>
      <ShoppingCart size={22} weight="fill" />
    </IconButtonStyle>
  );
}
