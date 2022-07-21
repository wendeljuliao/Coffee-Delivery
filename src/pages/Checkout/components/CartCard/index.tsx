import { CardStyle, InfoCard } from "./styles";

import temporaryImage from "../../../../assets/Type=Expresso.svg";
import { Counter } from "../../../../components/Counter";
import { ButtonSmall } from "../../../../components/ButtonSmall";
import { Trash } from "phosphor-react";

export function CartCard() {
  return (
    <CardStyle>
      <InfoCard>
        <img src={temporaryImage} alt="" />
        <div>
          <span>Expresso Tradicional</span>
          <div className="actions">
            <Counter />
            <ButtonSmall icon={<Trash size={16} />} name={"REMOVER"} />
          </div>
        </div>
      </InfoCard>
      <span>R$ 9,90</span>
    </CardStyle>
  );
}
