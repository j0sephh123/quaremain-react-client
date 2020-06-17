import { ActionI } from "../interfaces/ActionI";
import { StateI, ErrorI } from "../interfaces/StateI";
import { actionTypes } from "../constants";

const initialState: StateI = {
  category: "food",
  stocks: [
    {name: "food", icon: "fas fa-hamburger", list: []},
    {name: "water", icon: "fas fa-tint", list: []},
    {name: "medicine", icon: "fas fa-pills", list: []},
    {name: "weapon", icon: "fas fa-shield-alt", list: []},
  ],
  initialLoad: false,
  errors: {
    "api/get": "",
  },
};

export const state = (state = initialState, action: ActionI) => {
  switch (action.type) {
    case actionTypes.SET_ERRORS: {
      const { errorType, message } = action.payload;

      const updatedErrors = {
        ...state.errors,
        [errorType]: message,
      }

      return {
        ...state,
        errors: updatedErrors,
      };
    }
    case actionTypes.SWITCH_CATEGORY: {
      const { category } = action.payload;
      
      return {
        ...state,
        category,
      };
    }
    default:
      return state;
  }
};
