"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2171],{2171:(y,d,r)=>{r.r(d),r.d(d,{DetailsPageModule:()=>f});var p=r(6895),Z=r(433),n=r(7002),s=r(2598),m=r(5861),e=r(8256),w=r(2936);const A=[{path:"",component:(()=>{class i{constructor(t,a){this.route=t,this.storageService=a,this.reviewObject={name:"",description:"",category:"",review:"",rating:0,isFavourite:!1}}ngOnInit(){const t=this.route.snapshot.paramMap.get("id");this.loadReview(t),console.log(t)}loadReview(t){var a=this;return(0,m.Z)(function*(){var u,v,c,g;const o=yield a.storageService.getReview(t);a.reviewObject={name:o.name,description:null!==(u=null==o?void 0:o.description)&&void 0!==u?u:"N/A",category:null!==(v=null==o?void 0:o.category)&&void 0!==v?v:"N/A",review:null!==(c=null==o?void 0:o.review)&&void 0!==c?c:"N/A",rating:null!==(g=null==o?void 0:o.rating)&&void 0!==g?g:"N/A",isFavourite:o.isFavourite}})()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(s.gz),e.Y36(w.V))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-details"]],decls:35,vars:6,template:function(t,a){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Movie Details"),e.qZA()()(),e.TgZ(4,"ion-content")(5,"ion-card")(6,"ion-card-header")(7,"ion-card-title"),e._uU(8),e.qZA()(),e.TgZ(9,"ion-card-content")(10,"ion-item")(11,"ion-label"),e._uU(12,"Category:"),e.qZA(),e.TgZ(13,"ion-text"),e._uU(14),e.qZA()(),e.TgZ(15,"ion-item")(16,"ion-label"),e._uU(17,"Description:"),e.qZA(),e.TgZ(18,"ion-text"),e._uU(19),e.qZA()(),e.TgZ(20,"ion-item")(21,"ion-label"),e._uU(22,"Review:"),e.qZA(),e.TgZ(23,"ion-text"),e._uU(24),e.qZA()(),e.TgZ(25,"ion-item")(26,"ion-label"),e._uU(27,"Rating:"),e.qZA(),e.TgZ(28,"ion-text"),e._uU(29),e.qZA()(),e.TgZ(30,"ion-item")(31,"ion-label"),e._uU(32,"Is Favourite:"),e.qZA(),e.TgZ(33,"ion-text"),e._uU(34),e.qZA()()()()()),2&t&&(e.xp6(8),e.Oqu(a.reviewObject.name),e.xp6(6),e.Oqu(a.reviewObject.category),e.xp6(5),e.Oqu(a.reviewObject.description),e.xp6(5),e.Oqu(a.reviewObject.review),e.xp6(5),e.hij("",a.reviewObject.rating," / 10"),e.xp6(5),e.Oqu(a.reviewObject.isFavourite))},dependencies:[n.PM,n.FN,n.Zi,n.Dq,n.W2,n.Gu,n.Ie,n.Q$,n.yW,n.wd,n.sr]}),i})()}];let h=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[s.Bz.forChild(A),s.Bz]}),i})(),f=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.ez,Z.u5,n.Pc,h]}),i})()}}]);