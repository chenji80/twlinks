(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{"3+sv":function(e,a,t){"use strict";var r=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("p0pE")),l=r(t("d6i3")),u=r(t("CLrh")),s={namespace:"role",state:{result:{}},effects:{query:l.default.mark(function e(a,t){var r,n,s,c;return l.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=t.call,s=t.put,e.next=4,n(u.default.role.list,r);case 4:return c=e.sent,e.next=7,s({type:"save",payload:c.result});case 7:case"end":return e.stop()}},e)}),queryById:l.default.mark(function e(a,t){var r,n,s,c;return l.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,s=t.call,e.next=4,s(u.default.role.list,r);case 4:c=e.sent,n(c);case 6:case"end":return e.stop()}},e)}),insert:l.default.mark(function e(a,t){var r,n,s,c;return l.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,s=t.call,e.next=4,s(u.default.role.saveOrUpdate,r);case 4:c=e.sent,n(c);case 6:case"end":return e.stop()}},e)}),remove:l.default.mark(function e(a,t){var r,n,s,c;return l.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,s=t.call,e.next=4,s(u.default.role.remove,r);case 4:c=e.sent,n(c);case 6:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){return(0,n.default)({},e,{result:a.payload})}}},c=s;a.default=c}}]);