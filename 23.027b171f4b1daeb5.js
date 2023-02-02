"use strict";(self.webpackChunktemplate_rpm_adnare=self.webpackChunktemplate_rpm_adnare||[]).push([[23],{24339:(U,b,s)=>{s.d(b,{s:()=>S});var g=s(80529),o=s(62843),l=s(17414),h=s(70262),p=s(92340),A=s(94650);let S=(()=>{class f{constructor(i){this.http=i,this.token=localStorage.getItem("token"),this.baseUrl="",this.method="",this.headers=new g.WM({"Content-Type":"application/json",charset:"UTF-8",Authorization:"Bearer "+this.token})}getPatientsWithoutDevices(i){let n=new g.LE;return n=i,this.http.get(p.N.api_AdnareRPM+"/api/ActionDashboard/sp_dashboard_without_patients",{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),params:n}).pipe((0,l.V)(1e6),(0,h.K)(e=>401===e.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(e)))}getUserDailyReport(i){let n=new g.LE;return n=i,this.http.get(p.N.api_AdnareRPM+"/api/ActionDashboard/sp_dashboard_daily_users_report",{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),params:n}).pipe((0,l.V)(1e6),(0,h.K)(e=>401===e.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(e)))}getPatientNeedsToBeEnrolled(i){let n=new g.LE;return n=i,this.http.get(p.N.api_AdnareRPM+"/api/ActionDashboard/sp_dashboard_patients_needs_to_be_enrolled",{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),params:n}).pipe((0,l.V)(1e6),(0,h.K)(e=>401===e.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(e)))}getPatientRenewals(i){let n=new g.LE;return n=i,this.http.get(p.N.api_AdnareRPM+"/api/ActionDashboard/sp_dashboard_renewals",{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),params:n}).pipe((0,l.V)(1e6),(0,h.K)(e=>401===e.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(e)))}getBillingReadingDetails(i){let n=new g.LE;return n=i,this.http.get(p.N.api_AdnareRPM+"/api/ActionDashboard/sp_dashboard_billing_reading_detail",{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),params:n}).pipe((0,l.V)(1e6),(0,h.K)(e=>401===e.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(e)))}getBillingMinutesDetails(i){let n=new g.LE;return n=i,this.http.get(p.N.api_AdnareRPM+"/api/ActionDashboard/sp_dashboard_billing_minutes_detail",{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),params:n}).pipe((0,l.V)(1e6),(0,h.K)(e=>401===e.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(e)))}getMissedBillingReadingDetails(i){let n=new g.LE;return n=i,this.http.get(p.N.api_AdnareRPM+"/api/ActionDashboard/sp_dashboard_missing_billing_cycle_for_medicare_30_rolling_days",{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),params:n}).pipe((0,l.V)(1e6),(0,h.K)(e=>401===e.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(e)))}getPOCNeedsToBeDownloadedDetail(i){let n=new g.LE;return n=i,this.http.get(p.N.api_AdnareRPM+"/api/ActionDashboard/sp_dashboard_poc_needs_to_be_downloaded",{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),params:n}).pipe((0,l.V)(1e6),(0,h.K)(e=>401===e.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(e)))}getMissedBillingMinutesDetails(i){let n=new g.LE;return n=i,this.http.get(p.N.api_AdnareRPM+"/api/ActionDashboard/sp_dashboard_missing_billing_cycle_for_calendar_month",{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),params:n}).pipe((0,l.V)(1e6),(0,h.K)(e=>401===e.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(e)))}getPendingAuthRequest(i){let n=new g.LE;return n=i,this.http.get(p.N.api_AdnareRPM+"/api/ActionDashboard/sp_dashboard_pending_auth_request",{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),params:n}).pipe((0,l.V)(1e6),(0,h.K)(e=>401===e.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(e)))}getBillingCycles(i){let n=new g.LE;return n=i,this.http.get(p.N.api_AdnareRPM+"/api/ActionDashboard/sp_dashboard_billing_cycles",{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),params:n}).pipe((0,l.V)(1e6),(0,h.K)(e=>401===e.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(e)))}getPatientReviewList(i){let n=new g.LE;return n=i,this.http.get(p.N.api_AdnareRPM+"/api/Patient/sp_patient_review_list",{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),params:n}).pipe((0,l.V)(1e6),(0,h.K)(e=>401===e.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(e)))}getAbnormalReadings(i){let n=new g.LE;return n=i,this.http.get(p.N.api_AdnareRPM+"/api/ActionDashboard/sp_dashboard_abnormal_readings",{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),params:n}).pipe((0,l.V)(1e6),(0,h.K)(e=>401===e.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(e)))}getPatientWithoutReadings(i){let n=new g.LE;return n=i,this.http.get(p.N.api_AdnareRPM+"/api/ActionDashboard/sp_dashboard_device_attached_no_reading",{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),params:n}).pipe((0,l.V)(1e6),(0,h.K)(e=>401===e.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(e)))}getCriticalReadings(i){let n=new g.LE;return n=i,this.http.get(p.N.api_AdnareRPM+"/api/ActionDashboard/sp_dashboard_critical_readings",{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),params:n}).pipe((0,l.V)(1e6),(0,h.K)(e=>401===e.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(e)))}getPatientSatisticalGridData(i){return this.http.get(p.N.api_AdnareRPM+"/api/StatisticalDashboard/get_statistical_dashboard_data?user_id="+i,{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token"))}).pipe((0,l.V)(1e6),(0,h.K)(n=>401===n.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(n)))}addBillingLogs(i){return this.http.post(p.N.api_AdnareRPM+"/api/ActionDashboard/add_billing_logs",JSON.stringify(i),{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token"))}).pipe((0,l.V)(1e7),(0,h.K)(n=>401===n.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(n)))}getPatientsWithoutDiagCode(i){let n=new g.LE;return n=i,this.http.get(p.N.api_AdnareRPM+"/api/ActionDashboard/sp_dashboard_patient_without_diagnosis_code",{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),params:n}).pipe((0,l.V)(1e6),(0,h.K)(e=>401===e.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(e)))}getPatientsWithoutInsurance(i){let n=new g.LE;return n=i,this.http.get(p.N.api_AdnareRPM+"/api/ActionDashboard/sp_dashboard_patient_without_insurances",{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),params:n}).pipe((0,l.V)(1e6),(0,h.K)(e=>401===e.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(e)))}getHomeDashboardData(i){return this.http.get(p.N.api_AdnareRPM+"/api/HomeDashboard/get_home_dashboard_data?user_id="+i,{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token"))}).pipe((0,l.V)(1e6),(0,h.K)(n=>401===n.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(n)))}getHomeDashboardHourlyPatientReadingCount(i){return this.http.get(p.N.api_AdnareRPM+"/api/HomeDashboard/get_home_dashboard_hourly_patient_readings?user_id="+i,{headers:this.headers.set("Authorization","Bearer "+localStorage.getItem("token"))}).pipe((0,l.V)(1e6),(0,h.K)(n=>401===n.status?(window.open(window.location.origin,"_self"),(0,o._)("Unauthorized")):(0,o._)(n)))}}return f.\u0275fac=function(i){return new(i||f)(A.LFG(g.eN))},f.\u0275prov=A.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},77023:(U,b,s)=>{s.r(b),s.d(b,{PendingToEMRModule:()=>q});var g=s(36895),o=s(62510),l=s(90433),h=s(46773),p=s(49671),A=s(88938),S=s(4159),f=s.n(S),P=s(53583),i=s(35226),n=s.n(i),e=s(94650),N=s(91684),x=s(24339),Z=s(18284),I=s(50007),w=s(40269),O=s(31237),L=s(31453),K=s(80728),J=s(13255),V=s(70827);function F(_,y){if(1&_){const t=e.EpF();e.TgZ(0,"tr",28),e.NdJ("click",function(){const r=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.viewMonitoringDocument(r))}),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td",29),e._uU(6),e.qZA(),e.TgZ(7,"td",29),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.ALo(15,"date"),e.qZA()()}if(2&_){const t=y.$implicit;e.xp6(2),e.Oqu(null==t?null:t.month),e.xp6(2),e.AsE("",null==t?null:t.patient_first_name," ",null==t?null:t.patient_last_name,""),e.xp6(1),e.Q6J("ngClass",t.days_of_readings>=16?"green":"red"),e.xp6(1),e.Oqu(null==t?null:t.days_of_readings),e.xp6(1),e.Q6J("ngClass",t.minutes>=20&&(null==t?null:t.days_of_readings)>=16?"green":"red"),e.xp6(1),e.Oqu(null==t?null:t.minutes),e.xp6(2),e.Oqu(null==t?null:t.cycle_number),e.xp6(2),e.Oqu(null==t?null:t.downloaded_by),e.xp6(2),e.Oqu(e.Dn7(15,10,null==t?null:t.downloaded_at,"short","IST"))}}function k(_,y){if(1&_){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",30),e.NdJ("click",function(){e.CHM(t);const d=e.oxw();return e.KtG(d.downloadReport())}),e._UZ(2,"span",31),e.qZA(),e.TgZ(3,"nz-layout",32)(4,"nz-content",33),e._UZ(5,"app-remote-monitoring-doc"),e.qZA()(),e.BQk()}}const Q=function(){return{padding:"0px"}};let j=(()=>{class _{constructor(t,a,d,r,u){this.formBuilder=t,this.router=a,this.billingService=d,this.dashboardService=r,this.datepipe=u,this.status="Pending",this.pageSizeOptionsBillingCycles=[10,20,30,40],this.pageSizeBillingCycles=10,this.pageIndexBillingCycles=1,this.showRemoteMonitoringDoc=!1,this.get_all_data=!1,this.format="yyyy/MM",this.statusDropdownData=[{id:"Current",name:"Current"},{id:"Billable",name:"Billable"},{id:"Pending",name:"Pending"},{id:"Non Billable",name:"Non Billable"},{id:"Completed",name:"Completed"},{id:"All",name:"All"}]}ngOnInit(){}onQueryBillingCycles(t){var a=this;return(0,p.Z)(function*(){a.prev_pageIndex=null!=a.savedParams?a.savedParams.pageIndex:null,a.savedParams=t;const{pageIndex:r,sort:u}=t,c=u.find(C=>null!==C.value);a.sortFieldBillingCycles=c&&c.key||null,a.sortOrderBillingCycles=c&&c.value||null,a.pageIndexBillingCycles=r,a.getBillingCycles()})()}downloadPendingToEMR(){if(this.patient_name){const t=this.patient_name.split(" ");t.length>1?(this.patient_first_name=t[0].toLowerCase(),this.patient_last_name=t[t.length-1].toLowerCase()):this.patient_name=this.patient_name.toLowerCase()}this.search_model={user_id:localStorage.getItem("user_id"),sort_order:this.sortOrderBillingCycles??"",sort_coloumn:this.sortFieldBillingCycles??"",page_number:this.pageIndexBillingCycles,page_size:this.pageSizeBillingCycles,get_all_data:!0,patient_first_name:this.patient_first_name??"",patient_last_name:this.patient_last_name??"",patient_name:this.patient_name??"",month:null===this.month_||null==this.month_||""==this.month_?"":this.convert(this.month_),status:null===this.status||null==this.status||""==this.status?null:this.status},this.dashboardService.getBillingCycles(this.search_model).subscribe(t=>{1==t.success?(this.pendingToEMRExportData=t.data.map(a=>({"Patient Name":a.patient_first_name+" "+a.patient_last_name,Month:a.month??"","Days of Readings":a.days_of_readings??"",Minutes:a.minutes??"","Cycle Number":a.cycle_number??"","Completed By":a.downloaded_by??"","Completed At":null==a.downloaded_at?"":this.datepipe.transform(a.downloaded_at,"MM/dd/yyyy ")})),this.exportToCsvPendingToEMR(this.pendingToEMRExportData)):n().fire({icon:"error",text:t.message})})}getBillingCycles(){if(this.patient_name){const t=this.patient_name.split(" ");t.length>1?(this.patient_first_name=t[0].toLowerCase(),this.patient_last_name=t[t.length-1].toLowerCase()):this.patient_name=this.patient_name.toLowerCase()}this.search_model={user_id:localStorage.getItem("user_id"),sort_order:this.sortOrderBillingCycles??"",sort_coloumn:this.sortFieldBillingCycles??"",page_number:this.pageIndexBillingCycles,page_size:this.pageSizeBillingCycles,get_all_data:this.get_all_data,patient_first_name:this.patient_first_name??"",patient_last_name:this.patient_last_name??"",patient_name:this.patient_name??"",month:null===this.month_||null==this.month_||""==this.month_?"":this.convert(this.month_),status:null===this.status||null==this.status||""==this.status?null:this.status},this.dashboardService.getBillingCycles(this.search_model).subscribe(t=>{1==t.success?(this.BillingCycles=t.data,this.totalBillingCycles=t.data.length>0?t.data[0].total_record_count:0):n().fire({icon:"error",text:t.message})})}exportToCsvPendingToEMR(t){new A.Sv(t,"User's Productivity",{fieldSeparator:",",quoteStrings:'"',decimalseparator:".",title:"",useBom:!0,noDownload:!1,headers:["Patient Name","Month","Days of Readings","Minutes","Cycle Number","Completed By","Completed At"]})}handleClear(){this.pageIndexBillingCycles=1,this.month_="",this.status="Pending",this.patient_name="",this.patient_first_name="",this.patient_last_name="",this.getBillingCycles()}handleCancel(){this.showRemoteMonitoringDoc=!1}search(){(null!=this.month_||null!=this.patient_name||null!=this.status)&&(this.pageIndexBillingCycles=1),this.getBillingCycles()}convert(t){const a=new Date(t),d=("0"+(a.getMonth()+1)).slice(-2),r=("0"+a.getDate()).slice(-2),u=("0"+a.getHours()).slice(-2),m=("0"+a.getHours()).slice(-2),c=("0"+a.getHours()).slice(-2);return[[a.getFullYear(),d,r].join("-"),[u,m,c].join(":")].join(" ")}downloadReport(){n().fire({icon:"warning",text:"Do you want to change the status to completed?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Yes",denyButtonText:"No"}).then(t=>{if(t.isConfirmed)this.updateCompletedStatus(this.billingService.rpm_billing_data);else if(t.isDenied){let R=this.billingService.rpm_billing_data?.patient_first_name+" "+this.billingService.rpm_billing_data?.patient_last_name;var a=document.getElementById("remote_monitoring_doc").offsetWidth,d=document.getElementById("remote_monitoring_doc").offsetHeight,u=a+30,m=1.5*u+30,c=a,C=d,z=Math.ceil(d/m)-1;f()(document.getElementById("remote_monitoring_doc")).then(function(D){var B=D.toDataURL("image/jpeg",1),M=new P.ZP("p","pt",[u,m]);M.addImage(B,"JPG",15,15,c,C);for(var v=1;v<=z;v++)M.addPage([u,m],"p"),M.addImage(B,"JPG",15,-m*v+60,c,C);M.save("Patient Monitoring Document_"+R+".pdf")}),this.showRemoteMonitoringDoc=!1}})}updateCompletedStatus(t){this.search_model={user_id:localStorage.getItem("user_id"),rpm_care_plan_id:t.rpm_care_plan_id,patient_id:t.patient_id,month:t.month},this.billingService.updateCompleteStatus(this.search_model).subscribe(a=>{if(1==a.success){let D=this.billingService.rpm_billing_data?.patientFirstName+(this.billingService.rpm_billing_data?.patientMiddleName??"")+" "+this.billingService.rpm_billing_data?.patientLastName,B=this.billingService.rpm_billing_data?.rpm_billing_id;var d=document.getElementById("remote_monitoring_doc").offsetWidth,r=document.getElementById("remote_monitoring_doc").offsetHeight,m=d+30,c=1.5*m+30,C=d,z=r,R=Math.ceil(r/c)-1;f()(document.getElementById("remote_monitoring_doc")).then(function(M){var v=M.toDataURL("image/jpeg",1),T=new P.ZP("p","pt",[m,c]);T.addImage(v,"JPG",15,15,C,z);for(var E=1;E<=R;E++)T.addPage([m,c],"p"),T.addImage(v,"JPG",15,-c*E+60,C,z);T.save("Patient Monitoring Document_"+D+"_"+B+".pdf")}),this.showRemoteMonitoringDoc=!1,this.getBillingCycles()}else n().fire({icon:"error",text:a.message})})}viewMonitoringDocument(t){t.pending_emr=!0,this.showRemoteMonitoringDoc=!0,this.billingService.rpm_billing_data=t}}return _.\u0275fac=function(t){return new(t||_)(e.Y36(l.QS),e.Y36(o.F0),e.Y36(N.j),e.Y36(x.s),e.Y36(g.uU))},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-pending-to-emr"]],decls:48,vars:25,consts:[[1,"screen"],[1,"screen-header"],[1,"screen-name"],["ngbTooltip","Download","tooltipClass","custom-search-tooltip-color",1,"screen-header-btn",2,"margin-left","auto","margin-right","10px","z-index","2",3,"click"],[1,"fa","fa-download"],["ngbTooltip","Search","tooltipClass","custom-search-tooltip-color",1,"screen-header-btn","margin-right",3,"click"],[1,"fa","fa-search"],[1,"screen-header-btn","margin-right",3,"click"],[1,"screen-search-criteria-div"],[1,"row"],[1,"col-lg-3","col-md-2","col-sm-6","col-xs-6"],["type","text","placeholder","Patient Name","label","Patient Name","icon","fa fa-user","align_icon","left",3,"ngModel","ngModelChange"],["label","Month","format","MM/yyyy","placeholder","mm/yyyy","mode","month","icon","fa fa-calendar","align_icon","left",3,"ngModel","ngModelChange"],["label","Status","dropdown_placeholder","Status","bindLabel","name","icon","fa fa-book-medical","align_icon","left",3,"ngModel","dropdownListData","ngModelChange"],[1,"table-div"],[1,"ch-table",3,"nzPageSizeOptions","nzPageIndex","nzPageSize","nzFrontPagination","nzTotal","nzData","nzPageIndexChange","nzPageSizeChange","nzQueryParams"],["billingcycles",""],["nzColumnKey","month",3,"nzSortFn"],["nzColumnKey","patient_name",3,"nzSortFn"],["nzColumnKey","days_of_readings",3,"nzSortFn"],["nzColumnKey","minutes",3,"nzSortFn"],["nzColumnKey","cycle_number",3,"nzSortFn"],[3,"click",4,"ngFor","ngForOf"],[1,"total"],[3,"src"],[1,"total-span"],["nzTitle","Monitoring Document",3,"nzVisible","nzFooter","nzBodyStyle","nzWidth","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],[3,"click"],[3,"ngClass"],["aria-label","Download",1,"ant-modal-close","ng-tns-c251-16","ng-star-inserted",2,"top","19px","right","73px",3,"click"],[1,"fa","fa-download",2,"font-size","19px"],[1,"layout-height"],[1,"margin-top-25"]],template:function(t,a){if(1&t&&(e.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"div",2),e._uU(4," Pending To EMR "),e.qZA(),e.TgZ(5,"div")(6,"button",3),e.NdJ("click",function(){return a.downloadPendingToEMR()}),e._UZ(7,"span",4),e.qZA(),e.TgZ(8,"button",5),e.NdJ("click",function(){return a.search()}),e._UZ(9,"span",6),e.qZA(),e.TgZ(10,"button",7),e.NdJ("click",function(){return a.handleClear()}),e._uU(11,"Clear All"),e.qZA()()(),e.TgZ(12,"div",8)(13,"div",9)(14,"div",10)(15,"app-ad-custom-input",11),e.NdJ("ngModelChange",function(r){return a.patient_name=r}),e.qZA()(),e.TgZ(16,"div",10)(17,"app-ad-custom-date",12),e.NdJ("ngModelChange",function(r){return a.month_=r}),e.qZA()(),e.TgZ(18,"div",10)(19,"app-ad-custom-dropdown",13),e.NdJ("ngModelChange",function(r){return a.status=r}),e.qZA()()()(),e.TgZ(20,"div",14)(21,"nz-table",15,16),e.NdJ("nzPageIndexChange",function(r){return a.pageIndexBillingCycles=r})("nzPageSizeChange",function(r){return a.pageSizeBillingCycles=r})("nzQueryParams",function(r){return a.onQueryBillingCycles(r)}),e.TgZ(23,"thead")(24,"tr")(25,"th",17),e._uU(26,"Month"),e.qZA(),e.TgZ(27,"th",18),e._uU(28,"Patient Name"),e.qZA(),e.TgZ(29,"th",19),e._uU(30,"Days of Readings"),e.qZA(),e.TgZ(31,"th",20),e._uU(32,"Minutes"),e.qZA(),e.TgZ(33,"th",21),e._uU(34,"Cycle Number"),e.qZA(),e.TgZ(35,"th"),e._uU(36,"Completed By"),e.qZA(),e.TgZ(37,"th"),e._uU(38,"Completed At"),e.qZA()()(),e.TgZ(39,"tbody"),e.YNc(40,F,16,14,"tr",22),e.qZA()(),e.TgZ(41,"div",23),e._UZ(42,"img",24),e.ALo(43,"assetsSource"),e.TgZ(44,"span",25),e._uU(45),e.qZA()()()(),e.TgZ(46,"nz-modal",26),e.NdJ("nzVisibleChange",function(r){return a.showRemoteMonitoringDoc=r})("nzOnCancel",function(){return a.handleCancel()}),e.YNc(47,k,6,0,"ng-container",27),e.qZA()()),2&t){const d=e.MAs(22);e.xp6(15),e.Q6J("ngModel",a.patient_name),e.xp6(2),e.Q6J("ngModel",a.month_),e.xp6(2),e.Q6J("ngModel",a.status)("dropdownListData",a.statusDropdownData),e.xp6(2),e.Q6J("nzPageSizeOptions",a.pageSizeOptionsBillingCycles)("nzPageIndex",a.pageIndexBillingCycles)("nzPageSize",a.pageSizeBillingCycles)("nzFrontPagination",!1)("nzTotal",a.totalBillingCycles)("nzData",a.BillingCycles),e.xp6(4),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(2),e.Q6J("nzSortFn",!0),e.xp6(7),e.Q6J("ngForOf",d.data),e.xp6(2),e.Q6J("src",e.lcZ(43,22,"total.png"),e.LSH),e.xp6(3),e.Oqu(a.totalBillingCycles),e.xp6(1),e.Q6J("nzVisible",a.showRemoteMonitoringDoc)("nzFooter",null)("nzBodyStyle",e.DdM(24,Q))("nzWidth",875)}},dependencies:[g.mk,g.sg,Z.hw,Z.OK,I.du,I.Hf,w.N8,w.qD,w.Uo,w._C,w.Om,w.p0,w.$Z,l.JJ,l.On,h._L,O.y,L.m,K.v,J.j,g.uU,V.n],styles:[".red[_ngcontent-%COMP%]{background-color:#ffe2e2}.green[_ngcontent-%COMP%]{background-color:#dfffd8}"]}),_})();var Y=s(91083),G=s(29193);const W=[{path:"",component:j}];let q=(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.oAB({type:_}),_.\u0275inj=e.cJS({imports:[g.ez,Y.T,o.Bz.forChild(W),l.u5,l.UX,h.IJ,G.m,o.Bz]}),_})()}}]);