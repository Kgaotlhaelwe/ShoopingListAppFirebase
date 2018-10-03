import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddShoppingListPage} from '../add-shopping-list/add-shopping-list';
import   { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { InternalFormsSharedModule } from '../../../node_modules/@angular/forms/src/directives';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(public navCtrl: NavController , private db: AngularFireDatabase , public alertCtrl: AlertController) {
   
    this.itemsRef = db.list('items');
    
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    console.log( this.itemsRef)
  }


  addshoppinglist(){
    this.navCtrl.push(AddShoppingListPage);

  }


  deleteItem(key: string) {    
    this.itemsRef.remove(key); 
  }



 


  updateItem(key: string ) {

    //var itemName =this.items[a].itemName
    


   
    const prompt = this.alertCtrl.create({
      
      title: 'UPDATE',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'itemName',
          placeholder: 'itemName' ,
          
        },

        {
          name: 'itemNumber',
          placeholder: 'itemNumber'
        },

        



      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            //this.itemsRef.update(key, { text: newText });

           
            
            this.itemsRef.update(key, {itemName:data.itemName , itemNumber:data.itemNumber} );
           
            
            
          }
        }
      ]
    });
    prompt.present();
   
  }

}

