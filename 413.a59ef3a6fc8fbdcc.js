"use strict";(self.webpackChunkappollo=self.webpackChunkappollo||[]).push([[413],{7413:(O,h,u)=>{u.r(h),u.d(h,{AccountModule:()=>q});var g=u(9808),l=u(4100),t=u(5e3),c=u(2564),m=u(7423);function _(n,a){1&n&&t.GkF(0)}function C(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"p"),t._uU(1,"Welcome, "),t.TgZ(2,"em"),t._uU(3),t.qZA()(),t.TgZ(4,"button",5),t.NdJ("click",function(){return t.CHM(e),t.oxw().onLogoutClick()}),t._uU(5,"Logout"),t.qZA(),t._UZ(6,"p"),t.TgZ(7,"a",6),t._uU(8,"Home"),t.qZA()}if(2&n){const e=t.oxw();t.xp6(3),t.hij("",null==e.user?null:e.user.username,".")}}function Z(n,a){1&n&&(t.TgZ(0,"p"),t._uU(1,"You are not logged in."),t.qZA(),t.TgZ(2,"a",7),t._uU(3,"Login"),t.qZA(),t._UZ(4,"p"),t.TgZ(5,"a",8),t._uU(6,"Register"),t.qZA())}let M=(()=>{class n{constructor(e){this.account=e}get user(){return this.account.user}ngOnInit(){}onLogoutClick(){this.account.logout()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.B))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-account"]],decls:8,vars:3,consts:[[1,"center","container"],[1,"center-text"],[4,"ngIf","ngIfThen","ngIfElse"],["thenBlock",""],["elseBlock",""],["type","button","mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","routerLink","/"],["mat-raised-button","","color","primary","routerLink","/account/login"],["mat-raised-button","","color","primary","routerLink","/account/register"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2,"Account"),t.qZA(),t.YNc(3,_,1,0,"ng-container",2),t.YNc(4,C,9,1,"ng-template",null,3,t.W1O),t.YNc(6,Z,7,0,"ng-template",null,4,t.W1O),t.qZA()),2&e){const r=t.MAs(5),i=t.MAs(7);t.xp6(3),t.Q6J("ngIf",o.user)("ngIfThen",r)("ngIfElse",i)}},directives:[g.O5,m.lW,m.zs,l.yS],styles:[".center[_ngcontent-%COMP%]{margin:auto}.center-text[_ngcontent-%COMP%]{text-align:center}.spinner[_ngcontent-%COMP%]{margin-top:15px}.container[_ngcontent-%COMP%]{margin-top:50px;padding:20px;border-radius:10px;display:flex;flex-flow:column nowrap;width:200px;background-color:#f2f2f2}"]}),n})();var s=u(3075),p=u(7322),d=u(7531),f=u(773);function T(n,a){1&n&&(t.ynx(0),t._UZ(1,"mat-progress-spinner",6),t.BQk())}function A(n,a){if(1&n&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.status)}}function y(n,a){1&n&&(t.ynx(0),t._UZ(1,"mat-progress-spinner",9),t.BQk())}function w(n,a){if(1&n&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.status)}}const b=[{path:"",component:M},{path:"login",component:(()=>{class n{constructor(e,o,r){this.accountService=e,this.route=o,this.router=r,this.username="",this.password="",this.waiting=!1,this.status=""}ngOnInit(){}onSubmit(e){e.preventDefault(),this.accountService.login(this.username,this.password).pipe(o=>(this.status="",this.waiting=!0,o)).subscribe({next:o=>{this.status="Login successful",this.waiting=!1;const r=this.route.snapshot.queryParamMap.get("returnUrl");this.router.navigate(r?[r]:["/account"])},error:o=>{this.status="Login failed",this.waiting=!1}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.B),t.Y36(l.gz),t.Y36(l.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:13,vars:4,consts:[[1,"center","container",3,"submit"],["appearance","outline"],["matInput","","required","","type","text","name","username","title","Username form field",3,"ngModel","ngModelChange"],["matInput","","required","","type","password","name","password","title","Password form field",3,"ngModel","ngModelChange"],["type","submit","mat-raised-button","","color","primary"],[4,"ngIf"],["mode","indeterminate",1,"center","spinner"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0),t.NdJ("submit",function(i){return o.onSubmit(i)}),t.TgZ(1,"mat-form-field",1)(2,"mat-label"),t._uU(3,"Username"),t.qZA(),t.TgZ(4,"input",2),t.NdJ("ngModelChange",function(i){return o.username=i}),t.qZA()(),t.TgZ(5,"mat-form-field",1)(6,"mat-label"),t._uU(7,"Password"),t.qZA(),t.TgZ(8,"input",3),t.NdJ("ngModelChange",function(i){return o.password=i}),t.qZA()(),t.TgZ(9,"button",4),t._uU(10," LogIn "),t.qZA(),t.YNc(11,T,2,0,"ng-container",5),t.YNc(12,A,2,1,"p",5),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngModel",o.username),t.xp6(4),t.Q6J("ngModel",o.password),t.xp6(3),t.Q6J("ngIf",o.waiting),t.xp6(1),t.Q6J("ngIf",o.status))},directives:[s._Y,s.JL,s.F,p.KE,p.hX,d.Nt,s.Fj,s.Q7,s.JJ,s.On,m.lW,g.O5,f.Ou],styles:[".center[_ngcontent-%COMP%]{margin:auto}.spinner[_ngcontent-%COMP%]{margin-top:15px}.container[_ngcontent-%COMP%]{margin-top:50px;padding:20px;border-radius:10px;display:flex;flex-flow:column nowrap;width:200px;background-color:#f2f2f2}"]}),n})()},{path:"register",component:(()=>{class n{constructor(e,o,r){this.accountService=e,this.route=o,this.router=r,this.username="",this.password="",this.firstname="",this.lastname="",this.email="",this.waiting=!1,this.status=""}ngOnInit(){}onSubmit(e){e.preventDefault(),this.accountService.register({username:this.username,password:this.password,firstname:this.firstname,lastname:this.lastname,email:this.email}).pipe(r=>(this.status="",this.waiting=!0,r)).subscribe({next:r=>{this.status="Register successful",this.waiting=!1;const i=this.route.snapshot.queryParamMap.get("returnUrl");this.router.navigate(i?[i]:["/account/login"])},error:r=>{this.status="Register failed",this.waiting=!1}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.B),t.Y36(l.gz),t.Y36(l.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-register"]],decls:25,vars:7,consts:[[1,"center","container",3,"submit"],["appearance","outline"],["matInput","","required","","type","text","name","username","title","Username form field",3,"ngModel","ngModelChange"],["matInput","","required","","type","password","name","password","title","Password form field",3,"ngModel","ngModelChange"],["matInput","","required","","type","text","name","first-name","title","First name form field",3,"ngModel","ngModelChange"],["matInput","","required","","type","text","name","last-name","title","Last name form field",3,"ngModel","ngModelChange"],["matInput","","required","","type","email","name","email","title","Email form field",3,"ngModel","ngModelChange"],["type","submit","mat-raised-button","","color","primary"],[4,"ngIf"],["mode","indeterminate",1,"center","spinner"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0),t.NdJ("submit",function(i){return o.onSubmit(i)}),t.TgZ(1,"mat-form-field",1)(2,"mat-label"),t._uU(3,"Username"),t.qZA(),t.TgZ(4,"input",2),t.NdJ("ngModelChange",function(i){return o.username=i}),t.qZA()(),t.TgZ(5,"mat-form-field",1)(6,"mat-label"),t._uU(7,"Password"),t.qZA(),t.TgZ(8,"input",3),t.NdJ("ngModelChange",function(i){return o.password=i}),t.qZA()(),t.TgZ(9,"mat-form-field",1)(10,"mat-label"),t._uU(11,"First name"),t.qZA(),t.TgZ(12,"input",4),t.NdJ("ngModelChange",function(i){return o.firstname=i}),t.qZA()(),t.TgZ(13,"mat-form-field",1)(14,"mat-label"),t._uU(15,"Last name"),t.qZA(),t.TgZ(16,"input",5),t.NdJ("ngModelChange",function(i){return o.lastname=i}),t.qZA()(),t.TgZ(17,"mat-form-field",1)(18,"mat-label"),t._uU(19,"Email"),t.qZA(),t.TgZ(20,"input",6),t.NdJ("ngModelChange",function(i){return o.email=i}),t.qZA()(),t.TgZ(21,"button",7),t._uU(22," Register "),t.qZA(),t.YNc(23,y,2,0,"ng-container",8),t.YNc(24,w,2,1,"p",8),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngModel",o.username),t.xp6(4),t.Q6J("ngModel",o.password),t.xp6(4),t.Q6J("ngModel",o.firstname),t.xp6(4),t.Q6J("ngModel",o.lastname),t.xp6(4),t.Q6J("ngModel",o.email),t.xp6(3),t.Q6J("ngIf",o.waiting),t.xp6(1),t.Q6J("ngIf",o.status))},directives:[s._Y,s.JL,s.F,p.KE,p.hX,d.Nt,s.Fj,s.Q7,s.JJ,s.On,m.lW,g.O5,f.Ou],styles:[".center[_ngcontent-%COMP%]{margin:auto}.spinner[_ngcontent-%COMP%]{margin-top:15px}.container[_ngcontent-%COMP%]{margin-top:50px;padding:20px;border-radius:10px;display:flex;flex-flow:column nowrap;width:200px;background-color:#f2f2f2}"]}),n})()}];let U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(b)],l.Bz]}),n})();var v=u(5245),J=u(4449);let q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[c.B],imports:[[g.ez,U,p.lN,m.ot,d.c,v.Ps,s.u5,f.Cq,m.ot,J.ie]]}),n})()}}]);