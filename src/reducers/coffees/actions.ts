export enum ActionTypes {
  MODIFY_QUANTITY_COFFEE = 'MODIFY_QUANTITY_COFFEE',
  ADD_COFFEE_CART = 'ADD_COFFEE_CART',
  REMOVE_COFFEE_CART = 'REMOVE_COFFEE_CART'
}

export function modifyQuantityCoffeeAction(idCoffee: number, operation: string) {
  return {
    type: ActionTypes.MODIFY_QUANTITY_COFFEE,
    payload: {
      idCoffee,
      operation
    }
  }
}

export function addCoffeeInCartAction(idCoffee: number) {
  return {
    type: ActionTypes.ADD_COFFEE_CART,
    payload: {
      idCoffee,
    }
  }
}

export function removeCoffeCartAction(idCoffee: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE_CART,
    payload: {
      idCoffee
    }
  }
}

