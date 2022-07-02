"use strict";
(self["webpackChunkpantau_dashboard"] = self["webpackChunkpantau_dashboard"] || []).push([["src_app_forgotpassword_forgotpassword_module_ts"],{

/***/ 1782:
/*!*****************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPageRoutingModule": () => (/* binding */ ForgotpasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpassword.page */ 55651);




const routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_0__.ForgotpasswordPage
    }
];
let ForgotpasswordPageRoutingModule = class ForgotpasswordPageRoutingModule {
};
ForgotpasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotpasswordPageRoutingModule);



/***/ }),

/***/ 82488:
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPageModule": () => (/* binding */ ForgotpasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpassword-routing.module */ 1782);
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpassword.page */ 55651);







let ForgotpasswordPageModule = class ForgotpasswordPageModule {
};
ForgotpasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotpasswordPageRoutingModule
        ],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_1__.ForgotpasswordPage]
    })
], ForgotpasswordPageModule);



/***/ }),

/***/ 55651:
/*!*******************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPage": () => (/* binding */ ForgotpasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./forgotpassword.page.html */ 42762);
/* harmony import */ var _forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpassword.page.scss */ 22664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 54357);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ 713);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! md5 */ 45928);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_3__);









var loading;
let ForgotpasswordPage = class ForgotpasswordPage {
    constructor(storage, loadingController, modalController, firestore, alertController, toastController) {
        this.storage = storage;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.firestore = firestore;
        this.alertController = alertController;
        this.toastController = toastController;
        this.requestlist = [];
        this.column = [{ label: 'NIK' }, { label: 'Nama' }, { label: 'Description' }];
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var snapshot = yield firebase__WEBPACK_IMPORTED_MODULE_2__.default.firestore()
                .collection('forgotpassword')
                .where('status', '==', 'open')
                .get();
            if (snapshot.empty) {
                this.requestlist = [];
            }
            else {
                this.requestlist = [];
                snapshot.forEach((snap) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    var data = snap.data();
                    data.id = snap.id;
                    // console.log('data id :', data.id);
                    var snapshots = yield firebase__WEBPACK_IMPORTED_MODULE_2__.default.firestore()
                        .collection('pasien')
                        .where('nik', '==', data.nik)
                        .get();
                    if (snapshots.empty) {
                    }
                    else {
                        snapshots.forEach((snaps) => {
                            var pasiendata = snaps.data();
                            pasiendata.id = snaps.id;
                            data.detail = pasiendata;
                        });
                    }
                    this.requestlist.push(data);
                }));
            }
        });
    }
    resetPassword(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Data:', data);
            const alert = yield this.alertController.create({
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
                            firebase__WEBPACK_IMPORTED_MODULE_2__.default.firestore()
                                .collection('pasien')
                                .doc(data.detail.id)
                                .update({
                                password: md5__WEBPACK_IMPORTED_MODULE_3__(c.newpassword),
                            })
                                .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                                firebase__WEBPACK_IMPORTED_MODULE_2__.default.firestore()
                                    .collection('forgotpassword')
                                    .doc(data.id)
                                    .update({ status: 'closed' });
                                var toast = yield this.toastController.create({
                                    message: 'Password berhasil dirubah',
                                    duration: 3000,
                                    color: 'success',
                                });
                                toast.present();
                                this.loadData();
                            }));
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    closeResetPassword(data) {
        // this.showLoading();
        // console.log(id);
        firebase__WEBPACK_IMPORTED_MODULE_2__.default.firestore()
            .collection('forgotpassword')
            .doc(data.id)
            .update({ status: 'closed' })
            .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var toast = yield this.toastController.create({
                message: 'Password berhasil dirubah',
                duration: 3000,
                color: 'success',
            });
            toast.present();
            setTimeout(() => {
                this.loadData();
            }, 500);
        }));
    }
};
ForgotpasswordPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
ForgotpasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-forgotpassword',
        template: _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotpasswordPage);



/***/ }),

/***/ 42762:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/forgotpassword/forgotpassword.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Request Reset Password Pasien</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"ion-margin\">\r\n    <ion-row class=\"first-row\">\r\n      <ion-col size=\"2\"><b>NIK</b></ion-col>\r\n      <ion-col size=\"3\"><b>Nama</b></ion-col>\r\n      <ion-col size=\"5\"><b>Deskripsi</b></ion-col>\r\n      <ion-col size=\"2\"><b>Action</b></ion-col>\r\n    </ion-row>\r\n    <ion-row *ngFor=\"let list of requestlist; index as i\">\r\n      <!-- <ion-col>{{ i + 1 }}</ion-col> -->\r\n      <!-- <ion-item> -->\r\n      <!-- <ion-label class=\"sc-ion-label-md-h sc-ion-label-md-s md hydrated\">Label</ion-label> -->\r\n      <ion-col size=\"2\">{{list.detail.nik}}</ion-col>\r\n      <ion-col size=\"3\">{{list.detail.name}}</ion-col>\r\n      <ion-col size=\"5\">{{list.description}}</ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-button\r\n          size=\"small\"\r\n          color=\"primary\"\r\n          (click)=\"resetPassword(list)\"\r\n          fill=\"clear\"\r\n          >Reset</ion-button\r\n        >\r\n        <ion-button\r\n          size=\"small\"\r\n          fill=\"clear\"\r\n          color=\"danger\"\r\n          (click)=\"closeResetPassword(list)\"\r\n          >Close</ion-button\r\n        >\r\n      </ion-col>\r\n      <!-- </ion-item> -->\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-label\r\n    *ngIf=\"requestlist.length == 0\"\r\n    color=\"secondary\"\r\n    class=\"ion-align-self-center\"\r\n    >Belum ada permintaan reset password</ion-label\r\n  >\r\n</ion-content>\r\n");

/***/ }),

/***/ 22664:
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_forgotpassword_forgotpassword_module_ts.js.map