
import { ActionEx, CustomerActionTypes } from '../actions/customers.actions';

export const initialState = [];

export function CustomerReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case CustomerActionTypes.Add:
      console.log(111)
      return [...state, action.payload];
    case CustomerActionTypes.Remove:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    case CustomerActionTypes.Send:
      console.log(2342, action.payload)
      return state;
    default:
      return state;
  }
}