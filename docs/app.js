"use strict";(()=>{var e={598:()=>{yodasws.page("pageSouthEnd").setRoute({title:"South End",canonicalRoute:"/SouthEnd/",template(e){for(var _len=arguments.length,o=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){o[_key-1]=arguments[_key]}const t=o.join("/").replace(/\/+/g,"/").replace(/^\/|\/$/g,"").split("/").filter(e=>""!=e);return 0===t.length?"pages/SouthEnd/index.html":(console.log("Sam, path?",t.join(".")),{canonicalRoute:"/SouthEnd/"+t.join("/")+"/",template:"pages/SouthEnd/"+t.join(".")+".html"})},route:"/SouthEnd(/.*)*"}).on("load",()=>{console.log("Page loaded!")})}},o={};window.json={},function t(n){var a=o[n];if(void 0!==a)return a.exports;var l=o[n]={exports:{}};return e[n](l,l.exports,t),l.exports}(598),yodasws.page("home").setRoute({template:"pages/home.html",route:"/"})})();