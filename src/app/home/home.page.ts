import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public username:string

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor() {}
 
  saveUser() {
    const userData = this.username
    localStorage.setItem('user', userData)
  }
}
