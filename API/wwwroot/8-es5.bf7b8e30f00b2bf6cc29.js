function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{jkDv:function(e,t,n){"use strict";n.r(t);var r,i=n("ofXK"),o=n("PCNd"),c=n("tyNb"),a=n("fXoL"),d=n("mwRl"),s=n("AytR"),b=n("tk/3"),p=((r=function(){function e(t){_classCallCheck(this,e),this.http=t,this.baseUrl=s.a.apiUrl}return _createClass(e,[{key:"createProduct",value:function(e){return this.http.post(this.baseUrl+"products",e)}},{key:"updateProduct",value:function(e,t){return this.http.put(this.baseUrl+"products/"+t,e)}},{key:"deleteProduct",value:function(e){return this.http.delete(this.baseUrl+"products/"+e)}},{key:"uploadImage",value:function(e,t){var n=new FormData;return n.append("photo",e,"image.png"),this.http.put(this.baseUrl+"products/"+t+"/photo",n,{reportProgress:!0,observe:"events"})}},{key:"deleteProductPhoto",value:function(e,t){return this.http.delete(this.baseUrl+"products/"+t+"/photo/"+e)}},{key:"setMainPhoto",value:function(e,t){return this.http.post(this.baseUrl+"products/"+t+"/photo/"+e,{})}}]),e}()).\u0275fac=function(e){return new(e||r)(a.bc(b.b))},r.\u0275prov=a.Nb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),u=n("/gyc"),l=n("a4eG"),f=function(e){return["edit",e]};function g(e,t){if(1&e){var n=a.Yb();a.Xb(0,"tr"),a.Xb(1,"td",23),a.Nc(2),a.Wb(),a.Xb(3,"td"),a.Xb(4,"div",17),a.Sb(5,"img",24),a.Wb(),a.Wb(),a.Xb(6,"th",23),a.Xb(7,"h5"),a.Nc(8),a.Wb(),a.Wb(),a.Xb(9,"td",23),a.Nc(10),a.kc(11,"currency"),a.Wb(),a.Xb(12,"td",23),a.Xb(13,"button",25),a.Nc(14,"Edit"),a.Wb(),a.Wb(),a.Xb(15,"td",23),a.Xb(16,"button",26),a.fc("click",(function(e){a.Dc(n);var r=t.$implicit;return a.jc(2).deleteProduct(r.id)})),a.Nc(17,"Delete"),a.Wb(),a.Wb(),a.Wb()}if(2&e){var r=t.$implicit;a.Cb(2),a.Oc(r.id),a.Cb(3),a.qc("src",r.pictureUrl||"/assets/images/placeholder.png",a.Fc),a.qc("alt",r.name),a.Cb(3),a.Oc(r.name),a.Cb(2),a.Oc(a.mc(11,6,r.price,"R")),a.Cb(3),a.pc("routerLink",a.tc(9,f,r.id))}}function h(e,t){if(1&e){var n=a.Yb();a.Xb(0,"div",27),a.Xb(1,"app-pager",28),a.fc("pageChanged",(function(e){return a.Dc(n),a.jc(2).onPageChanged(e)})),a.Wb(),a.Wb()}if(2&e){var r=a.jc(2);a.Cb(1),a.pc("pageSize",r.shopParams.pageSize)("pageNumber",r.shopParams.pageNumber)("totalCount",r.totalCount)}}var v=function(){return["/admin/create"]};function m(e,t){if(1&e&&(a.Xb(0,"section",6),a.Xb(1,"div",7),a.Xb(2,"div",8),a.Xb(3,"div",9),a.Xb(4,"div",10),a.Xb(5,"header",11),a.Nc(6,"Services List"),a.Wb(),a.Xb(7,"button",12),a.Nc(8,"Create new service"),a.Wb(),a.Wb(),a.Sb(9,"app-paging-header",13),a.Xb(10,"div",14),a.Xb(11,"table",15),a.Xb(12,"thead"),a.Xb(13,"tr"),a.Xb(14,"th",16),a.Xb(15,"div",17),a.Nc(16,"Id"),a.Wb(),a.Wb(),a.Xb(17,"th",16),a.Xb(18,"div",18),a.Nc(19,"Service"),a.Wb(),a.Wb(),a.Xb(20,"th",16),a.Xb(21,"div",19),a.Nc(22,"Name"),a.Wb(),a.Wb(),a.Xb(23,"th",16),a.Xb(24,"div",20),a.Nc(25,"Price"),a.Wb(),a.Wb(),a.Xb(26,"th",16),a.Xb(27,"div",20),a.Nc(28,"Edit"),a.Wb(),a.Wb(),a.Xb(29,"th",16),a.Xb(30,"div",20),a.Nc(31,"Delete"),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Xb(32,"tbody"),a.Lc(33,g,18,11,"tr",21),a.Wb(),a.Wb(),a.Wb(),a.Lc(34,h,2,3,"div",22),a.Wb(),a.Wb(),a.Wb(),a.Wb()),2&e){var n=a.jc();a.Cb(7),a.pc("routerLink",a.sc(6,v)),a.Cb(2),a.pc("totalCount",n.totalCount)("pageSize",n.shopParams.pageSize)("pageNumber",n.shopParams.pageNumber),a.Cb(24),a.pc("ngForOf",n.products),a.Cb(1),a.pc("ngIf",n.totalCount>0)}}var C,y=function(){return{exact:!0}},W=((C=function(){function e(t,n){_classCallCheck(this,e),this.shopService=t,this.adminService=n,this.shopParams=this.shopService.getShopParams()}return _createClass(e,[{key:"ngOnInit",value:function(){this.getProducts()}},{key:"getProducts",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.shopService.getProducts(t).subscribe((function(t){e.products=t.data,e.totalCount=t.count}),(function(e){console.log(e)}))}},{key:"onPageChanged",value:function(e){var t=this.shopService.getShopParams();t.pageNumber!==e&&(t.pageNumber=e,this.shopService.setShopParams(t),this.getProducts(!0))}},{key:"deleteProduct",value:function(e){var t=this;this.adminService.deleteProduct(e).subscribe((function(n){t.products.splice(t.products.findIndex((function(t){return t.id===e})),1),t.totalCount--}))}}]),e}()).\u0275fac=function(e){return new(e||C)(a.Rb(d.a),a.Rb(p))},C.\u0275cmp=a.Lb({type:C,selectors:[["app-admin"]],decls:9,vars:3,consts:[["id","sidebar",1,"sidebar"],[1,""],[1,"nav-item"],["routerLink","/admin","routerLinkActive","active",1,"nav-link",3,"routerLinkActiveOptions"],["routerLink","/orders","routerLinkActive","active",1,"nav-link"],["class","admin-page",4,"ngIf"],[1,"admin-page"],[1,"container"],[1,"row",2,"background","rgba( 80, 75, 75, 0.25 )","box-shadow","0 8px 32px 0 rgba( 31, 38, 135, 0.37 )","backdrop-filter","blur( 10.0px )","-webkit-backdrop-filter","blur( 10.0px )","border-radius","10px","border","1px solid rgba( 255, 255, 255, 0.18 )","color","white"],[1,"col-lg-12"],[1,"d-flex","justify-content-between","my-3",2,"color","white"],[1,"h2"],[1,"btn","btn-outline-success",3,"routerLink"],[3,"totalCount","pageSize","pageNumber"],[1,"table-responsive"],[1,"table",2,"color","white"],["scope","col"],[1,"p-2"],[1,"p-2","text-uppercase",2,"color","white"],[1,"py-2","text-uppercase"],[1,"p-2","px-3","text-uppercase"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center",4,"ngIf"],[1,"align-middle"],[1,"img-fluid",2,"max-height","50px",3,"src","alt"],[1,"btn","btn-warning",3,"routerLink"],[1,"btn","btn-danger",3,"click"],[1,"d-flex","justify-content-center"],[3,"pageSize","pageNumber","totalCount","pageChanged"]],template:function(e,t){1&e&&(a.Xb(0,"section",0),a.Xb(1,"ul",1),a.Xb(2,"li",2),a.Xb(3,"a",3),a.Nc(4," Services "),a.Wb(),a.Wb(),a.Xb(5,"li",2),a.Xb(6,"a",4),a.Nc(7," Orders "),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Lc(8,m,35,7,"section",5)),2&e&&(a.Cb(3),a.pc("routerLinkActiveOptions",a.sc(2,y)),a.Cb(5),a.pc("ngIf",t.products))},directives:[c.f,c.e,i.n,c.d,u.a,i.m,l.a],pipes:[i.d],styles:['.sidebar[_ngcontent-%COMP%]{background:rgba(80,75,75,.25);box-shadow:0 8px 32px 0 rgba(31,38,135,.37);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:10px;border:1px solid hsla(0,0%,100%,.18);width:20%;padding:10px 5px;float:left;margin:0 25px}ul[_ngcontent-%COMP%]{list-style-type:none}.nav-link[_ngcontent-%COMP%]{color:#fff!important;font-weight:600!important;line-height:60px!important}.nav-link.active[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%]:hover{color:#fff!important;-webkit-transition:.6s;transition:.6s}.nav-item[_ngcontent-%COMP%]{position:relative}.nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:before{content:"";position:absolute;width:74%;height:2px;bottom:16px;left:16px;background:#fff;-webkit-transition:all .3s ease-in-out 0s;transition:all .3s ease-in-out 0s}']}),C),X=function e(t){_classCallCheck(this,e),this.name="",this.description="",this.price=0,this.pictureUrl="",Object.assign(this,t)},k=n("cp0P"),P=n("oW1M"),x=n("3Pt+"),w=n("9nqD");function S(e,t){1&e&&(a.Xb(0,"div"),a.Nc(1," Service Name is required "),a.Wb())}function N(e,t){if(1&e&&(a.Xb(0,"div",21),a.Lc(1,S,2,0,"div",22),a.Wb()),2&e){a.jc();var n=a.zc(7);a.Cb(1),a.pc("ngIf",n.errors.required)}}function M(e,t){1&e&&(a.Xb(0,"div"),a.Nc(1," Service price is required "),a.Wb())}function I(e,t){1&e&&(a.Xb(0,"div"),a.Nc(1," Service price needs to be decimal value "),a.Wb())}function O(e,t){1&e&&(a.Xb(0,"div"),a.Nc(1," Service price must be greater than zero "),a.Wb())}function j(e,t){if(1&e&&(a.Xb(0,"div",21),a.Lc(1,M,2,0,"div",22),a.Lc(2,I,2,0,"div",22),a.Lc(3,O,2,0,"div",22),a.Wb()),2&e){a.jc();var n=a.zc(13);a.Cb(1),a.pc("ngIf",n.errors.required),a.Cb(1),a.pc("ngIf",n.errors.pattern),a.Cb(1),a.pc("ngIf",n.errors.min)}}function _(e,t){1&e&&(a.Xb(0,"div"),a.Nc(1," Service price is required "),a.Wb())}function L(e,t){if(1&e&&(a.Xb(0,"div",21),a.Lc(1,_,2,0,"div",22),a.Wb()),2&e){a.jc();var n=a.zc(21);a.Cb(1),a.pc("ngIf",n.errors.required)}}function F(e,t){if(1&e&&(a.Xb(0,"option",23),a.Nc(1),a.Wb()),2&e){var n=t.$implicit,r=a.jc();a.pc("selected",r.product.productBrandId===n.id)("ngValue",n.id),a.Cb(1),a.Oc(n.name)}}function z(e,t){if(1&e&&(a.Xb(0,"option",23),a.Nc(1),a.Wb()),2&e){var n=t.$implicit,r=a.jc();a.pc("selected",r.product.productTypeId===n.id)("ngValue",n.id),a.Cb(1),a.Oc(n.name)}}var A,R=function(e){return{"is-invalid":e}},U=((A=function(){function e(t,n,r){_classCallCheck(this,e),this.route=t,this.adminService=n,this.router=r}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onSubmit",value:function(e){var t=this;if("edit"===this.route.snapshot.url[0].path){var n=Object.assign(Object.assign(Object.assign({},this.product),e),{price:+e.price});this.adminService.updateProduct(n,+this.route.snapshot.paramMap.get("id")).subscribe((function(e){t.router.navigate(["/admin"])}))}else{var r=Object.assign(Object.assign({},e),{price:+e.price});this.adminService.createProduct(r).subscribe((function(e){t.router.navigate(["/admin"])}))}}},{key:"updatePrice",value:function(e){this.product.price=e}}]),e}()).\u0275fac=function(e){return new(e||A)(a.Rb(c.a),a.Rb(p),a.Rb(c.c))},A.\u0275cmp=a.Lb({type:A,selectors:[["app-edit-product-form"]],inputs:{product:"product",brands:"brands",types:"types"},decls:36,vars:23,consts:[[2,"background","rgba(255, 255, 255, 0.1)","overflow","hidden","backdrop-filter","blur(40px)","border","1px solid rgba(255, 255, 255, 0.5)","border-radius","10px",3,"ngSubmit"],["productForm","ngForm"],[1,"form-row"],[1,"form-group","col-md-6"],["for","name"],["required","","type","text","id","name","placeholder","Product Name","name","name",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["name","ngModel"],["class","invalid-feedback",4,"ngIf"],["for","price"],["required","","type","text","id","price","placeholder","Price","currencyMask","","name","price","pattern","^\\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\\.[0-9][0-9])?$","min","0.01",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["price","ngModel"],[1,"form-group","col-md-12"],["for","description"],["required","","id","description","name","description","rows","3",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["description","ngModel"],["for","brand"],["id","brand","name","productBrandId","required","",1,"form-control",3,"ngModel","ngModelChange"],[3,"selected","ngValue",4,"ngFor","ngForOf"],["for","type"],["id","type","name","productTypeId","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary","my-3","float-right",3,"disabled"],[1,"invalid-feedback"],[4,"ngIf"],[3,"selected","ngValue"]],template:function(e,t){if(1&e){var n=a.Yb();a.Xb(0,"form",0,1),a.fc("ngSubmit",(function(e){a.Dc(n);var r=a.zc(1);return t.onSubmit(r.valid&&r.value)})),a.Xb(2,"div",2),a.Xb(3,"div",3),a.Xb(4,"label",4),a.Nc(5,"Service Name"),a.Wb(),a.Xb(6,"input",5,6),a.fc("ngModelChange",(function(e){return t.product.name=e})),a.Wb(),a.Lc(8,N,2,1,"div",7),a.Wb(),a.Xb(9,"div",3),a.Xb(10,"label",8),a.Nc(11,"Price"),a.Wb(),a.Xb(12,"input",9,10),a.fc("ngModelChange",(function(e){return t.updatePrice(e-0)})),a.kc(14,"number"),a.Wb(),a.Lc(15,j,4,3,"div",7),a.Wb(),a.Wb(),a.Xb(16,"div",2),a.Xb(17,"div",11),a.Xb(18,"label",12),a.Nc(19,"Description"),a.Wb(),a.Xb(20,"textarea",13,14),a.fc("ngModelChange",(function(e){return t.product.description=e})),a.Wb(),a.Lc(22,L,2,1,"div",7),a.Wb(),a.Wb(),a.Xb(23,"div",2),a.Xb(24,"div",3),a.Xb(25,"label",15),a.Nc(26,"Brand"),a.Wb(),a.Xb(27,"select",16),a.fc("ngModelChange",(function(e){return t.product.productBrandId=e})),a.Lc(28,F,2,3,"option",17),a.Wb(),a.Wb(),a.Xb(29,"div",3),a.Xb(30,"label",18),a.Nc(31,"Type"),a.Wb(),a.Xb(32,"select",19),a.fc("ngModelChange",(function(e){return t.product.productTypeId=e})),a.Lc(33,z,2,3,"option",17),a.Wb(),a.Wb(),a.Wb(),a.Xb(34,"button",20),a.Nc(35,"Submit"),a.Wb(),a.Wb()}if(2&e){var r=a.zc(1),i=a.zc(7),o=a.zc(13),c=a.zc(21);a.Cb(6),a.pc("ngClass",a.tc(17,R,i.invalid&&(i.dirty||i.touched)))("ngModel",t.product.name),a.Cb(2),a.pc("ngIf",i.invalid&&(i.dirty||i.touched)),a.Cb(4),a.pc("ngClass",a.tc(19,R,o.invalid&&(o.dirty||o.touched)))("ngModel",a.mc(14,14,t.product.price-0,"1.2-2")),a.Cb(3),a.pc("ngIf",o.invalid&&(o.dirty||o.touched)),a.Cb(5),a.pc("ngClass",a.tc(21,R,c.invalid&&(c.dirty||c.touched)))("ngModel",t.product.description),a.Cb(2),a.pc("ngIf",c.invalid&&(c.dirty||c.touched)),a.Cb(5),a.pc("ngModel",t.product.productBrandId),a.Cb(1),a.pc("ngForOf",t.brands),a.Cb(4),a.pc("ngModel",t.product.productTypeId),a.Cb(1),a.pc("ngForOf",t.types),a.Cb(1),a.pc("disabled",!r.valid)}},directives:[x.y,x.n,x.o,x.b,x.u,i.l,x.m,x.p,i.n,w.a,x.r,x.v,i.m,x.q,x.x],pipes:[i.g],styles:["#blur[_ngcontent-%COMP%]{background:rgba(80,75,75,.25);box-shadow:0 8px 32px 0 rgba(31,38,135,.37);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:10px;border:1px solid hsla(0,0%,100%,.18);color:#fff}"]}),A),T=n("5eHb"),q=n("rIor"),D=n("kvL/");function E(e,t){if(1&e){var n=a.Yb();a.Vb(0),a.Sb(1,"img",7),a.Xb(2,"button",8),a.fc("click",(function(e){return a.Dc(n),a.jc().onUpload()})),a.Nc(3,"Upload Image"),a.Wb(),a.Ub()}if(2&e){var r=a.jc();a.Cb(1),a.pc("src",r.croppedImage,a.Fc)}}var B,V=((B=function(){function e(){_classCallCheck(this,e),this.addFile=new a.o,this.files=[],this.imageChangedEvent="",this.croppedImage=""}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"fileChangeEvent",value:function(e){this.imageChangedEvent=e}},{key:"imageCropped",value:function(e){this.croppedImage=e.base64}},{key:"onSelect",value:function(e){var t;this.files=[],(t=this.files).push.apply(t,_toConsumableArray(e.addedFiles)),this.fileChangeEvent(this.files[0])}},{key:"onUpload",value:function(){console.log(Object(q.c)(this.croppedImage)),this.addFile.emit(Object(q.c)(this.croppedImage))}}]),e}()).\u0275fac=function(e){return new(e||B)},B.\u0275cmp=a.Lb({type:B,selectors:[["app-photo-widget"]],outputs:{addFile:"addFile"},decls:17,vars:5,consts:[[1,"row"],[1,"col-4"],["ngx-dropzone","",1,"custom-dropzone",3,"change"],[1,"fa","fa-upload","fa-4x"],[1,"col-4","img-preview"],["format","png",1,"img-fluid",3,"imageChangedEvent","imageFile","maintainAspectRatio","aspectRatio","imageCropped"],[4,"ngIf"],[1,"img-fluid",3,"src"],[1,"btn-block","btn-primary",3,"click"]],template:function(e,t){1&e&&(a.Xb(0,"div",0),a.Xb(1,"div",1),a.Xb(2,"h3"),a.Nc(3,"Step 1 - Add Photo"),a.Wb(),a.Xb(4,"div",2),a.fc("change",(function(e){return t.onSelect(e)})),a.Xb(5,"ngx-dropzone-label"),a.Sb(6,"i",3),a.Xb(7,"h4"),a.Nc(8,"Drop image here"),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Xb(9,"div",4),a.Xb(10,"h3"),a.Nc(11,"Step 2 - Resize image"),a.Wb(),a.Xb(12,"image-cropper",5),a.fc("imageCropped",(function(e){return t.imageCropped(e)})),a.Wb(),a.Wb(),a.Xb(13,"div",1),a.Xb(14,"h3"),a.Nc(15,"Step 3 - Preview & Upload"),a.Wb(),a.Lc(16,E,4,1,"ng-container",6),a.Wb(),a.Wb()),2&e&&(a.Cb(12),a.pc("imageChangedEvent",t.imageChangedEvent)("imageFile",t.files[0])("maintainAspectRatio",!0)("aspectRatio",16/9),a.Cb(4),a.pc("ngIf",t.croppedImage))},directives:[D.a,D.c,q.a,i.n],styles:[".custom-dropzone[_ngcontent-%COMP%]{border:3px dashed #eee;border-radius:5px;padding-top:30px;text-align:center;height:200px}.custom-dropzone.ngx-dz-hovered[_ngcontent-%COMP%]{border:3px solid green}"]}),B);function $(e,t){if(1&e){var n=a.Yb();a.Xb(0,"div",7),a.Xb(1,"div",8),a.Sb(2,"img",9),a.Xb(3,"div",10),a.Xb(4,"button",11),a.fc("click",(function(e){a.Dc(n);var r=t.$implicit;return a.jc(2).setMainPhoto(r.id)})),a.Nc(5,"Set Main "),a.Wb(),a.Xb(6,"button",12),a.fc("click",(function(e){a.Dc(n);var r=t.$implicit;return a.jc(2).deletePhoto(r.id)})),a.Sb(7,"i",13),a.Nc(8,"\xa0\xa0\xa0\xa0\xa0\xa0 "),a.Wb(),a.Wb(),a.Wb(),a.Wb()}if(2&e){var r=t.$implicit;a.Cb(2),a.qc("src",r.pictureUrl,a.Fc),a.qc("alt",r.fileName),a.Cb(2),a.Eb(r.isMain?"btn btn-success":"btn btn-outline-success"),a.pc("disabled",r.isMain),a.Cb(2),a.pc("disabled",r.isMain)}}function Y(e,t){if(1&e){var n=a.Yb();a.Vb(0),a.Xb(1,"div",3),a.Xb(2,"h3"),a.Nc(3,"Service Photos"),a.Wb(),a.Xb(4,"button",4),a.fc("click",(function(e){return a.Dc(n),a.jc().addPhotoModeToggle()})),a.Nc(5," Add New Photo "),a.Wb(),a.Wb(),a.Xb(6,"div",5),a.Lc(7,$,9,7,"div",6),a.Wb(),a.Ub()}if(2&e){var r=a.jc();a.Cb(7),a.pc("ngForOf",null==r.product?null:r.product.photos)}}function H(e,t){if(1&e&&(a.Xb(0,"div",18),a.Nc(1,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),a.Xb(2,"div",19),a.Nc(3),a.Wb(),a.Nc(4,"\n\xa0\xa0\xa0\xa0\xa0\xa0"),a.Wb()),2&e){var n=a.jc(2);a.Cb(2),a.Kc("width",n.progress,"%"),a.Cb(1),a.Pc("\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",n.progress,"%\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")}}function J(e,t){if(1&e){var n=a.Yb();a.Vb(0),a.Xb(1,"div",3),a.Xb(2,"h3",14),a.Nc(3,"Add new service image"),a.Wb(),a.Xb(4,"button",15),a.fc("click",(function(e){return a.Dc(n),a.jc().addPhotoModeToggle()})),a.Nc(5,"Cancel"),a.Wb(),a.Wb(),a.Nc(6,"\n\xa0\xa0\xa0\xa0\xa0\xa0"),a.Lc(7,H,5,3,"div",16),a.Xb(8,"app-photo-widget",17),a.fc("addFile",(function(e){return a.Dc(n),a.jc().uploadFile(e)})),a.Wb(),a.Ub()}if(2&e){var r=a.jc();a.Cb(7),a.pc("ngIf",r.progress>0)}}var K,G,Q,Z=((G=function(){function e(t,n){_classCallCheck(this,e),this.adminService=t,this.toast=n,this.progress=0,this.addPhotoMode=!1}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"addPhotoModeToggle",value:function(){this.addPhotoMode=!this.addPhotoMode}},{key:"uploadFile",value:function(e){var t=this;this.adminService.uploadImage(e,this.product.id).subscribe((function(e){switch(e.type){case b.d.UploadProgress:t.progress=Math.round(e.loaded/e.total*100);break;case b.d.Response:t.product=e.body,setTimeout((function(){t.progress=0,t.addPhotoMode=!1}),1500)}}),(function(e){t.toast.error(e.errors?e.errors[0]:"Problem uploading image"),t.progress=0}))}},{key:"deletePhoto",value:function(e){var t=this;this.adminService.deleteProductPhoto(e,this.product.id).subscribe((function(){var n=t.product.photos.findIndex((function(t){return t.id===e}));t.product.photos.splice(n,1)}),(function(e){t.toast.error("Problem deleting photo"),console.log(e)}))}},{key:"setMainPhoto",value:function(e){var t=this;this.adminService.setMainPhoto(e,this.product.id).subscribe((function(e){t.product=e}))}}]),e}()).\u0275fac=function(e){return new(e||G)(a.Rb(p),a.Rb(T.b))},G.\u0275cmp=a.Lb({type:G,selectors:[["app-edit-product-photos"]],inputs:{product:"product"},decls:4,vars:2,consts:[[1,"py-5"],[1,"container"],[4,"ngIf"],[1,"d-flex","justify-content-between","mb-3"],[1,"btn","btn-primary",3,"click"],[1,"row"],["class","col-3",4,"ngFor","ngForOf"],[1,"col-3"],[1,"card"],["width","100%","height","225",1,"card-img-top",3,"src","alt"],[1,"btn-group",2,"width","100%"],["type","button",2,"width","50%",3,"disabled","click"],["type","button",1,"btn","btn-outline-danger",2,"width","50%",3,"disabled","click"],[1,"fa","fa-trash"],[1,"text-primary"],[1,"btn","btn-outline-secondary",3,"click"],["class","progress form-group",4,"ngIf"],[3,"addFile"],[1,"progress","form-group"],["role","progressbar",1,"progress-bar","progress-bar-striped","bg-success"]],template:function(e,t){1&e&&(a.Xb(0,"div",0),a.Xb(1,"div",1),a.Lc(2,Y,8,1,"ng-container",2),a.Lc(3,J,9,1,"ng-container",2),a.Wb(),a.Wb()),2&e&&(a.Cb(2),a.pc("ngIf",!t.addPhotoMode),a.Cb(1),a.pc("ngIf",t.addPhotoMode))},directives:[i.n,i.m,V],styles:[""]}),G),ee=((K=function(){function e(t,n,r,i){_classCallCheck(this,e),this.adminService=t,this.shopService=n,this.route=r,this.router=i,this.productFormValues=new X}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this,t=this.getBrands(),n=this.getTypes();Object(k.a)([n,t]).subscribe((function(t){e.types=t[0],e.brands=t[1]}),(function(e){console.log(e)}),(function(){"edit"===e.route.snapshot.url[0].path&&e.loadProduct()}))}},{key:"loadProduct",value:function(){var e=this;this.shopService.getProduct(+this.route.snapshot.paramMap.get("id")).subscribe((function(t){var n=e.brands&&e.brands.find((function(e){return e.name===t.productBrand})).id,r=e.types&&e.types.find((function(e){return e.name===t.productType})).id;e.product=t,e.productFormValues=Object.assign(Object.assign({},t),{productBrandId:n,productTypeId:r})}))}},{key:"getBrands",value:function(){return this.shopService.getBrands()}},{key:"getTypes",value:function(){return this.shopService.getTypes()}}]),e}()).\u0275fac=function(e){return new(e||K)(a.Rb(p),a.Rb(d.a),a.Rb(c.a),a.Rb(c.c))},K.\u0275cmp=a.Lb({type:K,selectors:[["app-edit-product"]],decls:11,vars:4,consts:[[1,"product-edit","mt-5"],[1,"container"],[1,"row"],[1,"col-12"],["id","blur",1,"tab-panel"],[1,"product-tabset"],["heading","Edit Product"],[1,"col-lg-8"],[3,"product","brands","types"],["heading","Edit Photos"],[3,"product"]],template:function(e,t){1&e&&(a.Xb(0,"section",0),a.Xb(1,"div",1),a.Xb(2,"div",2),a.Xb(3,"div",3),a.Xb(4,"div",4),a.Xb(5,"tabset",5),a.Xb(6,"tab",6),a.Xb(7,"div",7),a.Sb(8,"app-edit-product-form",8),a.Wb(),a.Wb(),a.Xb(9,"tab",9),a.Sb(10,"app-edit-product-photos",10),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb(),a.Wb()),2&e&&(a.Cb(8),a.pc("product",t.productFormValues)("brands",t.brands)("types",t.types),a.Cb(2),a.pc("product",t.product))},directives:[P.l,P.j,U,Z],styles:["#blur[_ngcontent-%COMP%]{background:rgba(80,75,75,.25);box-shadow:0 8px 32px 0 rgba(31,38,135,.37);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:10px;border:1px solid hsla(0,0%,100%,.18);color:#fff}"]}),K),te=[{path:"",component:W},{path:"create",component:ee,data:{breadcrumb:"Create"}},{path:"edit/:id",component:ee,data:{breadcrumb:"Edit"}}],ne=((Q=function e(){_classCallCheck(this,e)}).\u0275mod=a.Pb({type:Q}),Q.\u0275inj=a.Ob({factory:function(e){return new(e||Q)},imports:[[c.g.forChild(te)],c.g]}),Q);n.d(t,"AdminModule",(function(){return ie}));var re,ie=((re=function e(){_classCallCheck(this,e)}).\u0275mod=a.Pb({type:re}),re.\u0275inj=a.Ob({factory:function(e){return new(e||re)},imports:[[i.c,o.a,ne]]}),re)}}]);