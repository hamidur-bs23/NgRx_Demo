import {CounterState} from "../counter/state/counter.state";
import {postsState} from "../post/state/posts.state";
import {counterReducer} from "../counter/state/counter.reducer";
import {postsReducer} from "../post/state/posts.reducer";

export interface AppState {
  counterState: CounterState,
  postsState: postsState
}

export const AppReducer = {
  counter: counterReducer,
  posts: postsReducer
}
