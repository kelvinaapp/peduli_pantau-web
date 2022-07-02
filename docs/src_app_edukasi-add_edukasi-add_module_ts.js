"use strict";
(self["webpackChunkpantau_dashboard"] = self["webpackChunkpantau_dashboard"] || []).push([["src_app_edukasi-add_edukasi-add_module_ts"],{

/***/ 80372:
/*!***********************************************************!*\
  !*** ./src/app/edukasi-add/edukasi-add-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdukasiAddPageRoutingModule": () => (/* binding */ EdukasiAddPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _edukasi_add_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edukasi-add.page */ 16974);




const routes = [
    {
        path: '',
        component: _edukasi_add_page__WEBPACK_IMPORTED_MODULE_0__.EdukasiAddPage
    }
];
let EdukasiAddPageRoutingModule = class EdukasiAddPageRoutingModule {
};
EdukasiAddPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EdukasiAddPageRoutingModule);



/***/ }),

/***/ 26660:
/*!***************************************************!*\
  !*** ./src/app/edukasi-add/edukasi-add.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdukasiAddPageModule": () => (/* binding */ EdukasiAddPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _edukasi_add_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edukasi-add-routing.module */ 80372);
/* harmony import */ var _edukasi_add_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edukasi-add.page */ 16974);







let EdukasiAddPageModule = class EdukasiAddPageModule {
};
EdukasiAddPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edukasi_add_routing_module__WEBPACK_IMPORTED_MODULE_0__.EdukasiAddPageRoutingModule
        ],
        declarations: [_edukasi_add_page__WEBPACK_IMPORTED_MODULE_1__.EdukasiAddPage]
    })
], EdukasiAddPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_edukasi-add_edukasi-add_module_ts.js.map