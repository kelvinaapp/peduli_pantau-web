import { Component, OnInit,Input} from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController,ModalController,PopoverController,AlertController,LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as moment from 'moment';
import firebase from 'firebase';
@Component({
  selector: 'app-monitor-log',
  templateUrl: './monitor-log.page.html',
  styleUrls: ['./monitor-log.page.scss'],
})
export class MonitorLogPage implements OnInit {
  @Input() onGoBack:any;
  @Input() data:any;
  logs:any;
  column = [
    {label:"BPM"},
    {label:"Spo2"},
    {label:"Body Temperature"},
    {label:"Waktu"},
  ];
  constructor(
    private storage:Storage,
    private loadingController:LoadingController,
    private modalController:ModalController,
    private firestore:AngularFirestore,
    private toastController:ToastController) { }

  ngOnInit() {
    console.log("pasien:",this.data);
    this.loadLog();
  }

  async loadLog(){
    var snapshot = await firebase.firestore().collection("pasien").doc(this.data.id).collection("measurement").orderBy("created_at","desc").get();
    if(snapshot.empty){
      this.logs = []
    }
    else{
      this.logs = [];
      snapshot.forEach((snap)=>{
        var data = snap.data();
        data.id = snap.id;
        data.formattedtime = moment(data.created_at).format("DD MMM YYYY HH:mm:ss");
        this.logs.push(data);
      });
    }
  }

  close(){
    this.modalController.dismiss();
  }

}
