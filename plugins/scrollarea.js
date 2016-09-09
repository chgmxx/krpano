/*
	krpano 1.19-pr5 ScrollArea Plugin (build 2016-05-24)
	http://krpano.com/plugins/scrollarea/
*/
var krpanoplugin=function(){function P(a){return"boolean"==typeof a?a:0<="yesontrue1".indexOf(String(a).toLowerCase())}function Z(a){if(a&&k&&aa){var c=k.timertick,f=0;0==Q&&(Q=c);var b=c-Q|0;Q=c;"wheel"==a.type?f=a.deltaY:"mousewheel"==a.type?f=-a.wheelDelta:"DOMMouseScroll"==a.type&&(f=a.detail);f=-f;500<b?R=1==a.deltaMode||0==f%20?0:1:66>b&&0==R&&0!=f%40&&6<Math.abs(f)&&(R=1);a.preventDefault();a.stopPropagation();0!=f&&(0==R?f=0>f?-5:5:(f/=20,-10>f?f=-10:10<f&&(f=10)),1==n?S(f*A,0):2==n?S(0,f*
y):3==n&&S(0,f*y))}}function u(a,c,f,b,e){var d=null;e=(!0===e?"remove":"add")+"EventListener";var g=T.browser.events;if(g.touch&&("down"==c?d=g.touchstart:"move"==c?d=g.touchmove:"up"==c&&(d=g.touchend),T.ie&&0==g.mouse&&("over"==c?d=g.pointerover?g.pointerover:"MSPointerOver":"out"==c&&(d=g.pointerout?g.pointerout:"MSPointerOut")),d))a[e](d,f,b);if(g.mouse&&("down"==c?d="mousedown":"move"==c?d="mousemove":"up"==c?d="mouseup":"over"==c?d="mouseover":"out"==c&&(d="mouseout"),d))a[e](d,f,b)}function fa(){if(b){var a=
b.sprite.parentNode;a&&(a=a.kobject)&&(a.maskchildren=!0,a.poschanged&&a.updatepluginpos(),b.poschanged&&b.updatepluginpos(),ba=a,r=a.pixelwidth,t=a.pixelheight,isNaN(r)&&(r=0),isNaN(t)&&(t=0),D=0<r||0<t)}}function G(){e=Number(b.x);d=Number(b.y);isNaN(ca)&&(e=0);isNaN(da)&&(d=0)}function H(a){a=void 0===a?!1:a;1==(n&1)?b.x!=e&&(b.x=e,a=!0):e=0;2==(n&2)?b.y!=d&&(b.y=d,a=!0):d=0;!D||U[0]==v&&U[1]==w||(U[0]=v,U[1]=w,a=!0);if(a&&b&&D){a=r-v;var c=t-w,f=e,l=d;isNaN(f)&&(f=0);isNaN(l)&&(l=0);f+=a*p;l+=
c*q;b.woverflow=-a;b.hoverflow=-c;b.loverflow=Math.round((-f+E*a)*A);b.roverflow=Math.round((+f-(1-E)*a)*A);b.toverflow=Math.round((-l+F*c)*y);b.boverflow=Math.round((+l-(1-F)*c)*y);b.onscroll&&k.call(b.onscroll,b)}}function ga(a){for(;0<z.length&&!(100>=a-z[0].time);)z.shift()}function I(){fa();var a=String(b.align).toLowerCase();if(""==a||"null"==a)a="lefttop";y=A=1;q=p=.5;F=E=0;0<=a.indexOf("left")&&(p=E=0,A=1);0<=a.indexOf("top")&&(q=F=0,y=1);0<=a.indexOf("right")&&(E=1,p=0,A=-1);0<=a.indexOf("bottom")&&
(F=1,q=0,y=-1)}function ha(a){I();z=[];if(0==J)x=!1;else{u(window,"up",ia,!0);u(window,"move",ja,!0);var c=k.stagescale,f=a.changedTouches&&0<a.changedTouches.length?a.changedTouches[0]:a;a=f.pageX/c;c=f.pageY/c;x=!1;V=a;W=c;return!1}}function ka(a){(void 0===a.pointerType||4==a.pointerType||"mouse"==a.pointerType)&&ea&&(I(),0!=D&&(a=t-w,0>r-v||0>a))&&(K=!0,u(b.sprite,"move",la,!0),u(b.sprite,"out",ma,!0))}function la(a){K&&0==x&&ba&&(a=ba.getmouse(),X(a.x/r*b.pixelwidth,a.y/t*b.pixelheight,!0))}
function ma(a){u(b.sprite,"move",la,!0,!0);u(b.sprite,"out",ma,!0,!0);K=!1}function ja(a){if(0==J)return x=!1;var c=k.stagescale,f=a.changedTouches&&0<a.changedTouches.length?a.changedTouches[0]:a;a=f.pageX/c;c=f.pageY/c;0==x&&(n&1&&5<Math.abs(a-V)||n&2&&5<Math.abs(c-W))&&(B&&(g=h=0,B=!1),null!=m&&(clearInterval(m),m=null),x=!0,K=!1,V=a,W=c,G(),ca=e,da=d);x&&(f=k.timertick,ga(f),z.push({time:f,x:a,y:c}),e=ca+(a-V)*A,d=da+(c-W)*y,a=-(v-r),c=-(w-t),e+=a*p,d+=c*q,f=1/(1+C*C),e=0<a?e-(e-a*p)*f:e-(0<e?
e:e<a?e-a:0)*f,d=0<c?d-(d-c*q)*f:d-(0<d?d:d<c?d-c:0)*f,e-=a*p,d-=c*q,H());return!1}function ia(a){u(window,"up",ia,!0,!0);u(window,"move",ja,!0,!0);if(0==J)g=h=0,x=!1;else if(x){ga(k.timertick);if(1<z.length){a=z[0];var c=z[z.length-1],f=c.y-a.y,b=(c.time-a.time)*Y;h=(c.x-a.x)/b*A;g=f/b*y}else g=h=0;m=setInterval(L,1E3/60);x=!1}}function pa(){setTimeout(function(){fa();H(!0);null==m&&(m=setInterval(L,1E3/60))},100)}function L(){e+=h;d+=g;h*=M;g*=M;var a=0,c=0,b=-(v-r),l=-(w-t);e+=b*p;d+=l*q;0<b?a=
e-b*p:B?a=e-na:e<b?a=e-b:0<e&&(a=e);.1>a*a&&(a=0);0<l?c=d-l*q:B?c=d-oa:d<l?c=d-l:0<d&&(c=d);.1>c*c&&(c=0);e-=b*p;d-=l*q;0==(n&1)&&(h=a=0);0==(n&2)&&(g=c=0);0!=a&&(a*=-1,e+=a*(1-C),h=0>=a*h?h+a*N:a*O,h*=C);0!=c&&(c*=-1,d+=c*(1-C),g=0>=c*g?g+c*N:c*O,g*=C);0==a&&0==c&&.05>Math.sqrt(h*h+g*g)&&(B=!1,g=h=0,clearInterval(m),m=null);H()}function X(a,c,b){I();G();if(0==D)setTimeout(function(){X(a,c,b)},10);else{a=Number(a);isNaN(a)&&(a=0);c=Number(c);isNaN(c)&&(c=0);var l=r-v,g=t-w;a=E*v+a*A;c=F*w+c*y;a*=
-1;c*=-1;a+=r/2;0<a&&(a=0);a<l&&(a=l);c+=t/2;0<c&&(c=0);c<g&&(c=g);!0===b?(B=!0,na=a,oa=c,null==m&&(m=setInterval(L,1E3/60))):(l=-(v-r),g=-(w-t),a=0>l?a-l*p:0,c=0>g?c-g*q:0,e=a,d=c,H())}}function qa(a,c){X(a,c,!0)}function ra(){null!=m&&(clearInterval(m),m=null);K=x=!1;z=[];g=h=0;B=!1;G()}function S(a,c){B=!1;a=Number(a);isNaN(a)&&(a=0);c=Number(c);isNaN(c)&&(c=0);I();G();if(0!=D){var b=r-v,l=t-w,k=!1;0>b&&(e+=b*p,0<a&&0>e?(k=!0,h+=a):0>a&&e>b&&(k=!0,h+=a),e-=b*p);0>l&&(d+=l*q,0<c&&0>d?(k=!0,g+=c):
0>c&&d>l&&(k=!0,g+=c),d-=l*q);k&&null==m&&(m=setInterval(L,1E3/60))}}var k=null,b=null,T=null,n=3,v=0,w=0,U=[0,0],D=!1,ba=null,r=0,t=0,B=!1,na=0,oa=0,A=1,y=1,p=0,q=0,E=0,F=0,C=1,M=.95,N=.08,O=.15,Y=1/15,J=!0,aa=!0,x=!1,V=0,W=0,e=0,d=0,ca=0,da=0,m=null,z=[],h=0,g=0,K=!1,ea=!1;this.registerplugin=function(a,c,d){k=a;b=d;"1.19">k.version?(k.trace(3,"Scrollarea Plugin - too old krpano version (min. version 1.19)"),b=k=null):(T=k.device,b.registerattribute("direction","all",function(a){a=String(a).toLowerCase();
n=0;n|=1*(0<=a.indexOf("h"));n|=2*(0<=a.indexOf("v"));n|=3*(0<=a.indexOf("all"))},function(){return 3==(n&3)?"all":1==(n&1)?"h":"v"}),b.registerattribute("overscroll",C,function(a){C=0>a?0:1<a?1:a},function(){return C}),b.registerattribute("friction",M,function(a){M=Number(a)},function(){return M}),b.registerattribute("acceleration",N,function(a){N=Number(a)},function(){return N}),b.registerattribute("returnacceleration",O,function(a){O=Number(a)},function(){return O}),b.registerattribute("momentum",
Y,function(a){Y=Number(a)},function(){return Y}),b.registerattribute("onscroll",null),b.registerattribute("woverflow",0),b.registerattribute("hoverflow",0),b.registerattribute("loverflow",0),b.registerattribute("roverflow",0),b.registerattribute("toverflow",0),b.registerattribute("boverflow",0),b.registerattribute("draggable",!0,function(a){J=P(a)},function(){return J}),b.registerattribute("mwheel",!0,function(a){aa=P(a)},function(){return aa}),b.registerattribute("onhover_autoscrolling",!1,function(a){ea=
P(a)},function(){return ea}),b.registerattribute("csshardwareacceleration","auto"),b.setcenter=X,b.scrolltocenter=qa,b.stopscrolling=ra,b.scrollby=S,1==P(b.csshardwareacceleration)&&(b.sprite.style[T.browser.css.transform+"Style"]="preserve-3d"),b.sprite.addEventListener("DOMMouseScroll",Z,!0),b.sprite.addEventListener("mousewheel",Z,!0),b.sprite.addEventListener("wheel",Z,!0),u(b.sprite,"down",ha,!0),u(b.sprite,"over",ka,!0),k.set("events["+b.name+"_scrollarea].keep",!0),k.set("events["+b.name+"_scrollarea].onresize",
pa))};var Q=0,R=0;this.onresize=function(a,c){if(!k)return!1;v=a;w=c;var b;B=!1;I();G();if(0==D)b=!1;else{b=r-v;var g=t-w,h=!1;e+=b*p;if(0>b){if(0>e||e>b)h=!0}else 0!=e&&(h=!0);e-=b*p;d+=g*q;if(0>g){if(0>d||d>g)h=!0}else 0!=d&&(h=!0);d-=g*q;h&&null==m&&(m=setInterval(L,1E3/60));b=h}0==b&&H(!0);return!1};this.unloadplugin=function(){k&&b&&(k.set("events["+b.name+"_scrollarea].name",null),null!=m&&(clearInterval(m),m=null),u(b.sprite,"down",ha,!0,!0),u(b.sprite,"over",ka,!0,!0));k=b=null}};
