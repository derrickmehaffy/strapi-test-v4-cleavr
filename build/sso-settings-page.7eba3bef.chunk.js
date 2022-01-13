"use strict";(self.webpackChunktest_cleavr=self.webpackChunktest_cleavr||[]).push([[302],{66554:(e,t,a)=>{var r=a(95318),n=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SingleSignOn=void 0;var l=r(a(63038)),o=r(a(59713)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var a=w(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,a&&a.set(e,r);return r}(a(67294)),i=a(68547),s=r(a(84734)),d=a(78862),f=a(19408),c=a(62031),g=a(9008),p=a(49425),m=a(47857),b=a(43808),O=a(34626),h=a(97132),v=r(a(18446)),y=a(26595),S=a(63376),R=r(a(13240)),j=r(a(46718));function w(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(w=function(e){return e?a:t})(e)}function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){(0,o.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=M(M({},R.default.settings.sso),{},{readRoles:R.default.settings.roles.read}),k=function(){var e=(0,h.useIntl)().formatMessage,t=(0,i.useRBAC)(P),a=t.isLoading,r=t.allowedActions,n=r.canUpdate,o=r.canReadRoles,R=(0,S.useSettingsForm)((0,y.getRequestUrl)("providers/options"),j.default,(function(){}),["autoRegister","defaultRole"]),w=(0,l.default)(R,3),E=w[0],M=E.formErrors,k=E.initialData,C=E.isLoading,D=E.modifiedData,L=E.showHeaderButtonLoader,_=(w[1],w[2]),I=_.handleChange,W=_.handleSubmit,q=(0,S.useRolesList)(o).roles;(0,i.useFocusWhenNavigate)();var x=a||C;(0,u.useEffect)((function(){if(M.defaultRole){document.querySelector('[name="defaultRole"]').focus()}}),[M]);var T=(0,v.default)(k,D);return u.default.createElement(d.Layout,null,u.default.createElement(i.SettingsPageTitle,{name:"SSO"}),u.default.createElement(c.Main,{tabIndex:-1},u.default.createElement("form",{onSubmit:function(e){T?e.preventDefault():W(e)}},u.default.createElement(d.HeaderLayout,{primaryAction:u.default.createElement(f.Button,{"data-testid":"save-button",disabled:T,loading:L,startIcon:u.default.createElement(s.default,null),type:"submit",size:"L"},e({id:"app.components.Button.save",defaultMessage:"Save"})),title:e({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:e({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),u.default.createElement(d.ContentLayout,null,x?u.default.createElement(i.LoadingIndicatorPage,null):u.default.createElement(g.Stack,{size:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},u.default.createElement(p.Typography,{variant:"delta",as:"h2"},e({id:"Settings.sso.form.settings.title",defaultMessage:"Settings"})),u.default.createElement(O.Grid,{gap:4},u.default.createElement(O.GridItem,{col:6,m:6,s:12},u.default.createElement(m.ToggleInput,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!n,checked:D.autoRegister,hint:e({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:e({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:e({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:e({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:function(e){I({target:{name:"autoRegister",value:e.target.checked}})}})),u.default.createElement(O.GridItem,{col:6,m:6,s:12},u.default.createElement(b.Select,{disabled:!n,hint:e({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:M.defaultRole?e({id:M.defaultRole.id,defaultMessage:M.defaultRole.id}):"",label:e({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:function(e){I({target:{name:"defaultRole",value:e}})},placeholder:e({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:D.defaultRole},q.map((function(e){var t=e.id,a=e.name;return u.default.createElement(b.Option,{key:t,value:t.toString()},a)}))))))))))};t.SingleSignOn=k;var C=function(){return u.default.createElement(i.CheckPagePermissions,{permissions:P.main},u.default.createElement(k,null))};t.default=C},46718:(e,t,a)=>{var r=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(68547),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var a=o(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=l?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}n.default=e,a&&a.set(e,n);return n}(a(53209));function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(o=function(e){return e?a:t})(e)}var u=l.object().shape({autoRegister:l.bool().required(n.translatedErrors.required),defaultRole:l.mixed().when("autoRegister",(function(e,t){return e?t.required(n.translatedErrors.required):t.nullable()}))});t.default=u}}]);