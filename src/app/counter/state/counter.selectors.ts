import {createFeature} from "@ngrx/store";
import {initialCounterState} from "./counter.state";
import {AppState} from "../../store/app.state";
import {counterReducer} from "./counter.reducer";

const countersFeature = createFeature<AppState>({
  name: 'counter',
  reducer: counterReducer
});

export const {
  name,
  reducer,
  selectCounterState,
  // selectCustomCounter,
  // selectCounter
} = countersFeature;

//
const selectCounter = (state: AppState) => state.counter;
const selectPosts = (state: AppState) => state.posts;

const selectSomething = createFeature
