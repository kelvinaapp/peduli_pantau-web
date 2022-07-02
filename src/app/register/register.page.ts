import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import md5 from 'md5';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  ToastController,
  ModalController,
  PopoverController,
  AlertController,
  LoadingController,
} from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  ionicForm: FormGroup;
  forms: any = [];
  loading: any;
  constructor(
    private loadingController: LoadingController,
    public formBuilder: FormBuilder,
    private toastController: ToastController,
    private firestore: AngularFirestore
  ) {
    this.forms = [
      { label: 'NIK', type: 'number', secure: false, value: '', name: 'nik' },
      {
        label: 'Nama Lengkap',
        type: 'text',
        secure: false,
        value: '',
        name: 'name',
      },
      {
        label: 'Password',
        type: 'password',
        secure: false,
        value: '',
        name: 'password',
      },
      {
        label: 'Alamat',
        type: 'text',
        secure: false,
        value: '',
        name: 'alamat',
      },
      {
        label: 'Tanggal Lahir',
        type: 'datetime',
        secure: false,
        value: '',
        name: 'tgl_lahir',
      },
      {
        label: 'Tanggal Positif',
        type: 'datetime',
        secure: false,
        value: '',
        name: 'tgl_positif',
      },
      // {label:"Tanggal Negatif",type:"datetime",secure:false,value:""},
      // {label:"Status",type:"text",secure:false,value:""},
    ];
  }

  ngOnInit() {
    console.log(this.firestore);
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      nik: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
      alamat: ['', [Validators.required, Validators.minLength(2)]],
      tgl_lahir: ['', [Validators.required, Validators.minLength(2)]],
      tgl_positif: ['', [Validators.required, Validators.minLength(2)]],
      tgl_negatif: [''],
      status: [true],
    });
  }

  async submit() {
    console.log(this.ionicForm.value);
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      const toast = await this.toastController.create({
        message: 'Mohon isi semua form',
        position: 'top',
        duration: 4000,
        color: 'danger',
      });
      toast.present();
      return false;
    } else {
      this.showLoading();
      console.log(this.ionicForm.value);
      var newdata = this.ionicForm.value;
      newdata.nik = newdata.nik.toString();
      newdata.password = md5(newdata.password);
      await this.firestore
        .collection('pasien')
        .add(newdata)
        .then(async (snapshot) => {
          await this.firestore
            .collection('pasien')
            .doc(snapshot.id)
            .collection('log')
            .add({ init: true });
          await this.firestore
            .collection('pasien')
            .doc(snapshot.id)
            .collection('location')
            .add({ init: true });
          await this.firestore
            .collection('pasien')
            .doc(snapshot.id)
            .collection('measurement')
            .add({ init: true });
          this.hideLoading();
          this.ionicForm.reset();
          const toast = await this.toastController.create({
            message: 'Pasien berhasil di daftarkan',
            position: 'top',
            duration: 4000,
            color: 'success',
          });
          toast.present();
        })
        .catch(async (er) => {
          this.hideLoading();
          const toast = await this.toastController.create({
            message: 'Gagal menambahkan pasien:\n' + er.message,
            position: 'top',
            duration: 4000,
            color: 'danger',
          });
          toast.present();
        });
    }
  }

  async showLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await this.loading.present();
  }

  hideLoading() {
    this.loading.dismiss();
  }

  setValue(e) {
    console.log('Setting value for ', e);
  }
}
