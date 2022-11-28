import {initialPostsState, postsState} from "./posts.state";
import {createReducer, on} from "@ngrx/store";
import {addPostAction} from "./posts.actions";

const _postsReducer = createReducer(
  initialPostsState,
  on(addPostAction, (state, action) => {
    debugger;
    console.log(action.type, state);

    const newState: postsState = {
       ...state
    };

    newState.posts.push({
      id: state.posts.length + 1,
      title: action.name,
      description: action.description
    });

    return newState;
  }),

);
export function postsReducer (state: any, action: any) {
  return _postsReducer(state,  action);
}
