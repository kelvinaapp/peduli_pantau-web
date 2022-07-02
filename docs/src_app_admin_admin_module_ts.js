"use strict";
(self["webpackChunkpantau_dashboard"] = self["webpackChunkpantau_dashboard"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 13176:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageRoutingModule": () => (/* binding */ AdminPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.page */ 60153);




const routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_0__.AdminPage
    }
];
let AdminPageRoutingModule = class AdminPageRoutingModule {
};
AdminPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminPageRoutingModule);



/***/ }),

/***/ 77095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageModule": () => (/* binding */ AdminPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 13176);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page */ 60153);







let AdminPageModule = class AdminPageModule {
};
AdminPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminPageRoutingModule
        ],
        declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_1__.AdminPage]
    })
], AdminPageModule);



/***/ }),

/***/ 60153:
/*!*************************************!*\
  !*** ./src/app/admin/admin.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPage": () => (/* binding */ AdminPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_admin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./admin.page.html */ 16443);
/* harmony import */ var _admin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page.scss */ 72149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 54357);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _add_admin_add_admin_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-admin/add-admin.page */ 12786);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ 713);









var loading;
let AdminPage = class AdminPage {
    constructor(storage, loadingController, modalController, firestore, toastController) {
        this.storage = storage;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.firestore = firestore;
        this.toastController = toastController;
        this.column = [
            { label: 'Name' },
            { label: 'Username' },
            { label: 'Privilege' },
            { label: 'Action' },
        ];
        storage.get('admin').then((admin) => {
            this.admin = JSON.parse(admin);
            console.log('ADMIN:', this.admin);
        });
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var snapshot = yield firebase__WEBPACK_IMPORTED_MODULE_3__.default.firestore().collection('admin').get();
            if (snapshot.empty) {
                this.adminlist = [];
            }
            else {
                this.adminlist = [];
                snapshot.forEach((snap) => {
                    var data = snap.data();
                    data.id = snap.id;
                    this.adminlist.push(data);
                });
                this.tmpadmin = this.adminlist;
            }
        });
    }
    showForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.admin.privileges == 'superadmin') {
                var modal = yield this.modalController.create({
                    component: _add_admin_add_admin_page__WEBPACK_IMPORTED_MODULE_2__.AddAdminPage,
                    swipeToClose: true,
                    backdropDismiss: false,
                    componentProps: {
                        onGoBack: () => {
                            this.loadData();
                        },
                    },
                });
                yield modal.present();
            }
            else {
                var toast = yield this.toastController.create({
                    message: 'Hanya untuk Superadmin!',
                    duration: 3000,
                    position: 'top',
                    color: 'dark',
                });
                toast.present();
            }
        });
    }
    editAdmin(admin) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.admin.privileges == 'superadmin') {
                var modal = yield this.modalController.create({
                    component: _add_admin_add_admin_page__WEBPACK_IMPORTED_MODULE_2__.AddAdminPage,
                    swipeToClose: true,
                    backdropDismiss: false,
                    componentProps: {
                        onGoBack: () => {
                            this.loadData();
                        },
                        data: admin,
                        isEdit: true,
                    },
                });
                yield modal.present();
            }
            else {
                var toast = yield this.toastController.create({
                    message: 'Hanya untuk Superadmin!',
                    duration: 3000,
                    position: 'top',
                    color: 'dark',
                });
                toast.present();
            }
        });
    }
    deleteAdmin(admin) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.admin.privileges == 'superadmin') {
                this.showLoading();
                firebase__WEBPACK_IMPORTED_MODULE_3__.default.firestore()
                    .collection('admin')
                    .doc(admin.id)
                    .delete()
                    .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    var toast = yield this.toastController.create({
                        message: 'Admin berhasil dihapus',
                        duration: 3000,
                        color: 'success',
                    });
                    this.hideLoading();
                    toast.present();
                    this.loadData();
                }))
                    .catch((er) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    this.hideLoading();
                    var toast = yield this.toastController.create({
                        message: 'Gagal menghapus admin:' + er.message,
                        duration: 5000,
                        color: 'danger',
                    });
                    toast.present();
                }));
            }
            else {
                var toast = yield this.toastController.create({
                    message: 'Hanya untuk Superadmin!',
                    duration: 3000,
                    position: 'top',
                    color: 'dark',
                });
                toast.present();
            }
        });
    }
    search(val) {
        const value = val.detail.value;
        if (value.length == 0) {
            this.adminlist = this.tmpadmin;
        }
        else {
            this.adminlist = this.tmpadmin;
            this.adminlist = this.adminlist.filter((x) => x.name.toLowerCase().includes(value.toLowerCase()) ||
                x.username.toLowerCase().includes(value.toLowerCase()) ||
                x.alamat.toLowerCase().includes(value.toLowerCase()));
        }
    }
    showLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
AdminPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
AdminPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-admin',
        template: _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_admin_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_admin_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminPage);



/***/ }),

/***/ 16443:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/admin.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Admin</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"secondary\" (click)=\"showForm()\">\r\n        <ion-icon name=\"person-add-outline\"></ion-icon>\r\n        Tambah Admin\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-searchbar (ionChange)=\"search($event)\"></ion-searchbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label *ngFor=\"let col of column\">{{col.label}}</ion-label>\r\n  </ion-item>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let admin of adminlist\">\r\n      <ion-label>{{admin.name}}</ion-label>\r\n      <ion-label>{{admin.username}}</ion-label>\r\n      <ion-label>{{admin.privileges}}</ion-label>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button fill=\"clear\" color=\"primary\" (click)=\"editAdmin(admin)\"\r\n          >Edit</ion-button\r\n        >\r\n        <ion-button fill=\"clear\" color=\"danger\" (click)=\"deleteAdmin(admin)\"\r\n          >Hapus</ion-button\r\n        >\r\n      </ion-buttons>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ 72149:
/*!***************************************!*\
  !*** ./src/app/admin/admin.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map