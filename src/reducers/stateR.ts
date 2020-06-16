import { ActionI } from "../interfaces/ActionI";
import { StateI } from "../interfaces/StateI"

const initialState: StateI = {
  currentStock: "food",
  stocks: [
    {name: "food", icon: "fas fa-hamburger"},
    {name: "water", icon: "fas fa-tint"},
    {name: "medicine", icon: "fas fa-pills"},
    {name: "weapon", icon: "fas fa-shield-alt"},
  ],
};

export const state = (state = initialState, action: ActionI) => {
  switch (action.type) {
    case "asd": {
      console.log({action, a: 1});
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
