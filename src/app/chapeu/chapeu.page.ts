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

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.username = this.dadosService.pegarDados('username');
    this.imageSrc = '../../assets/img/witch_hat.png';
    this.text = 'Clique no chapéu para verificar qual é sua casa.';
  }

  checkHouse() {
    const randomNumber = Math.floor(Math.random() * 4);
    const house = randomNumber === 0 ? 'Grifinória' : (randomNumber === 1 ? 'Sonserina' : (randomNumber === 2 ? 'Lufa-Lufa' : 'Corvinal' ));

    if(!this.clicked) {
      this.clicked = true;
      if (randomNumber === 0) {
        this.imageSrc = '../../assets/img/leao.png';
      } else if (randomNumber === 1 ) {
        this.imageSrc = '../../assets/img/cobra.png';
      } else if (randomNumber === 2 ) {
        this.imageSrc = '../../assets/img/gamba.png';
      } else {
        this.imageSrc = '../../assets/img/aguia.png';
      }
      this.text = '';
      this.subtext = `Parabéns, ${this.username}. Você acaba de ser juntar a casa ${house}!`;
    }


  }
}
