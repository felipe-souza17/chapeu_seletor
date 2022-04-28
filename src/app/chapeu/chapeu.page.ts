import { Component, OnInit } from '@angular/core';
import { DadosService } from './../services/dados.service';

@Component({
  selector: 'app-chapeu',
  templateUrl: './chapeu.page.html',
  styleUrls: ['./chapeu.page.scss'],
})
export class ChapeuPage implements OnInit {

  public clicked = false;
  username: string;
  imageSrc: string;
  text: string;
  subtext: string;
  result: string;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.username = this.dadosService.pegarDados('username');
    this.imageSrc = '../../assets/img/witch_hat.png';
    this.text = 'Certo, agora veremos de que casa você será!';
    this.subtext = 'Clique no chapéu para verificar qual é sua casa.';
    this.result = '';
  }

  checkHouse() {
    const randomNumber = Math.floor(Math.random() * 4);
    const housesImage = ['../../assets/img/leao.png', '../../assets/img/cobra.png', '../../assets/img/gamba.png', '../../assets/img/aguia.png'];
    const house = randomNumber === 0 ? 'Grifinória' : (randomNumber === 1 ? 'Sonserina' : (randomNumber === 2 ? 'Lufa-Lufa' : 'Corvinal' ));

    if(!this.clicked) {
      this.clicked = true;
      this.imageSrc = housesImage[randomNumber];
      this.text = `Parabéns, ${this.username}!`;
      this.subtext = '';
      this.result = `Você acaba de se juntar a casa ${house}!`;
    }
  }
}
