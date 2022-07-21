import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import React, { useContext } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { CoffeesContext } from "../../contexts/CoffeesContext";
import { mappingCoffees } from "../../utils/mapping-coffee-images";
import { CartCard } from "./components/CartCard";
import { Select } from "./components/Select";
import {
  CheckoutContainer,
  LeftSide,
  RightSide,
  InfosOrder,
  InfosCoffees,
  AddressContent,
  PaymentContent,
  HeaderContent,
  Separator,
  InfosPrice,
} from "./styles";

export function Checkout() {
  const { coffeesInCart } = useContext(CoffeesContext);

  const totalValueCoffees = coffeesInCart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const formattedTotalValueCoffees = String(
    totalValueCoffees.toFixed(2)
  ).replace(".", ",");

  const totalDelivery = 3.5;
  const formattedTotalDelivery = String(totalDelivery.toFixed(2)).replace(
    ".",
    ","
  );

  const totalOrder = totalValueCoffees + totalDelivery;

  const formattedTotalOrder = String(totalOrder.toFixed(2)).replace(".", ",");

  return (
    <CheckoutContainer>
      <LeftSide>
        <h2>Complete seu pedido</h2>
        <InfosOrder>
          <AddressContent>
            <HeaderContent className="address-text">
              <MapPinLine size={22} />
              <div>
                <h3>Endereço de Entrega</h3>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </HeaderContent>
            <section className="inputs">
              <Input placeholder="CEP" width={"12.5rem"} />
              <Input placeholder="Rua" width={"100%"} />
              <div>
                <Input placeholder="Número" width={"12.5rem"} />
                <Input placeholder="Complemento" width={"21.75rem"} />
              </div>
              <div>
                <Input placeholder="Bairro" width={"12.5rem"} />
                <Input placeholder="Cidade" width={"17.25rem"} />
                <Input placeholder="UF" width={"3.75rem"} />
              </div>
            </section>
          </AddressContent>
          <PaymentContent>
            <HeaderContent className="payment-text">
              <CurrencyDollar size={22} />
              <div>
                <h3>Pagamento</h3>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </HeaderContent>
            <section className="payment-methods">
              <Select
                icon={<CreditCard size={16} />}
                name={"CARTÃO DE CRÉDITO"}
              />
              <Select icon={<Bank size={16} />} name={"CARTÃO DE DÉBITO"} />
              <Select icon={<Money size={16} />} name={"DINHEIRO"} />
            </section>
          </PaymentContent>
        </InfosOrder>
      </LeftSide>
      <RightSide>
        <h2>Cafés selecionados</h2>
        <InfosCoffees>
          {coffeesInCart.map((coffee: any) => {
            return (
              <React.Fragment key={coffee.id}>
                <CartCard
                  id={coffee.id}
                  name={coffee.name}
                  price={coffee.price}
                  quantity={coffee.quantity}
                  img={mappingCoffees[coffee.name].image}
                />
                <Separator />
              </React.Fragment>
            );
          })}

          <InfosPrice>
            <div>
              <span>Total de itens</span>
              <span>R$ {formattedTotalValueCoffees}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ {formattedTotalDelivery}</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ {formattedTotalOrder}</strong>
            </div>
          </InfosPrice>
          <Button name={"CONFIRMAR PEDIDO"} />
        </InfosCoffees>
      </RightSide>
    </CheckoutContainer>
  );
}
