(this["webpackJsonpsorting-visualizer"]=this["webpackJsonpsorting-visualizer"]||[]).push([[0],{18:function(e,r,t){e.exports=t(31)},29:function(e,r,t){},31:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),o=t(12),c=t.n(o),s=t(8),l=(t(29),t(5)),u=t(4),i=function(e){return{type:"UPDATE_ARR",payload:e}},p=function(e){return new Array(e).fill(0).map((function(e){return Math.floor(500*Math.random())+50}))},d={length:20,arr:p(20),isAlgoRunning:!1,currentAlgo:"none"},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"UPDATE_ARR":return Object(u.a)(Object(u.a)({},e),{},{arr:r.payload.arr});case"UPDATE_RUNNING":return console.log(r.payload),Object(u.a)(Object(u.a)({},e),{},{isAlgoRunning:r.payload});case"UPDATE_ALGO":return Object(u.a)(Object(u.a)({},e),{},{currentAlgo:r.payload});default:return e}},C=Number(400),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"DELAY":return r.payload;default:return e}},O={compareCandle:[-1,-1],compareCandleOk:[-1,-1],compareCandleNotOk:[-1,-1],sortedCandle:20},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"COMPARE_CANDLE":return Object.assign(e,{compareCandle:r.payload});case"COMPARE_CANDLE_OK":return Object.assign(e,{compareCandleOk:r.payload});case"COMPARE_CANDLE_NOT_OK":return Object.assign(e,{compareCandleNotOk:r.payload});case"SORTED_CANDLE":return Object.assign(e,{sortedCandle:r.payload});default:return e}},f={compareCandle:[-1,-1],compareCandleOk:[-1,-1],compareCandleNotOk:[-1,-1],sortedCandle:-1},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"COMPARE_CANDLE":return Object.assign(e,{compareCandle:r.payload});case"COMPARE_CANDLE_OK":return Object.assign(e,{compareCandleOk:r.payload});case"COMPARE_CANDLE_NOT_OK":return Object.assign(e,{compareCandleNotOk:r.payload});case"SORTED_CANDLE":return Object.assign(e,{sortedCandle:r.payload});default:return e}},g={compareCandle:[-1,-1],compareCandleOk:[-1,-1],compareCandleNotOk:[-1,-1],sortedCandle:-1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"COMPARE_CANDLE":return Object.assign(e,{compareCandle:r.payload});case"COMPARE_CANDLE_OK":return Object.assign(e,{compareCandleOk:r.payload});case"COMPARE_CANDLE_NOT_OK":return Object.assign(e,{compareCandleNotOk:r.payload});case"SORTED_CANDLE":return Object.assign(e,{sortedCandle:r.payload});default:return e}},S={compareCandle:[-1,-1],compareCandleOk:[-1,-1],compareCandleNotOk:[-1,-1],sortedCandle:-1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"COMPARE_CANDLE":return Object.assign(e,{compareCandle:r.payload});case"COMPARE_CANDLE_OK":return Object.assign(e,{compareCandleOk:r.payload});case"COMPARE_CANDLE_NOT_OK":return Object.assign(e,{compareCandleNotOk:r.payload});case"SORTED_CANDLE":return Object.assign(e,{sortedCandle:r.payload});default:return e}},A={compareCandle:[-1,-1],compareCandleOk:[-1,-1],compareCandleNotOk:[-1,-1],sortedCandle:-1,currentPivot:-1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"COMPARE_CANDLE":return Object.assign(e,{compareCandle:r.payload});case"COMPARE_CANDLE_OK":return Object.assign(e,{compareCandleOk:r.payload});case"COMPARE_CANDLE_NOT_OK":return Object.assign(e,{compareCandleNotOk:r.payload});case"SORTED_CANDLE":return Object.assign(e,{sortedCandle:r.payload});case"CURRENT_PIVOT":return Object.assign(e,{currentPivot:r.payload});default:return e}},v=Object(l.b)({arrayReducer:m,delayReducer:b,bubbleReducer:h,selectionReducer:k,insertionReducer:y,mergeReducer:E,quickReducer:N}),R=Object(l.c)(v),_=t(6),x=t(7),D=t(11),j=t(10),P=t(1),L=t.n(P),M=t(2),w=t(3),T=t(9);function q(e){return new Promise((function(r){setTimeout((function(){r(1)}),e)}))}var K=function(){var e=Object(M.a)(L.a.mark((function e(r,t,n,a,o,c,s,l){var u,p,d,m,C;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(!0),u=Object(T.a)(n),console.log("bubbleSort"),console.log(u),p=0;case 5:if(!(p<u.length)){e.next=44;break}d=!0,m=0;case 8:if(!(m<u.length-p-1)){e.next=34;break}return c([m,m+1]),a(i({arr:u.map((function(e){return e}))})),e.next=13,q(t);case 13:if(!(u[m]>u[m+1])){e.next=25;break}return c([-1,-1]),l([m,m+1]),a(i({arr:u.map((function(e){return e}))})),e.next=19,q(t);case 19:d=!1,C=[u[m+1],u[m]],u[m]=C[0],u[m+1]=C[1],a(i({arr:u.map((function(e){return e}))})),l([-1,-1]);case 25:return c([-1,-1]),s([m,m+1]),a(i({arr:u.map((function(e){return e}))})),e.next=30,q(t);case 30:s([-1,-1]);case 31:m++,e.next=8;break;case 34:if(!d){e.next=40;break}return o(-1),a(i({arr:u.map((function(e){return e}))})),e.abrupt("break",44);case 40:o(u.length-p-1);case 41:p++,e.next=5;break;case 44:return e.next=46,q(1e3);case 46:o(u.length),a(i({arr:u.map((function(e){return e}))})),console.log(u),r(!1);case 50:case"end":return e.stop()}}),e)})));return function(r,t,n,a,o,c,s,l){return e.apply(this,arguments)}}(),H=function(e){return{sortedCandle:function(r){var t;e((t=r,console.log("=="+t),{type:"SORTED_CANDLE",payload:t}))},compareCandle:function(r){e({type:"COMPARE_CANDLE",payload:r})},compareCandleOk:function(r){e({type:"COMPARE_CANDLE_OK",payload:r})},compareCandleNotOk:function(r){e({type:"COMPARE_CANDLE_NOT_OK",payload:r})}}},G=function(){var e=Object(M.a)(L.a.mark((function e(r,t,n,a,o,c,s,l){var u,p,d,m,C;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(!0),u=Object(T.a)(n),console.log("selectionSort"),console.log(u),p=0;case 5:if(!(p<u.length)){e.next=55;break}return e.next=8,q(t);case 8:d=p,m=p+1;case 10:if(!(m<u.length)){e.next=32;break}return e.next=13,q(t);case 13:if(s([d,-1]),c([m,-1]),a(i({arr:u.map((function(e){return e}))})),!(u[m]<u[d])){e.next=29;break}return e.next=19,q(t);case 19:return s([-1,-1]),c([-1,-1]),l([d,m]),a(i({arr:u.map((function(e){return e}))})),e.next=25,q(t);case 25:d=m,l([-1,-1]),s([d,-1]),a(i({arr:u.map((function(e){return e}))}));case 29:m++,e.next=10;break;case 32:return a(i({arr:u.map((function(e){return e}))})),e.next=35,q(t);case 35:return c([-1,-1]),a(i({arr:u.map((function(e){return e}))})),l([p,d]),a(i({arr:u.map((function(e){return e}))})),e.next=41,q(t);case 41:return C=u[p],u[p]=u[d],u[d]=C,l([-1,-1]),s([p,d]),a(i({arr:u.map((function(e){return e}))})),e.next=49,q(t);case 49:s([-1,-1]),o(p),a(i({arr:u.map((function(e){return e}))}));case 52:p++,e.next=5;break;case 55:return s([-1,-1]),c([-1,-1]),l([-1,-1]),e.next=60,q(1e3);case 60:o(-1),a(i({arr:u.map((function(e){return e}))})),console.log(u),r(!1);case 64:case"end":return e.stop()}}),e)})));return function(r,t,n,a,o,c,s,l){return e.apply(this,arguments)}}(),U=function(e){return{sortedCandle:function(r){var t;e((t=r,console.log("=="+t),{type:"SORTED_CANDLE",payload:t}))},compareCandle:function(r){e({type:"COMPARE_CANDLE",payload:r})},compareCandleOk:function(r){e({type:"COMPARE_CANDLE_OK",payload:r})},compareCandleNotOk:function(r){e({type:"COMPARE_CANDLE_NOT_OK",payload:r})}}},z=function(){var e=Object(M.a)(L.a.mark((function e(r,t,n,a,o,c,s,l){var u,p,d,m;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),u=Object(T.a)(n),console.log("insertionSort"),console.log(u),o(0),a(i({arr:u.map((function(e){return e}))})),e.next=8,q(t);case 8:p=1;case 9:if(!(p<u.length)){e.next=43;break}return c([p,-1]),a(i({arr:u.map((function(e){return e}))})),e.next=14,q(t);case 14:if(!(u[p-1]>u[p])){e.next=38;break}return l([p,-1]),a(i({arr:u.map((function(e){return e}))})),e.next=19,q(t);case 19:d=p;case 20:if(!(u[d-1]>u[d])){e.next=32;break}return m=u[d],u[d]=u[d-1],u[d-1]=m,o(p),l([d-1,-1]),a(i({arr:u.map((function(e){return e}))})),e.next=29,q(t);case 29:d--,e.next=20;break;case 32:return l([-1,-1]),s([d,-1]),a(i({arr:u.map((function(e){return e}))})),e.next=37,q(t);case 37:s([-1,-1]);case 38:o(p),a(i({arr:u.map((function(e){return e}))}));case 40:p++,e.next=9;break;case 43:return c([-1,-1]),e.next=46,q(1e3);case 46:o(-1),a(i({arr:u.map((function(e){return e}))})),console.log(u),r(!1);case 50:case"end":return e.stop()}}),e)})));return function(r,t,n,a,o,c,s,l){return e.apply(this,arguments)}}(),B=function(e){return{sortedCandle:function(r){var t;e((t=r,console.log("=="+t),{type:"SORTED_CANDLE",payload:t}))},compareCandle:function(r){e({type:"COMPARE_CANDLE",payload:r})},compareCandleOk:function(r){e({type:"COMPARE_CANDLE_OK",payload:r})},compareCandleNotOk:function(r){e({type:"COMPARE_CANDLE_NOT_OK",payload:r})}}},I=[],V=function(){var e=Object(M.a)(L.a.mark((function e(r,t,n,a,o,c,s,l,u,p){var d,m,C,b,O;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d=0,m=0,l([a,a+r.length-1]),C=0;case 3:if(!(C<r.length)){e.next=21;break}return u([-1,-1]),p([-1,a+C]),o(i({arr:I.map((function(e){return e}))})),e.next=9,q(c);case 9:for(b=0,d>=t.length?(b=n[m],m++):m>=n.length||t[d]<n[m]?(b=t[d],d++):(b=n[m],m++),r[C]=b,O=0;O<r.length;O++)I[a+O]=r[O];return p([-1,-1]),u([-1,a+C]),o(i({arr:I.map((function(e){return e}))})),e.next=18,q(c);case 18:C++,e.next=3;break;case 21:return u([-1,-1]),l([-1,-1]),e.abrupt("return",Promise.resolve(0));case 24:case"end":return e.stop()}}),e)})));return function(r,t,n,a,o,c,s,l,u,i){return e.apply(this,arguments)}}(),Q=function(){var e=Object(M.a)(L.a.mark((function e(r,t,n,a,o,c,s,l){var u,i,p;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r.length<=1)){e.next=2;break}return e.abrupt("return",Promise.resolve(0));case 2:return u=Math.floor(r.length/2),i=r.filter((function(e,r){return r<u})),p=r.filter((function(e,r){return r>=u})),e.next=7,Q(i,t,n,a,o,c,s,l);case 7:return e.next=9,Q(p,t+u,n,a,o,c,s,l);case 9:return e.next=11,V(r,i,p,t,n,a,o,c,s,l);case 11:return r=e.sent,e.abrupt("return",Promise.resolve(0));case 13:case"end":return e.stop()}}),e)})));return function(r,t,n,a,o,c,s,l){return e.apply(this,arguments)}}(),J=function(){var e=Object(M.a)(L.a.mark((function e(r,t,n,a,o,c,s,l){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),I=n,e.next=4,Q(n,0,a,t,o,c,s,l);case 4:return o(n.length),a(i({arr:n.map((function(e){return e}))})),e.next=8,q(1e3);case 8:o(-1),a(i({arr:n.map((function(e){return e}))})),console.log(n),r(!1);case 12:case"end":return e.stop()}}),e)})));return function(r,t,n,a,o,c,s,l){return e.apply(this,arguments)}}(),W=function(e){return{sortedCandle:function(r){var t;e((t=r,console.log("=="+t),{type:"SORTED_CANDLE",payload:t}))},compareCandle:function(r){e({type:"COMPARE_CANDLE",payload:r})},compareCandleOk:function(r){e({type:"COMPARE_CANDLE_OK",payload:r})},compareCandleNotOk:function(r){e({type:"COMPARE_CANDLE_NOT_OK",payload:r})}}},Y=function(){var e=Object(M.a)(L.a.mark((function e(r,t,n,a,o,c,s,l,u,p){var d,m,C,b,O;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(d=n),m=t-1,C=t;case 4:if(!(C<=n)){e.next=28;break}return s([m,C]),a(i({arr:r.map((function(e){return e}))})),e.next=9,q(o);case 9:if(!(r[C]<r[d])){e.next=24;break}return m++,s([-1,-1]),u([m,C]),a(i({arr:r.map((function(e){return e}))})),e.next=16,q(o);case 16:return b=[r[C],r[m]],r[m]=b[0],r[C]=b[1],u([-1,-1]),l([m,C]),a(i({arr:r.map((function(e){return e}))})),e.next=24,q(o);case 24:l([-1,-1]);case 25:C++,e.next=4;break;case 28:return m++,p(-1),s([-1,-1]),u([m,d]),a(i({arr:r.map((function(e){return e}))})),e.next=35,q(o);case 35:return O=[r[d],r[m]],r[m]=O[0],r[d]=O[1],u([-1,-1]),l([m,d]),a(i({arr:r.map((function(e){return e}))})),e.next=43,q(o);case 43:return l([-1,-1]),e.abrupt("return",m);case 45:case"end":return e.stop()}}),e)})));return function(r,t,n,a,o,c,s,l,u,i){return e.apply(this,arguments)}}(),F=function(){var e=Object(M.a)(L.a.mark((function e(r,t,n,a,o,c,s,l,u,i){var p;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t>=n)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Y(r,t,n,a,o,c,s,l,u,i);case 4:return p=e.sent,e.next=7,F(r,t,p-1,a,o,c,s,l,u,i);case 7:return e.next=9,F(r,p+1,n,a,o,c,s,l,u,i);case 9:return e.abrupt("return",Promise.resolve(0));case 10:case"end":return e.stop()}}),e)})));return function(r,t,n,a,o,c,s,l,u,i){return e.apply(this,arguments)}}(),X=function(){var e=Object(M.a)(L.a.mark((function e(r,t,n,a,o,c,s,l,u){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,F(n,0,n.length-1,a,t,o,c,s,l,u);case 3:return o(n.length),a(i({arr:n.map((function(e){return e}))})),e.next=7,q(1e3);case 7:o(-1),a(i({arr:n.map((function(e){return e}))})),console.log(n),r(!1);case 11:case"end":return e.stop()}}),e)})));return function(r,t,n,a,o,c,s,l,u){return e.apply(this,arguments)}}(),Z=function(e){return{sortedCandle:function(r){var t;e((t=r,console.log("=="+t),{type:"SORTED_CANDLE",payload:t}))},compareCandle:function(r){e({type:"COMPARE_CANDLE",payload:r})},compareCandleOk:function(r){e({type:"COMPARE_CANDLE_OK",payload:r})},compareCandleNotOk:function(r){e({type:"COMPARE_CANDLE_NOT_OK",payload:r})},currentPivot:function(r){e({type:"CURRENT_PIVOT",payload:r})}}},$=function(e){Object(D.a)(t,e);var r=Object(j.a)(t);function t(e){var n;return Object(_.a)(this,t),(n=r.call(this,e)).state={len:e.arr.length},n.randomizeHandler=n.randomizeHandler.bind(Object(w.a)(n)),n.arrayLengthHandler=n.arrayLengthHandler.bind(Object(w.a)(n)),n.sortClickHandler=n.sortClickHandler.bind(Object(w.a)(n)),n.delayHandler=n.delayHandler.bind(Object(w.a)(n)),n.handleAlgoSelect=n.handleAlgoSelect.bind(Object(w.a)(n)),n}return Object(x.a)(t,[{key:"randomizeHandler",value:function(){var e=p(this.state.len);console.log(e),this.props.updateArr(e)}},{key:"arrayLengthHandler",value:function(e){var r=Number(e.target.value);this.setState({len:r}),console.log(r),this.randomizeHandler(),"bubbleSort"===this.props.currentAlgo?this.props.bubbleSort.sortedCandle(r):this.props.selectionSort.sortedCandle(-1)}},{key:"delayHandler",value:function(e){console.log(this.props.delay+"->");var r=600-Number(e.target.value);this.props.updateDelay(r),console.log(this.props.delay)}},{key:"handleAlgoSelect",value:function(e){this.props.updateAlgo(e.target.value)}},{key:"sortClickHandler",value:function(){var e=Object(M.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.props.currentAlgo,e.next="bubbleSort"===e.t0?3:"selectionSort"===e.t0?5:"insertionSort"===e.t0?7:"mergeSort"===e.t0?9:"quickSort"===e.t0?11:13;break;case 3:return this.props.runBubbleSort(this.props.updateRunning,this.props.delay,this.props.arr,this.props.bubbleSort.sortedCandle,this.props.bubbleSort.compareCandle,this.props.bubbleSort.compareCandleOk,this.props.bubbleSort.compareCandleNotOk),e.abrupt("break",14);case 5:return this.props.runSelectionSort(this.props.updateRunning,this.props.delay,this.props.arr,this.props.selectionSort.sortedCandle,this.props.selectionSort.compareCandle,this.props.selectionSort.compareCandleOk,this.props.selectionSort.compareCandleNotOk),e.abrupt("break",14);case 7:return this.props.runInsertionSort(this.props.updateRunning,this.props.delay,this.props.arr,this.props.insertionSort.sortedCandle,this.props.insertionSort.compareCandle,this.props.insertionSort.compareCandleOk,this.props.insertionSort.compareCandleNotOk),e.abrupt("break",14);case 9:return this.props.runMergeSort(this.props.updateRunning,this.props.delay,this.props.arr,this.props.mergeSort.sortedCandle,this.props.mergeSort.compareCandle,this.props.mergeSort.compareCandleOk,this.props.mergeSort.compareCandleNotOk),e.abrupt("break",14);case 11:return this.props.runQuickSort(this.props.updateRunning,this.props.delay,this.props.arr,this.props.quickSort.sortedCandle,this.props.quickSort.compareCandle,this.props.quickSort.compareCandleOk,this.props.quickSort.compareCandleNotOk,this.props.quickSort.currentPivot),e.abrupt("break",14);case 13:console.log("Algo name error");case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement("div",{className:"ControlWindow"},a.a.createElement("h6",null,"Size: ",this.props.arr.length),a.a.createElement("input",{className:"inputs",type:"range",min:"10",max:"50",defaultValue:"20",onChange:this.arrayLengthHandler,onClick:this.arrayLengthHandler,disabled:this.props.isAlgoRunning}),a.a.createElement("h6",null,"Speed: ",610-Number(this.props.delay)),a.a.createElement("input",{className:"inputs",type:"range",min:"0",max:"600",defaultValue:600-Number(this.props.delay),onChange:this.delayHandler,onClick:this.delayHandler,disabled:this.props.isAlgoRunning}),a.a.createElement("button",{className:"btn btn-outline-dark",onClick:this.randomizeHandler,disabled:this.props.isAlgoRunning},"Randomize"),a.a.createElement("select",{name:"Algorithm",disabled:this.props.isAlgoRunning,onChange:this.handleAlgoSelect},a.a.createElement("option",{value:"none",selected:!0,disabled:!0,hidden:!0},"Choose Algorithm"),a.a.createElement("option",{value:"bubbleSort"},"Bubble Sort"),a.a.createElement("option",{value:"selectionSort"},"Selection Sort"),a.a.createElement("option",{value:"insertionSort"},"Insertion Sort"),a.a.createElement("option",{value:"mergeSort"},"Merge Sort"),a.a.createElement("option",{value:"quickSort"},"Quick Sort")),a.a.createElement("button",{className:"btn btn-outline-dark",onClick:this.sortClickHandler,disabled:this.props.isAlgoRunning||"none"===this.props.currentAlgo},"Sort"))}}]),t}(n.Component),ee=Object(s.b)((function(e){return{arr:e.arrayReducer.arr,delay:e.delayReducer,isAlgoRunning:e.arrayReducer.isAlgoRunning,currentAlgo:e.arrayReducer.currentAlgo}}),(function(e){return{updateArr:function(r){e(i({arr:r}))},updateRunning:function(r){e(function(e){return{type:"UPDATE_RUNNING",payload:e}}(r))},updateDelay:function(r){e({type:"DELAY",payload:r})},updateAlgo:function(r){e({type:"UPDATE_ALGO",payload:r})},runBubbleSort:function(r,t,n,a,o,c,s){K(r,t,n,e,a,o,c,s)},bubbleSort:H(e),runSelectionSort:function(r,t,n,a,o,c,s){G(r,t,n,e,a,o,c,s)},selectionSort:U(e),runInsertionSort:function(r,t,n,a,o,c,s){z(r,t,n,e,a,o,c,s)},insertionSort:B(e),runMergeSort:function(r,t,n,a,o,c,s){J(r,t,n,e,a,o,c,s)},mergeSort:W(e),runQuickSort:function(r,t,n,a,o,c,s,l){X(r,t,n,e,a,o,c,s,l)},quickSort:Z(e)}}))($),re=function(e){Object(D.a)(t,e);var r=Object(j.a)(t);function t(e){var n;return Object(_.a)(this,t),(n=r.call(this,e)).color=n.color.bind(Object(w.a)(n)),n}return Object(x.a)(t,[{key:"color",value:function(e){switch(this.props.currentAlgo){case"bubbleSort":return e>=this.props.bubbleSort.sortedCandle?"blue":e===this.props.bubbleSort.compareCandleNotOk[0]||e===this.props.bubbleSort.compareCandleNotOk[1]?"red":e===this.props.bubbleSort.compareCandleOk[0]||e===this.props.bubbleSort.compareCandleOk[1]?"green":e===this.props.bubbleSort.compareCandle[0]||e===this.props.bubbleSort.compareCandle[1]?"DodgerBlue":"DarkSlateGray";case"selectionSort":return e<=this.props.selectionSort.sortedCandle?"blue":e===this.props.selectionSort.compareCandleNotOk[0]||e===this.props.selectionSort.compareCandleNotOk[1]?"red":e===this.props.selectionSort.compareCandleOk[0]||e===this.props.selectionSort.compareCandleOk[1]?"green":e===this.props.selectionSort.compareCandle[0]||e===this.props.selectionSort.compareCandle[1]?"DodgerBlue":"DarkSlateGray";case"insertionSort":return e===this.props.insertionSort.compareCandleOk[0]||e===this.props.insertionSort.compareCandleOk[1]?"green":e===this.props.insertionSort.compareCandleNotOk[0]||e===this.props.insertionSort.compareCandleNotOk[1]?"red":e<=this.props.insertionSort.sortedCandle?"blue":e===this.props.insertionSort.compareCandle[0]||e===this.props.insertionSort.compareCandle[1]?"DodgerBlue":"DarkSlateGray";case"mergeSort":return e===this.props.mergeSort.compareCandleOk[0]||e===this.props.mergeSort.compareCandleOk[1]?"green":e===this.props.mergeSort.compareCandleNotOk[0]||e===this.props.mergeSort.compareCandleNotOk[1]?"red":e<=this.props.mergeSort.sortedCandle?"blue":e>=this.props.mergeSort.compareCandle[0]&&e<=this.props.mergeSort.compareCandle[1]?"DodgerBlue":"DarkSlateGray";case"quickSort":return e===this.props.quickSort.currentPivot?"violet":e===this.props.quickSort.compareCandleOk[0]||e===this.props.quickSort.compareCandleOk[1]?"green":e===this.props.quickSort.compareCandleNotOk[0]||e===this.props.quickSort.compareCandleNotOk[1]?"red":e<=this.props.quickSort.sortedCandle?"blue":e===this.props.quickSort.compareCandle[0]||e===this.props.quickSort.compareCandle[1]?"DodgerBlue":"DarkSlateGray";default:return"DarkSlateGray"}}},{key:"render",value:function(){var e=this,r=this.props.arr.map((function(r,t){var n={height:"".concat(r,"px"),width:"".concat(500/e.props.arr.length,"px"),backgroundColor:"".concat(e.color(t))};return a.a.createElement("div",{className:"candle",style:n,key:t})}));return a.a.createElement("div",{className:"DisplayWindow"},a.a.createElement("div",{className:"candles"},r))}}]),t}(n.Component),te=Object(s.b)((function(e){return{arr:e.arrayReducer.arr,currentAlgo:e.arrayReducer.currentAlgo,bubbleSort:{compareCandle:e.bubbleReducer.compareCandle,compareCandleOk:e.bubbleReducer.compareCandleOk,compareCandleNotOk:e.bubbleReducer.compareCandleNotOk,sortedCandle:e.bubbleReducer.sortedCandle},selectionSort:{compareCandle:e.selectionReducer.compareCandle,compareCandleOk:e.selectionReducer.compareCandleOk,compareCandleNotOk:e.selectionReducer.compareCandleNotOk,sortedCandle:e.selectionReducer.sortedCandle},insertionSort:{compareCandle:e.insertionReducer.compareCandle,compareCandleOk:e.insertionReducer.compareCandleOk,compareCandleNotOk:e.insertionReducer.compareCandleNotOk,sortedCandle:e.insertionReducer.sortedCandle},mergeSort:{compareCandle:e.mergeReducer.compareCandle,compareCandleOk:e.mergeReducer.compareCandleOk,compareCandleNotOk:e.mergeReducer.compareCandleNotOk,sortedCandle:e.mergeReducer.sortedCandle},quickSort:{compareCandle:e.quickReducer.compareCandle,compareCandleOk:e.quickReducer.compareCandleOk,compareCandleNotOk:e.quickReducer.compareCandleNotOk,sortedCandle:e.quickReducer.sortedCandle,currentPivot:e.quickReducer.currentPivot}}}),null)(re),ne=function(e){Object(D.a)(t,e);var r=Object(j.a)(t);function t(){return Object(_.a)(this,t),r.apply(this,arguments)}return Object(x.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(ee,null),a.a.createElement(te,null))}}]),t}(n.Component);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:R},a.a.createElement(ne,null))),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.be48cbc1.chunk.js.map