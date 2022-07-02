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
import { PasienDetailPage } from '../pasien-detail/pasien-detail.page';
import { PasienEditPage } from '../pasien-edit/pasien-edit.page';
@Component({
  selector: 'app-pasien',
  templateUrl: './pasien.page.html',
  styleUrls: ['./pasien.page.scss'],
})
export class PasienPage implements OnInit {
  loading: any;
  pasien: any = [];
  tmppasien: any;
  column: any;

  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private firestore: AngularFirestore
  ) {
    this.column = [
      { prop: 'nik', name: 'NIK' },
      { prop: 'name', name: 'Name' },
      { prop: 'alamat', name: 'Alamat' },
      { prop: 'tgl_lahir', name: 'Tgl Lahir' },
      { prop: 'tgl_positif', name: 'Tgl Positif' },
      { prop: 'tgl_negatif', name: 'Tgl Negatif' },
      { prop: 'lama_isoman', name: 'Lama isoman' },
      { prop: 'status', name: 'Status' },
      { prop: 'action', name: 'Action' },
    ];
  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.showLoading();
    await this.firestore
      .collection('pasien')
      .get()
      .subscribe(async (snapshot) => {
        this.pasien = [];
        await snapshot.forEach(async (snap) => {
          var data = snap.data();
          if (Object.keys(data).length > 0) {
            data['id'] = snap.id;
            data['lama_isoman'] =
              data['status'] == true
                ? moment().diff(moment(data['tgl_positif']), 'days')
                : moment(data['tgl_negatif']).diff(
                    moment(data['tgl_positif']),
                    'days'
                  );
            data['tgl_lahir'] = moment(data['tgl_lahir']).format('DD MMM YYYY');
            data['tgl_positif'] = moment(data['tgl_positif']).format(
              'DD MMM YYYY'
            );
            data['tgl_negatif'] =
              data['tgl_negatif'] == ''
                ? '-'
                : moment(data['tgl_negatif']).format('DD MMM YYYY');

            this.pasien.push(data);
          }
        });
        console.log(this.pasien);
        await setTimeout(async () => {
          await this.hideLoading();
          this.tmppasien = this.pasien;
        }, 800);
      });
  }

  filter(e) {
    console.log('Filter:', e.detail.value);
    var str = e.detail.value;
    this.pasien = this.tmppasien;
    if (str.length > 0) {
      this.pasien = this.pasien.filter(
        (x) =>
          x.name.toLowerCase().includes(str.toLowerCase()) ||
          x.nik.toString().includes(str)
      );
    } else {
      this.pasien = this.tmppasien;
    }
  }

  clear() {
    this.pasien = [];
  }

  async showLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await this.loading.present();
  }

  async hideLoading() {
    await this.loading.dismiss();
  }

  open(p) {
    console.log('Open pasien:', p);
  }
  async detail(p) {
    console.log('Detail:', p);
    var modal = await this.modalController.create({
      component: PasienDetailPage,
      swipeToClose: true,
      backdropDismiss: false,
      componentProps: { onGoBack: () => {}, data: p },
    });
    await modal.present();
  }

  async edit(p) {
    console.log('Detail:', p);
    var modal = await this.modalController.create({
      component: PasienEditPage,
      swipeToClose: true,
      backdropDismiss: false,
      componentProps: {
        onGoBack: () => {
          this.getData();
        },
        data: p,
      },
    });
    await modal.present();
  }
}
