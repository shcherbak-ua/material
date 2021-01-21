import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users = [
    { email: 'sergey@gmail.com', password: 'ssss' },
    { email: 'sergey1@gmail.com', password: 'ssss1' },
  ];
  constructor() {}

  getUsers() {
    return this.users;
  }
}
