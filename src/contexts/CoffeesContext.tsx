import { createContext, ReactNode, useEffect, useReducer } from "react";
import { mocksCoffee } from "../mocks/Coffees";
import {
  addCoffeeInCartAction,
  cleanAllAction,
  modifyQuantityCoffeeAction,
  removeCoffeCartAction,
} from "../reducers/coffees/actions";
import { coffeesReducer } from "../reducers/coffees/reducer";

export const CoffeesContext = createContext({} as any);

interface ICoffeesContextProviderProps {
  children: ReactNode;
}

export function CoffeesProvider({ children }: ICoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    coffeesReducer,
    {
      coffees: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:coffees-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return mocksCoffee;
    }
  );

  const { coffees } = coffeesState;

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesState);

    localStorage.setItem("@coffee-delivery:coffees-state-1.0.0", stateJSON);
  }, [coffeesState]);

  function modifyQuantityCoffee(idCoffee: number, operation: string) {
    dispatch(modifyQuantityCoffeeAction(idCoffee, operation));
  }

  function addCoffeeInCart(idCoffee: number) {
    dispatch(addCoffeeInCartAction(idCoffee));
  }

  function removeCoffeCart(idCoffee: number) {
    dispatch(removeCoffeCartAction(idCoffee));
  }

  function cleanAllInCart() {
    dispatch(cleanAllAction());
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
        cleanAllInCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
