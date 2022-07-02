import { Component, OnInit ,Input} from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController,ModalController,PopoverController,AlertController,LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as moment from 'moment';
import firebase from 'firebase';
var loading;
@Component({
  selector: 'app-edukasi-edit',
  templateUrl: './edukasi-edit.page.html',
  styleUrls: ['./edukasi-edit.page.scss'],
})
export class EdukasiEditPage implements OnInit {
  @Input() onGoBack:any;
  @Input() data:any;
  judul;
  gambar;
  content;
  constructor(
    private storage:Storage,
    private loadingController:LoadingController,
    private modalController:ModalController,
    private firestore:AngularFirestore,
    private toastController:ToastController
  ) {


  }

  ngOnInit() {
    this.judul = this.data.judul;
    this.gambar=  this.data.gambar;
    this.content = this.data.content;
  }

  close(){
    this.modalController.dismiss();
  }

  submit(){
    this.showLoading();
    firebase.firestore().collection("edukasi").doc(this.data.id).update({
      judul:this.judul,
      gambar:this.gambar,
      content : this.content,
      updated_at:moment().valueOf(),
    }).then(async ()=>{
      this.hideLoading();
      var toast = await this.toastController.create({
        message:"Edukasi berhasil diedit",
        duration:3000,
        color:"success"
      })
      toast.present();
      this.onGoBack();
      this.modalController.dismiss();
    })
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
