(this.webpackJsonpsmartbrain=this.webpackJsonpsmartbrain||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},482:function(e,t,n){},484:function(e,t,n){"use strict";n.r(t);var c=n(11),s=n.n(c),i=n(55),a=n.n(i),r=(n(106),n(96)),l=n(97),o=n(101),b=n(100),j=(n(107),n(2)),u=function(e){return"home"===e.route?Object(j.jsx)("nav",{children:Object(j.jsx)("p",{onClick:function(){return e.change("signin")},className:"f3 link dim black underline pa3 pointer ma0",children:"Sign Out"})}):Object(j.jsxs)("nav",{children:[Object(j.jsx)("p",{onClick:function(){return e.change("signin")},className:"f3 link dim black underline pa3 pointer ma0",children:"Sign In"}),Object(j.jsx)("p",{onClick:function(){return e.change("register")},className:"f3 link dim black underline pa3 pointer ma0",children:"Register"})]})},d=n(98),h=n.n(d),m=n.p+"static/media/brain.8f6a991b.png",x=(n(109),function(){return Object(j.jsx)("div",{className:"box",children:Object(j.jsx)(h.a,{className:"Tilt br2 shadow-2 pa2",options:{max:25},children:Object(j.jsxs)("div",{className:"Tilt-inner",children:[" ",Object(j.jsx)("img",{clasname:"pa5",src:m,alt:"Brain"})," "]})})})}),p=(n(110),function(e){return Object(j.jsx)("div",{className:"center back",children:Object(j.jsxs)("div",{className:"center c2",children:[Object(j.jsx)("input",{className:"url",type:"text",placeholder:"Enter URL",onChange:e.change}),Object(j.jsx)("button",{className:"det grow",onClick:e.click,children:"Detect!"})]})})}),g=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"f2 white i ma0 mt3",children:"Ranvir Your Rank is"}),Object(j.jsx)("p",{className:"f2 ma0 mb3",children:"#2"})]})},O=(n(111),function(e){return Object(j.jsx)("div",{className:"ma3 center",children:Object(j.jsxs)("div",{className:"absolute mt3",children:[Object(j.jsx)("img",{id:"disp",alt:"",src:e.url,width:"400",height:"auto"}),Object(j.jsx)("div",{className:"bounding-box",style:{top:e.box.top,right:e.box.right,bottom:e.box.bottom,left:e.box.left}})]})})}),f=(n(112),function(e){return Object(j.jsx)("div",{className:"b",children:Object(j.jsx)("form",{children:Object(j.jsx)("div",{className:"card center cen2",children:Object(j.jsxs)("fieldset",{className:" b--transparent ph0 mh0 center cen2",children:[Object(j.jsx)("legend",{className:"f2",children:"Sign In"}),Object(j.jsxs)("div",{className:"center cen2",children:[Object(j.jsxs)("div",{className:"ma2 center cen2",children:[Object(j.jsx)("label",{for:"email",children:"Email"}),Object(j.jsx)("input",{className:"sign",id:"email",type:"email"})]}),Object(j.jsxs)("div",{className:"ma2 center cen2",children:[Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{className:"sign",type:"password"})]}),Object(j.jsx)("input",{onClick:function(){return e.change("home")},className:"b ph3 pv2 ba b--black bg-transparent grow pointer f6 cen2",type:"submit",value:"Sign in"}),Object(j.jsx)("p",{onClick:function(){return e.change("register")},className:"pointer",children:"Register"})]})]})})})})}),N=function(e){return Object(j.jsx)("div",{className:"b",children:Object(j.jsx)("form",{children:Object(j.jsx)("div",{className:"card center cen2",children:Object(j.jsxs)("fieldset",{className:" b--transparent ph0 mh0 center cen2",children:[Object(j.jsx)("legend",{className:"f2",children:"Register"}),Object(j.jsxs)("div",{className:"center cen2",children:[Object(j.jsxs)("div",{className:"ma2 center cen2",children:[Object(j.jsx)("label",{for:"name",children:"Name"}),Object(j.jsx)("input",{className:"sign",id:"Name",type:"text"})]}),Object(j.jsxs)("div",{className:"ma2 center cen2",children:[Object(j.jsx)("label",{for:"email",children:"Email"}),Object(j.jsx)("input",{className:"sign",id:"email",type:"email"})]}),Object(j.jsxs)("div",{className:"ma2 center cen2",children:[Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{className:"sign",type:"password"})]}),Object(j.jsx)("input",{onClick:function(){return e.change("home")},className:"b ph3 pv2 ba b--black bg-transparent grow pointer f6 cen2",type:"submit",value:"Register"})]})]})})})})},v=n(99),k=n.n(v),w=n(56),y=n.n(w),C=(n(482),new y.a.App({apiKey:"5124c0b6202d4e66a50e7132f596bc3b"})),S={particles:{number:{value:150,density:{enable:!0,value_area:1200}}}},E=function(e){Object(o.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).onchangeinput=function(t){e.setState({input:t.target.value})},e.calculate=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box;console.log(t);var n=document.getElementById("disp"),c=n.height,s=n.width;return{top:t.top_row*c,left:t.left_col*s,right:s-t.right_col*s,bottom:c-t.bottom_row*c}},e.setbox=function(t){e.setState({box:t})},e.onsubmit=function(){e.setState({imgUrl:e.state.input}),C.models.predict(y.a.FACE_DETECT_MODEL,e.state.input).then((function(t){return e.setbox(e.calculate(t))})).catch((function(e){return console.log(e)}))},e.routechange=function(t){e.setState({route:t}),console.log(e.state.route)},e.state={input:"",imgUrl:"",box:{},route:"signin"},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(k.a,{className:"particles",params:S}),Object(j.jsx)(u,{route:this.state.route,change:this.routechange}),"home"===this.state.route?Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{}),Object(j.jsx)(g,{}),Object(j.jsx)(p,{change:this.onchangeinput,click:this.onsubmit}),Object(j.jsx)(O,{box:this.state.box,url:this.state.imgUrl})]}):"signin"===this.state.route?Object(j.jsx)(f,{change:this.routechange}):Object(j.jsx)(N,{change:this.routechange})]})}}]),n}(s.a.Component),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,485)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};n(483);a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(E,{})}),document.getElementById("root")),_()}},[[484,1,2]]]);
//# sourceMappingURL=main.9bab5286.chunk.js.map