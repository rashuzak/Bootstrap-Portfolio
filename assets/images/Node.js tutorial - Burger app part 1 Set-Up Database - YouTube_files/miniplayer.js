(function(g){var window=this;var O5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.X?{D:"div",Y:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",O:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},K:[{D:"g",O:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",O:{transform:"translate(-1.000000, -3.000000)"},K:[{D:"polygon",O:{points:"0 0 24 0 24 24 0 24"}},{D:"path",O:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";a.M().ga("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.X?{D:"div",Y:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",O:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},K:[{D:"g",O:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",O:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},K:[{D:"path",O:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.Q.call(this,{D:"button",Y:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],O:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},K:[d]});var f=this;this.T=a;this.ia("click",this.onClick,this);this.ka("title",g.xN(a,e,"i"));g.Ie(this,function(){return g.GM(b.Za(),f.element)})},P5=function(a){g.Q.call(this,{D:"div",
I:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.G=this.w=this.u=void 0;this.L(a,"minimized",this.mI);this.L(a,"onStateChange",this.KO)},Q5=function(a){g.pL.call(this,a);
this.o=new P5(this.player);this.o.hide();g.cL(this.player,this.o.element,4);a.app.G.o&&(this.load(),g.K(a.getRootNode(),"ytp-player-minimized",!0))};
g.r(O5,g.Q);O5.prototype.onClick=function(){this.T.ma("onExpandMiniplayer")};g.r(P5,g.Q);g.h=P5.prototype;
g.h.show=function(){this.u=new g.vn(this.lI,null,this);this.u.start();if(!this.H){this.C=new g.xQ(this.player,this);g.C(this,this.C);g.cL(this.player,this.C.element,4);this.C.B=.6;this.S=new g.xP(this.player);g.C(this,this.S);this.A=new g.Q({D:"div",I:"ytp-miniplayer-scrim"});g.C(this,this.A);this.A.ba(this.element);this.L(this.A.element,"click",this.RA);var a=new g.Q({D:"button",Y:["ytp-miniplayer-close-button","ytp-button"],O:{"aria-label":"Close"},K:[g.UL()]});g.C(this,a);a.ba(this.A.element);
this.L(a.element,"click",this.fz);a=new O5(this.player,this);g.C(this,a);a.ba(this.A.element);this.B=new g.Q({D:"div",I:"ytp-miniplayer-controls"});g.C(this,this.B);this.B.ba(this.A.element);this.L(this.B.element,"click",this.RA);var b=new g.Q({D:"div",I:"ytp-miniplayer-button-container"});g.C(this,b);b.ba(this.B.element);a=new g.Q({D:"div",I:"ytp-miniplayer-play-button-container"});g.C(this,a);a.ba(this.B.element);var c=new g.Q({D:"div",I:"ytp-miniplayer-button-container"});g.C(this,c);c.ba(this.B.element);
this.N=new g.MN(this.player,this,!1);g.C(this,this.N);this.N.ba(b.element);b=new g.$O(this.player,this);g.C(this,b);b.ba(a.element);this.J=new g.MN(this.player,this,!0);g.C(this,this.J);this.J.ba(c.element);this.G=new g.NO(this.player,this);g.C(this,this.G);this.G.ba(this.A.element);this.w=new g.JM(this.player,this);g.C(this,this.w);g.cL(this.player,this.w.element,4);this.F=new g.Q({D:"div",I:"ytp-miniplayer-buttons"});g.C(this,this.F);g.cL(this.player,this.F.element,4);a=new g.Q({D:"button",Y:["ytp-miniplayer-close-button",
"ytp-button"],O:{"aria-label":"Close"},K:[g.UL()]});g.C(this,a);a.ba(this.F.element);this.L(a.element,"click",this.fz);a=new g.Q({D:"button",Y:["ytp-miniplayer-replay-button","ytp-button"],O:{"aria-label":"Close"},K:[g.iM()]});g.C(this,a);a.ba(this.F.element);this.L(a.element,"click",this.BM);this.L(this.player,"presentingplayerstatechange",this.nI);this.L(this.player,"appresize",this.Zs);this.L(this.player,"fullscreentoggled",this.Zs);this.Zs();this.H=!0}0!=this.player.getPlayerState()&&g.Q.prototype.show.call(this);
this.w.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.u&&(this.u.dispose(),this.u=void 0);g.Q.prototype.hide.call(this);this.player.app.G.o||(this.H&&this.w.hide(),this.player.loadModule("annotations_module"))};
g.h.X=function(){this.u&&(this.u.dispose(),this.u=void 0);g.Q.prototype.X.call(this)};
g.h.fz=function(){this.player.stopVideo();this.player.ma("onCloseMiniplayer")};
g.h.BM=function(){this.player.playVideo()};
g.h.RA=function(a){if(a.target==this.A.element||a.target==this.B.element)g.R(this.player.M().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.QC(g.JK(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.ma("onExpandMiniplayer")};
g.h.mI=function(){g.K(this.player.getRootNode(),"ytp-player-minimized",this.player.app.G.o)};
g.h.lI=function(){g.NM(this.w);this.G.w();this.u&&this.u.start()};
g.h.nI=function(a){g.V(a.state,32)&&this.C.hide()};
g.h.Zs=function(){g.dN(this.w,0,g.KK(this.player).getPlayerSize().width,!1);this.w.Hu()};
g.h.KO=function(a){this.player.app.G.o&&(0==a?this.hide():this.show())};
g.h.Za=function(){return this.C};
g.h.sc=function(){return!1};
g.h.Sd=function(){return!1};
g.h.Ej=function(){return!1};
g.h.uu=function(){};
g.h.ji=function(){};
g.h.Qk=function(){};
g.h.Sl=function(){return null};
g.h.Ys=function(){return new g.th(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.ak=function(a,b,c,d,e){var f=0,k=d=0,l=g.Ph(a);if(b){c=g.In(b,"ytp-prev-button")||g.In(b,"ytp-next-button");var m=g.In(b,"ytp-play-button"),n=g.In(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Mh(b,this.element),k=b.x,f=b.y-12):n&&(k=g.In(b,"ytp-miniplayer-button-top-left"),f=g.Mh(b,this.element),b=g.Ph(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=g.KK(this.player).getPlayerSize().width;e=f+(e||0);l=g.Od(k,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.ct=function(){};
g.h.kg=function(){};g.r(Q5,g.pL);Q5.prototype.create=function(){};
Q5.prototype.Qf=function(){return!1};
Q5.prototype.load=function(){this.player.hideControls();this.o.show()};
Q5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.EL.miniplayer=Q5;})(_yt_player);
