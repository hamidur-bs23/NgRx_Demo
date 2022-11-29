import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrementAction,
  incrementAction,
  resetAction,
} from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss'],
})
export class CounterButtonsComponent implements OnInit {
  constructor(private store: Store<CounterState>) {}

  ngOnInit(): void {}

  increment() {
    this.store.dispatch(incrementAction());
  }

  decrement() {
    this.store.dispatch(decrementAction());
  }

  reset() {
    this.store.dispatch(resetAction());
  }
}
