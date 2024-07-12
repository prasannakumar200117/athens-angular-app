import { Component, signal , computed,  Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input() avatar! : string;
@Input() name! : string;

get imagePath() {
  return '../../assets/users/' + this.avatar;
}



  // using signals to access image and user by randomindex in DUMMY_USERS

// selectedUser = signal(DUMMY_USERS[0]);
// imagePath = computed(() => '../../assets/users/' + this.selectedUser().avatar)


// imagePath = computed(() => '../../assets/users/' + this.selectedUser().avatar)

onSelectUser(): void {
  console.log("clicked")
  // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  // this.selectedUser.set(DUMMY_USERS[randomIndex]);
}
}
