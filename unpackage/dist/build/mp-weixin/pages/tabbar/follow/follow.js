(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/follow/follow"],{"19ed":function(t,n,o){"use strict";o.d(n,"b",(function(){return u})),o.d(n,"c",(function(){return i})),o.d(n,"a",(function(){return e}));var e={listScroll:function(){return o.e("components/list-scroll/list-scroll").then(o.bind(null,"f32f"))},uniLoadMore:function(){return o.e("components/uni-load-more/uni-load-more").then(o.bind(null,"bd65"))},listCard:function(){return o.e("components/list-card/list-card").then(o.bind(null,"196c"))},listAuthor:function(){return o.e("components/list-author/list-author").then(o.bind(null,"8904"))}},u=function(){var t=this,n=t.$createElement;t._self._c},i=[]},"2d1d":function(t,n,o){"use strict";o.r(n);var e=o("78a1"),u=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,(function(){return e[t]}))}(i);n["default"]=u.a},4982:function(t,n,o){},"4e20":function(t,n,o){"use strict";var e=o("4982"),u=o.n(e);u.a},"54a6":function(t,n,o){"use strict";(function(t){o("0a29");e(o("66fd"));var n=e(o("ac38"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("543d")["createPage"])},"78a1":function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{activeIndex:0,list:[],authorLists:[],articleShow:!1,followShow:!1}},onLoad:function(){var n=this;t.$on("update_article",(function(){console.log("关注页面触发"),n.getFollow()})),t.$on("update_author",(function(){n.getAuhtor()})),this.getFollow(),this.getAuhtor()},methods:{change:function(t){this.activeIndex=t.detail.current},tab:function(t){this.activeIndex=t},getFollow:function(){var t=this;this.$api.get_follow().then((function(n){console.log(n);var o=n.data;t.list=o,t.articleShow=0===t.list.length}))},getAuhtor:function(){var t=this;this.$api.get_author().then((function(n){var o=n.data;t.authorLists=o,t.followShow=0===t.authorLists.length}))}}};n.default=o}).call(this,o("543d")["default"])},ac38:function(t,n,o){"use strict";o.r(n);var e=o("19ed"),u=o("2d1d");for(var i in u)"default"!==i&&function(t){o.d(n,t,(function(){return u[t]}))}(i);o("4e20");var a,l=o("f0c5"),r=Object(l["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],a);n["default"]=r.exports}},[["54a6","common/runtime","common/vendor"]]]);