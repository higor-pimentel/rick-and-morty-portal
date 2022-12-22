"use strict";(self.webpackChunkrick_and_morty_portal=self.webpackChunkrick_and_morty_portal||[]).push([[592],{9055:(E,g,a)=>{a.d(g,{g:()=>r});var e=a(8274),c=a(6895),s=a(4463);function p(o,_){if(1&o&&(e.ynx(0),e.TgZ(1,"option",10),e._uU(2),e.ALo(3,"translate"),e.ALo(4,"lowercase"),e.qZA(),e.BQk()),2&o){const i=_.$implicit;e.xp6(1),e.Q6J("value",i.value),e.xp6(1),e.Oqu(e.lcZ(3,2,e.lcZ(4,4,i.label)))}}let r=(()=>{class o{constructor(){this.filterObj={},this.options=[],this.searchOut=new e.vpe}ngOnInit(){}search(i,u,d){this.filterObj={},d.value.trim()&&(this.filterObj[d.value]=u?.value,i.preventDefault(),this.searchOut.emit(this.filterObj))}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-search"]],inputs:{options:"options",label:"label"},outputs:{searchOut:"searchOut"},decls:15,vars:10,consts:[[1,"input-group","col-md","m-2","p-3"],["type","search","aria-label","Search","required","",1,"form-control","me-2",3,"placeholder","search"],["searchInput",""],[1,"form-floating"],["required","",1,"form-select"],["floatingSelectFilter",""],["selected","","disabled","","value",""],[4,"ngFor","ngForOf"],["for","floatingSelectFilter"],["type","submit",1,"btn","btn-outline-success",3,"click"],[3,"value"]],template:function(i,u){if(1&i){const d=e.EpF();e.TgZ(0,"div",0)(1,"input",1,2),e.NdJ("search",function(f){e.CHM(d);const h=e.MAs(6);return e.KtG(u.search(f,f.target,h))}),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",3)(5,"select",4,5),e._UZ(7,"option",6),e.YNc(8,p,5,6,"ng-container",7),e.qZA(),e.TgZ(9,"label",8),e._uU(10),e.ALo(11,"translate"),e.qZA()(),e.TgZ(12,"button",9),e.NdJ("click",function(f){e.CHM(d);const h=e.MAs(2),A=e.MAs(6);return e.KtG(u.search(f,h,A))}),e._uU(13),e.ALo(14,"translate"),e.qZA()()}2&i&&(e.xp6(1),e.Q6J("placeholder",e.lcZ(3,4,"search")),e.xp6(7),e.Q6J("ngForOf",u.options),e.xp6(2),e.Oqu(e.lcZ(11,6,"selectField")),e.xp6(3),e.Oqu(e.lcZ(14,8,"search")))},dependencies:[c.sg,c.i8,s.X$]}),o})()},6823:(E,g,a)=>{a.d(g,{t:()=>p});var e=a(6895),c=a(4463),s=a(8274);let p=(()=>{class r{}return r.\u0275fac=function(_){return new(_||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[e.ez,c.aw]}),r})()},9767:(E,g,a)=>{a.d(g,{a:()=>A});var e=a(8274),c=a(6895),s=a(221),p=a(4463);function r(t,l){if(1&t&&(e.ynx(0),e.TgZ(1,"th",6),e._uU(2),e.ALo(3,"translate"),e.ALo(4,"lowercase"),e.qZA(),e.BQk()),2&t){const n=l.$implicit;e.xp6(2),e.Oqu(e.lcZ(3,1,e.lcZ(4,3,n.label)))}}function o(t,l){if(1&t&&(e.ynx(0),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.BQk()),2&t){const n=l.$implicit,m=e.oxw().$implicit;e.xp6(2),e.Oqu(m[n.name])}}function _(t,l){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"tr"),e.YNc(2,o,3,1,"ng-container",1),e.TgZ(3,"td",8),e.NdJ("click",function(){const C=e.CHM(n).$implicit,O=e.oxw(2);return e.KtG(O.itemSelected(C))}),e._UZ(4,"em",9),e.qZA()(),e.BQk()}if(2&t){const n=e.oxw(2);e.xp6(2),e.Q6J("ngForOf",n.configTable.columns)}}function i(t,l){1&t&&(e.TgZ(0,"td",10)(1,"div",11)(2,"p"),e._uU(3),e.ALo(4,"translate"),e.qZA()()()),2&t&&(e.xp6(3),e.hij(" ",e.lcZ(4,1,"noItemsFound")," "))}function u(t,l){if(1&t&&(e.TgZ(0,"tbody"),e.YNc(1,_,5,1,"ng-container",1),e.ALo(2,"slice"),e.TgZ(3,"tr"),e.YNc(4,i,5,3,"td",7),e.qZA()()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.Dn7(2,2,n.dataSource,(n.page-1)*n.pageSize,n.page*n.pageSize)),e.xp6(3),e.Q6J("ngIf",!n.dataSource.length)}}function d(t,l){1&t&&(e.TgZ(0,"tr")(1,"td",12)(2,"div",2)(3,"div",13)(4,"span",14),e._uU(5,"Loading..."),e.qZA()()()()())}function b(t,l){1&t&&(e._uU(0),e.ALo(1,"translate"),e.ALo(2,"lowercase")),2&t&&e.Oqu(e.lcZ(1,1,e.lcZ(2,3,"Prev")))}function f(t,l){1&t&&(e._uU(0),e.ALo(1,"translate"),e.ALo(2,"lowercase")),2&t&&e.Oqu(e.lcZ(1,1,e.lcZ(2,3,"Next")))}function h(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"ngb-pagination",15),e.NdJ("pageChange",function(T){e.CHM(n);const C=e.oxw();return e.KtG(C.page=T)})("pageChange",function(T){e.CHM(n);const C=e.oxw();return e.KtG(C.pageChanged(T))}),e.YNc(1,b,3,5,"ng-template",16),e.YNc(2,f,3,5,"ng-template",17),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("collectionSize",n.configTable.totalElements)("page",n.page)("pageSize",n.pageSize)("maxSize",5)}}let A=(()=>{class t{constructor(){this.loading=!1,this.pageChange=new e.vpe,this.itemSelect=new e.vpe,this.totalElements=0,this.totalPages=0,this.page=1,this.pageSize=20}pageChanged(n){this.pageChange.emit(n)}itemSelected(n){this.itemSelect.emit(n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-table"]],inputs:{dataSource:"dataSource",configTable:"configTable",loading:"loading"},outputs:{pageChange:"pageChange",itemSelect:"itemSelect"},decls:11,vars:7,consts:[["id","table","aria-label","table",1,"table","table-striped","p-3"],[4,"ngFor","ngForOf"],[1,"text-center"],[4,"ngIf","ngIfElse"],["loadingSpinner",""],["class","d-flex justify-content-center","aria-label","Table pagination",3,"collectionSize","page","pageSize","maxSize","pageChange",4,"ngIf"],["scope","col"],["colSpan","4",4,"ngIf"],["role","button",1,"text-center",3,"click"],[1,"bi","bi-box-arrow-up-right"],["colSpan","4"],[1,"d-flex","justify-content-center","align-items-center"],["colspan","5"],["role","status",1,"spinner-border"],[1,"visually-hidden"],["aria-label","Table pagination",1,"d-flex","justify-content-center",3,"collectionSize","page","pageSize","maxSize","pageChange"],["ngbPaginationPrevious",""],["ngbPaginationNext",""]],template:function(n,m){if(1&n&&(e.TgZ(0,"table",0)(1,"thead")(2,"tr"),e.YNc(3,r,5,5,"ng-container",1),e.TgZ(4,"th",2),e._uU(5),e.ALo(6,"translate"),e.qZA()()(),e.YNc(7,u,5,6,"tbody",3),e.qZA(),e.YNc(8,d,6,0,"ng-template",null,4,e.W1O),e.YNc(10,h,3,4,"ngb-pagination",5)),2&n){const T=e.MAs(9);e.xp6(3),e.Q6J("ngForOf",m.configTable.columns),e.xp6(2),e.Oqu(e.lcZ(6,5,"details")),e.xp6(2),e.Q6J("ngIf",!m.loading)("ngIfElse",T),e.xp6(3),e.Q6J("ngIf",m.dataSource.length)}},dependencies:[c.sg,c.O5,s.N9,s.GZ,s.ju,c.i8,c.OU,p.X$],encapsulation:2}),t})()},1020:(E,g,a)=>{a.d(g,{U:()=>r});var e=a(6895),c=a(221),s=a(4463),p=a(8274);let r=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=p.oAB({type:o}),o.\u0275inj=p.cJS({imports:[e.ez,c.IJ,c.jF,s.aw]}),o})()},5158:(E,g,a)=>{a.d(g,{B:()=>i,ET:()=>d,FT:()=>u,eh:()=>r,gF:()=>c,js:()=>_,w_:()=>o,yL:()=>p,zT:()=>s});var e=a(7713);const c=e.Ps`
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
`,s=e.Ps`
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
`,p=e.Ps`
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
`,r=e.Ps`
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
`,o=e.Ps`
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
`,_=e.Ps`
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
`,i=e.Ps`
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
        gender
        status
        image
      }
    }
  }
`,d=e.Ps`
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