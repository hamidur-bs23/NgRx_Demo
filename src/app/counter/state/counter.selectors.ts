import {createFeature, createReducer} from "@ngrx/store";
import {initialCounterState} from "./counter.state";

const counterFeatureSelector = createFeature({
  name: 'counter',
  reducer: createReducer(initialCounterState),
});

export const {
  selectCustomCounter,
  selectCounter
} = counterFeatureSelector;

// const {
//   selectProductsState, // type: MemoizedSelector<Record<string, any>, ProductsState>
//   selectProducts, // type: MemoizedSelector<Record<string, any>, Product[]>
//   selectSelectedId, // type: MemoizedSelector<Record<string, any, string | null>
// } = productsFeature;
