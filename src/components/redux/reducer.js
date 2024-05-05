import {
  ADD_ACCESSORIES_TO_BASKET,
  ADD_ALL_TO_BASKET,
  ADD_BEST_TO_BASKET,
  ADD_CONSOLES_TO_BASKET,
  ADD_CONTROLLERS_TO_BASKET,
  ADD_GAMES_TO_BASKET,
  ADD_ONSALE_TO_BASKET,
  REMOVE_FROM_BASKET,
  UPDATE_QUANTITY,
} from "./ActionsName";

const state_w = {
  all: [],
  accessories: [
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_c72ff914003b481ea856501f453e2bb3~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_c72ff914003b481ea856501f453e2bb3~mv2.jpg",
      name: "L503 Headset",
      price: 26.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_9a2583f0a17e48efb075913d90da0dbf~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_9a2583f0a17e48efb075913d90da0dbf~mv2.jpg",
      name: "Echo Headset",
      price: 39.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_5f84ce55a94f43e5a61445ef199f37e6~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_5f84ce55a94f43e5a61445ef199f37e6~mv2.jpg",
      name: "Impact Gaming Chair",
      price: 159.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_85410586580e46ce94659e34046a48c8~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_85410586580e46ce94659e34046a48c8~mv2.jpg",
      name: "Mach Gaming Chair",
      price: 116.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_0067919b3086427cad03a54e61452958~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_0067919b3086427cad03a54e61452958~mv2.jpg",
      name: "X-2 Wireless Mouse",
      price: 24.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_cd96af123e594be889223811cd602f60~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_cd96af123e594be889223811cd602f60~mv2.jpg",
      name: "Blaze Wireless Mouse",
      price: 24.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_7c11d47692f04c1f92a024ad095274ae~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_7c11d47692f04c1f92a024ad095274ae~mv2.jpg",
      name: "Spartan Mechanical Keyboard",
      price: 40.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_641d6a957b634fbd857bc3f06e1feaab~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_641d6a957b634fbd857bc3f06e1feaab~mv2.jpg",
      name: "CO-21 Mechanical Keyboard",
      price: 44.99,
    },
  ],
  sellers: [
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_0ad63666dfda498c87e59e0424307682~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_0ad63666dfda498c87e59e0424307682~mv2.jpg",
      name: "Playbox XZ Gold Edition",
      price: 1000,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_9a2583f0a17e48efb075913d90da0dbf~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_9a2583f0a17e48efb075913d90da0dbf~mv2.jpg",
      name: "Echo Headset",
      price: 39.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_85410586580e46ce94659e34046a48c8~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_85410586580e46ce94659e34046a48c8~mv2.jpg",
      name: "Mach Gaming Chair",
      price: 119.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_0067919b3086427cad03a54e61452958~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_0067919b3086427cad03a54e61452958~mv2.jpg",
      name: "X-2 Wireless Mouse",
      price: 24.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_7c11d47692f04c1f92a024ad095274ae~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_7c11d47692f04c1f92a024ad095274ae~mv2.jpg",
      name: "Spartan Mechanical Keyboard",
      price: 40.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_a288e7752775424cb73f47c163e7421d~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_a288e7752775424cb73f47c163e7421d~mv2.jpg",
      name: "Raptor",
      price: 26.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_58812d9bb7ba47638549b64970fe3bbe~mv2.jpg/v1/fill/w_750,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_58812d9bb7ba47638549b64970fe3bbe~mv2.jpg",
      name: "Wave",
      price: 29.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_e9de4ca4cb7a4cbc9c9e0098bcf68fa4~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_e9de4ca4cb7a4cbc9c9e0098bcf68fa4~mv2.jpg",
      name: "Wave Gen RX",
      price: 579.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_a082fb07d8344bec8bb61e3958c65401~mv2.jpg/v1/fill/w_750,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_a082fb07d8344bec8bb61e3958c65401~mv2.jpg",
      name: "Ancient Souls",
      price: 44.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_261f4ef2535f451faedabc197c6e4a71~mv2.jpg/v1/fill/w_750,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_261f4ef2535f451faedabc197c6e4a71~mv2.jpg",
      name: "Chronosplit",
      price: 39.99,
    },
  ],
  consoles: [
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_235d9b7973a240feabdd9097b36d88b3~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_235d9b7973a240feabdd9097b36d88b3~mv2.jpg",
      name: "Gameflow Black",
      price: 900.0,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_0ad63666dfda498c87e59e0424307682~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_0ad63666dfda498c87e59e0424307682~mv2.jpg",
      name: "Playbox XZ Gold Edition",
      price: 1000,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_38b385f4555847a28ea62dc6c7b2e433~mv2.jpg/v1/fill/w_750,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_38b385f4555847a28ea62dc6c7b2e433~mv2.jpg",
      name: "Veritas VR Set",
      price: 629.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_20c90d44409145b2af2d3b8e5e14c0d8~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_20c90d44409145b2af2d3b8e5e14c0d8~mv2.jpg",
      name: "Gameflow",
      price: 521.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_61886226d1dd46588af52472caed4d0e~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_61886226d1dd46588af52472caed4d0e~mv2.jpg",
      name: "Playbox XZ",
      price: 579.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_e9de4ca4cb7a4cbc9c9e0098bcf68fa4~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_e9de4ca4cb7a4cbc9c9e0098bcf68fa4~mv2.jpg",
      name: "Raptor",
      price: 599.99,
    },
  ],
  controllers: [
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_c43ffddc70424da6bb78612d5a5306fd~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_c43ffddc70424da6bb78612d5a5306fd~mv2.jpg",
      name: "Ghost",
      price: 26.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_a288e7752775424cb73f47c163e7421d~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_a288e7752775424cb73f47c163e7421d~mv2.jpg",
      name: "Raptor",
      price: 26.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_9af40b3e57c3467d8418902ac14ae314~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_9af40b3e57c3467d8418902ac14ae314~mv2.jpg",
      name: "Flint",
      price: 29.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_32bb941c4019487fb57f45a3abb63ff1~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_32bb941c4019487fb57f45a3abb63ff1~mv2.jpg",
      name: "Libra 2.0",
      price: 29.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_dd0f8aabaa0d46bf9e95335654141be0~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_dd0f8aabaa0d46bf9e95335654141be0~mv2.jpg",
      name: "Stealth X",
      price: 29.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_58812d9bb7ba47638549b64970fe3bbe~mv2.jpg/v1/fill/w_750,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_58812d9bb7ba47638549b64970fe3bbe~mv2.jpg",
      name: "Wave",
      price: 29.99,
    },
  ],
  games: [
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_e6644075841a4df5a36a0d9ad85e2cff~mv2.jpg/v1/fill/w_750,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_e6644075841a4df5a36a0d9ad85e2cff~mv2.jpg",
      name: "Dead at Last",
      price: 35.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_eabecf3b32dc445bb0fc09c3890a7ba3~mv2.jpg/v1/fill/w_750,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_eabecf3b32dc445bb0fc09c3890a7ba3~mv2.jpg",
      name: "Kira and the Fading Islands",
      price: 35.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_a082fb07d8344bec8bb61e3958c65401~mv2.jpg/v1/fill/w_750,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_a082fb07d8344bec8bb61e3958c65401~mv2.jpg",
      name: "Ancient Souls",
      price: 35.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_1fced547ddff4698a820b04cbf4e7622~mv2.jpg/v1/fill/w_750,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_1fced547ddff4698a820b04cbf4e7622~mv2.jpg",
      name: "Ice Dome: Exile",
      price: 35.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_261f4ef2535f451faedabc197c6e4a71~mv2.jpg/v1/fill/w_750,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_261f4ef2535f451faedabc197c6e4a71~mv2.jpg",
      name: "Chronosplit",
      price: 35.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_0fc432ddbaa847358c7d2598829b08e8~mv2.jpg/v1/fill/w_750,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_0fc432ddbaa847358c7d2598829b08e8~mv2.jpg",
      name: "Cyber Kid Infinite",
      price: 39.99,
    },
  ],
  onsale: [
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_235d9b7973a240feabdd9097b36d88b3~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_235d9b7973a240feabdd9097b36d88b3~mv2.jpg",
      name: "Gameflow Black",
      price: 900.0,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_c72ff914003b481ea856501f453e2bb3~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_c72ff914003b481ea856501f453e2bb3~mv2.jpg",
      name: "L503 Headset",
      price: 26.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_85410586580e46ce94659e34046a48c8~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_85410586580e46ce94659e34046a48c8~mv2.jpg",
      name: "Mach Gaming Chair",
      price: 116.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_7c11d47692f04c1f92a024ad095274ae~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_7c11d47692f04c1f92a024ad095274ae~mv2.jpg",
      name: "Spartan Mechanical Keyboard",
      price: 40.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_a288e7752775424cb73f47c163e7421d~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_a288e7752775424cb73f47c163e7421d~mv2.jpg",
      name: "Raptor",
      price: 26.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_c43ffddc70424da6bb78612d5a5306fd~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_c43ffddc70424da6bb78612d5a5306fd~mv2.jpg",
      name: "Ghost",
      price: 29.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_20c90d44409145b2af2d3b8e5e14c0d8~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_20c90d44409145b2af2d3b8e5e14c0d8~mv2.jpg",
      name: "Gameflow",
      price: 521.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_e6644075841a4df5a36a0d9ad85e2cff~mv2.jpg/v1/fill/w_750,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_e6644075841a4df5a36a0d9ad85e2cff~mv2.jpg",
      name: "Dead at Last",
      price: 35.99,
    },
    {
      img_url:
        "https://static.wixstatic.com/media/c837a6_eabecf3b32dc445bb0fc09c3890a7ba3~mv2.jpg/v1/fill/w_750,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_eabecf3b32dc445bb0fc09c3890a7ba3~mv2.jpg",
      name: "Kira and the Fading Islands",
      price: 35.99,
    },
  ],
  basket: [],
};
const initial_state = {
  ...state_w,
  all: [
    ...state_w.consoles,
    ...state_w.controllers,
    ...state_w.accessories,
    ...state_w.games,
  ],
  totalPrice: 0,
};

export const reducer = (state = initial_state, action) => {
  // eslint-disable-next-line default-case
  console.log(state.basket);
  switch (action.type) {
    case ADD_ALL_TO_BASKET:
      const allItemToAdd = { ...state.all[action.payload], quantity: 1 }; // Добавляем свойство quantity с значением 1
      return {
        ...state,
        basket: [...state.basket, allItemToAdd],
        totalPrice: state.totalPrice + allItemToAdd.price,
      };
    case ADD_ACCESSORIES_TO_BASKET:
      const accessoriesItemToAdd = {
        ...state.accessories[action.payload],
        quantity: 1,
      };
      return {
        ...state,
        basket: [...state.basket, accessoriesItemToAdd],
        totalPrice: state.totalPrice + accessoriesItemToAdd.price,
      };
    case ADD_BEST_TO_BASKET:
      const bestItemToAdd = { ...state.sellers[action.payload], quantity: 1 };
      return {
        ...state,
        basket: [...state.basket, bestItemToAdd],
        totalPrice: state.totalPrice + bestItemToAdd.price,
      };
    case ADD_CONSOLES_TO_BASKET:
      const consolesItemToAdd = {
        ...state.consoles[action.payload],
        quantity: 1,
      };
      return {
        ...state,
        basket: [...state.basket, consolesItemToAdd],
        totalPrice: state.totalPrice + consolesItemToAdd.price,
      };
    case ADD_CONTROLLERS_TO_BASKET:
      const controllersItemToAdd = {
        ...state.controllers[action.payload],
        quantity: 1,
      };
      return {
        ...state,
        basket: [...state.basket, controllersItemToAdd],
        totalPrice: state.totalPrice + controllersItemToAdd.price,
      };
    case ADD_GAMES_TO_BASKET:
      const gamesItemToAdd = { ...state.games[action.payload], quantity: 1 };
      return {
        ...state,
        basket: [...state.basket, gamesItemToAdd],
        totalPrice: state.totalPrice + gamesItemToAdd.price,
      };
    case ADD_ONSALE_TO_BASKET:
      const onSaleItemToAdd = { ...state.onsale[action.payload], quantity: 1 };
      return {
        ...state,
        basket: [...state.basket, onSaleItemToAdd],
        totalPrice: state.totalPrice + onSaleItemToAdd.price,
      };
    case REMOVE_FROM_BASKET:
      const removedItem = state.basket[action.payload];
      const updatedBasketAfterRemoval = state.basket.filter(
        (item, index) => index !== action.payload
      );

      const totalPriceAfterRemoval =
        state.totalPrice - removedItem.price * removedItem.quantity;

      return {
        ...state,
        basket: updatedBasketAfterRemoval,
        totalPrice: totalPriceAfterRemoval,
      };

    case UPDATE_QUANTITY:
      const { index, quantity } = action.payload;
      const updatedBasket = [...state.basket];
      updatedBasket[index] = {
        ...updatedBasket[index],
        quantity: quantity || 1, // Если quantity не определено, устанавливаем значение в 1
      };

      const totalPrice = updatedBasket.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

      return {
        ...state,
        basket: updatedBasket,
        totalPrice: totalPrice,
      };

    default:
      return state;
  }
};
