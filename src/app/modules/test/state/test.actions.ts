import { createAction, props } from '@ngrx/store';
import { TestState } from './test.state';

export const readTestAction = createAction('[My Test Compo Page] readTest');

export const updateTestAction = createAction(
  '[My Test Compo Page] updateTest',
  props<TestState>()
);
