"use strict";(self.webpackChunktemplate_rpm_adnare=self.webpackChunktemplate_rpm_adnare||[]).push([[23],{77023:(X,S,o)=>{o.r(S),o.d(S,{PendingToEMRModule:()=>$});var _=o(36895),z=o(62510),y=o(90433),B=o(46773),R=o(49671),E=o(88938),D=o(4159),b=o.n(D),P=o(53583),U=o(35226),C=o.n(U),e=o(94650),J=o(91684),I=o(24339),x=o(18284),A=o(50007),m=o(40269),O=o(31237),N=o(31453),w=o(80728),F=o(13255),Q=o(70827);function q(s,u){if(1&s){const n=e.EpF();e.TgZ(0,"tr",29),e.NdJ("click",function(){const i=e.CHM(n).$implicit,l=e.oxw();return e.KtG(l.viewMonitoringDocument(i))}),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td",30),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.ALo(9,"date"),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.ALo(12,"date"),e.qZA(),e.TgZ(13,"td",30),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.ALo(17,"date"),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.ALo(20,"date"),e.qZA(),e.TgZ(21,"td"),e._uU(22),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.qZA(),e.TgZ(25,"td"),e._uU(26),e.ALo(27,"date"),e.qZA()()}if(2&s){const n=u.$implicit;e.xp6(2),e.Oqu(null==n?null:n.month),e.xp6(2),e.AsE("",null==n?null:n.patient_first_name," ",null==n?null:n.patient_last_name,""),e.xp6(1),e.Q6J("ngClass",n.days_of_readings>=16?"green":"red"),e.xp6(1),e.Oqu(null==n?null:n.days_of_readings),e.xp6(2),e.Oqu(e.xi3(9,14,null==n?null:n.serviceDateFromD,"MM/dd/yyyy")),e.xp6(3),e.Oqu(e.xi3(12,17,null==n?null:n.serviceDateToD,"MM/dd/yyyy")),e.xp6(2),e.Q6J("ngClass",n.minutes>=20?"green":"red"),e.xp6(1),e.Oqu(null==n?null:n.minutes),e.xp6(2),e.Oqu(e.xi3(17,20,null==n?null:n.serviceDateFrom,"MM/dd/yyyy")),e.xp6(3),e.Oqu(e.xi3(20,23,null==n?null:n.serviceDateTo,"MM/dd/yyyy")),e.xp6(3),e.Oqu(null==n?null:n.cycle_number),e.xp6(2),e.Oqu(null==n?null:n.downloaded_by),e.xp6(2),e.Oqu(e.Dn7(27,26,null==n?null:n.downloaded_at,"short","IST"))}}function L(s,u){if(1&s){const n=e.EpF();e.ynx(0),e.TgZ(1,"button",31),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.downloadReport())}),e._UZ(2,"span",32),e.qZA(),e.TgZ(3,"nz-layout",33)(4,"nz-content",34),e._UZ(5,"app-remote-monitoring-doc"),e.qZA()(),e.BQk()}}const j=function(){return{padding:"0px"}};let K=(()=>{class s{constructor(n,t,a,i,l){this.formBuilder=n,this.router=t,this.billingService=a,this.dashboardService=i,this.datepipe=l,this.status="Pending",this.pageSizeOptionsBillingCycles=[10,20,30,40],this.pageSizeBillingCycles=10,this.pageIndexBillingCycles=1,this.showRemoteMonitoringDoc=!1,this.get_all_data=!1,this.format="yyyy/MM",this.statusDropdownData=[{id:"Current",name:"Current"},{id:"Billable",name:"Billable"},{id:"Pending",name:"Pending"},{id:"Non Billable",name:"Non Billable"},{id:"Completed",name:"Completed"},{id:"All",name:"All"}]}ngOnInit(){}onQueryBillingCycles(n){var t=this;return(0,R.Z)(function*(){t.prev_pageIndex=null!=t.savedParams?t.savedParams.pageIndex:null,t.savedParams=n;const{pageIndex:i,sort:l}=n,r=l.find(g=>null!==g.value);t.sortFieldBillingCycles=r&&r.key||null,t.sortOrderBillingCycles=r&&r.value||null,t.pageIndexBillingCycles=i,t.getBillingCycles()})()}downloadPendingToEMR(){if(this.patient_name){const n=this.patient_name.split(" ");n.length>1?(this.patient_first_name=n[0].toLowerCase(),this.patient_last_name=n[n.length-1].toLowerCase()):this.patient_name=this.patient_name.toLowerCase()}this.search_model={user_id:localStorage.getItem("user_id"),sort_order:this.sortOrderBillingCycles??"",sort_coloumn:this.sortFieldBillingCycles??"",page_number:this.pageIndexBillingCycles,page_size:this.pageSizeBillingCycles,get_all_data:!0,patient_first_name:this.patient_first_name??"",patient_last_name:this.patient_last_name??"",patient_name:this.patient_name??"",month:null===this.month_||null==this.month_||""==this.month_?"":this.convert(this.month_),status:null===this.status||null==this.status||""==this.status?null:this.status},this.dashboardService.getBillingCycles(this.search_model).subscribe(n=>{1==n.success?(this.pendingToEMRExportData=n.data.map(t=>({"Patient Name":t.patient_first_name+" "+t.patient_last_name,Month:t.month??"","Days of Readings":t.days_of_readings??"",Minutes:t.minutes??"","Cycle Number":t.cycle_number??"","Completed By":t.downloaded_by??"","Completed At":null==t.downloaded_at?"":this.datepipe.transform(t.downloaded_at,"MM/dd/yyyy ")})),this.exportToCsvPendingToEMR(this.pendingToEMRExportData)):C().fire({icon:"error",text:n.message})})}getBillingCycles(){if(this.patient_name){const n=this.patient_name.split(" ");n.length>1?(this.patient_first_name=n[0].toLowerCase(),this.patient_last_name=n[n.length-1].toLowerCase()):this.patient_name=this.patient_name.toLowerCase()}this.search_model={user_id:localStorage.getItem("user_id"),sort_order:this.sortOrderBillingCycles??"",sort_coloumn:this.sortFieldBillingCycles??"",page_number:this.pageIndexBillingCycles,page_size:this.pageSizeBillingCycles,get_all_data:this.get_all_data,patient_first_name:this.patient_first_name??"",patient_last_name:this.patient_last_name??"",patient_name:this.patient_name??"",month:null===this.month_||null==this.month_||""==this.month_?"":this.convert(this.month_),status:null===this.status||null==this.status||""==this.status?null:this.status},this.dashboardService.getBillingCycles(this.search_model).subscribe(n=>{1==n.success?(this.BillingCycles=n.data,this.totalBillingCycles=n.data.length>0?n.data[0].total_record_count:0):C().fire({icon:"error",text:n.message})})}exportToCsvPendingToEMR(n){new E.Sv(n,"User's Productivity",{fieldSeparator:",",quoteStrings:'"',decimalseparator:".",title:"",useBom:!0,noDownload:!1,headers:["Patient Name","Month","Days of Readings","Minutes","Cycle Number","Completed By","Completed At"]})}handleClear(){this.pageIndexBillingCycles=1,this.month_="",this.status="Pending",this.patient_name="",this.patient_first_name="",this.patient_last_name="",this.getBillingCycles()}handleCancel(){this.showRemoteMonitoringDoc=!1}search(){(null!=this.month_||null!=this.patient_name||null!=this.status)&&(this.pageIndexBillingCycles=1),this.getBillingCycles()}convert(n){const t=new Date(n),a=("0"+(t.getMonth()+1)).slice(-2),i=("0"+t.getDate()).slice(-2),l=("0"+t.getHours()).slice(-2),d=("0"+t.getHours()).slice(-2),r=("0"+t.getHours()).slice(-2);return[[t.getFullYear(),a,i].join("-"),[l,d,r].join(":")].join(" ")}downloadReport(){C().fire({icon:"warning",text:"Do you want to change the status to completed?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Yes",denyButtonText:"No"}).then(n=>{if(n.isConfirmed)this.updateCompletedStatus(this.billingService.rpm_billing_data);else if(n.isDenied){let T=this.billingService.rpm_billing_data?.patient_first_name+" "+this.billingService.rpm_billing_data?.patient_last_name;var t=document.getElementById("remote_monitoring_doc").offsetWidth,a=document.getElementById("remote_monitoring_doc").offsetHeight,l=t+30,d=1.5*l+30,r=t,g=a,c=Math.ceil(a/d)-1;b()(document.getElementById("remote_monitoring_doc")).then(function(M){var f=M.toDataURL("image/jpeg",1),p=new P.ZP("p","pt",[l,d]);p.addImage(f,"JPG",15,15,r,g);for(var h=1;h<=c;h++)p.addPage([l,d],"p"),p.addImage(f,"JPG",15,-d*h+60,r,g);p.save("Patient Monitoring Document_"+T+".pdf")}),this.showRemoteMonitoringDoc=!1}})}updateCompletedStatus(n){this.search_model={user_id:localStorage.getItem("user_id"),rpm_care_plan_id:n.rpm_care_plan_id,patient_id:n.patient_id,month:n.month},this.billingService.updateCompleteStatus(this.search_model).subscribe(t=>{if(1==t.success){let M=this.billingService.rpm_billing_data?.patientFirstName+(this.billingService.rpm_billing_data?.patientMiddleName??"")+" "+this.billingService.rpm_billing_data?.patientLastName,f=this.billingService.rpm_billing_data?.rpm_billing_id;var a=document.getElementById("remote_monitoring_doc").offsetWidth,i=document.getElementById("remote_monitoring_doc").offsetHeight,d=a+30,r=1.5*d+30,g=a,c=i,T=Math.ceil(i/r)-1;b()(document.getElementById("remote_monitoring_doc")).then(function(p){var h=p.toDataURL("image/jpeg",1),v=new P.ZP("p","pt",[d,r]);v.addImage(h,"JPG",15,15,g,c);for(var Z=1;Z<=T;Z++)v.addPage([d,r],"p"),v.addImage(h,"JPG",15,-r*Z+60,g,c);v.save("Patient Monitoring Document_"+M+"_"+f+".pdf")}),this.showRemoteMonitoringDoc=!1,this.getBillingCycles()}else C().fire({icon:"error",text:t.message})})}viewMonitoringDocument(n){n.pending_emr=!0,this.showRemoteMonitoringDoc=!0,this.billingService.rpm_billing_data=n}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(y.QS),e.Y36(z.F0),e.Y36(J.j),e.Y36(I.s),e.Y36(_.uU))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-pending-to-emr"]],decls:56,vars:29,consts:[[1,"screen"],[1,"screen-header"],[1,"screen-name"],["ngbTooltip","Download","tooltipClass","custom-search-tooltip-color",1,"screen-header-btn",2,"margin-left","auto","margin-right","10px","z-index","2",3,"click"],[1,"fa","fa-download"],["ngbTooltip","Search","tooltipClass","custom-search-tooltip-color",1,"screen-header-btn","margin-right",3,"click"],[1,"fa","fa-search"],[1,"screen-header-btn","margin-right",3,"click"],[1,"screen-search-criteria-div"],[1,"row"],[1,"col-lg-3","col-md-2","col-sm-6","col-xs-6"],["type","text","placeholder","Patient Name","label","Patient Name","icon","fa fa-user","align_icon","left",3,"ngModel","ngModelChange"],["label","Month","format","MM/yyyy","placeholder","mm/yyyy","mode","month","icon","fa fa-calendar","align_icon","left",3,"ngModel","ngModelChange"],["label","Status","dropdown_placeholder","Status","bindLabel","name","icon","fa fa-book-medical","align_icon","left",3,"ngModel","dropdownListData","ngModelChange"],[1,"table-div"],[1,"ch-table",3,"nzPageSizeOptions","nzPageIndex","nzPageSize","nzFrontPagination","nzTotal","nzData","nzPageIndexChange","nzPageSizeChange","nzQueryParams"],["billingcycles",""],["nzColumnKey","month",3,"nzSortFn"],["nzColumnKey","patient_name",3,"nzSortFn"],["nzColumnKey","days_of_readings",3,"nzSortFn"],["nzColumnKey","",3,"nzSortFn"],["nzColumnKey","minutes",3,"nzSortFn"],["nzColumnKey","cycle_number",3,"nzSortFn"],[3,"click",4,"ngFor","ngForOf"],[1,"total"],[3,"src"],[1,"total-span"],["nzTitle","Monitoring Document",3,"nzVisible","nzFooter","nzBodyStyle","nzWidth","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],[3,"click"],[3,"ngClass"],["aria-label","Download",1,"ant-modal-close","ng-tns-c251-16","ng-star-inserted",2,"top","19px","right","73px",3,"click"],[1,"fa","fa-download",2,"font-size","19px"],[1,"layout-height"],[1,"margin-top-25"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"div",2),e._uU(4," Pending To EMR "),e.qZA(),e.TgZ(5,"div")(6,"button",3),e.NdJ("click",function(){return t.downloadPendingToEMR()}),e._UZ(7,"span",4),e.qZA(),e.TgZ(8,"button",5),e.NdJ("click",function(){return t.search()}),e._UZ(9,"span",6),e.qZA(),e.TgZ(10,"button",7),e.NdJ("click",function(){return t.handleClear()}),e._uU(11,"Clear All"),e.qZA()()(),e.TgZ(12,"div",8)(13,"div",9)(14,"div",10)(15,"app-ad-custom-input",11),e.NdJ("ngModelChange",function(i){return t.patient_name=i}),e.qZA()(),e.TgZ(16,"div",10)(17,"app-ad-custom-date",12),e.NdJ("ngModelChange",function(i){return t.month_=i}),e.qZA()(),e.TgZ(18,"div",10)(19,"app-ad-custom-dropdown",13),e.NdJ("ngModelChange",function(i){return t.status=i}),e.qZA()()()(),e.TgZ(20,"div",14)(21,"nz-table",15,16),e.NdJ("nzPageIndexChange",function(i){return t.pageIndexBillingCycles=i})("nzPageSizeChange",function(i){return t.pageSizeBillingCycles=i})("nzQueryParams",function(i){return t.onQueryBillingCycles(i)}),e.TgZ(23,"thead")(24,"tr")(25,"th",17),e._uU(26,"Month"),e.qZA(),e.TgZ(27,"th",18),e._uU(28,"Patient Name"),e.qZA(),e.TgZ(29,"th",19),e._uU(30,"Days of Readings"),e.qZA(),e.TgZ(31,"th",20),e._uU(32,"Days Cycle Start Date"),e.qZA(),e.TgZ(33,"th",20),e._uU(34,"Days Cycle End Date"),e.qZA(),e.TgZ(35,"th",21),e._uU(36,"Minutes"),e.qZA(),e.TgZ(37,"th",20),e._uU(38,"Minutes Cycle Start Date"),e.qZA(),e.TgZ(39,"th",20),e._uU(40,"Minutes Cycle End Date"),e.qZA(),e.TgZ(41,"th",22),e._uU(42,"Cycle Number"),e.qZA(),e.TgZ(43,"th"),e._uU(44,"Completed By"),e.qZA(),e.TgZ(45,"th"),e._uU(46,"Completed At"),e.qZA()()(),e.TgZ(47,"tbody"),e.YNc(48,q,28,30,"tr",23),e.qZA()(),e.TgZ(49,"div",24),e._UZ(50,"img",25),e.ALo(51,"assetsSource"),e.TgZ(52,"span",26),e._uU(53),e.qZA()()()(),e.TgZ(54,"nz-modal",27),e.NdJ("nzVisibleChange",function(i){return t.showRemoteMonitoringDoc=i})("nzOnCancel",function(){return t.handleCancel()}),e.YNc(55,L,6,0,"ng-container",28),e.qZA()()),2&n){const a=e.MAs(22);e.xp6(15),e.Q6J("ngModel",t.patient_name),e.xp6(2),e.Q6J("ngModel",t.month_),e.xp6(2),e.Q6J("ngModel",t.status)("dropdownListData",t.statusDropdownData),e.xp6(2),e.Q6J("nzPageSizeOptions",t.pageSizeOptionsBillingCycles)("nzPageIndex",t.pageIndexBillingCycles)("nzPageSize",t.pageSizeBillingCycles)("nzFrontPagination",!1)("nzTotal",t.totalBillingCycles)("nzData",t.BillingCycles),e.xp6(4),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(7),e.Q6J("ngForOf",a.data),e.xp6(2),e.Q6J("src",e.lcZ(51,26,"total.png"),e.LSH),e.xp6(3),e.Oqu(t.totalBillingCycles),e.xp6(1),e.Q6J("nzVisible",t.showRemoteMonitoringDoc)("nzFooter",null)("nzBodyStyle",e.DdM(28,j))("nzWidth",875)}},dependencies:[_.mk,_.sg,x.hw,x.OK,A.du,A.Hf,m.N8,m.qD,m.Uo,m._C,m.Om,m.p0,m.$Z,y.JJ,y.On,B._L,O.y,N.m,w.v,F.j,_.uU,Q.n],styles:[".red[_ngcontent-%COMP%]{background-color:#ffe2e2}.green[_ngcontent-%COMP%]{background-color:#dfffd8}"]}),s})();var Y=o(91083),G=o(29193);const V=[{path:"",component:K}];let $=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[_.ez,Y.T,z.Bz.forChild(V),y.u5,y.UX,B.IJ,G.m,z.Bz]}),s})()}}]);