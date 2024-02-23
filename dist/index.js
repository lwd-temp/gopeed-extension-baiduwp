(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}async function t(t,r,n){var i=[];return await async function r(o,a){var s,c=function(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw a}}}}(o);try{for(c.s();!(s=c.n()).done;){var l=s.value;if(1==l.isdir){if(n&&a>=n)continue;await r(await t(l.path),a+1)}else i.push(l)}}catch(e){c.e(e)}finally{c.f()}}(await t(r),1),i}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===r(o)?o:String(o)),i)}var o}var o="accessToken";const a=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.appId=t,this.secret=r,this.refreshToken=n,this.headers={"User-Agent":"netdisk"}}var r,a;return r=e,(a=[{key:"_doRequest",value:async function(e,t){for(var r=null,n=null,i=0;i<3;i++){t.access_token=await this._refreshAccessToken(this.refreshToken);var a=Object.keys(t).map((function(e){return"".concat(e,"=").concat(t[e])})).join("&"),s=await fetch("".concat("https://pan.baidu.com/rest/2.0").concat(e,"?").concat(a),{headers:this.headers}),c=await s.json();if(0!=c.errno){if(n=new Error("接口调用失败，path="+e+", errno="+c.errno),[111,-6].includes(c.errno)){gopeed.storage.remove(o);continue}throw n}n=null,r=c;break}if(n)throw n;return r}},{key:"getFileList",value:async function(e){return await t(this._doGetList.bind(this),e,2)}},{key:"_doGetList",value:async function(e){for(var t=0,r={method:"list",dir:e,web:"web",order:"name"},i=[];;){r.start=t,r.limit=200,t+=200;var o=await this._doRequest("/xpan/file",r);if(0==o.list.length)break;i.push.apply(i,function(e){if(Array.isArray(e))return n(e)}(a=o.list.map((function(e){return e.path=encodeURIComponent(e.path),e})))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}var a;return i}},{key:"_refreshAccessToken",value:async function(e){var t=gopeed.storage.get(o);if(!t){var r=await fetch("https://openapi.baidu.com/oauth/2.0/token?grant_type=refresh_token&refresh_token=".concat(e,"&client_id=iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v&client_secret=jXiFMOPVPCWlO2M5CwWQzffpNPaGTRBG"));t=(await r.json()).access_token,gopeed.storage.set(o,t)}return t}},{key:"getDlink",value:async function(e){var t={method:"filemetas",fsids:"[".concat(e,"]"),dlink:1},r=await this._doRequest("/xpan/multimedia",t);return"".concat(r.list[0].dlink,"&access_token=").concat(await this._refreshAccessToken(this.refreshToken))}}])&&i(r.prototype,a),Object.defineProperty(r,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===s(i)?i:String(i)),n)}var i}var l="https://pan.baidu.com";const u=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.surl=t,this.pwd=r,this.headers={"User-Agent":"netdisk",Cookie:"BDUSS=".concat(n,"; ndut_fmt="),Referer:"https://pan.baidu.com/disk/home"}}var r,n;return r=e,(n=[{key:"getShareInfo",value:async function(){var e=await fetch("".concat(l,"/share/wxlist?channel=weixin&version=2.2.2&clienttype=25&web=1"),{method:"POST",headers:this.headers,body:"pwd=".concat(this.pwd,"&shorturl=").concat(this.surl,"&root=1")}),t=await e.json();if(0!=t.errno)throw new Error("获取分享信息失败，errno="+t.errno);return t.data}},{key:"getFileList",value:async function(){return await t(this._doGetList.bind(this),"")}},{key:"getDlink",value:async function(e){var t=await this.getShareInfo(),r=t.uk,n=t.shareid,i=t.seckey,o=await fetch("".concat(l,"/share/tplconfig?fields=sign,timestamp&channel=chunlei&web=1&app_id=250528&clienttype=0&surl=").concat(this.surl),{headers:this.headers}),a=await o.json();if(0!=a.errno)throw new Error("获取签名失败，errno="+a.errno);var s=a.data,c=s.sign,u=s.timestamp,f=await fetch("".concat(l,"/api/sharedownload?app_id=250528&channel=chunlei&clienttype=12&web=1&sign=").concat(c,"&timestamp=").concat(u),{method:"POST",headers:this.headers,body:'encrypt=0&extra={"sekey":"'.concat(i,'"}&fid_list=[').concat(e,"]&primaryid=").concat(n,"&product=share&type=nolimit&uk=").concat(r)}),p=await f.json();if(0!=p.errno)throw new Error("获取下载链接失败，errno="+p.errno);return p.list[0].dlink}},{key:"_doGetList",value:async function(e){for(var t=""===e?1:0,r=1,n=!0,i=[];n;){var o=await this._doGetPageList(e,t,r);i=i.concat(o.list),n=o.has_more,r++}return i}},{key:"_doGetPageList",value:async function(e,t,r){var n=await fetch("https://pan.baidu.com/share/wxlist?channel=weixin&version=2.2.2&clienttype=25&web=1",{method:"POST",headers:this.headers,body:"dir=".concat(e,"&num=1000&order=time&page=").concat(r,"&pwd=").concat(this.pwd,"&root=").concat(t,"&shorturl=").concat(this.surl)}),i=await n.json();if(0!=i.errno)throw new Error("解析文件列表失败，errno="+i.errno);return i.data}}])&&c(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}async function d(e,t){var r=decodeURIComponent(t).split("/").pop()||"全部文件",n=new a(gopeed.settings.clientId,gopeed.settings.clientSecret,gopeed.settings.refreshToken),i=await n.getFileList(t);gopeed.logger.debug("fileList",JSON.stringify(i)),e.res={name:r,files:i.map((function(e){var r;return{name:e.server_filename,size:e.size,path:decodeURIComponent(e.path.replace(t,"")).split("/").slice(1,-1).join("/"),req:{url:"http://d.pcs.baidu.com/file/".concat(e.fs_id),extra:{header:{"User-Agent":"pan.baidu.com"}},labels:(r={},p(r,gopeed.info.identity,"1"),p(r,"fid",e.fs_id),p(r,"notShare","1"),r)}}}))}}async function h(e){var t=e.meta.req;if(!t.labels.gotDlink||"error"==e.status){var r=t.labels.fid,n=t.url;if(t.labels.notShare){var i=new a(gopeed.settings.clientId,gopeed.settings.clientSecret,gopeed.settings.refreshToken);n=await i.getDlink(r)}else{var o=t.labels.surl,s=t.labels.pwd,c=new u(o,s,gopeed.settings.bduss);n=await c.getDlink(r)}gopeed.logger.info("dlink",n),t.url=n,t.labels.gotDlink="1"}}gopeed.events.onResolve((async function(e){if(e.req.url.includes("pan.baidu.com/disk/main")){var t=new URL(e.req.url).hash.match(/path=(.*)/);if(!t)return;var r=t[1];await d(e,r)}else if(e.req.url.includes("pan.baidu.com/wap/home")){var n=new URL(e.req.url),i="/";if(n.hash){var o=n.hash.match(/dir\/(.*)/);o&&(i=o[1])}await d(e,i)}else e.req.url.includes("pan.baidu.com/s/")&&await async function(e){var t=new URL(e.req.url),r=t.pathname.split("/")[2],n=t.searchParams,i="";if(n&&n.get("pwd")&&(i=n.get("pwd")),r){var o=new u(r,i,gopeed.settings.bduss),a=await o.getShareInfo(),s=a.title.split("/").pop()+(a.list.length>1?"等":""),c=a.title.split("/").slice(0,-1).join("/")+"/",l=await o.getFileList();gopeed.logger.debug("fileList",JSON.stringify(l)),e.res={name:s,files:l.map((function(t){var n;return{name:t.server_filename,size:t.size,path:t.path.replace(c,"").split("/").slice(0,-1).join("/"),req:{url:t.dlink,extra:{header:{"User-Agent":"pan.baidu.com"}},labels:(n={},p(n,gopeed.info.identity,"1"),p(n,"rawUrl",e.req.url),p(n,"surl",r),p(n,"pwd",i),p(n,"fid",t.fs_id),n)}}}))}}}(e)})),gopeed.events.onStart((async function(e){await h(e.task)})),gopeed.events.onError((async function(e){await h(e.task),e.task.continue()}))})();