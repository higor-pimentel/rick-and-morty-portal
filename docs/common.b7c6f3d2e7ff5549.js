"use strict";(self.webpackChunkrick_and_morty_portal=self.webpackChunkrick_and_morty_portal||[]).push([[592],{9055:(b,p,o)=>{o.d(p,{g:()=>c});var e=o(8256),r=o(6895);function l(a,_){if(1&a&&(e.ynx(0),e.TgZ(1,"option",10),e._uU(2),e.qZA(),e.BQk()),2&a){const i=_.$implicit;e.xp6(1),e.Q6J("value",i.value),e.xp6(1),e.Oqu(i.label)}}let c=(()=>{class a{constructor(){this.filterObj={},this.options=[],this.searchOut=new e.vpe}ngOnInit(){}search(i,g,u){this.filterObj={},u.value.trim()&&(this.filterObj[u.value]=g?.value,i.preventDefault(),this.searchOut.emit(this.filterObj))}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-search"]],inputs:{options:"options"},outputs:{searchOut:"searchOut"},decls:12,vars:1,consts:[[1,"input-group","col-md","m-2","p-3"],["type","search","placeholder","Search","aria-label","Search","required","",1,"form-control","me-2",3,"search"],["searchInput",""],[1,"form-floating"],["required","",1,"form-select"],["floatingSelectFilter",""],["selected","","disabled","","value",""],[4,"ngFor","ngForOf"],["for","floatingSelectFilter"],["type","submit",1,"btn","btn-outline-success",3,"click"],[3,"value"]],template:function(i,g){if(1&i){const u=e.EpF();e.TgZ(0,"div",0)(1,"input",1,2),e.NdJ("search",function(m){e.CHM(u);const T=e.MAs(5);return e.KtG(g.search(m,m.target,T))}),e.qZA(),e.TgZ(3,"div",3)(4,"select",4,5),e._UZ(6,"option",6),e.YNc(7,l,3,2,"ng-container",7),e.qZA(),e.TgZ(8,"label",8),e._uU(9,"Select the field search"),e.qZA()(),e.TgZ(10,"button",9),e.NdJ("click",function(m){e.CHM(u);const T=e.MAs(2),E=e.MAs(5);return e.KtG(g.search(m,T,E))}),e._uU(11,"Search"),e.qZA()()}2&i&&(e.xp6(7),e.Q6J("ngForOf",g.options))},dependencies:[r.sg]}),a})()},6823:(b,p,o)=>{o.d(p,{t:()=>l});var e=o(6895),r=o(8256);let l=(()=>{class c{}return c.\u0275fac=function(_){return new(_||c)},c.\u0275mod=r.oAB({type:c}),c.\u0275inj=r.cJS({imports:[e.ez]}),c})()},9767:(b,p,o)=>{o.d(p,{a:()=>E});var e=o(8256),r=o(6895),l=o(2869);function c(n,s){if(1&n&&(e.ynx(0),e.TgZ(1,"th",6),e._uU(2),e.qZA(),e.BQk()),2&n){const t=s.$implicit;e.xp6(2),e.Oqu(t.label)}}function a(n,s){if(1&n&&(e.ynx(0),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.BQk()),2&n){const t=s.$implicit,d=e.oxw().$implicit;e.xp6(2),e.Oqu(d[t.name])}}function _(n,s){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"tr"),e.YNc(2,a,3,1,"ng-container",1),e.TgZ(3,"td",8),e.NdJ("click",function(){const C=e.CHM(t).$implicit,S=e.oxw(2);return e.KtG(S.itemSelected(C))}),e._UZ(4,"em",9),e.qZA()(),e.BQk()}if(2&n){const t=e.oxw(2);e.xp6(2),e.Q6J("ngForOf",t.configTable.columns)}}function i(n,s){1&n&&(e.TgZ(0,"td",10)(1,"div",11)(2,"p"),e._uU(3," No items were found "),e.qZA()()())}function g(n,s){if(1&n&&(e.TgZ(0,"tbody"),e.YNc(1,_,5,1,"ng-container",1),e.ALo(2,"slice"),e.TgZ(3,"tr"),e.YNc(4,i,4,0,"td",7),e.qZA()()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.Dn7(2,2,t.dataSource,(t.page-1)*t.pageSize,t.page*t.pageSize)),e.xp6(3),e.Q6J("ngIf",!t.dataSource.length)}}function u(n,s){1&n&&(e.TgZ(0,"tr")(1,"td",12)(2,"div",2)(3,"div",13)(4,"span",14),e._uU(5,"Loading..."),e.qZA()()()()())}function h(n,s){1&n&&e._uU(0,"Prev")}function m(n,s){1&n&&e._uU(0,"Next")}function T(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"ngb-pagination",15),e.NdJ("pageChange",function(f){e.CHM(t);const C=e.oxw();return e.KtG(C.page=f)})("pageChange",function(f){e.CHM(t);const C=e.oxw();return e.KtG(C.pageChanged(f))}),e.YNc(1,h,1,0,"ng-template",16),e.YNc(2,m,1,0,"ng-template",17),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("collectionSize",t.configTable.totalElements)("page",t.page)("pageSize",t.pageSize)("maxSize",5)}}let E=(()=>{class n{constructor(){this.loading=!1,this.pageChange=new e.vpe,this.itemSelect=new e.vpe,this.totalElements=0,this.totalPages=0,this.page=1,this.pageSize=20}pageChanged(t){this.pageChange.emit(t)}itemSelected(t){this.itemSelect.emit(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-table"]],inputs:{dataSource:"dataSource",configTable:"configTable",loading:"loading"},outputs:{pageChange:"pageChange",itemSelect:"itemSelect"},decls:10,vars:4,consts:[["id","table","aria-label","table",1,"table","table-striped","p-3"],[4,"ngFor","ngForOf"],[1,"text-center"],[4,"ngIf","ngIfElse"],["loadingSpinner",""],["class","d-flex justify-content-center","aria-label","Table pagination",3,"collectionSize","page","pageSize","maxSize","pageChange",4,"ngIf"],["scope","col"],["colSpan","4",4,"ngIf"],["role","button",1,"text-center",3,"click"],[1,"bi","bi-box-arrow-up-right"],["colSpan","4"],[1,"d-flex","justify-content-center","align-items-center"],["colspan","5"],["role","status",1,"spinner-border"],[1,"visually-hidden"],["aria-label","Table pagination",1,"d-flex","justify-content-center",3,"collectionSize","page","pageSize","maxSize","pageChange"],["ngbPaginationPrevious",""],["ngbPaginationNext",""]],template:function(t,d){if(1&t&&(e.TgZ(0,"table",0)(1,"thead")(2,"tr"),e.YNc(3,c,3,1,"ng-container",1),e.TgZ(4,"th",2),e._uU(5,"Details"),e.qZA()()(),e.YNc(6,g,5,6,"tbody",3),e.qZA(),e.YNc(7,u,6,0,"ng-template",null,4,e.W1O),e.YNc(9,T,3,4,"ngb-pagination",5)),2&t){const f=e.MAs(8);e.xp6(3),e.Q6J("ngForOf",d.configTable.columns),e.xp6(3),e.Q6J("ngIf",!d.loading)("ngIfElse",f),e.xp6(3),e.Q6J("ngIf",d.dataSource.length)}},dependencies:[r.sg,r.O5,l.N9,l.GZ,l.ju,r.OU],encapsulation:2}),n})()},1020:(b,p,o)=>{o.d(p,{U:()=>c});var e=o(6895),r=o(2869),l=o(8256);let c=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=l.oAB({type:a}),a.\u0275inj=l.cJS({imports:[e.ez,r.IJ,r.jF]}),a})()},5158:(b,p,o)=>{o.d(p,{B:()=>g,ET:()=>h,FT:()=>u,eh:()=>a,gF:()=>r,js:()=>i,w_:()=>_,yL:()=>c,zT:()=>l});var e=o(7713);const r=e.Ps`
  query ($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        gender
        status
        species
      }
    }
  }
`,l=e.Ps`
  query ($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        type
        dimension
      }
    }
  }
`,c=e.Ps`
  query ($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`,a=e.Ps`
  query {
    aliveCharacters: characters(filter: { status: "Alive" }) {
      ...countCharacters
    }
    deadCharacters: characters(filter: { status: "Dead" }) {
      ...countCharacters
    }
    unknownCharacters: characters(filter: { status: "unknown" }) {
      ...countCharacters
    }
  }

  fragment countCharacters on Characters {
    info {
      count
    }
  }
`,_=e.Ps`
  query ($specie: String) {
    aliveCharacters: characters(filter: { status: "Alive", species: $specie }) {
      ...countCharacters
    }
    deadCharacters: characters(filter: { status: "Dead", species: $specie }) {
      ...countCharacters
    }
    unknownCharacters: characters(
      filter: { status: "unknown", species: $specie }
    ) {
      ...countCharacters
    }
  }

  fragment countCharacters on Characters {
    info {
      count
    }
  }
`,i=e.Ps`
  query ($id: ID!) {
    character(id: $id) {
      name
      gender
      type
      status
      species
      episode {
        id
        name
        episode
        air_date
      }
      location {
        id
        name
        dimension
      }
      origin {
        id
        name
        dimension
      }
      image
    }
  }
`,g=e.Ps`
  query ($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        gender
        status
        image
      }
    }
  }
`,u=e.Ps`
  query ($id: ID!) {
    location(id: $id) {
      name
      type
      dimension
      residents {
        id
        name
        status
        image
      }
    }
  }
`,h=e.Ps`
  query ($filter: FilterLocation) {
    locations(filter: $filter) {
      results {
        residents {
          id
          status
        }
      }
    }
  }
`}}]);