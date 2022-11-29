import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTestCompoComponent } from './my-test-compo/my-test-compo.component';
import { StoreModule } from '@ngrx/store';
import { testFeature } from './state/test.features';
import { TestRoutingModule } from './test-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MyTestCompoComponent],
  imports: [
    SharedModule,
    TestRoutingModule,
    // StoreModule.forFeature(fromTestReducers.testFeatureName, fromTestReducers.testReducers),
    StoreModule.forFeature(testFeature),
  ],
})
export class TestModule {}
