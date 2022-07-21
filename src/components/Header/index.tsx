import coffeLogo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderContainer, ActionsContent } from "./styles";
import { Cart } from "../Cart";

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeLogo} alt="Logo" />

      <ActionsContent>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <Cart />
      </ActionsContent>
    </HeaderContainer>
  );
}
