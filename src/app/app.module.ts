import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import config from '../app/firabase'
import { AddShoppingListPage} from '../pages/add-shopping-list/add-shopping-list';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import  {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {ProfilePage} from '../pages/profile/profile'

import {AngularFireAuthModule} from 'angularfire2/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage , AddShoppingListPage , LoginPage , RegisterPage ,ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp) ,AngularFireDatabaseModule ,
    AngularFireModule.initializeApp(config) , AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage , AddShoppingListPage ,LoginPage, RegisterPage,ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
