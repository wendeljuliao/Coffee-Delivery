import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
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
          {Array.from({ length: 2 }, (u, i) => {
            return (
              <>
                <CartCard key={i} />
                <Separator />
              </>
            );
          })}

          <InfosPrice>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
          </InfosPrice>
          <Button name={"CONFIRMAR PEDIDO"} />
        </InfosCoffees>
      </RightSide>
    </CheckoutContainer>
  );
}
