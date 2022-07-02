import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController,ToastController } from '@ionic/angular';
import firebase from 'firebase';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import * as moment from 'moment';

import md5 from 'md5';
var loading;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string;
  password:string;
  constructor(private firestore:AngularFirestore,private loading:LoadingController,private storage:Storage,private router:Router,private toastController:ToastController) {

  }

  ngOnInit() {
  }

  async login(){
    this.showLoading();
    var snapshot  = await firebase.firestore().collection("admin")
    .where("username","==",this.username).where("password","==",md5(this.password)).get();
    console.log("Snapshot:",snapshot);
    if(snapshot.empty){
      const toast = await this.toastController.create({
        message:"Login gagal.",
        position :"bottom",
        duration : 3000,
        color:"danger"
      });
      toast.present()
      this.hideLoading();
    }
    else{
      this.hideLoading();
      snapshot.forEach((snap)=>{
        var data = snap.data();
        data.id = snap.id;
        this.storage.set("admin",JSON.stringify(data));
        firebase.firestore().collection("admin").doc(data.id).update({
          last_login:moment().valueOf()
        })
        return window.location.href = "/pasien";
        // this.router.navigate(['/pasien']);
      })
    }
  }

  async showLoading(){
    loading = await this.loading.create({
     cssClass: 'my-custom-class',
     message: 'Please wait...',
   });
   await loading.present();
  }
  hideLoading(){
    loading.dismiss();
  }
}
