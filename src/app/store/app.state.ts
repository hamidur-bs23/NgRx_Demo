import {CounterState} from "../counter/state/counter.state";
import {PostsState} from "../post/state/postsState";
import {counterReducer} from "../counter/state/counter.reducer";
import {postsReducer} from "../post/state/posts.reducer";
import {TestState} from "../modules/test/state/test.state";

export interface AppState {
  counter: CounterState,
  posts: PostsState,
  test: TestState,
  
}

export const AppReducer = {
  counter: counterReducer,
  posts: postsReducer
}
