"use strict";(self.webpackChunkrick_and_morty_portal=self.webpackChunkrick_and_morty_portal||[]).push([[840],{6840:(w,g,r)=>{r.r(g),r.d(g,{CharactersModule:()=>U});var d=r(6895),c=r(646),p=r(5158),e=r(8256),u=r(7713),l=r(2869);function m(a,i){if(1&a&&(e.TgZ(0,"div"),e._uU(1,"Type: "),e.TgZ(2,"div",7),e._uU(3),e.qZA()()),2&a){const t=e.oxw(2);e.xp6(3),e.Oqu(t.character.type)}}function h(a,i){if(1&a&&(e.TgZ(0,"div",16)(1,"h4",17),e._uU(2,"Origin "),e.qZA(),e.TgZ(3,"div",7),e._uU(4),e.qZA(),e.TgZ(5,"div"),e._uU(6,"Dimension: "),e.TgZ(7,"div",7),e._uU(8),e.qZA()()()),2&a){const t=e.oxw(2);e.xp6(4),e.Oqu(t.character.origin.name),e.xp6(4),e.Oqu(t.character.origin.dimension)}}function f(a,i){if(1&a&&(e.TgZ(0,"div",16)(1,"h4",17),e._uU(2,"Actual location "),e.qZA(),e.TgZ(3,"div",7),e._uU(4),e.qZA(),e.TgZ(5,"div"),e._uU(6,"Dimension: "),e.TgZ(7,"div",7),e._uU(8),e.qZA()()()),2&a){const t=e.oxw(2);e.xp6(4),e.Oqu(t.character.location.name),e.xp6(4),e.Oqu(t.character.location.dimension)}}function v(a,i){if(1&a){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",20)(2,"div",21),e.NdJ("click",function(){const s=e.CHM(t).$implicit,S=e.oxw(3);return e.KtG(S.navigate(s.id))}),e.TgZ(3,"h5",22),e._uU(4),e.qZA(),e.TgZ(5,"div",23)(6,"div"),e._uU(7,"Episode: "),e.TgZ(8,"div",24),e._uU(9),e.qZA()(),e.TgZ(10,"div"),e._uU(11,"Air Date: "),e.TgZ(12,"div",24),e._uU(13),e.qZA()()()()(),e.BQk()}if(2&a){const t=i.$implicit;e.xp6(4),e.Oqu(t.name),e.xp6(5),e.Oqu(t.episode),e.xp6(4),e.Oqu(t.air_date)}}function x(a,i){if(1&a&&(e.TgZ(0,"div",18),e.YNc(1,v,14,3,"ng-container",19),e.qZA()),2&a){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.character.episode)}}function _(a,i){if(1&a&&(e.TgZ(0,"div",2)(1,"div",3),e._UZ(2,"img",4),e.TgZ(3,"div",5)(4,"h1",6),e._uU(5),e.qZA(),e.TgZ(6,"div"),e._uU(7,"Species: "),e.TgZ(8,"div",7),e._uU(9),e.qZA()(),e.YNc(10,m,4,1,"div",8),e.TgZ(11,"div"),e._uU(12,"Gender: "),e.TgZ(13,"div",7),e._uU(14),e.qZA()(),e.TgZ(15,"div"),e._uU(16,"Status: "),e.TgZ(17,"div",7),e._uU(18),e.qZA()()(),e.YNc(19,h,9,2,"div",9),e.YNc(20,f,9,2,"div",9),e.qZA(),e.TgZ(21,"div",10)(22,"ul",11,12)(24,"li",13)(25,"a",14),e._uU(26,"Episodes"),e.qZA()()()(),e.YNc(27,x,2,1,"div",15),e.qZA()),2&a){const t=e.oxw();e.xp6(2),e.Q6J("src",t.character.image,e.LSH)("alt",t.character.name+" image"),e.xp6(3),e.Oqu(t.character.name),e.xp6(4),e.Oqu(t.character.species),e.xp6(1),e.Q6J("ngIf",!!t.character.type),e.xp6(4),e.Oqu(t.character.gender),e.xp6(4),e.Oqu(t.character.status),e.xp6(1),e.Q6J("ngIf",!!t.character.origin),e.xp6(1),e.Q6J("ngIf",!!t.character.location),e.xp6(7),e.Q6J("ngIf",!!t.character.episode)}}function b(a,i){1&a&&(e.TgZ(0,"div",25)(1,"div",26)(2,"span",27),e._uU(3,"Loading..."),e.qZA()()())}let Z=(()=>{class a{constructor(t,n,o){this.apollo=t,this.route=n,this.router=o,this.loading=!1,this.character={}}ngOnInit(){this.loading=!0,this.route.queryParams.subscribe(t=>{let{id:n}=t;this.getCharacter(n)})}getCharacter(t){this.apollo.watchQuery({query:p.js,variables:{id:t}}).valueChanges.subscribe(({data:n})=>{this.loading=!1,this.character=n.character})}navigate(t){this.router.navigate(["episodes/ep"],{queryParams:{id:t}})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(u._M),e.Y36(c.gz),e.Y36(c.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-detail"]],decls:3,vars:2,consts:[["class","container bg-primary bg-gradient bg-opacity-25 border border-2 rounded-1 border-sucess border-opacity-50 py-3 px-5 p-sm",4,"ngIf","ngIfElse"],["loadingSpinner",""],[1,"container","bg-primary","bg-gradient","bg-opacity-25","border","border-2","rounded-1","border-sucess","border-opacity-50","py-3","px-5","p-sm"],[1,"container-md","bg-light","bg-gradient","rounded-1","d-flex","flex-row","flex-wrap","gap-4","px-3","py-3"],[1,"shadow","rounded-3","m-1","imgProfile",3,"src","alt"],["px-3","",1,"h-25","flex-column","flex-wrap","text-black-50"],[1,"text-dark"],[1,"fs-3","text-dark"],[4,"ngIf"],["class","pt-5 mt-4 ms-2 pmt-sm",4,"ngIf"],[1,"d-flex","flex-row","flex-wrap","justify-content-center","mt-2","gap-4","px-3","py-3"],["ngbNav","",1,"nav-pills","rounded-pill","bg-light","shadow","pe-none"],["nav","ngbNav"],["ngbNavItem",""],["ngbNavLink","",1,"rounded-pill"],["class","bg-light bg-gradient rounded-1 d-flex flex-row flex-wrap justify-content-center mt-2 gap-4 px-3 py-3",4,"ngIf"],[1,"pt-5","mt-4","ms-2","pmt-sm"],[1,"text-black-50"],[1,"bg-light","bg-gradient","rounded-1","d-flex","flex-row","flex-wrap","justify-content-center","mt-2","gap-4","px-3","py-3"],[4,"ngFor","ngForOf"],[1,"card"],["role","button",1,"card-body","bg-sucess","bg-gradient","bg-opacity-25",3,"click"],[1,"card-title"],[1,"card-text"],[1,"fs-4","text-dark"],[1,"z-2","min-vh-100","d-flex","justify-content-center","align-items-center"],["role","status",1,"spinner-border"],[1,"visually-hidden"]],template:function(t,n){if(1&t&&(e.YNc(0,_,28,10,"div",0),e.YNc(1,b,4,0,"ng-template",null,1,e.W1O)),2&t){const o=e.MAs(2);e.Q6J("ngIf",!n.loading)("ngIfElse",o)}},dependencies:[d.sg,d.O5,l.Pz,l.nv,l.Vx],styles:["@media screen and (max-width: 990px){.pmt-sm[_ngcontent-%COMP%]{padding-top:0!important;margin-top:0!important}}@media screen and (max-width: 465px){.imgProfile[_ngcontent-%COMP%]{width:95%;height:auto}.p-sm[_ngcontent-%COMP%]{padding-right:1rem!important;padding-left:1rem!important}}"]}),a})();var T=r(9767),C=r(9055);const y=[{path:"",component:(()=>{class a{constructor(t,n,o){this.apollo=t,this.router=n,this.route=o,this.loading=!1,this.filterObj={},this.configTable={columns:[{name:"name",label:"Nome"},{name:"gender",label:"Gender"},{name:"status",label:"Status"},{name:"species",label:"Specie"}],totalElements:0,totalPages:0},this.dataSource=[],this.searchOptions=[{value:"name",label:"Name"},{value:"gender",label:"Gender"},{value:"status",label:"Status"},{value:"species",label:"Species"}]}ngOnInit(){this.list()}list(){this.loading=!0,this.apollo.watchQuery({query:p.gF,variables:{page:1,filter:this.filterObj}}).valueChanges.subscribe(({data:t})=>{this.loading=!1,this.dataSource=t.characters.results,this.configTable.totalElements=t.characters.info.count,this.configTable.totalPages=t.characters.info.pages})}pageChanged(t){console.log(t),console.log(this.dataSource.length),this.loading=!0,this.apollo.watchQuery({query:p.gF,variables:{page:t,filter:this.filterObj}}).valueChanges.subscribe(({data:n})=>{this.loading=!1,this.dataSource.length<=20*(t-1)?this.dataSource=this.dataSource.concat(...n.characters.results):this.dataSource.splice(20*(t-1),0,...n.characters.results)})}search(t){this.filterObj=t,this.list()}selectedItem(t){this.router.navigate(["character"],{relativeTo:this.route,queryParams:{id:t.id}})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(u._M),e.Y36(c.F0),e.Y36(c.gz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-list"]],decls:6,vars:4,consts:[[1,"px-3","me-3"],[1,"d-flex","flex-row","flex-wrap","justify-content-between"],[1,"col-md","mb-3","flex-fill"],[1,"flex-fill",3,"options","searchOut"],[3,"loading","configTable","dataSource","pageChange","itemSelect"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h1",2),e._uU(3,"List of Characters"),e.qZA(),e.TgZ(4,"app-search",3),e.NdJ("searchOut",function(s){return n.search(s)}),e.qZA()(),e.TgZ(5,"app-table",4),e.NdJ("pageChange",function(s){return n.pageChanged(s)})("itemSelect",function(s){return n.selectedItem(s)}),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("options",n.searchOptions),e.xp6(1),e.Q6J("loading",n.loading)("configTable",n.configTable)("dataSource",n.dataSource))},dependencies:[T.a,C.g]}),a})()},{path:"character",component:Z}];let O=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[c.Bz.forChild(y),c.Bz]}),a})();var q=r(1020),A=r(6823);let U=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[d.ez,q.U,O,A.t,l.Oz]}),a})()}}]);