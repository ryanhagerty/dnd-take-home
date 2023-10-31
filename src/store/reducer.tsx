import { combineReducers } from "redux";
import { initialState } from "./initialState";
import { ADD_COUNTER, MIN_COUNTER } from "./consts";

interface ActionType {
  type: string;
}

export function skillPointer(state = initialState, action: ActionType) {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        skillPoints: state.skillPoints + 1,
      };

    case MIN_COUNTER:
      return {
        skillPoints: state.skillPoints - 1,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ skillPointer });

export default rootReducer;
