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
@Component({
  selector: 'app-log-detail',
  templateUrl: './log-detail.page.html',
  styleUrls: ['./log-detail.page.scss'],
})
export class LogDetailPage implements OnInit {
  @Input() onGoBack: any;
  @Input() data: any;
  questions: any;
  constructor(
    private storage: Storage,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private firestore: AngularFirestore,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    console.log('Log Detail:', this.data);
    this.getQuestion();
  }

  async getQuestion() {
    var snapshot = await firebase
      .firestore()
      .collection('formlog')
      .orderBy('nomor', 'asc')
      .get();
    if (snapshot.empty) {
      this.questions = [];
    } else {
      this.questions = [];
      snapshot.forEach((snap) => {
        var data = snap.data();
        data.id = snap.id;
        this.questions.push(data);
      });
    }
    console.log(this.questions);
  }

  getAnswer(answer) {
    let json = JSON.parse(answer);
    return json.answer;
  }

  close() {
    this.modalController.dismiss();
  }
}
