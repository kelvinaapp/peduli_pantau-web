"use strict";
(self["webpackChunkpantau_dashboard"] = self["webpackChunkpantau_dashboard"] || []).push([["src_app_pasien-edit_pasien-edit_module_ts"],{

/***/ 70774:
/*!***********************************************************!*\
  !*** ./src/app/pasien-edit/pasien-edit-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasienEditPageRoutingModule": () => (/* binding */ PasienEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _pasien_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pasien-edit.page */ 89399);




const routes = [
    {
        path: '',
        component: _pasien_edit_page__WEBPACK_IMPORTED_MODULE_0__.PasienEditPage
    }
];
let PasienEditPageRoutingModule = class PasienEditPageRoutingModule {
};
PasienEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PasienEditPageRoutingModule);



/***/ }),

/***/ 76888:
/*!***************************************************!*\
  !*** ./src/app/pasien-edit/pasien-edit.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasienEditPageModule": () => (/* binding */ PasienEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _pasien_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pasien-edit-routing.module */ 70774);
/* harmony import */ var _pasien_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pasien-edit.page */ 89399);







let PasienEditPageModule = class PasienEditPageModule {
};
PasienEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pasien_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.PasienEditPageRoutingModule
        ],
        declarations: [_pasien_edit_page__WEBPACK_IMPORTED_MODULE_1__.PasienEditPage]
    })
], PasienEditPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pasien-edit_pasien-edit_module_ts.js.map