"use strict";
(self["webpackChunkpantau_dashboard"] = self["webpackChunkpantau_dashboard"] || []).push([["common"],{

/***/ 80631:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 76842);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 99502);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 88910);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 65709:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 40693);



const attachComponent = /*#__PURE__*/function () {
  var _ref = (0,D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (delegate, container, component, cssClasses, componentProps) {
    if (delegate) {
      return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }

    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
      throw new Error('framework delegate is missing');
    }

    const el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

    if (cssClasses) {
      cssClasses.forEach(c => el.classList.add(c));
    }

    if (componentProps) {
      Object.assign(el, componentProps);
    }

    container.appendChild(el);
    yield new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
    return el;
  });

  return function attachComponent(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }

    element.remove();
  }

  return Promise.resolve();
};



/***/ }),

/***/ 99502:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 15907:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 43784:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
/* harmony import */ var D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);


const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */


const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0 ? Object.assign({
    'ion-color': true,
    [`ion-color-${color}`]: true
  }, cssClassMap) : cssClassMap;
};

const getClassList = classes => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
  }

  return [];
};

const getClassMap = classes => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};

const SCHEME = /^[a-z][a-z0-9+\-.]*:/;

const openURL = /*#__PURE__*/function () {
  var _ref = (0,D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (url, ev, direction, animation) {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
      const router = document.querySelector('ion-router');

      if (router) {
        if (ev != null) {
          ev.preventDefault();
        }

        return router.push(url, direction, animation);
      }
    }

    return false;
  });

  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ 16974:
/*!*************************************************!*\
  !*** ./src/app/edukasi-add/edukasi-add.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdukasiAddPage": () => (/* binding */ EdukasiAddPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edukasi_add_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edukasi-add.page.html */ 14626);
/* harmony import */ var _edukasi_add_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edukasi-add.page.scss */ 44185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 54357);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ 713);









var loading;
let EdukasiAddPage = class EdukasiAddPage {
    constructor(storage, loadingController, modalController, firestore, toastController) {
        this.storage = storage;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.firestore = firestore;
        this.toastController = toastController;
    }
    ngOnInit() {
    }
    close() {
        this.modalController.dismiss();
    }
    submit() {
        this.showLoading();
        firebase__WEBPACK_IMPORTED_MODULE_3__.default.firestore().collection("edukasi").add({
            judul: this.judul,
            gambar: this.gambar,
            content: this.content,
            created_at: moment__WEBPACK_IMPORTED_MODULE_2__().valueOf(),
        }).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.hideLoading();
            var toast = yield this.toastController.create({
                message: "Edukasi berhasil ditambahkan",
                duration: 3000,
                color: "success"
            });
            toast.present();
            this.onGoBack();
            this.modalController.dismiss();
        }));
    }
    showLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
EdukasiAddPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
EdukasiAddPage.propDecorators = {
    onGoBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
EdukasiAddPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-edukasi-add',
        template: _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edukasi_add_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edukasi_add_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EdukasiAddPage);



/***/ }),

/***/ 17152:
/*!***************************************************!*\
  !*** ./src/app/edukasi-edit/edukasi-edit.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdukasiEditPage": () => (/* binding */ EdukasiEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edukasi_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edukasi-edit.page.html */ 73933);
/* harmony import */ var _edukasi_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edukasi-edit.page.scss */ 63515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 54357);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ 713);









var loading;
let EdukasiEditPage = class EdukasiEditPage {
    constructor(storage, loadingController, modalController, firestore, toastController) {
        this.storage = storage;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.firestore = firestore;
        this.toastController = toastController;
    }
    ngOnInit() {
        this.judul = this.data.judul;
        this.gambar = this.data.gambar;
        this.content = this.data.content;
    }
    close() {
        this.modalController.dismiss();
    }
    submit() {
        this.showLoading();
        firebase__WEBPACK_IMPORTED_MODULE_3__.default.firestore().collection("edukasi").doc(this.data.id).update({
            judul: this.judul,
            gambar: this.gambar,
            content: this.content,
            updated_at: moment__WEBPACK_IMPORTED_MODULE_2__().valueOf(),
        }).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.hideLoading();
            var toast = yield this.toastController.create({
                message: "Edukasi berhasil diedit",
                duration: 3000,
                color: "success"
            });
            toast.present();
            this.onGoBack();
            this.modalController.dismiss();
        }));
    }
    showLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
EdukasiEditPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
EdukasiEditPage.propDecorators = {
    onGoBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
EdukasiEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-edukasi-edit',
        template: _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edukasi_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edukasi_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EdukasiEditPage);



/***/ }),

/***/ 25946:
/*!***********************************************!*\
  !*** ./src/app/faskes-add/faskes-add.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaskesAddPage": () => (/* binding */ FaskesAddPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_faskes_add_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./faskes-add.page.html */ 7675);
/* harmony import */ var _faskes_add_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faskes-add.page.scss */ 67491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ 54357);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ 713);










var loading;
let FaskesAddPage = class FaskesAddPage {
    constructor(formBuilder, storage, loadingController, modalController, firestore, toastController) {
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.firestore = firestore;
        this.toastController = toastController;
        this.forms = [];
        this.forms = [
            { label: "Nama Faskes", type: "text", secure: false, value: "", name: "nama" },
            { label: "Alamat", type: "text", secure: false, value: "", name: "alamat" },
            { label: "Latitude", type: "text", secure: false, value: "", name: "latitude" },
            { label: "Longitude", type: "text", secure: false, value: "", name: "longitude" },
            { label: "No Telepon", type: "text", secure: false, value: "", name: "phone" },
        ];
    }
    ngOnInit() {
        console.log("IS EDIT:", this.isEdit);
        console.log("Data:", this.data);
        if (this.isEdit) {
            this.forms = [
                { label: "Nama Faskes", type: "text", secure: false, value: this.data.nama, name: "nama" },
                { label: "Alamat", type: "text", secure: false, value: this.data.alamat, name: "alamat" },
                { label: "Latitude", type: "text", secure: false, value: this.data.latitude, name: "latitude" },
                { label: "Longitude", type: "text", secure: false, value: this.data.longitude, name: "longitude" },
                { label: "No Telepon", type: "text", secure: false, value: this.data.phone, name: "phone" },
            ];
            this.ionicForm = this.formBuilder.group({
                nama: [this.data.nama, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
                alamat: [this.data.alamat, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
                latitude: [this.data.latitude, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
                longitude: [this.data.longitude, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
                phone: [this.data.phone],
            });
        }
        else {
            this.ionicForm = this.formBuilder.group({
                nama: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
                alamat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
                latitude: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
                longitude: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
                phone: [''],
            });
        }
    }
    close() {
        this.modalController.dismiss();
    }
    submit() {
        this.showLoading();
        if (this.isEdit) {
            var newdata = this.ionicForm.value;
            newdata.updated_at = moment__WEBPACK_IMPORTED_MODULE_2__().valueOf();
            newdata.latitude = parseFloat(newdata.latitude);
            newdata.longitude = parseFloat(newdata.longitude);
            firebase__WEBPACK_IMPORTED_MODULE_3__.default.firestore().collection("faskes").doc(this.data.id).update(newdata).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.hideLoading();
                var toast = yield this.toastController.create({
                    message: "Faskes berhasil diupdate",
                    duration: 3000,
                    color: "success"
                });
                toast.present();
                this.onGoBack();
                this.modalController.dismiss();
            })).catch((er) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.hideLoading();
                var toast = yield this.toastController.create({
                    message: "Faskes gagal diupdate :" + er.message,
                    duration: 3000,
                    color: "danger"
                });
                toast.present();
            }));
        }
        else {
            if (this.ionicForm.valid) {
                var newdata = this.ionicForm.value;
                newdata.created_at = moment__WEBPACK_IMPORTED_MODULE_2__().valueOf();
                newdata.latitude = parseFloat(newdata.latitude);
                newdata.longitude = parseFloat(newdata.longitude);
                firebase__WEBPACK_IMPORTED_MODULE_3__.default.firestore().collection("faskes").add(newdata).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    this.hideLoading();
                    var toast = yield this.toastController.create({
                        message: "Faskes berhasil ditambahkan",
                        duration: 3000,
                        color: "success"
                    });
                    toast.present();
                    this.onGoBack();
                    this.modalController.dismiss();
                })).catch((er) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    this.hideLoading();
                    var toast = yield this.toastController.create({
                        message: "Faskes gagal ditambahkan :" + er.message,
                        duration: 3000,
                        color: "danger"
                    });
                    toast.present();
                }));
            }
        }
    }
    showLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
FaskesAddPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
FaskesAddPage.propDecorators = {
    isEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    onGoBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
FaskesAddPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-faskes-add',
        template: _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_faskes_add_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_faskes_add_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FaskesAddPage);



/***/ }),

/***/ 20559:
/*!*******************************************!*\
  !*** ./src/app/form-add/form-add.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormAddPage": () => (/* binding */ FormAddPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_form_add_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./form-add.page.html */ 13157);
/* harmony import */ var _form_add_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-add.page.scss */ 37571);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 54357);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ 713);








var loading;
let FormAddPage = class FormAddPage {
    constructor(storage, loadingController, modalController, firestore, toastController) {
        this.storage = storage;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.firestore = firestore;
        this.toastController = toastController;
    }
    ngOnInit() {
        if (this.isEdit) {
            console.log(this.data);
            this.question = this.data.question;
            this.option = this.data.option;
        }
        else {
            this.nomor = parseInt(this.totalquestion) + 1;
            this.option = [{ label: '', value: '' }];
        }
    }
    addOption() {
        this.option.push({ label: '', value: '' });
    }
    removeOption(index) {
        this.option.splice(index, 1);
    }
    close() {
        this.modalController.dismiss();
    }
    submit() {
        this.showLoading();
        this.option.map((opt, index) => {
            opt.value = opt.label.toLowerCase();
        });
        if (this.isEdit) {
            var newdata = {
                nomor: parseInt(this.nomor),
                question: this.question,
                // option:this.option
            };
            firebase__WEBPACK_IMPORTED_MODULE_2__.default.firestore()
                .collection('formlog')
                .doc(this.data.id)
                .update(newdata)
                .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.hideLoading();
                var toast = yield this.toastController.create({
                    message: 'Pertanyaan berhasil diupdate',
                    duration: 3000,
                    color: 'success',
                });
                toast.present();
                this.onGoBack();
                this.modalController.dismiss();
            }))
                .catch((er) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.hideLoading();
                var toast = yield this.toastController.create({
                    message: 'Pertanyaan gagal diupdate',
                    duration: 3000,
                    color: 'danger',
                });
                toast.present();
            }));
        }
        else {
            firebase__WEBPACK_IMPORTED_MODULE_2__.default.firestore()
                .collection('formlog')
                .add({
                nomor: parseInt(this.nomor),
                question: this.question,
                option: this.option,
            })
                .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.hideLoading();
                var toast = yield this.toastController.create({
                    message: 'Pertanyaan berhasil ditambahkan',
                    duration: 3000,
                    color: 'success',
                });
                toast.present();
                this.onGoBack();
                this.modalController.dismiss();
            }))
                .catch((er) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                var toast = yield this.toastController.create({
                    message: 'Gagal ! ' + er.message,
                    duration: 3000,
                    color: 'danger',
                });
            }));
        }
    }
    showLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
FormAddPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
FormAddPage.propDecorators = {
    onGoBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    totalquestion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    isEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    nomor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
FormAddPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-form-add',
        template: _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_form_add_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_form_add_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormAddPage);



/***/ }),

/***/ 1086:
/*!***************************************************!*\
  !*** ./src/app/location-log/location-log.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationLogPage": () => (/* binding */ LocationLogPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_location_log_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./location-log.page.html */ 54184);
/* harmony import */ var _location_log_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-log.page.scss */ 61132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 54357);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ 713);









let LocationLogPage = class LocationLogPage {
    constructor(storage, loadingController, modalController, firestore, toastController) {
        this.storage = storage;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.firestore = firestore;
        this.toastController = toastController;
    }
    ngOnInit() {
        this.getLog();
    }
    getLog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var snapshot = yield firebase__WEBPACK_IMPORTED_MODULE_3__.default.firestore().collection("pasien").doc(this.data.id).collection("location").orderBy("timestamp", "desc").get();
            if (snapshot.empty) {
                this.locationlog = [];
            }
            else {
                this.locationlog = [];
                snapshot.forEach((snap) => {
                    var data = snap.data();
                    data.id = snap.id;
                    data.formattedtime = moment__WEBPACK_IMPORTED_MODULE_2__(data.timestamp).format("DD/MM/YY HH:mm:ss");
                    this.locationlog.push(data);
                });
            }
        });
    }
    openMaps(p) {
        var url = "https://www.google.com/maps/search/?api=1&query=" + p.latitude + "," + p.longitude;
        window.open(url, "_blank");
    }
    close() {
        this.modalController.dismiss();
    }
};
LocationLogPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
LocationLogPage.propDecorators = {
    onGoBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
LocationLogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-location-log',
        template: _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_location_log_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_location_log_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LocationLogPage);



/***/ }),

/***/ 68792:
/*!***********************************************!*\
  !*** ./src/app/log-detail/log-detail.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogDetailPage": () => (/* binding */ LogDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_log_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./log-detail.page.html */ 90448);
/* harmony import */ var _log_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-detail.page.scss */ 93463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 54357);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ 713);








let LogDetailPage = class LogDetailPage {
    constructor(storage, loadingController, modalController, firestore, toastController) {
        this.storage = storage;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.firestore = firestore;
        this.toastController = toastController;
    }
    ngOnInit() {
        console.log('Log Detail:', this.data);
        this.getQuestion();
    }
    getQuestion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            var snapshot = yield firebase__WEBPACK_IMPORTED_MODULE_2__.default.firestore()
                .collection('formlog')
                .orderBy('nomor', 'asc')
                .get();
            if (snapshot.empty) {
                this.questions = [];
            }
            else {
                this.questions = [];
                snapshot.forEach((snap) => {
                    var data = snap.data();
                    data.id = snap.id;
                    this.questions.push(data);
                });
            }
            console.log(this.questions);
        });
    }
    getAnswer(answer) {
        let json = JSON.parse(answer);
        return json.answer;
    }
    close() {
        this.modalController.dismiss();
    }
};
LogDetailPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
LogDetailPage.propDecorators = {
    onGoBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
LogDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-log-detail',
        template: _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_log_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_log_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LogDetailPage);



/***/ }),

/***/ 89036:
/*!*************************************************!*\
  !*** ./src/app/monitor-log/monitor-log.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorLogPage": () => (/* binding */ MonitorLogPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_monitor_log_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./monitor-log.page.html */ 51926);
/* harmony import */ var _monitor_log_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitor-log.page.scss */ 64978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 54357);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ 713);









let MonitorLogPage = class MonitorLogPage {
    constructor(storage, loadingController, modalController, firestore, toastController) {
        this.storage = storage;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.firestore = firestore;
        this.toastController = toastController;
        this.column = [
            { label: "BPM" },
            { label: "Spo2" },
            { label: "Body Temperature" },
            { label: "Waktu" },
        ];
    }
    ngOnInit() {
        console.log("pasien:", this.data);
        this.loadLog();
    }
    loadLog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var snapshot = yield firebase__WEBPACK_IMPORTED_MODULE_3__.default.firestore().collection("pasien").doc(this.data.id).collection("measurement").orderBy("created_at", "desc").get();
            if (snapshot.empty) {
                this.logs = [];
            }
            else {
                this.logs = [];
                snapshot.forEach((snap) => {
                    var data = snap.data();
                    data.id = snap.id;
                    data.formattedtime = moment__WEBPACK_IMPORTED_MODULE_2__(data.created_at).format("DD MMM YYYY HH:mm:ss");
                    this.logs.push(data);
                });
            }
        });
    }
    close() {
        this.modalController.dismiss();
    }
};
MonitorLogPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
MonitorLogPage.propDecorators = {
    onGoBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
MonitorLogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-monitor-log',
        template: _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_monitor_log_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_monitor_log_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MonitorLogPage);



/***/ }),

/***/ 36637:
/*!*****************************************************!*\
  !*** ./src/app/pasien-detail/pasien-detail.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasienDetailPage": () => (/* binding */ PasienDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pasien_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./pasien-detail.page.html */ 76147);
/* harmony import */ var _pasien_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pasien-detail.page.scss */ 27278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 54357);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);








let PasienDetailPage = class PasienDetailPage {
    constructor(modalController, loadingController, toastController, firestore, storage, router) {
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.firestore = firestore;
        this.storage = storage;
        this.router = router;
    }
    ngOnInit() {
        console.log("Pasien Detail", this.data);
    }
    close() {
        this.modalController.dismiss();
    }
};
PasienDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
PasienDetailPage.propDecorators = {
    onGoBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
PasienDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-pasien-detail',
        template: _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pasien_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pasien_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PasienDetailPage);



/***/ }),

/***/ 89399:
/*!*************************************************!*\
  !*** ./src/app/pasien-edit/pasien-edit.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasienEditPage": () => (/* binding */ PasienEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pasien_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./pasien-edit.page.html */ 4377);
/* harmony import */ var _pasien_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pasien-edit.page.scss */ 68580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage-angular */ 54357);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ 43789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ 713);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! md5 */ 45928);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_4__);











var loading;
let PasienEditPage = class PasienEditPage {
    constructor(modalController, loadingController, toastController, firestore, storage, router) {
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.firestore = firestore;
        this.storage = storage;
        this.router = router;
    }
    ngOnInit() {
        setTimeout(() => {
            this.name = this.data.name;
            this.nik = this.data.nik;
            this.alamat = this.data.alamat;
            this.password = this.data.password;
            this.tgl_lahir = this.data.tgl_lahir;
            this.tgl_positif = this.data.tgl_positif;
            this.tgl_negatif = this.data.tgl_negatif;
            this.status = this.data.status == true ? "true" : "false";
            console.log("EDIT PASIEN:", this.tgl_lahir);
        }, 1000);
    }
    update() {
        this.showLoading();
        var newdata = {
            name: this.name,
            nik: this.nik,
            alamat: this.alamat,
            tgl_lahir: moment__WEBPACK_IMPORTED_MODULE_2__(this.tgl_lahir).valueOf(),
            tgl_positif: moment__WEBPACK_IMPORTED_MODULE_2__(this.tgl_positif).valueOf(),
            tgl_negatif: moment__WEBPACK_IMPORTED_MODULE_2__(this.tgl_negatif).valueOf(),
            status: this.status == "true" ? true : false
        };
        if (this.password != this.data.password) {
            newdata["password"] = md5__WEBPACK_IMPORTED_MODULE_4__(this.password);
        }
        firebase__WEBPACK_IMPORTED_MODULE_3__.default.firestore().collection("pasien").doc(this.data.id).update(newdata).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.hideLoading();
            var toast = yield this.toastController.create({
                message: "Data pasien berhasil di update.",
                duration: 3000,
                color: "success"
            });
            yield toast.present();
            this.modalController.dismiss();
            this.onGoBack();
        }));
    }
    close() {
        this.modalController.dismiss();
    }
    showLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
PasienEditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
PasienEditPage.propDecorators = {
    onGoBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
PasienEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-pasien-edit',
        template: _D_Users_ASUS_Documents_Kelvin_Skripsi_Pantau_Peduli_pantau_peduli_web_pantau_dashboard_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pasien_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pasien_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PasienEditPage);



/***/ }),

/***/ 14626:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/edukasi-add/edukasi-add.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\"><ion-icon name=\"close\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Tambah Edukasi</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"submit()\">Submit</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Judul</ion-label>\r\n      <ion-input [(ngModel)]=\"judul\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">URL Gambar</ion-label>\r\n      <ion-input [(ngModel)]=\"gambar\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Konten</ion-label>\r\n      <ion-textarea rows=\"10\" cols=\"20\" [(ngModel)]=\"content\"></ion-textarea>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ 73933:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/edukasi-edit/edukasi-edit.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\"><ion-icon name=\"close\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Edit Edukasi</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"submit()\">Submit</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Judul</ion-label>\r\n      <ion-input [(ngModel)]=\"judul\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">URL Gambar</ion-label>\r\n      <ion-input [(ngModel)]=\"gambar\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Konten</ion-label>\r\n      <ion-textarea rows=\"10\" cols=\"20\" [(ngModel)]=\"content\"></ion-textarea>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ 7675:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/faskes-add/faskes-add.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\"><ion-icon name=\"close\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Tambah Faskes</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n    <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submit()\">\r\n      <ion-list>\r\n\r\n      <ion-item *ngFor=\"let form of forms\" >\r\n        <ion-label position=\"floating\" color=\"primary\">{{form.label}}</ion-label>\r\n        <ion-input [formControlName]=\"form.name\" *ngIf=\"form.type == 'text'\" type=\"text\" [(ngModel)]=\"form.value\" required=\"true\"></ion-input>\r\n      </ion-item>\r\n      <ion-button type=\"submit\" class=\"ion-align-self-center\">{{this.isEdit ? \"Update\":\"Submit\"}}</ion-button>\r\n      </ion-list>\r\n    </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ 13157:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/form-add/form-add.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\"\r\n        ><ion-icon name=\"close\"></ion-icon\r\n      ></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Tambah Pertanyaan</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"submit()\">Submit</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label position=\"fixed\">No. Pertanyaan</ion-label>\r\n      <ion-input\r\n        [(ngModel)]=\"nomor\"\r\n        placeholder=\"Nomor Urut Pertanyaan\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"fixed\">Pertanyaan</ion-label>\r\n      <ion-input\r\n        [(ngModel)]=\"question\"\r\n        placeholder=\"Ketik pertanyaan\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <!-- <ion-item>Daftar Jawaban <ion-button (click)=\"addOption()\" fill=\"clear\">Tambah jawaban</ion-button></ion-item> -->\r\n    <!-- <ion-item *ngFor=\"let opt of option;let i=index\">\r\n      <ion-label position=\"fixed\">Jawaban {{i+1}}</ion-label>\r\n      <ion-input [(ngModel)]=\"opt.label\" placeholder=\"Ketik jawaban disini\"></ion-input>\r\n      <ion-button color=\"danger\" fill=\"clear\" (click)=\"removeOption(i)\"><ion-icon name=\"trash\"></ion-icon></ion-button>\r\n    </ion-item> -->\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ 54184:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/location-log/location-log.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button fill=\"clear\" (click)=\"close()\"><ion-icon name=\"close\"></ion-icon></ion-button>\r\n      </ion-buttons>\r\n      <ion-title>Location Log</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <ion-item>\r\n    <ion-label>Nama</ion-label>\r\n    <ion-label>{{data.name}}</ion-label>\r\n  </ion-item>\r\n\r\n<ion-list>\r\n  <ion-item *ngFor=\"let loc of locationlog\">\r\n    <ion-label>{{loc.formattedtime}}</ion-label>\r\n    <ion-label>{{loc.coords.latitude}}</ion-label>\r\n    <ion-label>{{loc.coords.longitude}}</ion-label>\r\n    <ion-button (click)=\"openMaps(loc.coords)\">\r\n      Open Map\r\n    </ion-button>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 90448:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/log-detail/log-detail.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"close()\"\r\n        ><ion-icon name=\"close\"></ion-icon\r\n      ></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>log-detail</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label>ID Pasien</ion-label>\r\n    <ion-label>{{data.id}}</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>Nama</ion-label>\r\n    <ion-label>{{data.name}}</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>NIK</ion-label>\r\n    <ion-label>{{data.nik}}</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-list-header>Daftar Log</ion-list-header>\r\n  <ion-list class=\"ion-padding\">\r\n    <ion-grid *ngFor=\"let l of data.log;let i=index;\">\r\n      <ion-label color=\"primary\">{{i+1}}. {{l.formattedtime}}</ion-label>\r\n      <ion-row *ngFor=\"let answer of l.answer;let  j = index\">\r\n        <ion-col size=\"1\">\r\n          <ion-label>{{i+1}}.{{j+1}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"7\">\r\n          <ion-label>{{questions[j].question}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\">\r\n          <ion-label>{{getAnswer(answer)}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ 51926:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/monitor-log/monitor-log.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"close()\"><ion-icon name=\"close\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Log Monitoring</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>NIK</ion-label>\r\n      <ion-label>{{data.nik}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Nama</ion-label>\r\n      <ion-label>{{data.name}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Tgl Lahir</ion-label>\r\n      <ion-label>{{data.tgl_lahir}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Tgl Positif</ion-label>\r\n      <ion-label>{{data.tgl_positif}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n<ion-item>\r\n  <ion-label *ngFor=\"let col of column\">{{col.label}}</ion-label>\r\n</ion-item>\r\n\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let log of logs;let i=index\">\r\n      <ion-label>{{log.heart_rate}}</ion-label>\r\n      <ion-label>{{log.spo2 == 999 ? \"-\":log.spo2}}%</ion-label>\r\n      <ion-label>{{log.body_temperature}}&deg;C</ion-label>\r\n      <ion-label>{{log.formattedtime}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 76147:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pasien-detail/pasien-detail.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\"><ion-icon name=\"close\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>pasien-detail</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>ID Pasien</ion-label>\r\n      <ion-text color=\"primary\">{{data.id}}</ion-text>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Nama</ion-label>\r\n      <ion-text color=\"primary\">{{data.name}}</ion-text>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>NIK</ion-label>\r\n      <ion-text color=\"primary\">{{data.nik}}</ion-text>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Alamat</ion-label>\r\n      <ion-text color=\"primary\">{{data.alamat}}</ion-text>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Tanggal lahir</ion-label>\r\n      <ion-text color=\"primary\">{{data.tgl_lahir}}</ion-text>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Tanggal Positif</ion-label>\r\n      <ion-text color=\"primary\">{{data.tgl_positif}}</ion-text>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Tanggal Negatif</ion-label>\r\n      <ion-text color=\"primary\">{{data.tgl_negatif}}</ion-text>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Status</ion-label>\r\n      <ion-text color=\"primary\">{{data.status ? \"Aktif\":\"Non-Aktif\"}}</ion-text>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ 4377:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pasien-edit/pasien-edit.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\"\r\n        ><ion-icon name=\"close\"></ion-icon\r\n      ></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Edit Pasien</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"update()\">Update</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label>ID Pasien</ion-label>\r\n      <ion-input color=\"primary\" readOnly [(ngModel)]=\"data.id\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>NIK</ion-label>\r\n      <ion-input color=\"primary\" readOnly [(ngModel)]=\"nik\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Nama</ion-label>\r\n      <ion-input color=\"primary\" [(ngModel)]=\"name\" required></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Password</ion-label>\r\n      <ion-input\r\n        color=\"primary\"\r\n        type=\"password\"\r\n        [(ngModel)]=\"password\"\r\n        required\r\n      ></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Alamat</ion-label>\r\n      <ion-input color=\"primary\" [(ngModel)]=\"alamat\" required></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Tanggal lahir</ion-label>\r\n      <ion-datetime\r\n        color=\"primary\"\r\n        [(ngModel)]=\"tgl_lahir\"\r\n        required\r\n      ></ion-datetime>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Tanggal Positif</ion-label>\r\n      <ion-datetime\r\n        color=\"primary\"\r\n        [(ngModel)]=\"tgl_positif\"\r\n        required\r\n      ></ion-datetime>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Tanggal Negatif</ion-label>\r\n      <ion-datetime color=\"primary\" [(ngModel)]=\"tgl_negatif\"></ion-datetime>\r\n    </ion-item>\r\n    <ion-radio-group [(ngModel)]=\"status\">\r\n      <ion-list-header>\r\n        <ion-label>Status</ion-label>\r\n      </ion-list-header>\r\n      <ion-item>\r\n        <ion-label>Aktif</ion-label>\r\n        <ion-radio slot=\"start\" value=\"true\"></ion-radio>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Sembuh</ion-label>\r\n        <ion-radio slot=\"start\" value=\"false\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ 44185:
/*!***************************************************!*\
  !*** ./src/app/edukasi-add/edukasi-add.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZHVrYXNpLWFkZC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 63515:
/*!*****************************************************!*\
  !*** ./src/app/edukasi-edit/edukasi-edit.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZHVrYXNpLWVkaXQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 67491:
/*!*************************************************!*\
  !*** ./src/app/faskes-add/faskes-add.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXNrZXMtYWRkLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 37571:
/*!*********************************************!*\
  !*** ./src/app/form-add/form-add.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWFkZC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 61132:
/*!*****************************************************!*\
  !*** ./src/app/location-log/location-log.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhdGlvbi1sb2cucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 93463:
/*!*************************************************!*\
  !*** ./src/app/log-detail/log-detail.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2ctZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 64978:
/*!***************************************************!*\
  !*** ./src/app/monitor-log/monitor-log.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb25pdG9yLWxvZy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 27278:
/*!*******************************************************!*\
  !*** ./src/app/pasien-detail/pasien-detail.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNpZW4tZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 68580:
/*!***************************************************!*\
  !*** ./src/app/pasien-edit/pasien-edit.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNpZW4tZWRpdC5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=common.js.map