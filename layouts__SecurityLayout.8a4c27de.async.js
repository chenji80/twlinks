(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"0jlH":function(e,t,n){"use strict";var r=n("tAuX"),c=n("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(n("qIgq")),o=r(n("q1tI")),u=n("Hg0r"),s=n("Hx5s"),a=n("ArA+"),l=n("s4NR"),f=n("N8P2"),d=function(e){var t=e.dispatch,n=e.settings,r=(0,o.useState)(!1),c=(0,i.default)(r,2),u=c[0],d=c[1],g=e.children,p=e.loading,w=!!localStorage.getItem("x-access-token"),h=(0,l.stringify)({redirect:window.location.href});(0,o.useEffect)(function(){d(!0),t&&t({type:"user/fetchCurrent"})},[]),(0,o.useEffect)(function(){t&&t({type:"settings/fetchConfig",callback:function(){document.getElementById("title-icon").href=n.titleIcon,d(!0)}})},[n.title]);var v=function(){return w&&(0,f.initWebSocket)(),!w&&p||!u?o.default.createElement(s.PageLoading,null):w?g:o.default.createElement(a.Redirect,{to:"/user/login?".concat(h)})};return v()},g=(0,u.connect)(function(e){var t=e.user,n=e.settings,r=e.loading;return{currentUser:t.currentUser,settings:n,loading:r.models.user}})(d);t.default=g}}]);