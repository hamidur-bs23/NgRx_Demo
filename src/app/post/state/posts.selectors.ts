import { createFeature } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { postsReducer } from './posts.reducer';

const postsFeatureSelectors = createFeature<AppState>({
  name: 'posts',
  reducer: postsReducer,
});

export const { selectCounterState, selectPostsState } = postsFeatureSelectors;
