"use strict";
(self["webpackChunkpantau_dashboard"] = self["webpackChunkpantau_dashboard"] || []).push([["src_app_edukasi-edit_edukasi-edit_module_ts"],{

/***/ 34682:
/*!*************************************************************!*\
  !*** ./src/app/edukasi-edit/edukasi-edit-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdukasiEditPageRoutingModule": () => (/* binding */ EdukasiEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _edukasi_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edukasi-edit.page */ 17152);




const routes = [
    {
        path: '',
        component: _edukasi_edit_page__WEBPACK_IMPORTED_MODULE_0__.EdukasiEditPage
    }
];
let EdukasiEditPageRoutingModule = class EdukasiEditPageRoutingModule {
};
EdukasiEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EdukasiEditPageRoutingModule);



/***/ }),

/***/ 25789:
/*!*****************************************************!*\
  !*** ./src/app/edukasi-edit/edukasi-edit.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdukasiEditPageModule": () => (/* binding */ EdukasiEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _edukasi_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edukasi-edit-routing.module */ 34682);
/* harmony import */ var _edukasi_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edukasi-edit.page */ 17152);







let EdukasiEditPageModule = class EdukasiEditPageModule {
};
EdukasiEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edukasi_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.EdukasiEditPageRoutingModule
        ],
        declarations: [_edukasi_edit_page__WEBPACK_IMPORTED_MODULE_1__.EdukasiEditPage]
    })
], EdukasiEditPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_edukasi-edit_edukasi-edit_module_ts.js.map