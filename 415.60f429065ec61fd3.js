"use strict";(self.webpackChunktemplate_rpm_adnare=self.webpackChunktemplate_rpm_adnare||[]).push([[415],{5415:(w,u,t)=>{t.r(u),t.d(u,{AddDeviceModule:()=>S});var v=t(36895),d=t(90433),f=t(35226),n=t.n(f),e=t(94650),c=t(62510),h=t(74241),g=t(39503),m=t(73679),_=t(36704),p=t(46773),b=t(31237),D=t(80728);function I(o,s){1&o&&(e.TgZ(0,"div",21),e._uU(1," Add Device "),e.qZA())}function Z(o,s){1&o&&(e.TgZ(0,"div",21),e._uU(1," Edit Device "),e.qZA())}let A=(()=>{class o{constructor(i,r,a,l){this.formBuilder=i,this.router=r,this.deviceService=a,this.patientService=l,this.disableInput=!1,this.transition_border=!1,this.buildForm()}ngOnInit(){this.getEnterpriseSearchDropdown(),this.getDeviceTypesDropdown(),this.getProviderDropdown(),this.method=this.deviceService.method,null!=this.deviceService.device_id&&null!=this.deviceService.device_id&&this.getDeviceInfo()}getDeviceInfo(){this.deviceService.getDeviceInfoById(this.deviceService.device_id).subscribe(i=>{1==i.success?(this.form.patchValue(i.data),null!=this.form.value.enterprise_id&&null!=this.form.value.enterprise_id&&""!=this.form.value.enterprise_id&&(this.providerData=this.allProviderData.filter(r=>r.enterprise_id==this.form.value.enterprise_id))):n().fire({icon:"error",text:i.message})})}getEnterpriseSearchDropdown(){this.userId=localStorage.getItem("user_id"),this.patientService.getActiveEnterpriseDropdownData(this.userId).subscribe(i=>{1==i.success?(this.enterpriseData=i.data,1==this.enterpriseData.length&&"update"!==this.method&&this.form.controls.enterprise_id.setValue(this.enterpriseData[0].id)):n().fire({icon:"error",text:i.message})})}getDeviceTypesDropdown(){this.deviceService.getDeviceTypesDropdown().subscribe(i=>{1==i.success?this.deviceTypesData=i.data:n().fire({icon:"error",text:i.message})})}onEnterpriseDropdownChange(i){this.form.controls.provider_id.setValue(null),this.providerData=null==this.allProviderData?[]:this.allProviderData.filter(r=>r.enterprise_id==i.id)}getProviderDropdown(){this.deviceService.getProvider(localStorage.getItem("user_id")).subscribe(i=>{1==i.success?(this.allProviderData=i.data,null!=this.form.value.enterprise_id&&null!=this.form.value.enterprise_id&&""!=this.form.value.enterprise_id&&(this.providerData=this.allProviderData.filter(r=>r.enterprise_id==this.form.value.enterprise_id))):n().fire({icon:"error",text:i.message})})}addDeviceInfo(){this.transition_border=!0,this.form.valid?(this.addDeviceData={user_id:localStorage.getItem("user_id"),device_id:this.deviceService.device_id,serial_number:this.form.value.serial_number,imei:this.form.value.imei,sim:this.form.value.sim,lot_number:this.form.value.lot_number,manufacturer_id:this.form.value.manufacturer_id,provider_id:this.form.value.provider_id,device_type_id:this.form.value.device_type_id,enterprise_id:this.form.value.enterprise_id},null!=this.deviceService.device_id&&null!=this.deviceService.device_id?this.deviceService.updateDeviceInfoData(this.addDeviceData).subscribe(i=>{1==i.success?(n().fire({icon:"success",text:i.message}),this.router.navigate(["/device-search"])):i.message.includes(this.form.value.serial_number)?n().fire({icon:"error",text:"Serial Number Already Exist"}):n().fire({icon:"error",text:i.message})}):this.deviceService.addDeviceInfoData(this.addDeviceData).subscribe(i=>{1==i.success?(n().fire({icon:"success",text:i.message}),this.router.navigate(["/device-search"])):i.message.includes(this.form.value.serial_number)?n().fire({icon:"error",text:"Serial Number Already Exist"}):n().fire({icon:"error",text:i.message})})):n().fire({icon:"error",text:"Check all required feilds."})}cancel(){this.form.reset(),this.deviceService.device_id=null,this.router.navigate(["/device-search"])}clear(){this.form.reset()}buildForm(){this.form=this.formBuilder.group({serial_number:[{value:null,disabled:this.disableInput},[d.kI.required]],imei:[{value:null,disabled:this.disableInput},[d.kI.required]],sim:[{value:null,disabled:this.disableInput}],lot_number:[{value:null,disabled:this.disableInput}],manufacturer_id:[{value:null,disabled:this.disableInput}],provider_id:[{value:null,disabled:this.disableInput}],device_type_id:[{value:null,disabled:this.disableInput},[d.kI.required]],enterprise_id:[{value:null,disabled:this.disableInput},[d.kI.required]]})}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(d.QS),e.Y36(c.F0),e.Y36(h.U),e.Y36(g.e))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-device"]],decls:33,vars:10,consts:[["nz-row","",1,"add-device"],["nz-form","",1,"login-form",3,"formGroup","keydown.enter"],[1,"formBox-full","viewMinWidth"],[1,"screen-header"],["class","screen-name",4,"ngIf"],[1,"button-container"],["ngbTooltip","Clear","tooltipClass","custom-search-tooltip-color",1,"screen-header-btn","margin-left","margin-right",3,"click"],["ngbTooltip","Save","tooltipClass","custom-search-tooltip-color",1,"screen-header-btn","margin-left","margin-right",3,"click"],[1,"fa","fa-floppy-disk","icon-padding"],["ngbTooltip","Cancel","tooltipClass","custom-search-tooltip-color",1,"screen-header-btn","margin-right",3,"click"],[1,"fa","fa-xmark","icon-padding"],["nz-col","",1,"screen-search-criteria-div"],[1,"row"],[1,"col-lg-3","col-md-3","col-lg-5","col-lg-6"],["label","Entity *","formControlName","enterprise_id","dropdown_placeholder","Entity","bindLabel","name","align_icon","left",3,"validations","dropdownListData","onModelChange"],["label","Device Type *","formControlName","device_type_id","dropdown_placeholder","Device Type","bindLabel","name","align_icon","left",3,"validations","dropdownListData"],["type","text","label","Serial Number *","formControlName","serial_number","placeholder","Serial Number","align_icon","left",3,"validations"],["type","number","label","IMEI *","formControlName","imei","placeholder","IMEI","align_icon","left",3,"validations"],["type","number","label","SIM","formControlName","sim","placeholder","SIM","align_icon","left"],["type","number","label","Lot Number","formControlName","lot_number","placeholder","Lot Number","align_icon","left"],["label","Provider","formControlName","provider_id","dropdown_placeholder","Provider","bindLabel","name","align_icon","left",3,"dropdownListData"],[1,"screen-name"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("keydown.enter",function(l){return l.preventDefault()}),e.TgZ(2,"div",2)(3,"div",3),e.YNc(4,I,2,0,"div",4),e.YNc(5,Z,2,0,"div",4),e.qZA(),e.TgZ(6,"div",5)(7,"button",6),e.NdJ("click",function(){return r.clear()}),e._uU(8," Clear "),e.qZA(),e.TgZ(9,"button",7),e.NdJ("click",function(){return r.addDeviceInfo()}),e._UZ(10,"i",8),e.qZA(),e.TgZ(11,"button",9),e.NdJ("click",function(){return r.cancel()}),e._UZ(12,"i",10),e.qZA()(),e.TgZ(13,"div",11)(14,"div",12)(15,"div",13)(16,"app-ad-custom-dropdown",14),e.NdJ("onModelChange",function(l){return r.onEnterpriseDropdownChange(l)}),e.qZA()(),e.TgZ(17,"div",13),e._UZ(18,"app-ad-custom-dropdown",15),e.qZA()()(),e.TgZ(19,"div",11)(20,"div",12)(21,"div",13),e._UZ(22,"app-ad-custom-input",16),e.qZA(),e.TgZ(23,"div",13),e._UZ(24,"app-ad-custom-input",17),e.qZA()(),e.TgZ(25,"div",12)(26,"div",13),e._UZ(27,"app-ad-custom-input",18),e.qZA(),e.TgZ(28,"div",13),e._UZ(29,"app-ad-custom-input",19),e.qZA()(),e.TgZ(30,"div",12)(31,"div",13),e._UZ(32,"app-ad-custom-dropdown",20),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("formGroup",r.form),e.xp6(3),e.Q6J("ngIf","create"==r.method),e.xp6(1),e.Q6J("ngIf","update"==r.method),e.xp6(11),e.Q6J("validations",!(r.transition_border&&null==r.form.value.enterprise_id||""==r.form.value.enterprise_id))("dropdownListData",r.enterpriseData),e.xp6(2),e.Q6J("validations",!(r.transition_border&&null==r.form.value.device_type_id||""==r.form.value.device_type_id))("dropdownListData",r.deviceTypesData),e.xp6(4),e.Q6J("validations",!(r.transition_border&&null==r.form.value.serial_number||""==r.form.value.serial_number)),e.xp6(2),e.Q6J("validations",!(r.transition_border&&0==r.form.controls.imei.valid)),e.xp6(8),e.Q6J("dropdownListData",r.providerData))},dependencies:[v.O5,m.t3,m.SK,_.Lr,d._Y,d.JJ,d.JL,d.sg,d.u,p._L,b.y,D.v],styles:[".add-device{margin-left:15%;margin-top:5%}"]}),o})();var C=t(91083),T=t(29193);const y=[{path:"",component:A}];let S=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[v.ez,C.T,c.Bz.forChild(y),d.u5,d.UX,p.IJ,T.m,c.Bz]}),o})()}}]);