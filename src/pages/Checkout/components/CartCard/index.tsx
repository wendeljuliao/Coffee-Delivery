import { useContext } from "react";
import { CoffeesContext } from "../../../../contexts/CoffeesContext";
import { CardStyle, InfoCard } from "./styles";

import { Counter } from "../../../../components/Counter";
import { ButtonSmall } from "../../../../components/ButtonSmall";
import { Trash } from "phosphor-react";

interface ICartCard {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

export function CartCard({ id, name, price, quantity, img }: ICartCard) {
  const { removeCoffeCart } = useContext(CoffeesContext);
  const numberFormatted = String(price).padEnd(4, "0").replace(".", ",");

  function removeCart() {
    removeCoffeCart(id);
  }

  return (
    <CardStyle>
      <InfoCard>
        <img src={img} alt="" />
        <div>
          <span>{name}</span>
          <div className="actions">
            <Counter idCoffee={id} quantity={quantity} />
            <ButtonSmall
              icon={<Trash size={16} />}
              name={"REMOVER"}
              handleRemoveCoffeeCart={removeCart}
            />
          </div>
        </div>
      </InfoCard>
      <span>{numberFormatted}</span>
    </CardStyle>
  );
}
