"use strict";
(self["webpackChunkpantau_dashboard"] = self["webpackChunkpantau_dashboard"] || []).push([["src_app_faskes_faskes_module_ts"],{

/***/ 37036:
/*!*************************************************!*\
  !*** ./src/app/faskes/faskes-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaskesPageRoutingModule": () => (/* binding */ FaskesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _faskes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faskes.page */ 14278);




const routes = [
    {
        path: '',
        component: _faskes_page__WEBPACK_IMPORTED_MODULE_0__.FaskesPage
    }
];
let FaskesPageRoutingModule = class FaskesPageRoutingModule {
};
FaskesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FaskesPageRoutingModule);



/***/ }),

/***/ 90889:
/*!*****************************************!*\
  !*** ./src/app/faskes/faskes.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaskesPageModule": () => (/* binding */ FaskesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _faskes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faskes-routing.module */ 37036);
/* harmony import */ var _faskes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faskes.page */ 14278);







let FaskesPageModule = class FaskesPageModule {
};
FaskesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _faskes_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaskesPageRoutingModule
        ],
        declarations: [_faskes_page__WEBPACK_IMPORTED_MODULE_1__.FaskesPage]
    })
], FaskesPageModule);



/***/ }),

/***/ 14278:
/*!***************************************!*\
  !*** ./src/app/faskes/faskes.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaskesPage": () => (/* binding */ FaskesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_faskes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./faskes.page.html */ 97336);
/* harmony import */ var _faskes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faskes.page.scss */ 35774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 54357);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ 713);
/* harmony import */ var _faskes_add_faskes_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../faskes-add/faskes-add.page */ 25946);









var loading;
let FaskesPage = class FaskesPage {
    constructor(storage, loadingController, modalController, firestore, toastController) {
        this.storage = storage;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.firestore = firestore;
        this.toastController = toastController;
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var snapshot = yield firebase__WEBPACK_IMPORTED_MODULE_2__.default.firestore().collection('faskes').get();
            if (snapshot.empty) {
                this.faskes = [];
            }
            else {
                this.faskes = [];
                snapshot.forEach((snap) => {
                    var data = snap.data();
                    data.id = snap.id;
                    this.faskes.push(data);
                });
                this.tmpfaskes = this.faskes;
            }
        });
    }
    addForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _faskes_add_faskes_add_page__WEBPACK_IMPORTED_MODULE_3__.FaskesAddPage,
                swipeToClose: true,
                backdropDismiss: false,
                componentProps: {
                    onGoBack: () => {
                        this.loadData();
                    },
                },
            });
            modal.present();
        });
    }
    deleteFaskes(faskes) {
        firebase__WEBPACK_IMPORTED_MODULE_2__.default.firestore()
            .collection('faskes')
            .doc(faskes.id)
            .delete()
            .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var toast = yield this.toastController.create({
                message: 'Fasilitas kesehatan berhasil dihapus',
                duration: 3000,
                color: 'success',
            });
            toast.present();
            setTimeout(() => {
                this.loadData();
            }, 500);
        }));
        this.loadData();
    }
    editFaskes(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _faskes_add_faskes_add_page__WEBPACK_IMPORTED_MODULE_3__.FaskesAddPage,
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
            yield modal.present();
        });
    }
    search(val) {
        const value = val.detail.value;
        this.faskes = this.tmpfaskes;
        if (value == '') {
            this.faskes = this.tmpfaskes;
        }
        else {
            this.faskes = this.faskes.filter((x) => x.nama.toLowerCase().includes(value.toLowerCase()) ||
                x.alamat.toLowerCase().includes(value.toLowerCase()));
        }
    }
};
FaskesPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
FaskesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-faskes',
        template: _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_faskes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_faskes_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FaskesPage);



/***/ }),

/***/ 97336:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/faskes/faskes.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Fasilitas Kesehatan</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"addForm()\" color=\"primary\"\r\n        >Tambah</ion-button\r\n      >\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-searchbar\r\n    placeholder=\"Search\"\r\n    (ionChange)=\"search($event)\"\r\n  ></ion-searchbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let fas of faskes;let i=index;\">\r\n      <ion-label>{{i+1}}. {{fas.nama}}</ion-label>\r\n      <ion-label>{{fas.phone}}</ion-label>\r\n      <ion-label>{{fas.alamat}}</ion-label>\r\n      <ion-label>{{fas.latitude}}</ion-label>\r\n      <ion-label>{{fas.longitude}}</ion-label>\r\n      <ion-button fill=\"clear\" color=\"primary\" (click)=\"editFaskes(fas)\"\r\n        >Edit</ion-button\r\n      >\r\n      <ion-button fill=\"clear\" color=\"danger\" (click)=\"deleteFaskes(fas)\"\r\n        >Delete</ion-button\r\n      >\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ 35774:
/*!*****************************************!*\
  !*** ./src/app/faskes/faskes.page.scss ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXNrZXMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_faskes_faskes_module_ts.js.map