import React, { ChangeEvent, InvalidEvent, useContext, useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
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

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const newUserInfosValidationSchema = zod.object({
  cep: zod.string().min(9, "Digite 8 caracteres").max(9),
  street: zod.string().min(1, "Digite 8 caracteres").max(60),
  number: zod.string().min(1, "Informe o número").max(8),
  district: zod.string().min(1, "Informe o Bairro").max(30),
  city: zod.string().min(1, "Informe a cidade").max(30),
  uf: zod.string().min(2, "Informe a UF").max(2),
});

interface INewUserInfos {
  cep: string;
  street: string;
  number: string;
  district: string;
  city: string;
  uf: string;
}

export function Checkout() {
  const [complement, setComplement] = useState("");
  const [methodPayment, setMethodPayment] = useState<string | null>(null);
  const { coffeesInCart, quantityCoffeesInCart, cleanAllInCart } =
    useContext(CoffeesContext);
  const { saveDataUser } = useContext(UserContext);
  const navigate = useNavigate();

  const newUserInfosForm = useForm<INewUserInfos>({
    resolver: zodResolver(newUserInfosValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      number: "",
      district: "",
      city: "",
      uf: "",
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = newUserInfosForm;

  function createNewUserInfos(data: INewUserInfos) {
    saveDataUser({ ...data, methodPayment, complement });
    reset();

    cleanAllInCart();

    navigate("/success");
  }

  function cepFormatted(e: ChangeEvent<HTMLInputElement>) {
    setTimeout(() => {
      if (e.target.value.length === 5) {
        e.target.value = String(e.target.value) + "-";
      }
    }, 100);
  }

  function changeValueComplement(e: ChangeEvent<HTMLInputElement>) {
    setComplement(e.target.value);
  }

  function invalidInput(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity("Inválido");
  }

  const totalValueCoffees = coffeesInCart.reduce(
    (sum: number, item: any) => sum + item.quantity * item.price,
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
    <CheckoutContainer onSubmit={handleSubmit(createNewUserInfos)}>
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
            <FormProvider {...newUserInfosForm}>
              <section className="inputs">
                <Input
                  id="cep"
                  placeholder="CEP"
                  maxLength={9}
                  width={"12.5rem"}
                  required
                  handleCepFormatted={cepFormatted}
                />
                <Input id="street" placeholder="Rua" width={"100%"} required />
                <div>
                  <Input
                    id="number"
                    placeholder="Número"
                    width={"12.5rem"}
                    required
                  />
                  <Input
                    id="complement"
                    placeholder="Complemento"
                    width={"21.75rem"}
                    valueField={complement}
                    setValueField={changeValueComplement}
                  />
                </div>
                <div>
                  <Input
                    id="district"
                    placeholder="Bairro"
                    width={"12.5rem"}
                    required
                  />
                  <Input
                    id="city"
                    placeholder="Cidade"
                    width={"17.25rem"}
                    required
                  />
                  <Input
                    id="uf"
                    placeholder="UF"
                    width={"3.75rem"}
                    maxLength={2}
                    required
                  />
                </div>
              </section>
            </FormProvider>
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
                methodPayment={methodPayment}
                setMethodPayment={setMethodPayment}
              />
              <Select
                icon={<Bank size={16} />}
                name={"CARTÃO DE DÉBITO"}
                methodPayment={methodPayment}
                setMethodPayment={setMethodPayment}
              />
              <Select
                icon={<Money size={16} />}
                name={"DINHEIRO"}
                methodPayment={methodPayment}
                setMethodPayment={setMethodPayment}
              />
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
          <Button
            name={"CONFIRMAR PEDIDO"}
            type="submit"
            disabled={quantityCoffeesInCart <= 0 || !methodPayment}
          />
        </InfosCoffees>
      </RightSide>
    </CheckoutContainer>
  );
}
