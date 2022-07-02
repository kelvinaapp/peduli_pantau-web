import { Component, OnInit,Input} from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController,ModalController,PopoverController,AlertController,LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as moment from 'moment';
import firebase from 'firebase';
@Component({
  selector: 'app-location-log',
  templateUrl: './location-log.page.html',
  styleUrls: ['./location-log.page.scss'],
})
export class LocationLogPage implements OnInit {
  @Input() onGoBack:any;
  @Input() data:any;
  locationlog:any;
  constructor(
    private storage:Storage,
    private loadingController:LoadingController,
    private modalController:ModalController,
    private firestore:AngularFirestore,
    private toastController:ToastController
  ) { }

  ngOnInit() {
    this.getLog();
  }

  async getLog(){
    var snapshot = await firebase.firestore().collection("pasien").doc(this.data.id).collection("location").orderBy("timestamp","desc").get();
    if(snapshot.empty){
      this.locationlog = []
    }
    else{
      this.locationlog = [];
      snapshot.forEach((snap)=>{
        var data = snap.data();
        data.id = snap.id;
        data.formattedtime = moment(data.timestamp).format("DD/MM/YY HH:mm:ss");
        this.locationlog.push(data);
      })
    }
  }

  openMaps(p){
    var url = "https://www.google.com/maps/search/?api=1&query="+p.latitude+","+p.longitude;
    window.open(url,"_blank");
  }
  close(){
    this.modalController.dismiss();
  }

}
