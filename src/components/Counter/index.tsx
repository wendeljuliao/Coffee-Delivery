import { CounterStyle } from "./styles";
import { Minus, Plus } from "phosphor-react";
import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";

interface ICounterProps {
  idCoffee: number;
  quantity: number;
}

export function Counter({ idCoffee, quantity }: ICounterProps) {
  const { modifyQuantityCoffee } = useContext(CoffeesContext);

  function handleAddQuantityCoffee() {
    modifyQuantityCoffee(idCoffee, "add");
  }

  function handleSubQuantityCoffee() {
    if (quantity > 1) modifyQuantityCoffee(idCoffee, "sub");
  }

  return (
    <CounterStyle disabledMinus={quantity <= 1}>
      <Minus size={14} weight="bold" onClick={handleSubQuantityCoffee} />
      <span>{quantity}</span>
      <Plus size={14} weight="bold" onClick={handleAddQuantityCoffee} />
    </CounterStyle>
  );
}
