"use strict";
(self["webpackChunkpantau_dashboard"] = self["webpackChunkpantau_dashboard"] || []).push([["src_app_pasien-detail_pasien-detail_module_ts"],{

/***/ 73213:
/*!***************************************************************!*\
  !*** ./src/app/pasien-detail/pasien-detail-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasienDetailPageRoutingModule": () => (/* binding */ PasienDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _pasien_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pasien-detail.page */ 36637);




const routes = [
    {
        path: '',
        component: _pasien_detail_page__WEBPACK_IMPORTED_MODULE_0__.PasienDetailPage
    }
];
let PasienDetailPageRoutingModule = class PasienDetailPageRoutingModule {
};
PasienDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PasienDetailPageRoutingModule);



/***/ }),

/***/ 35137:
/*!*******************************************************!*\
  !*** ./src/app/pasien-detail/pasien-detail.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasienDetailPageModule": () => (/* binding */ PasienDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _pasien_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pasien-detail-routing.module */ 73213);
/* harmony import */ var _pasien_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pasien-detail.page */ 36637);







let PasienDetailPageModule = class PasienDetailPageModule {
};
PasienDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pasien_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.PasienDetailPageRoutingModule
        ],
        declarations: [_pasien_detail_page__WEBPACK_IMPORTED_MODULE_1__.PasienDetailPage]
    })
], PasienDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pasien-detail_pasien-detail_module_ts.js.map