import { ActionI } from "../interfaces/ActionI";

const initialState = [
  { path: "/", name: "Quaremain" },
  { path: "/about", name: "About" },
  { path: "/settings", name: "Settings" },
  { path: "/survival", name: "Survival" },
];

export const sidebar = (state = initialState, action: ActionI) => {
  switch (action.type) {
    default:
      return state;
  }
};
