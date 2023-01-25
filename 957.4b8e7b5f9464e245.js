"use strict";(self.webpackChunktemplate_rpm_adnare=self.webpackChunktemplate_rpm_adnare||[]).push([[957],{41957:(z,c,a)=>{a.r(c),a.d(c,{AddLocationModule:()=>S});var p=a(36895),d=a(62510),g=a(91083),o=a(90433),m=a(46773),_=a(29193),b=a(35226),r=a.n(b),e=a(94650),Z=a(71157),I=a(39503),f=a(73679),h=a(36704),v=a(48521),L=a(31237),A=a(80728);function C(n,s){1&n&&(e.TgZ(0,"div",33),e._uU(1," Add Location "),e.qZA())}function y(n,s){1&n&&(e.TgZ(0,"div",33),e._uU(1," Edit Location "),e.qZA())}const D=[{path:"",component:(()=>{class n{constructor(i,t,l,u){this.formBuilder=i,this.router=t,this.locationService=l,this.patientService=u,this.mask="(000) 000-0000",this.location_phone_no=!0,this.disableInput=!1,this.transition_border=!1,this.disabled_entity=!1,this.buildForm()}ngOnInit(){null!=this.locationService.location_id&&null!=this.locationService.location_id&&this.getLocationInfo(),this.getPracticesSearchDropdown(),this.getEnterpriseSearchDropdown(),this.getPOSDropdown(),this.method=this.locationService.method,"update"==this.method&&(this.disabled_entity=!0)}getLocationInfo(){this.locationService.getLocationInfoById(this.locationService.location_id).subscribe(i=>{1==i.success?(i.data.is_active=i.data.is_active.toString(),this.form.patchValue(i.data)):r().fire({icon:"error",text:i.message})})}getEnterpriseSearchDropdown(){this.userId=localStorage.getItem("user_id"),this.patientService.getActiveEnterpriseDropdownData(this.userId).subscribe(i=>{1==i.success?(this.enterpriseData=i.data,1==this.enterpriseData.length&&"update"!==this.method&&this.form.controls.enterprise_id.setValue(this.enterpriseData[0].id)):r().fire({icon:"error",text:i.message})})}onEnterpriseDropdownChange(i){this.form.controls.practice_id.setValue(null),this.practiceDropdownData=null==this.practiceData?[]:this.practiceData.filter(t=>t.enterprise_id==i.id)}getPracticesSearchDropdown(){this.userId=localStorage.getItem("user_id"),this.patientService.getPracticesDropdownData(this.userId).subscribe(i=>{1==i.success?(this.practiceData=i.data,null!=this.form.value.enterprise_id&&null!=this.form.value.enterprise_id&&(this.practiceDropdownData=this.practiceData.filter(t=>t.enterprise_id==this.form.value.enterprise_id))):r().fire({icon:"error",text:i.message})})}getPOSDropdown(){this.locationService.getPOSDropdown().subscribe(i=>{1==i.success?this.posData=i.data:r().fire({icon:"error",text:i.message})})}addLocation(){this.transition_border=!0,null!==this.form.value.state&&(this.form.value.state.length>2||this.form.value.state.length<2)?r().fire({icon:"error",text:"State should be only 2 characters."}):this.form.valid?(this.addLocationData={user_id:localStorage.getItem("user_id"),location_id:this.locationService.location_id,pos:this.form.value.pos,name:this.form.value.name,practice_id:this.form.value.practice_id,is_active:this.form.value.is_active,npi:this.form.value.npi,address_1:this.form.value.address_1,address_2:this.form.value.address_2,state:this.form.value.state,city:this.form.value.city,zip:this.form.value.zip,zip_ext:this.form.value.zip_ext,phone_number:this.form.value.phone_number},null!=this.locationService.location_id&&null!=this.locationService.location_id?this.locationService.updateLocationInfo(this.addLocationData).subscribe(i=>{1==i.success?(r().fire({icon:"success",text:i.message}),this.router.navigate(["/location-search"])):r().fire({icon:"error",text:i.message})}):this.locationService.addLocation(this.addLocationData).subscribe(i=>{1==i.success?(r().fire({icon:"success",text:i.message}),this.router.navigate(["/location-search"])):r().fire({icon:"error",text:i.message})})):r().fire({icon:"error",text:"Check all required feilds."})}cancel(){this.form.reset(),this.locationService.location_id=null,this.router.navigate(["/location-search"])}clear(){this.buildForm()}buildForm(){this.form=this.formBuilder.group({name:[{value:null,disabled:this.disableInput},[o.kI.required]],npi:[{value:null,disabled:this.disableInput},[o.kI.minLength(10)]],pos:[{value:null,disabled:this.disableInput},[o.kI.required]],enterprise_id:[{value:null,disabled:this.disableInput},[o.kI.required]],practice_id:[{value:null,disabled:this.disableInput},[o.kI.required]],is_active:[{value:"1",disabled:this.disableInput},[o.kI.required]],address_1:[{value:null,disabled:this.disableInput},[o.kI.required]],address_2:[{value:null,disabled:this.disableInput}],phone_number:[{value:null,disabled:this.disableInput},[o.kI.minLength(10)]],state:[{value:null,disabled:this.disableInput},[o.kI.required,o.kI.minLength(2)]],city:[{value:null,disabled:this.disableInput},[o.kI.required]],zip_ext:[{value:null,disabled:this.disableInput},[o.kI.required,o.kI.minLength(4)]],zip:[{value:null,disabled:this.disableInput},[o.kI.required,o.kI.minLength(5)]]})}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(o.QS),e.Y36(d.F0),e.Y36(Z.a),e.Y36(I.e))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-add-location"]],decls:56,vars:19,consts:[["nz-row","",1,"add-device"],["nz-form","",1,"login-form",3,"formGroup"],[1,"formBox-full","viewMinWidth"],[1,"screen-header"],["class","screen-name",4,"ngIf"],[1,"button-container"],["ngbTooltip","Clear","tooltipClass","custom-search-tooltip-color",1,"screen-header-btn","margin-left","margin-right",3,"click"],["ngbTooltip","Save","tooltipClass","custom-search-tooltip-color",1,"screen-header-btn","margin-left","margin-right",3,"click"],[1,"fa","fa-floppy-disk","icon-padding"],["ngbTooltip","Cancel","tooltipClass","custom-search-tooltip-color",1,"screen-header-btn","margin-right",3,"click"],[1,"fa","fa-xmark","icon-padding"],["nz-col","",1,"screen-criteria"],[1,"main"],[1,"row"],[1,"col-lg-3","col-md-3","col-lg-5","col-lg-6"],["label","Entity *","formControlName","enterprise_id","dropdown_placeholder","Entity","bindLabel","name","align_icon","left","icon","fa fa-square-plus",3,"validations","dropdownListData","readonly","onModelChange"],["label","Practice *","formControlName","practice_id","dropdown_placeholder","Practice","bindLabel","name","icon","fa fa-square-plus","align_icon","left",3,"validations","dropdownListData"],["type","text","label","Location Name *","formControlName","name","placeholder","Location Name","icon","fa fa-globe","align_icon","left",3,"validations"],["formControlName","is_active"],["nz-radio","","nzValue","1"],["nz-radio","","nzValue","0"],["label","POS *","formControlName","pos","dropdown_placeholder","POS","bindLabel","name","align_icon","left",3,"validations","dropdownListData"],["type","text","label","NPI","formControlName","npi","maxlength","10","error_message","NPI must consist of atleast 10 digits.","onkeypress","return /[0-9\\-]/i.test(event.key)","placeholder","NPI","align_icon","left",3,"validations"],[1,"screen-name","sub-heading"],[1,"sections"],[1,"col-lg-2","col-md-2","col-lg-3","col-lg-4"],["type","text","placeholder","Address Line 1","label","Address Line 1 *","formControlName","address_1","icon","fa fa-address-card","align_icon","left",3,"validations"],["type","text","placeholder","Address Line 2","label","Address Line 2","formControlName","address_2","icon","fa fa-address-card","align_icon","left"],["placeholder","City","label","City *","icon","fa fa-building","formControlName","city","align_icon","left",3,"validations"],["type","text","placeholder","State","label","State *","maxlength","2","error_message","State must consist of atleast 2 digits.","icon","fa fa-flag","formControlName","state","align_icon","left",3,"validations"],["type","text","maxlength","5","onkeypress","return /[0-9\\-]/i.test(event.key)","placeholder","ZIP","label","ZIP *","formControlName","zip","error_message","Zip must consist of atleast 5 digits.","icon","fa fa-location-crosshairs","align_icon","left",3,"validations"],["type","text","maxlength","4","onkeypress","return /[0-9\\-]/i.test(event.key)","placeholder","ZIP Ext","label","ZIP Ext *","formControlName","zip_ext","error_message","Zip extension must consist of atleast 4 digits.","icon","fa fa-location-crosshairs","align_icon","left",3,"validations"],["type","text","placeholder","Phone No","maxlength","14","error_message","Phone No must consist of atleast 10 digits.","onkeypress","return /[0-9\\-]/i.test(event.key)","label","Phone No","formControlName","phone_number","icon","fa fa-mobile-screen","align_icon","left",3,"mask","validations"],[1,"screen-name"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"div",3),e.YNc(4,C,2,0,"div",4),e.YNc(5,y,2,0,"div",4),e.qZA(),e.TgZ(6,"div",5)(7,"button",6),e.NdJ("click",function(){return t.clear()}),e._uU(8," Clear "),e.qZA(),e.TgZ(9,"button",7),e.NdJ("click",function(){return t.addLocation()}),e._UZ(10,"i",8),e.qZA(),e.TgZ(11,"button",9),e.NdJ("click",function(){return t.cancel()}),e._UZ(12,"i",10),e.qZA()(),e.TgZ(13,"div",11)(14,"div",12)(15,"div",13)(16,"div",14)(17,"app-ad-custom-dropdown",15),e.NdJ("onModelChange",function(u){return t.onEnterpriseDropdownChange(u)}),e.qZA()(),e.TgZ(18,"div",14),e._UZ(19,"app-ad-custom-dropdown",16),e.qZA()(),e.TgZ(20,"div",13)(21,"div",14),e._UZ(22,"app-ad-custom-input",17),e.qZA(),e.TgZ(23,"div",14)(24,"nz-form-item")(25,"nz-radio-group",18)(26,"label",19),e._uU(27,"Active"),e.qZA(),e.TgZ(28,"label",20),e._uU(29,"Inactive"),e.qZA()()()()(),e.TgZ(30,"div",13)(31,"div",14),e._UZ(32,"app-ad-custom-dropdown",21),e.qZA(),e.TgZ(33,"div",14),e._UZ(34,"app-ad-custom-input",22),e.qZA()()(),e.TgZ(35,"div",3)(36,"div",23),e._uU(37," Contact Information "),e.qZA()(),e.TgZ(38,"div",24)(39,"div",13)(40,"div",25),e._UZ(41,"app-ad-custom-input",26),e.qZA(),e.TgZ(42,"div",25),e._UZ(43,"app-ad-custom-input",27),e.qZA(),e.TgZ(44,"div",25),e._UZ(45,"app-ad-custom-input",28),e.qZA()(),e.TgZ(46,"div",13)(47,"div",25),e._UZ(48,"app-ad-custom-input",29),e.qZA(),e.TgZ(49,"div",25),e._UZ(50,"app-ad-custom-input",30),e.qZA(),e.TgZ(51,"div",25),e._UZ(52,"app-ad-custom-input",31),e.qZA()(),e.TgZ(53,"div",13)(54,"div",25),e._UZ(55,"app-ad-custom-input",32),e.qZA()()()()()()()),2&i&&(e.xp6(1),e.Q6J("formGroup",t.form),e.xp6(3),e.Q6J("ngIf","create"==t.method),e.xp6(1),e.Q6J("ngIf","update"==t.method),e.xp6(12),e.Q6J("validations",!(t.transition_border&&null==t.form.value.enterprise_id||""==t.form.value.enterprise_id))("dropdownListData",t.enterpriseData)("readonly",t.disabled_entity),e.xp6(2),e.Q6J("validations",!(t.transition_border&&null==t.form.value.practice_id||""==t.form.value.practice_id))("dropdownListData",t.practiceDropdownData),e.xp6(3),e.Q6J("validations",!(t.transition_border&&null==t.form.value.name||""==t.form.value.name)),e.xp6(10),e.Q6J("validations",!(t.transition_border&&null==t.form.value.pos||""==t.form.value.pos))("dropdownListData",t.posData),e.xp6(2),e.Q6J("validations",!(t.transition_border&&null!=t.form.value.npi&&null!=t.form.value.npi&&""!=t.form.value.npi&&t.form.value.npi.length>0&&t.form.value.npi.length<10)),e.xp6(7),e.Q6J("validations",!(t.transition_border&&null==t.form.value.address_1||""==t.form.value.address_1)),e.xp6(4),e.Q6J("validations",!(t.transition_border&&null==t.form.value.city||""==t.form.value.city)),e.xp6(3),e.Q6J("validations",!(t.transition_border&&(null==t.form.value.state||null==t.form.value.state||""==t.form.value.state||t.form.value.state.length>0&&t.form.value.state.length<2))),e.xp6(2),e.Q6J("validations",!(t.transition_border&&(null==t.form.value.zip||null==t.form.value.zip||""==t.form.value.zip||t.form.value.zip.length>0&&t.form.value.zip.length<5))),e.xp6(2),e.Q6J("validations",!(t.transition_border&&(null==t.form.value.zip_ext||null==t.form.value.zip_ext||""==t.form.value.zip_ext||t.form.value.zip_ext.length>0&&t.form.value.zip_ext.length<4))),e.xp6(3),e.Q6J("mask",t.mask)("validations",!(t.transition_border&&null!=t.form.value.phone_number&&null!=t.form.value.phone_number&&""!=t.form.value.phone_number&&t.form.value.phone_number.length>0&&t.form.value.phone_number.length<10)))},dependencies:[p.O5,f.t3,f.SK,h.Lr,h.Nx,v.Of,v.Dg,o._Y,o.JJ,o.JL,o.nD,o.sg,o.u,m._L,L.y,A.v],styles:[".add-device{margin-left:15%;margin-top:5%}"]}),n})()}];let S=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,g.T,d.Bz.forChild(D),o.u5,o.UX,m.IJ,_.m,d.Bz]}),n})()}}]);