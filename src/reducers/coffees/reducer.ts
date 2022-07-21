import { ActionTypes } from "./actions";

export interface Coffee {
  id:number;
  name:string;
  description:string;
  tags: string[];
  price: number;
  quantity: number;
  inCart?: boolean;
}

interface CoffeesState {
  coffees: Coffee[];
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.MODIFY_QUANTITY_COFFEE: {
      return {
        ...state,
        coffees: state.coffees.map((coffee) => {
          if (coffee.id === action.payload.idCoffee) {
            if (action.payload.operation === "add")
              return {...coffee, quantity: coffee.quantity + 1}
            return {...coffee, quantity: coffee.quantity - 1}
          } else {
            return coffee;
          }
        })
      }
    }

    case ActionTypes.ADD_COFFEE_CART: {
      return {
        ...state,
        coffees: state.coffees.map((coffee) => {
          if (coffee.id === action.payload.idCoffee) {
            return {...coffee, inCart: true}
          }
          return {...coffee};
        })
      }
    }

    case ActionTypes.REMOVE_COFFEE_CART: 
      return {
        ...state,
        coffees: state.coffees.map((coffee) => {
          if (coffee.id === action.payload.idCoffee) {
            return {...coffee, inCart: false}
          }
          return {...coffee};
        })
      }
    
    default:
      return state

  }
}