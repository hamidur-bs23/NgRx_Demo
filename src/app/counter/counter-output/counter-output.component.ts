import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Subject, takeUntil } from 'rxjs';
import { selectCounterState } from '../state/counter.selectors';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter: number = -999;
  destroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select<CounterState>((state) => state.counter)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log('counter-output -> counter');
        this.counter = data.counter;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
