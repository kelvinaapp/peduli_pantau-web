import { Component, OnInit ,Input} from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController,ModalController,PopoverController,AlertController,LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as moment from 'moment';
import firebase from 'firebase';

var loading;



@Component({
  selector: 'app-faskes-add',
  templateUrl: './faskes-add.page.html',
  styleUrls: ['./faskes-add.page.scss'],
})
export class FaskesAddPage implements OnInit {
  @Input() isEdit:any;
  @Input() onGoBack:any;
  @Input() data:any;
  ionicForm: FormGroup;

  nama:any;
  alamat:any;
  latitude:any;
  longitude:any;
  phone:any;
  forms:any = [];


  constructor(
    public formBuilder: FormBuilder,
    private storage:Storage,
    private loadingController:LoadingController,
    private modalController:ModalController,
    private firestore:AngularFirestore,
    private toastController:ToastController
  ) {
    this.forms = [
      {label:"Nama Faskes",type:"text",secure:false,value:"",name:"nama"},
      {label:"Alamat",type:"text",secure:false,value:"",name:"alamat"},
      {label:"Latitude",type:"text",secure:false,value:"",name:"latitude"},
      {label:"Longitude",type:"text",secure:false,value:"",name:"longitude"},
      {label:"No Telepon",type:"text",secure:false,value:"",name:"phone"},
    ];



  }

  ngOnInit() {

    console.log("IS EDIT:",this.isEdit);
    console.log("Data:",this.data);
    if(this.isEdit){
      this.forms = [
        {label:"Nama Faskes",type:"text",secure:false,value:this.data.nama,name:"nama"},
        {label:"Alamat",type:"text",secure:false,value:this.data.alamat,name:"alamat"},
        {label:"Latitude",type:"text",secure:false,value:this.data.latitude,name:"latitude"},
        {label:"Longitude",type:"text",secure:false,value:this.data.longitude,name:"longitude"},
        {label:"No Telepon",type:"text",secure:false,value:this.data.phone,name:"phone"},
      ];
      this.ionicForm = this.formBuilder.group({
        nama: [this.data.nama, [Validators.required, Validators.minLength(2)]],
        alamat: [this.data.alamat, [Validators.required,Validators.minLength(2)]],
        latitude: [this.data.latitude, [Validators.required, Validators.minLength(2)]],
        longitude: [this.data.longitude, [Validators.required, Validators.minLength(2)]],
        phone:[this.data.phone],
      });

    }
    else{
      this.ionicForm = this.formBuilder.group({
        nama: ['', [Validators.required, Validators.minLength(2)]],
        alamat: ['', [Validators.required,Validators.minLength(2)]],
        latitude: ['', [Validators.required, Validators.minLength(2)]],
        longitude: ['', [Validators.required, Validators.minLength(2)]],
        phone:[''],
      });
    }
  }

  close(){
    this.modalController.dismiss();
  }
  submit(){
    this.showLoading();
    if(this.isEdit){
      var newdata = this.ionicForm.value;
      newdata.updated_at = moment().valueOf();
      newdata.latitude  = parseFloat(newdata.latitude);
      newdata.longitude = parseFloat(newdata.longitude)

      firebase.firestore().collection("faskes").doc(this.data.id).update(newdata).then(async ()=>{
        this.hideLoading();
        var toast = await this.toastController.create({
          message:"Faskes berhasil diupdate",
          duration:3000,
          color:"success"
        })
        toast.present();
        this.onGoBack();
        this.modalController.dismiss();
      }).catch(async (er)=>{
        this.hideLoading();
        var toast = await this.toastController.create({
          message:"Faskes gagal diupdate :"+er.message,
          duration:3000,
          color:"danger"
        })
        toast.present();
      })
    }
    else{
      if(this.ionicForm.valid){
        var newdata = this.ionicForm.value;
        newdata.created_at = moment().valueOf();
        newdata.latitude  = parseFloat(newdata.latitude);
        newdata.longitude = parseFloat(newdata.longitude)
        firebase.firestore().collection("faskes").add(newdata).then(async ()=>{
          this.hideLoading();
          var toast = await this.toastController.create({
            message:"Faskes berhasil ditambahkan",
            duration:3000,
            color:"success"
          })
          toast.present();
          this.onGoBack();
          this.modalController.dismiss();
        }).catch(async (er)=>{
          this.hideLoading();
          var toast = await this.toastController.create({
            message:"Faskes gagal ditambahkan :"+er.message,
            duration:3000,
            color:"danger"
          })
          toast.present();
        })
      }
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
