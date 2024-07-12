import { Component,signal,effect,computed } from '@angular/core';

@Component({
  selector: 'app-signal-demo',
  standalone: true,
  imports: [],
  templateUrl: './signal-demo.component.html',
  styleUrl: './signal-demo.component.css'
})
export class SignalDemoComponent {
 // Step 1: Create a signal
 counter = signal(0);

 constructor() {
   // Step 2: Create an effect to log the counter value
   effect(() => {
     console.log(`Counter value is: ${this.counter()}`);
   });
 }

 // Step 3: Method to increment the counter
 increment() {
   this.counter.set(this.counter() + 1);
 }
}
