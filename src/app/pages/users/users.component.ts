import { Component } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  //users: String[] = ['Fabio', 'Maria', 'Carla', 'Roberto']

  users: User[] = [
    {
      nome: 'Fabio',
      idade: 46
    },
    {
      nome: 'Maria',
      idade: 36
    },
    {
      nome: 'Carla',
      idade: 26
    },
    {
      nome: 'Roberto',
      idade: 16
    }
  ];
}
