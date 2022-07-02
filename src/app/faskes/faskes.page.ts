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
var loading;

@Component({
  selector: 'app-faskes',
  templateUrl: './faskes.page.html',
  styleUrls: ['./faskes.page.scss'],
})
export class FaskesPage implements OnInit {
  faskes;
  tmpfaskes;
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
    var snapshot = await firebase.firestore().collection('faskes').get();
    if (snapshot.empty) {
      this.faskes = [];
    } else {
      this.faskes = [];
      snapshot.forEach((snap) => {
        var data = snap.data();
        data.id = snap.id;
        this.faskes.push(data);
      });
      this.tmpfaskes = this.faskes;
    }
  }

  async addForm() {
    const modal = await this.modalController.create({
      component: FaskesAddPage,
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

  deleteFaskes(faskes) {
    firebase
      .firestore()
      .collection('faskes')
      .doc(faskes.id)
      .delete()
      .then(async () => {
        var toast = await this.toastController.create({
          message: 'Fasilitas kesehatan berhasil dihapus',
          duration: 3000,
          color: 'success',
        });
        toast.present();
        setTimeout(() => {
          this.loadData();
        }, 500);
      });
    this.loadData();
  }

  async editFaskes(data) {
    const modal = await this.modalController.create({
      component: FaskesAddPage,
      swipeToClose: true,
      backdropDismiss: false,
      componentProps: {
        onGoBack: () => {
          this.loadData();
        },
        data: data,
        isEdit: true,
      },
    });
    await modal.present();
  }

  search(val) {
    const value = val.detail.value;
    this.faskes = this.tmpfaskes;

    if (value == '') {
      this.faskes = this.tmpfaskes;
    } else {
      this.faskes = this.faskes.filter(
        (x) =>
          x.nama.toLowerCase().includes(value.toLowerCase()) ||
          x.alamat.toLowerCase().includes(value.toLowerCase())
      );
    }
  }
}
