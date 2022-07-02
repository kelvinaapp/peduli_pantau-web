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
import { MonitorLogPage } from '../monitor-log/monitor-log.page';
import { LocationLogPage } from '../location-log/location-log.page';
@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.page.html',
  styleUrls: ['./monitoring.page.scss'],
})
export class MonitoringPage implements OnInit {
  column = [
    { label: 'NIK' },
    { label: 'Nama' },
    { label: 'BPM' },
    { label: 'Spo2' },
    { label: 'Temperatur' },
    { label: 'Waktu' },
    { label: 'Koordinat' },
  ];
  pasien: any = [];
  tmppasien: any = [];
  constructor(
    private storage: Storage,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private firestore: AngularFirestore,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadData();
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

  async openLocationLog(pasien) {
    const modal = await this.modalController.create({
      component: LocationLogPage,
      swipeToClose: true,
      backdropDismiss: false,
      componentProps: {
        onGoBack: () => {
          this.loadData();
        },
        data: pasien,
      },
    });
    modal.present();
  }

  openMaps(p) {
    var url =
      'https://www.google.com/maps/search/?api=1&query=' +
      p.latitude +
      ',' +
      p.longitude;
    window.open(url, '_blank');
  }

  async viewMonitorLog(pasien) {
    const modal = await this.modalController.create({
      component: MonitorLogPage,
      swipeToClose: true,
      backdropDismiss: false,
      componentProps: {
        onGoBack: () => {
          this.loadData();
        },
        data: pasien,
      },
    });
    modal.present();
  }

  search(val) {
    const keyword = val.detail.value;
    console.log('Searching', keyword);
    this.pasien = this.tmppasien;
    if (keyword.includes('>') && keyword.toLowerCase().includes('bpm')) {
      var value = parseInt(keyword.split('>')[1]);
      this.pasien = this.pasien.filter((x) => x.bpm > value);
    } else if (keyword.includes('<') && keyword.toLowerCase().includes('bpm')) {
      var value = parseInt(keyword.split('<')[1]);
      this.pasien = this.pasien.filter((x) => x.bpm < value);
    } else if (keyword.includes('=') && keyword.toLowerCase().includes('bpm')) {
      var value = parseInt(keyword.split('=')[1]);
      this.pasien = this.pasien.filter((x) => x.bpm == value);
    } else if (
      keyword.includes('>') &&
      keyword.toLowerCase().includes('spo2')
    ) {
      var value = parseInt(keyword.split('>')[1]);
      this.pasien = this.pasien.filter((x) => x.spo2 > value);
    } else if (
      keyword.includes('<') &&
      keyword.toLowerCase().includes('spo2')
    ) {
      var value = parseInt(keyword.split('<')[1]);
      this.pasien = this.pasien.filter((x) => x.spo2 < value);
    } else if (
      keyword.includes('=') &&
      keyword.toLowerCase().includes('spo2')
    ) {
      var value = parseInt(keyword.split('=')[1]);
      this.pasien = this.pasien.filter((x) => x.spo2 == value);
    } else if (
      keyword.includes('>') &&
      keyword.toLowerCase().includes('temp')
    ) {
      var value = parseInt(keyword.split('>')[1]);
      this.pasien = this.pasien.filter((x) => x.temperature > value);
    } else if (
      keyword.includes('<') &&
      keyword.toLowerCase().includes('temp')
    ) {
      var value = parseInt(keyword.split('<')[1]);
      this.pasien = this.pasien.filter((x) => x.temperature < value);
    } else if (
      keyword.includes('=') &&
      keyword.toLowerCase().includes('temp')
    ) {
      var value = parseInt(keyword.split('=')[1]);
      this.pasien = this.pasien.filter((x) => x.temperature == value);
    } else {
      console.log('Checking on else');
      this.pasien = this.pasien.filter(
        (x) =>
          x.name.toLowerCase().includes(keyword.toLowerCase()) ||
          x.nik.toString().includes(keyword.toLowerCase())
      );
    }
  }
}
