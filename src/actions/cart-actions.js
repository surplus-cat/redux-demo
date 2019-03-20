export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export const ASYNCUPDATE = 'ASYNCUPDATE';

export function addGUN(product, quantity) {
  return {
    type: ASYNCUPDATE,
    payload: { product, quantity }
  }
}

export function addToCart(product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: { product, quantity, unitCost }
  }
}

export function updateCart(product, quantity, unitCost) {
  return {
    type: UPDATE_CART,
    payload: {
      product,
      quantity,
      unitCost
    }
  }
}

export function deleteFromCart(product) {
  return {
    type: DELETE_FROM_CART,
    payload: {
      product
    }
  }
}