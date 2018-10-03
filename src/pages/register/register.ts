import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {user} from '../../app/user'

import {AngularFireAuth} from 'angularfire2/auth';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user ={} as user ;
  error:any;
  constructor(public navCtrl: NavController, public navParams: NavParams ,private Auth :AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  async register(user:user){
    try{
     const result= this.Auth.auth.createUserWithEmailAndPassword(user.email ,user.password).then(()=>{


      console.log(result);
     }, 
     (error)=>{

      this.error=error;

     });

    
     
    }
   

  catch(e){
    console.error(e)

  }

}}
