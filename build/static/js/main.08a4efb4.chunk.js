(this["webpackJsonpreact-gbank"]=this["webpackJsonpreact-gbank"]||[]).push([[5],{102:function(e,t,r){},111:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(50),i=r.n(a),c=r(24),s=r(25),u=r(76),d=r(58);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=r(26),h=(r(102),r(9)),m=r(7),p=r(71),b=r(3),g=function(e){return function(t){return Object(b.jsx)(n.Suspense,{fallback:Object(b.jsx)(p.a,{}),children:Object(b.jsx)(e,Object(m.a)({},t))})}},f=function(e){var t=e.children;return Object(s.c)((function(e){return e.account})).isLoggedIn?t:Object(b.jsx)(h.Redirect,{to:"/auth/login"})},y=function(e){var t=e.children;return Object(s.c)((function(e){return e.account})).hasAccount?t:Object(b.jsx)(h.Redirect,{to:"/account/create"})},j=r(142),O=function(e){return Object(b.jsxs)(j.a,{mx:"auto",width:"100%",height:"100%",maxWidth:440,padding:2,children:[e.children,Object(b.jsx)(j.a,{width:"100%",height:"5em"})]})},x=g(Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(13),r.e(14)]).then(r.bind(null,462))}))),v=g(Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(4),r.e(15)]).then(r.bind(null,453))}))),S=g(Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(16)]).then(r.bind(null,446))}))),k=g(Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(3),r.e(8),r.e(17)]).then(r.bind(null,447))}))),T=g(Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(4),r.e(11)]).then(r.bind(null,448))}))),R=g(Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(4),r.e(12)]).then(r.bind(null,460))}))),E=function(){var e=Object(h.useLocation)();return Object(b.jsx)(h.Route,{path:["/dashboard","/profile","/authentication","/edit","/transfer","/exchange"],children:Object(b.jsx)(O,{children:Object(b.jsx)(h.Switch,{location:e,children:Object(b.jsx)(f,{children:Object(b.jsxs)(y,{children:[Object(b.jsx)(h.Route,{path:"/dashboard",component:x}),Object(b.jsx)(h.Route,{path:"/profile",component:v}),Object(b.jsx)(h.Route,{path:"/edit",component:k}),Object(b.jsx)(h.Route,{path:"/authentication",component:S}),Object(b.jsx)(h.Route,{path:"/exchange",component:T}),Object(b.jsx)(h.Route,{path:"/transfer",component:R})]})})},e.pathname)})})},_=function(e){var t=e.children;return Object(s.c)((function(e){return e.account})).isLoggedIn?Object(b.jsx)(h.Redirect,{to:l.a.defaultPath}):t},A=r(146),w=function(e){var t=e.children;return Object(b.jsx)(A.a.div,{initial:"initial",animate:"in",exit:"out",variants:{initial:{opacity:0,scale:.99},in:{opacity:1,scale:1},out:{opacity:0,scale:1.01}},transition:{type:"tween",ease:"anticipate",duration:.4},children:t})},P=g(Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(7)]).then(r.bind(null,449))}))),D=function(){var e=Object(h.useLocation)();return Object(b.jsx)(h.Route,{path:["/auth/login"],children:Object(b.jsx)(h.Switch,{location:e,children:Object(b.jsx)(w,{children:Object(b.jsx)(_,{children:Object(b.jsx)(h.Route,{path:"/auth/login",component:P})})})},e.pathname)})},C=g(Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(3),r.e(10),r.e(18)]).then(r.bind(null,455))}))),z=function(){var e=Object(h.useLocation)();return Object(b.jsx)(h.Route,{path:["/account/create"],children:Object(b.jsx)(h.Switch,{location:e,children:Object(b.jsx)(w,{children:Object(b.jsx)(f,{children:Object(b.jsx)(h.Route,{path:"/account/create",component:C})})})},e.pathname)})},L=function(){return Object(b.jsxs)(h.Switch,{children:[Object(b.jsx)(h.Redirect,{exact:!0,from:"/",to:l.a.defaultPath}),Object(b.jsxs)(o.a.Fragment,{children:[Object(b.jsx)(D,{}),Object(b.jsx)(z,{}),Object(b.jsx)(E,{})]})]})},M=r(66),I=r(84),W=r.n(I);function N(e){return{MuiButton:{styleOverrides:{root:{fontWeight:500,textTransform:"capitalize",borderRadius:"4px"}}},MuiPaper:{defaultProps:{elevation:0},styleOverrides:{root:{backgroundImage:"none"},rounded:{borderRadius:e.customization.borderRadius+"px"}}},MuiCardHeader:{styleOverrides:{root:{color:e.colors.textDark,padding:"24px"},title:{fontSize:"1.125rem"}}},MuiCardContent:{styleOverrides:{root:{padding:"24px"}}},MuiCardActions:{styleOverrides:{root:{padding:"24px"}}},MuiListItemButton:{styleOverrides:{root:{color:e.darkTextPrimary,paddingTop:"10px",paddingBottom:"10px","&.Mui-selected":{color:e.menuSelected,backgroundColor:e.menuSelectedBack,"&:hover":{backgroundColor:e.menuSelectedBack},"& .MuiListItemIcon-root":{color:e.menuSelected}},"&:hover":{backgroundColor:e.menuSelectedBack,color:e.menuSelected,"& .MuiListItemIcon-root":{color:e.menuSelected}}}}},MuiListItemIcon:{styleOverrides:{root:{color:e.darkTextPrimary,minWidth:"36px"}}},MuiListItemText:{styleOverrides:{primary:{color:e.textDark}}},MuiInputBase:{styleOverrides:{input:{color:e.textDark,"&::placeholder":{color:e.darkTextSecondary,fontSize:"0.875rem"}}}},MuiOutlinedInput:{styleOverrides:{root:{background:e.colors.grey50,borderRadius:e.customization.borderRadius+"px","& .MuiOutlinedInput-notchedOutline":{borderColor:e.colors.grey400},"&:hover $notchedOutline":{borderColor:e.colors.primaryLight},"&.MuiInputBase-multiline":{padding:1}},input:{fontWeight:500,background:e.colors.grey50,padding:"15.5px 14px",borderRadius:e.customization.borderRadius+"px","&.MuiInputBase-inputSizeSmall":{padding:"10px 14px","&.MuiInputBase-inputAdornedStart":{paddingLeft:0}}},inputAdornedStart:{paddingLeft:4},notchedOutline:{borderRadius:e.customization.borderRadius+"px"}}},MuiSlider:{styleOverrides:{root:{"&.Mui-disabled":{color:e.colors.grey300}},mark:{backgroundColor:e.paper,width:"4px"},valueLabel:{color:e.colors.primaryLight}}},MuiDivider:{styleOverrides:{root:{borderColor:e.divider,opacity:1}}},MuiAvatar:{styleOverrides:{root:{color:e.colors.primaryDark,background:e.colors.primary200}}},MuiChip:{styleOverrides:{root:{"&.MuiChip-deletable .MuiChip-deleteIcon":{color:"inherit"}}}},MuiTooltip:{styleOverrides:{tooltip:{color:e.paper,background:e.colors.grey700}}}}}function B(e){return{mode:e.customization.navType,common:{black:"#000000"},primary:{light:e.colors.primaryLight,main:e.colors.primaryMain,dark:e.colors.primaryDark,200:e.colors.primary200,800:e.colors.primary800},secondary:{light:e.colors.secondaryLight,main:e.colors.secondaryMain,dark:e.colors.secondaryDark,200:e.colors.secondary200,800:e.colors.secondary800},error:{light:e.colors.errorLight,main:e.colors.errorMain,dark:e.colors.errorDark},orange:{light:e.colors.orangeLight,main:e.colors.orangeMain,dark:e.colors.orangeDark},warning:{light:e.colors.warningLight,main:e.colors.warningMain,dark:e.colors.warningDark},success:{light:e.colors.successLight,200:e.colors.success200,main:e.colors.successMain,dark:e.colors.successDark},grey:{50:e.colors.grey50,100:e.colors.grey100,500:e.darkTextSecondary,600:e.heading,700:e.darkTextPrimary,900:e.textDark},text:{primary:e.darkTextPrimary,secondary:e.darkTextSecondary,dark:e.textDark,hint:e.colors.grey100},background:{paper:e.paper,default:e.backgroundDefault}}}function F(e){return{fontFamily:e.customization.fontFamily,h6:{fontWeight:500,color:e.heading,fontSize:"0.75rem"},h5:{fontSize:"0.875rem",color:e.heading,fontWeight:500},h4:{fontSize:"1rem",color:e.heading,fontWeight:600},h3:{fontSize:"1.25rem",color:e.heading,fontWeight:600},h2:{fontSize:"1.5rem",color:e.heading,fontWeight:700},h1:{fontSize:"2.125rem",color:e.heading,fontWeight:700},subtitle1:{fontSize:"0.875rem",fontWeight:500,color:e.textDark},subtitle2:{fontSize:"0.75rem",fontWeight:400,color:e.darkTextSecondary},caption:{fontSize:"0.75rem",color:e.darkTextSecondary,fontWeight:400},body1:{fontSize:"0.875rem",fontWeight:400,lineHeight:"1.334em"},body2:{letterSpacing:"0em",fontWeight:400,lineHeight:"1.5em",color:e.darkTextPrimary},customInput:{marginTop:8,marginBottom:8,"& > label":{top:"23px",left:0,color:e.grey500,'&[data-shrink="false"]':{top:"5px"}},"& > div > input":{padding:"30.5px 14px 11.5px !important"},"& legend":{display:"none"},"& fieldset":{top:0}},mainContent:{backgroundColor:e.background,width:"100%",minHeight:"calc(100vh - 88px)",flexGrow:1,padding:"20px",marginTop:"88px",marginRight:"20px",borderRadius:e.customization.borderRadius+"px"},menuCaption:{fontSize:"0.875rem",fontWeight:500,color:e.heading,padding:"6px",textTransform:"capitalize",marginTop:"10px"},subMenuCaption:{fontSize:"0.6875rem",fontWeight:500,color:e.darkTextSecondary,textTransform:"capitalize"},commonAvatar:{cursor:"pointer",borderRadius:"8px"},smallAvatar:{width:"22px",height:"22px",fontSize:"1rem"},mediumAvatar:{width:"34px",height:"34px",fontSize:"1.2rem"},largeAvatar:{width:"44px",height:"44px",fontSize:"1.5rem"}}}var H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ltr",r=W.a,n={colors:r,heading:r.grey900,paper:r.paper,backgroundDefault:r.paper,background:r.grey100,darkTextPrimary:r.grey700,darkTextSecondary:r.grey500,textDark:r.grey900,menuSelected:r.secondaryDark,menuSelectedBack:r.secondaryLight,divider:r.grey200,customization:e};return Object(M.a)({direction:t,palette:B(n),mixins:{toolbar:{minHeight:"48px",padding:"16px","@media (min-width: 600px)":{minHeight:"48px"}}},breakpoints:{values:{xs:0,sm:600,md:960,lg:1280,xl:1920}},typography:F(n),components:N(n)})},U=r(10),Y=r.n(U),q=function(e){var t=e.children,r=e.location.pathname;return Object(n.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[r]),t||null};q.propTypes={children:Y.a.node,location:Y.a.object};var K=Object(h.withRouter)(q),V=r(57),G=r(147),J=r(143),$=r(144),Z=function(){var e=Object(s.c)((function(e){return e.customization}));return Object(n.useEffect)((function(){document.body.setAttribute("dir",e.direction),document.documentElement.setAttribute("dir",e.direction),V.a&&V.a.setLanguage("rtl"===e.direction?"fa":"en")}),[e]),Object(b.jsx)(J.a,{injectFirst:!0,children:Object(b.jsxs)(G.a,{theme:H(e,e.direction),children:[Object(b.jsx)($.a,{}),Object(b.jsx)(K,{children:Object(b.jsx)(L,{})})]})})};i.a.render(Object(b.jsx)(s.a,{store:d.b,children:Object(b.jsx)(u.a,{loading:null,persistor:d.a,children:Object(b.jsx)(c.a,{basename:l.a.basename,children:Object(b.jsx)(Z,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},15:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return a})),r.d(t,"l",(function(){return i})),r.d(t,"k",(function(){return c})),r.d(t,"f",(function(){return s})),r.d(t,"j",(function(){return u})),r.d(t,"i",(function(){return d})),r.d(t,"d",(function(){return l})),r.d(t,"h",(function(){return h})),r.d(t,"g",(function(){return m})),r.d(t,"e",(function(){return p}));var n="LOGIN",o="LOGOUT",a="ACCOUNT_INITIALIZE",i="SET_USER_PROFILE",c="SET_USER_PICTURE",s="SET_BANK_CARDS",u="SET_TRANSACTIONS",d="@customization/SET_MENU",l="@customization/MENU_OPEN",h="@customization/SET_FONT_FAMILY",m="@customization/SET_BORDER_RADIUS",p="@customization/RTL_DESIGN"},26:function(e,t,r){"use strict";var n={basename:"/",defaultPath:"/dashboard",fontFamily:"'Vazir', 'Roboto', sans-serif",borderRadius:12,API_SERVER:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_SERVER?Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_SERVER:"http://82.115.20.224:1333/api/",direction:"rtl"};t.a=n},57:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(85),o=new(r.n(n).a)({en:{name:"felexin",dashboard:"dashboard",home:"home",profile:"profile",welcome:"Hi, Welcome Back",submit:"submit",available:"available",bio:"bio",allServices:"all services",cancel:"cancel",crypto:"Crypto",balanceUSDT:"Total Balance (USDT)",balanceRial:"Total Balance (\u0631\u064a\u0627\u0644)",rial:"Rial",toman:"Toman",gold:"Gold",usdt:"Tether",btc:"Bitcoin",usd:"Dollar",exchange:"exchange",transfer:"transfer",charge:"charge",wallet:"wallet",transactions:"transactions",deposite:"deposite",generalError:"Field is required!",firstname:"First name",lastname:"Lastname",national_code:"National Code",email:"Email",address:"Address",postal_code:"Postal Code",date_of_birth:"Date of birth",cards:"cards",addNewCard:"Add New Card",cardAlreadyExists:"Card already exists",authenticationRequiredForCards:"authentication Required for cards",maxDailyWithdraw:"Max Daily Withdraw",authentication:"authentication",authLevel:"Authentication Level",enter_national_code:"Enter National Code",national_code_not_matched:"National Code not matched",authenticationSuccessful:"Authentication Successful",backToHomePage:"Back to Home Page",accountWelcome:"You are now logged in",accountMessage:"Please choose your account type!",profitAccount:"Profit account",investmentAccount:"Investment account",moneyAccount:"Pocket money account",welcomeSubtitle:"Enter your phone number to continue",phone_number:"Phone Number",otp:"otp",otpWarning:"Didn't get the otp?",signIn:"sign in",phoneNumberError:"phone number is required",otpError:"OTP code is required",otpText:"Your otp is ",logout:"logout",currentWallet:"Your maximum transfer limit",messageForSelect:"Select the receiver.",enterTransferAmount:"Enter Transfer Amount",enterValidPhoneNumber:"Enter Valid Phone Number",transferAmount:"Tranfer Amount",continue:"Continue",frequentTransfers:"Frequent transfers",receiverPhoneNumber:"Receiver phone number",description:"Description",youArePaying:"You are paying",receiver:"Receiver",wage:"wage",paymentSuccess:"Payment success",amountYouPay:"The amount you pay",stock:"Stock",exchangeRate:"Exchange Rate",amountYouReceive:"The amount you receive",notEnoughBalance:"Not Enouch Balance",openOrders:"Open Orders",receivingAmount:"Receiving Amount",areYouSure:"Are You Sure?",yes:"Yes",no:"No"},fa:{name:"\u0641\u0644\u06a9\u0633\u06cc\u0646",dashboard:"\u062f\u0627\u0634\u0628\u0631\u062f",home:"\u062e\u0627\u0646\u0647",profile:"\u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc",welcome:"\u0633\u0644\u0627\u0645\u060c \u062e\u0648\u0634 \u0622\u0645\u062f\u06cc\u062f",submit:"\u062b\u0628\u062a",available:"\u0645\u0648\u062c\u0648\u062f",bio:"\u0627\u062d\u0631\u0627\u0632",allServices:"\u0647\u0645\u0647 \u062e\u062f\u0645\u0627\u062a",cancel:"\u0628\u0633\u062a\u0646",crypto:"\u06a9\u0631\u06cc\u067e\u062a\u0648",balanceUSDT:"\u0627\u0631\u0632\u0634 \u06a9\u0644 (USDT)",balanceRial:"\u0627\u0631\u0632\u0634 \u06a9\u0644 (\u0631\u064a\u0627\u0644)",rial:"\u0631\u06cc\u0627\u0644",toman:"\u062a\u0648\u0645\u0627\u0646",gold:"\u0637\u0644\u0627",usdt:"\u062a\u062a\u0631",btc:"\u0628\u06cc\u062a \u06a9\u0648\u06cc\u0646",usd:"\u062f\u0644\u0627\u0631",exchange:"\u062a\u0628\u062f\u06cc\u0644",transfer:"\u0627\u0646\u062a\u0642\u0627\u0644",charge:"\u0648\u0627\u0631\u06cc\u0632",wallet:"\u06a9\u06cc\u0641 \u067e\u0648\u0644",transactions:"\u062a\u0631\u0627\u06a9\u0646\u0634\u200c\u0647\u0627",deposite:"\u0648\u0627\u0631\u06cc\u0632",generalError:"\u0644\u0637\u0641\u0627 \u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f!",firstname:"\u0646\u0627\u0645",lastname:"\u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc",national_code:"\u06a9\u062f \u0645\u0644\u06cc",email:"\u0631\u0627\u06cc\u0627\u0646\u0627\u0645\u0647",address:"\u0622\u062f\u0631\u0633",postal_code:"\u06a9\u062f \u067e\u0633\u062a\u06cc",date_of_birth:"\u062a\u0627\u0631\u06cc\u062e \u062a\u0648\u0644\u062f",cards:"\u06a9\u0627\u0631\u062a\u200c\u0647\u0627",addNewCard:"\u0627\u0641\u0632\u0648\u062f\u0646 \u06a9\u0627\u0631\u062a \u062c\u062f\u06cc\u062f",cardAlreadyExists:"\u06a9\u0627\u0631\u062a \u0645\u0648\u062c\u0648\u062f \u0627\u0633\u062a",authenticationRequiredForCards:"\u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0648\u062f\u0646 \u06a9\u0627\u0631\u062a \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u06a9\u0646\u06cc\u062f",maxDailyWithdraw:"\u0633\u0642\u0641 \u0628\u0631\u062f\u0627\u0634\u062a \u0631\u0648\u0632\u0627\u0646\u0647",authentication:"\u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a",authLevel:"\u0633\u0637\u062d \u06a9\u0627\u0631\u0628\u0631\u06cc",enter_national_code:"\u0644\u0637\u0641\u0627 \u06a9\u062f \u0645\u0644\u06cc \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f",national_code_not_matched:"\u06a9\u062f \u0645\u0644\u06cc \u0645\u0637\u0627\u0628\u0642 \u0646\u06cc\u0633\u062a",authenticationSuccessful:"\u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0634\u0645\u0627 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f",backToHomePage:"\u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc",accountWelcome:" \u0634\u0645\u0627 \u0648\u0627\u0631\u062f \u0634\u062f\u06cc\u062f",accountMessage:"\u0644\u0637\u0641\u0627 \u0646\u0648\u0639 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f.",profitAccount:"\u062d\u0633\u0627\u0628 \u0633\u0648\u062f",investmentAccount:"\u062d\u0633\u0627\u0628 \u0633\u0631\u0645\u0627\u06cc\u0647\u200c\u06af\u0630\u0627\u0631\u06cc",moneyAccount:"\u062d\u0633\u0627\u0628 \u067e\u0648\u0644 \u062a\u0648 \u062c\u06cc\u0628\u06cc",welcomeSubtitle:"\u0634\u0645\u0627\u0631\u0647 \u062a\u0645\u0627\u0633 \u0641\u0639\u0627\u0644 \u062e\u0648\u062f \u0631\u0627 \u0628\u0631\u0627\u06cc \u0627\u062f\u0627\u0645\u0647 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f.",phone_number:"\u0634\u0645\u0627\u0631\u0647 \u062a\u0645\u0627\u0633",otp:"\u06a9\u062f 4 \u0631\u0642\u0645\u06cc",otpWarning:"\u06a9\u062f 4 \u0631\u0642\u0645\u06cc \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u0646\u06a9\u0631\u062f\u0645!",signIn:"\u0648\u0631\u0648\u062f",phoneNumberError:"\u0634\u0645\u0627\u0631\u0647 \u062a\u0645\u0627\u0633 \u0636\u0631\u0648\u0631\u06cc \u0627\u0633\u062a",otpError:"\u06a9\u062f 4 \u0631\u0642\u0645\u06cc \u0636\u0631\u0648\u0631\u06cc \u0627\u0633\u062a",otpText:"\u06a9\u062f \u0634\u0645\u0627: ",logout:"\u062e\u0631\u0648\u062c \u0627\u0632 \u062d\u0633\u0627\u0628",currentWallet:"\u0628\u06cc\u0634\u06cc\u0646\u0647 \u0645\u0642\u062f\u0627\u0631 \u0642\u0627\u0628\u0644 \u0627\u0646\u062a\u0642\u0627\u0644",messageForSelect:"\u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u0646\u062f\u0647 \u0648\u062c\u0647 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",enterTransferAmount:"\u0645\u0646\u0628\u0639 \u0627\u0646\u062a\u0642\u0627\u0644 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f",enterValidPhoneNumber:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0639\u062a\u0628\u0631 \u0646\u06cc\u0633\u062a",transferAmount:"\u0645\u0628\u0644\u063a \u0627\u0646\u062a\u0642\u0627\u0644",continue:"\u0627\u062f\u0627\u0645\u0647",frequentTransfers:"\u0627\u0646\u062a\u0642\u0627\u0644 \u0647\u0627\u06cc \u067e\u0631 \u062a\u06a9\u0631\u0627\u0631",receiverPhoneNumber:"\u0634\u0645\u0627\u0631\u0647 \u062a\u0645\u0627\u0633 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u0646\u062f\u0647",description:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a",youArePaying:"\u0634\u0645\u0627 \u062f\u0631 \u062d\u0627\u0644 \u067e\u0631\u062f\u0627\u062e\u062a \u0647\u0633\u062a\u06cc\u062f",receiver:"\u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0646\u0646\u062f\u0647",wage:"\u06a9\u0627\u0631\u0645\u0632\u062f",paymentSuccess:"\u067e\u0631\u062f\u0627\u062e\u062a \u0645\u0648\u0641\u0642\u06cc\u062a \u0622\u0645\u06cc\u0632 \u0628\u0648\u062f",amountYouPay:"\u0645\u0642\u062f\u0627\u0631\u06cc \u06a9\u0647 \u067e\u0631\u062f\u0627\u062e\u062a \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f",stock:"\u0633\u0647\u0645",exchangeRate:"\u0646\u0631\u062e \u062a\u0628\u062f\u06cc\u0644",amountYouReceive:"\u0645\u0642\u062f\u0627\u0631\u06cc \u06a9\u0647 \u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f",notEnoughBalance:"\u0645\u0648\u062c\u0648\u062f\u06cc \u062d\u0633\u0627\u0628 \u0634\u0645\u0627 \u06a9\u0627\u0641\u06cc \u0646\u06cc\u0633\u062a",openOrders:"\u0633\u0641\u0627\u0631\u0634 \u0647\u0627\u06cc \u0628\u0627\u0632",receivingAmount:"\u0645\u0642\u062f\u0627\u0631 \u062f\u0631\u06cc\u0627\u0641\u062a\u06cc",areYouSure:"\u0622\u06cc\u0627 \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062a\u06cc\u062f\u061f",yes:"\u0628\u0644\u0647",no:"\u062e\u06cc\u0631"}})},58:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return g}));var n=r(35),o=r(54),a=r(77),i=r.n(a),c=r(7),s=r(26),u=r(15),d={isOpen:[],fontFamily:s.a.fontFamily,borderRadius:s.a.borderRadius,opened:!0,direction:s.a.direction},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.d:var r=t.id;return Object(c.a)(Object(c.a)({},e),{},{isOpen:[r]});case u.i:return Object(c.a)(Object(c.a)({},e),{},{opened:t.opened});case u.h:return Object(c.a)(Object(c.a)({},e),{},{fontFamily:t.fontFamily});case u.g:return Object(c.a)(Object(c.a)({},e),{},{borderRadius:t.borderRadius});case u.e:return Object(c.a)(Object(c.a)({},e),{},{direction:t.direction});default:return e}},h={token:"",isLoggedIn:!1,hasAccount:!1,user:null,balances:[],transactions:[],cards:[],accountId:null},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.a:var r=t.payload.account;return Object(c.a)(Object(c.a)({},e),{},{balances:r.balances,accountId:r.id});case u.k:var n=t.payload.picture;return Object(c.a)(Object(c.a)({},e),{},{user:Object(c.a)(Object(c.a)({},e.user),{},{picture:n})});case u.l:var o=t.payload.user;return Object(c.a)(Object(c.a)({},e),{},{user:o});case u.f:var a=t.payload.cards;return Object(c.a)(Object(c.a)({},e),{},{cards:a});case u.j:var i=t.payload.transactions;return Object(c.a)(Object(c.a)({},e),{},{transactions:i});case u.b:var s=t.payload,d=s.hasAccount,l=s.token;return Object(c.a)(Object(c.a)({},e),{},{isLoggedIn:!0,hasAccount:d,token:l});case u.c:return Object(c.a)({},h);default:return Object(c.a)({},e)}},p=Object(n.a)({account:Object(o.a)({key:"account",storage:i.a,keyPrefix:"gbank"},m),customization:l}),b=Object(n.b)(p),g=Object(o.b)(b)},71:function(e,t,r){"use strict";r(0);var n=r(120),o=r(118),a=r(3),i=Object(o.a)((function(e){return{root:{position:"fixed",top:0,left:0,zIndex:1301,width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));t.a=function(){var e=i();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(n.a,{color:"primary"})})}},84:function(e,t,r){e.exports={paper:"#fff",primaryLight:"#e3f2fd",primary200:"#90caf9",primaryMain:"#2196f3",primaryDark:"#1e88e5",primary800:"#1565c0",secondaryLight:"#ede7f6",secondary200:"#b39ddb",secondaryMain:"#673ab7",secondaryDark:"#5e35b1",secondary800:"#4527a0",successLight:"#b9f6ca",success200:"#69f0ae",successMain:"#00e676",successDark:"#00c853",errorLight:"#ef9a9a",errorMain:"#f44336",errorDark:"#c62828",orangeLight:"#fbe9e7",orangeMain:"#ffab91",orangeDark:"#d84315",warningLight:"#fff8e1",warningMain:"#ffe57f",warningDark:"#ffc107",grey50:"#fafafa",grey100:"#f5f5f5",grey200:"#eee",grey300:"#e0e0e0",grey500:"#9e9e9e",grey600:"#757575",grey700:"#616161",grey900:"#212121"}}},[[111,6,9]]]);
//# sourceMappingURL=main.08a4efb4.chunk.js.map