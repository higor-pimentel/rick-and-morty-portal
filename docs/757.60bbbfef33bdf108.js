"use strict";(self.webpackChunkrick_and_morty_portal=self.webpackChunkrick_and_morty_portal||[]).push([[757],{7757:(A,g,a)=>{a.r(g),a.d(g,{EpisodesModule:()=>O});var p=a(6895),m=a(1020),l=a(646),c=a(5158),e=a(8256),u=a(7713),d=a(2869);function h(i,o){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",15),e.NdJ("click",function(){const r=e.CHM(t).$implicit,w=e.oxw(3);return e.KtG(w.navigate(r.id))}),e._UZ(2,"img",16),e.TgZ(3,"div",17)(4,"h5",18),e._uU(5),e.qZA(),e.TgZ(6,"div",19)(7,"div"),e._uU(8,"Gender: "),e.TgZ(9,"div",20),e._uU(10),e.qZA()(),e.TgZ(11,"div"),e._uU(12,"Status: "),e.TgZ(13,"div",20),e._uU(14),e.qZA()()()()(),e.BQk()}if(2&i){const t=o.$implicit;e.xp6(2),e.Q6J("src",t.image,e.LSH)("alt",t.name+" image"),e.xp6(3),e.Oqu(t.name),e.xp6(5),e.Oqu(t.gender),e.xp6(4),e.Oqu(t.status)}}function f(i,o){if(1&i&&(e.TgZ(0,"div",13),e.YNc(1,h,15,5,"ng-container",14),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.episode.characters)}}function v(i,o){if(1&i&&(e.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"h1",5),e._uU(4),e.qZA(),e.TgZ(5,"div"),e._uU(6,"Episode: "),e.TgZ(7,"div",6),e._uU(8),e.qZA()(),e.TgZ(9,"div"),e._uU(10,"Air Date: "),e.TgZ(11,"div",6),e._uU(12),e.qZA()()()(),e.TgZ(13,"div",7)(14,"ul",8,9)(16,"li",10)(17,"a",11),e._uU(18,"Characters"),e.qZA()()()(),e.YNc(19,f,2,1,"div",12),e.qZA()),2&i){const t=e.oxw();e.xp6(4),e.Oqu(t.episode.name),e.xp6(4),e.Oqu(t.episode.episode),e.xp6(4),e.Oqu(t.episode.air_date),e.xp6(7),e.Q6J("ngIf",!!t.episode.characters)}}function b(i,o){1&i&&(e.TgZ(0,"div",21)(1,"div",22)(2,"span",23),e._uU(3,"Loading..."),e.qZA()()())}let x=(()=>{class i{constructor(t,n,s){this.apollo=t,this.route=n,this.router=s,this.loading=!1,this.episode={}}ngOnInit(){this.loading=!0,this.route.queryParams.subscribe(t=>{let{id:n}=t;this.getEpisode(n)})}getEpisode(t){this.apollo.watchQuery({query:c.B,variables:{id:t}}).valueChanges.subscribe(({data:n})=>{this.loading=!1,this.episode=n.episode})}navigate(t){this.router.navigate(["characters/character"],{queryParams:{id:t}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(u._M),e.Y36(l.gz),e.Y36(l.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-detail"]],decls:3,vars:2,consts:[["class","container bg-primary bg-gradient bg-opacity-25 border border-2 rounded-1 border-sucess border-opacity-50 py-3 px-5 p-sm",4,"ngIf","ngIfElse"],["loadingSpinner",""],[1,"container","bg-primary","bg-gradient","bg-opacity-25","border","border-2","rounded-1","border-sucess","border-opacity-50","py-3","px-5","p-sm"],[1,"container-md","bg-light","bg-gradient","rounded-1","d-flex","flex-row","flex-wrap","gap-4","px-3","py-3"],["px-3","",1,"h-25","flex-column","flex-wrap","text-black-50"],[1,"text-dark"],[1,"fs-3","text-dark"],[1,"d-flex","flex-row","flex-wrap","justify-content-center","mt-2","gap-4","px-3","py-3"],["ngbNav","",1,"nav-pills","rounded-pill","bg-light","shadow","pe-none"],["nav","ngbNav"],["ngbNavItem",""],["ngbNavLink","",1,"rounded-pill"],["class","bg-light bg-gradient rounded-1 d-flex flex-row flex-wrap justify-content-center mt-2 gap-4 px-3 py-3",4,"ngIf"],[1,"bg-light","bg-gradient","rounded-1","d-flex","flex-row","flex-wrap","justify-content-center","mt-2","gap-4","px-3","py-3"],[4,"ngFor","ngForOf"],["role","button",1,"card",3,"click"],[1,"shadow","rounded-3","m-1","imgProfile",3,"src","alt"],[1,"card-body","bg-warning","bg-gradient","bg-opacity-25"],[1,"card-title"],[1,"card-text"],[1,"fs-4","text-dark"],[1,"z-2","min-vh-100","d-flex","justify-content-center","align-items-center"],["role","status",1,"spinner-border"],[1,"visually-hidden"]],template:function(t,n){if(1&t&&(e.YNc(0,v,20,4,"div",0),e.YNc(1,b,4,0,"ng-template",null,1,e.W1O)),2&t){const s=e.MAs(2);e.Q6J("ngIf",!n.loading)("ngIfElse",s)}},dependencies:[p.sg,p.O5,d.Pz,d.nv,d.Vx],styles:["@media screen and (max-width: 1400px){.pmt-sm[_ngcontent-%COMP%]{padding-top:0!important;margin-top:0!important}}@media screen and (max-width: 465px){.imgProfile[_ngcontent-%COMP%]{width:95%;height:auto}.p-sm[_ngcontent-%COMP%]{padding-right:1rem!important;padding-left:1rem!important}}"]}),i})();var y=a(9767),_=a(9055);const C=[{path:"",component:(()=>{class i{constructor(t,n,s){this.apollo=t,this.router=n,this.route=s,this.loading=!1,this.configTable={columns:[{name:"name",label:"Nome"},{name:"air_date",label:"Air date"},{name:"episode",label:"Episode"}],totalElements:0,totalPages:0},this.dataSource=[],this.searchOptions=[{value:"name",label:"Name"},{value:"episode",label:"Episode"}]}ngOnInit(){this.list()}list(){this.loading=!0,this.apollo.watchQuery({query:c.yL,variables:{page:1,filter:this.filterObj}}).valueChanges.subscribe(({data:t})=>{this.loading=!1,this.dataSource=t.episodes.results,this.configTable.totalElements=t.episodes.info.count,this.configTable.totalPages=t.episodes.info.pages})}pageChanged(t){this.loading=!0,this.apollo.watchQuery({query:c.yL,variables:{page:t,filter:this.filterObj}}).valueChanges.subscribe(({data:n})=>{this.dataSource=this.dataSource.concat(n.episodes.results),this.loading=!1})}search(t){this.filterObj=t,this.list()}selectedItem(t){this.router.navigate(["ep"],{relativeTo:this.route,queryParams:{id:t.id}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(u._M),e.Y36(l.F0),e.Y36(l.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-list"]],decls:6,vars:4,consts:[[1,"px-3","me-3"],[1,"d-flex","flex-row","flex-wrap","justify-content-between"],[1,"col-md","mb-3","flex-fill"],[1,"flex-fill",3,"options","searchOut"],[3,"loading","configTable","dataSource","pageChange","itemSelect"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h1",2),e._uU(3,"List of Episodes"),e.qZA(),e.TgZ(4,"app-search",3),e.NdJ("searchOut",function(r){return n.search(r)}),e.qZA()(),e.TgZ(5,"app-table",4),e.NdJ("pageChange",function(r){return n.pageChanged(r)})("itemSelect",function(r){return n.selectedItem(r)}),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("options",n.searchOptions),e.xp6(1),e.Q6J("loading",n.loading)("configTable",n.configTable)("dataSource",n.dataSource))},dependencies:[y.a,_.g]}),i})()},{path:"ep",component:x}];let T=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[l.Bz.forChild(C),l.Bz]}),i})();var Z=a(6823);let O=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.ez,m.U,T,Z.t,d.Oz]}),i})()}}]);