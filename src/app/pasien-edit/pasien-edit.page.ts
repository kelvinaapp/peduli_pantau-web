import { Component, OnInit,Input } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController,ModalController,PopoverController,AlertController,LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as moment from 'moment';
import { Router } from '@angular/router';
import firebase from 'firebase';
import * as md5 from 'md5';
var loading;

@Component({
  selector: 'app-pasien-edit',
  templateUrl: './pasien-edit.page.html',
  styleUrls: ['./pasien-edit.page.scss'],
})
export class PasienEditPage implements OnInit {
  @Input() onGoBack:any;
  @Input() data:any;
  name:string;
  alamat:string;
  nik : string;
  password:string;
  tgl_lahir:any;
  tgl_positif:any;
  tgl_negatif:any;
  status :any;

  constructor(
    private modalController:ModalController,
    private loadingController:LoadingController,
    private toastController:ToastController,
    private firestore:AngularFirestore,
    private storage:Storage,
    private router : Router
  ) {

  }

  ngOnInit() {
    setTimeout(()=>{

    this.name = this.data.name;
    this.nik = this.data.nik;
    this.alamat = this.data.alamat;
    this.password = this.data.password;
    this.tgl_lahir = this.data.tgl_lahir;
    this.tgl_positif = this.data.tgl_positif;
    this.tgl_negatif = this.data.tgl_negatif;
    this.status = this.data.status == true?"true":"false";
    console.log("EDIT PASIEN:",this.tgl_lahir);
    },1000)
  }
  update(){
    this.showLoading();
    var newdata = {
      name:this.name,
      nik : this.nik,
      alamat:this.alamat,
      tgl_lahir : moment(this.tgl_lahir).valueOf(),
      tgl_positif:moment(this.tgl_positif).valueOf(),
      tgl_negatif:moment(this.tgl_negatif).valueOf(),
      status: this.status == "true" ? true:false
    }
    if(this.password != this.data.password){
      newdata["password"] = md5(this.password);
    }
    firebase.firestore().collection("pasien").doc(this.data.id).update(newdata).then(async ()=>{
      this.hideLoading();
      var toast = await this.toastController.create({
        message:"Data pasien berhasil di update.",
        duration : 3000,
        color:"success"
      })
      await toast.present();
      this.modalController.dismiss();
      this.onGoBack();
    });
  }

  close(){
    this.modalController.dismiss();
  }


  async showLoading(){
    loading = await this.loadingController.create({
     cssClass: 'my-custom-class',
     message: 'Please wait...',
   });
   await loading.present();
  }
  hideLoading(){
    loading.dismiss();
  }

}
