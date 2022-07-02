"use strict";
(self["webpackChunkpantau_dashboard"] = self["webpackChunkpantau_dashboard"] || []).push([["src_app_monitoring_monitoring_module_ts"],{

/***/ 35721:
/*!*********************************************************!*\
  !*** ./src/app/monitoring/monitoring-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitoringPageRoutingModule": () => (/* binding */ MonitoringPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _monitoring_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitoring.page */ 15155);




const routes = [
    {
        path: '',
        component: _monitoring_page__WEBPACK_IMPORTED_MODULE_0__.MonitoringPage
    }
];
let MonitoringPageRoutingModule = class MonitoringPageRoutingModule {
};
MonitoringPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MonitoringPageRoutingModule);



/***/ }),

/***/ 6129:
/*!*************************************************!*\
  !*** ./src/app/monitoring/monitoring.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitoringPageModule": () => (/* binding */ MonitoringPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _monitoring_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitoring-routing.module */ 35721);
/* harmony import */ var _monitoring_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitoring.page */ 15155);







let MonitoringPageModule = class MonitoringPageModule {
};
MonitoringPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _monitoring_routing_module__WEBPACK_IMPORTED_MODULE_0__.MonitoringPageRoutingModule
        ],
        declarations: [_monitoring_page__WEBPACK_IMPORTED_MODULE_1__.MonitoringPage]
    })
], MonitoringPageModule);



/***/ }),

/***/ 15155:
/*!***********************************************!*\
  !*** ./src/app/monitoring/monitoring.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitoringPage": () => (/* binding */ MonitoringPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_monitoring_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./monitoring.page.html */ 14183);
/* harmony import */ var _monitoring_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitoring.page.scss */ 36817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 54357);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ 713);
/* harmony import */ var _monitor_log_monitor_log_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../monitor-log/monitor-log.page */ 89036);
/* harmony import */ var _location_log_location_log_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../location-log/location-log.page */ 1086);











let MonitoringPage = class MonitoringPage {
    constructor(storage, loadingController, modalController, firestore, toastController) {
        this.storage = storage;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.firestore = firestore;
        this.toastController = toastController;
        this.column = [
            { label: 'NIK' },
            { label: 'Nama' },
            { label: 'BPM' },
            { label: 'Spo2' },
            { label: 'Temperatur' },
            { label: 'Waktu' },
            { label: 'Koordinat' },
        ];
        this.pasien = [];
        this.tmppasien = [];
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        firebase__WEBPACK_IMPORTED_MODULE_3__.default.firestore()
            .collection('pasien')
            .get()
            .then((snapshot) => {
            if (snapshot.empty) {
                this.pasien = [];
            }
            else {
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
            firebase__WEBPACK_IMPORTED_MODULE_3__.default.firestore()
                .collection('pasien')
                .doc(pasien.id)
                .collection('measurement')
                .orderBy('created_at', 'desc')
                .limit(1)
                .onSnapshot((snapshot) => {
                if (!snapshot.empty) {
                    snapshot.forEach((snap) => {
                        var data = snap.data();
                        data.formattedtime = moment__WEBPACK_IMPORTED_MODULE_2__(data.created_at).format('DD MMM YYYY HH:mm:ss');
                        this.pasien[index].bpm = parseInt(data.heart_rate);
                        this.pasien[index].spo2 = parseInt(data.spo2);
                        this.pasien[index].temperature = parseInt(data.body_temperature);
                        this.pasien[index].formattedtime = data.formattedtime;
                        this.checkAlert(pasien, data);
                    });
                }
            });
            //parsing location
            firebase__WEBPACK_IMPORTED_MODULE_3__.default.firestore()
                .collection('pasien')
                .doc(pasien.id)
                .collection('location')
                .orderBy('timestamp', 'desc')
                .limit(1)
                .onSnapshot((snapshot) => {
                if (!snapshot.empty) {
                    snapshot.forEach((snap) => {
                        var data = snap.data();
                        data.formattedtime = moment__WEBPACK_IMPORTED_MODULE_2__(data.timestamp).format('DD MMM YYYY HH:mm:ss');
                        this.pasien[index].latitude = data.coords.latitude;
                        this.pasien[index].longitude = data.coords.longitude;
                        this.pasien[index].accuracy = data.coords.accuracy;
                    });
                }
            });
        });
        this.tmppasien = this.pasien;
    }
    checkAlert(pasien, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var bpm = parseInt(data.heart_rate);
            var spo2 = parseInt(data.spo2);
            var temp = parseInt(data.temp);
            if (bpm > 100 && bpm < 220) {
                //mild warning
                var toast = yield this.toastController.create({
                    message: 'Pasien bernama ' +
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
            }
            else if (bpm < 60 || bpm > 220) {
                //extreme warning
                var toast = yield this.toastController.create({
                    message: 'Pasien bernama ' +
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
            }
            else if (spo2 < 95) {
                //mild warning
                var toast = yield this.toastController.create({
                    message: 'Pasien bernama ' +
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
            }
            else if (spo2 < 90) {
                //extreme warning
                var toast = yield this.toastController.create({
                    message: 'Pasien bernama ' +
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
            }
            else if (temp > 37.2 && temp < 38) {
                //mild warning
                var toast = yield this.toastController.create({
                    message: 'Pasien bernama ' + pasien.name + ' mengalami demam ! Suhu ' + temp,
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
            }
            else if (temp < 36.1 || temp > 38) {
                //extreme
                var toast = yield this.toastController.create({
                    message: 'Pasien bernama ' +
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
        });
    }
    openLocationLog(pasien) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _location_log_location_log_page__WEBPACK_IMPORTED_MODULE_5__.LocationLogPage,
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
        });
    }
    openMaps(p) {
        var url = 'https://www.google.com/maps/search/?api=1&query=' +
            p.latitude +
            ',' +
            p.longitude;
        window.open(url, '_blank');
    }
    viewMonitorLog(pasien) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _monitor_log_monitor_log_page__WEBPACK_IMPORTED_MODULE_4__.MonitorLogPage,
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
        });
    }
    search(val) {
        const keyword = val.detail.value;
        console.log('Searching', keyword);
        this.pasien = this.tmppasien;
        if (keyword.includes('>') && keyword.toLowerCase().includes('bpm')) {
            var value = parseInt(keyword.split('>')[1]);
            this.pasien = this.pasien.filter((x) => x.bpm > value);
        }
        else if (keyword.includes('<') && keyword.toLowerCase().includes('bpm')) {
            var value = parseInt(keyword.split('<')[1]);
            this.pasien = this.pasien.filter((x) => x.bpm < value);
        }
        else if (keyword.includes('=') && keyword.toLowerCase().includes('bpm')) {
            var value = parseInt(keyword.split('=')[1]);
            this.pasien = this.pasien.filter((x) => x.bpm == value);
        }
        else if (keyword.includes('>') &&
            keyword.toLowerCase().includes('spo2')) {
            var value = parseInt(keyword.split('>')[1]);
            this.pasien = this.pasien.filter((x) => x.spo2 > value);
        }
        else if (keyword.includes('<') &&
            keyword.toLowerCase().includes('spo2')) {
            var value = parseInt(keyword.split('<')[1]);
            this.pasien = this.pasien.filter((x) => x.spo2 < value);
        }
        else if (keyword.includes('=') &&
            keyword.toLowerCase().includes('spo2')) {
            var value = parseInt(keyword.split('=')[1]);
            this.pasien = this.pasien.filter((x) => x.spo2 == value);
        }
        else if (keyword.includes('>') &&
            keyword.toLowerCase().includes('temp')) {
            var value = parseInt(keyword.split('>')[1]);
            this.pasien = this.pasien.filter((x) => x.temperature > value);
        }
        else if (keyword.includes('<') &&
            keyword.toLowerCase().includes('temp')) {
            var value = parseInt(keyword.split('<')[1]);
            this.pasien = this.pasien.filter((x) => x.temperature < value);
        }
        else if (keyword.includes('=') &&
            keyword.toLowerCase().includes('temp')) {
            var value = parseInt(keyword.split('=')[1]);
            this.pasien = this.pasien.filter((x) => x.temperature == value);
        }
        else {
            console.log('Checking on else');
            this.pasien = this.pasien.filter((x) => x.name.toLowerCase().includes(keyword.toLowerCase()) ||
                x.nik.toString().includes(keyword.toLowerCase()));
        }
    }
};
MonitoringPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController }
];
MonitoringPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-monitoring',
        template: _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_monitoring_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_monitoring_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MonitoringPage);



/***/ }),

/***/ 14183:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/monitoring/monitoring.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Monitoring</ion-title>\r\n  </ion-toolbar>\r\n  <ion-searchbar\r\n    (ionChange)=\"search($event)\"\r\n    showCancelButton=\"focus\"\r\n    placeholder=\"Cari\"\r\n  ></ion-searchbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-item>\r\n    <ion-label *ngFor=\"let col of column\" style=\"font-weight: bold\"\r\n      >{{col.label}}</ion-label\r\n    >\r\n  </ion-item>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let p of pasien\">\r\n      <ion-label\r\n        color=\"primary\"\r\n        (click)=\"viewMonitorLog(p)\"\r\n        style=\"cursor: pointer\"\r\n        >{{p.nik}}</ion-label\r\n      >\r\n      <ion-label>{{p.name}}</ion-label>\r\n      <ion-label>{{p.bpm}}</ion-label>\r\n      <ion-label>{{p.spo2}}%</ion-label>\r\n      <ion-label>{{p.temperature}}&deg; C</ion-label>\r\n      <ion-label>{{p.formattedtime}}</ion-label>\r\n      <ion-label\r\n        color=\"primary\"\r\n        style=\"cursor: pointer\"\r\n        (click)=\"openLocationLog(p)\"\r\n      >\r\n        {{p.latitude}},{{p.longitude}}\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  <!-- \r\n      <ion-label>{{i+1}}. {{edu.judul}}</ion-label>\r\n      <ion-label>\r\n        <ion-thumbnail>\r\n          <img [src]=\"edu.gambar\" alt=\"\">\r\n        </ion-thumbnail>\r\n      </ion-label>\r\n      <ion-label>{{edu.content.substr(0,100)}}</ion-label>\r\n      <ion-label>{{edu.formattedtime}}</ion-label>\r\n      <ion-label>\r\n        <ion-button fill=\"clear\" color=\"primary\" (click)=\"editEdukasi(edu)\">Edit</ion-button>\r\n        <ion-button fill=\"clear\" color=\"danger\"  (click)=\"deleteEdukasi(edu.id)\">Delete</ion-button>\r\n      </ion-label> -->\r\n  <!-- </ion-item> -->\r\n\r\n  <!-- <ion-grid>\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let col of column\" size=\"1\" size-lg>\r\n        <ion-label style=\"font-weight:bold;\">{{col.label}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-list>\r\n    <ion-grid>\r\n      <ion-row *ngFor=\"let p of pasien\">\r\n        <ion-col size=\"1\" size-lg>\r\n          \r\n        </ion-col>\r\n        <ion-col size=\"1\" size-lg>\r\n          \r\n        </ion-col>\r\n        <ion-col size=\"1\" size-lg>\r\n          \r\n        </ion-col>\r\n        <ion-col size=\"1\" size-lg>\r\n          \r\n        </ion-col>\r\n        <ion-col size=\"1\" size-lg>\r\n          \r\n        </ion-col>\r\n        <ion-col size=\"1\" size-lg>\r\n          \r\n        </ion-col>\r\n        <ion-col size=\"1\" size-lg>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-list> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ 36817:
/*!*************************************************!*\
  !*** ./src/app/monitoring/monitoring.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "ion-item ion-label {\n  justify-content: center;\n  text-align: center;\n  align-self: auto;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbml0b3JpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6Im1vbml0b3JpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0gaW9uLWxhYmVse1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gIG1hcmdpbjo1cHg7XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_monitoring_monitoring_module_ts.js.map