"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4851],{4851:(P,l,a)=>{a.r(l),a.d(l,{HomePageModule:()=>h});var c=a(6895),t=a(7002),s=a(433),g=a(2598),e=a(8256);const p=[{path:"",component:(()=>{class n{constructor(o,i){this.route=o,this.router=i,this.userObject={userName:"",password:"",dob:"",save:Boolean},this.saveUserData=this.userObject.save}ngOnInit(){this.routeParamsSubscription=this.route.params.subscribe(o=>{this.userName=o.userName})}onLogin(){this.router.navigate(["tabs/accounts",this.userName])}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(g.gz),e.Y36(g.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:20,vars:2,consts:[[3,"submit"],["type","text","name","userName",3,"ngModel","ngModelChange"],["name","password","type","password","required","",3,"ngModel","ngModelChange"],["slot","start",2,"margin-right","10px"],[1,"text-align:","start"],["expand","full","type","submit"]],template:function(o,i){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Register"),e.qZA()()(),e.TgZ(4,"ion-content")(5,"form",0),e.NdJ("submit",function(){return i.onLogin()}),e.TgZ(6,"ion-item")(7,"ion-label"),e._uU(8,"Username:"),e.qZA(),e.TgZ(9,"ion-input",1),e.NdJ("ngModelChange",function(u){return i.userName=u}),e.qZA()(),e.TgZ(10,"ion-item")(11,"ion-label"),e._uU(12,"Password:"),e.qZA(),e.TgZ(13,"ion-input",2),e.NdJ("ngModelChange",function(u){return i.password=u}),e.qZA()(),e.TgZ(14,"ion-item"),e._UZ(15,"ion-checkbox",3),e.TgZ(16,"ion-label",4),e._uU(17," Remain Logged In? "),e.qZA()(),e.TgZ(18,"ion-button",5),e._uU(19,"Login"),e.qZA()()()),2&o&&(e.xp6(9),e.Q6J("ngModel",i.userName),e.xp6(4),e.Q6J("ngModel",i.password))},dependencies:[s._Y,s.JJ,s.JL,s.Q7,s.On,s.F,t.YG,t.nz,t.W2,t.Gu,t.pK,t.Ie,t.Q$,t.wd,t.sr,t.w,t.j9],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),n})()}];let d=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(p),g.Bz]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,s.u5,t.Pc,d]}),n})()}}]);