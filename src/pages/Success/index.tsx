import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import {
  SuccessContainer,
  InfosOrder,
  Content,
  BorderInfosOrder,
} from "./styles";

import illustration from "../../assets/Illustration.svg";

export function Success() {
  return (
    <SuccessContainer>
      <section>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </section>

      <Content>
        <BorderInfosOrder>
          <InfosOrder>
            <div>
              <MapPin size={32} weight="fill" />
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </p>
            </div>
            <div>
              <Timer size={32} weight="fill" />

              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            </div>
            <div>
              <CurrencyDollar size={32} />
              <p>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </InfosOrder>
        </BorderInfosOrder>
        <img src={illustration} alt="" />
      </Content>
    </SuccessContainer>
  );
}
