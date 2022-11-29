import {createFeature} from "@ngrx/store";
import {testReducers} from "./test.reducers";
import {AppState} from "../../../store/app.state";

export const testFeatureName = 'test';

export const testFeature = createFeature<AppState>({
  name: testFeatureName,
  reducer: testReducers
});
