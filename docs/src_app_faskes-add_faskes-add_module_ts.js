"use strict";
(self["webpackChunkpantau_dashboard"] = self["webpackChunkpantau_dashboard"] || []).push([["src_app_faskes-add_faskes-add_module_ts"],{

/***/ 75148:
/*!*********************************************************!*\
  !*** ./src/app/faskes-add/faskes-add-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaskesAddPageRoutingModule": () => (/* binding */ FaskesAddPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _faskes_add_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faskes-add.page */ 25946);




const routes = [
    {
        path: '',
        component: _faskes_add_page__WEBPACK_IMPORTED_MODULE_0__.FaskesAddPage
    }
];
let FaskesAddPageRoutingModule = class FaskesAddPageRoutingModule {
};
FaskesAddPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FaskesAddPageRoutingModule);



/***/ }),

/***/ 1672:
/*!*************************************************!*\
  !*** ./src/app/faskes-add/faskes-add.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaskesAddPageModule": () => (/* binding */ FaskesAddPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _faskes_add_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faskes-add-routing.module */ 75148);
/* harmony import */ var _faskes_add_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faskes-add.page */ 25946);








let FaskesAddPageModule = class FaskesAddPageModule {
};
FaskesAddPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _faskes_add_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaskesAddPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_faskes_add_page__WEBPACK_IMPORTED_MODULE_1__.FaskesAddPage]
    })
], FaskesAddPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_faskes-add_faskes-add_module_ts.js.map