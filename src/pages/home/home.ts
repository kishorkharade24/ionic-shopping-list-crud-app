import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AddShoppingItemPage } from '../add-shopping-item/add-shopping-item';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToAddShoppingItem() {
    this.navCtrl.push(AddShoppingItemPage);
  }

}
