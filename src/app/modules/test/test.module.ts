import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTestCompoComponent } from './my-test-compo/my-test-compo.component';
import { StoreModule } from '@ngrx/store';
import { testFeature } from './state/test.features';

@NgModule({
  declarations: [MyTestCompoComponent],
  imports: [
    CommonModule,
    // StoreModule.forFeature(fromTestReducers.testFeatureName, fromTestReducers.testReducers),
    StoreModule.forFeature(testFeature),
  ],
})
export class TestModule {}
