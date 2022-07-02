import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  ToastController,
  ModalController,
  PopoverController,
  AlertController,
  LoadingController,
} from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import firebase from 'firebase';
import { LogDetailPage } from '../log-detail/log-detail.page';

@Component({
  selector: 'app-log-harian',
  templateUrl: './log-harian.page.html',
  styleUrls: ['./log-harian.page.scss'],
})
export class LogHarianPage implements OnInit {
  pasien = [];
  constructor(
    private storage: Storage,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private firestore: AngularFirestore,
    private toastController: ToastController
  ) {}

  async ngOnInit() {
    var snapshot = await firebase.firestore().collection('pasien').get();
    if (snapshot.empty) {
      this.pasien = [];
    } else {
      this.pasien = [];
      snapshot.forEach((snap) => {
        var data = snap.data();
        data.id = snap.id;
        this.pasien.push(data);
      });
      this.getLog();
    }
  }

  getLog() {
    this.pasien.map(async (pasien, index) => {
      var snapshot = await firebase
        .firestore()
        .collection('pasien')
        .doc(pasien.id)
        .collection('log')
        .orderBy('created_at', 'desc')
        .get();
      if (snapshot.empty) {
        this.pasien[index].log = [];
      } else {
        var logs = [];
        snapshot.forEach((snap) => {
          var data = snap.data();
          data.id = snap.id;
          data.formattedtime = moment(data.created_at).format(
            'DD MMM YYYY HH:mm'
          );
          logs.push(data);
          console.log(logs);
        });
        this.pasien[index].log = logs;
      }
    });
  }

  async detail(pasien) {
    const modal = await this.modalController.create({
      component: LogDetailPage,
      swipeToClose: true,
      backdropDismiss: false,
      componentProps: { onGoBack: () => {}, data: pasien },
    });
    modal.present();
  }
}
