(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{HsJP:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a("p0pE")),n=r(a("d6i3")),u=r(a("CLrh")),l={namespace:"certificate",state:{result:{}},effects:{query:n.default.mark(function e(t,a){var r,c,l,s;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,t.callback,c=a.call,l=a.put,e.next=4,c(u.default.certificate.list,r);case 4:return s=e.sent,e.next=7,l({type:"save",payload:s.result});case 7:case"end":return e.stop()}},e)}),queryById:n.default.mark(function e(t,a){var r,c,l,s;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,c=t.callback,l=a.call,e.next=4,l(u.default.certificate.list,r);case 4:s=e.sent,c(s);case 6:case"end":return e.stop()}},e)}),insert:n.default.mark(function e(t,a){var r,c,l,s;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,c=t.callback,l=a.call,e.next=4,l(u.default.certificate.saveOrUpdate,r);case 4:s=e.sent,c(s);case 6:case"end":return e.stop()}},e)}),remove:n.default.mark(function e(t,a){var r,c,l,s;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,c=t.callback,l=a.call,a.put,e.next=4,l(u.default.certificate.remove,r);case 4:s=e.sent,c(s);case 6:case"end":return e.stop()}},e)})},reducers:{save:function(e,t){return(0,c.default)({},e,{result:(0,c.default)({},t.payload)})}}},s=l;t.default=s}}]);