import { ActionI } from "../interfaces/ActionI";

export const state = (state = [], action: ActionI) => {
  switch (action.type) {
    case "asd": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
