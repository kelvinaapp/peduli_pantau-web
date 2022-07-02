"use strict";
(self["webpackChunkpantau_dashboard"] = self["webpackChunkpantau_dashboard"] || []).push([["src_app_edukasi_edukasi_module_ts"],{

/***/ 77203:
/*!***************************************************!*\
  !*** ./src/app/edukasi/edukasi-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdukasiPageRoutingModule": () => (/* binding */ EdukasiPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _edukasi_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edukasi.page */ 25184);




const routes = [
    {
        path: '',
        component: _edukasi_page__WEBPACK_IMPORTED_MODULE_0__.EdukasiPage
    }
];
let EdukasiPageRoutingModule = class EdukasiPageRoutingModule {
};
EdukasiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EdukasiPageRoutingModule);



/***/ }),

/***/ 88682:
/*!*******************************************!*\
  !*** ./src/app/edukasi/edukasi.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdukasiPageModule": () => (/* binding */ EdukasiPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _edukasi_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edukasi-routing.module */ 77203);
/* harmony import */ var _edukasi_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edukasi.page */ 25184);







let EdukasiPageModule = class EdukasiPageModule {
};
EdukasiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edukasi_routing_module__WEBPACK_IMPORTED_MODULE_0__.EdukasiPageRoutingModule
        ],
        declarations: [_edukasi_page__WEBPACK_IMPORTED_MODULE_1__.EdukasiPage]
    })
], EdukasiPageModule);



/***/ }),

/***/ 25184:
/*!*****************************************!*\
  !*** ./src/app/edukasi/edukasi.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdukasiPage": () => (/* binding */ EdukasiPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edukasi_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edukasi.page.html */ 35182);
/* harmony import */ var _edukasi_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edukasi.page.scss */ 88133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 54357);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ 713);
/* harmony import */ var _edukasi_add_edukasi_add_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edukasi-add/edukasi-add.page */ 16974);
/* harmony import */ var _edukasi_edit_edukasi_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edukasi-edit/edukasi-edit.page */ 17152);











var loading;
let EdukasiPage = class EdukasiPage {
    constructor(storage, loadingController, modalController, firestore, toastController) {
        this.storage = storage;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.firestore = firestore;
        this.toastController = toastController;
        this.edukasi = [];
        this.tmpedukasi = [];
        this.column = [
            // { label: 'No' },
            { label: 'Judul' },
            { label: 'Gambar' },
            { label: 'Content' },
            { label: 'Tanggal' },
            { label: 'Action' },
        ];
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var snapshot = yield firebase__WEBPACK_IMPORTED_MODULE_3__.default.firestore().collection('edukasi').get();
            if (snapshot.empty) {
                this.edukasi = [];
            }
            else {
                this.edukasi = [];
                snapshot.forEach((snap) => {
                    var data = snap.data();
                    data.id = snap.id;
                    data.formattedtime = moment__WEBPACK_IMPORTED_MODULE_2__(data.created_at).format('DD MMM YYYY HH:mm');
                    this.edukasi.push(data);
                });
                this.tmpedukasi = this.edukasi;
            }
        });
    }
    addEdukasi() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _edukasi_add_edukasi_add_page__WEBPACK_IMPORTED_MODULE_4__.EdukasiAddPage,
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
    editEdukasi(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _edukasi_edit_edukasi_edit_page__WEBPACK_IMPORTED_MODULE_5__.EdukasiEditPage,
                swipeToClose: true,
                backdropDismiss: false,
                componentProps: {
                    onGoBack: () => {
                        this.loadData();
                    },
                    data: data,
                },
            });
            modal.present();
        });
    }
    deleteEdukasi(id) {
        this.showLoading();
        firebase__WEBPACK_IMPORTED_MODULE_3__.default.firestore()
            .collection('edukasi')
            .doc(id)
            .delete()
            .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.hideLoading();
            var toast = yield this.toastController.create({
                message: 'Edukasi berhasil dihapus',
                duration: 3000,
                color: 'success',
            });
            toast.present();
            setTimeout(() => {
                this.loadData();
            }, 500);
        }))
            .catch((er) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.hideLoading();
            var toast = yield this.toastController.create({
                message: 'Edukasi gagal dihapus:' + er.message,
                duration: 3000,
                color: 'danger',
            });
            toast.present();
        }));
    }
    search(val) {
        const value = val.detail.value;
        this.edukasi = this.tmpedukasi;
        if (value == '') {
            this.edukasi = this.tmpedukasi;
        }
        else {
            this.edukasi = this.edukasi.filter((x) => x.judul.toLowerCase().includes(value.toLowerCase()) ||
                x.content.toLowerCase().includes(value.toLowerCase()));
        }
    }
    showLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            yield loading.present();
        });
    }
    hideLoading() {
        loading.dismiss();
    }
};
EdukasiPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController }
];
EdukasiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-edukasi',
        template: _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edukasi_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edukasi_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EdukasiPage);



/***/ }),

/***/ 35182:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/edukasi/edukasi.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edukasi</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"addEdukasi()\" fill=\"clear\">Tambah</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-searchbar\r\n    placeholder=\"Search\"\r\n    (ionChange)=\"search($event)\"\r\n  ></ion-searchbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-item>\r\n    <ion-label *ngFor=\"let col of column\"><b>{{col.label}}</b></ion-label>\r\n  </ion-item>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let edu of edukasi;let i=index\">\r\n      <ion-label>{{edu.judul}}</ion-label>\r\n      <ion-label>\r\n        <ion-thumbnail>\r\n          <img [src]=\"edu.gambar\" alt=\"\" />\r\n        </ion-thumbnail>\r\n      </ion-label>\r\n      <ion-label>{{edu.content.substr(0,100)}}</ion-label>\r\n      <ion-label>{{edu.formattedtime}}</ion-label>\r\n      <ion-label>\r\n        <ion-button fill=\"clear\" color=\"primary\" (click)=\"editEdukasi(edu)\"\r\n          >Edit</ion-button\r\n        >\r\n        <ion-button fill=\"clear\" color=\"danger\" (click)=\"deleteEdukasi(edu.id)\"\r\n          >Delete</ion-button\r\n        >\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ 88133:
/*!*******************************************!*\
  !*** ./src/app/edukasi/edukasi.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  text-align: left;\n}\n\nion-thumbnail {\n  align-self: flex-start;\n  margin: 0px;\n}\n\nion-label {\n  align-self: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkdWthc2kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UsNkJBQUE7QUFHRiIsImZpbGUiOiJlZHVrYXNpLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuaW9uLXRodW1ibmFpbHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbjowcHg7XHJcbn1cclxuaW9uLWxhYmVse1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_edukasi_edukasi_module_ts.js.map