// build time:Sun Oct 18 2020 13:47:28 GMT+0800 (GMT+08:00)
var e={version:"0.2.2",hostname:"http://www.xieyihui.top",root:"/",statics:"/",favicon:{normal:"images/favicon.ico",hidden:"images/failure.ico"},js:{valine:"gh/amehime/MiniValine@4.2.2-beta9/dist/MiniValine.min.js",chart:"npm/frappe-charts@1.5.0/dist/frappe-charts.min.iife.min.js",copy_tex:"npm/katex@0/dist/contrib/copy-tex.min.js",fancybox:"combine/npm/jquery@3.5.1/dist/jquery.min.js,npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js,npm/justifiedGallery@3.8.1/dist/js/jquery.justifiedGallery.min.js"},css:{valine:"css/comment.css",katex:"npm/katex@0/dist/katex.min.css",mermaid:"css/mermaid.css",fancybox:"combine/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css,npm/justifiedGallery@3.8.1/dist/css/justifiedGallery.min.css"},loader:{start:true,"switch":true},search:{appID:"PWLYK4UQNS",apiKey:"33f90be7dfa34c02cb4b0df7ac885598",indexName:"index",hits:{per_page:10}},valine:{appId:"Rz1ovWlG9E3TJd18o28XkNAh-MdYXbMMI",appKey:"OfvjUx9Hc33Rn2VAKhPcjoSy",placeholder:"ヽ(○´∀`)ﾉ♪",avatar:"mp",pageSize:10,lang:"zh-CN",visitor:true,NoRecordIP:false,requiredFields:["nick","mail"],enableQQ:true,notify:true,tagMeta:["主人","小伙伴","新朋友"],master:["fa915dff676632ecda4f6d351b7d2ebe"],friends:["402355a468d6d90c6d6c59d2c0a4822f"],tips:"昵称框中填入QQ号，将自动获取QQ昵称&邮箱&头像；其他邮箱由Gavatar提供头像。",powerMode:true},quicklink:{timeout:3e3,priority:true},audio:["https://y.qq.com/n/yqq/playlist/7743939205.html","https://y.qq.com/n/yqq/playlist/7707665154.html"],fireworks:["rgba(255,182,185,.9)","rgba(250,227,217,.9)","rgba(187,222,214,.9)","rgba(138,198,209,.9)"]};const t=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const i=function(){return d("main > .inner").offsetHeight};const n=function(e,t,i){if(i){t()}else{var n=document.createElement("script");n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState)){n.onload=n.onreadystatechange=null;n=undefined;if(!i&&t)setTimeout(t,0)}};n.src=e;document.head.appendChild(n)}};const a=function(t,i){var n=e[t][i];if(n.indexOf("npm")>-1||n.indexOf("gh")>-1||n.indexOf("combine")>-1)return"//cdn.jsdelivr.net/"+n;if(n.indexOf("http")>-1)return n;return h+n};const s=function(e,t,i){if(LOCAL[e]){n(a("js",e),t||function(){window[e]=true},i||window[e])}};const r=function(e,t){if(window["css"+e])return;if(LOCAL[e]){document.head.createChild("link",{rel:"stylesheet",href:a("css",e)});window["css"+e]=true}};const c=function(e){var t=e.text||e.textContent||e.innerHTML||"";var i=e.parentNode;i.removeChild(e);var n=document.createElement("script");if(e.id){n.id=e.id}if(e.className){n.className=e.className}if(e.type){n.type=e.type}if(e.src){n.src=e.src;n.async=false}if(e.dataset.pjax!==undefined){n.dataset.pjax=""}if(t!==""){n.appendChild(document.createTextNode(t))}i.appendChild(n)};const o=function(e,t,i){var n={targets:typeof t=="number"?e.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:t||(typeof e=="number"?e:e.top()+document.documentElement.scrollTop-S),complete:function(){i&&i()}};anime(n)};const l=function(e,t,i){var n={};var a="none";switch(t){case 0:n={opacity:[1,0]};break;case 1:n={opacity:[0,1]};a="block";break;case"bounceUpIn":n={begin:function(t){e.display("block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]};a="block";break;case"shrinkIn":n={begin:function(t){e.display("block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1};a="block";break;case"slideRightIn":n={begin:function(t){e.display("block")},translateX:[100,0],opacity:[0,1]};a="block";break;case"slideRightOut":n={translateX:[0,100],opacity:[1,0]};break;default:n=t;a=t.display;break}anime(Object.assign({targets:e,duration:200,easing:"linear"},n)).finished.then(function(){e.display(a);i&&i()})};const d=function(e,t){t=t||document;if(e.indexOf("#")===0){return t.getElementById(e.replace("#",""))}return t.querySelector(e)};d.all=function(e,t){t=t||document;return t.querySelectorAll(e)};d.each=function(e,t,i){return d.all(e,i).forEach(t)};Object.assign(HTMLElement.prototype,{createChild:function(e,t){var i=document.createElement(e);Object.assign(i,t);this.appendChild(i);return i},wrap:function(e){var t=document.createElement("div");Object.assign(t,e);this.parentNode.insertBefore(t,this);this.parentNode.removeChild(this);t.appendChild(this)},height:function(e){if(e){this.style.height=typeof e=="number"?e+"rem":e}return this.getBoundingClientRect().height},width:function(e){if(e){this.style.width=typeof e=="number"?e+"rem":e}return this.getBoundingClientRect().width},top:function(){return this.getBoundingClientRect().top},left:function(){return this.getBoundingClientRect().left},attr:function(e,t){if(t===null){return this.removeAttribute(e)}if(t){return this.setAttribute(e,t)}else{return this.getAttribute(e)}},insertAfter:function(e){var t=this.parentNode;if(t.lastChild==this){t.appendChild(e)}else{t.insertBefore(e,this.nextSibling)}},display:function(e){if(e==null){return this.style.display}else{this.style.display=e;return this}},child:function(e){return d(e,this)},find:function(e){return d.all(e,this)},_class:function(e,t,i){var n=t.indexOf(" ")?t.split(" "):[t];var a=this;n.forEach(function(t){if(e=="toggle"){a.classList.toggle(t,i)}else{a.classList[e](t)}})},addClass:function(e){this._class("add",e);return this},removeClass:function(e){this._class("remove",e);return this},toggleClass:function(e,t){this._class("toggle",e,t);return this},hasClass:function(e){return this.classList.contains(e)}});const u={get:function(e){return localStorage.getItem(e)},set:function(e,t){localStorage.setItem(e,t);return t},del:function(e){localStorage.removeItem(e)}};const f=function(e){var t=this,i={type:"audio",mode:"random",btns:["play-pause","music"],events:{"play-pause":function(e){if(t.media.source.paused){t.media.play()}else{t.media.pause()}},music:function(e){if(t.media.list.hasClass("show")){t.media.hideList()}else{t.media.list.addClass("show");t.media.scroll();t.media.changeTitle()}}}};var n={random:function(e){return Math.floor(Math.random()*e)},parse:function(e){var t=[];[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+).html","tencent","song"],["y.qq.com.*album/(\\w+).html","tencent","album"],["y.qq.com.*singer/(\\w+).html","tencent","artist"],["y.qq.com.*playsquare/(\\w+).html","tencent","playlist"],["y.qq.com.*playlist/(\\w+).html","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(function(i){var n=new RegExp(i[0]);var a=n.exec(e);if(a!==null){t=[i[1],i[2],a[1]]}});return t},fetch:function(e,t){var i=[];return new Promise(function(t,a){e.forEach(function(e){var a=n.parse(e);var s=JSON.stringify(a);var r=u.get(s);if(r){i.push.apply(i,JSON.parse(r));t(i)}else{fetch("https://api.i-meto.com/meting/api?server="+a[0]+"&type="+a[1]+"&id="+a[2]+"&r="+Math.random()).then(function(e){return e.json()}).then(function(e){u.set(s,JSON.stringify(e));i.push.apply(i,e);t(i)}).catch(function(e){})}})})},lrc:function(e){if(e){e=e.replace(/([^\]^\n])\[/g,function(e,t){return t+"\n["});const t=e.split("\n");var i=[];const n=t.length;for(var a=0;a<n;a++){const s=t[a].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g);const r=t[a].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(s){const c=s.length;for(var o=0;o<c;o++){const l=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(s[o]);const d=l[1]*60;const u=parseInt(l[2]);const f=l[4]?parseInt(l[4])/((l[4]+"").length===2?100:1e3):0;const h=d+u+f;i.push([h,r])}}}i=i.filter(function(e){return e[1]});i.sort(function(e,t){return e[0]-t[0]});return i}else{return[]}}};t.media={pointer:-1,loaded:false,source:null,buttons:{},playlist:[],lrc:{},fetch:function(e){var i=this;e=e||function(){};if(!this.loaded){if(this.options.rawList)n.fetch(this.options.rawList).then(function(n){i.playlist=n;a.list();i.setMode(t.media.options.mode);i.loaded=true;e()})}else{e()}},load:function(e){var t="";if(e&&e.length>0){if(this.options.rawList!==e){this.options.rawList=e;if(this.loaded){this.loaded=false;this.fetch()}}}else{t="none";this.pause()}for(var i in this.buttons){this.buttons[i].display(t)}},setMode:function(e){var i=this.playlist.length;if(!i)return;var a=function(e){if(e+1==i){e=-1}t.media.pointer=++e};switch(e){case"random":var s=n.random(i);if(this.pointer!==s){this.pointer=s}else{a(this.pointer)}break;case"next":a(this.pointer);break}this.setSource()},setCurrent:function(e){if(typeof e=="number"&&e!=this.pointer&&this.playlist[e]&&!this.playlist[e]["error"]){this.pointer=e;this.setSource()}},setSource:function(){var e=this.playlist[this.pointer];if(e["error"]){this.setMode("next");return}var t=false;if(!this.source.paused){t=true;this.stop()}this.source.attr("src",e.url);this.source.attr("title",e.title+" - "+e.author);a.progress();a.preview();if(t==true){this.play()}},play:function(){if(this.playlist[this.pointer]["error"]){this.setMode("next");return}var e=this;this.source.play().then(function(){e.changeTitle()}).catch(function(e){})},pause:function(){this.source.pause();document.title=v},stop:function(){this.source.pause();this.source.currentTime=0;document.title=v},scroll:function(){var e=this.list.find("li")[this.pointer];o(e,e.offsetTop)},scrollLrc:function(e){var t=this;if(!this.lrc.data)return;if(this.lrc.index>this.lrc.data.length-1||e<this.lrc.data[this.lrc.index][0]||(!this.lrc.data[this.lrc.index+1]||e>=this.lrc.data[this.lrc.index+1][0])){for(var i=0;i<this.lrc.data.length;i++){if(e>=this.lrc.data[i][0]&&(!this.lrc.data[i+1]||e<this.lrc.data[i+1][0])){t.lrc.index=i;var n=-(t.lrc.index-1);t.lrc.el.style.transform="translateY("+n+"rem)";t.lrc.el.style.webkitTransform="translateY("+n+"rem)";t.lrc.el.getElementsByClassName("current")[0].removeClass("current");t.lrc.el.getElementsByTagName("p")[i].addClass("current")}}}},hideList:function(){var e=this.list;e.addClass("hide");window.setTimeout(function(){e.removeClass("show hide")},300)},changeTitle:function(){if(!this.source.paused)document.title="Now Playing..."+this.playlist[this.pointer]["title"]+" - "+this.playlist[this.pointer]["author"]+" | "+v}};var a={button:function(e){if(!t.media.buttons[e]){var i=document.createElement("div");i.addClass(e+" btn");i.addEventListener("click",function(){t.media.fetch(t.media.options.events[e])});t.appendChild(i);t.media.buttons[e]=i}},audio:function(){if(!t.media.source){var e=document.createElement("audio");e.addEventListener("error",function(){t.media.list.find("li")[t.media.pointer].addClass("error");t.media.playlist[t.media.pointer]["error"]=true;t.media.setMode("next")});e.addEventListener("play",function(){t.addClass("playing");t.media.list.addClass("playing");U(e.attr("title"))});e.addEventListener("pause",function(){t.removeClass("playing");t.media.list.removeClass("playing")});e.addEventListener("timeupdate",function(){var i=Math.floor(e.currentTime/e.duration*100);t.media.progress.width(i+"%");if(t.media.lrc){t.media.scrollLrc(e.currentTime)}if(i==100){t.media.setMode("next");t.media.play()}});t.appendChild(e);t.media.source=e}},info:function(){if(!t.media.list){var e=document.createElement("div");e.addClass("play-list");e.innerHTML='<div class="preview"></div><ol></ol>';t.media.list=e;t.insertAfter(e);d("#main").addEventListener("click",function(){t.media.hideList()})}},list:function(){var e=t.media.list.child("ol");e.innerHTML="";t.media.playlist.forEach(function(i,n){var a=document.createElement("li");a.innerHTML='<span class="info"><span>'+i.title+"</span><span>"+i.author+"</span></span>";a.title=i.title+" - "+i.author;a.addEventListener("click",function(e){var i=e.currentTarget;if(t.media.pointer===n&&t.media.progress){if(t.media.source.paused){t.media.play()}else{t.media.source.currentTime=t.media.source.duration*Math.floor(e.clientX-i.left())/i.width()}return}t.media.setCurrent(n);t.media.play()});e.appendChild(a)})},progress:function(){if(t.media.progress){t.media.progress.parentNode.removeClass("current");t.media.progress.remove()}var e=t.media.list.find("li")[t.media.pointer];if(e){var i=document.createElement("div");i.addClass("progress");e.appendChild(i);t.media.progress=i;e.addClass("current");t.media.scroll()}},preview:function(){var e=t.media.list.child(".preview");var i=t.media.playlist[t.media.pointer];e.innerHTML='<div class="cover"><div class="disc"><img src="'+i.pic+'" class="blur" /></div></div>'+'<div class="info"><h4 class="title">'+i.title+"</h4><span>"+i.author+'</span><div class="lrc"></div></div>';var a="";fetch(i.lrc).then(function(e){return e.text()}).then(function(s){if(i!==t.media.playlist[t.media.pointer])return;t.media.lrc.data=n.lrc(s);var r="";t.media.lrc.data.forEach(function(e,t){a+="<p"+(t===0?' class="current"':"")+">"+e[1]+"</p>"});var c=document.createElement("div");c.addClass("inner");c.innerHTML=a;e.child(".lrc").innerHTML="";e.child(".lrc").appendChild(c);t.media.lrc.el=c;t.media.lrc.index=0}).catch(function(e){});e.child(".cover").addEventListener("click",t.media.options.events["play-pause"])}},s=function(e){if(t.media.created)return;t.media.options=Object.assign(i,e);t.media.options.btns.forEach(a.button);a[t.media.options.type]();a.info();t.media.created=true};s(e)};Object.assign(HTMLElement.prototype,{player:f});var h=e.statics.indexOf("//")>0?e.statics:e.root;var p={x:"undefined",y:"undefined"};var m=0;var v,g;const y=document.getElementsByTagName("body")[0];const b=document.documentElement;const w=d("#container");const C=d("#loading");const x=d("#nav");const L=d("#header");const k=x.child(".toggle");const E=d("#quick");const T=d("#sidebar");const N=d("#brand");var M=d("#tool"),O,j,I,q;var H=d("#search");var S,A,R;var P=0,B=window.location.href;var Y;const D=lozad("img, [data-background-image]",{loaded:function(e){e.addClass("lozaded")}});const W={timer:null,lock:false,show:function(){clearTimeout(this.timer);document.body.removeClass("loaded");C.attr("style","display:block");W.lock=false},hide:function(t){if(!e.loader.start)t=-1;this.timer=setTimeout(this.vanish,t||3e3)},vanish:function(){if(W.lock)return;if(e.loader.start)l(C,0);document.body.addClass("loaded");W.lock=true}};const z=function(e){var t=d(".theme .ic");if(e){b.attr("data-theme",e);t.removeClass("i-sun");t.addClass("i-moon")}else{b.attr("data-theme",null);t.removeClass("i-moon");t.addClass("i-sun")}};const Q=function(e){if(b.attr("data-theme")=="dark")e="#222";d('meta[name="theme-color"]').attr("content",e)};const _=function(){window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e){if(e.matches){z("dark")}else{z()}});var e=u.get("theme");if(e){z(e)}d(".theme").addEventListener("click",function(e){var t=e.currentTarget.child(".ic");var i=y.createChild("div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'});var n=function(){l(i,{delay:2500,opacity:0},function(){y.removeChild(i)})};if(t.hasClass("i-sun")){var a=function(){i.addClass("dark");z("dark");u.set("theme","dark");n()}}else{i.addClass("dark");var a=function(){i.removeClass("dark");z();u.del("theme");n()}}l(i,1,function(){setTimeout(a,1e3)})})};const F=function(){document.addEventListener("visibilitychange",function(){switch(document.visibilityState){case"hidden":d('[rel="icon"]').attr("href",h+e.favicon.hidden);document.title=LOCAL.favicon.hide;if(e.loader.switch)W.show();clearTimeout(g);break;case"visible":d('[rel="icon"]').attr("href",h+e.favicon.normal);document.title=LOCAL.favicon.show;if(e.loader.switch)W.hide(1e3);g=setTimeout(function(){document.title=v},2e3);break}})};const U=function(e){if(!e)return;var t=y.createChild("div",{innerHTML:e,className:"tip"});setTimeout(function(){t.addClass("hide");setTimeout(function(){y.removeChild(t)},300)},3e3)};const G=function(e){S=x.height();A=L.height();R=A+d("#waves").height();J(null,1);T.style=""};const X=function(e){var t=window.innerHeight;var n=i();var a=n>t?n-t:document.body.scrollHeight-t;var s=window.pageYOffset>A;var r=window.pageYOffset>0;if(s){Q("#FFF")}else{Q("#222")}x.toggleClass("show",s);M.toggleClass("affix",r);N.toggleClass("affix",r);T.toggleClass("affix",window.pageYOffset>R&&document.body.offsetWidth>991);if(typeof p.y=="undefined"){p.y=window.pageYOffset}m=p.y-window.pageYOffset;if(m<0){x.removeClass("up");x.toggleClass("down",s)}else if(m>0){x.removeClass("down");x.toggleClass("up",s)}else{}p.y=window.pageYOffset;var c=Math.round(Math.min(100*window.pageYOffset/a,100))+"%";j.child("span").innerText=c;d(".percent").width(c)};const K=function(){u.set(B,p.y)};const V=function(e){var t=window.location.hash;var i=null;if(P){u.del(window.location.href);return}if(t)i=d(decodeURI(t));else{i=parseInt(u.get(window.location.href))}if(i){o(i);P=1}if(e&&t&&!P){o(i);P=1}};const $=function(e,t){var i=y.createChild("textarea",{style:{top:window.scrollY+"px",position:"absolute",opacity:"0"},readOnly:true,value:e});const n=document.getSelection();const a=n.rangeCount>0?n.getRangeAt(0):false;i.select();i.setSelectionRange(0,e.length);i.readOnly=false;var s=document.execCommand("copy");t&&t(s);i.blur();if(a){n.removeAllRanges();n.addRange(a)}y.removeChild(i)};const J=function(e,t){if(T.hasClass("on")){T.removeClass("on");k.removeClass("close");l(T,"slideRightOut")}else{if(t)return;l(T,"slideRightIn",function(){T.addClass("on");k.addClass("close")})}};const Z=function(){var e=T.child(".inner");var t=T.find(".panel");if(T.child(".tab")){e.removeChild(T.child(".tab"))}var i=document.createElement("ul"),n="active";i.className="tab";["contents","related","overview"].forEach(function(e){var t=T.child(".panel."+e);if(t.innerHTML.replace(/(^\s*)|(\s*$)/g,"").length<1){if(e=="contents"){q.display("none")}return}if(e=="contents"){q.display("")}var a=document.createElement("li");var s=document.createElement("span");var r=document.createTextNode(t.attr("data-title"));s.appendChild(r);a.appendChild(s);a.addClass(e+" item");if(n){t.addClass(n);a.addClass(n)}else{t.removeClass("active")}a.addEventListener("click",function(e){var t=event.currentTarget;if(t.hasClass("active"))return;T.find(".tab .item").forEach(function(e){e.removeClass("active")});T.find(".panel").forEach(function(e){e.removeClass("active")});T.child(".panel."+t.className.replace(" item","")).addClass("active");t.addClass("active")});i.appendChild(a);n=""});if(i.childNodes.length>1){e.insertBefore(i,e.childNodes[0]);T.child(".panels").style.paddingTop=""}else{T.child(".panels").style.paddingTop=".625rem"}};const ee=function(){var t=d.all(".contents li");if(t.length<1){return}var i=Array.prototype.slice.call(t)||[];var n=null;i=i.map(function(t,i){var a=t.child("a.toc-link");var r=d(decodeURI(a.attr("href")));if(!r)return;var c=r.child("a.anchor");var l=function(e){e.preventDefault();var t=d(decodeURI(e.currentTarget.attr("href")));n=i;o(t,null,function(){s(i);n=null})};a.addEventListener("click",l);c&&c.addEventListener("click",function(t){l(t);$(e.hostname+"/"+LOCAL.path+t.currentTarget.attr("href"))});return r});var a=T.child(".contents.panel");var s=function(e,n){var s=t[e];if(!s)return;if(s.hasClass("current")){return}d.each(".toc .active",function(e){e&&e.removeClass("active current")});i.forEach(function(e){e&&e.removeClass("active")});s.addClass("active current");i[e]&&i[e].addClass("active");var r=s.parentNode;while(!r.matches(".contents")){if(r.matches("li")){r.addClass("active");var c=d(r.child("a.toc-link").attr("href"));if(c){c.addClass("active")}}r=r.parentNode}if(getComputedStyle(T).display!="none"&&a.hasClass("active")){o(a,s.offsetTop-a.offsetHeight/4)}};var r=function(e){var t=0;var n=e[t];if(n.boundingClientRect.top>0){t=i.indexOf(n.target);return t===0?0:t-1}for(;t<e.length;t++){if(e[t].boundingClientRect.top<=0){n=e[t]}else{return i.indexOf(n.target)}}return i.indexOf(n.target)};var c=function(){var e=new IntersectionObserver(function(e,t){var i=r(e)+(m<0?1:0);if(n===null){s(i)}},{rootMargin:"0px 0px -100% 0px",threshold:0});i.forEach(function(t){t&&e.observe(t)})};c()};const te=function(){o(0)};const ie=function(){o(parseInt(w.height()))};const ne=function(){o(d("#comments"))};const ae=function(){d.each(".menu .item:not(.title)",function(t){var i=t.child("a[href]");if(!i)return;var n=i.pathname===location.pathname||i.pathname===location.pathname.replace("index.html","");var a=!e.root.startsWith(i.pathname)&&location.pathname.startsWith(i.pathname);var s=i.hostname===location.hostname&&(n||a);t.toggleClass("active",s);t.parentNode.parentNode.toggleClass("expand",t.parentNode.hasClass("submenu")&&t.parentNode.child(".active"))})};const se=function(){if(!d(".index.wrap"))return;var e=new IntersectionObserver(function(t){t.forEach(function(t){if(!window.IntersectionObserver){if(t.target.hasClass("show")===false){t.target.addClass("show")}}else{if(t.target.hasClass("show")){e.unobserve(t.target)}else{if(t.isIntersecting){t.target.addClass("show");e.unobserve(t.target)}}}})},{root:null,threshold:[.3]});d.each(".index.wrap article.item, .index.wrap section.item",function(t){e.observe(t)});d(".index.wrap .item:first-child").addClass("show");d.each(".cards .item",function(e,t){["mouseenter","touchstart"].forEach(function(t){e.addEventListener(t,function(t){if(d(".cards .item.active")){d(".cards .item.active").removeClass("active")}e.addClass("active")})});["mouseleave"].forEach(function(t){e.addEventListener(t,function(t){e.removeClass("active")})})})};const re=function(){d.each("span.exturl",function(e){var t=document.createElement("a");t.href=decodeURIComponent(atob(e.dataset.url).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));t.rel="noopener external nofollow noreferrer";t.target="_blank";t.className=e.className;t.title=e.title||e.innerText;t.innerHTML=e.innerHTML;if(e.dataset.backgroundImage){t.dataset.backgroundImage=e.dataset.backgroundImage}e.parentNode.replaceChild(t,e)})};const ce=function(){oe();if(!d(".md"))return;d(".post.block").oncopy=function(e){U(LOCAL.copyright);var t=d("#copyright");if(window.getSelection().toString().length>30&&t){e.preventDefault();var i="# "+t.child(".author").innerText;var n="# "+t.child(".link").innerText;var a="# "+t.child(".license").innerText;var s=i+"<br>"+n+"<br>"+a+"<br><br>"+window.getSelection().toString().replace(/\r\n/g,"<br>");var r=i+"\n"+n+"\n"+a+"\n\n"+window.getSelection().toString().replace(/\r\n/g,"\n");if(e.clipboardData){e.clipboardData.setData("text/html",s);e.clipboardData.setData("text/plain",r)}else if(window.clipboardData){return window.clipboardData.setData("text",r)}}};if(d(".md img")){r("fancybox");s("fancybox",function(){var e=jQuery.noConflict();d.each("p.gallery",function(e){var t=document.createElement("div");t.className="gallery";t.attr("data-height",e.attr("data-height")||120);t.innerHTML=e.innerHTML.replace(/<br>/g,"");e.parentNode.insertBefore(t,e);e.remove()});d.each(".md img",function(t){var i=e(t);var n,a;if(!i.is("a img")){var s=i.attr("data-src")||i.attr("src");i.data("safe-src",s);var r=i.wrap('<a class="fancybox" href="'+s+'" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>').parent("a");if(!i.is(".gallery img")){r.attr("data-fancybox","default").attr("rel","default");a="image-info"}else{a="jg-caption"}}if(n=t.attr("title")){var c=document.createElement("span");var o=document.createTextNode(n);c.appendChild(o);c.addClass(a);t.insertAfter(c)}});e("div.gallery").each(function(t,i){e(i).justifiedGallery({rowHeight:e(i).data("height")||120,rel:"gallery-"+t}).on("jg.complete",function(){e(this).find("a").each(function(e,i){i.attr("data-fancybox","gallery-"+t)})})});e.fancybox.defaults.hash=false;e(".fancybox").fancybox({loop:true,helpers:{overlay:{locked:false}}})},window.jQuery)}d.each("li ruby",function(e){var t=e.parentNode;if(e.parentNode.tagName!="LI"){t=e.parentNode.parentNode}t.addClass("ruby")});d.each(".md table",function(e){e.wrap({className:"table-container"})});d.each(".highlight > .table-container",function(e){e.className="code-container"});d.each("figure.highlight",function(e){var t=e.child(".code-container");var i=e.child("figcaption");e.insertAdjacentHTML("beforeend",'<div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div>');var n=e.child(".copy-btn");n.addEventListener("click",function(e){var i=e.currentTarget;var n="",a="";t.find("pre").forEach(function(e){a+=n+e.innerText;n="\n"});$(a,function(e){i.child(".ic").className=e?"ic i-check":"ic i-times";i.blur();U(LOCAL.copyright)})});n.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.child(".ic").className="ic i-clipboard"},1e3)});var a=e.child(".breakline-btn");a.addEventListener("click",function(t){var i=t.currentTarget;if(e.hasClass("breakline")){e.removeClass("breakline");i.child(".ic").className="ic i-align-left"}else{e.addClass("breakline");i.child(".ic").className="ic i-align-justify"}});var s=e.child(".fullscreen-btn");var r=function(){e.removeClass("fullscreen");e.scrollTop=0;y.removeClass("fullscreen");s.child(".ic").className="ic i-expand"};var c=function(t){var i=t.currentTarget;if(e.hasClass("fullscreen")){r();f&&f();o(e)}else{e.addClass("fullscreen");y.addClass("fullscreen");s.child(".ic").className="ic i-compress";u&&u()}};s.addEventListener("click",c);i&&i.addEventListener("click",c);if(t&&t.height()>300){t.style.maxHeight="300px";t.insertAdjacentHTML("beforeend",'<div class="show-btn"><i class="ic i-angle-down"></i></div>');var l=t.child(".show-btn");var d=l.child("i");var u=function(){t.style.maxHeight="";l.addClass("open")};var f=function(){t.style.maxHeight="300px";l.removeClass("open")};l.addEventListener("click",function(e){if(l.hasClass("open")){r();f();o(t)}else{u()}})}});d.each("pre.mermaid > svg",function(e){e.style.maxWidth=""});d.each(".reward button",function(e){e.addEventListener("click",function(e){e.preventDefault();var t=d("#qr");if(t.display()==="inline-flex"){l(t,0)}else{l(t,1,function(){t.display("inline-flex")})}})});d.each(".quiz > ul.options li",function(e){e.addEventListener("click",function(t){if(e.hasClass("correct")){e.toggleClass("right");e.parentNode.parentNode.addClass("show")}else{e.toggleClass("wrong")}})});d.each(".quiz > p",function(e){e.addEventListener("click",function(t){e.parentNode.toggleClass("show")})});var e;d.each("div.tab",function(t,i){var n=t.attr("data-id");var a=t.attr("data-title");var s=d("#"+n);if(!s){s=document.createElement("div");s.className="tabs";s.id=n;s.innerHTML='<div class="show-btn"></div>';var r=s.child(".show-btn");r.addEventListener("click",function(e){o(s)});t.parentNode.insertBefore(s,t);e=true}else{e=false}var c=s.child(".nav");if(!c){c=s.createChild("ul",{className:"nav"})}var l=c.createChild("li",{innerHTML:a});if(e){l.addClass("active");t.addClass("active")}l.addEventListener("click",function(e){var i=e.currentTarget;s.find(".active").forEach(function(e){e.removeClass("active")});t.addClass("active");i.addClass("active")});s.appendChild(t)});d.each("div.tags a",function(e){e.className=["primary","success","info","warning","danger"][Math.floor(Math.random()*5)]})};const oe=function(){var e=d("#comments");if(!e){I.display("none");return}else{I.display("")}var t=new IntersectionObserver(function(e,t){var i=e[0];r("valine");if(i.isIntersecting){l(d("#comments"),"bounceUpIn");t.disconnect()}});t.observe(e)};const le=function(t){if(e.search===null)return;if(!H){H=y.createChild("div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})}var i=instantsearch({indexName:e.search.indexName,searchClient:algoliasearch(e.search.appID,e.search.apiKey),searchFunction:function(e){var t=d(".search-input");if(t.value){e.search()}}});i.on("render",function(){t.refresh(d("#search-hits"))});i.addWidgets([instantsearch.widgets.configure({hitsPerPage:e.search.hits.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:LOCAL.search.placeholder,showReset:false,showSubmit:false,showLoadingIndicator:false,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:"#search-stats",templates:{text:function(e){var t=LOCAL.search.stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return t+'<span class="algolia-powered"></span><hr>'}}}),instantsearch.widgets.hits({container:"#search-hits",templates:{item:function(t){var i=t.categories?"<span>"+t.categories.join('<i class="ic i-angle-right"></i>')+"</span>":"";return'<a href="'+e.root+t.path+'">'+i+t._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="hits-empty">'+LOCAL.search.empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"item"}}),instantsearch.widgets.pagination({container:"#search-pagination",scrollTo:false,showFirst:false,showLast:false,templates:{first:'<i class="ic i-angle-double-left"></i>',last:'<i class="ic i-angle-double-right"></i>',previous:'<i class="ic i-angle-left"></i>',next:'<i class="ic i-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]);i.start();d.each(".search",function(e){e.addEventListener("click",function(){document.body.style.overflow="hidden";l(H,"shrinkIn",function(){d(".search-input").focus()})})});const n=function(){document.body.style.overflow="";l(H,0)};H.addEventListener("click",function(e){if(e.target===H){n()}});d(".close-btn").addEventListener("click",n);window.addEventListener("pjax:success",n);window.addEventListener("keyup",function(e){if(e.key==="Escape"){n()}})};const de=function(){d.each(".overview .menu > .item",function(e){x.child(".menu").appendChild(e.cloneNode(true))});C.addEventListener("click",W.vanish);k.addEventListener("click",J);d(".dimmer").addEventListener("click",J);E.child(".down").addEventListener("click",ie);E.child(".up").addEventListener("click",te);if(!M){M=L.createChild("div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})}O=M.child(".player");j=M.child(".back-to-top");I=M.child(".chat");q=M.child(".contents");j.addEventListener("click",te);I.addEventListener("click",ne);q.addEventListener("click",J);O.player()};const ue=function(){K();if(T.hasClass("on")){l(T,function(){T.removeClass("on");k.removeClass("close")})}d("#content").innerHTML="";d("#content").appendChild(C.lastChild.cloneNode(true));o(0)};const fe=function(t){P=0;B=window.location.href;r("katex");s("copy_tex");r("mermaid");s("chart");s("valine",function(){var t=Object.assign({},e.valine);t=Object.assign(t,LOCAL.valine||{});t.el="#comments";t.pathname=LOCAL.path;t.pjax=Y;t.lazyload=D;new MiniValine(t);setTimeout(function(){V(1)},1e3)},window.MiniValine);if(!t){d.each("script[data-pjax]",c)}v=document.title;G();ae();Z();ee();re();ce();O.media.load(LOCAL.audio||e.audio||{});W.hide();setTimeout(function(){V()},500);se();D.observe()};const he=function(){
de();Y=new Pjax({selectors:["head title",".languages",".pjax","script[data-config]"],analytics:false,cacheBust:false});e.quicklink.ignores=LOCAL.ignores;quicklink.listen(e.quicklink);F();_();le(Y);window.addEventListener("scroll",X);window.addEventListener("resize",G);window.addEventListener("pjax:send",ue);window.addEventListener("pjax:success",fe);window.addEventListener("beforeunload",function(){K()});fe(1)};window.addEventListener("DOMContentLoaded",he);var pe=document.createElement("canvas");pe.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:9999999";document.body.appendChild(pe);var me=pe.getContext("2d");var ve=30;var ge=0;var ye=0;var be="ontouchstart"in window||navigator.msMaxTouchPoints?"touchstart":"mousedown";var we=e.fireworks;function Ce(){pe.width=window.innerWidth*2;pe.height=window.innerHeight*2;pe.style.width=window.innerWidth+"px";pe.style.height=window.innerHeight+"px";pe.getContext("2d").scale(2,2)}function xe(e){ge=e.clientX||e.touches&&e.touches[0].clientX;ye=e.clientY||e.touches&&e.touches[0].clientY}function Le(e){var t=anime.random(0,360)*Math.PI/180;var i=anime.random(50,180);var n=[-1,1][anime.random(0,1)]*i;return{x:e.x+n*Math.cos(t),y:e.y+n*Math.sin(t)}}function ke(e,t){var i={};i.x=e;i.y=t;i.color=we[anime.random(0,we.length-1)];i.radius=anime.random(16,32);i.endPos=Le(i);i.draw=function(){me.beginPath();me.arc(i.x,i.y,i.radius,0,2*Math.PI,true);me.fillStyle=i.color;me.fill()};return i}function Ee(e,t){var i={};i.x=e;i.y=t;i.color="#FFF";i.radius=.1;i.alpha=.5;i.lineWidth=6;i.draw=function(){me.globalAlpha=i.alpha;me.beginPath();me.arc(i.x,i.y,i.radius,0,2*Math.PI,true);me.lineWidth=i.lineWidth;me.strokeStyle=i.color;me.stroke();me.globalAlpha=1};return i}function Te(e){for(var t=0;t<e.animatables.length;t++){e.animatables[t].target.draw()}}function Ne(e,t){var i=Ee(e,t);var n=[];for(var a=0;a<ve;a++){n.push(ke(e,t))}anime.timeline().add({targets:n,x:function(e){return e.endPos.x},y:function(e){return e.endPos.y},radius:.1,duration:anime.random(1200,1800),easing:"easeOutExpo",update:Te}).add({targets:i,radius:anime.random(80,160),lineWidth:0,alpha:{value:0,easing:"linear",duration:anime.random(600,800)},duration:anime.random(1200,1800),easing:"easeOutExpo",update:Te},0)}var Me=anime({duration:Infinity,update:function(){me.clearRect(0,0,pe.width,pe.height)}});document.addEventListener(be,function(e){Me.play();xe(e);Ne(ge,ye)},false);Ce();window.addEventListener("resize",Ce,false);
//rebuild by hrmmi 