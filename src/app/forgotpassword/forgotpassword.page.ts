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
import { FaskesAddPage } from '../faskes-add/faskes-add.page';
import * as md5 from 'md5';
var loading;

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  requestlist = [];
  column = [{ label: 'NIK' }, { label: 'Nama' }, { label: 'Description' }];
  newpassword: string;
  constructor(
    private storage: Storage,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private firestore: AngularFirestore,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    var snapshot = await firebase
      .firestore()
      .collection('forgotpassword')
      .where('status', '==', 'open')
      .get();
    if (snapshot.empty) {
      this.requestlist = [];
    } else {
      this.requestlist = [];
      snapshot.forEach(async (snap) => {
        var data = snap.data();
        data.id = snap.id;
        // console.log('data id :', data.id);

        var snapshots = await firebase
          .firestore()
          .collection('pasien')
          .where('nik', '==', data.nik)
          .get();
        if (snapshots.empty) {
        } else {
          snapshots.forEach((snaps) => {
            var pasiendata = snaps.data();
            pasiendata.id = snaps.id;
            data.detail = pasiendata;
          });
        }
        this.requestlist.push(data);
      });
    }
  }

  async resetPassword(data) {
    console.log('Data:', data);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Reset Password ' + data.detail.name,
      inputs: [
        {
          name: 'newpassword',
          type: 'password',
          placeholder: 'Masukkan Password baru',
          cssClass: 'specialClass',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          handler: (c) => {
            firebase
              .firestore()
              .collection('pasien')
              .doc(data.detail.id)
              .update({
                password: md5(c.newpassword),
              })
              .then(async () => {
                firebase
                  .firestore()
                  .collection('forgotpassword')
                  .doc(data.id)
                  .update({ status: 'closed' });
                var toast = await this.toastController.create({
                  message: 'Password berhasil dirubah',
                  duration: 3000,
                  color: 'success',
                });
                toast.present();
                this.loadData();
              });
          },
        },
      ],
    });

    await alert.present();
  }

  closeResetPassword(data) {
    // this.showLoading();
    // console.log(id);

    firebase
      .firestore()
      .collection('forgotpassword')
      .doc(data.id)
      .update({ status: 'closed' })
      .then(async () => {
        var toast = await this.toastController.create({
          message: 'Password berhasil dirubah',
          duration: 3000,
          color: 'success',
        });
        toast.present();

        setTimeout(() => {
          this.loadData();
        }, 500);
      });
  }
}
