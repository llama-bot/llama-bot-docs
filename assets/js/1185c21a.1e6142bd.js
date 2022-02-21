"use strict";(self.webpackChunkllama_bot_docs=self.webpackChunkllama_bot_docs||[]).push([[485],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),f=i,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},788:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={},u="API",l={unversionedId:"web-interface/api",id:"web-interface/api",isDocsHomePage:!1,title:"API",description:"HTTP endpoints.",source:"@site/docs/4-web-interface/3-api.md",sourceDirName:"4-web-interface",slug:"/web-interface/api",permalink:"/docs/web-interface/api",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/4-web-interface/3-api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting up",permalink:"/docs/web-interface/setting-up"},next:{title:"Overview",permalink:"/docs/docs/overview"}},p=[{value:"Authentication",id:"authentication",children:[{value:"<code>/api/login</code>",id:"apilogin",children:[]},{value:"<code>/api/logout</code>",id:"apilogout",children:[]},{value:"<code>/api/auth</code>",id:"apiauth",children:[]}]},{value:"Data",id:"data",children:[{value:"<code>/api/user-data</code>",id:"apiuser-data",children:[]}]}],d={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api"},"API"),(0,a.kt)("p",null,"HTTP endpoints."),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("h3",{id:"apilogin"},(0,a.kt)("inlineCode",{parentName:"h3"},"/api/login")),(0,a.kt)("p",null,"Login using discord OAuth2"),(0,a.kt)("h3",{id:"apilogout"},(0,a.kt)("inlineCode",{parentName:"h3"},"/api/logout")),(0,a.kt)("p",null,"Logout from account"),(0,a.kt)("h3",{id:"apiauth"},(0,a.kt)("inlineCode",{parentName:"h3"},"/api/auth")),(0,a.kt)("p",null,"Discord OAuth2 callback"),(0,a.kt)("h2",{id:"data"},"Data"),(0,a.kt)("h3",{id:"apiuser-data"},(0,a.kt)("inlineCode",{parentName:"h3"},"/api/user-data")),(0,a.kt)("p",null,"Basic data about the user"))}s.isMDXComponent=!0}}]);