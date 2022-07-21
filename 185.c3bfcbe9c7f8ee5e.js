"use strict";(self.webpackChunktemplate_rpm_adnare=self.webpackChunktemplate_rpm_adnare||[]).push([[185],{5185:(U,C,i)=>{i.r(C),i.d(C,{ProviderSearchModule:()=>H});var o=i(6895),u=i(2510),P=i(4489),v=i(433),m=i(6773),D=i(8740),T=i(9671),y=i(8938),S=i(5226),_=i.n(S),w=i(4641),Z=i(8493),e=i(4650),z=i(9503),M=i(9195),A=i(7044),L=i(3679),I=i(6704),O=i(7423),l=i(8521),h=i(1243),n=i(269),p=i(1237),g=i(728),b=i(827);const F=function(){return{standalone:!0}};function N(c,f){if(1&c){const r=e.EpF();e.TgZ(0,"tbody")(1,"tr"),e.ynx(2),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td")(16,"div"),e.ynx(17),e.TgZ(18,"nz-switch",49),e.NdJ("ngModelChange",function(s){const d=e.CHM(r).$implicit;return e.KtG(d.active_switch=s)}),e.qZA(),e.BQk(),e.qZA()(),e.TgZ(19,"td")(20,"div",50)(21,"i",51),e.NdJ("click",function(){const a=e.CHM(r).$implicit,d=e.oxw();return e.KtG(d.deleteProvider(a))}),e.qZA(),e.TgZ(22,"i",52),e.NdJ("click",function(){const a=e.CHM(r).$implicit,d=e.oxw();return e.KtG(d.editProvider(a))}),e.qZA()()(),e.BQk(),e.qZA()()}if(2&c){const r=f.$implicit;e.xp6(4),e.Oqu(r.enterprise_name),e.xp6(2),e.Oqu(r.provider_name),e.xp6(2),e.Oqu(r.practice_name),e.xp6(2),e.Oqu(r.location_name),e.xp6(2),e.Oqu(r.provider_type),e.xp6(2),e.Oqu(r.npi),e.xp6(4),e.Q6J("ngModel",r.active_switch)("ngModelOptions",e.DdM(9,F))("nzDisabled",!0)}}function Q(c,f){1&c&&e._UZ(0,"tbody")}w.vfs=Z.I.vfs;const k=[{path:"",component:(()=>{class c{constructor(r,t,s,a){this.patientService=r,this.providerService=t,this.router=s,this.datepipe=a,this.pageIndex=1,this.pageSize=10,this.pageSizeOptions=[10,15,20,25,30],this.get_all_data=!1,this.totalProviders=0,this.changePageSize=10}ngOnInit(){this.is_active="",this.getEnterpriseSearchDropdown(),this.getProviderTypeDropdown(),this.getLocationsSearchDropdown(),this.getPracticesSearchDropdown()}onEnterpriseDropdownChange(r){this.practice=null,this.location=null,this.practiceDropdownData=null==this.practiceData?[]:this.practiceData.filter(t=>t.enterprise_id==r.id)}onPracticeDropdownChange(r){this.location=null,null!=r&&(this.locationDropdownData=null==this.locationData?[]:this.locationData.filter(t=>t.practice_id==r.id&&t.enterprise_id==this.enterprise))}getLocationsSearchDropdown(){this.userId=localStorage.getItem("user_id"),this.patientService.getLocationDropdownData(this.userId).subscribe(r=>{1==r.success?this.locationData=r.data:_().fire({icon:"error",text:r.message})})}getPracticesSearchDropdown(){this.userId=localStorage.getItem("user_id"),this.patientService.getPracticesDropdownData(this.userId).subscribe(r=>{1==r.success?(this.practiceData=r.data,null!=this.enterprise&&null!=this.enterprise&&(this.practiceDropdownData=this.practiceData.filter(t=>t.enterprise_id==this.enterprise))):_().fire({icon:"error",text:r.message})})}buildTableBody(r,t){var s=[];return s.push(t),r.forEach(a=>{var d=[];t.forEach(function(J){d.push(a[J.text])}),s.push(d)}),s}table(r,t){return{table:{headerRows:1,body:this.buildTableBody(r,t)}}}downloadAllProvidersData(r){var t=this;return(0,T.Z)(function*(){t.search_model={user_id:localStorage.getItem("user_id"),sort_order:t.sortOrder??"",sort_coloumn:t.sortField??"",page_number:t.pageIndex,page_size:t.pageSize,enterprise_id:t.enterprise??"",provider_type_id:t.providerTypeId??"",practice_id:t.practice??"",location_id:t.location??"",provider_first_name:t.provider_first_name??"",provider_last_name:t.provider_last_name??"",npi:t.npi??"",is_active:t.is_active??"",get_all_data:!0},t.providerService.getProvidersGridData(t.search_model).subscribe(s=>{1==s.success?(t.providerExportData=s.data.map(a=>({Entity:a.enterprise_name,Provider:a.provider_name,Practice:a.practice_name??"",Location:a.location_name??"","Provider Type":a.provider_type??"",NPI:a.npi??""})),"pdf"==r&&t.exportToPdf(t.providerExportData),"csv"==r&&t.exportToCsv(t.providerExportData)):_().fire({icon:"error",text:s.message})})})()}downloadProviderData(r){null!=this.providerData&&0!=this.providerData.length?this.downloadAllProvidersData(r):_().fire({icon:"error",text:"No Record to Download"})}exportToCsv(r){new y.Sv(r,"Providers",{fieldSeparator:",",quoteStrings:'"',decimalseparator:".",title:"",useBom:!0,noDownload:!1,headers:["Entity","Provider","Practice","Location","Provider Type","NPI"]})}exportToPdf(r){var s={content:[{text:"Providers",fontSize:13,bold:!0},this.table(r,[{text:"Entity",style:"tableHeader"},{text:"Provider",style:"tableHeader"},{text:"Practice",style:"tableHeader"},{text:"Location",style:"tableHeader"},{text:"Provider Type",style:"tableHeader"},{text:"NPI",style:"tableHeader"}])],defaultStyle:{fontSize:13},styles:{tableHeader:{bold:!0,fontSize:13,color:"white",fillColor:"#4A2D73"}}};w.createPdf(s).download("Providers.pdf")}getEnterpriseSearchDropdown(){this.userId=localStorage.getItem("user_id"),this.patientService.getActiveEnterpriseDropdownData(this.userId).subscribe(r=>{1==r.success?(this.enterpriseData=r.data,1==this.enterpriseData.length&&(this.enterprise=this.enterpriseData[0].id)):_().fire({icon:"error",text:r.message})})}getProviderTypeDropdown(){this.providerService.getProviderTypeDropdown().subscribe(r=>{1==r.success?this.providerTypesData=r.data:_().fire({icon:"error",text:r.message})})}onQueryParamsChange(r){var t=this;return(0,T.Z)(function*(){t.prev_pageIndex=null!=t.savedParams?t.savedParams.pageIndex:null,t.savedParams=r;const{pageIndex:a,sort:d}=r,x=d.find(E=>null!==E.value);t.sortField=x&&x.key||null,t.sortOrder=x&&x.value||null,t.pageIndex=a,(null!=t.providerData&&null!=t.sortField&&null!=t.sortOrder||null!=t.prev_pageIndex&&t.prev_pageIndex!=t.pageIndex||t.changePageSize!=t.pageSize)&&t.getProvidersGridData(),t.changePageSize=t.pageSize})()}getProvidersGridData(){this.search_model={user_id:localStorage.getItem("user_id"),sort_order:this.sortOrder??"",sort_coloumn:this.sortField??"",page_number:this.pageIndex,page_size:this.pageSize,enterprise_id:this.enterprise??"",provider_type_id:this.providerTypeId??"",practice_id:this.practice??"",location_id:this.location??"",provider_first_name:this.provider_first_name??"",provider_last_name:this.provider_last_name??"",npi:this.npi??"",is_active:this.is_active??"",get_all_data:this.get_all_data},this.providerService.getProvidersGridData(this.search_model).subscribe(r=>{1==r.success?(this.providerData=r.data,this.totalProviders=r.data.length>0?r.data[0].total_record_count:0):_().fire({icon:"error",text:r.message})})}search(){this.pageIndex=1,this.getProvidersGridData()}handleClear(){this.providerTypeId=null,this.practice=null,this.location=null,this.provider_first_name="",this.provider_last_name="",this.npi="",this.is_active="",this.enterprise=void 0,this.getProvidersGridData(),this.practiceDropdownData=null,this.locationDropdownData=null}addProvider(){this.providerService.provider_id=null,this.providerService.method="create",this.router.navigate(["/add-provider"])}editProvider(r){this.providerService.method="update",this.providerService.provider_id=r.provider_id,this.router.navigate(["/add-provider"])}deleteProvider(r){this.providerService.deleteProvider(r.provider_id).subscribe(t=>{1==t.success?(_().fire({icon:"success",text:t.message}),this.pageIndex=1,this.getProvidersGridData()):_().fire({icon:"error",text:t.message})})}}return c.\u0275fac=function(r){return new(r||c)(e.Y36(z.e),e.Y36(M.H),e.Y36(u.F0),e.Y36(o.uU))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-provider-search"]],decls:108,vars:49,consts:[[1,"screen"],[1,"screen-header"],[1,"screen-name"],["ngbTooltip","Search","tooltipClass","custom-search-tooltip-color",1,"screen-header-btn","margin-right",3,"click"],[1,"fa","fa-search"],[1,"screen-header-btn","margin-right",3,"click"],[1,"pipe"],["ngbDropdown","",1,"d-inline-block"],["Report","ngbDropdown"],["id","dropdownManual",1,"screen-header-btn","margin-right",3,"focus"],[3,"src"],[1,"pipe-inside-btn"],[1,"fa","fa-chevron-down"],["ngbDropdownMenu","","aria-labelledby","dropdownManual"],["ngbDropdownItem","",1,"screen-header-btn","margin-right"],["Export","ngbDropdown"],["id","dropdownManual2",1,"screen-header-btn","margin-right",3,"focus"],["ngbDropdownMenu","","aria-labelledby","dropdownManual2"],["ngbDropdownItem","",1,"screen-header-btn","margin-right",3,"click"],[1,"fa","fa-file-csv"],[1,"fa","fa-file-pdf"],[1,"screen-header-btn",3,"click"],[1,"screen-search-criteria-div"],[1,"row"],[1,"col-lg-3","col-md-3","col-sm-6","col-xs-6"],["label","Entity","dropdown_placeholder","Entity","bindLabel","name","icon","fa fa-square-plus","align_icon","left",3,"ngModel","dropdownListData","ngModelChange","onModelChange"],["label","Practice","dropdown_placeholder","Practice","bindLabel","name","icon","fa fa-square-plus","align_icon","left",3,"ngModel","dropdownListData","ngModelChange","onModelChange"],["label","Location","dropdown_placeholder","Location","bindLabel","name","icon","fa fa-location-dot","align_icon","left",3,"ngModel","dropdownListData","ngModelChange"],["label","Provider Type","dropdown_placeholder","Provider Type","bindLabel","name","icon","fa fa-shield","align_icon","left",3,"ngModel","dropdownListData","ngModelChange"],["type","text","placeholder","Provider First Name","label","Provider First Name","accesskey","P","icon","fa fa-user","align_icon","left",3,"ngModel","ngModelChange"],["type","text","placeholder","Provider Last Name","label","Provider Last Name","icon","fa fa-user","accesskey","L","align_icon","left",3,"ngModel","ngModelChange"],["type","text","placeholder","NPI","label","NPI","accesskey","N","icon","fa fa-user","align_icon","left",3,"ngModel","ngModelChange"],[1,"col-lg-3","col-md-3","col-lg-3","col-md-5","margin-top-left"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","1"],["nz-radio","","nzValue","0"],["nz-radio","","nzValue",""],[1,"table-div"],["nzShowSizeChanger","",1,"ch-table",3,"nzPageSizeOptions","nzFrontPagination","nzTotal","nzPageIndex","nzPageSize","nzData","nzQueryParams","nzPageIndexChange","nzPageSizeChange"],["nzTable","","sortTable","","filterTable",""],["nzColumnKey","enterprise",3,"nzSortFn"],["nzColumnKey","created_on",3,"nzSortFn"],["nzColumnKey","payer_type",3,"nzSortFn"],["nzColumnKey","payer_name",3,"nzSortFn"],["nzColumnKey","active",3,"nzSortFn"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"total"],[1,"total-span"],[1,"rpm-switch",3,"ngModel","ngModelOptions","nzDisabled","ngModelChange"],[1,"table-icon-container"],["nz-icon","","nzType","delete","nzTheme","outline","nzTooltipPlacement","top","ngbTooltip","Delete",1,"table-coloumn-icons",3,"click"],["nz-icon","","nzType","edit","nzTheme","outline","nzTooltipPlacement","top","ngbTooltip","Edit",1,"table-coloumn-icons",3,"click"]],template:function(r,t){if(1&r){const s=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3," Provider Search "),e.qZA(),e.TgZ(4,"div")(5,"button",3),e.NdJ("click",function(){return t.search()}),e._UZ(6,"span",4),e.qZA(),e.TgZ(7,"button",5),e.NdJ("click",function(){return t.handleClear()}),e._uU(8,"Clear All"),e.qZA(),e._UZ(9,"span",6),e.TgZ(10,"div",7,8)(12,"button",9),e.NdJ("focus",function(){e.CHM(s);const d=e.MAs(11);return e.KtG(d.open())}),e._UZ(13,"img",10),e.ALo(14,"assetsSource"),e._uU(15," Report "),e._UZ(16,"span",11)(17,"span",12),e.qZA(),e.TgZ(18,"div",13)(19,"button",14),e._UZ(20,"img",10),e.ALo(21,"assetsSource"),e._uU(22," Report 1 "),e.qZA(),e.TgZ(23,"button",14),e._UZ(24,"img",10),e.ALo(25,"assetsSource"),e._uU(26," Report 2 "),e.qZA(),e.TgZ(27,"button",14),e._UZ(28,"img",10),e.ALo(29,"assetsSource"),e._uU(30," Report 3 "),e.qZA()()(),e._UZ(31,"span",6),e.TgZ(32,"div",7,15)(34,"button",16),e.NdJ("focus",function(){e.CHM(s);const d=e.MAs(33);return e.KtG(d.open())}),e._UZ(35,"img",10),e.ALo(36,"assetsSource"),e._uU(37," Export "),e._UZ(38,"span",11)(39,"span",12),e.qZA(),e.TgZ(40,"div",17)(41,"button",18),e.NdJ("click",function(){return t.downloadProviderData("csv")}),e._UZ(42,"i",19),e._uU(43," CSV "),e.qZA(),e.TgZ(44,"button",18),e.NdJ("click",function(){return t.downloadProviderData("pdf")}),e._UZ(45,"i",20),e._uU(46," PDF "),e.qZA()()(),e._UZ(47,"span",6),e.TgZ(48,"button",21),e.NdJ("click",function(){return t.addProvider()}),e._UZ(49,"img",10),e.ALo(50,"assetsSource"),e._uU(51," Provider "),e.qZA()()(),e.TgZ(52,"div",22)(53,"div",23)(54,"div",24)(55,"app-ad-custom-dropdown",25),e.NdJ("ngModelChange",function(d){return t.enterprise=d})("onModelChange",function(d){return t.onEnterpriseDropdownChange(d)}),e.qZA()(),e.TgZ(56,"div",24)(57,"app-ad-custom-dropdown",26),e.NdJ("ngModelChange",function(d){return t.practice=d})("onModelChange",function(d){return t.onPracticeDropdownChange(d)}),e.qZA()(),e.TgZ(58,"div",24)(59,"app-ad-custom-dropdown",27),e.NdJ("ngModelChange",function(d){return t.location=d}),e.qZA()(),e.TgZ(60,"div",24)(61,"app-ad-custom-dropdown",28),e.NdJ("ngModelChange",function(d){return t.providerTypeId=d}),e.qZA()()(),e.TgZ(62,"div",23)(63,"div",24)(64,"app-ad-custom-input",29),e.NdJ("ngModelChange",function(d){return t.provider_first_name=d}),e.qZA()(),e.TgZ(65,"div",24)(66,"app-ad-custom-input",30),e.NdJ("ngModelChange",function(d){return t.provider_last_name=d}),e.qZA()(),e.TgZ(67,"div",24)(68,"app-ad-custom-input",31),e.NdJ("ngModelChange",function(d){return t.npi=d}),e.qZA()(),e.TgZ(69,"div",32)(70,"nz-form-item")(71,"nz-radio-group",33),e.NdJ("ngModelChange",function(d){return t.is_active=d}),e.TgZ(72,"label",34),e._uU(73,"Active"),e.qZA(),e.TgZ(74,"label",35),e._uU(75,"Inactive"),e.qZA(),e.TgZ(76,"label",36),e._uU(77,"All"),e.qZA()()()()(),e.TgZ(78,"div",37)(79,"nz-table",38,39),e.NdJ("nzQueryParams",function(d){return t.onQueryParamsChange(d)})("nzPageIndexChange",function(d){return t.pageIndex=d})("nzPageSizeChange",function(d){return t.pageSize=d}),e.TgZ(83,"thead")(84,"tr")(85,"th",40),e._uU(86,"Entity"),e.qZA(),e.TgZ(87,"th",41),e._uU(88,"Provider Name"),e.qZA(),e.TgZ(89,"th",42),e._uU(90,"Practice"),e.qZA(),e.TgZ(91,"th",43),e._uU(92,"Location"),e.qZA(),e.TgZ(93,"th",41),e._uU(94,"Provider Type"),e.qZA(),e.TgZ(95,"th",41),e._uU(96,"NPI"),e.qZA(),e.TgZ(97,"th",44),e._uU(98,"Active"),e.qZA(),e.TgZ(99,"th"),e._uU(100,"Actions"),e.qZA()()(),e.YNc(101,N,23,10,"tbody",45),e.YNc(102,Q,1,0,"tbody",46),e.qZA(),e.TgZ(103,"div",47),e._UZ(104,"img",10),e.ALo(105,"assetsSource"),e.TgZ(106,"span",48),e._uU(107),e.qZA()()()()()}if(2&r){const s=e.MAs(81);e.xp6(13),e.Q6J("src",e.lcZ(14,35,"report_dropdown.png"),e.LSH),e.xp6(7),e.Q6J("src",e.lcZ(21,37,"report_dropdown.png"),e.LSH),e.xp6(4),e.Q6J("src",e.lcZ(25,39,"report_dropdown.png"),e.LSH),e.xp6(4),e.Q6J("src",e.lcZ(29,41,"report_dropdown.png"),e.LSH),e.xp6(7),e.Q6J("src",e.lcZ(36,43,"export.png"),e.LSH),e.xp6(14),e.Q6J("src",e.lcZ(50,45,"patient.png"),e.LSH),e.xp6(6),e.Q6J("ngModel",t.enterprise)("dropdownListData",t.enterpriseData),e.xp6(2),e.Q6J("ngModel",t.practice)("dropdownListData",t.practiceDropdownData),e.xp6(2),e.Q6J("ngModel",t.location)("dropdownListData",t.locationDropdownData),e.xp6(2),e.Q6J("ngModel",t.providerTypeId)("dropdownListData",t.providerTypesData),e.xp6(3),e.Q6J("ngModel",t.provider_first_name),e.xp6(2),e.Q6J("ngModel",t.provider_last_name),e.xp6(2),e.Q6J("ngModel",t.npi),e.xp6(3),e.Q6J("ngModel",t.is_active),e.xp6(8),e.Q6J("nzPageSizeOptions",t.pageSizeOptions)("nzFrontPagination",!1)("nzTotal",t.totalProviders)("nzPageIndex",t.pageIndex)("nzPageSize",t.pageSize)("nzData",t.providerData),e.xp6(6),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(4),e.Q6J("ngForOf",s.data),e.xp6(1),e.Q6J("ngIf",0==s.data.length),e.xp6(2),e.Q6J("src",e.lcZ(105,47,"total.png"),e.LSH),e.xp6(3),e.Oqu(t.totalProviders)}},dependencies:[o.sg,o.O5,A.w,L.SK,I.Nx,O.Ls,l.Of,l.Dg,h.i,n.N8,n.qD,n.Uo,n._C,n.Om,n.p0,n.$Z,v.JJ,v.On,m.jt,m.Vi,m.TH,m._L,p.y,g.v,b.n],styles:[".margin-top-left[_ngcontent-%COMP%]{margin-top:17px}"]}),c})()}];let H=(()=>{class c{}return c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[o.ez,P.T,u.Bz.forChild(k),v.u5,v.UX,m.IJ,D.m,u.Bz]}),c})()},728:(U,C,i)=>{i.d(C,{v:()=>O});var o=i(4650),u=i(433),P=i(2843),v=i(529),m=i(7414),D=i(262),T=i(4226),y=i(2510);let S=(()=>{class l{constructor(n,p,g){this.http=n,this.settingsService=p,this.router=g,this.opened=!1,this.prevIndexId=null,this.baseUrl="",this.token="",this.headers=new v.WM({"Content-Type":"application/json",charset:"UTF-8",Authorization:"Bearer "+this.token}),this.baseUrl=this.settingsService.api_baseURL}loadDataFromApi(n,p){return this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),this.http.get(this.baseUrl+p+"?user_id="+n,{headers:this.headers}).pipe((0,m.V)(1e6),(0,D.K)(g=>401===g.status?(window.open(window.location.origin,"_self"),(0,P._)("Unauthorized")):(0,P._)(g)))}}return l.\u0275fac=function(n){return new(n||l)(o.LFG(v.eN),o.LFG(T.g),o.LFG(y.F0))},l.\u0275prov=o.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();var _=i(5226),w=i.n(_),Z=i(6895),e=i(6773),z=i(8796),M=i(6163);function A(l,h){if(1&l&&(o.TgZ(0,"span",6),o._uU(1),o.qZA()),2&l){const n=o.oxw(2);o.Q6J("ngbTooltip",n.error_message),o.xp6(1),o.hij("",n.error_message," ")}}const L=function(l){return{"animated-border-dropdown":l}};function I(l,h){if(1&l){const n=o.EpF();o.TgZ(0,"div",1),o.ALo(1,"safeStyle"),o.TgZ(2,"label",2),o.ALo(3,"safeStyle"),o.ALo(4,"safeStyle"),o.ALo(5,"safeStyle"),o.ALo(6,"safeStyle"),o.qZA(),o.TgZ(7,"i",3),o.ALo(8,"safeStyle"),o.qZA(),o.TgZ(9,"ng-select",4),o.NdJ("ngModelChange",function(g){o.CHM(n);const b=o.oxw();return o.KtG(b.input=g)})("change",function(g){o.CHM(n);const b=o.oxw();return o.KtG(b.onDropdownChange(g))})("open",function(){o.CHM(n);const g=o.oxw();return o.KtG(null==g.dropdownListData?g.LoadDropdownData():"")}),o.qZA(),o.YNc(10,A,2,2,"span",5),o.qZA()}if(2&l){const n=o.oxw();o.Udp("width",n.width)("height",n.height)("--tooltip_background_color",o.lcZ(1,37,n.tooltip_background_color)),o.xp6(2),o.Udp("background-color",o.lcZ(3,39,n.label_background_color))("color",o.lcZ(4,41,n.label_color))("--label_background_color",o.lcZ(5,43,n.label_background_color))("--label_font_weight",o.lcZ(6,45,n.label_font_weight)),o.Q6J("placement",n.label_placement)("ngbTooltip",n.label_tooltip)("innerHTML",n.HTMLasString,o.oJD),o.xp6(5),o.Tol(n.icon),o.Udp("--align_right_icon",n.align_right_icon)("--align_left_icon",n.align_left_icon)("--icon_color",o.lcZ(8,47,n.icon_color)),o.Q6J("placement",n.icon_placement)("ngbTooltip",n.icon_tooltip),o.xp6(2),o.Q6J("items",n.dropdownListData)("bindLabel",n.bindLabel)("virtualScroll",!0)("ngClass",o.VKq(49,L,!n.validations))("ngModel",n.input)("placeholder",n.dropdown_placeholder)("multiple",n.multiple)("clearable",n.clearable)("readonly",n.readonly),o.xp6(1),o.Q6J("ngIf",!n.validations&&null!=n.error_message&&""!=n.error_message)}}let O=(()=>{class l{constructor(n){this.adCustomService=n,this.dropdown_placeholder="",this.validations=!0,this.error_message="",this.dropdown_background_color="transparent",this.readonly=!1,this.type="text",this.debounceTime=500,this.multiple=!1,this.clearable=!1,this.dropdown_width="100%",this.dropdown_height="35px",this.onModelChange=new o.vpe,this.subscriptions=[]}LoadDropdownData(){null!=this.api_name&&null!=this.api_name&&""!=this.api_name&&this.LoadDropdown(),console.log("dropdown opened...............")}writeValue(n){this.input=n}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouch=n}setDisabledState(n){}onDropdownChange(n){this.onChange(this.input),this.onModelChange.emit(n)}onClick(n){}ngOnInit(){if(null!=this.align_icon&&"left"==this.align_icon&&"date"==this.type?(this.align_left_date_icon="6px",this.align_right_date_icon="0",this.padding_left_icon="19px",this.padding_right_icon="0px",this.align_left_icon="6px"):null!=this.align_icon&&"left"==this.align_icon?(this.align_left_icon="10px",this.padding_left_icon="30px",this.padding_right_icon="0px"):(this.padding_left_icon="0px",this.padding_right_icon="30px",this.align_right_icon="10px",this.align_right_date_icon="6px"),null!=this.label&&(this.HTMLasString=this.label,null!=this.accesskey&&this.label.toLowerCase().includes(this.accesskey.toLowerCase()))){var n=this.label.indexOf(this.accesskey);-1==n?-1!=(n=this.label.indexOf(this.accesskey.toLowerCase()))&&(this.HTMLasString=this.label.substring(0,n)+"<u>"+this.accesskey.toLowerCase()+"</u>"+this.label.substring(n+1)):this.HTMLasString=this.label.substring(0,n)+"<u>"+this.accesskey+"</u>"+this.label.substring(n+1)}null==this.label_background_color&&(this.label_background_color="white"),null==this.icon_color&&(this.icon_color="#BD123E"),(null==this.label_font_weight||""===this.label_font_weight)&&(this.label_font_weight="bold"),null==this.tooltip_background_color&&(this.tooltip_background_color="black")}ngOnDestroy(){this.subscriptions.forEach(n=>n.unsubscribe())}LoadDropdown(){var n=localStorage.getItem("user_id");this.adCustomService.loadDataFromApi(n,this.api_name).subscribe(p=>{1==p.success?this.dropdownListData=p.data:w().fire({icon:"error",text:p.message})})}}return l.\u0275fac=function(n){return new(n||l)(o.Y36(S))},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-ad-custom-dropdown"]],inputs:{label:"label",forLabel:"forLabel",dropdown_placeholder:"dropdown_placeholder",accesskey:"accesskey",validations:"validations",error_message:"error_message",dropdown_background_color:"dropdown_background_color",label_placement:"label_placement",label_color:"label_color",label_font_weight:"label_font_weight",width:"width",height:"height",HTMLasString:"HTMLasString",label_background_color:"label_background_color",icon_color:"icon_color",readonly:"readonly",tooltip_background_color:"tooltip_background_color",label_tooltip:"label_tooltip",icon_tooltip:"icon_tooltip",dropdownListData:"dropdownListData",dropdown_text_color:"dropdown_text_color",type:"type",debounceTime:"debounceTime",multiple:"multiple",clearable:"clearable",bindLabel:"bindLabel",dropdown_width:"dropdown_width",dropdown_height:"dropdown_height",align_left_icon:"align_left_icon",align_left_date_icon:"align_left_date_icon",align_right_date_icon:"align_right_date_icon",padding_left_icon:"padding_left_icon",padding_right_icon:"padding_right_icon",align_icon:"align_icon",align_right_icon:"align_right_icon",icon_placement:"icon_placement",icon_src:"icon_src",api_name:"api_name",icon:"icon",method_name:"method_name"},outputs:{onModelChange:"onModelChange"},features:[o._Bn([{provide:u.JU,useExisting:(0,o.Gpc)(()=>l),multi:!0},S])],decls:1,vars:1,consts:[["class","textOnInput",3,"width","height","--tooltip_background_color",4,"ngIf"],[1,"textOnInput"],["for","inputText",3,"placement","ngbTooltip","innerHTML"],[3,"placement","ngbTooltip"],["bindValue","id","appendTo","body",1,"custom",3,"items","bindLabel","virtualScroll","ngClass","ngModel","placeholder","multiple","clearable","readonly","ngModelChange","change","open"],["class","error-message",3,"ngbTooltip",4,"ngIf"],[1,"error-message",3,"ngbTooltip"]],template:function(n,p){1&n&&o.YNc(0,I,11,51,"div",0),2&n&&o.Q6J("ngIf","checkbox"!=p.type)},dependencies:[Z.mk,Z.O5,e._L,z.w9,u.JJ,u.On,M.i],styles:['.textOnInput[_ngcontent-%COMP%]{position:relative;color:#aaa;font-size:16px;display:inline-block;width:100%}.textOnInput[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute;top:-10px;left:5px;z-index:1;color:var(--label-color);font-weight:var(--label_font_weight)}.textOnInput[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after{content:" ";background-color:var(--label-background-color);width:100%;height:13px;position:absolute;left:0;bottom:0;z-index:-1}label[_ngcontent-%COMP%]{font-size:11px;font-weight:800;display:inline-block;margin-bottom:.5rem;border-radius:5px;padding-left:5px;padding-right:5px}.textOnInput[_ngcontent-%COMP%]   ng-select[_ngcontent-%COMP%]{text-indent:5px;box-sizing:border-box}  .ng-select .ng-select-container{border:1px solid black}[_nghost-%COMP%]     .ng-select.ng-select-opened .ng-select-container{z-index:0}[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container, .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{margin-left:15px}[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{margin-left:15px}[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container{margin-left:15px}.textOnInput[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;top:calc(50% - .5em);right:var(--align_right_icon);left:var(--align_left_icon);z-index:1}.textOnInput[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{position:absolute;top:calc(50% - .4em);right:var(--align_right_icon);left:var(--align_left_icon);z-index:1;color:var(--icon-color)}']}),l})()}}]);