"use strict";(self.webpackChunktemplate_rpm_adnare=self.webpackChunktemplate_rpm_adnare||[]).push([[751],{1684:(M,C,l)=>{l.d(C,{j:()=>a});var t=l(2843),p=l(529),g=l(7414),h=l(262),O=l(4650),w=l(4226);let a=(()=>{class n{constructor(i,r){this.http=i,this.settingsService=r,this.opened=!1,this.prevIndexId=null,this.baseUrl="",this.token="",this.patient_id=null,this.headers=new p.WM({"Content-Type":"application/json",charset:"UTF-8",Authorization:"Bearer "+this.token}),this.baseUrl=this.settingsService.api_baseURL}getBillingStatusDropdown(){return this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),this.http.get(this.baseUrl+"/api/Repository/get_lkp_billing_status",{headers:this.headers}).pipe((0,g.V)(1e6),(0,h.K)(i=>401===i.status?(window.open(window.location.origin,"_self"),(0,t._)("Unauthorized")):(0,t._)(i)))}getBillingInsuranceDropdown(){return this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),this.http.get(this.baseUrl+"/api/Repository/get_lkp_billing_insurance_type",{headers:this.headers}).pipe((0,g.V)(1e6),(0,h.K)(i=>401===i.status?(window.open(window.location.origin,"_self"),(0,t._)("Unauthorized")):(0,t._)(i)))}getProviderReport(i){this.headers.set("Authorization","Bearer "+localStorage.getItem("token"));let r=new p.LE;return r=i,this.http.get(this.baseUrl+"/api/Billing/sp_grid_provider_reports",{headers:this.headers,params:r}).pipe((0,g.V)(1e6),(0,h.K)(c=>401===c.status?(window.open(window.location.origin,"_self"),(0,t._)("Unauthorized")):(0,t._)(c)))}getHomeCareReport(i){this.headers.set("Authorization","Bearer "+localStorage.getItem("token"));let r=new p.LE;return r=i,this.http.get(this.baseUrl+"/api/Billing/sp_grid_home_care_reports",{headers:this.headers,params:r}).pipe((0,g.V)(1e6),(0,h.K)(c=>401===c.status?(window.open(window.location.origin,"_self"),(0,t._)("Unauthorized")):(0,t._)(c)))}downloadProviderReport(i){return this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),this.http.get(this.baseUrl+"/api/Billing/download_provider_reports?rpm_billing_id="+i,{headers:this.headers}).pipe((0,g.V)(1e6),(0,h.K)(r=>401===r.status?(window.open(window.location.origin,"_self"),(0,t._)("Unauthorized")):(0,t._)(r)))}downloadHomeCareReport(i){return this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),this.http.get(this.baseUrl+"/api/Billing/download_home_care_reports?rpm_billing_id="+i,{headers:this.headers}).pipe((0,g.V)(1e6),(0,h.K)(r=>401===r.status?(window.open(window.location.origin,"_self"),(0,t._)("Unauthorized")):(0,t._)(r)))}getHomeCareDropdown(i){return this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),this.http.get(this.baseUrl+"/api/Repository/get_home_care?entity_id="+i,{headers:this.headers}).pipe((0,g.V)(1e6),(0,h.K)(r=>401===r.status?(window.open(window.location.origin,"_self"),(0,t._)("Unauthorized")):(0,t._)(r)))}}return n.\u0275fac=function(i){return new(i||n)(O.LFG(p.eN),O.LFG(w.g))},n.\u0275prov=O.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},1453:(M,C,l)=>{l.d(C,{m:()=>x});var t=l(4650),p=l(433),g=l(7623),h=l(4707),O=l(8372),w=l(6895),a=l(6773),n=l(834),s=l(6163);const i=["fileList"];function r(_,E){if(1&_&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&_){const e=t.oxw(2);t.Q6J("ngbTooltip",e.error_message),t.xp6(1),t.hij("",e.error_message," ")}}const c=function(_){return{"animated-border":_}};function b(_,E){if(1&_){const e=t.EpF();t.TgZ(0,"div",1),t.ALo(1,"safeStyle"),t.TgZ(2,"label",2),t.ALo(3,"safeStyle"),t.ALo(4,"safeStyle"),t.ALo(5,"safeStyle"),t.ALo(6,"safeStyle"),t.qZA(),t.TgZ(7,"i",3),t.NdJ("click",function(v){t.CHM(e);const L=t.oxw();return t.KtG(L.onClick(v))}),t.qZA(),t.TgZ(8,"img",4),t.NdJ("click",function(v){t.CHM(e);const L=t.oxw();return t.KtG(L.onClick(v))}),t.qZA(),t.TgZ(9,"nz-date-picker",5),t.NdJ("ngModelChange",function(v){t.CHM(e);const L=t.oxw();return t.KtG(L.onInputChange(v))}),t.ALo(10,"async"),t.qZA(),t.YNc(11,r,2,2,"span",6),t.qZA()}if(2&_){const e=t.oxw();t.Udp("width",e.width)("height",e.height)("--tooltip_background_color",t.lcZ(1,49,e.tooltip_background_color)),t.xp6(2),t.Udp("background-color",t.lcZ(3,51,e.label_background_color))("color",t.lcZ(4,53,e.label_color))("--label_background_color",t.lcZ(5,55,e.label_background_color))("--label_font_weight",t.lcZ(6,57,e.label_font_weight)),t.Q6J("placement",e.label_placement)("ngbTooltip",e.label_tooltip)("innerHTML",e.HTMLasString,t.oJD),t.xp6(5),t.Tol(e.icon),t.Udp("--align_right_icon",e.align_right_icon)("--icon_color",e.icon_color)("--align_left_icon",e.align_left_icon),t.Q6J("placement",e.icon_placement)("ngbTooltip",e.icon_tooltip),t.xp6(1),t.Udp("--align_right_icon",e.align_right_icon)("--align_left_icon",e.align_left_icon),t.Q6J("src",e.icon_src,t.LSH)("placement",e.icon_placement)("ngbTooltip",e.icon_tooltip),t.xp6(1),t.Udp("--padding_left_icon",e.padding_left_icon)("--padding_right_icon",e.padding_right_icon)("--align_right_date_icon",e.align_right_date_icon)("--align_left_date_icon",e.align_left_date_icon),t.Q6J("nzDisabled",e.disabled)("ngModel",t.lcZ(10,59,e.input))("ngClass",t.VKq(61,c,!e.validations))("disabled",e.disabled)("maxlength",e.maxlength),t.uIk("accesskey",e.accesskey),t.xp6(2),t.Q6J("ngIf",!e.validations&&null!=e.error_message&&""!=e.error_message)}}let x=(()=>{class _{constructor(){this.today=new Date,this.placeholder="",this.validations=!0,this.error_message="",this.type="text",this.debounceTime=500,this.disabled=!1,this.onIconClick=new t.vpe,this.input=new h.t(1),this.disabledDate=e=>(0,g.Z)(e,this.today)>0,this.subscriptions=[]}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouch=e}writeValue(e){this.input.next(e)}onInputChange(e){this.input.next(e)}onClick(e){this.onIconClick.emit(e)}ngOnInit(){if((null==this.label_color||""===this.label_color)&&(this.label_color="#BD123E"),(null==this.icon_color||""===this.icon_color)&&(this.icon_color="#BD123E"),(null==this.label_font_weight||""===this.label_font_weight)&&(this.label_font_weight="bold"),null!=this.label&&(this.HTMLasString=this.label,null!=this.accesskey&&this.label.toLowerCase().includes(this.accesskey.toLowerCase()))){var e=this.label.indexOf(this.accesskey);-1==e?-1!=(e=this.label.indexOf(this.accesskey.toLowerCase()))&&(this.HTMLasString=this.label.substring(0,e)+"<u>"+this.accesskey.toLowerCase()+"</u>"+this.label.substring(e+1)):this.HTMLasString=this.label.substring(0,e)+"<u>"+this.accesskey+"</u>"+this.label.substring(e+1)}null!=this.align_icon&&"left"==this.align_icon&&"date"==this.type?(this.align_left_date_icon="6px",this.align_right_date_icon="0",this.padding_left_icon="19px",this.padding_right_icon="0px",this.align_left_icon="6px"):null!=this.align_icon&&"left"==this.align_icon?(this.align_left_icon="10px",this.padding_left_icon="25px",this.padding_right_icon="0px"):(this.padding_left_icon="0px",this.padding_right_icon="25px",this.align_right_icon="10px",this.align_right_date_icon="6px"),null==this.label_background_color&&(this.label_background_color="white"),null==this.tooltip_background_color&&(this.tooltip_background_color="black"),this.subscriptions.push(this.input.pipe((0,O.b)(1e3)).subscribe(m=>{this.onChange(m)}))}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}}return _.\u0275fac=function(e){return new(e||_)},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-ad-custom-date"]],viewQuery:function(e,m){if(1&e&&t.Gf(i,5),2&e){let v;t.iGM(v=t.CRH())&&(m.fileList=v.first)}},inputs:{inputValue:"inputValue",label:"label",forLabel:"forLabel",placeholder:"placeholder",accesskey:"accesskey",input_tooltip_placement:"input_tooltip_placement",input_tooltip:"input_tooltip",label_placement:"label_placement",label_color:"label_color",label_font_weight:"label_font_weight",icon_color:"icon_color",icon_placement:"icon_placement",icon_src:"icon_src",align_icon:"align_icon",width:"width",height:"height",align_right_icon:"align_right_icon",HTMLasString:"HTMLasString",align_left_icon:"align_left_icon",align_left_date_icon:"align_left_date_icon",align_right_date_icon:"align_right_date_icon",padding_left_icon:"padding_left_icon",padding_right_icon:"padding_right_icon",validations:"validations",error_message:"error_message",icon:"icon",label_background_color:"label_background_color",tooltip_background_color:"tooltip_background_color",label_tooltip:"label_tooltip",icon_tooltip:"icon_tooltip",type:"type",debounceTime:"debounceTime",maxlength:"maxlength",disabled:"disabled"},outputs:{onIconClick:"onIconClick"},features:[t._Bn([{provide:p.JU,useExisting:(0,t.Gpc)(()=>_),multi:!0}])],decls:1,vars:1,consts:[["class","textOnInput",3,"width","height","--tooltip_background_color",4,"ngIf"],[1,"textOnInput"],["for","inputText",3,"placement","ngbTooltip","innerHTML"],[3,"placement","ngbTooltip","click"],[3,"src","placement","ngbTooltip","click"],["nzAllowClear","false","nzPlaceHolder","mm/dd/yyyy","nzFormat","MM/dd/yyyy",1,"form-control",3,"nzDisabled","ngModel","ngClass","disabled","maxlength","ngModelChange"],["class","error-message",3,"ngbTooltip",4,"ngIf"],[1,"error-message",3,"ngbTooltip"]],template:function(e,m){1&e&&t.YNc(0,b,12,63,"div",0),2&e&&t.Q6J("ngIf","checkbox"!=m.type)},dependencies:[w.mk,w.O5,a._L,p.JJ,p.nD,p.On,n.uw,w.Ov,s.i],styles:['.textOnInput[_ngcontent-%COMP%]{position:relative;display:inline-block;width:100%}.textOnInput[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute;top:-10px;left:5px;font-weight:var(--label_font_weight)}.textOnInput[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after{content:" ";background-color:var(--label-background-color);width:100%;height:13px;position:absolute;left:0;bottom:0;z-index:-1}label[_ngcontent-%COMP%]{font-size:11px;font-weight:800;display:inline-block;margin-bottom:.5rem;border-radius:5px;padding-left:5px;padding-right:5px}[_nghost-%COMP%]     .ant-picker{text-indent:5px;border:1px solid #565759;padding-right:var(--padding_right_icon);padding-left:var(--padding_left_icon);box-sizing:border-box;box-shadow:2px 2px 4px #90909066;align-items:center}.textOnInput[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{position:absolute;top:calc(50% - .4em);right:var(--align_right_icon);left:var(--align_left_icon);color:var(--icon-color)}.textOnInput[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;top:calc(50% - .4em);right:var(--align_right_icon);left:var(--align_left_icon)}input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}[_nghost-%COMP%]     .ant-picker:hover{border:1px solid #F28705;border-color:#f28705;outline:none}[_nghost-%COMP%]     .ant-picker:focus{border:1px solid #F28705;border-color:#f28705;outline:none}[_nghost-%COMP%]     .ant-picker input:hover{border:none;outline:none}[_nghost-%COMP%]     .ant-picker input:active{border:none;outline:none}[_nghost-%COMP%]     .ant-picker input:focus{border:none;outline:none}[_nghost-%COMP%]     .ant-picker input{font-size:1em;outline:none;border:none;align-items:center}[_nghost-%COMP%]     .tooltip{font-size:.7rem}[_nghost-%COMP%]     .tooltip-inner{background-color:var(--tooltip_background_color)!important}[_nghost-%COMP%]     .bs-tooltip-auto[x-placement^=right] .arrow:after, .bs-tooltip-right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:after{border-right-color:var(--tooltip_background_color)!important}[_nghost-%COMP%]     .bs-tooltip-auto[x-placement^=left] .arrow:before, .bs-tooltip-left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:before{border-left-color:var(--tooltip_background_color)!important}[_nghost-%COMP%]     .bs-tooltip-auto[x-placement^=top] .arrow:before, .bs-tooltip-top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:before{border-top-color:var(--tooltip_background_color)!important}[_nghost-%COMP%]     .bs-tooltip-auto[x-placement^=bottom] .arrow:before, .bs-tooltip-bottom[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:before{border-bottom-color:var(--tooltip_background_color)!important}.textOnInput[_ngcontent-%COMP%]   .checkbox-div[_ngcontent-%COMP%]{text-indent:5px;padding-right:30px;box-sizing:border-box;border:1px solid #565759;border-radius:4px;width:100%;height:31px}[_nghost-%COMP%]     .anticon{display:none}']}),_})()},728:(M,C,l)=>{l.d(C,{v:()=>L});var t=l(4650),p=l(433),g=l(2843),h=l(529),O=l(7414),w=l(262),a=l(4226),n=l(2510);let s=(()=>{class d{constructor(o,u,f){this.http=o,this.settingsService=u,this.router=f,this.opened=!1,this.prevIndexId=null,this.baseUrl="",this.token="",this.headers=new h.WM({"Content-Type":"application/json",charset:"UTF-8",Authorization:"Bearer "+this.token}),this.baseUrl=this.settingsService.api_baseURL}loadDataFromApi(o,u){return this.headers.set("Authorization","Bearer "+localStorage.getItem("token")),this.http.get(this.baseUrl+u+"?user_id="+o,{headers:this.headers}).pipe((0,O.V)(1e6),(0,w.K)(f=>401===f.status?(window.open(window.location.origin,"_self"),(0,g._)("Unauthorized")):(0,g._)(f)))}}return d.\u0275fac=function(o){return new(o||d)(t.LFG(h.eN),t.LFG(a.g),t.LFG(n.F0))},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();var i=l(5226),r=l.n(i),c=l(6895),b=l(6773),x=l(8796),_=l(6163);const E=["fileList"];function e(d,T){if(1&d&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&d){const o=t.oxw(2);t.Q6J("ngbTooltip",o.error_message),t.xp6(1),t.hij("",o.error_message," ")}}const m=function(d){return{"animated-border-dropdown":d}};function v(d,T){if(1&d){const o=t.EpF();t.TgZ(0,"div",1),t.ALo(1,"safeStyle"),t.TgZ(2,"label",2),t.ALo(3,"safeStyle"),t.ALo(4,"safeStyle"),t.ALo(5,"safeStyle"),t.ALo(6,"safeStyle"),t.qZA(),t.TgZ(7,"i",3),t.ALo(8,"safeStyle"),t.qZA(),t.TgZ(9,"ng-select",4,5),t.NdJ("ngModelChange",function(f){t.CHM(o);const A=t.oxw();return t.KtG(A.input=f)})("change",function(f){t.CHM(o);const A=t.oxw();return t.KtG(A.onDropdownChange(f))})("open",function(){t.CHM(o);const f=t.oxw();return t.KtG(null==f.dropdownListData?f.LoadDropdownData():"")}),t.qZA(),t.YNc(11,e,2,2,"span",6),t.qZA()}if(2&d){const o=t.oxw();t.Udp("width",o.width)("height",o.height)("--tooltip_background_color",t.lcZ(1,38,o.tooltip_background_color)),t.xp6(2),t.Udp("background-color",t.lcZ(3,40,o.label_background_color))("color",t.lcZ(4,42,o.label_color))("--label_background_color",t.lcZ(5,44,o.label_background_color))("--label_font_weight",t.lcZ(6,46,o.label_font_weight)),t.Q6J("placement",o.label_placement)("ngbTooltip",o.label_tooltip)("innerHTML",o.HTMLasString,t.oJD),t.xp6(5),t.Tol(o.icon),t.Udp("--align_right_icon",o.align_right_icon)("--align_left_icon",o.align_left_icon)("--icon_color",t.lcZ(8,48,o.icon_color)),t.Q6J("placement",o.icon_placement)("ngbTooltip",o.icon_tooltip),t.xp6(2),t.Q6J("items",o.dropdownListData)("bindLabel",o.bindLabel)("virtualScroll",!0)("ngClass",t.VKq(50,m,!o.validations))("ngModel",o.input)("placeholder",o.dropdown_placeholder)("multiple",o.multiple)("clearable",o.clearable)("readonly",o.readonly),t.uIk("accesskey",o.accesskey),t.xp6(2),t.Q6J("ngIf",!o.validations&&null!=o.error_message&&""!=o.error_message)}}let L=(()=>{class d{constructor(o){this.adCustomService=o,this.autofocus=!1,this.dropdown_placeholder="",this.validations=!0,this.error_message="",this.dropdown_background_color="transparent",this.readonly=!1,this.type="text",this.debounceTime=500,this.multiple=!1,this.clearable=!1,this.dropdown_width="100%",this.dropdown_height="35px",this.onModelChange=new t.vpe,this.subscriptions=[]}LoadDropdownData(){null!=this.api_name&&null!=this.api_name&&""!=this.api_name&&this.LoadDropdown(),console.log("dropdown opened...............")}writeValue(o){this.input=o}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouch=o}setDisabledState(o){}onDropdownChange(o){this.onChange(this.input),this.onModelChange.emit(o)}onClick(o){}ngOnInit(){if(null!=this.align_icon&&"left"==this.align_icon&&"date"==this.type?(this.align_left_date_icon="6px",this.align_right_date_icon="0",this.padding_left_icon="19px",this.padding_right_icon="0px",this.align_left_icon="6px"):null!=this.align_icon&&"left"==this.align_icon?(this.align_left_icon="10px",this.padding_left_icon="30px",this.padding_right_icon="0px"):(this.padding_left_icon="0px",this.padding_right_icon="30px",this.align_right_icon="10px",this.align_right_date_icon="6px"),null!=this.label&&(this.HTMLasString=this.label,null!=this.accesskey&&this.label.toLowerCase().includes(this.accesskey.toLowerCase()))){var o=this.label.indexOf(this.accesskey);-1==o?-1!=(o=this.label.indexOf(this.accesskey.toLowerCase()))&&(this.HTMLasString=this.label.substring(0,o)+"<u>"+this.accesskey.toLowerCase()+"</u>"+this.label.substring(o+1)):this.HTMLasString=this.label.substring(0,o)+"<u>"+this.accesskey+"</u>"+this.label.substring(o+1)}null==this.label_background_color&&(this.label_background_color="white"),null==this.icon_color&&(this.icon_color="#BD123E"),(null==this.label_font_weight||""===this.label_font_weight)&&(this.label_font_weight="bold"),null==this.tooltip_background_color&&(this.tooltip_background_color="black")}ngAfterViewInit(){1==this.autofocus&&this.fileList.focus()}ngOnDestroy(){this.subscriptions.forEach(o=>o.unsubscribe())}LoadDropdown(){var o=localStorage.getItem("user_id");this.adCustomService.loadDataFromApi(o,this.api_name).subscribe(u=>{1==u.success?this.dropdownListData=u.data:r().fire({icon:"error",text:u.message})})}}return d.\u0275fac=function(o){return new(o||d)(t.Y36(s))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-ad-custom-dropdown"]],viewQuery:function(o,u){if(1&o&&t.Gf(E,5),2&o){let f;t.iGM(f=t.CRH())&&(u.fileList=f.first)}},inputs:{label:"label",autofocus:"autofocus",forLabel:"forLabel",dropdown_placeholder:"dropdown_placeholder",accesskey:"accesskey",validations:"validations",error_message:"error_message",dropdown_background_color:"dropdown_background_color",label_placement:"label_placement",label_color:"label_color",label_font_weight:"label_font_weight",width:"width",height:"height",HTMLasString:"HTMLasString",label_background_color:"label_background_color",icon_color:"icon_color",readonly:"readonly",tooltip_background_color:"tooltip_background_color",label_tooltip:"label_tooltip",icon_tooltip:"icon_tooltip",dropdownListData:"dropdownListData",dropdown_text_color:"dropdown_text_color",type:"type",debounceTime:"debounceTime",multiple:"multiple",clearable:"clearable",bindLabel:"bindLabel",dropdown_width:"dropdown_width",dropdown_height:"dropdown_height",align_left_icon:"align_left_icon",align_left_date_icon:"align_left_date_icon",align_right_date_icon:"align_right_date_icon",padding_left_icon:"padding_left_icon",padding_right_icon:"padding_right_icon",align_icon:"align_icon",align_right_icon:"align_right_icon",icon_placement:"icon_placement",icon_src:"icon_src",api_name:"api_name",icon:"icon",method_name:"method_name"},outputs:{onModelChange:"onModelChange"},features:[t._Bn([{provide:p.JU,useExisting:(0,t.Gpc)(()=>d),multi:!0},s])],decls:1,vars:1,consts:[["class","textOnInput",3,"width","height","--tooltip_background_color",4,"ngIf"],[1,"textOnInput"],["for","inputText",3,"placement","ngbTooltip","innerHTML"],[3,"placement","ngbTooltip"],["bindValue","id","autofocus","autofocus","appendTo","body",1,"custom",3,"items","bindLabel","virtualScroll","ngClass","ngModel","placeholder","multiple","clearable","readonly","ngModelChange","change","open"],["fileList",""],["class","error-message",3,"ngbTooltip",4,"ngIf"],[1,"error-message",3,"ngbTooltip"]],template:function(o,u){1&o&&t.YNc(0,v,12,52,"div",0),2&o&&t.Q6J("ngIf","checkbox"!=u.type)},dependencies:[c.mk,c.O5,b._L,x.w9,p.JJ,p.On,_.i],styles:['.textOnInput[_ngcontent-%COMP%]{position:relative;color:#aaa;font-size:16px;display:inline-block;width:100%}.textOnInput[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute;top:-10px;left:5px;z-index:1;color:var(--label-color);font-weight:var(--label_font_weight)}.textOnInput[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after{content:" ";background-color:var(--label-background-color);width:100%;height:13px;position:absolute;left:0;bottom:0;z-index:-1}label[_ngcontent-%COMP%]{font-size:11px;font-weight:800;display:inline-block;margin-bottom:.5rem;border-radius:5px;padding-left:5px;padding-right:5px}.textOnInput[_ngcontent-%COMP%]   ng-select[_ngcontent-%COMP%]{text-indent:5px;box-sizing:border-box}  .ng-select .ng-select-container{border:1px solid black}[_nghost-%COMP%]     .ng-select.ng-select-opened .ng-select-container{z-index:0}[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container, .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{margin-left:15px}[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{margin-left:15px}[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container{margin-left:15px}.textOnInput[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;top:calc(50% - .5em);right:var(--align_right_icon);left:var(--align_left_icon);z-index:1}.textOnInput[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{position:absolute;top:calc(50% - .4em);right:var(--align_right_icon);left:var(--align_left_icon);z-index:1;color:var(--icon-color)}']}),d})()},8938:(M,C)=>{var t=function(){function a(){}return a.EOL="\r\n",a.BOM="\ufeff",a.DEFAULT_FIELD_SEPARATOR=",",a.DEFAULT_DECIMAL_SEPARATOR=".",a.DEFAULT_QUOTE='"',a.DEFAULT_SHOW_TITLE=!1,a.DEFAULT_TITLE="My Report",a.DEFAULT_FILENAME="mycsv.csv",a.DEFAULT_SHOW_LABELS=!1,a.DEFAULT_USE_BOM=!0,a.DEFAULT_HEADER=[],a.DEFAULT_OBJ_HEADER={},a.DEFAULT_USE_OBJ_HEADER=!1,a.DEFAULT_USE_HEADER=!1,a.DEFAULT_NO_DOWNLOAD=!1,a.DEFAULT_NULL_TO_EMPTY_STRING=!1,a}();C.hd={filename:t.DEFAULT_FILENAME,fieldSeparator:t.DEFAULT_FIELD_SEPARATOR,quoteStrings:t.DEFAULT_QUOTE,decimalseparator:t.DEFAULT_DECIMAL_SEPARATOR,showLabels:t.DEFAULT_SHOW_LABELS,showTitle:t.DEFAULT_SHOW_TITLE,title:t.DEFAULT_TITLE,useBom:t.DEFAULT_USE_BOM,headers:t.DEFAULT_HEADER,objHeader:t.DEFAULT_OBJ_HEADER,useObjHeader:t.DEFAULT_USE_OBJ_HEADER,useHeader:t.DEFAULT_USE_HEADER,noDownload:t.DEFAULT_NO_DOWNLOAD,nullToEmptyString:t.DEFAULT_NULL_TO_EMPTY_STRING};var p=function(){function a(n,s,i){this.csv="";var r=i||{};this.data="object"!=typeof n?JSON.parse(n):n,this._options=function w(a){for(var n=[],s=1;s<arguments.length;s++)n[s-1]=arguments[s];for(var i,c,r=O(a),b=1;b<arguments.length;b++){for(var x in i=Object(arguments[b]))g.call(i,x)&&(r[x]=i[x]);if(Object.getOwnPropertySymbols){c=Object.getOwnPropertySymbols(i);for(var _=0;_<c.length;_++)h.call(i,c[_])&&(r[c[_]]=i[c[_]])}}return r}({},C.hd,r),this._options.filename&&(this._options.filename=s),this.generateCsv()}return a.prototype.generateCsv=function(){if(this._options.useBom&&(this.csv+=t.BOM),this._options.showTitle&&(this.csv+=this._options.title+"\r\n\n"),this._options.useObjHeader&&Object.keys(this._options.objHeader).length>0?(this.getHeaderFromObj(),this.getBodyAccordingHeader()):(this.getHeaders(),this.getBody()),""!=this.csv){if(this._options.noDownload)return this.csv;var n=new Blob([this.csv],{type:"text/csv;charset=utf8;"});if(navigator.msSaveBlob){var s=this._options.filename.replace(/ /g,"_")+".csv";navigator.msSaveBlob(n,s)}else{encodeURI(this.csv);var r=document.createElement("a");r.href=URL.createObjectURL(n),r.setAttribute("target","_blank"),r.setAttribute("visibility","hidden"),r.download=this._options.filename.replace(/ /g,"_")+".csv",document.body.appendChild(r),r.click(),document.body.removeChild(r)}}else console.log("Invalid data")},a.prototype.getHeaders=function(){var n=this;if(this._options.headers.length>0){var i=this._options.headers.reduce(function(r,c){return r+c+n._options.fieldSeparator},"");i=i.slice(0,-1),this.csv+=i+t.EOL}},a.prototype.getHeaderFromObj=function(){var n=this;if(Object.keys(this._options.objHeader).length>0){var s="";Object.keys(this._options.objHeader).forEach(function(i){s+=n._options.objHeader[i]+n._options.fieldSeparator}),s=s.slice(0,-1),this.csv+=s+t.EOL}},a.prototype.getBodyAccordingHeader=function(){for(var n=this,s=function(c){var b="";i._options.useObjHeader&&Object.keys(i._options.objHeader).length>0&&Object.keys(i._options.objHeader).forEach(function(x){b+=n.formatData(n.data[c][x])+n._options.fieldSeparator}),b=b.slice(0,-1),i.csv+=b+t.EOL},i=this,r=0;r<this.data.length;r++)s(r)},a.prototype.getBody=function(){for(var n=0;n<this.data.length;n++){var s="";if(this._options.useHeader&&this._options.headers.length>0)for(var i=0,r=this._options.headers;i<r.length;i++)s+=this.formatData(this.data[n][c=r[i]])+this._options.fieldSeparator;else for(var c in this.data[n])s+=this.formatData(this.data[n][c])+this._options.fieldSeparator;s=s.slice(0,-1),this.csv+=s+t.EOL}},a.prototype.formatData=function(n){return"locale"===this._options.decimalseparator&&a.isFloat(n)?n.toLocaleString():"."!==this._options.decimalseparator&&a.isFloat(n)?n.toString().replace(".",this._options.decimalseparator):"string"==typeof n?(n=n.replace(/"/g,'""'),(this._options.quoteStrings||n.indexOf(",")>-1||n.indexOf("\n")>-1||n.indexOf("\r")>-1)&&(n=this._options.quoteStrings+n+this._options.quoteStrings),n):this._options.nullToEmptyString?n||(n=""):"boolean"==typeof n?n?"TRUE":"FALSE":n},a.prototype.getCsvData=function(){return this.csv},a.isFloat=function(n){return+n===n&&(!isFinite(n)||Boolean(n%1))},a}();C.Sv=p;var g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;function O(a){if(null==a)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}}}]);