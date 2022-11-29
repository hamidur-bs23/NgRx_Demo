import {createFeature, createReducer, on} from "@ngrx/store";
import {initialTestState} from "./test.state";
import * as TestActions from "./test.actions";



export function testReducers(state: any, action: any) {
  return _testReducer(state, action);
}

const _testReducer = createReducer(
  initialTestState,
  on(TestActions.readTestAction, (state) => {
    return {
      ...state,
    }
  }),
  on(TestActions.updateTestAction, (state, action) => {
    return {
      ...state,
      name: action.name,
      testValue: action.testValue
    }
  }),
)
