import {createReducer, on} from "@ngrx/store";
import {customIncrementAction, decrementAction, incrementAction, resetAction} from "./counter.actions";
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
  }),
  on(customIncrementAction, (state, action) => {
    return {
      ...state,
      customCounter: action.value,
      counter: state.counter + action.value,
    }
  })
);

export function counterReducer (state: any, action: any) {
  //console.log(`state: ${state}, action-name: ${action.type}`);
  return _counterReducer(state, action);
}


