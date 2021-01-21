import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users = [
    { email: 'sergey@example.com', password: 'qwerty' },
    { email: 'example@example.com', password: 'qwerty' },
  ];
  constructor() {}

  getUsers() {
    return this.users;
  }
  removeUser(mail: string) {
    let id = this.users.findIndex((item) => item.email === mail);
    if (id === -1) {
      console.log('Item not found');
    }
    return this.users.splice(id, 1);
  }
}
