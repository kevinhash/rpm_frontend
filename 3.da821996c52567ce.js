"use strict";(self.webpackChunktemplate_rpm_adnare=self.webpackChunktemplate_rpm_adnare||[]).push([[3],{3800:(D,l,t)=>{t.r(l),t.d(l,{AddMacrosModule:()=>T});var m=t(6895),c=t(2510),f=t(4489),s=t(433),u=t(6773),h=t(8740),v=t(5226),a=t.n(v),e=t(4650),g=t(3023),b=t(9503),p=t(3679),M=t(6704),C=t(1237),A=t(728),_=t(3345);function S(i,n){1&i&&(e.TgZ(0,"div",19),e._uU(1," Add Macros "),e.qZA())}function Z(i,n){1&i&&(e.TgZ(0,"div",19),e._uU(1," Edit Macros "),e.qZA())}const I=[{path:"",component:(()=>{class i{constructor(r,o,d,y){this.formBuilder=r,this.router=o,this.macroService=d,this.patientService=y,this.disableInput=!1,this.checkFormValid=!0,this.transition_border=!1,this.buildForm()}ngOnInit(){this.getEnterpriseSearchDropdown(),this.method=this.macroService.method,this.form.value.description=this.form.value.description.value,null!=this.macroService.macros_id&&null!=this.macroService.macros_id&&(this.disableInput=!0,this.getMacrosInfo())}getMacrosInfo(){this.macroService.getMacrosInfoById(this.macroService.macros_id).subscribe(r=>{1==r.success?this.form.patchValue(r.data):a().fire({icon:"error",text:r.message})})}addMacros(){this.transition_border=!0,this.form.valid?(this.addMacrosData={user_id:localStorage.getItem("user_id"),short_cut_key:this.form.value.short_cut_key,description:this.form.value.description,macros_id:this.macroService.macros_id,enterprise_id:this.form.value.enterprise_id},null!=this.macroService.macros_id&&null!=this.macroService.macros_id?this.macroService.updateMacros(this.addMacrosData).subscribe(r=>{1==r.success?(a().fire({icon:"success",text:r.message}),this.router.navigate(["/macros-search"])):a().fire({icon:"error",text:r.message})}):this.macroService.addMacros(this.addMacrosData).subscribe(r=>{1==r.success?(a().fire({icon:"success",text:r.message}),this.router.navigate(["/macros-search"])):a().fire({icon:"error",text:r.message})})):a().fire({icon:"error",text:"Check all required feilds."})}getEnterpriseSearchDropdown(){this.userId=localStorage.getItem("user_id"),this.patientService.getActiveEnterpriseDropdownData(this.userId).subscribe(r=>{1==r.success?(this.enterpriseData=r.data,1==this.enterpriseData.length&&"update"!==this.method&&this.form.controls.enterprise_id.setValue(this.enterpriseData[0].id)):a().fire({icon:"error",text:r.message})})}cancel(){this.form.reset(),this.macroService.macros_id=null,this.router.navigate(["/macros-search"])}clear(){this.form.reset()}buildForm(){this.form=this.formBuilder.group({enterprise_id:[{value:null},[s.kI.required]],description:[{value:null},[s.kI.required]],short_cut_key:[{value:null,disabled:this.disableInput},[s.kI.required]]})}}return i.\u0275fac=function(r){return new(r||i)(e.Y36(s.QS),e.Y36(c.F0),e.Y36(g.f),e.Y36(b.e))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-macros"]],decls:23,vars:8,consts:[["nz-row","",1,"add-device"],["nz-form","",1,"login-form",3,"formGroup"],[1,"formBox-full","viewMinWidth"],[1,"screen-header"],["class","screen-name",4,"ngIf"],[1,"button-container"],["ngbTooltip","Clear","tooltipClass","custom-search-tooltip-color",1,"screen-header-btn","margin-left","margin-right",3,"click"],["ngbTooltip","Save","tooltipClass","custom-search-tooltip-color",1,"screen-header-btn","margin-left","margin-right",3,"click"],[1,"fa","fa-floppy-disk","icon-padding"],["ngbTooltip","Cancel","tooltipClass","custom-search-tooltip-color",1,"screen-header-btn","margin-right",3,"click"],[1,"fa","fa-xmark","icon-padding"],["nz-col","",1,"screen-criteria"],[1,"main"],[1,"row"],[1,"col-lg-6","col-md-6","col-lg-6","col-lg-6"],["label","Entity *","formControlName","enterprise_id","dropdown_placeholder","Entity","bindLabel","name","icon","fa fa-square-plus","align_icon","left",3,"validations","dropdownListData"],["type","text","placeholder","Shortcut","label","Shortcut *","formControlName","short_cut_key","align_icon","left",3,"disabled","validations"],[1,"col-lg-12","col-md-12","col-lg-12","col-lg-12"],["placeholder","Description","label","Description *","formControlName","description","align_icon","left",3,"validations"],[1,"screen-name"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"div",3),e.YNc(4,S,2,0,"div",4),e.YNc(5,Z,2,0,"div",4),e.qZA(),e.TgZ(6,"div",5)(7,"button",6),e.NdJ("click",function(){return o.clear()}),e._uU(8," Clear "),e.qZA(),e.TgZ(9,"button",7),e.NdJ("click",function(){return o.addMacros()}),e._UZ(10,"i",8),e.qZA(),e.TgZ(11,"button",9),e.NdJ("click",function(){return o.cancel()}),e._UZ(12,"i",10),e.qZA()(),e.TgZ(13,"div",11)(14,"div",12)(15,"div",13)(16,"div",14),e._UZ(17,"app-ad-custom-dropdown",15),e.qZA(),e.TgZ(18,"div",14),e._UZ(19,"app-ad-custom-input",16),e.qZA()(),e.TgZ(20,"div",13)(21,"div",17),e._UZ(22,"app-ad-custom-text-area",18),e.qZA()()()()()()()),2&r&&(e.xp6(1),e.Q6J("formGroup",o.form),e.xp6(3),e.Q6J("ngIf","create"==o.method),e.xp6(1),e.Q6J("ngIf","update"==o.method),e.xp6(12),e.Q6J("validations",!(o.transition_border&&(null==o.form.value.enterprise_id||null==o.form.value.enterprise_id||""==o.form.value.enterprise_id)))("dropdownListData",o.enterpriseData),e.xp6(2),e.Q6J("disabled",o.disableInput)("validations",!(o.transition_border&&(null==o.form.value.short_cut_key||null==o.form.value.short_cut_key||""==o.form.value.short_cut_key))),e.xp6(3),e.Q6J("validations",!(o.transition_border&&(null==o.form.value.description||null==o.form.value.description||""==o.form.value.description))))},dependencies:[m.O5,p.t3,p.SK,M.Lr,s._Y,s.JJ,s.JL,s.sg,s.u,u._L,C.y,A.v,_.E],styles:[".main[_ngcontent-%COMP%]{background-color:#e8dbfa;border-radius:10px;padding:2% 4% 2% 2%;margin:25px}.sections[_ngcontent-%COMP%]{background-color:#e8dbfa;border-radius:0 10px 10px;padding:2% 4% 2% 2%;margin:25px}.screen-criteria[_ngcontent-%COMP%]{background-color:#fff;border:1px solid rgba(185,136,255,.5)}.add-provider[_ngcontent-%COMP%]{margin-left:5%;margin-top:5%}.error-message[_ngcontent-%COMP%]{position:absolute;left:13px;bottom:-13px;font-size:10px;color:#bd123e;line-height:1;font-weight:700}"]}),i})()}];let T=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.ez,f.T,c.Bz.forChild(I),s.u5,s.UX,u.IJ,h.m,c.Bz]}),i})()}}]);