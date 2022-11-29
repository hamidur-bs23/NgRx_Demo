import { createFeature } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { counterReducer } from './counter.reducer';

export const counterFeatureName = 'counter';

export const counterFeature = createFeature<AppState>({
  name: counterFeatureName,
  reducer: counterReducer,
});
