import { Component, OnInit, Input } from '@angular/core';
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
var loading;

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.page.html',
  styleUrls: ['./form-add.page.scss'],
})
export class FormAddPage implements OnInit {
  @Input() onGoBack: any;
  @Input() totalquestion: any;
  @Input() isEdit: any;
  @Input() data: any;
  @Input() nomor: any;
  question: string;
  option: any;
  constructor(
    private storage: Storage,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private firestore: AngularFirestore,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    if (this.isEdit) {
      console.log(this.data);
      this.question = this.data.question;
      this.option = this.data.option;
    } else {
      this.nomor = parseInt(this.totalquestion) + 1;
      this.option = [{ label: '', value: '' }];
    }
  }
  addOption() {
    this.option.push({ label: '', value: '' });
  }
  removeOption(index) {
    this.option.splice(index, 1);
  }

  close() {
    this.modalController.dismiss();
  }

  submit() {
    this.showLoading();
    this.option.map((opt, index) => {
      opt.value = opt.label.toLowerCase();
    });
    if (this.isEdit) {
      var newdata = {
        nomor: parseInt(this.nomor),
        question: this.question,
        // option:this.option
      };
      firebase
        .firestore()
        .collection('formlog')
        .doc(this.data.id)
        .update(newdata)
        .then(async () => {
          this.hideLoading();
          var toast = await this.toastController.create({
            message: 'Pertanyaan berhasil diupdate',
            duration: 3000,
            color: 'success',
          });
          toast.present();
          this.onGoBack();
          this.modalController.dismiss();
        })
        .catch(async (er) => {
          this.hideLoading();
          var toast = await this.toastController.create({
            message: 'Pertanyaan gagal diupdate',
            duration: 3000,
            color: 'danger',
          });
          toast.present();
        });
    } else {
      firebase
        .firestore()
        .collection('formlog')
        .add({
          nomor: parseInt(this.nomor),
          question: this.question,
          option: this.option,
        })
        .then(async () => {
          this.hideLoading();
          var toast = await this.toastController.create({
            message: 'Pertanyaan berhasil ditambahkan',
            duration: 3000,
            color: 'success',
          });
          toast.present();
          this.onGoBack();
          this.modalController.dismiss();
        })
        .catch(async (er) => {
          var toast = await this.toastController.create({
            message: 'Gagal ! ' + er.message,
            duration: 3000,
            color: 'danger',
          });
        });
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
