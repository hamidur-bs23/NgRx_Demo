import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../state/counter.state";
import {Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter: number = -999;
  destroy$ = new Subject<void>();


  constructor(private store: Store<CounterState>) { }

  ngOnInit(): void {
    this.store.select('counter').pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe((data: CounterState) => {
      this.counter = data.counter;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

}
