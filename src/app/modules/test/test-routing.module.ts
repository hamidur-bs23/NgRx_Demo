import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTestCompoComponent } from './my-test-compo/my-test-compo.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MyTestCompoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}
