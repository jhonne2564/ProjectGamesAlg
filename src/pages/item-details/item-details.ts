import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  area:         string;
  correcto1:    string;
  correcto2:    string;
  resultado:    string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
    this.selectedItem = navParams.get('item');

  }

  start(){
    this.correcto1 = "input + 1";
    this.correcto2 = "1 + input";

    if(this.area == this.correcto1 || this.area == this.correcto2){
      this.resultado = "true";
    }else{
      this.resultado = "false";
    }
  }
}
