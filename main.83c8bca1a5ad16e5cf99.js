!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t}var t,n,o;return t=e,(n=[{key:"getInitialCards",value:function(){var e=this;return fetch(this.options.baseUrl+"/cards",{headers:this.options.headers}).then((function(t){return e.isResolve(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch(this.options.baseUrl+"/users/me",{headers:this.options.headers}).then((function(t){return e.isResolve(t)}))}},{key:"updateUserInfo",value:function(e){var t=this;return fetch(this.options.baseUrl+"/users/me",{method:"PATCH",headers:this.options.headers,body:JSON.stringify(e)}).then((function(e){return t.isResolve(e)}))}},{key:"addCard",value:function(e){var t=this;return fetch(this.options.baseUrl+"/cards",{method:"POST",headers:this.options.headers,body:JSON.stringify(e)}).then((function(e){return t.isResolve(e)}))}},{key:"removeCard",value:function(e){var t=this;return fetch(this.options.baseUrl+"/cards/"+e,{method:"DELETE",headers:this.options.headers}).then((function(e){return t.isResolve(e)}))}},{key:"putLike",value:function(e){var t=this;return fetch(this.options.baseUrl+"/cards/like/"+e,{method:"PUT",headers:this.options.headers}).then((function(e){return t.isResolve(e)}))}},{key:"removeLike",value:function(e){var t=this;return fetch(this.options.baseUrl+"/cards/like/"+e,{method:"DELETE",headers:this.options.headers}).then((function(e){return t.isResolve(e)}))}},{key:"updateUserAvatar",value:function(e){var t=this;return fetch(this.options.baseUrl+"/users/me/avatar",{method:"PATCH",headers:this.options.headers,body:JSON.stringify(e)}).then((function(e){return t.isResolve(e)}))}},{key:"isResolve",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&r(t.prototype,n),o&&r(t,o),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"like",(function(e){r.isLike()?(r.api.removeLike(r.cardInfo._id).then((function(e){return r.changeNumberLikes(e)})).catch((function(e){return console.log(e)})),e.currentTarget.classList.remove("place-card__like-icon_liked")):(r.api.putLike(r.cardInfo._id).then((function(e){return r.changeNumberLikes(e)})).catch((function(e){return console.log(e)})),e.currentTarget.classList.add("place-card__like-icon_liked"))})),a(this,"remove",(function(){r.api.removeCard(r.cardInfo._id).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),r.card.remove(),r.removeEventListeners(),r.card=null})),this.card=null,this.cardInfo=t,this.handleOpenPopupImage=n}var t,n,r;return t=e,(n=[{key:"create",value:function(e,t){this.userID=e,this.api=t;var n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("button"),i=document.createElement("div"),a=document.createElement("h3"),c=document.createElement("div"),u=document.createElement("button"),s=document.createElement("p");return n.classList.add("place-card"),n.classList.add("places-list__place-card"),r.classList.add("place-card__image"),o.classList.add("place-card__delete-icon"),i.classList.add("place-card__description"),a.classList.add("place-card__name"),c.classList.add("place-card__like-container"),u.classList.add("place-card__like-icon"),s.classList.add("place-card__number-likes"),r.style.backgroundImage="url(".concat(this.cardInfo.link,")"),a.textContent="".concat(this.cardInfo.name),s.textContent="".concat(this.cardInfo.likes.length),this.isLike()&&u.classList.toggle("place-card__like-icon_liked"),n.appendChild(r),n.appendChild(i),r.appendChild(o),i.appendChild(a),i.appendChild(c),c.appendChild(u),c.appendChild(s),this.card=n,this.setEventListeners(),this.setRemoveButton(),this.card}},{key:"changeNumberLikes",value:function(e){this.cardInfo=e,this.card.querySelector(".place-card__number-likes").textContent="".concat(this.cardInfo.likes.length)}},{key:"setEventListeners",value:function(){this.card.querySelector(".place-card__image").addEventListener("click",this.handleOpenPopupImage),this.card.querySelector(".place-card__like-icon").addEventListener("click",this.like),this.card.querySelector(".place-card__delete-icon").addEventListener("click",this.remove)}},{key:"removeEventListeners",value:function(){this.card.querySelector(".place-card__image").removeEventListener("click",this.handleOpenPopupImage),this.card.querySelector(".place-card__like-icon").removeEventListener("click",this.like),this.card.querySelector(".place-card__delete-icon").removeEventListener("click",this.remove)}},{key:"setRemoveButton",value:function(){this.cardInfo.owner._id===this.userID&&this.card.querySelector(".place-card__delete-icon").classList.add("place-card__delete-icon_enable")}},{key:"isLike",value:function(){var e=this;return this.cardInfo.likes.some((function(t){return t._id===e.userID}))}}])&&i(t.prototype,n),r&&i(t,r),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.placesList=t,this.createCard=n,this.api=r}var t,n,r;return t=e,(n=[{key:"renderCards",value:function(e,t){var n=this;this.userID=t,this.cards=e,this.cards.map((function(e){return n.addCard(e)}))}},{key:"addCard",value:function(e){var t=this.createCard(e).create(this.userID,this.api);this.placesList.appendChild(t)}}])&&u(t.prototype,n),r&&u(t,r),e}(),l={requiredField:"Это обязательное поле",specifiedInterval:"Должно быть от 2 до 30 символов",noLink:"Здесь должна быть ссылка"};function f(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n,r,o){var i,a,c,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c=function(e){e.preventDefault(),u.formValidator.isValidForm()&&u.onSubmit.apply(u,f(u.form.elements))},(a="handleSubmitForm")in(i=this)?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,this.form=t,this.formValidator=n,this.popup=r,this.api=o,this.textButton=this.form.querySelector("button").textContent,this.handleSubmitForm=this.handleSubmitForm.bind(this),this.handleInput=this.handleInput.bind(this)}var t,n,r;return t=e,(n=[{key:"setFocusOnFirstInput",value:function(){this.form.querySelector("input").focus()}},{key:"setEventListeners",value:function(){var e=this;this.form.addEventListener("submit",this.handleSubmitForm),Array.apply(void 0,f(this.form.querySelectorAll("input"))).forEach((function(t){t.addEventListener("input",e.handleInput)}))}},{key:"handleInput",value:function(e){this.formValidator.setSubmitButtonState(this.formValidator.isValidForm());var t=this.formValidator.checkInputValidity(e.target),n=t.errorMessage,r=t.valid;this.formValidator.setErrorMessageState(e.target,n,r)}},{key:"closePopup",value:function(){this.popup.close(),this.form.reset()}},{key:"onSubmit",value:function(){}},{key:"renderLoading",value:function(e){this.form.querySelector("button").textContent=e?"Загрузка...":this.textButton}}])&&d(t.prototype,n),r&&d(t,r),e}();function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(i,e);var t,n,r,o=g(i);function i(e,t,n,r,a){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(c=o.call(this,e,t,n,r)).userInfo=a,c}return t=i,(n=[{key:"onSubmit",value:function(e){var t=this;m(k(i.prototype),"onSubmit",this).call(this),this.renderLoading(!0),this.api.updateUserAvatar({avatar:e.value}).then((function(e){t.userInfo.updateUserAvatar(e),t.closePopup()})).catch((function(e){return console.log(e)})).finally((function(){return t.renderLoading(!1)}))}}])&&v(t.prototype,n),r&&v(t,r),i}(h);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t,n){return(L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=I(e);if(t){var o=I(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(i,e);var t,n,r,o=E(i);function i(e,t,n,r,a){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(c=o.call(this,e,t,n,r)).cardList=a,c}return t=i,(n=[{key:"onSubmit",value:function(e,t){var n=this;L(I(i.prototype),"onSubmit",this).call(this),this.renderLoading(!0),this.api.addCard({name:e.value,link:t.value}).then((function(e){n.cardList.addCard(e),n.closePopup()})).catch((function(e){return console.log(e)})).finally((function(){return n.renderLoading(!1)}))}}])&&w(t.prototype,n),r&&w(t,r),i}(h);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t,n){return(T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=M(e);if(t){var o=M(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return U(this,n)}}function U(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(i,e);var t,n,r,o=D(i);function i(e,t,n,r,a){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(c=o.call(this,e,t,n,r)).userInfo=a,c}return t=i,(n=[{key:"onSubmit",value:function(e,t){var n=this;T(M(i.prototype),"onSubmit",this).call(this),this.renderLoading(!0),this.api.updateUserInfo({name:e.value,about:t.value}).then((function(e){n.userInfo.updateUserInfo(e),n.closePopup()})).catch((function(e){return console.log(e)})).finally((function(){return n.renderLoading(!1)}))}}])&&q(t.prototype,n),r&&q(t,r),i}(h);function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var V=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),F(this,"checkFormValidity",(function(){return Array.from(r.form.querySelectorAll("input")).reduce((function(e,t){return e.push(r.checkInputValidity(t)),e}),[])})),F(this,"checkInputValidity",(function(e){var t="";return t=e.validity.valueMissing?r.errorMessages.requiredField:"url"===e.type&&e.validity.patternMismatch?r.errorMessages.noLink:e.validity.tooLong||e.validity.tooShort?r.errorMessages.specifiedInterval:"",e.setCustomValidity(t),{input:e,valid:!e.validationMessage,errorMessage:t}})),F(this,"setSubmitButtonState",(function(e){var t=r.form.querySelector(".button");e?t.classList.add("popup__button_valid"):t.classList.remove("popup__button_valid")})),F(this,"setErrorMessageState",(function(e,t,n){var r=e.closest(".popup__container").querySelector(".popup__error-message");r.textContent=e.validationMessage,n?r.classList.remove("popup__error-message_show"):r.classList.add("popup__error-message_show")})),F(this,"resetErrorMessage",(function(){r.form.reset(),Array.from(r.form.querySelectorAll("input")).forEach((function(e){e.setCustomValidity(""),r.setErrorMessageState(e,"",!0),r.setSubmitButtonState(r.isValidForm())}))})),F(this,"isValidForm",(function(){return r.checkFormValidity().every((function(e){return e.valid}))})),this.form=t,this.errorMessages=n};function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),N(this,"close",(function(){n.popup.classList.remove("popup_is-opened")})),N(this,"setCloseButtonListeners",(function(){n.closeButton.addEventListener("click",n.close)})),this.popup=t,this.closeButton=this.popup.querySelector(".popup__close")}var t,n,r;return t=e,(n=[{key:"open",value:function(){this.popup.classList.add("popup_is-opened")}}])&&B(t.prototype,n),r&&B(t,r),e}();function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.fullName=t,this.job=n,this.avatar=r,this.name=this.fullName.textContent,this.description=this.job.textContent}var t,n,r;return t=e,(n=[{key:"updateUserInfo",value:function(e){this.userID=e._id;var t=e.name,n=e.about;this.name=t,this.description=n,this.fullName.textContent=this.name,this.job.textContent=this.description}},{key:"updateUserAvatar",value:function(e){var t=e.avatar;this.avatar.style.backgroundImage="url(".concat(t,")")}}])&&H(t.prototype,n),r&&H(t,r),e}();n(0);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K=document.querySelector(".button.user-info__button"),Q=document.querySelector(".user-info__edit"),W=document.querySelector(".user-info__photo"),X=document.querySelector(".places-list"),Y=document.querySelector(".user-info__name"),Z=document.querySelector(".user-info__job"),ee=document.querySelector(".user-info__photo"),te=document.querySelector(".popup_profile"),ne=document.querySelector(".popup_place-card"),re=document.querySelector(".popup_image"),oe=document.querySelector(".popup_avatar"),ie=te.querySelector(".popup__form"),ae=ne.querySelector(".popup__form"),ce=oe.querySelector(".popup__form"),ue=new J(te);ue.setCloseButtonListeners();var se=new J(ne);se.setCloseButtonListeners();var le=new J(re);le.setCloseButtonListeners();var fe=new J(oe);fe.setCloseButtonListeners();var pe=new V(ie,l),de=new V(ae,l),he=new V(ce,l),ye=new z(Y,Z,ee),ve=new o({baseUrl:"https://praktikum.tk/cohort11",headers:{authorization:"4f5e3621-964f-4d58-88fd-12f1d002534a","Content-Type":"application/json"}}),me=new s(X,(function(e){return new c(e,ke)}),ve),be=new A(ie,pe,ue,ve,ye);be.setEventListeners();var ge=new C(ae,de,se,ve,me);ge.setEventListeners();var _e=new O(ce,he,fe,ve,ye);function ke(e){if(e.target.classList.contains("place-card__image")){var t=e.target.style.backgroundImage.slice(5,-2);re.querySelector(".popup__image").src=t,le.open()}}_e.setEventListeners();K.addEventListener("click",(function(){de.resetErrorMessage(),se.open(),ge.setFocusOnFirstInput()})),Q.addEventListener("click",(function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){G(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},ye),t=e.name,n=e.description;ie.name.defaultValue=t,ie.description.defaultValue=n,pe.resetErrorMessage(),ue.open(),be.setFocusOnFirstInput()})),W.addEventListener("click",(function(){he.resetErrorMessage(),fe.open(),_e.setFocusOnFirstInput()})),ve.getUserInfo().then((function(e){ye.updateUserInfo(e),ye.updateUserAvatar(e)})).catch((function(e){return console.log(e)})),ve.getInitialCards().then((function(e){me.renderCards(e,ye.userID)})).catch((function(e){return console.log(e)}))}]);