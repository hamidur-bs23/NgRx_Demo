import {initialPostsState, PostsState} from "./postsState";
import {createReducer, on} from "@ngrx/store";
import {addPostAction} from "./posts.actions";

const _postsReducer = createReducer(
  initialPostsState,
  on(addPostAction, (state, action) => {
    const id = state.posts.length + 1;

    const newState: PostsState = {
       posts: [...state.posts,
         {
           id: id,
           title: action.title + id,
           description: action.description + id
         }],
    };
    return newState;
  }),

);
export function postsReducer (state: any, action: any) {
  return _postsReducer(state,  action);
}
