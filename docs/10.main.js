(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{83:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return b});var a=t(5),r=t.n(a),o=t(10),p=t.n(o),s=t(11),c=t.n(s),u=t(12),i=t.n(u),l=t(13),m=t.n(l),h=t(14),d=t.n(h),g=t(0),w=t.n(g),v=t(4),b=function(n){function e(n){var t;return p()(this,e),(t=i()(this,m()(e).call(this,n))).layout=null,t}return d()(e,n),c()(e,[{key:"render",value:function(){var n=this.props,e=n.components;r()(n,["components"]);return w.a.createElement(v.MDXTag,{name:"wrapper",components:e},w.a.createElement(v.MDXTag,{name:"h2",components:e,props:{id:"spread-props"}},"Spread Props"),w.a.createElement(v.MDXTag,{name:"p",components:e},"Want to print an array of props, such as HTML attributes without having to unwrap each one?"),w.a.createElement(v.MDXTag,{name:"pre",components:e},w.a.createElement(v.MDXTag,{name:"code",components:e,parentName:"pre",props:{className:"language-js"}},"const attributes = {\n    placeholder: 'roy',\n    value: 'mike'\n}\n\n//Boring\n<input value={attributes.value} placeholder={attributes.placeholder} />\n\n//Better\n<input {...attributes} />\n")))}}]),e}(w.a.Component)}}]);