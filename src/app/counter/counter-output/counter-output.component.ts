import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../state/counter.state";
import {Subject, takeUntil} from "rxjs";
import {selectCounter} from "../state/counter.selectors";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter: number = -999;
  destroy$ = new Subject<void>();


  constructor(private store: Store<CounterState>) {
  }

  ngOnInit(): void {
    this.store.select(selectCounter).pipe(
      takeUntil(this.destroy$)
    ).subscribe(counter => {
      console.log("counter-output -> counter");
      this.counter = counter;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

}
