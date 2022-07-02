"use strict";
(self["webpackChunkpantau_dashboard"] = self["webpackChunkpantau_dashboard"] || []).push([["src_app_log-harian_log-harian_module_ts"],{

/***/ 51600:
/*!*********************************************************!*\
  !*** ./src/app/log-harian/log-harian-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogHarianPageRoutingModule": () => (/* binding */ LogHarianPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _log_harian_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-harian.page */ 4311);




const routes = [
    {
        path: '',
        component: _log_harian_page__WEBPACK_IMPORTED_MODULE_0__.LogHarianPage
    }
];
let LogHarianPageRoutingModule = class LogHarianPageRoutingModule {
};
LogHarianPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LogHarianPageRoutingModule);



/***/ }),

/***/ 21719:
/*!*************************************************!*\
  !*** ./src/app/log-harian/log-harian.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogHarianPageModule": () => (/* binding */ LogHarianPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _log_harian_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-harian-routing.module */ 51600);
/* harmony import */ var _log_harian_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-harian.page */ 4311);







let LogHarianPageModule = class LogHarianPageModule {
};
LogHarianPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _log_harian_routing_module__WEBPACK_IMPORTED_MODULE_0__.LogHarianPageRoutingModule
        ],
        declarations: [_log_harian_page__WEBPACK_IMPORTED_MODULE_1__.LogHarianPage]
    })
], LogHarianPageModule);



/***/ }),

/***/ 4311:
/*!***********************************************!*\
  !*** ./src/app/log-harian/log-harian.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogHarianPage": () => (/* binding */ LogHarianPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_log_harian_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./log-harian.page.html */ 1724);
/* harmony import */ var _log_harian_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-harian.page.scss */ 80933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ 54357);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ 713);
/* harmony import */ var _log_detail_log_detail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../log-detail/log-detail.page */ 68792);










let LogHarianPage = class LogHarianPage {
    constructor(storage, loadingController, modalController, firestore, toastController) {
        this.storage = storage;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.firestore = firestore;
        this.toastController = toastController;
        this.pasien = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var snapshot = yield firebase__WEBPACK_IMPORTED_MODULE_3__.default.firestore().collection('pasien').get();
            if (snapshot.empty) {
                this.pasien = [];
            }
            else {
                this.pasien = [];
                snapshot.forEach((snap) => {
                    var data = snap.data();
                    data.id = snap.id;
                    this.pasien.push(data);
                });
                this.getLog();
            }
        });
    }
    getLog() {
        this.pasien.map((pasien, index) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var snapshot = yield firebase__WEBPACK_IMPORTED_MODULE_3__.default.firestore()
                .collection('pasien')
                .doc(pasien.id)
                .collection('log')
                .orderBy('created_at', 'desc')
                .get();
            if (snapshot.empty) {
                this.pasien[index].log = [];
            }
            else {
                var logs = [];
                snapshot.forEach((snap) => {
                    var data = snap.data();
                    data.id = snap.id;
                    data.formattedtime = moment__WEBPACK_IMPORTED_MODULE_2__(data.created_at).format('DD MMM YYYY HH:mm');
                    logs.push(data);
                    console.log(logs);
                });
                this.pasien[index].log = logs;
            }
        }));
    }
    detail(pasien) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _log_detail_log_detail_page__WEBPACK_IMPORTED_MODULE_4__.LogDetailPage,
                swipeToClose: true,
                backdropDismiss: false,
                componentProps: { onGoBack: () => { }, data: pasien },
            });
            modal.present();
        });
    }
};
LogHarianPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
LogHarianPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-log-harian',
        template: _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_log_harian_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_log_harian_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LogHarianPage);



/***/ }),

/***/ 1724:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/log-harian/log-harian.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Laporan Harian Pasien</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label>ID Pasien</ion-label>\r\n    <ion-label>NIK</ion-label>\r\n    <ion-label>Nama</ion-label>\r\n    <ion-label>Update Terakhir</ion-label>\r\n    <ion-label>Action</ion-label>\r\n  </ion-item>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let p of pasien\">\r\n      <ion-label>{{p.id}}</ion-label>\r\n      <ion-label>{{p.nik}}</ion-label>\r\n      <ion-label>{{p.name}}</ion-label>\r\n      <ion-grid>\r\n        <ion-row *ngFor=\"let answer of p.log;let j = index\" style=\"border: 0\">\r\n          <ion-label *ngIf=\"j == 0\">{{answer.formattedtime}}</ion-label>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-label (click)=\"detail(p)\" color=\"primary\" style=\"cursor: pointer\"\r\n        >Detail</ion-label\r\n      >\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ 80933:
/*!*************************************************!*\
  !*** ./src/app/log-harian/log-harian.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2ctaGFyaWFuLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_log-harian_log-harian_module_ts.js.map