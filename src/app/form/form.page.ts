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
import { FormAddPage } from '../form-add/form-add.page';
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  form: any = [];
  constructor(
    private storage: Storage,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private firestore: AngularFirestore,
    private toastController: ToastController
  ) {}

  async ngOnInit() {
    this.loadForm();
  }

  async loadForm() {
    var snapshot = await firebase
      .firestore()
      .collection('formlog')
      .orderBy('nomor', 'asc')
      .get();
    if (snapshot.empty) {
      this.form = [];
    } else {
      this.form = [];
      snapshot.forEach((snap) => {
        var data = snap.data();
        data.id = snap.id;
        this.form.push(data);
      });
    }
  }

  deleteQuestion(id) {
    firebase
      .firestore()
      .collection('formlog')
      .doc(id)
      .delete()
      .then(() => {
        this.loadForm();
      });
  }

  async addQuestion() {
    const modal = await this.modalController.create({
      component: FormAddPage,
      swipeToClose: true,
      backdropDismiss: false,
      componentProps: {
        onGoBack: () => {
          this.loadForm();
        },
        totalquestion: this.form.length,
      },
    });
    modal.present();
  }

  async editQuestion(form, i) {
    const modal = await this.modalController.create({
      component: FormAddPage,
      swipeToClose: true,
      backdropDismiss: false,
      componentProps: {
        onGoBack: () => {
          this.loadForm();
        },
        isEdit: true,
        nomor: i,
        data: form,
      },
    });
    modal.present();
  }
}
