(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{"6OwL":function(e,a,t){"use strict";var r=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("p0pE")),s=r(t("d6i3")),u=r(t("CLrh")),c={namespace:"permission",state:{result:{}},effects:{query:s.default.mark(function e(a,t){var r,n,c,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,a.callback,n=t.call,c=t.put,e.next=4,n(u.default.permission.list,r);case 4:return l=e.sent,e.next=7,c({type:"save",payload:l.result});case 7:case"end":return e.stop()}},e)}),queryById:s.default.mark(function e(a,t){var r,n,c,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,c=t.call,e.next=4,c(u.default.permission.list,r);case 4:l=e.sent,n(l);case 6:case"end":return e.stop()}},e)}),insert:s.default.mark(function e(a,t){var r,n,c,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,c=t.call,e.next=4,c(u.default.permission.add,r);case 4:l=e.sent,n(l);case 6:case"end":return e.stop()}},e)}),remove:s.default.mark(function e(a,t){var r,n,c,l;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,n=a.callback,c=t.call,t.put,e.next=4,c(u.default.permission.remove,r);case 4:l=e.sent,n(l);case 6:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){return(0,n.default)({},e,{result:a.payload})}}},l=c;a.default=l}}]);