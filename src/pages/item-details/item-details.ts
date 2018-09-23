import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  num_1:      number;
  numero:     number;
  resultado:  string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
    this.selectedItem = navParams.get('item');
    this.num_1 = 2;
  }

  start(){
    let alert = this.alert.create({
      title: 'mucha suerte!',
      inputs: [
        {
          name: 'signo',
          placeholder: 'digita el signo'
        },
        {
          name: 'numero',
          placeholder: 'digita el numero'
        }
      ],
      buttons: [
        {
          text: 'ok',
          handler: (data) =>{
            data.completed = false;
            if(data.signo == '+' && data.numero == 1){
              this.resultado = "true";
            }else{
              this.resultado = "false";
            }
          }
        }
      ]
    });
    alert.present();
  }
}
