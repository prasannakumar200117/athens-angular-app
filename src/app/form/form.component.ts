import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  carName: string = "";

  // @Output() carAdded = new EventEmitter<string>();      using output decorator /event emitter

  onEnterCarName() {
    // sending value using event emitter

    // this.carAdded.emit(this.carName);

    // sending value using service


    this.carName = ""; // Clear input after emitting
  }
}
