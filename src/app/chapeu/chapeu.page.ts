import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapeu',
  templateUrl: './chapeu.page.html',
  styleUrls: ['./chapeu.page.scss'],
})
export class ChapeuPage implements OnInit {


  constructor() { }

  ngOnInit() {
    const user = localStorage.getItem('user');
    console.log(user);
  }

}
