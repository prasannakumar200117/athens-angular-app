import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SignalDemoComponent } from './signal-demo/signal-demo.component'; 
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DUMMY_USERS } from './dummy-users';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,UserComponent,FormsModule,CommonModule,SignalDemoComponent,FormComponent,ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'athens-angular-app';
  users = DUMMY_USERS;
  carNames: string[] = [];

  onCarAdded(carName: string) {
    this.carNames.push(carName);
  }

}
