"use strict";
(self["webpackChunkpantau_dashboard"] = self["webpackChunkpantau_dashboard"] || []).push([["src_app_location-log_location-log_module_ts"],{

/***/ 78439:
/*!*************************************************************!*\
  !*** ./src/app/location-log/location-log-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationLogPageRoutingModule": () => (/* binding */ LocationLogPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _location_log_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-log.page */ 1086);




const routes = [
    {
        path: '',
        component: _location_log_page__WEBPACK_IMPORTED_MODULE_0__.LocationLogPage
    }
];
let LocationLogPageRoutingModule = class LocationLogPageRoutingModule {
};
LocationLogPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LocationLogPageRoutingModule);



/***/ }),

/***/ 91028:
/*!*****************************************************!*\
  !*** ./src/app/location-log/location-log.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationLogPageModule": () => (/* binding */ LocationLogPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _location_log_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-log-routing.module */ 78439);
/* harmony import */ var _location_log_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-log.page */ 1086);







let LocationLogPageModule = class LocationLogPageModule {
};
LocationLogPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _location_log_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocationLogPageRoutingModule
        ],
        declarations: [_location_log_page__WEBPACK_IMPORTED_MODULE_1__.LocationLogPage]
    })
], LocationLogPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_location-log_location-log_module_ts.js.map