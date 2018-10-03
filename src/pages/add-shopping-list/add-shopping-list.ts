import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {shoppingList} from '../../app/shoppinglistinterface' ;
import { AngularFireDatabase, } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { populateNodeData } from '../../../node_modules/ionic-angular/umd/components/virtual-scroll/virtual-util';
/**
 * Generated class for the AddShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-list',
  templateUrl: 'add-shopping-list.html',
})
export class AddShoppingListPage {
  
  shoppingItem = {} as  shoppingList ;
  items: Observable<any[]>;
 
  

  constructor(public navCtrl: NavController, public navParams: NavParams , private db:AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingListPage');
  }
  
  
  addItem(shoppingItem:shoppingList){
    console.log(shoppingItem);
    const itemsRef = this.db.list('items');
    itemsRef.push(shoppingItem);
    this.navCtrl.pop();

  

}

  //this.shoppingItem = {} as  shoppingList ;

}
