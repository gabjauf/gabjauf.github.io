(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[201],{5201:function(r,e,n){"use strict";n.d(e,{VZ:function(){return x},X5:function(){return b},CP:function(){return g}});var t=n(7759),a=t.tZ,o=n(3431),i=n(6767),l=n.n(i),s=function(){return(0,t.B7)().theme};function h(){return(h=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}function u(r,e){if(null==r)return{};var n,t,a={},o=Object.keys(r);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||(a[n]=r[n]);return a}var c=function(r){return a("div",h({},r,{sx:{variant:"styles.Card"}}))},f=["fontSize","fontFamily","lineHeight","fontWeight","children","truncate"],g=function(r){var e=r.fontSize,n=r.fontFamily,t=r.lineHeight,o=r.fontWeight,i=r.children,l=r.truncate;return a(c,h({},u(r,f),{children:void 0===i?"Aa":i,sx:h({fontFamily:void 0===n?"body":n,fontSize:void 0===e?5:e,lineHeight:void 0===t?"body":t,fontWeight:void 0===o?"body":o},void 0===l||l?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:{})}))},d=["reverse"],b=function(r){var e=r.reverse,n=u(r,d),t=s()||{};return a("div",{sx:{display:"flex",flexWrap:"wrap",alignItems:"baseline"}},(void 0===e||e?Object.entries(t.fontSizes||[]).reverse():Object.entries(t.fontSizes||[])).map(function(r){var e=r[0],t=r[1];return t&&"object"!=typeof t?a(g,h({key:e,fontSize:e,sx:{mr:3},children:"number"==typeof t?t+"px":t},n)):null}))},p=function(r){try{return l()(r).hex()}catch(e){return}},v=["color","name","size","label"],m=function(r){var e,n,t=r.color,i=r.name,l=r.size,c=void 0===l?128:l,f=r.label;return a("div",h({},u(r,v),{title:""+p((e=s(),"object"==typeof(n=t)&&(n=Array.isArray(n)?n[0]:n.__default),(0,o.U2)(e,"rawColors"in e?"rawColors."+n:"colors."+n,n)))}),a("div",{sx:{width:c,height:c,bg:t}}),(void 0===f||f)&&a("div",{sx:{py:2}},i||t))},y=["colors","name","omit","render","size"],w=["omit","mode"],k=function(){for(var r=arguments.length,e=Array(r),n=0;n<r;n++)e[n]=arguments[n];return e.filter(Boolean).join(".")},M=function r(e){var n=e.colors,t=e.name,o=e.omit,i=void 0===o?["modes"]:o,l=e.render,s=e.size,c=u(e,y);return a("div",null,a("div",{sx:{display:"flex",flexWrap:"wrap"}},Object.keys(n).map(function(e){var o=n[e];if(!o||i.includes(e))return!1;var u=k(t,e);if("object"==typeof o)return a(r,h({},c,{key:e,name:u,colors:o,size:s,omit:i}));var f=a(m,h({},c,{key:e,name:u,color:u,size:s,sx:{m:2}}));return"function"==typeof l?l({swatch:f,color:o,key:e,name:u}):f})))},x=function(r){var e=r.omit,n=r.mode,t=u(r,w),o=s().colors;return n&&o.modes&&(o=o.modes[n]||o),a("div",{style:{marginLeft:-8,marginRight:-8}},a(M,h({},t,{omit:e,colors:o})))}},8874:function(r){"use strict";r.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},9818:function(r,e,n){var t=n(8874),a=n(6851),o=Object.hasOwnProperty,i=Object.create(null);for(var l in t)o.call(t,l)&&(i[t[l]]=l);var s=r.exports={to:{},get:{}};function h(r,e,n){return Math.min(Math.max(e,r),n)}function u(r){var e=Math.round(r).toString(16).toUpperCase();return e.length<2?"0"+e:e}s.get=function(r){var e,n;switch(r.substring(0,3).toLowerCase()){case"hsl":e=s.get.hsl(r),n="hsl";break;case"hwb":e=s.get.hwb(r),n="hwb";break;default:e=s.get.rgb(r),n="rgb"}return e?{model:n,value:e}:null},s.get.rgb=function(r){if(!r)return null;var e,n,a,i=[0,0,0,1];if(e=r.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(n=0,a=e[2],e=e[1];n<3;n++){var l=2*n;i[n]=parseInt(e.slice(l,l+2),16)}a&&(i[3]=parseInt(a,16)/255)}else if(e=r.match(/^#([a-f0-9]{3,4})$/i)){for(n=0,a=(e=e[1])[3];n<3;n++)i[n]=parseInt(e[n]+e[n],16);a&&(i[3]=parseInt(a+a,16)/255)}else if(e=r.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(n=0;n<3;n++)i[n]=parseInt(e[n+1],0);e[4]&&(e[5]?i[3]=.01*parseFloat(e[4]):i[3]=parseFloat(e[4]))}else if(e=r.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(n=0;n<3;n++)i[n]=Math.round(2.55*parseFloat(e[n+1]));e[4]&&(e[5]?i[3]=.01*parseFloat(e[4]):i[3]=parseFloat(e[4]))}else if(!(e=r.match(/^(\w+)$/)))return null;else return"transparent"===e[1]?[0,0,0,0]:o.call(t,e[1])?((i=t[e[1]])[3]=1,i):null;for(n=0;n<3;n++)i[n]=h(i[n],0,255);return i[3]=h(i[3],0,1),i},s.get.hsl=function(r){if(!r)return null;var e=r.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(e){var n=parseFloat(e[4]);return[(parseFloat(e[1])%360+360)%360,h(parseFloat(e[2]),0,100),h(parseFloat(e[3]),0,100),h(isNaN(n)?1:n,0,1)]}return null},s.get.hwb=function(r){if(!r)return null;var e=r.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(e){var n=parseFloat(e[4]);return[(parseFloat(e[1])%360+360)%360,h(parseFloat(e[2]),0,100),h(parseFloat(e[3]),0,100),h(isNaN(n)?1:n,0,1)]}return null},s.to.hex=function(){var r=a(arguments);return"#"+u(r[0])+u(r[1])+u(r[2])+(r[3]<1?u(Math.round(255*r[3])):"")},s.to.rgb=function(){var r=a(arguments);return r.length<4||1===r[3]?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"},s.to.rgb.percent=function(){var r=a(arguments),e=Math.round(r[0]/255*100),n=Math.round(r[1]/255*100),t=Math.round(r[2]/255*100);return r.length<4||1===r[3]?"rgb("+e+"%, "+n+"%, "+t+"%)":"rgba("+e+"%, "+n+"%, "+t+"%, "+r[3]+")"},s.to.hsl=function(){var r=a(arguments);return r.length<4||1===r[3]?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"},s.to.hwb=function(){var r=a(arguments),e="";return r.length>=4&&1!==r[3]&&(e=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+e+")"},s.to.keyword=function(r){return i[r.slice(0,3)]}},6767:function(r,e,n){"use strict";var t=n(9818),a=n(978),o=[].slice,i=["keyword","gray","hex"],l={};Object.keys(a).forEach(function(r){l[o.call(a[r].labels).sort().join("")]=r});var s={};function h(r,e){if(!(this instanceof h))return new h(r,e);if(e&&e in i&&(e=null),e&&!(e in a))throw Error("Unknown model: "+e);if(null==r)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(r instanceof h)this.model=r.model,this.color=r.color.slice(),this.valpha=r.valpha;else if("string"==typeof r){var n,u,c=t.get(r);if(null===c)throw Error("Unable to parse color from string: "+r);this.model=c.model,u=a[this.model].channels,this.color=c.value.slice(0,u),this.valpha="number"==typeof c.value[u]?c.value[u]:1}else if(r.length){this.model=e||"rgb",u=a[this.model].channels;var g=o.call(r,0,u);this.color=f(g,u),this.valpha="number"==typeof r[u]?r[u]:1}else if("number"==typeof r)r&=16777215,this.model="rgb",this.color=[r>>16&255,r>>8&255,255&r],this.valpha=1;else{this.valpha=1;var d=Object.keys(r);"alpha"in r&&(d.splice(d.indexOf("alpha"),1),this.valpha="number"==typeof r.alpha?r.alpha:0);var b=d.sort().join("");if(!(b in l))throw Error("Unable to parse color from object: "+JSON.stringify(r));this.model=l[b];var p=a[this.model].labels,v=[];for(n=0;n<p.length;n++)v.push(r[p[n]]);this.color=f(v)}if(s[this.model])for(n=0,u=a[this.model].channels;n<u;n++){var m=s[this.model][n];m&&(this.color[n]=m(this.color[n]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function u(r,e,n){return(r=Array.isArray(r)?r:[r]).forEach(function(r){(s[r]||(s[r]=[]))[e]=n}),r=r[0],function(t){var a;return arguments.length?(n&&(t=n(t)),(a=this[r]()).color[e]=t,a):(a=this[r]().color[e],n&&(a=n(a)),a)}}function c(r){return function(e){return Math.max(0,Math.min(r,e))}}function f(r,e){for(var n=0;n<e;n++)"number"!=typeof r[n]&&(r[n]=0);return r}h.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(r){var e=this.model in t.to?this:this.rgb(),n=1===(e=e.round("number"==typeof r?r:1)).valpha?e.color:e.color.concat(this.valpha);return t.to[e.model](n)},percentString:function(r){var e=this.rgb().round("number"==typeof r?r:1),n=1===e.valpha?e.color:e.color.concat(this.valpha);return t.to.rgb.percent(n)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var r={},e=a[this.model].channels,n=a[this.model].labels,t=0;t<e;t++)r[n[t]]=this.color[t];return 1!==this.valpha&&(r.alpha=this.valpha),r},unitArray:function(){var r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,1!==this.valpha&&r.push(this.valpha),r},unitObject:function(){var r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,1!==this.valpha&&(r.alpha=this.valpha),r},round:function(r){var e;return r=Math.max(r||0,0),new h(this.color.map((e=r,function(r){return Number(r.toFixed(e))})).concat(this.valpha),this.model)},alpha:function(r){return arguments.length?new h(this.color.concat(Math.max(0,Math.min(1,r))),this.model):this.valpha},red:u("rgb",0,c(255)),green:u("rgb",1,c(255)),blue:u("rgb",2,c(255)),hue:u(["hsl","hsv","hsl","hwb","hcg"],0,function(r){return(r%360+360)%360}),saturationl:u("hsl",1,c(100)),lightness:u("hsl",2,c(100)),saturationv:u("hsv",1,c(100)),value:u("hsv",2,c(100)),chroma:u("hcg",1,c(100)),gray:u("hcg",2,c(100)),white:u("hwb",1,c(100)),wblack:u("hwb",2,c(100)),cyan:u("cmyk",0,c(100)),magenta:u("cmyk",1,c(100)),yellow:u("cmyk",2,c(100)),black:u("cmyk",3,c(100)),x:u("xyz",0,c(100)),y:u("xyz",1,c(100)),z:u("xyz",2,c(100)),l:u("lab",0,c(100)),a:u("lab",1),b:u("lab",2),keyword:function(r){return arguments.length?new h(r):a[this.model].keyword(this.color)},hex:function(r){return arguments.length?new h(r):t.to.hex(this.rgb().round().color)},rgbNumber:function(){var r=this.rgb().color;return(255&r[0])<<16|(255&r[1])<<8|255&r[2]},luminosity:function(){for(var r=this.rgb().color,e=[],n=0;n<r.length;n++){var t=r[n]/255;e[n]=t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return .2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(r){var e=this.luminosity(),n=r.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level:function(r){var e=this.contrast(r);return e>=7.1?"AAA":e>=4.5?"AA":""},isDark:function(){var r=this.rgb().color;return(299*r[0]+587*r[1]+114*r[2])/1e3<128},isLight:function(){return!this.isDark()},negate:function(){for(var r=this.rgb(),e=0;e<3;e++)r.color[e]=255-r.color[e];return r},lighten:function(r){var e=this.hsl();return e.color[2]+=e.color[2]*r,e},darken:function(r){var e=this.hsl();return e.color[2]-=e.color[2]*r,e},saturate:function(r){var e=this.hsl();return e.color[1]+=e.color[1]*r,e},desaturate:function(r){var e=this.hsl();return e.color[1]-=e.color[1]*r,e},whiten:function(r){var e=this.hwb();return e.color[1]+=e.color[1]*r,e},blacken:function(r){var e=this.hwb();return e.color[2]+=e.color[2]*r,e},grayscale:function(){var r=this.rgb().color,e=.3*r[0]+.59*r[1]+.11*r[2];return h.rgb(e,e,e)},fade:function(r){return this.alpha(this.valpha-this.valpha*r)},opaquer:function(r){return this.alpha(this.valpha+this.valpha*r)},rotate:function(r){var e=this.hsl(),n=e.color[0];return n=(n=(n+r)%360)<0?360+n:n,e.color[0]=n,e},mix:function(r,e){if(!r||!r.rgb)throw Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof r);var n=r.rgb(),t=this.rgb(),a=void 0===e?.5:e,o=2*a-1,i=n.alpha()-t.alpha(),l=((o*i==-1?o:(o+i)/(1+o*i))+1)/2,s=1-l;return h.rgb(l*n.red()+s*t.red(),l*n.green()+s*t.green(),l*n.blue()+s*t.blue(),n.alpha()*a+t.alpha()*(1-a))}},Object.keys(a).forEach(function(r){if(-1===i.indexOf(r)){var e=a[r].channels;h.prototype[r]=function(){if(this.model===r)return new h(this);if(arguments.length)return new h(arguments,r);var n,t="number"==typeof arguments[e]?e:this.valpha;return new h((Array.isArray(n=a[this.model][r].raw(this.color))?n:[n]).concat(t),r)},h[r]=function(n){return"number"==typeof n&&(n=f(o.call(arguments),e)),new h(n,r)}}}),r.exports=h},2956:function(r,e,n){var t=n(8900),a={};for(var o in t)t.hasOwnProperty(o)&&(a[t[o]]=o);var i=r.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var l in i)if(i.hasOwnProperty(l)){if(!("channels"in i[l]))throw Error("missing channels property: "+l);if(!("labels"in i[l]))throw Error("missing channel labels property: "+l);if(i[l].labels.length!==i[l].channels)throw Error("channel and label counts mismatch: "+l);var s=i[l].channels,h=i[l].labels;delete i[l].channels,delete i[l].labels,Object.defineProperty(i[l],"channels",{value:s}),Object.defineProperty(i[l],"labels",{value:h})}i.rgb.hsl=function(r){var e,n,t=r[0]/255,a=r[1]/255,o=r[2]/255,i=Math.min(t,a,o),l=Math.max(t,a,o),s=l-i;return l===i?e=0:t===l?e=(a-o)/s:a===l?e=2+(o-t)/s:o===l&&(e=4+(t-a)/s),(e=Math.min(60*e,360))<0&&(e+=360),n=(i+l)/2,[e,100*(l===i?0:n<=.5?s/(l+i):s/(2-l-i)),100*n]},i.rgb.hsv=function(r){var e,n,t,a,o,i=r[0]/255,l=r[1]/255,s=r[2]/255,h=Math.max(i,l,s),u=h-Math.min(i,l,s),c=function(r){return(h-r)/6/u+.5};return 0===u?a=o=0:(o=u/h,e=c(i),n=c(l),t=c(s),i===h?a=t-n:l===h?a=1/3+e-t:s===h&&(a=2/3+n-e),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*h]},i.rgb.hwb=function(r){var e=r[0],n=r[1],t=r[2];return[i.rgb.hsl(r)[0],100*(1/255*Math.min(e,Math.min(n,t))),100*(t=1-1/255*Math.max(e,Math.max(n,t)))]},i.rgb.cmyk=function(r){var e,n=r[0]/255,t=r[1]/255,a=r[2]/255;return e=Math.min(1-n,1-t,1-a),[100*((1-n-e)/(1-e)||0),100*((1-t-e)/(1-e)||0),100*((1-a-e)/(1-e)||0),100*e]},i.rgb.keyword=function(r){var e,n=a[r];if(n)return n;var o=1/0;for(var i in t)if(t.hasOwnProperty(i)){var l=t[i],s=Math.pow(r[0]-l[0],2)+Math.pow(r[1]-l[1],2)+Math.pow(r[2]-l[2],2);s<o&&(o=s,e=i)}return e},i.keyword.rgb=function(r){return t[r]},i.rgb.xyz=function(r){var e=r[0]/255,n=r[1]/255,t=r[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.1805*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)),100*(.2126*e+.7152*n+.0722*t),100*(.0193*e+.1192*n+.9505*t)]},i.rgb.lab=function(r){var e=i.rgb.xyz(r),n=e[0],t=e[1],a=e[2];return n/=95.047,t/=100,a/=108.883,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(n-t),200*(t-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]},i.hsl.rgb=function(r){var e,n,t,a,o,i=r[0]/360,l=r[1]/100,s=r[2]/100;if(0===l)return[o=255*s,o,o];n=s<.5?s*(1+l):s+l-s*l,e=2*s-n,a=[0,0,0];for(var h=0;h<3;h++)(t=i+-(1/3*(h-1)))<0&&t++,t>1&&t--,o=6*t<1?e+(n-e)*6*t:2*t<1?n:3*t<2?e+(n-e)*(2/3-t)*6:e,a[h]=255*o;return a},i.hsl.hsv=function(r){var e,n=r[0],t=r[1]/100,a=r[2]/100,o=t,i=Math.max(a,.01);return a*=2,t*=a<=1?a:2-a,o*=i<=1?i:2-i,e=(a+t)/2,[n,100*(0===a?2*o/(i+o):2*t/(a+t)),100*e]},i.hsv.rgb=function(r){var e=r[0]/60,n=r[1]/100,t=r[2]/100,a=e-Math.floor(e),o=255*t*(1-n),i=255*t*(1-n*a),l=255*t*(1-n*(1-a));switch(t*=255,Math.floor(e)%6){case 0:return[t,l,o];case 1:return[i,t,o];case 2:return[o,t,l];case 3:return[o,i,t];case 4:return[l,o,t];case 5:return[t,o,i]}},i.hsv.hsl=function(r){var e,n,t,a=r[0],o=r[1]/100,i=r[2]/100,l=Math.max(i,.01);return t=(2-o)*i,e=(2-o)*l,[a,100*(o*l/(e<=1?e:2-e)||0),100*(t/=2)]},i.hwb.rgb=function(r){var e,n,t,a,o,i,l,s=r[0]/360,h=r[1]/100,u=r[2]/100,c=h+u;switch(c>1&&(h/=c,u/=c),e=Math.floor(6*s),n=1-u,t=6*s-e,(1&e)!=0&&(t=1-t),a=h+t*(n-h),e){default:case 6:case 0:o=n,i=a,l=h;break;case 1:o=a,i=n,l=h;break;case 2:o=h,i=n,l=a;break;case 3:o=h,i=a,l=n;break;case 4:o=a,i=h,l=n;break;case 5:o=n,i=h,l=a}return[255*o,255*i,255*l]},i.cmyk.rgb=function(r){var e=r[0]/100,n=r[1]/100,t=r[2]/100,a=r[3]/100;return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a)),255*(1-Math.min(1,t*(1-a)+a))]},i.xyz.rgb=function(r){var e,n,t,a=r[0]/100,o=r[1]/100,i=r[2]/100;return e=3.2406*a+-1.5372*o+-.4986*i,n=-.9689*a+1.8758*o+.0415*i,t=.0557*a+-.204*o+1.057*i,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,[255*(e=Math.min(Math.max(0,e),1)),255*(n=Math.min(Math.max(0,n),1)),255*(t=Math.min(Math.max(0,t),1))]},i.xyz.lab=function(r){var e=r[0],n=r[1],t=r[2];return e/=95.047,n/=100,t/=108.883,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(e-n),200*(n-(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116))]},i.lab.xyz=function(r){var e,n,t,a=r[0],o=r[1],i=r[2];e=o/500+(n=(a+16)/116),t=n-i/200;var l=Math.pow(n,3),s=Math.pow(e,3),h=Math.pow(t,3);return n=(l>.008856?l:(n-16/116)/7.787)*100,[e=(s>.008856?s:(e-16/116)/7.787)*95.047,n,t=(h>.008856?h:(t-16/116)/7.787)*108.883]},i.lab.lch=function(r){var e,n=r[0],t=r[1],a=r[2];return(e=360*Math.atan2(a,t)/2/Math.PI)<0&&(e+=360),[n,Math.sqrt(t*t+a*a),e]},i.lch.lab=function(r){var e,n=r[0],t=r[1];return[n,t*Math.cos(e=r[2]/360*2*Math.PI),t*Math.sin(e)]},i.rgb.ansi16=function(r){var e=r[0],n=r[1],t=r[2],a=1 in arguments?arguments[1]:i.rgb.hsv(r)[2];if(0===(a=Math.round(a/50)))return 30;var o=30+(Math.round(t/255)<<2|Math.round(n/255)<<1|Math.round(e/255));return 2===a&&(o+=60),o},i.hsv.ansi16=function(r){return i.rgb.ansi16(i.hsv.rgb(r),r[2])},i.rgb.ansi256=function(r){var e=r[0],n=r[1],t=r[2];return e===n&&n===t?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(n/255*5)+Math.round(t/255*5)},i.ansi16.rgb=function(r){var e=r%10;if(0===e||7===e)return r>50&&(e+=3.5),[e=e/10.5*255,e,e];var n=(~~(r>50)+1)*.5;return[(1&e)*n*255,(e>>1&1)*n*255,(e>>2&1)*n*255]},i.ansi256.rgb=function(r){if(r>=232){var e,n=(r-232)*10+8;return[n,n,n]}return[Math.floor((r-=16)/36)/5*255,Math.floor((e=r%36)/6)/5*255,e%6/5*255]},i.rgb.hex=function(r){var e=(((255&Math.round(r[0]))<<16)+((255&Math.round(r[1]))<<8)+(255&Math.round(r[2]))).toString(16).toUpperCase();return"000000".substring(e.length)+e},i.hex.rgb=function(r){var e=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];var n=e[0];3===e[0].length&&(n=n.split("").map(function(r){return r+r}).join(""));var t=parseInt(n,16);return[t>>16&255,t>>8&255,255&t]},i.rgb.hcg=function(r){var e=r[0]/255,n=r[1]/255,t=r[2]/255,a=Math.max(Math.max(e,n),t),o=Math.min(Math.min(e,n),t),i=a-o;return[360*((i<=0?0:a===e?(n-t)/i%6:a===n?2+(t-e)/i:4+(e-n)/i+4)/6%1),100*i,100*(i<1?o/(1-i):0)]},i.hsl.hcg=function(r){var e=r[1]/100,n=r[2]/100,t=1,a=0;return(t=n<.5?2*e*n:2*e*(1-n))<1&&(a=(n-.5*t)/(1-t)),[r[0],100*t,100*a]},i.hsv.hcg=function(r){var e=r[1]/100,n=r[2]/100,t=e*n,a=0;return t<1&&(a=(n-t)/(1-t)),[r[0],100*t,100*a]},i.hcg.rgb=function(r){var e=r[0]/360,n=r[1]/100,t=r[2]/100;if(0===n)return[255*t,255*t,255*t];var a=[0,0,0],o=e%1*6,i=o%1,l=1-i,s=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=i,a[2]=0;break;case 1:a[0]=l,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=i;break;case 3:a[0]=0,a[1]=l,a[2]=1;break;case 4:a[0]=i,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=l}return s=(1-n)*t,[(n*a[0]+s)*255,(n*a[1]+s)*255,(n*a[2]+s)*255]},i.hcg.hsv=function(r){var e=r[1]/100,n=e+r[2]/100*(1-e),t=0;return n>0&&(t=e/n),[r[0],100*t,100*n]},i.hcg.hsl=function(r){var e=r[1]/100,n=r[2]/100*(1-e)+.5*e,t=0;return n>0&&n<.5?t=e/(2*n):n>=.5&&n<1&&(t=e/(2*(1-n))),[r[0],100*t,100*n]},i.hcg.hwb=function(r){var e=r[1]/100,n=e+r[2]/100*(1-e);return[r[0],(n-e)*100,(1-n)*100]},i.hwb.hcg=function(r){var e=r[1]/100,n=1-r[2]/100,t=n-e,a=0;return t<1&&(a=(n-t)/(1-t)),[r[0],100*t,100*a]},i.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},i.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},i.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},i.gray.hsl=i.gray.hsv=function(r){return[0,0,r[0]]},i.gray.hwb=function(r){return[0,100,r[0]]},i.gray.cmyk=function(r){return[0,0,0,r[0]]},i.gray.lab=function(r){return[r[0],0,0]},i.gray.hex=function(r){var e=255&Math.round(r[0]/100*255),n=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(n.length)+n},i.rgb.gray=function(r){return[(r[0]+r[1]+r[2])/3/255*100]}},978:function(r,e,n){var t=n(2956),a=n(7774),o={};Object.keys(t).forEach(function(r){o[r]={},Object.defineProperty(o[r],"channels",{value:t[r].channels}),Object.defineProperty(o[r],"labels",{value:t[r].labels});var e=a(r);Object.keys(e).forEach(function(n){var t,a,i=e[n];o[r][n]=(t=function(r){if(null==r)return r;arguments.length>1&&(r=Array.prototype.slice.call(arguments));var e=i(r);if("object"==typeof e)for(var n=e.length,t=0;t<n;t++)e[t]=Math.round(e[t]);return e},"conversion"in i&&(t.conversion=i.conversion),t),o[r][n].raw=(a=function(r){return null==r?r:(arguments.length>1&&(r=Array.prototype.slice.call(arguments)),i(r))},"conversion"in i&&(a.conversion=i.conversion),a)})}),r.exports=o},7774:function(r,e,n){var t=n(2956);r.exports=function(r){for(var e=function(r){var e=function(){for(var r={},e=Object.keys(t),n=e.length,a=0;a<n;a++)r[e[a]]={distance:-1,parent:null};return r}(),n=[r];for(e[r].distance=0;n.length;)for(var a=n.pop(),o=Object.keys(t[a]),i=o.length,l=0;l<i;l++){var s=o[l],h=e[s];-1===h.distance&&(h.distance=e[a].distance+1,h.parent=a,n.unshift(s))}return e}(r),n={},a=Object.keys(e),o=a.length,i=0;i<o;i++){var l=a[i];null!==e[l].parent&&(n[l]=function(r,e){for(var n=[e[r].parent,r],a=t[e[r].parent][r],o=e[r].parent;e[o].parent;)n.unshift(e[o].parent),a=function(r,e){return function(n){return e(r(n))}}(t[e[o].parent][o],a),o=e[o].parent;return a.conversion=n,a}(l,e))}return n}},8900:function(r){"use strict";r.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},6851:function(r,e,n){"use strict";var t=n(9594),a=Array.prototype.concat,o=Array.prototype.slice,i=r.exports=function(r){for(var e=[],n=0,i=r.length;n<i;n++){var l=r[n];t(l)?e=a.call(e,o.call(l)):e.push(l)}return e};i.wrap=function(r){return function(){return r(i(arguments))}}},9594:function(r){r.exports=function(r){return!!r&&"string"!=typeof r&&(r instanceof Array||Array.isArray(r)||r.length>=0&&(r.splice instanceof Function||Object.getOwnPropertyDescriptor(r,r.length-1)&&"String"!==r.constructor.name))}}}]);