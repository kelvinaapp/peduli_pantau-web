import { Component, OnInit ,Input} from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController,ModalController,PopoverController,AlertController,LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as moment from 'moment';
import firebase from 'firebase';
var loading;
@Component({
  selector: 'app-edukasi-add',
  templateUrl: './edukasi-add.page.html',
  styleUrls: ['./edukasi-add.page.scss'],
})
export class EdukasiAddPage implements OnInit {
  @Input() onGoBack:any;
  judul;
  gambar;
  content;

  constructor(
    private storage:Storage,
    private loadingController:LoadingController,
    private modalController:ModalController,
    private firestore:AngularFirestore,
    private toastController:ToastController
  ) { }

  ngOnInit() {

  }

  close(){
    this.modalController.dismiss();
  }
  submit(){
    this.showLoading();
    firebase.firestore().collection("edukasi").add({
      judul:this.judul,
      gambar:this.gambar,
      content : this.content,
      created_at:moment().valueOf(),
    }).then(async ()=>{
      this.hideLoading();
      var toast = await this.toastController.create({
        message:"Edukasi berhasil ditambahkan",
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
