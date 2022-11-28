import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CounterComponent} from "./counter/counter.component";
import {PostListComponent} from "./post/post-list/post-list.component";

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'counter',
    pathMatch: 'full',
    component: CounterComponent
  },
  {
    path: 'posts',
    pathMatch: 'full',
    component: PostListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
