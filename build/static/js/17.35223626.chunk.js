(this["webpackJsonpreact-gbank"]=this["webpackJsonpreact-gbank"]||[]).push([[17],{156:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return l}));var r=n(149),a=n(150),c=n(179),i=n.n(c),u=n(26),o=n(58),s=n(15),p=function(){return o.b.dispatch({type:s.c})},d=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e,n){var a,c;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=null===(a=o.b.getState().account)||void 0===a?void 0:a.token,t.next=4,i.a.get("".concat(u.a.API_SERVER).concat(e),{params:n,headers:{Authorization:"Token ".concat(c)}});case 4:return t.abrupt("return",t.sent);case 7:throw t.prev=7,t.t0=t.catch(0),401===t.t0.response.status&&p(),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}(),l=function(){var t=Object(a.a)(Object(r.a)().mark((function t(e,n,a,c){var s,d;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d=null===(s=o.b.getState().account)||void 0===s?void 0:s.token,t.next=4,i.a.post("".concat(u.a.API_SERVER).concat(e),n,{params:a,headers:{Authorization:d&&"Token ".concat(d),"Content-type":c||"application/json"}});case 4:return t.abrupt("return",t.sent);case 7:throw t.prev=7,t.t0=t.catch(0),401===t.t0.response.status&&p(),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n,r,a){return t.apply(this,arguments)}}()},159:function(t,e,n){"use strict";var r=n(142),a=n(465),c=n(358),i=n(9),u=n(3);e.a=function(t){var e=t.title,n=t.onClick,o=Object(i.useHistory)();return Object(u.jsxs)(r.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[Object(u.jsx)(a.a,{style:{marginRight:"auto"},children:e}),Object(u.jsx)(c.a,{style:{marginRight:"auto"},onClick:function(t){"function"===typeof n?n(t):o.goBack()}})]})}},160:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"e",(function(){return p})),n.d(e,"f",(function(){return d})),n.d(e,"h",(function(){return f})),n.d(e,"g",(function(){return j})),n.d(e,"i",(function(){return h})),n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return m})),n.d(e,"d",(function(){return x}));var r=n(7),a=n(149),c=n(150),i=n(58),u=n(15),o=n(156),s=function(t){return Object(o.b)("login/",{phone_number:t})},p=function(){var t=Object(c.a)(Object(a.a)().mark((function t(e,n){var r;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.b)("verify/",{phone_number:e,otp:n});case 2:r=t.sent,i.b.dispatch({type:u.b,payload:{token:r.data.token,hasAccount:!0}}),l(),b(),O(),x();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(Object(a.a)().mark((function t(){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.b)("logout/");case 2:i.b.dispatch({type:u.c});case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(Object(a.a)().mark((function t(){var e;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("account/");case 2:e=t.sent,i.b.dispatch({type:u.a,payload:{account:e.data.accounts[0]}});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(Object(a.a)().mark((function t(){var e;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("user/profile/");case 2:e=t.sent,i.b.dispatch({type:u.l,payload:{user:Object(r.a)(Object(r.a)({},e.data.user),e.data.profile)}});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(Object(a.a)().mark((function t(e){var n;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.b)("user/profile/",e);case 2:n=t.sent,i.b.dispatch({type:u.l,payload:{user:Object(r.a)(Object(r.a)({},n.data.user),n.data.profile)}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){return Object(o.b)("kyc/national_code/")},h=function(){var t=Object(c.a)(Object(a.a)().mark((function t(e){var n;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.b)("user/picture/",e,null,"multipart/form-data");case 2:n=t.sent,i.b.dispatch({type:u.k,payload:{picture:n.data.picture}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(c.a)(Object(a.a)().mark((function t(){var e;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("bank-card/");case 2:e=t.sent,i.b.dispatch({type:u.f,payload:{cards:e.data.bank_cards}});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(Object(a.a)().mark((function t(e){return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.b)("bank-card/",{card_number:e});case 2:return t.next=4,O();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t,e){return Object(o.a)("withdraw/limit/",{account_id:t,currency:e})},x=function(){var t=Object(c.a)(Object(a.a)().mark((function t(){var e;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)("transactions/");case 2:e=t.sent,i.b.dispatch({type:u.j,payload:{transactions:e.data.transactions}});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},220:function(t,e,n){"use strict";var r=n(39),a=n(0),c=n.n(a),i=n(469),u=n(146),o=n(3),s=c.a.forwardRef((function(t,e){var n,a,c=t.children,s=t.type,p=t.direction,d=t.offset,l=t.scale;switch(p){case"up":case"left":n=d,a=0;break;default:n=0,a=d}var b=Object(i.a)(n,a),f=Object(r.a)(b,2),j=f[0],h=f[1],O=Object(i.a)(n,a),v=Object(r.a)(O,2),m=v[0],x=v[1];switch(s){case"rotate":return Object(o.jsx)(u.a.div,{ref:e,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:c});case"slide":return"up"===p||"down"===p?Object(o.jsx)(u.a.div,{ref:e,animate:{y:m},onHoverEnd:function(){return x()},onHoverStart:function(){return x()},children:c}):Object(o.jsx)(u.a.div,{ref:e,animate:{x:j},onHoverEnd:function(){return h()},onHoverStart:function(){return h()},children:c});default:return"number"===typeof l&&(l={hover:l,tap:l}),Object(o.jsx)(u.a.div,{ref:e,whileHover:{scale:l.hover},whileTap:{scale:l.tap},children:c})}}));s.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}},e.a=s},447:function(t,e,n){"use strict";n.r(e);var r=n(7),a=n(0),c=n.n(a),i=n(25),u=n(409),o=n(459),s=n(364),p=n(454),d=n(410),l=n(458),b=n(467),f=n(142),j=n(457),h=n(118),O=n(344),v=n(343),m=n(220),x=n(57),y=n(71),w=n(160),g=n(159),k=n(3),_=Object(h.a)((function(t){return{input:Object(r.a)(Object(r.a)({},t.typography.customInput),{},{margin:"0.1em"})}}));e.default=function(){var t=_(),e=Object(i.c)((function(t){return t.customization})).direction,n=Object(i.c)((function(t){return t.account})).user,h=Object(a.useRef)(null),S=["firstname","lastname","email","address","postal_code","date_of_birth"];return n?Object(k.jsxs)(c.a.Fragment,{children:[Object(k.jsx)(g.a,{title:null===x.a||void 0===x.a?void 0:x.a.profile}),Object(k.jsxs)(u.a,{overlap:"circular",style:{margin:16},anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:Object(k.jsx)(o.a,{className:t.addProfile,label:"+",onClick:function(){h.current.click()}}),children:[Object(k.jsx)("input",{type:"file",accept:"image/*",ref:h,hidden:!0,onChange:function(t){var e=new FormData;e.append("picture",t.target.files[0]),Object(w.i)(e).catch((function(t){console.log("error - ",t)}))}}),Object(k.jsx)(s.a,{alt:n.firstname,src:n.picture,sx:{width:80,height:80}})]}),Object(k.jsx)(v.a,{initialValues:Object(r.a)(Object(r.a)({},n),{},{submit:null}),validationSchema:O.c().shape({firstname:O.d(),lastname:O.d(),email:O.d().email(),address:O.d(),postal_code:O.d(),date_of_birth:O.a()}),onSubmit:function(t,e){var n=e.setErrors,r=e.setStatus,a=e.setSubmitting;try{Object(w.h)(t).catch((function(t){r({success:!1}),n({submit:t.error}),a(!1)}))}catch(c){console.error(c)}},children:function(n){var r=n.errors,a=n.handleBlur,c=n.handleChange,i=n.handleSubmit,u=n.isSubmitting,o=n.touched,s=n.values;return Object(k.jsxs)("form",{noValidate:!0,onSubmit:i,children:[S.map((function(n,i){return Object(k.jsxs)(p.a,{error:Boolean(o[n]&&r[n]),className:t.input,sx:{width:{md:"45%",sm:"95%",xs:"100%"},p:.5},children:[Object(k.jsx)(d.a,{htmlFor:"outlined-adornment-"+n,children:x.a[n]}),Object(k.jsx)(l.a,{id:"outlined-adornment-"+n,type:"text",value:s[n],name:n,onBlur:a,onChange:c,label:x.a[n],inputProps:{classes:{notchedOutline:t.notchedOutline}}}),o[n]&&r[n]&&Object(k.jsx)(b.a,{error:!0,id:"standard-weight-helper-text-"+n,style:{textAlign:"ltr"===e?"left":"right"},children:r[[n]]})]},i)})),r.submit&&Object(k.jsx)(f.a,{sx:{mt:3},children:Object(k.jsx)(b.a,{error:!0,children:r.submit})}),Object(k.jsx)(f.a,{sx:{mt:2},children:Object(k.jsx)(m.a,{children:Object(k.jsx)(j.a,{disableElevation:!0,disabled:u,size:"large",type:"submit",variant:"contained",color:"secondary",children:null===x.a||void 0===x.a?void 0:x.a.submit})})})]})}})]}):Object(k.jsx)(y.a,{})}}}]);
//# sourceMappingURL=17.35223626.chunk.js.map