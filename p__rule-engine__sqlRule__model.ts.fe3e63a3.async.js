(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{rf2C:function(e,a,t){"use strict";var r=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=r(t("p0pE")),n=r(t("d6i3")),u=r(t("CLrh")),c={namespace:"ruleModel",state:{result:{}},effects:{query:n.default.mark(function e(a,t){var r,l,c,s;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,a.callback,l=t.call,c=t.put,e.next=4,l(u.default.ruleModel.list,r);case 4:return s=e.sent,e.next=7,c({type:"save",payload:s.result});case 7:case"end":return e.stop()}},e)}),queryById:n.default.mark(function e(a,t){var r,l,c,s;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,l=a.callback,c=t.call,e.next=4,c(u.default.ruleModel.list,r);case 4:s=e.sent,l(s);case 6:case"end":return e.stop()}},e)}),saveOrUpdate:n.default.mark(function e(a,t){var r,l,c,s;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,l=a.callback,c=t.call,e.next=4,c(u.default.ruleModel.saveOrUpdate,r);case 4:s=e.sent,l(s);case 6:case"end":return e.stop()}},e)}),remove:n.default.mark(function e(a,t){var r,l,c,s;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,l=a.callback,c=t.call,t.put,e.next=4,c(u.default.ruleModel.remove,r);case 4:s=e.sent,l(s);case 6:case"end":return e.stop()}},e)}),insert:n.default.mark(function e(a,t){var r,l,c,s;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=a.payload,l=a.callback,c=t.call,e.next=4,c(u.default.ruleModel.add,r);case 4:s=e.sent,l(s);case 6:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){return(0,l.default)({},e,{result:(0,l.default)({},a.payload)})}}},s=c;a.default=s}}]);