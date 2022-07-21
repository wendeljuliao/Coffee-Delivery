import { createContext, ReactNode, useReducer } from "react";
import { mocksCoffee } from "../mocks/Coffees";
import {
  addCoffeeInCartAction,
  modifyQuantityCoffeeAction,
  removeCoffeCartAction,
} from "../reducers/coffees/actions";
import { coffeesReducer } from "../reducers/coffees/reducer";

export const CoffeesContext = createContext({} as any);

interface ICoffeesContextProviderProps {
  children: ReactNode;
}

export function CoffeesProvider({ children }: ICoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(coffeesReducer, {
    coffees: mocksCoffee,
  });

  const { coffees } = coffeesState;

  function modifyQuantityCoffee(idCoffee: number, operation: string) {
    dispatch(modifyQuantityCoffeeAction(idCoffee, operation));
  }

  function addCoffeeInCart(idCoffee: number) {
    dispatch(addCoffeeInCartAction(idCoffee));
  }

  function removeCoffeCart(idCoffee: number) {
    dispatch(removeCoffeCartAction(idCoffee));
  }

  const coffeesInCart = coffees.filter((coffee) => coffee.inCart === true);

  const quantityCoffeesInCart = coffeesInCart.length;

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        coffeesInCart,
        quantityCoffeesInCart,
        modifyQuantityCoffee,
        addCoffeeInCart,
        removeCoffeCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
