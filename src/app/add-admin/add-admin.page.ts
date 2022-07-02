import { Component, OnInit,Input} from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController,ModalController,PopoverController,AlertController,LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as moment from 'moment';
import * as md5 from 'md5';
import firebase from 'firebase';
var loading;


@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.page.html',
  styleUrls: ['./add-admin.page.scss'],
})
export class AddAdminPage implements OnInit {
  @Input() onGoBack:any;
  @Input() data:any;
  @Input() isEdit :any;
  ionicForm: FormGroup;
  forms : any;
  constructor(
      private loadingController:LoadingController,
      public formBuilder: FormBuilder,
      private modalController : ModalController,
      private toastController:ToastController,
      private firestore:AngularFirestore
  ){
    this.forms = [
      {label:"NIK",type:"number",secure:false,value:"",name:"nik"},
      {label:"Nama Lengkap",type:"text",secure:false,value:"",name:"name"},
      {label:"Alamat",type:"text",secure:false,value:"",name:"alamat"},
      {label:"Username",type:"text",secure:false,value:"",name:"username"},
      {label:"Password",type:"password",secure:false,value:"",name:"password"},
      {label:"Privileges",type:"radio",secure:false,value:"",name:"privileges",option:[
        {label:"Superadmin",value:"superadmin"},
        {label:"Admin",value:"admin"},
      ]},
    ]
  }

  ngOnInit() {
    if(this.isEdit){
      this.forms = [
        {label:"NIK",type:"number",secure:false,value:this.data.nik,name:"nik"},
        {label:"Nama Lengkap",type:"text",secure:false,value:this.data.name,name:"name"},
        {label:"Alamat",type:"text",secure:false,value:this.data.alamat,name:"alamat"},
        {label:"Username",type:"text",secure:false,value:this.data.username,name:"username"},
        {label:"Password",type:"password",secure:false,value:this.data.password,name:"password"},
        {label:"Privileges",type:"radio",secure:false,value:this.data.privileges,name:"privileges",option:[
          {label:"Superadmin",value:"superadmin"},
          {label:"Admin",value:"admin"},
        ]},
      ]
      this.ionicForm = this.formBuilder.group({
        nik: [this.data.nik, [Validators.required,Validators.minLength(2)]],
        name: [this.data.name, [Validators.required, Validators.minLength(2)]],
        alamat:[this.data.alamat, [Validators.required,Validators.minLength(2)]],
        username: [this.data.username, [Validators.required, Validators.minLength(2)]],
        password: [this.data.password, [Validators.required, Validators.minLength(2)]],
        privileges: [this.data.privileges, [Validators.required, Validators.minLength(2)]],
      })
    }
    else{
      this.ionicForm = this.formBuilder.group({
        nik: ['', [Validators.required,Validators.minLength(2)]],
        name: ['', [Validators.required, Validators.minLength(2)]],
        alamat:['', [Validators.required,Validators.minLength(2)]],
        username: ['', [Validators.required, Validators.minLength(2)]],
        password: ['', [Validators.required, Validators.minLength(2)]],
        privileges: ['', [Validators.required, Validators.minLength(2)]],
      })
    }
  }

  async submit(){
    this.showLoading();
    if(this.isEdit){
      if(this.ionicForm.valid){
        var newdata = this.ionicForm.value;
        newdata.password = md5(newdata.password);
        newdata.updated_at = moment().valueOf();
        firebase.firestore().collection("admin").doc(this.data.id).update(newdata).then(async()=>{
          this.hideLoading();
          var toast = await this.toastController.create({
            message:"Admin berhasil diupdate",
            duration:3000,
            color:"success"
          })
          toast.present();
          this.onGoBack();
          this.modalController.dismiss();
        }).catch(async (er)=>{
          this.hideLoading();
          var toast = await this.toastController.create({
            message:"Admin gagal diupdate:"+er.message,
            duration:5000,
            color:"danger"
          })
          toast.present();
          this.onGoBack();
          this.modalController.dismiss();
        })
      }
      else{
        var toast = await this.toastController.create({
          message:"Mohon isi semua form",
          duration:3000,
          color:"danger"
        })
        toast.present();
      }
    }
    else{
      if(this.ionicForm.valid){
        var newdata = this.ionicForm.value;
        newdata.password = md5(newdata.password);
        newdata.created_at = moment().valueOf();
        firebase.firestore().collection("admin").add(newdata).then(async()=>{
          this.hideLoading();
          var toast = await this.toastController.create({
            message:"Admin berhasil ditambah",
            duration:3000,
            color:"success"
          })
          toast.present();
          this.onGoBack();
          this.modalController.dismiss();
        }).catch(async (er)=>{
          this.hideLoading();
          var toast = await this.toastController.create({
            message:"Admin gagal ditambakan:"+er.message,
            duration:5000,
            color:"danger"
          })
          toast.present();
          this.onGoBack();
          this.modalController.dismiss();
        })
      }
      else{
        var toast = await this.toastController.create({
          message:"Mohon isi semua form",
          duration:3000,
          color:"danger"
        })
        toast.present();
      }
    }
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
