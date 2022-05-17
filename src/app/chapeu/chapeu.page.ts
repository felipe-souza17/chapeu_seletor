import { Component, OnInit } from '@angular/core';
import { DadosService } from './../services/dados.service';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-chapeu',
  templateUrl: './chapeu.page.html',
  styleUrls: ['./chapeu.page.scss'],
})
export class ChapeuPage implements OnInit {

  clicked: boolean;
  username: string;
  imageSrc: string;
  text: string;
  result: string;
  bgColor: string;
  description: string;
  houseData: any;

  constructor(public dadosService: DadosService, private animationCtrl: AnimationController) { }

  ngOnInit() {
    this.username = this.dadosService.pegarDados('username');
    this.imageSrc = '../../assets/img/sorting_hat.png';
    this.text = 'Clique no chapéu para verificar sua casa!';
    this.bgColor = 'bgColor';
    this.houseData = require('../json/data.json');
  }

  checkHouse() {
    const randomNumber = Math.floor(Math.random() * 4);
    const housesImage = [
    '../../assets/img/leao.png',
    '../../assets/img/cobra.png',
    '../../assets/img/gamba.png',
    '../../assets/img/aguia.png'
  ];
    const house = this.houseData[randomNumber];
    const animationHouse = this.animationCtrl.create()
    .addElement(document.querySelector('.sorting_hat'))
    .duration(1500)
    .fromTo('transform', 'translateY(0%)', 'translateY(-5%)')
    .fromTo('opacity', '0.6', '1');

    if(!this.clicked) {
      animationHouse.play();
      this.clicked = true;
      this.imageSrc = housesImage[randomNumber];
      this.result = house.name;
      this.description = house.description;
      this.bgColor = house.color;
    }
  }


}
