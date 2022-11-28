import {createReducer, on} from "@ngrx/store";
import {decrementAction, incrementAction, resetAction} from "./counter.actions";
import {initialCounterState} from "./counter.state";

const _counterReducer = createReducer(
  initialCounterState,
  on(incrementAction, (state) => {
    return {
      ...state,
      counter: state.counter + 1
    }
  }),
  on(decrementAction, (state) => {
    return {
      ...state,
      counter: state.counter - 1
    }
  }),
  on(resetAction, (state) => {
    return {
      ...state,
      counter: 0
    }
  })
);

export function counterReducer (state: any, action: any) {
  console.log(`state: ${state}, action-name: ${action}`);
  return _counterReducer(state, action);
}


