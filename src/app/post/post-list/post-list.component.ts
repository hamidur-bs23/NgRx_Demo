import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState} from "../../store/app.state";
import {Store} from "@ngrx/store";
import {Post, PostsState} from "../state/postsState";
import {Subject, takeUntil, tap} from "rxjs";
import {addPostAction} from "../state/posts.actions";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  destroy$: Subject<void> = new Subject<void>();
  posts: Post[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select<PostsState>(state => state.posts)
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe((data: PostsState) => {
      console.log("post-list -> posts");
        this.posts = data.posts;
    })
  }

  onAddNewPost(){
    const newPost: Post = {
      id: 103,
      title: 'New post ',
      description: 'New description for '
    }
    this.store.dispatch(addPostAction(newPost));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
