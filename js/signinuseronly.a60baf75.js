(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signinuseronly"],{5647:function(n,t,e){"use strict";var i=e("c0f0"),o=e.n(i);o.a},5806:function(n,t,e){"use strict";e.r(t);var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"signinuseronly"},[e("Navbar"),e("h1",[n._v("Sign In User Only page")])],1)},o=[],r=e("d178"),a={name:"SignInUserOnly",components:{Navbar:r["a"]}},l=a,s=e("2877"),c=Object(s["a"])(l,i,o,!1,null,null,null);t["default"]=c.exports},c0f0:function(n,t,e){},d178:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"+this.$i18n.locale}},[n._v("Home")]),n._v(" | "),e("router-link",{attrs:{to:"/"+this.$i18n.locale+"/about"}},[n._v("About")]),n._v(" | "),e("router-link",{attrs:{to:"/"+this.$i18n.locale+"/signin"}},[n._v("SignIn")]),n._v(" | "),e("router-link",{attrs:{to:"/"+this.$i18n.locale+"/signinuseronly"}},[n._v("SignInUserOnly")]),n._v(" | "),e("router-link",{attrs:{to:"/"+this.$i18n.locale+"/signout"}},[n._v("SignOut")]),e("select",{directives:[{name:"model",rawName:"v-model",value:n.$i18n.locale,expression:"$i18n.locale"}],on:{change:[function(t){var e=Array.prototype.filter.call(t.target.options,(function(n){return n.selected})).map((function(n){var t="_value"in n?n._value:n.value;return t}));n.$set(n.$i18n,"locale",t.target.multiple?e:e[0])},function(t){return n.setLocale()}]}},n._l(["en","ja","ro"],(function(t){return e("option",{key:t.id,domProps:{value:t}},[n._v(n._s(t))])})),0)],1)},o=[],r={name:"Navbar",components:{},methods:{setLocale:function(){this.$store.commit("i18n/set",this.$i18n.locale)}}},a=r,l=(e("5647"),e("2877")),s=Object(l["a"])(a,i,o,!1,null,"40f2b4c5",null);t["a"]=s.exports}}]);
//# sourceMappingURL=signinuseronly.a60baf75.js.map