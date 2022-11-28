import {createAction, props} from "@ngrx/store";
import {Post} from "./posts.state";

export const addPostAction = createAction(
  '[Post] post-count-total',
  props<{
    name: 'New post 103',
    description: 'New description for 103'
  }>());
