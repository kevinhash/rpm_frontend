"use strict";(self.webpackChunktemplate_rpm_adnare=self.webpackChunktemplate_rpm_adnare||[]).push([[876],{6876:(I,C,r)=>{r.r(C),r.d(C,{UserSearchModule:()=>N});var o=r(6895),h=r(2510),x=r(4489),m=r(433),f=r(6773),Z=r(8740),S=r(9671),w=r(8938),T=r(5226),p=r.n(T),z=r(4641),y=r(8493),e=r(4650),D=r(9503),M=r(16),A=r(7044),O=r(3679),L=r(6704),P=r(7423),d=r(8521),_=r(1243),n=r(269),g=r(1237),u=r(728),v=r(827);const F=function(){return{standalone:!0}};function Q(c,b){if(1&c){const a=e.EpF();e.TgZ(0,"tbody")(1,"tr"),e.ynx(2),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.ALo(15,"date"),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td")(19,"div"),e.ynx(20),e.TgZ(21,"nz-switch",44),e.NdJ("ngModelChange",function(s){const l=e.CHM(a).$implicit;return e.KtG(l.active_switch=s)}),e.qZA(),e.BQk(),e.qZA()(),e.TgZ(22,"td")(23,"div",45)(24,"i",46),e.NdJ("click",function(){const i=e.CHM(a).$implicit,l=e.oxw();return e.KtG(l.deleteUser(i))}),e.qZA(),e.TgZ(25,"i",47),e.NdJ("click",function(){const i=e.CHM(a).$implicit,l=e.oxw();return e.KtG(l.editUser(i))}),e.qZA()()(),e.BQk(),e.qZA()()}if(2&c){const a=b.$implicit;e.xp6(4),e.AsE("",a.first_name," ",a.last_name,""),e.xp6(2),e.Oqu(a.email),e.xp6(2),e.Oqu(a.address),e.xp6(2),e.Oqu(a.data_role),e.xp6(2),e.Oqu(a.menu_role),e.xp6(2),e.Oqu(e.xi3(15,12,a.created_on,"MM/dd/yyyy hh:mm:ss")),e.xp6(3),e.AsE("",a.created_by_first_name," ",a.created_by_last_name,""),e.xp6(4),e.Q6J("ngModel",a.active_switch)("ngModelOptions",e.DdM(15,F))("nzDisabled",!0)}}function H(c,b){1&c&&e._UZ(0,"tbody")}z.vfs=y.I.vfs;const k=[{path:"",component:(()=>{class c{constructor(a,t,s,i){this.patientService=a,this.userService=t,this.router=s,this.datepipe=i,this.pageIndex=1,this.pageSize=10,this.pageSizeOptions=[10,15,20,25,30],this.get_all_data=!1,this.totalUsers=0,this.changePageSize=10}ngOnInit(){this.is_active="",this.getDataRoleSearchDropdown(),this.getMenuRoleSearchDropdown(),this.getProviderTypeDropdown()}buildTableBody(a,t){var s=[];return s.push(t),a.forEach(i=>{var l=[];t.forEach(function(J){l.push(i[J.text])}),s.push(l)}),s}table(a,t){return{table:{headerRows:1,body:this.buildTableBody(a,t),dontBreakRows:!0,fontSize:7,widths:[42,42,42,42,42,42,42,32,32,42,42]}}}downloadAllUserData(a){var t=this;return(0,S.Z)(function*(){if(t.user_name){const s=t.user_name.split(" ");s.length>1?(t.user_first_name=s[0].toLowerCase(),t.user_last_name=s[s.length-1].toLowerCase()):t.user_name=t.user_name.toLowerCase()}t.search_model={user_id:localStorage.getItem("user_id"),sort_order:t.sortOrder??"",sort_coloumn:t.sortField??"",page_number:t.pageIndex,page_size:t.pageSize,username:t.user_name??"",user_first_name:t.user_first_name??"",user_last_name:t.user_last_name??"",is_active:t.is_active??"",menu_role:t.menu_role??"",data_role:t.data_role??"",get_all_data:!0},t.userService.getUserGridData(t.search_model).subscribe(s=>{1==s.success?(t.userExportData=s.data.map(i=>({Username:i.first_name+" "+i.middle_name+" "+i.last_name,Email:i.email,"Data Role":i.data_role,"Menu Role":i.menu_role,Address:i.address,City:i.city,State:i.state,Zip:i.zip,"Zip Ext":i.zip_ext,"Created By":i.created_by_first_name+" "+i.created_by_last_name,"Created On":t.datepipe.transform(i.created_on,"MM/dd/yyyy hh:mm:ss")})),"pdf"==a&&t.exportToPdf(t.userExportData),"csv"==a&&t.exportToCsv(t.userExportData)):p().fire({icon:"error",text:s.message})})})()}downloadUserData(a){null!=this.userTableData&&0!=this.userTableData.length?this.downloadAllUserData(a):p().fire({icon:"error",text:"No Record to Download"})}exportToCsv(a){new w.Sv(a,"Users",{fieldSeparator:",",quoteStrings:'"',decimalseparator:".",title:"",useBom:!0,noDownload:!1,headers:["Username","Email","Data Role","Menu Role","Address","City","State","Zip","Zip Ext","Created By","Created On"]})}exportToPdf(a){var s={content:[{text:"Users",fontSize:7,bold:!0},this.table(a,[{text:"Username",style:"tableHeader"},{text:"Email",style:"tableHeader"},{text:"Data Role",style:"tableHeader"},{text:"Menu Role",style:"tableHeader"},{text:"Address",style:"tableHeader"},{text:"City",style:"tableHeader"},{text:"State",style:"tableHeader"},{text:"Zip",style:"tableHeader"},{text:"Zip Ext",style:"tableHeader"},{text:"Created By",style:"tableHeader"},{text:"Created On",style:"tableHeader"}])],defaultStyle:{fontSize:7},styles:{tableHeader:{bold:!0,fontSize:9,color:"white",fillColor:"#4A2D73"}}};z.createPdf(s).download("Users.pdf")}getDataRoleSearchDropdown(){this.patientService.getDataRoleDropdownData().subscribe(a=>{1==a.success?this.dataRoleData=a.data:p().fire({icon:"error",text:a.message})})}getMenuRoleSearchDropdown(){this.patientService.getMenuRoleDropdownData().subscribe(a=>{1==a.success?this.menuRoleData=a.data:p().fire({icon:"error",text:a.message})})}getProviderTypeDropdown(){this.userService.getProviderTypeDropdown().subscribe(a=>{1==a.success?this.providerTypesData=a.data:p().fire({icon:"error",text:a.message})})}onQueryParamsChange(a){var t=this;return(0,S.Z)(function*(){t.prev_pageIndex=null!=t.savedParams?t.savedParams.pageIndex:null,t.savedParams=a;const{pageIndex:i,sort:l}=a,U=l.find(R=>null!==R.value);t.sortField=U&&U.key||null,t.sortOrder=U&&U.value||null,t.pageIndex=i,(null!=t.userTableData&&null!=t.sortField&&null!=t.sortOrder||null!=t.prev_pageIndex&&t.prev_pageIndex!=t.pageIndex||t.changePageSize!=t.pageSize)&&t.getUserGridData(),t.changePageSize=t.pageSize})()}getUserGridData(){if(this.user_name){const a=this.user_name.split(" ");a.length>1?(this.user_first_name=a[0].toLowerCase(),this.user_last_name=a[a.length-1].toLowerCase()):this.username=this.user_name.toLowerCase()}this.search_model={user_id:localStorage.getItem("user_id"),sort_order:this.sortOrder??"",sort_coloumn:this.sortField??"",page_number:this.pageIndex,page_size:this.pageSize,username:this.username??"",user_first_name:this.user_first_name??"",user_last_name:this.user_last_name??"",is_active:this.is_active??"",menu_role:this.menu_role??"",data_role:this.data_role??"",get_all_data:!1},this.userService.getUserGridData(this.search_model).subscribe(a=>{1==a.success?(this.userTableData=a.data,this.totalUsers=a.data.length>0?a.data[0].total_record_count:0):p().fire({icon:"error",text:a.message})})}search(){this.pageIndex=1,this.getUserGridData()}handleClear(){this.menu_role=null,this.data_role=null,this.user_name="",this.username="",this.user_first_name="",this.user_last_name="",this.is_active="",this.getUserGridData()}addUser(){this.userService.user_id=null,this.userService.method="create",this.router.navigate(["/add-user"])}editUser(a){this.userService.method="update",this.userService.user_id=a.user_id,this.router.navigate(["/add-user"])}deleteUser(a){this.userService.deleteUser(a.user_id).subscribe(t=>{1==t.success?(p().fire({icon:"success",text:t.message}),this.pageIndex=1,this.getUserGridData()):p().fire({icon:"error",text:t.message})})}}return c.\u0275fac=function(a){return new(a||c)(e.Y36(D.e),e.Y36(M.K),e.Y36(h.F0),e.Y36(o.uU))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-user-search"]],decls:79,vars:32,consts:[[1,"screen"],[1,"screen-header"],[1,"screen-name"],["ngbTooltip","Search","tooltipClass","custom-search-tooltip-color",1,"screen-header-btn","margin-right",3,"click"],[1,"fa","fa-search"],[1,"screen-header-btn","margin-right",3,"click"],[1,"pipe"],["ngbDropdown","",1,"d-inline-block"],["Export","ngbDropdown"],["id","dropdownManual2",1,"screen-header-btn","margin-right",3,"focus"],[3,"src"],[1,"pipe-inside-btn"],[1,"fa","fa-chevron-down"],["ngbDropdownMenu","","aria-labelledby","dropdownManual2"],["ngbDropdownItem","",1,"screen-header-btn","margin-right",3,"click"],[1,"fa","fa-file-csv"],[1,"fa","fa-file-pdf"],[1,"screen-header-btn",3,"click"],[1,"screen-search-criteria-div"],[1,"row"],[1,"col-lg-3","col-md-3","col-sm-6","col-xs-6"],["label","Data Role","dropdown_placeholder","Data Role","bindLabel","name","align_icon","left",3,"ngModel","dropdownListData","ngModelChange"],["label","Menu Role","dropdown_placeholder","Menu Role","bindLabel","name","align_icon","left",3,"ngModel","dropdownListData","ngModelChange"],["type","text","placeholder","User Name","label","User Name","icon","fa fa-user","align_icon","left",3,"ngModel","ngModelChange"],[1,"col-lg-3","col-md-3","col-lg-3","col-md-5","margin-top-left"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","1"],["nz-radio","","nzValue","0"],["nz-radio","","nzValue",""],[1,"table-div"],["nzShowSizeChanger","",1,"ch-table",3,"nzPageSizeOptions","nzFrontPagination","nzTotal","nzPageIndex","nzPageSize","nzData","nzQueryParams","nzPageIndexChange","nzPageSizeChange"],["nzTable","","sortTable","","filterTable",""],["nzColumnKey","username",3,"nzSortFn"],["nzColumnKey","email",3,"nzSortFn"],["nzColumnKey","address",3,"nzSortFn"],["nzColumnKey","data_role",3,"nzSortFn"],["nzColumnKey","menu_role",3,"nzSortFn"],["nzColumnKey","created_on",3,"nzSortFn"],["nzColumnKey","created_by",3,"nzSortFn"],["nzColumnKey","active",3,"nzSortFn"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"total"],[1,"total-span"],[1,"rpm-switch",3,"ngModel","ngModelOptions","nzDisabled","ngModelChange"],[1,"table-icon-container"],["nz-icon","","nzType","delete","nzTheme","outline","nzTooltipPlacement","top","ngbTooltip","Delete",1,"table-coloumn-icons",3,"click"],["nz-icon","","nzType","edit","nzTheme","outline","nzTooltipPlacement","top","ngbTooltip","Edit",1,"table-coloumn-icons",3,"click"]],template:function(a,t){if(1&a){const s=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3," User Search "),e.qZA(),e.TgZ(4,"div")(5,"button",3),e.NdJ("click",function(){return t.search()}),e._UZ(6,"span",4),e.qZA(),e.TgZ(7,"button",5),e.NdJ("click",function(){return t.handleClear()}),e._uU(8,"Clear All"),e.qZA(),e._UZ(9,"span",6),e.TgZ(10,"div",7,8)(12,"button",9),e.NdJ("focus",function(){e.CHM(s);const l=e.MAs(11);return e.KtG(l.open())}),e._UZ(13,"img",10),e.ALo(14,"assetsSource"),e._uU(15," Export "),e._UZ(16,"span",11)(17,"span",12),e.qZA(),e.TgZ(18,"div",13)(19,"button",14),e.NdJ("click",function(){return t.downloadUserData("csv")}),e._UZ(20,"i",15),e._uU(21," CSV "),e.qZA(),e.TgZ(22,"button",14),e.NdJ("click",function(){return t.downloadUserData("pdf")}),e._UZ(23,"i",16),e._uU(24," PDF "),e.qZA()()(),e._UZ(25,"span",6),e.TgZ(26,"button",17),e.NdJ("click",function(){return t.addUser()}),e._UZ(27,"img",10),e.ALo(28,"assetsSource"),e._uU(29," User "),e.qZA()()(),e.TgZ(30,"div",18)(31,"div",19)(32,"div",20)(33,"app-ad-custom-dropdown",21),e.NdJ("ngModelChange",function(l){return t.data_role=l}),e.qZA()(),e.TgZ(34,"div",20)(35,"app-ad-custom-dropdown",22),e.NdJ("ngModelChange",function(l){return t.menu_role=l}),e.qZA()(),e.TgZ(36,"div",20)(37,"app-ad-custom-input",23),e.NdJ("ngModelChange",function(l){return t.user_name=l}),e.qZA()(),e.TgZ(38,"div",24)(39,"nz-form-item")(40,"nz-radio-group",25),e.NdJ("ngModelChange",function(l){return t.is_active=l}),e.TgZ(41,"label",26),e._uU(42,"Active"),e.qZA(),e.TgZ(43,"label",27),e._uU(44,"Inactive"),e.qZA(),e.TgZ(45,"label",28),e._uU(46,"All"),e.qZA()()()()(),e.TgZ(47,"div",29)(48,"nz-table",30,31),e.NdJ("nzQueryParams",function(l){return t.onQueryParamsChange(l)})("nzPageIndexChange",function(l){return t.pageIndex=l})("nzPageSizeChange",function(l){return t.pageSize=l}),e.TgZ(52,"thead")(53,"tr")(54,"th",32),e._uU(55,"User Name"),e.qZA(),e.TgZ(56,"th",33),e._uU(57,"Email"),e.qZA(),e.TgZ(58,"th",34),e._uU(59,"Address"),e.qZA(),e.TgZ(60,"th",35),e._uU(61,"Data Role"),e.qZA(),e.TgZ(62,"th",36),e._uU(63,"Menu Role"),e.qZA(),e.TgZ(64,"th",37),e._uU(65,"Created On"),e.qZA(),e.TgZ(66,"th",38),e._uU(67,"Created By"),e.qZA(),e.TgZ(68,"th",39),e._uU(69,"Active"),e.qZA(),e.TgZ(70,"th"),e._uU(71,"Actions"),e.qZA()()(),e.YNc(72,Q,26,16,"tbody",40),e.YNc(73,H,1,0,"tbody",41),e.qZA(),e.TgZ(74,"div",42),e._UZ(75,"img",10),e.ALo(76,"assetsSource"),e.TgZ(77,"span",43),e._uU(78),e.qZA()()()()()}if(2&a){const s=e.MAs(50);e.xp6(13),e.Q6J("src",e.lcZ(14,26,"export.png"),e.LSH),e.xp6(14),e.Q6J("src",e.lcZ(28,28,"patient.png"),e.LSH),e.xp6(6),e.Q6J("ngModel",t.data_role)("dropdownListData",t.dataRoleData),e.xp6(2),e.Q6J("ngModel",t.menu_role)("dropdownListData",t.menuRoleData),e.xp6(2),e.Q6J("ngModel",t.user_name),e.xp6(3),e.Q6J("ngModel",t.is_active),e.xp6(8),e.Q6J("nzPageSizeOptions",t.pageSizeOptions)("nzFrontPagination",!1)("nzTotal",t.totalUsers)("nzPageIndex",t.pageIndex)("nzPageSize",t.pageSize)("nzData",t.userTableData),e.xp6(6),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(4),e.Q6J("ngForOf",s.data),e.xp6(1),e.Q6J("ngIf",0==s.data.length),e.xp6(2),e.Q6J("src",e.lcZ(76,30,"total.png"),e.LSH),e.xp6(3),e.Oqu(t.totalUsers)}},dependencies:[o.sg,o.O5,A.w,O.SK,L.Nx,P.Ls,d.Of,d.Dg,_.i,n.N8,n.qD,n.Uo,n._C,n.Om,n.p0,n.$Z,m.JJ,m.On,f.jt,f.Vi,f.TH,f._L,g.y,u.v,o.uU,v.n],styles:[".margin-top-left[_ngcontent-%COMP%]{margin-top:17px}"]}),c})()}];let N=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[o.ez,x.T,h.Bz.forChild(k),m.u5,m.UX,f.IJ,Z.m,h.Bz]}),c})()},728:(I,C,r)=>{r.d(C,{v:()=>P});var o=r(4650),h=r(433),x=r(2843),m=r(529),f=r(7414),Z=r(262),S=r(4226),w=r(2510);let T=(()=>{class d{constructor(n,g,u){this.http=n,this.settingsService=g,this.router=u,this.opened=!1,this.prevIndexId=null,this.baseUrl="",this.token="",this.headers=new m.WM({"Content-Type":"application/json",charset:"UTF-8",Authorization:"Bearer "+this.token}),this.baseUrl=this.settingsService.api_baseURL}loadDataFromApi(n,g){return this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),this.http.get(this.baseUrl+g+"?user_id="+n,{headers:this.headers}).pipe((0,f.V)(1e6),(0,Z.K)(u=>401===u.status?(window.open(window.location.origin,"_self"),(0,x._)("Unauthorized")):(0,x._)(u)))}}return d.\u0275fac=function(n){return new(n||d)(o.LFG(m.eN),o.LFG(S.g),o.LFG(w.F0))},d.\u0275prov=o.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();var p=r(5226),z=r.n(p),y=r(6895),e=r(6773),D=r(8796),M=r(6163);function A(d,_){if(1&d&&(o.TgZ(0,"span",6),o._uU(1),o.qZA()),2&d){const n=o.oxw(2);o.Q6J("ngbTooltip",n.error_message),o.xp6(1),o.hij("",n.error_message," ")}}const O=function(d){return{"animated-border-dropdown":d}};function L(d,_){if(1&d){const n=o.EpF();o.TgZ(0,"div",1),o.ALo(1,"safeStyle"),o.TgZ(2,"label",2),o.ALo(3,"safeStyle"),o.ALo(4,"safeStyle"),o.ALo(5,"safeStyle"),o.ALo(6,"safeStyle"),o.qZA(),o.TgZ(7,"i",3),o.ALo(8,"safeStyle"),o.qZA(),o.TgZ(9,"ng-select",4),o.NdJ("ngModelChange",function(u){o.CHM(n);const v=o.oxw();return o.KtG(v.input=u)})("change",function(u){o.CHM(n);const v=o.oxw();return o.KtG(v.onDropdownChange(u))})("open",function(){o.CHM(n);const u=o.oxw();return o.KtG(null==u.dropdownListData?u.LoadDropdownData():"")}),o.qZA(),o.YNc(10,A,2,2,"span",5),o.qZA()}if(2&d){const n=o.oxw();o.Udp("width",n.width)("height",n.height)("--tooltip_background_color",o.lcZ(1,37,n.tooltip_background_color)),o.xp6(2),o.Udp("background-color",o.lcZ(3,39,n.label_background_color))("color",o.lcZ(4,41,n.label_color))("--label_background_color",o.lcZ(5,43,n.label_background_color))("--label_font_weight",o.lcZ(6,45,n.label_font_weight)),o.Q6J("placement",n.label_placement)("ngbTooltip",n.label_tooltip)("innerHTML",n.HTMLasString,o.oJD),o.xp6(5),o.Tol(n.icon),o.Udp("--align_right_icon",n.align_right_icon)("--align_left_icon",n.align_left_icon)("--icon_color",o.lcZ(8,47,n.icon_color)),o.Q6J("placement",n.icon_placement)("ngbTooltip",n.icon_tooltip),o.xp6(2),o.Q6J("items",n.dropdownListData)("bindLabel",n.bindLabel)("virtualScroll",!0)("ngClass",o.VKq(49,O,!n.validations))("ngModel",n.input)("placeholder",n.dropdown_placeholder)("multiple",n.multiple)("clearable",n.clearable)("readonly",n.readonly),o.xp6(1),o.Q6J("ngIf",!n.validations&&null!=n.error_message&&""!=n.error_message)}}let P=(()=>{class d{constructor(n){this.adCustomService=n,this.dropdown_placeholder="",this.validations=!0,this.error_message="",this.dropdown_background_color="transparent",this.readonly=!1,this.type="text",this.debounceTime=500,this.multiple=!1,this.clearable=!1,this.dropdown_width="100%",this.dropdown_height="35px",this.onModelChange=new o.vpe,this.subscriptions=[]}LoadDropdownData(){null!=this.api_name&&null!=this.api_name&&""!=this.api_name&&this.LoadDropdown(),console.log("dropdown opened...............")}writeValue(n){this.input=n}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouch=n}setDisabledState(n){}onDropdownChange(n){this.onChange(this.input),this.onModelChange.emit(n)}onClick(n){}ngOnInit(){if(null!=this.align_icon&&"left"==this.align_icon&&"date"==this.type?(this.align_left_date_icon="6px",this.align_right_date_icon="0",this.padding_left_icon="19px",this.padding_right_icon="0px",this.align_left_icon="6px"):null!=this.align_icon&&"left"==this.align_icon?(this.align_left_icon="10px",this.padding_left_icon="30px",this.padding_right_icon="0px"):(this.padding_left_icon="0px",this.padding_right_icon="30px",this.align_right_icon="10px",this.align_right_date_icon="6px"),null!=this.label&&(this.HTMLasString=this.label,null!=this.accesskey&&this.label.toLowerCase().includes(this.accesskey.toLowerCase()))){var n=this.label.indexOf(this.accesskey);-1==n?-1!=(n=this.label.indexOf(this.accesskey.toLowerCase()))&&(this.HTMLasString=this.label.substring(0,n)+"<u>"+this.accesskey.toLowerCase()+"</u>"+this.label.substring(n+1)):this.HTMLasString=this.label.substring(0,n)+"<u>"+this.accesskey+"</u>"+this.label.substring(n+1)}null==this.label_background_color&&(this.label_background_color="white"),null==this.icon_color&&(this.icon_color="#BD123E"),(null==this.label_font_weight||""===this.label_font_weight)&&(this.label_font_weight="bold"),null==this.tooltip_background_color&&(this.tooltip_background_color="black")}ngOnDestroy(){this.subscriptions.forEach(n=>n.unsubscribe())}LoadDropdown(){var n=localStorage.getItem("user_id");this.adCustomService.loadDataFromApi(n,this.api_name).subscribe(g=>{1==g.success?this.dropdownListData=g.data:z().fire({icon:"error",text:g.message})})}}return d.\u0275fac=function(n){return new(n||d)(o.Y36(T))},d.\u0275cmp=o.Xpm({type:d,selectors:[["app-ad-custom-dropdown"]],inputs:{label:"label",forLabel:"forLabel",dropdown_placeholder:"dropdown_placeholder",accesskey:"accesskey",validations:"validations",error_message:"error_message",dropdown_background_color:"dropdown_background_color",label_placement:"label_placement",label_color:"label_color",label_font_weight:"label_font_weight",width:"width",height:"height",HTMLasString:"HTMLasString",label_background_color:"label_background_color",icon_color:"icon_color",readonly:"readonly",tooltip_background_color:"tooltip_background_color",label_tooltip:"label_tooltip",icon_tooltip:"icon_tooltip",dropdownListData:"dropdownListData",dropdown_text_color:"dropdown_text_color",type:"type",debounceTime:"debounceTime",multiple:"multiple",clearable:"clearable",bindLabel:"bindLabel",dropdown_width:"dropdown_width",dropdown_height:"dropdown_height",align_left_icon:"align_left_icon",align_left_date_icon:"align_left_date_icon",align_right_date_icon:"align_right_date_icon",padding_left_icon:"padding_left_icon",padding_right_icon:"padding_right_icon",align_icon:"align_icon",align_right_icon:"align_right_icon",icon_placement:"icon_placement",icon_src:"icon_src",api_name:"api_name",icon:"icon",method_name:"method_name"},outputs:{onModelChange:"onModelChange"},features:[o._Bn([{provide:h.JU,useExisting:(0,o.Gpc)(()=>d),multi:!0},T])],decls:1,vars:1,consts:[["class","textOnInput",3,"width","height","--tooltip_background_color",4,"ngIf"],[1,"textOnInput"],["for","inputText",3,"placement","ngbTooltip","innerHTML"],[3,"placement","ngbTooltip"],["bindValue","id","appendTo","body",1,"custom",3,"items","bindLabel","virtualScroll","ngClass","ngModel","placeholder","multiple","clearable","readonly","ngModelChange","change","open"],["class","error-message",3,"ngbTooltip",4,"ngIf"],[1,"error-message",3,"ngbTooltip"]],template:function(n,g){1&n&&o.YNc(0,L,11,51,"div",0),2&n&&o.Q6J("ngIf","checkbox"!=g.type)},dependencies:[y.mk,y.O5,e._L,D.w9,h.JJ,h.On,M.i],styles:['.textOnInput[_ngcontent-%COMP%]{position:relative;color:#aaa;font-size:16px;display:inline-block;width:100%}.textOnInput[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute;top:-10px;left:5px;z-index:1;color:var(--label-color);font-weight:var(--label_font_weight)}.textOnInput[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after{content:" ";background-color:var(--label-background-color);width:100%;height:13px;position:absolute;left:0;bottom:0;z-index:-1}label[_ngcontent-%COMP%]{font-size:11px;font-weight:800;display:inline-block;margin-bottom:.5rem;border-radius:5px;padding-left:5px;padding-right:5px}.textOnInput[_ngcontent-%COMP%]   ng-select[_ngcontent-%COMP%]{text-indent:5px;box-sizing:border-box}  .ng-select .ng-select-container{border:1px solid black}[_nghost-%COMP%]     .ng-select.ng-select-opened .ng-select-container{z-index:0}[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container, .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{margin-left:15px}[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{margin-left:15px}[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container{margin-left:15px}.textOnInput[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;top:calc(50% - .5em);right:var(--align_right_icon);left:var(--align_left_icon);z-index:1}.textOnInput[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{position:absolute;top:calc(50% - .4em);right:var(--align_right_icon);left:var(--align_left_icon);z-index:1;color:var(--icon-color)}']}),d})()}}]);