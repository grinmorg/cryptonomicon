(function(e){function t(t){for(var r,o,a=t[0],s=t[1],l=t[2],d=0,f=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},c={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/cryptonomicon/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=(n("4de4"),n("b0c0"),{class:"container mx-auto flex flex-col items-center bg-gray-100 p-4"}),i={key:0,class:"fixed w-100 h-100 opacity-80 bg-purple-800 inset-0 z-50 flex items-center justify-center"},o=Object(r["f"])("svg",{class:"animate-spin -ml-1 mr-3 h-12 w-12 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[Object(r["f"])("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),Object(r["f"])("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),a={class:"container"},s={class:"flex"},l={class:"max-w-xs"},u=Object(r["f"])("label",{for:"wallet",class:"block text-sm font-medium text-gray-700"},"Тикер",-1),d={class:"mt-1 relative rounded-md shadow-md"},f={key:0,class:"flex bg-white shadow-md p-1 rounded-md shadow-md flex-wrap"},p=Object(r["f"])("div",{class:"text-sm text-red-600"},"Такой тикер уже добавлен",-1),b=Object(r["f"])("svg",{class:"-ml-0.5 mr-2 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"#ffffff"},[Object(r["f"])("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})],-1),h=Object(r["e"])(" Добавить "),g=Object(r["f"])("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),m=Object(r["e"])("Фильтр: "),O=Object(r["f"])("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),j={class:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3"},y={class:"px-4 py-5 sm:p-6 text-center"},v={class:"text-sm font-medium text-gray-500 truncate"},w={class:"mt-1 text-3xl font-semibold text-gray-900"},x=Object(r["f"])("div",{class:"w-full border-t border-gray-200"},null,-1),k=Object(r["f"])("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"#718096","aria-hidden":"true"},[Object(r["f"])("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),S=Object(r["e"])("Удалить "),C=Object(r["f"])("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),T={key:1,class:"relative"},M={class:"text-lg leading-6 font-medium text-gray-900 my-8"},P={class:"flex items-end border-gray-600 border-b border-l h-64"},z=Object(r["f"])("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",version:"1.1",width:"30",height:"30",x:"0",y:"0",viewBox:"0 0 511.76 511.76",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},[Object(r["f"])("g",null,[Object(r["f"])("path",{d:"M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z",fill:"#718096","data-original":"#000000"})])],-1);function E(e,t,n,E,L,I){return Object(r["g"])(),Object(r["c"])("div",c,[L.loading?(Object(r["g"])(),Object(r["c"])("div",i,[o])):Object(r["d"])("",!0),Object(r["f"])("div",a,[Object(r["f"])("section",null,[Object(r["f"])("div",s,[Object(r["f"])("div",l,[u,Object(r["f"])("div",d,[Object(r["k"])(Object(r["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return L.ticker=e}),onKeydown:t[2]||(t[2]=Object(r["l"])((function(){return I.add&&I.add.apply(I,arguments)}),["enter"])),onInput:t[3]||(t[3]=function(){return I.updateAutocomplete&&I.updateAutocomplete.apply(I,arguments)}),type:"text",name:"wallet",id:"wallet",class:"block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md",placeholder:"Например DOGE"},null,544),[[r["j"],L.ticker]])]),L.autocomplete.length?(Object(r["g"])(),Object(r["c"])("div",f,[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(L.autocomplete,(function(e,t){return Object(r["g"])(),Object(r["c"])("span",{key:t,class:"inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"},Object(r["i"])(e),1)})),128))])):Object(r["d"])("",!0),p])]),Object(r["f"])("button",{onClick:t[4]||(t[4]=function(){return I.add&&I.add.apply(I,arguments)}),type:"button",class:"my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"},[b,h])]),L.tickers.length?(Object(r["g"])(),Object(r["c"])(r["a"],{key:0},[g,Object(r["f"])("div",null,[L.page>1?(Object(r["g"])(),Object(r["c"])("button",{key:0,class:"my-4 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",onClick:t[5]||(t[5]=function(e){return L.page=L.page-1})}," Назад ")):Object(r["d"])("",!0),I.hasNextPage?(Object(r["g"])(),Object(r["c"])("button",{key:1,class:"my-4 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",onClick:t[6]||(t[6]=function(e){return L.page=L.page+1})}," Вперед ")):Object(r["d"])("",!0),Object(r["f"])("div",null,[m,Object(r["k"])(Object(r["f"])("input",{"onUpdate:modelValue":t[7]||(t[7]=function(e){return L.filter=e})},null,512),[[r["j"],L.filter]])])]),O,Object(r["f"])("dl",j,[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(I.paginatedTickers,(function(e){return Object(r["g"])(),Object(r["c"])("div",{key:e.name,onClick:function(t){return I.select(e)},class:[{"border-4":L.selectedTicker===e},"bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"]},[Object(r["f"])("div",y,[Object(r["f"])("dt",v,Object(r["i"])(e.name)+" - USD ",1),Object(r["f"])("dd",w,Object(r["i"])(I.formatPrice(e.price)),1)]),x,Object(r["f"])("button",{onClick:Object(r["m"])((function(t){return I.handleDelete(e)}),["stop"]),class:"flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"},[k,S],8,["onClick"])],10,["onClick"])})),128))]),C],64)):Object(r["d"])("",!0),L.selectedTicker?(Object(r["g"])(),Object(r["c"])("section",T,[Object(r["f"])("h3",M,Object(r["i"])(L.selectedTicker.name)+" - USD ",1),Object(r["f"])("div",P,[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(I.normalizedGraph,(function(e,t){return Object(r["g"])(),Object(r["c"])("div",{key:t,style:{height:"".concat(e,"%")},class:"bg-purple-800 border w-10"},null,4)})),128))]),Object(r["f"])("button",{onClick:t[8]||(t[8]=function(e){return L.selectedTicker=null}),type:"button",class:"absolute top-0 right-0"},[z])])):Object(r["d"])("",!0)])])}n("99af"),n("caad"),n("d81d"),n("fb6a"),n("b680"),n("c1f9"),n("d3b7"),n("07ac"),n("2532"),n("3ca3"),n("159b"),n("ddb0"),n("2b3d");var L=n("2909"),I=n("bc3a"),U=n.n(I),A=(n("4ec9"),"d704e80a17df9f3c01d205bccd4590c4808af57f2b4d16840b08a8505ceea86d"),D=new Map,G=new WebSocket("wss://streamer.cryptocompare.com/v2?api_key=".concat(A)),N="5";function V(e){var t=JSON.stringify(e);G.readyState!==WebSocket.OPEN?G.addEventListener("open",(function(){G.send(t)}),{once:!0}):G.send(t)}function _(e){V({action:"SubAdd",subs:["5~CCCAGG~".concat(e.toUpperCase(),"~USD")]})}function J(e){V({action:"SubRemove",subs:["5~CCCAGG~".concat(e.toUpperCase(),"~USD")]})}G.addEventListener("message",(function(e){var t,n=JSON.parse(e.data),r=n.TYPE,c=n.FROMSYMBOL,i=n.PRICE;if(r===N&&void 0!==i){var o=null!==(t=D.get(c))&&void 0!==t?t:[];o.forEach((function(e){return e(i)}))}}));var B=function(e,t){var n=D.get(e)||[];D.set(e,[].concat(Object(L["a"])(n),[t])),_(e)},H=function(e){D.delete(e),J(e)};window.tickers=D;var R={name:"App",data:function(){return{ticker:"",filter:"",coinList:null,tickers:[],selectedTicker:null,autocomplete:[],graph:[],page:1,loading:!0,errored:!1}},created:function(){var e=this,t=Object.fromEntries(new URL(window.location).searchParams.entries()),n=["filter","page"];n.forEach((function(n){t[n]&&(e[n]=t[n])}));var r=localStorage.getItem("cryptonomicon-list");r&&(this.tickers=JSON.parse(r),this.tickers.forEach((function(t){B(t.name,(function(n){return e.updateTicker(t.name,n)}))}))),setInterval(this.updateTickers,5e3)},mounted:function(){var e=this;U.a.get("https://min-api.cryptocompare.com/data/all/coinlist").then((function(t){var n=Object.values(t.data.Data).map((function(e){return e.Symbol}));e.coinList=n})).catch((function(t){console.log(t),e.errored=!0})).finally((function(){return e.loading=!1}))},computed:{startIndex:function(){return 6*(this.page-1)},endIndex:function(){return 6*this.page},filteredTickers:function(){var e=this;return this.tickers.filter((function(t){return t.name.includes(e.filter)}))},paginatedTickers:function(){return this.filteredTickers.slice(this.startIndex,this.endIndex)},hasNextPage:function(){return this.filteredTickers.length>this.endIndex},normalizedGraph:function(){var e=Math.max.apply(Math,Object(L["a"])(this.graph)),t=Math.min.apply(Math,Object(L["a"])(this.graph));return e===t?this.graph.map((function(){return 50})):this.graph.map((function(n){return 5+95*(n-t)/(e-t)}))},pageStateOptions:function(){return{filter:this.filter,page:this.page}}},methods:{updateAutocomplete:function(){var e=this;this.ticker.length>=3&&(this.autocomplete=this.coinList.filter((function(t){return t.toLowerCase().indexOf(e.ticker.toLowerCase())>-1})).sort())},updateTicker:function(e,t){var n=this;this.tickers.filter((function(t){return t.name===e})).forEach((function(e){e===n.selectedTicker&&n.graph.push(t),e.price=t}))},formatPrice:function(e){return"-"===e?e:(e=parseFloat(e),e>1?e.toFixed(2):e.toPrecision(2))},add:function(){var e=this,t={name:this.ticker.toUpperCase(),price:"-"};this.tickers=[].concat(Object(L["a"])(this.tickers),[t]),this.ticker="",this.filter="",B(t.name,(function(n){return e.updateTicker(t.name,n)}))},select:function(e){this.selectedTicker=e},handleDelete:function(e){this.tickers=this.tickers.filter((function(t){return t!==e})),this.selectedTicker===e&&(this.selectedTicker=null),H(e.name)}},watch:{autocomplete:function(){this.autocomplete.length>4&&(this.autocomplete=this.autocomplete.slice(0,4))},selectedTicker:function(){this.graph=[]},tickers:function(){localStorage.setItem("cryptonomicon-list",JSON.stringify(this.tickers))},paginatedTickers:function(){0===this.paginatedTickers.length&&this.page>1&&(this.page-=1)},filter:function(){this.page=1},pageStateOptions:function(e){window.history.pushState(null,document.title,"".concat(window.location.pathname,"?filter=").concat(e.filter,"&page=").concat(e.page))}}};R.render=E;var F=R;n("ba8c");Object(r["b"])(F).mount("#app")},ba8c:function(e,t,n){}});
//# sourceMappingURL=app.edb7285e.js.map