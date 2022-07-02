import { Component, OnInit,Input } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController,ModalController,PopoverController,AlertController,LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasien-detail',
  templateUrl: './pasien-detail.page.html',
  styleUrls: ['./pasien-detail.page.scss'],
})
export class PasienDetailPage implements OnInit {
  @Input() onGoBack:any;
  @Input() data:any;
  constructor(
    private modalController:ModalController,
    private loadingController:LoadingController,
    private toastController:ToastController,
    private firestore:AngularFirestore,
    private storage:Storage,
    private router : Router
  ) { }

  ngOnInit() {
      console.log("Pasien Detail",this.data);
  }
  close(){
    this.modalController.dismiss();
  }

}
