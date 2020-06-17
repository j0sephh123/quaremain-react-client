import { actionTypes } from "../constants";
import { Stock, Food, Water } from "../interfaces/State";

/**
 * this isn't ok, but I haven't found yet how force stocks to be:
 * Stock[] | Food[] | Water[]
 * (stocks: Stock[] | Food[] | Water[]) -> this doesn't achieve anything
 *  
*/ 
export const loadStocks = (stocks: Stock[] | Food[] | Water[]) => async (
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
