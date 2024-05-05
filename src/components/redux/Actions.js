import {
  ADD_ACCESSORIES_TO_BASKET,
  ADD_ALL_TO_BASKET,
  ADD_BEST_TO_BASKET,
  ADD_CONSOLES_TO_BASKET,
  ADD_CONTROLLERS_TO_BASKET,
  ADD_GAMES_TO_BASKET,
  ADD_ONSALE_TO_BASKET,
  INIT_BASKET,
  REMOVE_FROM_BASKET,
  UPDATE_QUANTITY,
} from "./ActionsName";

export const addAllToBasket = (index, totalPrice) => {
  return {
    type: ADD_ALL_TO_BASKET,
    payload: index,
  };
};
export const addAccessoriesToBasket = (index, totalPrice) => {
  return {
    type: ADD_ACCESSORIES_TO_BASKET,
    payload: index,
  };
};

export const addBestToBasket = (index, totalPrice) => {
  return {
    type: ADD_BEST_TO_BASKET,
    payload: index,
  };
};
export const addConsolesToBasket = (index, totalPrice) => {
  return {
    type: ADD_CONSOLES_TO_BASKET,
    payload: index,
  };
};

export const addControllersToBasket = (index, totalPrice) => {
  return {
    type: ADD_CONTROLLERS_TO_BASKET,
    payload: index,
  };
};
export const addGamesToBasket = (index, totalPrice) => {
  return {
    type: ADD_GAMES_TO_BASKET,
    payload: index,
  };
};
export const addOnSaleToBasket = (index, totalPrice) => {
  return {
    type: ADD_ONSALE_TO_BASKET,
    payload: index,
  };
};
export const removeFromBasket = (index, totalPrice) => {
  return {
    type: REMOVE_FROM_BASKET,
    payload: index,
  };
};
export const updateQuantity = (index, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: { index, quantity },
  };
};
