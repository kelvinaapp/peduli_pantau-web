import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController,ModalController,PopoverController,LoadingController,AlertController} from '@ionic/angular';
import {AddAdminPage} from '../add-admin/add-admin.page';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as moment from 'moment';
import firebase from 'firebase';
var loading ;



@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  adminlist : any;
  column = [
    {label:"Name"},
    {label:"Username"},
    {label:"Privilege"},
    {label:"Action"},
  ];
  tmpadmin :any;
  admin :any;
  constructor(
    private storage:Storage,
    private loadingController:LoadingController,
    private modalController:ModalController,
    private firestore:AngularFirestore,
    private toastController:ToastController
  ) {

    storage.get("admin").then((admin)=>{
      this.admin = JSON.parse(admin);
      console.log("ADMIN:",this.admin)
    })
  }

  ngOnInit() {
    this.loadData();
  }

  async loadData(){
    var snapshot = await firebase.firestore().collection("admin").get();
    if(snapshot.empty){
      this.adminlist = [];
    }
    else{
      this.adminlist=[]
      snapshot.forEach((snap)=>{
        var data = snap.data();
        data.id = snap.id;
        this.adminlist.push(data);
      });
      this.tmpadmin = this.adminlist;
    }
  }

  async showForm(){
    if(this.admin.privileges == "superadmin"){
      var modal = await this.modalController.create({
        component: AddAdminPage,
        swipeToClose: true,
        backdropDismiss:false,
        componentProps:{onGoBack : ()=>{this.loadData()}}
      });
      await modal.present();
    }
    else{
      var toast = await this.toastController.create({
        message:"Hanya untuk Superadmin!",
        duration:3000,
        position:"top",
        color:"dark"
      });
      toast.present();
    }
  }

  async editAdmin(admin){
    if(this.admin.privileges == "superadmin"){
    var modal = await this.modalController.create({
      component: AddAdminPage,
      swipeToClose: true,
      backdropDismiss:false,
      componentProps:{onGoBack : ()=>{this.loadData()},data:admin,isEdit:true}
    });
    await modal.present();
    }
    else{
      var toast = await this.toastController.create({
        message:"Hanya untuk Superadmin!",
        duration:3000,
        position:"top",
        color:"dark"
      });
      toast.present();
    }
  }

  async deleteAdmin(admin){
    if(this.admin.privileges == "superadmin"){
      this.showLoading();
      firebase.firestore().collection("admin").doc(admin.id).delete().then(async ()=>{
        var toast = await this.toastController.create({
          message:"Admin berhasil dihapus",
          duration:3000,
          color:"success"
        })
        this.hideLoading();
        toast.present();
        this.loadData();
      }).catch(async (er)=>{
        this.hideLoading();
        var toast = await this.toastController.create({
          message:"Gagal menghapus admin:"+er.message,
          duration:5000,
          color:"danger"
        })
        toast.present();
      });
    }
    else{
      var toast = await this.toastController.create({
        message:"Hanya untuk Superadmin!",
        duration:3000,
        position:"top",
        color:"dark"
      });
      toast.present();
    }

  }


  search(value){
    if(value.length == 0){
      this.adminlist = this.tmpadmin;
    }
    else{
      this.adminlist = this.tmpadmin;
      this.adminlist = this.adminlist.filter(x => (x.name.toLowerCase()).includes(value.toLowerCase()) || (x.username.toLowerCase()).includes(value.toLowerCase()) || (x.alamat.toLowerCase()).includes(value.toLowerCase()));
    }
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
