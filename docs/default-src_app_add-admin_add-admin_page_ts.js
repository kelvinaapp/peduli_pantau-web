"use strict";
(self["webpackChunkpantau_dashboard"] = self["webpackChunkpantau_dashboard"] || []).push([["default-src_app_add-admin_add-admin_page_ts"],{

/***/ 12786:
/*!*********************************************!*\
  !*** ./src/app/add-admin/add-admin.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAdminPage": () => (/* binding */ AddAdminPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_admin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-admin.page.html */ 74805);
/* harmony import */ var _add_admin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-admin.page.scss */ 92430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! md5 */ 45928);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ 713);










var loading;
let AddAdminPage = class AddAdminPage {
    constructor(loadingController, formBuilder, modalController, toastController, firestore) {
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.toastController = toastController;
        this.firestore = firestore;
        this.forms = [
            { label: "NIK", type: "number", secure: false, value: "", name: "nik" },
            { label: "Nama Lengkap", type: "text", secure: false, value: "", name: "name" },
            { label: "Alamat", type: "text", secure: false, value: "", name: "alamat" },
            { label: "Username", type: "text", secure: false, value: "", name: "username" },
            { label: "Password", type: "password", secure: false, value: "", name: "password" },
            { label: "Privileges", type: "radio", secure: false, value: "", name: "privileges", option: [
                    { label: "Superadmin", value: "superadmin" },
                    { label: "Admin", value: "admin" },
                ] },
        ];
    }
    ngOnInit() {
        if (this.isEdit) {
            this.forms = [
                { label: "NIK", type: "number", secure: false, value: this.data.nik, name: "nik" },
                { label: "Nama Lengkap", type: "text", secure: false, value: this.data.name, name: "name" },
                { label: "Alamat", type: "text", secure: false, value: this.data.alamat, name: "alamat" },
                { label: "Username", type: "text", secure: false, value: this.data.username, name: "username" },
                { label: "Password", type: "password", secure: false, value: this.data.password, name: "password" },
                { label: "Privileges", type: "radio", secure: false, value: this.data.privileges, name: "privileges", option: [
                        { label: "Superadmin", value: "superadmin" },
                        { label: "Admin", value: "admin" },
                    ] },
            ];
            this.ionicForm = this.formBuilder.group({
                nik: [this.data.nik, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
                name: [this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
                alamat: [this.data.alamat, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
                username: [this.data.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
                password: [this.data.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
                privileges: [this.data.privileges, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
            });
        }
        else {
            this.ionicForm = this.formBuilder.group({
                nik: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
                alamat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
                username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
                privileges: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
            });
        }
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.showLoading();
            if (this.isEdit) {
                if (this.ionicForm.valid) {
                    var newdata = this.ionicForm.value;
                    newdata.password = md5__WEBPACK_IMPORTED_MODULE_3__(newdata.password);
                    newdata.updated_at = moment__WEBPACK_IMPORTED_MODULE_2__().valueOf();
                    firebase__WEBPACK_IMPORTED_MODULE_4__.default.firestore().collection("admin").doc(this.data.id).update(newdata).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        this.hideLoading();
                        var toast = yield this.toastController.create({
                            message: "Admin berhasil diupdate",
                            duration: 3000,
                            color: "success"
                        });
                        toast.present();
                        this.onGoBack();
                        this.modalController.dismiss();
                    })).catch((er) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        this.hideLoading();
                        var toast = yield this.toastController.create({
                            message: "Admin gagal diupdate:" + er.message,
                            duration: 5000,
                            color: "danger"
                        });
                        toast.present();
                        this.onGoBack();
                        this.modalController.dismiss();
                    }));
                }
                else {
                    var toast = yield this.toastController.create({
                        message: "Mohon isi semua form",
                        duration: 3000,
                        color: "danger"
                    });
                    toast.present();
                }
            }
            else {
                if (this.ionicForm.valid) {
                    var newdata = this.ionicForm.value;
                    newdata.password = md5__WEBPACK_IMPORTED_MODULE_3__(newdata.password);
                    newdata.created_at = moment__WEBPACK_IMPORTED_MODULE_2__().valueOf();
                    firebase__WEBPACK_IMPORTED_MODULE_4__.default.firestore().collection("admin").add(newdata).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        this.hideLoading();
                        var toast = yield this.toastController.create({
                            message: "Admin berhasil ditambah",
                            duration: 3000,
                            color: "success"
                        });
                        toast.present();
                        this.onGoBack();
                        this.modalController.dismiss();
                    })).catch((er) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        this.hideLoading();
                        var toast = yield this.toastController.create({
                            message: "Admin gagal ditambakan:" + er.message,
                            duration: 5000,
                            color: "danger"
                        });
                        toast.present();
                        this.onGoBack();
                        this.modalController.dismiss();
                    }));
                }
                else {
                    var toast = yield this.toastController.create({
                        message: "Mohon isi semua form",
                        duration: 3000,
                        color: "danger"
                    });
                    toast.present();
                }
            }
        });
    }
    close() {
        this.modalController.dismiss();
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
AddAdminPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore }
];
AddAdminPage.propDecorators = {
    onGoBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    isEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
AddAdminPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-add-admin',
        template: _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_admin_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_admin_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddAdminPage);



/***/ }),

/***/ 74805:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/add-admin/add-admin.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Tambah Admin</ion-title>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list>\r\n    <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submit()\">\r\n      <ion-item *ngFor=\"let form of forms\">\r\n        <ion-label>{{form.label}}</ion-label>\r\n        <ion-input [formControlName]=\"form.name\" type=\"text\" *ngIf=\"form.type == 'text'\" [(ngModel)]=\"form.value\"></ion-input>\r\n        <ion-input [formControlName]=\"form.name\" type=\"password\" *ngIf=\"form.type == 'password'\" [(ngModel)]=\"form.value\"></ion-input>\r\n        <ion-input [formControlName]=\"form.name\" type=\"number\" *ngIf=\"form.type == 'number'\" [(ngModel)]=\"form.value\"></ion-input>\r\n        <ion-radio-group [formControlName]=\"form.name\" *ngIf=\"form.type == 'radio'\" [(ngModel)]=\"form.value\">\r\n          <ion-item *ngFor=\"let opt of form.option\">\r\n            <ion-radio [value]=\"opt.value\"></ion-radio>\r\n            <ion-label>{{opt.label}}</ion-label>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </ion-item>\r\n      <ion-button type=\"submit\">Submit</ion-button>\r\n      </form>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 92430:
/*!***********************************************!*\
  !*** ./src/app/add-admin/add-admin.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYWRtaW4ucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_add-admin_add-admin_page_ts.js.map