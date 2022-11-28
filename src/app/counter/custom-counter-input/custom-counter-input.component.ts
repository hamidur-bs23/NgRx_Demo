import {Component, OnDestroy, OnInit} from '@angular/core';
import {CounterState} from "../state/counter.state";
import {Store} from "@ngrx/store";
import {customIncrementAction} from "../state/counter.actions";
import {Subject, takeUntil} from "rxjs";
import {selectCustomCounter} from "../state/counter.selectors";

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit, OnDestroy {
  customIncrementInput: number = 0;
  destroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store<{ counter: CounterState }>) {
  }

  ngOnInit(): void {
    this.store.select(selectCustomCounter)
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe((customCounter: number) => {
        console.log("custom-counter-input -> customCounter");
        this.customIncrementInput = customCounter;
    })
  }

  onCustomIncrement() {
    this.store.dispatch(customIncrementAction({
      value: +this.customIncrementInput
    }));
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

}
