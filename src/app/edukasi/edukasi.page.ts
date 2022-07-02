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
import { EdukasiAddPage } from '../edukasi-add/edukasi-add.page';
import { EdukasiEditPage } from '../edukasi-edit/edukasi-edit.page';
var loading;

@Component({
  selector: 'app-edukasi',
  templateUrl: './edukasi.page.html',
  styleUrls: ['./edukasi.page.scss'],
})
export class EdukasiPage implements OnInit {
  edukasi = [];
  tmpedukasi = [];
  column = [
    // { label: 'No' },
    { label: 'Judul' },
    { label: 'Gambar' },
    { label: 'Content' },
    { label: 'Tanggal' },
    { label: 'Action' },
  ];
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

  async loadData() {
    var snapshot = await firebase.firestore().collection('edukasi').get();
    if (snapshot.empty) {
      this.edukasi = [];
    } else {
      this.edukasi = [];
      snapshot.forEach((snap) => {
        var data = snap.data();
        data.id = snap.id;
        data.formattedtime = moment(data.created_at).format(
          'DD MMM YYYY HH:mm'
        );
        this.edukasi.push(data);
      });
      this.tmpedukasi = this.edukasi;
    }
  }

  async addEdukasi() {
    const modal = await this.modalController.create({
      component: EdukasiAddPage,
      swipeToClose: true,
      backdropDismiss: false,
      componentProps: {
        onGoBack: () => {
          this.loadData();
        },
      },
    });
    modal.present();
  }

  async editEdukasi(data) {
    const modal = await this.modalController.create({
      component: EdukasiEditPage,
      swipeToClose: true,
      backdropDismiss: false,
      componentProps: {
        onGoBack: () => {
          this.loadData();
        },
        data: data,
      },
    });
    modal.present();
  }

  deleteEdukasi(id) {
    this.showLoading();

    firebase
      .firestore()
      .collection('edukasi')
      .doc(id)
      .delete()
      .then(async () => {
        this.hideLoading();
        var toast = await this.toastController.create({
          message: 'Edukasi berhasil dihapus',
          duration: 3000,
          color: 'success',
        });
        toast.present();
        setTimeout(() => {
          this.loadData();
        }, 500);
      })
      .catch(async (er) => {
        this.hideLoading();
        var toast = await this.toastController.create({
          message: 'Edukasi gagal dihapus:' + er.message,
          duration: 3000,
          color: 'danger',
        });
        toast.present();
      });
  }

  search(val) {
    this.edukasi = this.tmpedukasi;
    if (val == '') {
      this.edukasi = this.tmpedukasi;
    } else {
      this.edukasi = this.edukasi.filter(
        (x) =>
          x.judul.toLowerCase().includes(val.toLowerCase()) ||
          x.content.toLowerCase().includes(val.toLowerCase())
      );
    }
  }

  async showLoading() {
    loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
  }
  hideLoading() {
    loading.dismiss();
  }
}
