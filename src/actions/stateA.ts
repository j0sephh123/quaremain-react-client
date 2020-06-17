import { actionTypes } from '../constants'

export const switchCategory = (category: string) => async (
  dispatch: any, 
  getState: any
) => {

  const dispatchObject = {
    type: actionTypes.SWITCH_CATEGORY,
    payload: {
      category,
    },
  }

  dispatch(dispatchObject);
}