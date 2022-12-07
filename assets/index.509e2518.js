import{d as Q,r as w,o as se,h as K,a as Fe,b as De,u as Te,c as ke,e as D,f as _,g as M,w as d,i as O,F as Z,j as R,k as G,l as i,m as P,n as g,p as $,t as X,q as ie,M as j,B as Le,s as be,v as ee,x as te,_ as W,y as Pe}from"./index.ec7ccd34.js";import{L as xe,T as Re}from"./assets-logo-full.e537b1e8.js";import"./index.176399a1.js";/*!
 * qrcode.vue v3.3.3
 * A Vue.js component to generate QRCode.
 * © 2017-2021 @scopewu(https://github.com/scopewu)
 * MIT License.
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var q=function(){return q=Object.assign||function(t){for(var a,n=1,r=arguments.length;n<r;n++){a=arguments[n];for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(t[u]=a[u])}return t},q.apply(this,arguments)},le={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3},Se=le;function fe(e){this.mode=Se.MODE_8BIT_BYTE,this.data=e}fe.prototype={getLength:function(e){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}};var Me=fe,ne={L:1,M:0,Q:3,H:2},Y=ne;function S(e,t){this.totalCount=e,this.dataCount=t}S.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];S.getRSBlocks=function(e,t){var a=S.getRsBlockTable(e,t);if(a==null)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var n=a.length/3,r=new Array,u=0;u<n;u++)for(var o=a[u*3+0],s=a[u*3+1],l=a[u*3+2],v=0;v<o;v++)r.push(new S(s,l));return r};S.getRsBlockTable=function(e,t){switch(t){case Y.L:return S.RS_BLOCK_TABLE[(e-1)*4+0];case Y.M:return S.RS_BLOCK_TABLE[(e-1)*4+1];case Y.Q:return S.RS_BLOCK_TABLE[(e-1)*4+2];case Y.H:return S.RS_BLOCK_TABLE[(e-1)*4+3];default:return}};var Ie=S;function de(){this.buffer=new Array,this.length=0}de.prototype={get:function(e){var t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(var a=0;a<t;a++)this.putBit((e>>>t-a-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Ne=de,x={glog:function(e){if(e<1)throw new Error("glog("+e+")");return x.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return x.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var A=0;A<8;A++)x.EXP_TABLE[A]=1<<A;for(var A=8;A<256;A++)x.EXP_TABLE[A]=x.EXP_TABLE[A-4]^x.EXP_TABLE[A-5]^x.EXP_TABLE[A-6]^x.EXP_TABLE[A-8];for(var A=0;A<255;A++)x.LOG_TABLE[x.EXP_TABLE[A]]=A;var ve=x,U=ve;function J(e,t){if(e.length==null)throw new Error(e.length+"/"+t);for(var a=0;a<e.length&&e[a]==0;)a++;this.num=new Array(e.length-a+t);for(var n=0;n<e.length-a;n++)this.num[n]=e[n+a]}J.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),a=0;a<this.getLength();a++)for(var n=0;n<e.getLength();n++)t[a+n]^=U.gexp(U.glog(this.get(a))+U.glog(e.get(n)));return new J(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=U.glog(this.get(0))-U.glog(e.get(0)),a=new Array(this.getLength()),n=0;n<this.getLength();n++)a[n]=this.get(n);for(var n=0;n<e.getLength();n++)a[n]^=U.gexp(U.glog(e.get(n))+t);return new J(a,0).mod(e)}};var ce=J,L=le,oe=ce,$e=ve,V={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},C={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,G18:1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,G15_MASK:1<<14|1<<12|1<<10|1<<4|1<<1,getBCHTypeInfo:function(e){for(var t=e<<10;C.getBCHDigit(t)-C.getBCHDigit(C.G15)>=0;)t^=C.G15<<C.getBCHDigit(t)-C.getBCHDigit(C.G15);return(e<<10|t)^C.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;C.getBCHDigit(t)-C.getBCHDigit(C.G18)>=0;)t^=C.G18<<C.getBCHDigit(t)-C.getBCHDigit(C.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;e!=0;)t++,e>>>=1;return t},getPatternPosition:function(e){return C.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,a){switch(e){case V.PATTERN000:return(t+a)%2==0;case V.PATTERN001:return t%2==0;case V.PATTERN010:return a%3==0;case V.PATTERN011:return(t+a)%3==0;case V.PATTERN100:return(Math.floor(t/2)+Math.floor(a/3))%2==0;case V.PATTERN101:return t*a%2+t*a%3==0;case V.PATTERN110:return(t*a%2+t*a%3)%2==0;case V.PATTERN111:return(t*a%3+(t+a)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new oe([1],0),a=0;a<e;a++)t=t.multiply(new oe([1,$e.gexp(a)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case L.MODE_NUMBER:return 10;case L.MODE_ALPHA_NUM:return 9;case L.MODE_8BIT_BYTE:return 8;case L.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case L.MODE_NUMBER:return 12;case L.MODE_ALPHA_NUM:return 11;case L.MODE_8BIT_BYTE:return 16;case L.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else if(t<41)switch(e){case L.MODE_NUMBER:return 14;case L.MODE_ALPHA_NUM:return 13;case L.MODE_8BIT_BYTE:return 16;case L.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}else throw new Error("type:"+t)},getLostPoint:function(e){for(var t=e.getModuleCount(),a=0,n=0;n<t;n++)for(var r=0;r<t;r++){for(var u=0,o=e.isDark(n,r),s=-1;s<=1;s++)if(!(n+s<0||t<=n+s))for(var l=-1;l<=1;l++)r+l<0||t<=r+l||s==0&&l==0||o==e.isDark(n+s,r+l)&&u++;u>5&&(a+=3+u-5)}for(var n=0;n<t-1;n++)for(var r=0;r<t-1;r++){var v=0;e.isDark(n,r)&&v++,e.isDark(n+1,r)&&v++,e.isDark(n,r+1)&&v++,e.isDark(n+1,r+1)&&v++,(v==0||v==4)&&(a+=3)}for(var n=0;n<t;n++)for(var r=0;r<t-6;r++)e.isDark(n,r)&&!e.isDark(n,r+1)&&e.isDark(n,r+2)&&e.isDark(n,r+3)&&e.isDark(n,r+4)&&!e.isDark(n,r+5)&&e.isDark(n,r+6)&&(a+=40);for(var r=0;r<t;r++)for(var n=0;n<t-6;n++)e.isDark(n,r)&&!e.isDark(n+1,r)&&e.isDark(n+2,r)&&e.isDark(n+3,r)&&e.isDark(n+4,r)&&!e.isDark(n+5,r)&&e.isDark(n+6,r)&&(a+=40);for(var f=0,r=0;r<t;r++)for(var n=0;n<t;n++)e.isDark(n,r)&&f++;var F=Math.abs(100*f/t/t-50)/5;return a+=F*10,a}},Ve=C,Oe=Me,he=Ie,ge=Ne,H=Ve,He=ce;function I(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var T=I.prototype;T.addData=function(e){var t=new Oe(e);this.dataList.push(t),this.dataCache=null};T.isDark=function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]};T.getModuleCount=function(){return this.moduleCount};T.make=function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=he.getRSBlocks(e,this.errorCorrectLevel),a=new ge,n=0,r=0;r<t.length;r++)n+=t[r].dataCount;for(var r=0;r<this.dataList.length;r++){var u=this.dataList[r];a.put(u.mode,4),a.put(u.getLength(),H.getLengthInBits(u.mode,e)),u.write(a)}if(a.getLengthInBits()<=n*8)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())};T.makeImpl=function(e,t){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var a=0;a<this.moduleCount;a++){this.modules[a]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[a][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),this.dataCache==null&&(this.dataCache=I.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)};T.setupPositionProbePattern=function(e,t){for(var a=-1;a<=7;a++)if(!(e+a<=-1||this.moduleCount<=e+a))for(var n=-1;n<=7;n++)t+n<=-1||this.moduleCount<=t+n||(0<=a&&a<=6&&(n==0||n==6)||0<=n&&n<=6&&(a==0||a==6)||2<=a&&a<=4&&2<=n&&n<=4?this.modules[e+a][t+n]=!0:this.modules[e+a][t+n]=!1)};T.getBestMaskPattern=function(){for(var e=0,t=0,a=0;a<8;a++){this.makeImpl(!0,a);var n=H.getLostPoint(this);(a==0||e>n)&&(e=n,t=a)}return t};T.createMovieClip=function(e,t,a){var n=e.createEmptyMovieClip(t,a),r=1;this.make();for(var u=0;u<this.modules.length;u++)for(var o=u*r,s=0;s<this.modules[u].length;s++){var l=s*r,v=this.modules[u][s];v&&(n.beginFill(0,100),n.moveTo(l,o),n.lineTo(l+r,o),n.lineTo(l+r,o+r),n.lineTo(l,o+r),n.endFill())}return n};T.setupTimingPattern=function(){for(var e=8;e<this.moduleCount-8;e++)this.modules[e][6]==null&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)this.modules[6][t]==null&&(this.modules[6][t]=t%2==0)};T.setupPositionAdjustPattern=function(){for(var e=H.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var a=0;a<e.length;a++){var n=e[t],r=e[a];if(this.modules[n][r]==null)for(var u=-2;u<=2;u++)for(var o=-2;o<=2;o++)u==-2||u==2||o==-2||o==2||u==0&&o==0?this.modules[n+u][r+o]=!0:this.modules[n+u][r+o]=!1}};T.setupTypeNumber=function(e){for(var t=H.getBCHTypeNumber(this.typeNumber),a=0;a<18;a++){var n=!e&&(t>>a&1)==1;this.modules[Math.floor(a/3)][a%3+this.moduleCount-8-3]=n}for(var a=0;a<18;a++){var n=!e&&(t>>a&1)==1;this.modules[a%3+this.moduleCount-8-3][Math.floor(a/3)]=n}};T.setupTypeInfo=function(e,t){for(var a=this.errorCorrectLevel<<3|t,n=H.getBCHTypeInfo(a),r=0;r<15;r++){var u=!e&&(n>>r&1)==1;r<6?this.modules[r][8]=u:r<8?this.modules[r+1][8]=u:this.modules[this.moduleCount-15+r][8]=u}for(var r=0;r<15;r++){var u=!e&&(n>>r&1)==1;r<8?this.modules[8][this.moduleCount-r-1]=u:r<9?this.modules[8][15-r-1+1]=u:this.modules[8][15-r-1]=u}this.modules[this.moduleCount-8][8]=!e};T.mapData=function(e,t){for(var a=-1,n=this.moduleCount-1,r=7,u=0,o=this.moduleCount-1;o>0;o-=2)for(o==6&&o--;;){for(var s=0;s<2;s++)if(this.modules[n][o-s]==null){var l=!1;u<e.length&&(l=(e[u]>>>r&1)==1);var v=H.getMask(t,n,o-s);v&&(l=!l),this.modules[n][o-s]=l,r--,r==-1&&(u++,r=7)}if(n+=a,n<0||this.moduleCount<=n){n-=a,a=-a;break}}};I.PAD0=236;I.PAD1=17;I.createData=function(e,t,a){for(var n=he.getRSBlocks(e,t),r=new ge,u=0;u<a.length;u++){var o=a[u];r.put(o.mode,4),r.put(o.getLength(),H.getLengthInBits(o.mode,e)),o.write(r)}for(var s=0,u=0;u<n.length;u++)s+=n[u].dataCount;if(r.getLengthInBits()>s*8)throw new Error("code length overflow. ("+r.getLengthInBits()+">"+s*8+")");for(r.getLengthInBits()+4<=s*8&&r.put(0,4);r.getLengthInBits()%8!=0;)r.putBit(!1);for(;!(r.getLengthInBits()>=s*8||(r.put(I.PAD0,8),r.getLengthInBits()>=s*8));)r.put(I.PAD1,8);return I.createBytes(r,n)};I.createBytes=function(e,t){for(var a=0,n=0,r=0,u=new Array(t.length),o=new Array(t.length),s=0;s<t.length;s++){var l=t[s].dataCount,v=t[s].totalCount-l;n=Math.max(n,l),r=Math.max(r,v),u[s]=new Array(l);for(var f=0;f<u[s].length;f++)u[s][f]=255&e.buffer[f+a];a+=l;var F=H.getErrorCorrectPolynomial(v),m=new He(u[s],F.getLength()-1),h=m.mod(F);o[s]=new Array(F.getLength()-1);for(var f=0;f<o[s].length;f++){var k=f+h.getLength()-o[s].length;o[s][f]=k>=0?h.get(k):0}}for(var b=0,f=0;f<t.length;f++)b+=t[f].totalCount;for(var E=new Array(b),B=0,f=0;f<n;f++)for(var s=0;s<t.length;s++)f<u[s].length&&(E[B++]=u[s][f]);for(var f=0;f<r;f++)for(var s=0;s<t.length;s++)f<o[s].length&&(E[B++]=o[s][f]);return E};var ze=I,me="H",Ue=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function pe(e,t){var a=ne[t],n=new ze(-1,a);return n.addData(Qe(e)),n.make(),n}function _e(e){return e in ne}function Qe(e){for(var t="",a=0;a<e.length;a++){var n=e.charCodeAt(a);n<128?t+=String.fromCharCode(n):n<2048?(t+=String.fromCharCode(192|n>>6),t+=String.fromCharCode(128|n&63)):n<55296||n>=57344?(t+=String.fromCharCode(224|n>>12),t+=String.fromCharCode(128|n>>6&63),t+=String.fromCharCode(128|n&63)):(a++,n=65536+((n&1023)<<10|e.charCodeAt(a)&1023),t+=String.fromCharCode(240|n>>18),t+=String.fromCharCode(128|n>>12&63),t+=String.fromCharCode(128|n>>6&63),t+=String.fromCharCode(128|n&63))}return t}function Be(e,t){t===void 0&&(t=0);var a=[];return e.forEach(function(n,r){var u=null;n.forEach(function(o,s){if(!o&&u!==null){a.push("M"+(u+t)+" "+(r+t)+"h"+(s-u)+"v1H"+(u+t)+"z"),u=null;return}if(s===n.length-1){if(!o)return;u===null?a.push("M"+(s+t)+","+(r+t)+" h1v1H"+(s+t)+"z"):a.push("M"+(u+t)+","+(r+t)+" h"+(s+1-u)+"v1H"+(u+t)+"z");return}o&&u===null&&(u=s)})}),a.join("")}var ae={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:me,validator:function(e){return _e(e)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},Ge=q(q({},ae),{renderAs:{type:String,required:!1,default:"canvas",validator:function(e){return["canvas","svg"].indexOf(e)>-1}}}),Ke=Q({name:"QRCodeSvg",props:ae,setup:function(e){var t=w(0),a=w(""),n=function(){var r=e.value,u=e.level,o=e.margin,s=pe(r,u).modules;t.value=s.length+o*2,a.value=Be(s,o)};return n(),se(n),function(){return K("svg",{width:e.size,height:e.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+t.value+" "+t.value},[K("path",{fill:e.background,d:"M0,0 h"+t.value+"v"+t.value+"H0z"}),K("path",{fill:e.foreground,d:a.value})])}}}),Xe=Q({name:"QRCodeCanvas",props:ae,setup:function(e){var t=w(null),a=function(){var n=e.value,r=e.level,u=e.size,o=e.margin,s=e.background,l=e.foreground,v=pe(n,r).modules,f=v.length+o*2,F=t.value;if(!!F){var m=F.getContext("2d");if(!!m){var h=window.devicePixelRatio||1,k=u/f*h;F.height=F.width=u*h,m.scale(k,k),m.fillStyle=s,m.fillRect(0,0,f,f),m.fillStyle=l,Ue?m.fill(new Path2D(Be(v,o))):v.forEach(function(b,E){b.forEach(function(B,c){B&&m.fillRect(c+o,E+o,1,1)})})}}};return Fe(a),se(a),function(){return K("canvas",{ref:t,style:{width:e.size+"px",height:e.size+"px"}})}}}),Ye=Q({name:"Qrcode",render:function(){var e=this.$props,t=e.renderAs,a=e.value,n=e.size,r=e.margin,u=e.level,o=e.background,s=e.foreground,l=n>>>0,v=r>>>0,f=_e(u)?u:me;return K(t==="svg"?Ke:Xe,{value:a,size:l,margin:v,level:f,background:o,foreground:s})},props:Ge});const Ce=(e=60)=>{let t;De(()=>{clearInterval(t)});const a=w(0);return[a,()=>{a.value=e,t=setInterval(()=>{a.value>0?a.value-=1:(clearInterval(t),a.value=0)},1e3)}]},Ae=e=>(ee("data-v-5bfe9a4f"),e=e(),te(),e),Je={class:"login-code"},qe=["src"],We={class:"check-container remember-pwd"},Ze=Ae(()=>g("span",{class:"tip"},"\u5FD8\u8BB0\u8D26\u53F7\uFF1F",-1)),je={class:"tip-container"},et=Ae(()=>g("span",{class:"tip"},"\u8BF7\u4F7F\u7528\u5FAE\u4FE1\u626B\u4E00\u626B\u767B\u5F55",-1)),tt={class:"refresh"},nt={class:"switch-container"},at=Q({__name:"Login",setup(e){const t=Te(),a={tenantId:G.tenantId,username:"admin",password:"123456",type:"account",phone:"",verifyCode:"",checked:!1,code:"",key:"",grant_type:G.captchaMode?"captcha":"password",scope:"all"},n={tenantId:[{required:!0,message:"\u79DF\u6237\u5FC5\u586B",type:"error"}],phone:[{required:!0,message:"\u624B\u673A\u53F7\u5FC5\u586B",type:"error"}],username:[{required:!0,message:"\u8D26\u53F7\u5FC5\u586B",type:"error"}],password:[{required:!0,message:"\u5BC6\u7801\u5FC5\u586B",type:"error"}],code:[{required:!0,message:"\u9A8C\u8BC1\u7801\u5FC5\u586B",type:"error"}],verifyCode:[{required:!0,message:"\u9A8C\u8BC1\u7801\u5FC5\u586B",type:"error"}]},r=w("password"),u=w(),o=w({...a}),s=w(!1),l=w("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),v=w(!1),[f,F]=Ce(),m=B=>{r.value=B},h=ke(),k=()=>{u.value.validate({fields:["phone"]}).then(B=>{B===!0&&F()})},b=async({validateResult:B})=>{if(B===!0)try{v.value=!0,await t.login(o.value),j.success("\u767B\u9646\u6210\u529F"),h.replace(Le)}catch{v.value=!1,G.captchaMode&&E()}};async function E(){const B=await be();l.value=B.image,o.value.key=B.key}return G.captchaMode&&E(),(B,c)=>{const N=D("t-icon"),p=D("t-input"),z=D("t-form-item"),ye=D("t-checkbox"),ue=D("t-button"),we=D("t-form");return _(),M(we,{ref_key:"form",ref:u,class:ie(["item-container",`login-${r.value}`]),data:o.value,rules:n,disabled:v.value,"label-width":"0",onSubmit:b},{default:d(()=>[r.value=="password"?(_(),O(Z,{key:0},[R(G).tenantMode?(_(),M(z,{key:0,name:"tenantId"},{default:d(()=>[i(p,{modelValue:o.value.tenantId,"onUpdate:modelValue":c[0]||(c[0]=y=>o.value.tenantId=y),size:"large",placeholder:"\u8BF7\u8F93\u5165\u79DF\u6237\uFF1A000000"},{"prefix-icon":d(()=>[i(N,{name:"usergroup"})]),_:1},8,["modelValue"])]),_:1})):P("v-if",!0),i(z,{name:"username"},{default:d(()=>[i(p,{modelValue:o.value.username,"onUpdate:modelValue":c[1]||(c[1]=y=>o.value.username=y),size:"large",placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7\uFF1Aadmin"},{"prefix-icon":d(()=>[i(N,{name:"user"})]),_:1},8,["modelValue"])]),_:1}),i(z,{name:"password"},{default:d(()=>[i(p,{modelValue:o.value.password,"onUpdate:modelValue":c[3]||(c[3]=y=>o.value.password=y),size:"large",type:s.value?"text":"password",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801\uFF1A123456"},{"prefix-icon":d(()=>[i(N,{name:"lock-on"})]),"suffix-icon":d(()=>[i(N,{name:s.value?"browse":"browse-off",onClick:c[2]||(c[2]=y=>s.value=!s.value)},null,8,["name"])]),_:1},8,["modelValue","type"])]),_:1}),R(G).captchaMode?(_(),M(z,{key:1,name:"code"},{default:d(()=>[i(p,{modelValue:o.value.code,"onUpdate:modelValue":c[4]||(c[4]=y=>o.value.code=y),size:"large",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"},{"prefix-icon":d(()=>[i(N,{name:"tips"})]),"suffix-icon":d(()=>[g("div",Je,[g("img",{src:l.value,class:"login-code-img",onClick:E},null,8,qe)])]),_:1},8,["modelValue"])]),_:1})):P("v-if",!0),g("div",We,[i(ye,null,{default:d(()=>[$("\u8BB0\u4F4F\u8D26\u53F7")]),_:1}),Ze])],64)):r.value=="qrcode"?(_(),O(Z,{key:1},[P(" \u626B\u7801\u767B\u9646 "),g("div",je,[et,g("span",tt,[$("\u5237\u65B0 "),i(N,{name:"refresh"})])]),i(Ye,{value:"",size:192,level:"H"})],64)):(_(),O(Z,{key:2},[P(" \u624B\u673A\u53F7\u767B\u9646 "),i(z,{name:"phone"},{default:d(()=>[i(p,{modelValue:o.value.phone,"onUpdate:modelValue":c[5]||(c[5]=y=>o.value.phone=y),size:"large",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801"},{"prefix-icon":d(()=>[i(N,{name:"mobile"})]),_:1},8,["modelValue"])]),_:1}),i(z,{class:"verification-code",name:"verifyCode"},{default:d(()=>[i(p,{modelValue:o.value.verifyCode,"onUpdate:modelValue":c[6]||(c[6]=y=>o.value.verifyCode=y),size:"large",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"},null,8,["modelValue"]),i(ue,{variant:"outline",disabled:R(f)>0,onClick:k},{default:d(()=>[$(X(R(f)==0?"\u53D1\u9001\u9A8C\u8BC1\u7801":`${R(f)}\u79D2\u540E\u53EF\u91CD\u53D1`),1)]),_:1},8,["disabled"])]),_:1})],64)),r.value!=="qrcode"?(_(),M(z,{key:3,class:"btn-container"},{default:d(()=>[i(ue,{block:"",size:"large",type:"submit"},{default:d(()=>[$(" \u767B\u5F55 ")]),_:1})]),_:1})):P("v-if",!0),g("div",nt,[r.value!=="password"?(_(),O("span",{key:0,class:"tip",onClick:c[7]||(c[7]=y=>m("password"))},"\u4F7F\u7528\u8D26\u53F7\u5BC6\u7801\u767B\u5F55")):P("v-if",!0),r.value!=="qrcode"?(_(),O("span",{key:1,class:"tip",onClick:c[8]||(c[8]=y=>m("qrcode"))},"\u4F7F\u7528\u5FAE\u4FE1\u626B\u7801\u767B\u5F55")):P("v-if",!0),r.value!=="phone"?(_(),O("span",{key:2,class:"tip",onClick:c[9]||(c[9]=y=>m("phone"))},"\u4F7F\u7528\u624B\u673A\u53F7\u767B\u5F55")):P("v-if",!0)])]),_:1},8,["class","data","disabled"])}}});const rt=W(at,[["__scopeId","data-v-5bfe9a4f"],["__file","D:/Study/tdesign-console/src/pages/login/components/Login.vue"]]),Ee=e=>(ee("data-v-abf759a3"),e=e(),te(),e),ut=Ee(()=>g("span",null,"TDesign\u670D\u52A1\u534F\u8BAE",-1)),ot=Ee(()=>g("span",null,"TDesign \u9690\u79C1\u58F0\u660E",-1)),st={class:"switch-container"},it=Q({__name:"Register",emits:["registerSuccess"],setup(e,{emit:t}){const a={phone:"",email:"",password:"",verifyCode:"",checked:!1},n={phone:[{required:!0,message:"\u624B\u673A\u53F7\u5FC5\u586B",type:"error"}],email:[{required:!0,message:"\u90AE\u7BB1\u5FC5\u586B",type:"error"},{email:!0,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1",type:"warning"}],password:[{required:!0,message:"\u5BC6\u7801\u5FC5\u586B",type:"error"}],verifyCode:[{required:!0,message:"\u9A8C\u8BC1\u7801\u5FC5\u586B",type:"error"}]},r=w("phone"),u=w(),o=w({...a}),s=w(!1),[l,v]=Ce(),f=({validateResult:m})=>{if(m===!0){if(!o.value.checked){j.error("\u8BF7\u540C\u610FTDesign\u670D\u52A1\u534F\u8BAE\u548CTDesign \u9690\u79C1\u58F0\u660E");return}j.success("\u6CE8\u518C\u6210\u529F"),t("registerSuccess")}},F=m=>{u.value.reset(),r.value=m};return(m,h)=>{const k=D("t-icon"),b=D("t-input"),E=D("t-form-item"),B=D("t-button"),c=D("t-checkbox"),N=D("t-form");return _(),M(N,{ref_key:"form",ref:u,class:ie(["item-container",`register-${r.value}`]),data:o.value,rules:n,"label-width":"0",onSubmit:f},{default:d(()=>[r.value=="phone"?(_(),M(E,{key:0,name:"phone"},{default:d(()=>[i(b,{modelValue:o.value.phone,"onUpdate:modelValue":h[0]||(h[0]=p=>o.value.phone=p),maxlength:11,size:"large",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7"},{"prefix-icon":d(()=>[i(k,{name:"user"})]),_:1},8,["modelValue"])]),_:1})):P("v-if",!0),r.value=="email"?(_(),M(E,{key:1,name:"email"},{default:d(()=>[i(b,{modelValue:o.value.email,"onUpdate:modelValue":h[1]||(h[1]=p=>o.value.email=p),type:"text",size:"large",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u90AE\u7BB1"},{"prefix-icon":d(()=>[i(k,{name:"mail"})]),_:1},8,["modelValue"])]),_:1})):P("v-if",!0),i(E,{name:"password"},{default:d(()=>[i(b,{modelValue:o.value.password,"onUpdate:modelValue":h[3]||(h[3]=p=>o.value.password=p),size:"large",type:s.value?"text":"password",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801"},{"prefix-icon":d(()=>[i(k,{name:"lock-on"})]),"suffix-icon":d(()=>[i(k,{name:s.value?"browse":"browse-off",onClick:h[2]||(h[2]=p=>s.value=!s.value)},null,8,["name"])]),_:1},8,["modelValue","type"])]),_:1}),r.value=="phone"?(_(),M(E,{key:2,class:"verification-code",name:"verifyCode"},{default:d(()=>[i(b,{modelValue:o.value.verifyCode,"onUpdate:modelValue":h[4]||(h[4]=p=>o.value.verifyCode=p),size:"large",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"},null,8,["modelValue"]),i(B,{variant:"outline",disabled:R(l)>0,onClick:R(v)},{default:d(()=>[$(X(R(l)==0?"\u53D1\u9001\u9A8C\u8BC1\u7801":`${R(l)}\u79D2\u540E\u53EF\u91CD\u53D1`),1)]),_:1},8,["disabled","onClick"])]),_:1})):P("v-if",!0),i(E,{class:"check-container",name:"checked"},{default:d(()=>[i(c,{modelValue:o.value.checked,"onUpdate:modelValue":h[5]||(h[5]=p=>o.value.checked=p)},{default:d(()=>[$("\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F ")]),_:1},8,["modelValue"]),$(),ut,$(" \u548C "),ot]),_:1}),i(E,null,{default:d(()=>[i(B,{block:"",size:"large",type:"submit"},{default:d(()=>[$(" \u6CE8\u518C ")]),_:1})]),_:1}),g("div",st,[g("span",{class:"tip",onClick:h[6]||(h[6]=p=>F(r.value=="phone"?"email":"phone"))},X(r.value=="phone"?"\u4F7F\u7528\u90AE\u7BB1\u6CE8\u518C":"\u4F7F\u7528\u624B\u673A\u53F7\u6CE8\u518C"),1)])]),_:1},8,["class","data"])}}});const lt=W(it,[["__scopeId","data-v-abf759a3"],["__file","D:/Study/tdesign-console/src/pages/login/components/Register.vue"]]),ft={class:"login-header"},dt={class:"operations-container"},vt=Q({__name:"Header",setup(e){const t=Pe(),a=()=>{t.updateConfig({showSettingPanel:!0})},n=()=>{window.open("https://github.com/tencent/tdesign-vue-next-starter")},r=()=>{window.open("http://tdesign.tencent.com/starter/docs/get-started")};return(u,o)=>{const s=D("t-icon"),l=D("t-button");return _(),O("header",ft,[i(R(xe),{class:"logo"}),g("div",dt,[i(l,{theme:"default",shape:"square",variant:"text",onClick:n},{default:d(()=>[i(s,{name:"logo-github",class:"icon"})]),_:1}),i(l,{theme:"default",shape:"square",variant:"text",onClick:r},{default:d(()=>[i(s,{name:"help-circle",class:"icon"})]),_:1}),i(l,{theme:"default",shape:"square",variant:"text",onClick:a},{default:d(()=>[i(s,{name:"setting",class:"icon"})]),_:1})])])}}});const ct=W(vt,[["__scopeId","data-v-1e125f4c"],["__file","D:/Study/tdesign-console/src/pages/login/components/Header.vue"]]),re=e=>(ee("data-v-45258083"),e=e(),te(),e),ht={class:"login-wrapper"},gt={class:"login-container"},mt={class:"title-container"},pt=re(()=>g("h1",{class:"title margin-no"},"\u767B\u5F55\u5230",-1)),_t=re(()=>g("h1",{class:"title"},"TDesign Starter",-1)),Bt={class:"sub-title"},Ct={class:"tip"},At=re(()=>g("footer",{class:"copyright"},"Copyright @ 2021-2022 Tencent. All Rights Reserved",-1)),Et={name:"LoginIndex"},yt=Q({...Et,setup(e){const t=w("login"),a=n=>{t.value=n};return(n,r)=>(_(),O("div",ht,[i(ct),g("div",gt,[g("div",mt,[pt,_t,g("div",Bt,[g("p",Ct,X(t.value=="register"?"\u5DF2\u6709\u8D26\u53F7?":"\u6CA1\u6709\u8D26\u53F7\u5417?"),1),g("p",{class:"tip",onClick:r[0]||(r[0]=u=>a(t.value=="register"?"login":"register"))},X(t.value=="register"?"\u767B\u5F55":"\u6CE8\u518C\u65B0\u8D26\u53F7"),1)])]),t.value==="login"?(_(),M(rt,{key:0})):(_(),M(lt,{key:1,onRegisterSuccess:r[1]||(r[1]=u=>a("login"))})),i(Re)]),At]))}});const Tt=W(yt,[["__scopeId","data-v-45258083"],["__file","D:/Study/tdesign-console/src/pages/login/index.vue"]]);export{Tt as default};
