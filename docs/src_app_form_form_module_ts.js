"use strict";
(self["webpackChunkpantau_dashboard"] = self["webpackChunkpantau_dashboard"] || []).push([["src_app_form_form_module_ts"],{

/***/ 52438:
/*!*********************************************!*\
  !*** ./src/app/form/form-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPageRoutingModule": () => (/* binding */ FormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.page */ 80208);




const routes = [
    {
        path: '',
        component: _form_page__WEBPACK_IMPORTED_MODULE_0__.FormPage
    }
];
let FormPageRoutingModule = class FormPageRoutingModule {
};
FormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormPageRoutingModule);



/***/ }),

/***/ 9659:
/*!*************************************!*\
  !*** ./src/app/form/form.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPageModule": () => (/* binding */ FormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-routing.module */ 52438);
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.page */ 80208);







let FormPageModule = class FormPageModule {
};
FormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _form_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormPageRoutingModule
        ],
        declarations: [_form_page__WEBPACK_IMPORTED_MODULE_1__.FormPage]
    })
], FormPageModule);



/***/ }),

/***/ 80208:
/*!***********************************!*\
  !*** ./src/app/form/form.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPage": () => (/* binding */ FormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./form.page.html */ 95224);
/* harmony import */ var _form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.page.scss */ 61760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 54357);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ 713);
/* harmony import */ var _form_add_form_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-add/form-add.page */ 20559);









let FormPage = class FormPage {
    constructor(storage, loadingController, modalController, firestore, toastController) {
        this.storage = storage;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.firestore = firestore;
        this.toastController = toastController;
        this.form = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loadForm();
        });
    }
    loadForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var snapshot = yield firebase__WEBPACK_IMPORTED_MODULE_2__.default.firestore()
                .collection('formlog')
                .orderBy('nomor', 'asc')
                .get();
            if (snapshot.empty) {
                this.form = [];
            }
            else {
                this.form = [];
                snapshot.forEach((snap) => {
                    var data = snap.data();
                    data.id = snap.id;
                    this.form.push(data);
                });
            }
        });
    }
    deleteQuestion(id) {
        firebase__WEBPACK_IMPORTED_MODULE_2__.default.firestore()
            .collection('formlog')
            .doc(id)
            .delete()
            .then(() => {
            this.loadForm();
        });
    }
    addQuestion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_add_form_add_page__WEBPACK_IMPORTED_MODULE_3__.FormAddPage,
                swipeToClose: true,
                backdropDismiss: false,
                componentProps: {
                    onGoBack: () => {
                        this.loadForm();
                    },
                    totalquestion: this.form.length,
                },
            });
            modal.present();
        });
    }
    editQuestion(form, i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_add_form_add_page__WEBPACK_IMPORTED_MODULE_3__.FormAddPage,
                swipeToClose: true,
                backdropDismiss: false,
                componentProps: {
                    onGoBack: () => {
                        this.loadForm();
                    },
                    isEdit: true,
                    nomor: i,
                    data: form,
                },
            });
            modal.present();
        });
    }
};
FormPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
FormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-form',
        template: _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_form_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormPage);



/***/ }),

/***/ 95224:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/form/form.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Form Laporan Harian</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"primary\" (click)=\"addQuestion()\"\r\n        >Tambah Pertanyaan</ion-button\r\n      >\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label slot=\"start\">Pertanyaan</ion-label>\r\n    <ion-label slot=\"end\">Jawaban</ion-label>\r\n  </ion-item>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let f  of form;let i = index;\">\r\n      <ion-label>{{(i+1)}}. {{f.question}}</ion-label>\r\n      <ion-item *ngFor=\"let opt of f.option\">\r\n        <ion-label color=\"medium\">{{opt.label}}</ion-label>\r\n      </ion-item>\r\n      <ion-button fill=\"clear\" color=\"danger\" (click)=\"deleteQuestion(f.id)\"\r\n        ><ion-icon name=\"trash\"></ion-icon\r\n      ></ion-button>\r\n      <ion-button\r\n        fill=\"clear\"\r\n        color=\"primary\"\r\n        (click)=\"editQuestion(f,f.nomor || (i+1))\"\r\n        ><ion-icon name=\"pencil\"></ion-icon\r\n      ></ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ 61760:
/*!*************************************!*\
  !*** ./src/app/form/form.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_form_form_module_ts.js.map