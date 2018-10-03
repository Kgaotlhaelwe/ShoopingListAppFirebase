import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {user} from '../../app/user'

import {RegisterPage} from '../../pages/register/register';

import {AngularFireAuth} from 'angularfire2/auth';
import {HomePage} from '../home/home';
import {ProfilePage} from '../profile/profile';
import { AlertController } from 'ionic-angular';
import { error } from '../../../node_modules/@firebase/database/dist/esm/src/core/util/util';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user ={} as user ;
  errrr;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private Auth :AngularFireAuth, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(user:user){

    try { 
      
      const result =this.Auth.auth.signInWithEmailAndPassword(user.email,user.password).then(() =>{
        console.log(result);
        this.navCtrl.push(HomePage);
      }, error => this.errrr = error.message)
      
      
    }catch(e){

      


   

      
    }
    }
   
  


  register(){
    this.navCtrl.push(RegisterPage);
  }

}
