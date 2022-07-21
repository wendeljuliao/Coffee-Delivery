import { IconButtonStyle } from "./styles";
import { ShoppingCart } from "phosphor-react";

export function IconButton() {
  return (
    <IconButtonStyle>
      <ShoppingCart size={22} weight="fill" />
    </IconButtonStyle>
  );
}
