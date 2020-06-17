import { actionTypes } from "../constants";
import { Food, Water, Stock } from "../interfaces/State";

export const loadStocks = (stocks) => async (
  dispatch: any,
  getState: any
) => {
  console.log(stocks);

  // const dispatchObject = {
  //   type: actionTypes.SWITCH_CATEGORY,
  //   payload: {
  //     a : 5,
  //   },
  // }

  // dispatch(dispatchObject);
};

export const switchCategory = (category: string) => async (
  dispatch: any,
  getState: any
) => {
  const dispatchObject = {
    type: actionTypes.SWITCH_CATEGORY,
    payload: {
      category,
    },
  };

  dispatch(dispatchObject);
};
