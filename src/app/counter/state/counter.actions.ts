import {createAction, props} from "@ngrx/store";

export const incrementAction = createAction('[Counter] increment');
export const decrementAction = createAction('[Counter] decrement');
export const resetAction = createAction('[Counter] reset');
export const customIncrementAction = createAction(
  '[Counter] customIncrement',
  props<{value: number}>());


