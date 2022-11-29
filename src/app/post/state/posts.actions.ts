import { createAction, props } from '@ngrx/store';
import { Post } from './postsState';

export const addPostAction = createAction(
  '[Post] post-count-total',
  props<Post>()
);
