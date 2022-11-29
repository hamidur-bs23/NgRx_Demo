import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { TestState } from '../state/test.state';
import * as TestGroupActions from '../state/test.actions';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-my-test-compo',
  templateUrl: './my-test-compo.component.html',
  styleUrls: ['./my-test-compo.component.scss'],
})
export class MyTestCompoComponent implements OnInit, OnDestroy {
  testItem: TestState = {
    testName: '',
    testValue: -1,
  };

  formTestName: string = '';
  formTestValue: number = 0;

  destroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select<TestState>((state) => state.test)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        debugger;
        this.testItem.testName = data.testName;
        this.testItem.testValue = data.testValue;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit() {
    this.testItem = {
      testName: this.formTestName,
      testValue: this.formTestValue,
    };

    this.store.dispatch(TestGroupActions.updateTestAction(this.testItem));
  }
}
