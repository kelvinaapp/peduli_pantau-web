import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
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

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showsidemenu = true;
  admin = null;
  pasien: any;
  tmppasien: any;
  public appPages = [
    {
      title: 'Tambah Pasien',
      url: '/register/',
      icon: 'person-add',
      color: 'primary',
    },
    { title: 'Pasien', url: '/pasien', icon: 'body', color: 'primary' },
    {
      title: 'Monitoring',
      url: '/monitoring',
      icon: 'pulse',
      color: 'primary',
    },
    {
      title: 'Laporan Harian',
      url: '/log-harian',
      icon: 'reader',
      color: 'primary',
    },
    {
      title: 'Form Laporan',
      url: '/form',
      icon: 'document-text',
      color: 'primary',
    },
    { title: 'Admin', url: '/admin', icon: 'people', color: 'primary' },
    { title: 'Edukasi', url: '/edukasi', icon: 'book', color: 'primary' },
    {
      title: 'Fasilitas Kesehatan',
      url: '/faskes',
      icon: 'business',
      color: 'primary',
    },
    {
      title: 'Request Lupa Password',
      url: '/forgotpassword',
      icon: 'lock-closed',
      color: 'primary',
    },
    { title: 'Logout', url: '/logout', icon: 'log-out', color: 'danger' },
  ];
  constructor(
    private storage: Storage,
    private router: Router,
    private toastController: ToastController,
    private firestore: AngularFirestore
  ) {
    console.log('App storage:', storage);
    storage.create();
  }

  async ngOnInit() {
    await this.storage.get('admin').then(async (admin) => {
      this.admin = JSON.parse(admin);
      console.log('Admin:', JSON.parse(admin));

      if (admin != null) {
        console.log('Shows side menu', this.showsidemenu);
        this.showsidemenu = true;
        this.loadData();
        return await this.showsidemenu;
      } else if (window.location.pathname.includes('login')) {
        console.log(window.location);
        this.showsidemenu = false;
        return await this.showsidemenu;
      } else {
        console.log(window.location);
        this.showsidemenu = false;
        window.location.href = '/login';
        return await this.showsidemenu;
      }
    });
  }

  loadData() {
    firebase
      .firestore()
      .collection('pasien')
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          this.pasien = [];
        } else {
          this.pasien = [];
          snapshot.forEach((snap) => {
            var data = snap.data();
            data.id = snap.id;
            if (data.nik) {
              this.pasien.push(data);
            }
          });
          this.getPasienSensor();
        }
      });
  }

  getPasienSensor() {
    this.pasien.map((pasien, index) => {
      firebase
        .firestore()
        .collection('pasien')
        .doc(pasien.id)
        .collection('measurement')
        .orderBy('created_at', 'desc')
        .limit(1)
        .onSnapshot((snapshot) => {
          if (!snapshot.empty) {
            snapshot.forEach((snap) => {
              var data = snap.data();
              data.formattedtime = moment(data.created_at).format(
                'DD MMM YYYY HH:mm:ss'
              );
              this.pasien[index].bpm = parseInt(data.heart_rate);
              this.pasien[index].spo2 = parseInt(data.spo2);
              this.pasien[index].temperature = parseInt(data.body_temperature);
              this.pasien[index].formattedtime = data.formattedtime;
              this.checkAlert(pasien, data);
            });
          }
        });

      //parsing location
      firebase
        .firestore()
        .collection('pasien')
        .doc(pasien.id)
        .collection('location')
        .orderBy('timestamp', 'desc')
        .limit(1)
        .onSnapshot((snapshot) => {
          if (!snapshot.empty) {
            snapshot.forEach((snap) => {
              var data = snap.data();
              data.formattedtime = moment(data.timestamp).format(
                'DD MMM YYYY HH:mm:ss'
              );
              this.pasien[index].latitude = data.coords.latitude;
              this.pasien[index].longitude = data.coords.longitude;
              this.pasien[index].accuracy = data.coords.accuracy;
            });
          }
        });
    });
    this.tmppasien = this.pasien;
  }

  async checkAlert(pasien, data) {
    var bpm = parseInt(data.heart_rate);
    var spo2 = parseInt(data.spo2);
    var temp = parseInt(data.temp);

    if (bpm > 100 && bpm < 220) {
      //mild warning
      var toast = await this.toastController.create({
        message:
          'Pasien bernama ' +
          pasien.name +
          ' mengalami penurunan/peningkatan detak jantung!',
        color: 'warning',
        position: 'middle',
        buttons: [
          {
            side: 'end',
            text: 'OK',
            handler: () => {
              toast.dismiss();
            },
          },
        ],
      });
      toast.present();
    } else if (bpm < 60 || bpm > 220) {
      //extreme warning
      var toast = await this.toastController.create({
        message:
          'Pasien bernama ' +
          pasien.name +
          ' mengalami penurunan/peningkatan detak jantung drastis!',
        color: 'danger',
        position: 'middle',
        buttons: [
          {
            side: 'end',
            text: 'OK',
            handler: () => {
              toast.dismiss();
            },
          },
        ],
      });
      toast.present();
    } else if (spo2 < 95) {
      //mild warning
      var toast = await this.toastController.create({
        message:
          'Pasien bernama ' +
          pasien.name +
          ' mengalami penurunan kadar saturasi oksigen!',
        color: 'warning',
        position: 'middle',
        buttons: [
          {
            side: 'end',
            text: 'OK',
            handler: () => {
              toast.dismiss();
            },
          },
        ],
      });
      toast.present();
    } else if (spo2 < 90) {
      //extreme warning
      var toast = await this.toastController.create({
        message:
          'Pasien bernama ' +
          pasien.name +
          ' mengalami penurunan kadar satuasi oksigen drastis!',
        color: 'danger',
        position: 'middle',
        buttons: [
          {
            side: 'end',
            text: 'OK',
            handler: () => {
              toast.dismiss();
            },
          },
        ],
      });
      toast.present();
    } else if (temp > 37.2 && temp < 38) {
      //mild warning
      var toast = await this.toastController.create({
        message:
          'Pasien bernama ' + pasien.name + ' mengalami demam ! Suhu ' + temp,
        color: 'warning',
        position: 'middle',
        buttons: [
          {
            side: 'end',
            text: 'OK',
            handler: () => {
              toast.dismiss();
            },
          },
        ],
      });
      toast.present();
    } else if (temp < 36.1 || temp > 38) {
      //extreme
      var toast = await this.toastController.create({
        message:
          'Pasien bernama ' +
          pasien.name +
          ' mengalami demam tinggi!\n' +
          temp +
          '&deg;C',
        color: 'danger',
        position: 'middle',
        buttons: [
          {
            side: 'end',
            text: 'OK',
            handler: () => {
              toast.dismiss();
            },
          },
        ],
      });
      toast.present();
    }

    console.log('Checking alert:', pasien, data);
  }
}
