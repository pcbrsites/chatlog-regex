(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1b2262de"],{"386d":function(e,t,a){"use strict";var n=a("cb7c"),r=a("83a1"),l=a("5f1b");a("214f")("search",1,function(e,t,a,s){return[function(a){var n=e(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,n):new RegExp(a)[t](String(n))},function(e){var t=s(a,e,this);if(t.done)return t.value;var o=n(e),i=String(this),u=o.lastIndex;r(u,0)||(o.lastIndex=0);var c=l(o,i);return r(o.lastIndex,u)||(o.lastIndex=u),null===c?-1:c.index}]})},"460d":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("q-card",{attrs:{flat:""}},[a("q-tabs",{staticClass:"bg-grey-3 text-grey-7",attrs:{dense:"","active-color":"primary","indicator-color":"purple",align:"justify"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab",{attrs:{name:"log",label:"LOG"}}),a("q-tab",{attrs:{name:"chat",label:"CHAT"}})],1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"log"}},[a("q-card",{attrs:{flat:""}},[a("q-card-section",[a("q-btn",{on:{click:function(t){e.tab="chat"}}},[e._v("VER LOG")]),a("q-select",{attrs:{outlined:"",label:"FILE REGEX","emit-value":"",options:e.listRegexs},on:{input:e.onChageRegex},model:{value:e.seelctRegex,callback:function(t){e.seelctRegex=t},expression:"seelctRegex"}}),a("q-input",{attrs:{outlined:"",label:"regex",placeholder:"LOG"},model:{value:e.strRegx,callback:function(t){e.strRegx=t},expression:"strRegx"}}),a("q-input",{attrs:{outlined:"",type:"textarea","float-label":"LOG",placeholder:"LOG"},model:{value:e.logtxt,callback:function(t){e.logtxt=t},expression:"logtxt"}})],1)],1)],1),a("q-tab-panel",{attrs:{name:"chat"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("q-select",{attrs:{outlined:"",label:"@Username",options:e.listsUsernames},scopedSlots:e._u([e.username?{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(t){t.stopPropagation(),e.username=null}}})]},proxy:!0}:null],null,!0),model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),a("div",{staticClass:"col"},[a("q-input",{attrs:{outlined:"",label:"PESQUISAR"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]),a("div",{staticClass:"q-pa-md row justify-center"},[a("div",{staticStyle:{width:"100%","max-width":"400px"}},e._l(e.logArrSearch,function(t,n){return a("q-chat-message",{key:n,attrs:{name:"<b>"+t.username+"</b> - line "+t.linha,text:[t.msg],"text-sanitize":"",stamp:t.data+" "+t.hora,"text-color":"white","bg-color":e.randomBackgroundColor(t.username),sent:t.username===e.username}})}),1)])])],1)],1)],1)},r=[],l=(a("7514"),a("3b2b"),a("ac6a"),a("386d"),a("6762"),a("2fdb"),a("28a5"),{name:"PageIndex",data:function(){return{tab:"log",search:"",colors:["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","grey","blue-grey"],strRegx:"LOG - \\w+: \\d+ \\| (\\d{2}\\:\\d{2}\\:\\d{2}) (\\d{2}\\/\\d{2}\\/\\d{4}) \\=\\> (.*?) \\| (.*)",logtxt:"LOG - SV: 1 | 00:00:00 00/00/0000 => username | texto",seelctRegex:"chat",listRegexs:[{label:"chat",value:"chat",regex:"LOG - \\w+: \\d+ \\| (\\d{2}\\:\\d{2}\\:\\d{2}) (\\d{2}\\/\\d{2}\\/\\d{4}) \\=\\> (.*?) \\| (.*)"},{label:"admin",value:"admin",regex:"LOG - \\w+: \\d+ \\| (\\d{2}\\:\\d{2}\\:\\d{2}) (\\d{2}\\/\\d{2}\\/\\d{4}) \\=\\> O .*? \\((.*?)\\) (.*)"},{label:"antiCheat",value:"antiCheat",regex:"LOG - \\w+: \\d+ \\| (\\d{2}\\:\\d{2}\\:\\d{2}) (\\d{2}\\/\\d{2}\\/\\d{4}) \\=\\> O (usuário .*?) (.*)"},{label:"homesLog",value:"homesLog",regex:"LOG - \\w+: \\d+ \\| (\\d{2}\\:\\d{2}\\:\\d{2}) (\\d{2}\\/\\d{2}\\/\\d{4}) \\=\\> (.*?)\\) (.*)"},{label:"jailLog",value:"jailLog",regex:"LOG - \\w+: \\d+ \\| (\\d{2}\\:\\d{2}\\:\\d{2}) (\\d{2}\\/\\d{2}\\/\\d{4}) \\=\\> (.*?) (.*)"},{label:"staffLog",value:"staffLog",regex:"LOG - \\w+: \\d+ \\| (\\d{2}\\:\\d{2}\\:\\d{2}) (\\d{2}\\/\\d{2}\\/\\d{4}) \\=\\> O STAFF (.*?) (.*)"}],logs:[],username:""}},mounted:function(){window.getRegex=this.getRegex},computed:{logArr:{get:function(){var e=this,t=this.logtxt.split("\n").map(function(t,a){return e.getRegex(t,a+1)});return t}},logArrSearch:{get:function(){var e=this;return this.logArr.filter(function(t){return String(t.full).toUpperCase().includes(String(e.search).toUpperCase())})}},listsUsernames:{get:function(){var e=[];return this.logArr.forEach(function(t){e.includes(t.username)||e.push(t.username)}),e}}},methods:{getRegex:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;try{var a=new RegExp(this.strRegx,"gm"),n=a.exec(e);return{hora:n[1],data:n[2],username:"@"+n[3],msg:n[4],full:n[0],linha:t}}catch(r){return{hora:"Error Regex",data:"Error Regex",username:"Error Regex na linha -"+t,msg:e,full:"Error Regex",linha:t}}},onChageRegex:function(e){var t=this.listRegexs.find(function(t){return t.value==e});t&&(this.strRegx=t.regex)},randomBackgroundColor:function(e){return this.colors[e.length%this.colors.length]}}}),s=l,o=a("2877"),i=Object(o["a"])(s,n,r,!1,null,null,null);t["default"]=i.exports},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}}}]);