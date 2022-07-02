"use strict";
(self["webpackChunkpantau_dashboard"] = self["webpackChunkpantau_dashboard"] || []).push([["src_app_add-admin_add-admin_module_ts"],{

/***/ 81279:
/*!*******************************************************!*\
  !*** ./src/app/add-admin/add-admin-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAdminPageRoutingModule": () => (/* binding */ AddAdminPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _add_admin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-admin.page */ 12786);




const routes = [
    {
        path: '',
        component: _add_admin_page__WEBPACK_IMPORTED_MODULE_0__.AddAdminPage
    }
];
let AddAdminPageRoutingModule = class AddAdminPageRoutingModule {
};
AddAdminPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddAdminPageRoutingModule);



/***/ }),

/***/ 11228:
/*!***********************************************!*\
  !*** ./src/app/add-admin/add-admin.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAdminPageModule": () => (/* binding */ AddAdminPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _add_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-admin-routing.module */ 81279);
/* harmony import */ var _add_admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-admin.page */ 12786);








let AddAdminPageModule = class AddAdminPageModule {
};
AddAdminPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddAdminPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_add_admin_page__WEBPACK_IMPORTED_MODULE_1__.AddAdminPage]
    })
], AddAdminPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_add-admin_add-admin_module_ts.js.map