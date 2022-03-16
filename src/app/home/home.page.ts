import { DadosService } from './../services/dados.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(public dadosService: DadosService,
    public route: Router,
    public toastController: ToastController,
    ) {}

  nextPage(username: any) {
    if(this.username) {
      this.dadosService.guardarDados('username', username);
      this.route.navigateByUrl('/chapeu');
      this.presentToast('Seja bem vindo!', 'success');
    } else {
      this.presentToast('Por favor, preencha o campo!', 'danger');
    }
  }

  async presentToast(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 2000
    });
    toast.present();
  }
}
