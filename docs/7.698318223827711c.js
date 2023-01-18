"use strict";(self.webpackChunkphoenix_app=self.webpackChunkphoenix_app||[]).push([[7],{7:(wt,nt,z)=>{z.r(nt),z.d(nt,{RH2Painter:()=>q});var $=z(1773),st=z(2912),ot=z(1671),G=z(5611),ut=z(8597),xt=z(6717);class W extends ut.n{constructor(i,t){super(i,t),this.wheel_zoomy=!0}cleanup(){delete this.tt_handle,super.cleanup()}getDimension(){return 2}toggleProjection(i,t){if("Projections"==i&&(i=""),"string"==typeof i&&i.length>1&&(t=parseInt(i.slice(1)),i=i[0]),t||(t=1),i&&this.is_projection==i){if(this.projection_width!==t)return void(this.projection_width=t);i=""}delete this.proj_hist;let e=this.is_projection===i?"":i;this.is_projection="",this.projection_width=t,this.provideSpecialDrawArea(e).then(()=>(this.is_projection=e,this.redrawProjection()))}redrawProjection(){}executeMenuCommand(i,t){return!!super.executeMenuCommand(i,t)||("SetShowProjectionX"==i.fName||"SetShowProjectionY"==i.fName)&&(this.toggleProjection(i.fName[17],t&&parseInt(t)?parseInt(t):1),!0)}fillHistContextMenu(i){i.add("sub:Projections",()=>this.toggleProjection());let t=this.is_projection||"";t&&(t+=this.projection_width);let e=["X1","X2","X3","X5","X10","Y1","Y2","Y3","Y5","Y10"];for(let o=0;o<e.length;++o)i.addchk(t==e[o],e[o],e[o],f=>this.toggleProjection(f));i.add("endsub:"),i.add("Auto zoom-in",()=>this.autoZoom());let n=this.getSupportedDrawOptions();i.addDrawMenu("Draw with",n,o=>{if("inspect"===o)return this.showInspector();this.decodeOptions(o),this.interactiveRedraw("pad","drawopt")}),this.options.Color&&this.fillPaletteMenu(i)}clickButton(i){if(super.clickButton(i))return!0;switch(i){case"ToggleColor":this.toggleColor();break;case"Toggle3D":this.toggleMode3D();break;default:return!1}return!0}fillToolbar(){super.fillToolbar(!0);let i=this.getPadPainter();!i||(i.addPadButton("th2color","Toggle color","ToggleColor"),i.addPadButton("th2colorz","Toggle color palette","ToggleColorZ"),i.addPadButton("th2draw3d","Toggle 3D mode","Toggle3D"),i.showPadButtons())}toggleColor(){this.options.Mode3D?(this.options.Mode3D=!1,this.options.Color=!0):this.options.Color=!this.options.Color,this.redraw()}autoZoom(){let o,f,i=this.getSelectIndex("x","left",-1),t=this.getSelectIndex("x","right",1),e=this.getSelectIndex("y","left",-1),n=this.getSelectIndex("y","right",1),m=this.getHisto(),d=this.getAxis("x"),y=this.getAxis("y");if(i==t||e==n)return;let h=m.getBinContent(i+1,e+1);for(o=i;o<t;++o)for(f=e;f<n;++f)h=Math.min(h,m.getBinContent(o+1,f+1));if(h>0)return;let a=t,r=i,l=n,s=e;for(o=i;o<t;++o)for(f=e;f<n;++f)m.getBinContent(o+1,f+1)>h&&(o<a&&(a=o),o>=r&&(r=o+1),f<l&&(l=f),f>=s&&(s=f+1));let u,p,x,c,g=!1;return a===r-1&&a>i+1&&r<t-1&&(a--,r++),l===s-1&&l>e+1&&s<n-1&&(l--,s++),(a>i||r<t)&&a<r-1&&(u=d.GetBinCoord(a),p=d.GetBinCoord(r),g=!0),(l>e||s<n)&&l<s-1&&(x=y.GetBinCoord(l),c=y.GetBinCoord(s),g=!0),g?this.getFramePainter().zoom(u,p,x,c):void 0}scanContent(i){if(i&&this.nbinsx&&this.nbinsy)return;let t,e,n=this.getHisto();if(this.extractAxesProperties(2),this.isDisplayItem())this.gminbin=n.fContMin,this.gminposbin=n.fContMinPos>0?n.fContMinPos:null,this.gmaxbin=n.fContMax;else for(this.gminbin=this.gmaxbin=n.getBinContent(1,1),this.gminposbin=null,t=0;t<this.nbinsx;++t)for(e=0;e<this.nbinsy;++e){let o=n.getBinContent(t+1,e+1);o<this.gminbin?this.gminbin=o:o>this.gmaxbin&&(this.gmaxbin=o),o>0&&(null===this.gminposbin||this.gminposbin>o)&&(this.gminposbin=o)}this.zmin=this.gminbin,this.zmax=this.gmaxbin,null===this.gminposbin&&(this.gminposbin=1e-4*this.gmaxbin),this.draw_content=!(this.options.Axis>0)&&this.gmaxbin>0}countStat(i){let d,y,h,a,r,c,g,t=this.getHisto(),e=0,n=0,o=0,f=0,m=0,l={name:"histo",entries:0,integral:0,meanx:0,meany:0,rmsx:0,rmsy:0,matrix:[0,0,0,0,0,0,0,0,0],xmax:0,ymax:0,wmax:null},s=this.getSelectIndex("x","left"),u=this.getSelectIndex("x","right"),p=this.getSelectIndex("y","left"),x=this.getSelectIndex("y","right"),M=this.getAxis("x"),b=this.getAxis("y");for(c=1;c<=this.nbinsx;++c)for(d=c<=s+1?0:c>u+1?2:1,h=M.GetBinCoord(c-.5),g=1;g<=this.nbinsy;++g)y=g<=p+1?0:g>x+1?2:1,a=b.GetBinCoord(g-.5),r=t.getBinContent(c,g),l.entries+=r,l.matrix[3*y+d]+=r,1==d&&1==y&&(i&&!i(h,a)||((null===l.wmax||r>l.wmax)&&(l.wmax=r,l.xmax=h,l.ymax=a),e+=r,n+=h*r,o+=a*r,f+=h**2*r,m+=a**2*r));return e>0&&(l.meanx=n/e,l.meany=o/e,l.rmsx=Math.sqrt(Math.abs(f/e-l.meanx**2)),l.rmsy=Math.sqrt(Math.abs(m/e-l.meany**2))),null===l.wmax&&(l.wmax=0),l.integral=e,l}fillStatistic(i,t){let e=this.countStat(),n=Math.floor(t%10),o=Math.floor(t/10)%10,f=Math.floor(t/100)%10,m=Math.floor(t/1e3)%10,d=Math.floor(t/1e4)%10,y=Math.floor(t/1e5)%10,h=Math.floor(t/1e6)%10,a=Math.floor(t/1e7)%10,r=Math.floor(t/1e8)%10;if(i.clearStat(),n>0&&i.addText(e.name),o>0&&i.addText("Entries = "+i.format(e.entries,"entries")),f>0&&(i.addText("Mean x = "+i.format(e.meanx)),i.addText("Mean y = "+i.format(e.meany))),m>0&&(i.addText("Std Dev x = "+i.format(e.rmsx)),i.addText("Std Dev y = "+i.format(e.rmsy))),h>0&&i.addText("Integral = "+i.format(e.matrix[4],"entries")),a>0&&(i.addText("Skewness x = <undef>"),i.addText("Skewness y = <undef>")),r>0&&i.addText("Kurt = <undef>"),d>0||y>0){let l=e.matrix;i.addText(l[6].toFixed(0)+" | "+l[7].toFixed(0)+" | "+l[7].toFixed(0)),i.addText(l[3].toFixed(0)+" | "+l[4].toFixed(0)+" | "+l[5].toFixed(0)),i.addText(l[0].toFixed(0)+" | "+l[1].toFixed(0)+" | "+l[2].toFixed(0))}return!0}drawBinsColor(){const i=this.getHisto(),t=this.prepareDraw(),e=t.stepi,n=t.stepj,o=[];let m,d,y,h,a,r,l,s,u,p;const x=()=>{p.path+=`h${l}v${p.y2-p.y}h${-l}z`,p.dy=0,p=null};for(h=t.i1;h<t.i2;h+=e){for(l=t.grx[h+e]-t.grx[h]||1,a=t.j1;a<t.j2;a+=n)if(r=i.getBinContent(h+1,a+1),m=t.palette.getContourIndex(r),0===r&&(this.options.Zero?null===m&&this._show_empty_bins&&(m=0):m=null),null!==m){if(d=`M${t.grx[h]},${t.gry[a]}`,s=t.gry[a+n]-t.gry[a]||-1,u=o[m],void 0===u)u=o[m]={path:d};else{if(u===p){u.y2=t.gry[a]+s;continue}y=`m${t.grx[h]-u.x},${t.gry[a]-u.y}`,u.path+=y.length<d.length?y:d}p&&x(),u.x=t.grx[h],u.y=t.gry[a],u.y2=t.gry[a]+s,p=u}else p&&x();p&&x()}return o.forEach((c,g)=>{c&&this.draw_g.append("svg:path").style("fill",t.palette.getColor(g)).attr("d",c.path)}),this.updatePaletteDraw(),t}buildContour(i,t,e,n){let r,l,u,b,_,B,C,j,w,T,F,I,S,at,H,o=this.getHisto(),f=2004,d=new Float32Array(2*f),y=new Float32Array(2*f),h=new Int32Array(2*f),a=0,s=[],p=0,x=[0,0,0,0],c=[0,0,0,0],g=[0,0,0,0],M=[0,0,0,0],J=i.stepi,E=i.stepj;function pt(N){for(let v=0;v<t.length;++v)if(N<t[v])return v-1;return t.length-1}function lt(N,v,P,R,D,k,A,Z){let rt,ft,gt,dt,O=P===A,U=O?Z-R:A-P,tt=v+1,yt=D-N,L=a-1,ct=999+a,ht=0;for(;tt<=k&&L<=ct;)dt=t[tt],gt=dt-N,ft=gt/yt,rt=U*ft,O?(d[L]=P,y[L]=R+rt):(d[L]=P+rt,y[L]=R),h[L]=tt,ht++,L+=2,tt++;return ht}let Q=i.original?i.origx:i.grx,V=i.original?i.origy:i.gry;for(_=i.j1;_<i.j2-E;_+=E)for(c[1]=c[0]=(V[_]+V[_+E])/2,c[3]=c[2]=(V[_+E]+V[_+2*E])/2,b=i.i1;b<i.i2-J;b+=J){for(g[0]=o.getBinContent(b+1,_+1),g[1]=o.getBinContent(b+1+J,_+1),g[2]=o.getBinContent(b+1+J,_+1+E),g[3]=o.getBinContent(b+1,_+1+E),B=0;B<4;B++)M[B]=pt(g[B]);if(M[0]!==M[1]||M[1]!==M[2]||M[2]!==M[3]||M[3]!==M[0]){for(x[3]=x[0]=(Q[b]+Q[b+1])/2,x[2]=x[1]=(Q[b+1]+Q[b+2])/2,C=g[0]<=g[1]?0:1,j=g[2]<=g[3]?2:3,g[C]>g[j]&&(C=j),C++,a=1,w=1;w<=4;w++)j=C%4+1,T=lt(g[C-1],M[C-1],x[C-1],c[C-1],g[j-1],M[j-1],x[j-1],c[j-1]),a+=2*T,C=j;for(C=g[0]<=g[1]?0:1,j=g[2]<=g[3]?2:3,g[C]>g[j]&&(C=j),C++,a=2,w=1;w<=4;w++)j=1==C?4:C-1,T=lt(g[C-1],M[C-1],x[C-1],c[C-1],g[j-1],M[j-1],x[j-1],c[j-1]),a+=2*T,C=j;for(F=0,w=1;w<=a-5;w+=2)for(;h[w-1]!=h[w];){for(I=d[w],S=y[w],at=h[w],H=w;H<=a-5;H+=2)d[H]=d[H+2],y[H]=y[H+2],h[H]=h[H+2];if(d[a-3]=I,y[a-3]=S,h[a-3]=at,F>2e3)break;F++}if(F>2e3)continue;for(w=1;w<=a-2;w+=2)r=h[w-1],r>=0&&r<t.length&&(l=s[r],l||(l=s[r]=(0,$.createTPolyLine)(4*f,!0)),u=l.fLastPoint,u<l.fN-2&&(l.fX[u+1]=Math.round(d[w-1]),l.fY[u+1]=Math.round(y[w-1]),l.fX[u+2]=Math.round(d[w]),l.fY[u+2]=Math.round(y[w]),l.fLastPoint=u+2,p=Math.max(p,l.fLastPoint+1)))}}let it=new Int32Array(t.length),et=0;for(r=0;r<t.length;r++)if(t[r]>=0){et=r;break}for(B=0,r=et-1;r>=0;r--)it[B]=r,B++;for(r=et;r<t.length;r++)it[B]=r,B++;let X=new Float32Array(2*p),Y=new Float32Array(2*p);for(B=0;B<t.length;++B){if(r=it[B],l=s[r],!l)continue;let k,A,U,N=r,v=l.fX,P=l.fY,R=l.fLastPoint+1,D=0,Z=0,O=0;for(;;){for(k=p,A=k+1,X[k]=v[D],Y[k]=P[D],X[A]=v[D+1],Y[A]=P[D+1],v[D]=v[D+1]=Z,P[D]=P[D+1]=O;;){for(U=0,b=2;b<R;b+=2)A<2*p-1&&v[b]===X[A]&&P[b]===Y[A]&&(A++,X[A]=v[b+1],Y[A]=P[b+1],v[b]=v[b+1]=Z,P[b]=P[b+1]=O,U++),k>0&&v[b+1]===X[k]&&P[b+1]===Y[k]&&(k--,X[k]=v[b],Y[k]=P[b],v[b]=v[b+1]=Z,P[b]=P[b+1]=O,U++);if(0==U)break}for(k+1<A&&k>=0&&n(N,X,Y,k,A,r),D=0,b=2;b<R;b+=2)if(v[b]!==Z&&P[b]!==O){D=b;break}if(0===D)break}}}drawBinsContour(i,t,e){let n=this.prepareDraw({rounding:!1,extra:100,original:0!=this.options.Proj}),o=this.getFramePainter(),f=o.getHistPalette(),m=f.getContour(),d=o.getProjectionFunc(),y=(h,a,r,l,s)=>{let p,x,c,g,u="";for(let M=r;M<=l;++M){if(d?(x=d(h[M],a[M]),x.x=Math.round(i.grx(x.x)),x.y=Math.round(i.gry(x.y))):x={x:Math.round(h[M]),y:Math.round(a[M])},u)if(M==l&&c&&x.x==c.x&&x.y==c.y){if(!g)return"";u+="z",s=!1}else x.x!=p.x&&x.y!=p.y?(u+="l"+(x.x-p.x)+","+(x.y-p.y),g=!0):x.x!=p.x?(u+="h"+(x.x-p.x),g=!0):x.y!=p.y&&(u+="v"+(x.y-p.y),g=!0);else u="M"+x.x+","+x.y,c=x;p=x}return s&&(u+="z"),u};if(14===this.options.Contour){let h="M0,0h"+t+"v"+e+"h-"+t+"z";if(this.options.Proj){let a=n.stepj,r=parseInt((n.j2-n.j1)/a),l=new Float32Array(2*r),s=new Float32Array(2*r);for(let u=0;u<r;++u)l[u]=n.origx[n.i1],s[u]=(n.origy[n.j1]*(u*a+.5)+n.origy[n.j2]*(r-.5-u*a))/r,l[u+r]=n.origx[n.i2],s[u+r]=(n.origy[n.j2]*(u*a+.5)+n.origy[n.j1]*(r-.5-u*a))/r;h=y(l,s,0,2*r-1,!0)}this.draw_g.append("svg:path").attr("d",h).style("fill",f.getColor(0))}return this.buildContour(n,m,f,(h,a,r,l,s)=>{let x,u=f.getColor(h),p=u;switch(this.options.Contour){case 1:case 14:break;case 11:p="none",x=new ot.rE({color:u});break;case 12:p="none",x=new ot.rE({color:1,style:h%5+1,width:1});break;case 13:p="none",x=this.lineatt}let c=y(a,r,l,s,"none"!=p);if(!c)return;let g=this.draw_g.append("svg:path").attr("class","th2_contour").attr("d",c).style("fill",p);x&&g.call(x.func)}),n.hide_only_zeros=!0,n}createPolyBin(i,t,e){let o,n="",f=1,m=null,d=i.getGrFuncs(this.options.second_x,this.options.second_y);function y(h,a,r,l){let s=Math.sqrt((h-r)**2+(a-l)**2);t._sumx+=(h+r)*s/2,t._sumy+=(a+l)*s/2,t._suml+=s}for("TMultiGraph"==t.fPoly._typename?f=t.fPoly.fGraphs.arr.length:m=t.fPoly,e&&(t._sumx=t._sumy=t._suml=0),o=0;o<f;++o){(!m||o>0)&&(m=t.fPoly.fGraphs.arr[o]);let a,p,x,h=m.fNpoints,r=m.fX,l=m.fY,s=Math.round(d.grx(r[0])),u=Math.round(d.gry(l[0]));for(h>2&&r[0]==r[h-1]&&l[0]==l[h-1]&&h--,n+="M"+s+","+u,a=1;a<h;++a)p=Math.round(d.grx(r[a])),x=Math.round(d.gry(l[a])),e&&y(s,u,p,x),(s!==p||u!==x)&&(n+=s===p?"v"+(x-u):u===x?"h"+(p-s):"l"+(p-s)+","+(x-u)),s=p,u=x;e&&y(s,u,Math.round(d.grx(r[0])),Math.round(d.gry(l[0]))),n+="z"}return e&&(t._suml>0?(t._midx=Math.round(t._sumx/t._suml),t._midy=Math.round(t._sumy/t._suml)):(t._midx=Math.round(d.grx((t.fXmin+t.fXmax)/2)),t._midy=Math.round(d.gry((t.fYmin+t.fYmax)/2)))),n}drawBinsText(i){let e,n,o,f,m,d,y,h,a,r,t=this.getHisto();null===i&&(i=this.prepareDraw({rounding:!1}));let l=this.v7EvalFont("text",{size:20,color:"black",align:22}),s=0,u=this.draw_g.append("svg:g").attr("class","th2_text"),p=i.stepi,x=i.stepj,c="E"==this.options.TextKind&&this.matchObjectType("TProfile2D")&&"function"==typeof t.getBinEntries;for(this.options.BarOffset&&(s=this.options.BarOffset),this.startTextDrawing(l,"font",u),e=i.i1;e<i.i2;e+=p)for(n=i.j1;n<i.j2;n+=x)o=t.getBinContent(e+1,n+1),(0!==o||this._show_empty_bins)&&(f=i.grx[e+p]-i.grx[e],m=i.gry[n]-i.gry[n+x],c&&(o=t.getBinEntries(e+1,n+1)),d=o===Math.round(o)?o.toString():(0,G.Ee)(o,$.gStyle.fPaintTextFormat),l.angle?(y=Math.round(i.grx[e]+.5*f),h=Math.round(i.gry[n+x]+m*(.5+s)),a=r=0):(y=Math.round(i.grx[e]+.1*f),h=Math.round(i.gry[n+x]+m*(.1+s)),a=Math.round(.8*f),r=Math.round(.8*m)),this.drawText({align:22,x:y,y:h,width:a,height:r,text:d,latex:0,draw_g:u}));return this.finishTextDrawing(u,!0).then(()=>(i.hide_only_zeros=!0,i))}drawBinsArrow(){let e,n,f,m,d,y,h,a,r,l,s,u,p,x,c,i=this.getHisto(),t="",o=1e-30,g=this.prepareDraw({rounding:!1}),M=(g.grx[g.i2]-g.grx[g.i1])/(g.i2-g.i1+1-.03)/2,b=(g.gry[g.j2]-g.gry[g.j1])/(g.j2-g.j1+1-.03)/2,_=g.stepi,B=g.stepj;const C=(j,w)=>j?w?`l${j},${w}`:`h${j}`:w?`v${w}`:"";for(let j=0;j<2;++j)for(e=g.i1;e<g.i2;e+=_)for(n=g.j1;n<g.j2;n+=B)f=e===g.i1?i.getBinContent(e+1+_,n+1)-i.getBinContent(e+1,n+1):e>=g.i2-_?i.getBinContent(e+1,n+1)-i.getBinContent(e+1-_,n+1):.5*(i.getBinContent(e+1+_,n+1)-i.getBinContent(e+1-_,n+1)),m=n===g.j1?i.getBinContent(e+1,n+1+B)-i.getBinContent(e+1,n+1):n>=g.j2-B?i.getBinContent(e+1,n+1)-i.getBinContent(e+1,n+1-B):.5*(i.getBinContent(e+1,n+1+B)-i.getBinContent(e+1,n+1-B)),0===j?o=Math.max(o,Math.abs(f),Math.abs(m)):(d=(g.grx[e]+g.grx[e+_])/2,y=(g.gry[n]+g.gry[n+B])/2,h=M*f/o,a=b*m/o,r=d-h,l=d+h,s=y-a,u=y+a,f=Math.round(l-r),m=Math.round(u-s),(0!==f||0!==m)&&(t+="M"+Math.round(r)+","+Math.round(s)+C(f,m),(Math.abs(f)>5||Math.abs(m)>5)&&(p=Math.sqrt(2/(f**2+m**2)),x=Math.round(p*(f+m)),c=Math.round(p*(f-m)),(x||c)&&(t+=`m${-x},${c}`+C(x,-c)+C(-c,-x)))));return this.draw_g.append("svg:path").attr("d",t).style("fill","none").call(this.lineatt.func),g}drawBinsBox(){let i=this.getHisto(),t=this.prepareDraw({rounding:!1}),e=this.getFramePainter();e.maxbin===e.minbin&&(e.maxbin=this.gmaxbin,e.minbin=this.gminbin,e.minposbin=this.gminposbin),e.maxbin===e.minbin&&(e.minbin=Math.min(0,e.maxbin-1));let f,m,d,y,s,u,p,x,c,g,M,b,n=Math.max(Math.abs(e.maxbin),Math.abs(e.minbin)),o=Math.max(0,e.minbin),h="",a="",r="",l="",_=!1,B=0,C=t.stepi,j=t.stepj;if(e.logz&&n>0){_=!0;let w=Math.log(n);B=o>0?Math.log(o):e.minposbin>=1&&e.minposbin<100?Math.log(.7):e.minposbin>0?Math.log(.7*e.minposbin):w-10,B>=w&&(B=w-10),b=1/(w-B)}else b=1/(n-o);for(f=t.i1;f<t.i2;f+=C)for(m=t.j1;m<t.j2;m+=j)if(d=i.getBinContent(f+1,m+1),y=Math.abs(d),!(0===y||y<o)&&(s=_?y>0?Math.log(y)-B:0:y-o,s=.5*(s<0?1:1-Math.sqrt(s*b)),s<0&&(s=0),g=t.grx[f+C]-t.grx[f],M=t.gry[m]-t.gry[m+j],u=s*g,p=s*M,x=Math.round(t.grx[f]+u),c=Math.round(t.gry[m+j]+p),g=Math.max(Math.round(g-2*u),1),M=Math.max(Math.round(M-2*p),1),h+=`M${x},${c}v${M}h${g}v${-M}z`,d<0&&10===this.options.BoxStyle&&(a+=`M${x},${c}l${g},${M}M${x+g},${c}l${-g},${M}`),11===this.options.BoxStyle&&g>5&&M>5)){let w=Math.round(.1*g),T=Math.round(.1*M),F=`M${x},${c}h${g}l${-w},${T}h${2*w-g}v${M-2*T}l${-w},${T}z`,I=`M${x+g},${c+M}v${-M}l${-w},${T}v${M-2*T}h${2*w-g}l${-w},${T}z`;d<0?(l+=F,r+=I):(r+=F,l+=I)}if(h.length>0){let w=this.draw_g.append("svg:path").attr("d",h).call(this.fillatt.func);11!==this.options.BoxStyle&&this.fillatt.empty()&&w.call(this.lineatt.func)}if(r.length>0&&this.fillatt.hasColor()&&this.draw_g.append("svg:path").attr("d",r).call(this.fillatt.func).style("fill",(0,st.B8)(this.fillatt.color).brighter(.5).formatHex()),l.length>0&&this.draw_g.append("svg:path").attr("d",l).call(this.fillatt.func).style("fill",this.fillatt.hasColor()?(0,st.B8)(this.fillatt.color).darker(.5).formatHex():"red"),a.length>0){let w=this.draw_g.append("svg:path").attr("d",a).style("fill","none");this.lineatt.empty()||w.call(this.lineatt.func)}return t}drawBinsCandle(i,t){let f,m,d,y,h,a,r,l,s,x,e=this.getHisto(),n=this.getAxis("y"),o=this.prepareDraw(),u="",p="";for(this.createv7AttMarker(),this.markeratt.resetPos(),o.candle=[],f=o.i1;f<o.i2;++f){for(y=0,l=0,r=0,m=0;m<this.nbinsy;++m)l+=e.getBinContent(f+1,m+1);for(s={bin:f,meany:0,m25y:0,p25y:0,median:0,iqr:0,whiskerp:0,whiskerm:0},m=0;m<this.nbinsy;++m)h=e.getBinContent(f+1,m+1),x=n.GetBinCoord(m+.5),r/l<.001&&(r+h)/l>=.001&&(s.whiskerm=x),r/l<.25&&(r+h)/l>=.25&&(s.m25y=x),r/l<.5&&(r+h)/l>=.5&&(s.median=x),r/l<.75&&(r+h)/l>=.75&&(s.p25y=x),r/l<.999&&(r+h)/l>=.999&&(s.whiskerp=x),r+=h,d=x,y+=h*d;if(r>0&&(s.meany=y/r),s.iqr=s.p25y-s.m25y,s.m25y-1.5*s.iqr>s.whsikerm&&(s.whiskerm=s.m25y-1.5*s.iqr),s.p25y+1.5*s.iqr<s.whiskerp&&(s.whiskerp=s.p25y+1.5*s.iqr),!(i.logy&&s.whiskerm<=0)){for(t=o.grx[f+1]-o.grx[f],a=(o.grx[f+1]+o.grx[f])/2+this.options.BarOffset*(t*=.66),this.options.BarWidth>0&&(t*=this.options.BarWidth),s.x1=Math.round(a-t/2),s.x2=Math.round(a+t/2),a=Math.round(a),s.y0=Math.round(i.gry(s.median)),u+="M"+s.x1+","+s.y0+"h"+(s.x2-s.x1),s.y1=Math.round(i.gry(s.p25y)),s.y2=Math.round(i.gry(s.m25y)),u+="M"+s.x1+","+s.y1+"v"+(s.y2-s.y1)+"h"+(s.x2-s.x1)+"v-"+(s.y2-s.y1)+"z",s.yy1=Math.round(i.gry(s.whiskerp)),s.yy2=Math.round(i.gry(s.whiskerm)),u+="M"+a+","+s.y1+"v"+(s.yy1-s.y1),u+="M"+s.x1+","+s.yy1+"h"+(s.x2-s.x1),u+="M"+a+","+s.y2+"v"+(s.yy2-s.y2),u+="M"+s.x1+","+s.yy2+"h"+(s.x2-s.x1),m=0;m<this.nbinsy;++m)h=e.getBinContent(f+1,m+1),x=n.GetBinCoord(m+.5),h>0&&x<s.whiskerm&&(p+=this.markeratt.create(a,x)),h>0&&x>s.whiskerp&&(p+=this.markeratt.create(a,x));o.candle.push(s)}}return u.length>0&&this.draw_g.append("svg:path").attr("d",u).call(this.lineatt.func).call(this.fillatt.func),p.length>0&&this.draw_g.append("svg:path").attr("d",p).call(this.markeratt.func),o}drawBinsScatter(){let d,y,h,a,r,l,s,u,i=this.getHisto(),t=this.prepareDraw({rounding:!0,pixel_density:!0,scatter_plot:!0}),e=[],n=[],o=[],f=[],m=[],p=1,x=this.options.ScatCoef*(this.gmaxbin>2e3?2e3/this.gmaxbin:1),c=t.stepi,g=t.stepj,M=new G.q9(t.sumz);if(x*t.sumz<1e5){this.createv7AttMarker(),this.markeratt.resetPos();let j,w,C="";for(a=t.i1;a<t.i2;a+=c)for(s=t.grx[a+c]-t.grx[a],r=t.j1;r<t.j2;r+=g)if(u=t.gry[r]-t.gry[r+g],l=i.getBinContent(a+1,r+1),w=Math.round(x*l),!(w<=0))for(j=0;j<w;++j)C+=this.markeratt.create(Math.round(t.grx[a]+s*M.random()),Math.round(t.gry[r+1]+u*M.random()));return this.draw_g.append("svg:path").attr("d",C).call(this.markeratt.func),t}for(this.maxbin>.7&&(p=.7/this.maxbin),a=t.i1;a<t.i2;a+=c)for(r=t.j1;r<t.j2;r+=g)l=i.getBinContent(a+1,r+1),!(l<=0||l<this.minbin)&&(s=t.grx[a+c]-t.grx[a],u=t.gry[r]-t.gry[r+g],!(s*u<=0)&&(d=t.palette.getContourIndex(l/s/u),!(d<0)&&(y="M"+t.grx[a]+","+t.gry[r+g],void 0===e[d]?(e[d]=y,f[d]=s,m[d]=u):(h="m"+(t.grx[a]-n[d])+","+(t.gry[r+g]-o[d]),e[d]+=h.length<y.length?h:y,f[d]=Math.max(f[d],s),m[d]=Math.max(m[d],u)),n[d]=t.grx[a],o[d]=t.gry[r+g],e[d]+="v"+u+"h"+s+"v-"+u+"z")));let b=this.getFrameSvg().select(".main_layer"),_=b.select("defs");_.empty()&&e.length>0&&(_=b.insert("svg:defs",":first-child")),this.createv7AttMarker();let B=t.palette.getContour();for(d=0;d<e.length;++d)if(void 0!==e[d]&&d<B.length){let C="scatter_"+d,j=_.select("."+C);j.empty()?j=_.append("svg:pattern").attr("class",C).attr("id","jsroot_scatter_pattern_"+$.internals.id_counter++).attr("patternUnits","userSpaceOnUse"):j.selectAll("*").remove();let w=Math.round(p*B[d]*f[d]*m[d]);w<1&&(w=1);let T=new Float32Array(w),F=new Float32Array(w);if(1===w)T[0]=F[0]=.5;else for(let S=0;S<w;++S)T[S]=M.random(),F[S]=M.random();this.markeratt.resetPos();let I="";for(let S=0;S<w;++S)I+=this.markeratt.create(T[S]*f[d],F[S]*m[d]);j.attr("width",f[d]).attr("height",m[d]).append("svg:path").attr("d",I).call(this.markeratt.func),this.draw_g.append("svg:path").attr("scatter-index",d).style("fill","url(#"+j.attr("id")+")").attr("d",e[d])}return t}draw2DBins(){if(!this.draw_content)return this.removeG(),Promise.resolve(!1);this.createHistDrawAttributes(),this.createG(!0);let i=this.getFramePainter(),t=i.getFrameRect(),e=i.getGrFuncs(this.options.second_x,this.options.second_y),n=null,o=null;return this.options.Scat?n=this.drawBinsScatter():this.options.Color?n=this.drawBinsColor():this.options.Box?n=this.drawBinsBox():this.options.Arrow?n=this.drawBinsArrow():this.options.Contour>0?n=this.drawBinsContour(e,t.width,t.height):this.options.Candle&&(n=this.drawBinsCandle(e,t.width)),this.options.Text&&(o=this.drawBinsText(n)),!n&&!o&&(n=this.drawBinsColor()),o||(o=Promise.resolve(n)),o.then(f=>(this.tt_handle=f,this))}getBinTooltips(i,t){let e=[],n=this.getHisto(),o=n.getBinContent(i+1,t+1),f=1,m=1;this.isDisplayItem()&&(f=n.stepx||1,m=n.stepy||1),e.push(this.getObjectHint()||"histo<2>"),e.push("x = "+this.getAxisBinTip("x",i,f)),e.push("y = "+this.getAxisBinTip("y",t,m)),e.push("bin = "+i+", "+t),n.$baseh&&(o-=n.$baseh.getBinContent(i+1,t+1));let d="entries = "+(f>1||m>1?"~":"");return o===Math.round(o)?e.push(d+o):e.push(d+(0,G.Ee)(o,$.gStyle.fStatFormat)),e}getCandleTooltips(i){let t=[],e=this.getFramePainter(),n=this.getAxis("y");return t.push(this.getObjectHint()||"histo"),t.push("x = "+e.axisAsText("x",n.GetBinCoord(i.bin))),t.push("mean y = "+(0,G.Ee)(i.meany,$.gStyle.fStatFormat)),t.push("m25 = "+(0,G.Ee)(i.m25y,$.gStyle.fStatFormat)),t.push("p25 = "+(0,G.Ee)(i.p25y,$.gStyle.fStatFormat)),t}getPolyBinTooltips(i,t,e){let o=this.getHisto().fBins.arr[i],f=this.getFramePainter(),m=o.fPoly.fName,d=[],y=0;if("Graph"===m&&(m=""),0===m.length&&(m=o.fNumber),void 0===t&&void 0===e){t=e=0;let h=o.fPoly,a=1;"TMultiGraph"===h._typename&&(a=o.fPoly.fGraphs.arr.length,h=null);for(let r=0;r<a;++r){(!h||r>0)&&(h=o.fPoly.fGraphs.arr[r]);for(let l=0;l<h.fNpoints;++l)++y,t+=h.fX[l],e+=h.fY[l]}y>1&&(t/=y,e/=y)}return d.push(this.getObjectHint()||"histo"),d.push("x = "+f.axisAsText("x",t)),d.push("y = "+f.axisAsText("y",e)),y>0&&d.push("npnts = "+y),d.push("bin = "+m),o.fContent===Math.round(o.fContent)?d.push("content = "+o.fContent):d.push("content = "+(0,G.Ee)(o.fContent,$.gStyle.fStatFormat)),d}processTooltipEvent(i){if(!i||!this.draw_content||!this.draw_g||!this.tt_handle||this.options.Proj)return this.draw_g&&this.draw_g.select(".tooltip_bin").remove(),null;let t=this.getHisto(),e=this.tt_handle,n=this.draw_g.select(".tooltip_bin");if(e.poly){let r,h=this.getFramePainter(),a=-1;const l=h.revertAxis("x",i.x),s=h.revertAxis("y",i.y);if(void 0!==l&&void 0!==s){const p=t.fBins.arr.length;for(let x=0;x<p&&a<0;++x){if(r=t.fBins.arr[x],l<r.fXmin||l>r.fXmax||s<r.fYmin||s>r.fYmax||0===r.fContent&&!this.options.Zero)continue;let c=r.fPoly,g=1;"TMultiGraph"===c._typename&&(g=r.fPoly.fGraphs.arr.length,c=null);for(let M=0;M<g;++M)if((!c||M>0)&&(c=r.fPoly.fGraphs.arr[M]),c.IsInside(l,s)){a=x;break}}}if(a<0)return n.remove(),null;let u={name:"histo",title:t.fTitle||"title",x:i.x,y:i.y,color1:this.lineatt?this.lineatt.color:"green",color2:this.fillatt?this.fillatt.getFillColorAlt("blue"):"blue",exact:!0,menu:!0,lines:this.getPolyBinTooltips(a,l,s)};return i.disabled?(n.remove(),u.changed=!0):(n.empty()&&(n=this.draw_g.append("svg:path").attr("class","tooltip_bin h1bin").style("pointer-events","none")),u.changed=n.property("current_bin")!==a,u.changed&&n.attr("d",this.createPolyBin(h,r)).style("opacity","0.7").property("current_bin",a)),u.changed&&(u.user_info={obj:t,name:"histo",bin:a,cont:r.fContent,grx:i.x,gry:i.y}),u}if(e.candle){let h,a;for(a=0;a<e.candle.length&&(h=e.candle[a],!(h.x1<=i.x&&i.x<=h.x2&&h.yy1<=i.y&&i.y<=h.yy2));++a);if(a>=e.candle.length)return n.remove(),null;let r={name:"histo",title:t.fTitle||"title",x:i.x,y:i.y,color1:this.lineatt?this.lineatt.color:"green",color2:this.fillatt?this.fillatt.getFillColorAlt("blue"):"blue",lines:this.getCandleTooltips(h),exact:!0,menu:!0};return i.disabled?(n.remove(),r.changed=!0):(n.empty()&&(n=this.draw_g.append("svg:rect").attr("class","tooltip_bin h1bin").style("pointer-events","none")),r.changed=n.property("current_bin")!==a,r.changed&&n.attr("x",h.x1).attr("width",h.x2-h.x1).attr("y",h.yy1).attr("height",h.yy2-h.yy1).style("opacity","0.7").property("current_bin",a)),r.changed&&(r.user_info={obj:t,name:"histo",bin:a+1,cont:h.median,binx:a+1,biny:1,grx:i.x,gry:i.y}),r}let o,f,m=0,d=null;for(o=e.i1;o<e.i2&&!(i.x>=e.grx[o]&&i.x<=e.grx[o+1]);++o);for(f=e.j1;f<e.j2&&!(i.y>=e.gry[f+1]&&i.y<=e.gry[f]);++f);if(o<e.i2&&f<e.j2&&(m=t.getBinContent(o+1,f+1),this.is_projection?d=0:e.hide_only_zeros?d=0!==m||this._show_empty_bins?0:null:(d=e.palette.getContourIndex(m),null===d&&0===m&&this._show_empty_bins&&(d=0))),null===d)return n.remove(),null;let y={name:"histo",title:t.fTitle||"title",x:i.x,y:i.y,color1:this.lineatt?this.lineatt.color:"green",color2:this.fillatt?this.fillatt.getFillColorAlt("blue"):"blue",lines:this.getBinTooltips(o,f),exact:!0,menu:!0};if(this.options.Color&&(y.color2=e.palette.getColor(d)),i.disabled&&!this.is_projection)n.remove(),y.changed=!0;else{n.empty()&&(n=this.draw_g.append("svg:rect").attr("class","tooltip_bin h1bin").style("pointer-events","none"));let h=o,a=o+1,r=f,l=f+1,s=e.grx[h],u=e.grx[a],p=e.gry[l],x=e.gry[r],c=1e4*o+f;if("X"==this.is_projection){if(s=0,u=this.getFramePainter().getFrameWidth(),this.projection_width>1){let g=(this.projection_width-1)/2;l+g>=e.j2?(l=Math.min(Math.round(l+g),e.j2),r=Math.max(l-this.projection_width,e.j1)):(r=Math.max(Math.round(r-g),e.j1),l=Math.min(r+this.projection_width,e.j2))}p=e.gry[l],x=e.gry[r],c=777*r+333*l}else if("Y"==this.is_projection){if(p=0,x=this.getFramePainter().getFrameHeight(),this.projection_width>1){let g=(this.projection_width-1)/2;a+g>=e.i2?(a=Math.min(Math.round(a+g),e.i2),h=Math.max(a-this.projection_width,e.i1)):(h=Math.max(Math.round(h-g),e.i1),a=Math.min(h+this.projection_width,e.i2))}s=e.grx[h],u=e.grx[a],c=777*h+333*a}y.changed=n.property("current_bin")!==c,y.changed&&n.attr("x",s).attr("width",u-s).attr("y",p).attr("height",x-p).style("opacity","0.7").property("current_bin",c),this.is_projection&&y.changed&&this.redrawProjection(h,a,r,l)}return y.changed&&(y.user_info={obj:t,name:"histo",bin:t.getBin(o+1,f+1),cont:m,binx:o+1,biny:f+1,grx:i.x,gry:i.y}),y}canZoomInside(i,t,e){if("z"==i)return!0;let n=this.getAxis(i);return n.FindBin(e,.5)-n.FindBin(t,0)>1}draw2D(i){return this.clear3DScene(),this.drawFrameAxes().then(t=>!!t&&this.drawingBins(i)).then(t=>{if(t)return this.draw2DBins().then(()=>this.addInteractivity())}).then(()=>this)}draw3D(i){return console.log("3D drawing is disabled, load ./hist/RH1Painter.mjs"),this.draw2D(i)}callDrawFunc(i){let t=this.getFramePainter();return t&&t.mode3d!==this.options.Mode3D&&!this.isMainPainter()&&(this.options.Mode3D=t.mode3d),this.options.Mode3D?this.draw3D(i):this.draw2D(i)}redraw(i){return this.callDrawFunc(i)}static _draw(i,t){return(0,xt.ensureRCanvas)(i).then(()=>{i.setAsMainPainter(),i.options={Hist:!1,Error:!1,Zero:!1,Mark:!1,Line:!1,Fill:!1,Lego:0,Surf:0,Text:!0,TextAngle:0,TextKind:"",BaseLine:!1,Mode3D:!1,AutoColor:0,Color:!1,Scat:!1,ScatCoef:1,Candle:"",Box:!1,BoxStyle:0,Arrow:!1,Contour:0,Proj:0,BarOffset:0,BarWidth:1,minimum:-1111,maximum:-1111};let e=i.v7EvalAttr("kind",""),n=i.v7EvalAttr("sub",0),o=i.options;switch(o.Text=i.v7EvalAttr("drawtext",!1),e){case"lego":o.Lego=n>0?10+n:12,o.Mode3D=!0;break;case"surf":o.Surf=n>0?10+n:1,o.Mode3D=!0;break;case"box":o.Box=!0,o.BoxStyle=10+n;break;case"err":o.Error=!0,o.Mode3D=!0;break;case"cont":o.Contour=n>0?10+n:1;break;case"arr":o.Arrow=!0;break;case"scat":o.Scat=!0;break;case"col":o.Color=!0;break;default:o.Text||(o.Color=!0)}return i._show_empty_bins=!1,i.scanContent(),i.callDrawFunc()})}static draw(i,t,e){return W._draw(new W(i,t),e)}}var mt=z(757),K=z(3641);class q extends W{draw3DBins(){if(this.draw_content){if(this.options.Surf)return(0,K.c5)(this,!0);if(this.options.Error)return(0,K.me)(this,!0);if(this.options.Contour)return(0,K.ME)(this,!0,!0);(0,K.UR)(this,!0),this.updatePaletteDraw()}}draw3D(i){this.mode3d=!0;let t=this.getFramePainter(),e=this.isMainPainter(),n=Promise.resolve(this);if("resize"==i)return e&&t.resize3D()&&t.render3D(),n;let o=1+2*$.gStyle.fHistTopMargin;return this.zmin=t.logz?.3*this.gminposbin:this.gminbin,this.zmax=this.gmaxbin,-1111!==this.options.minimum&&(this.zmin=this.options.minimum),-1111!==this.options.maximum&&(this.zmax=this.options.maximum,o=1),t.logz&&this.zmin<=0&&(this.zmin=1e-5*this.zmax),this.deleteAttr(),e&&((0,K.g_)(t),n=t.create3DScene(this.options.Render3D).then(()=>{t.setAxesRanges(this.getAxis("x"),this.xmin,this.xmax,this.getAxis("y"),this.ymin,this.ymax,null,this.zmin,this.zmax),t.set3DOptions(this.options),t.drawXYZ(t.toplevel,mt.C,{zmult:o,zoom:$.settings.Zooming,ndim:2,draw:!0,v7:!0})})),t.mode3d?n.then(()=>this.drawingBins(i)).then(()=>{let f=this.getFramePainter();return this.draw3DBins(),f.render3D(),f.addKeysHandler(),this}):n}static draw(i,t,e){return q._draw(new q(i,t),e)}}}}]);
//# sourceMappingURL=7.698318223827711c.js.map