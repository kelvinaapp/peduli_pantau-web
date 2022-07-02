"use strict";
(self["webpackChunkpantau_dashboard"] = self["webpackChunkpantau_dashboard"] || []).push([["src_app_monitor-log_monitor-log_module_ts"],{

/***/ 77225:
/*!***********************************************************!*\
  !*** ./src/app/monitor-log/monitor-log-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorLogPageRoutingModule": () => (/* binding */ MonitorLogPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _monitor_log_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor-log.page */ 89036);




const routes = [
    {
        path: '',
        component: _monitor_log_page__WEBPACK_IMPORTED_MODULE_0__.MonitorLogPage
    }
];
let MonitorLogPageRoutingModule = class MonitorLogPageRoutingModule {
};
MonitorLogPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MonitorLogPageRoutingModule);



/***/ }),

/***/ 99114:
/*!***************************************************!*\
  !*** ./src/app/monitor-log/monitor-log.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorLogPageModule": () => (/* binding */ MonitorLogPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _monitor_log_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor-log-routing.module */ 77225);
/* harmony import */ var _monitor_log_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitor-log.page */ 89036);







let MonitorLogPageModule = class MonitorLogPageModule {
};
MonitorLogPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _monitor_log_routing_module__WEBPACK_IMPORTED_MODULE_0__.MonitorLogPageRoutingModule
        ],
        declarations: [_monitor_log_page__WEBPACK_IMPORTED_MODULE_1__.MonitorLogPage]
    })
], MonitorLogPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_monitor-log_monitor-log_module_ts.js.map