import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import {
  SuccessContainer,
  InfosOrder,
  Content,
  BorderInfosOrder,
} from "./styles";

import illustration from "../../assets/Illustration.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function Success() {
  const { dataUser } = useContext(UserContext);

  const { street, number, methodPayment } = dataUser;

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
                Entrega em{" "}
                <strong>
                  {street},{number}
                </strong>
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
                <strong>{methodPayment}</strong>
              </p>
            </div>
          </InfosOrder>
        </BorderInfosOrder>
        <img src={illustration} alt="" />
      </Content>
    </SuccessContainer>
  );
}
