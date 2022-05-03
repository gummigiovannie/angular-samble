import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../action/counter.actions';
import { SampleService } from '../../service/sample.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  public currentCount = 0;
  todayDate: any;
  emailid: any;
  formdata: any;
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>, private service: SampleService) {
    this.count$ = store.select('count');
    this.todayDate = service.showTodayDate();
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("", this.passwordvalidation)
    });

  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  public onClickSubmit(data: any) {
    console.log(data);
    alert(data.emailid);
  }

  private passwordvalidation(control: any) {
    console.log(control.value);
    if (control.value.length < 5)
      return { "passwd": true };
    else
      return null;
  }

  private ValidateUrl(control: any) {
    if (!control.value.startsWith('https') || !control.value.includes('.io'))
      return { invalidUrl: true };

    return null;
  }

  public incrementCounter() {
    this.currentCount++;
  }
}
