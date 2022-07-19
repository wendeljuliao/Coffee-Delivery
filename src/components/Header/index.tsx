import coffeLogo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderContainer, ActionsContent } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeLogo} alt="Logo" />

      <ActionsContent>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <div>
          <ShoppingCart size={22} weight="fill" />
        </div>
      </ActionsContent>
    </HeaderContainer>
  );
}
