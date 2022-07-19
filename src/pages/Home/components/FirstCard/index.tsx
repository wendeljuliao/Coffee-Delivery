import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import imgCoffeeDelivery from "../../../../assets/ImagemCoffeeDelivery.png";
import { Container, Content, ItemsContent, LeftSide } from "./styles";

export function FirstCard() {
  return (
    <Container>
      <Content>
        <LeftSide>
          <h1>
            Encontre o café perfeito
            <br /> para qualquer hora do dia
          </h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />{" "}
            qualquer hora
          </h2>

          <ItemsContent>
            <section>
              <div>
                <ShoppingCart size={16} weight="fill" />
                <span>Compra simples e segura</span>
              </div>
              <div>
                <Timer size={16} weight="fill" />
                <span>Entrega rápida e rastreada</span>
              </div>
            </section>

            <section>
              <div>
                <Package size={16} weight="fill" />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <Coffee size={16} weight="fill" />
                <span>O café chega fresquinho até você</span>
              </div>
            </section>
          </ItemsContent>
        </LeftSide>
        <img src={imgCoffeeDelivery} alt="" />
      </Content>
    </Container>
  );
}
