import coffeLogo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderContainer, ActionsContent } from "./styles";
import { Cart } from "../Cart";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={coffeLogo} alt="Logo" />
      </Link>

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
