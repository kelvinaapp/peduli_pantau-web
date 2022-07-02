import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController } from '@ionic/angular';
import firebase from 'firebase';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private loading:LoadingController,private storage:Storage,private router:Router) { }

  ngOnInit() {
    this.storage.remove("admin");
    setTimeout(()=>{
      // this.router.navigate(["/login"]);
      window.location.href = "/login";
    },2000)
  }

}
