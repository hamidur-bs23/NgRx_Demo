import { createReducer, on } from '@ngrx/store';
import { initialTestState } from './test.state';
import * as TestActions from './test.actions';

export function testReducers(state: any, action: any) {
  return _testReducer(state, action);
}

const _testReducer = createReducer(
  initialTestState,
  on(TestActions.readTestAction, (state) => {
    console.log(
      `test-reducer -> readTestAction --> data: ${state.testName}, ${state.testValue}`
    );

    return {
      ...state,
    };
  }),
  on(TestActions.updateTestAction, (state, action) => {
    console.log(
      `test-reducer -> ${action.type} --> data: ${state.testName}, ${state.testValue}`
    );

    return {
      ...state,
      testName: action.testName,
      testValue: action.testValue,
    };
  })
);
