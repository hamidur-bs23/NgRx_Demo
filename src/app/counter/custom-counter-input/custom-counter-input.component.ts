import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrementAction } from '../state/counter.actions';
import { Subject, takeUntil } from 'rxjs';
import { AppState } from '../../store/app.state';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss'],
})
export class CustomCounterInputComponent implements OnInit, OnDestroy {
  customIncrementInput: number = 0;
  destroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select<CounterState>((state) => state.counter)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log('custom-counter-input -> customCounter');
        this.customIncrementInput = data.customCounter;
      });
  }

  onCustomIncrement() {
    this.store.dispatch(
      customIncrementAction({
        value: +this.customIncrementInput,
      })
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
