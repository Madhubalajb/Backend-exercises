(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),u=(n(79),n(73)),l=n(11),i=n(129),s=n(128),m=n(130),p=n(135),d=n(7),f=n.n(d),E=n(12),h=n(18),b=n.n(h),v="/api/persons",g=null,w={setToken:function(e){g="bearer ".concat(e)},getData:function(){var e=Object(E.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(v);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),addData:function(){var e=Object(E.a)(f.a.mark(function e(t){var n,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,b.a.post(v,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),deleteData:function(){var e=Object(E.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("".concat(v,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),updateData:function(){var e=Object(E.a)(f.a.mark(function e(t,n){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.put("".concat(v,"/").concat(t),n);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},O=function(e){return r.a.createElement("div",null,e.func)},j=n(131),k=n(127),y=n(65),S=function(e){return r.a.createElement(j.a,{onSubmit:e.add},r.a.createElement(k.a,null,r.a.createElement(y.a,null,"Name"),r.a.createElement(y.a,{sm:"8"},r.a.createElement(j.a.Control,{onChange:e.person,placeholder:"Contact Name",required:!0}))),r.a.createElement(k.a,null,r.a.createElement(y.a,null,"Number"),r.a.createElement(y.a,{sm:"8"},r.a.createElement(j.a.Control,{onChange:e.number,placeholder:"Phone Number",required:!0}))),r.a.createElement(s.a,{className:"btn btn-sm",type:"submit"},"Add"))},x=function(e){return r.a.createElement(j.a,null,r.a.createElement(y.a,{sm:"3"},r.a.createElement(j.a.Control,{className:"filter",onChange:e.filters,placeholder:"Search Contacts ..."})))},C=function(e){return null===e.msg?null:e.msg},N=n(134),D=n(133),L=n(71),P=n(132),A=function(e){return r.a.createElement(P.a,{show:e.show,onHide:e.close},r.a.createElement(P.a.Header,{closeButton:!0},r.a.createElement("b",null,"Login")),r.a.createElement(P.a.Body,null,r.a.createElement(j.a,{onSubmit:e.login},r.a.createElement(j.a.Control,{type:"text",placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(j.a.Control,{type:"password",placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(s.a,{type:"submit"},"Login")))))},B=function(e){return r.a.createElement(P.a,{show:e.show,onHide:e.close},r.a.createElement(P.a.Header,{closeButton:!0},"Sign Up"),r.a.createElement(P.a.Body,null,r.a.createElement(j.a,{onSubmit:e.Signup},r.a.createElement(j.a.Control,{type:"text",placeholder:"Name",onChange:e.name,required:!0}),r.a.createElement(j.a.Control,{type:"text",placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(j.a.Control,{type:"password",placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(s.a,{type:"submit"},"Signup")))))},q={login:function(){var e=Object(E.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},J={signup:function(){var e=Object(E.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},T=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],o=function(){return c(!1)},u=Object(a.useState)(!1),i=Object(l.a)(u,2),s=i[0],m=i[1],p=function(){return m(!1)},d=Object(a.useState)(""),h=Object(l.a)(d,2),b=h[0],v=h[1],g=Object(a.useState)(""),O=Object(l.a)(g,2),j=O[0],k=O[1],y=Object(a.useState)(""),S=Object(l.a)(y,2),x=S[0],C=S[1],N=Object(a.useState)(""),P=Object(l.a)(N,2),T=P[0],U=P[1],_=function(e){return C(e.target.value)},H=function(e){return U(e.target.value)},I=function(){var e=Object(E.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,q.login({username:x,password:T}).then(function(e){window.localStorage.setItem("logged_PhoneApp_User",JSON.stringify(e)),w.setToken(e.token),v(e),C(""),U(""),o()}).catch(function(e){v(""),C(""),U(""),o()});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(E.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,J.signup({name:j,username:x,password:T}).then(function(e){v(e),k(""),C(""),U(""),p()}).catch(function(e){v(""),k(""),C(""),U(""),p()});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return""===b?r.a.createElement("div",null,r.a.createElement(D.a.Link,{onClick:function(){return c(!0)}},"Login"),r.a.createElement(A,{show:n,close:o,username:_,pwd:H,login:I}),r.a.createElement(D.a.Link,{onClick:function(){return m(!0)}},"Signup"),r.a.createElement(B,{show:s,close:p,name:function(e){return k(e.target.value)},username:_,pwd:H,signup:W})):r.a.createElement("div",null,r.a.createElement(D.a.Link,null,r.a.createElement(L.a,{to:"/user"},b.name)),r.a.createElement(D.a.Link,{onClick:function(){v(""),window.localStorage.removeItem("logged_PhoneApp_User"),w.setToken("")}},"Logout"))},U=function(){return r.a.createElement(N.a,{collapseOnSelect:!0,expand:"sm",className:"fixed-top"},r.a.createElement(N.a.Brand,{href:"/about"},"about"),r.a.createElement(N.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(N.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(D.a,{className:"ml-auto"},r.a.createElement(T,null))))},_=n(70),H=n.n(_),I=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),d=Object(l.a)(o,2),f=d[0],E=d[1],h=Object(a.useState)(""),b=Object(l.a)(h,2),v=b[0],g=b[1],j=Object(a.useState)(""),k=Object(l.a)(j,2),y=k[0],N=k[1],D=Object(a.useState)(""),L=Object(l.a)(D,2),P=L[0],A=L[1];Object(a.useEffect)(function(){w.getData().then(function(e){return c(e)})},[]);var B=function(e){A(e),setTimeout(function(){A(null)},5e3)},q=n.filter(function(e){return-1!==e.name.toLowerCase().indexOf(y.toLowerCase())});return r.a.createElement("center",{className:"container"},r.a.createElement(U,null),r.a.createElement(C,{msg:P}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:H.a,alt:"Logo"}),r.a.createElement("h2",null,"Phonebook App")),r.a.createElement("p",null,r.a.createElement(m.a,null,"React JS")," + ",r.a.createElement(m.a,null,"Node JS")," + ",r.a.createElement(m.a,null,"REST API")," + ",r.a.createElement(m.a,null,"Express")," + ",r.a.createElement(m.a,null,"MongoDB")," + ",r.a.createElement(m.a,null,"SASS")," + ",r.a.createElement(m.a,null,"Bootstrap")),r.a.createElement(x,{filters:function(e){return N(e.target.value)}})),r.a.createElement("div",{className:"row main-row"},r.a.createElement(p.a,{className:"col-sm-6"},r.a.createElement("h2",null,"Add a contact"),r.a.createElement(S,{add:function(e){if(e.preventDefault(),n.some(function(e){return e.name===f})){if(window.confirm("".concat(f," is already exists, do you want to replace the number?"))){var t=n.find(function(e){return e.name===f}),a=Object(u.a)({},t,{number:v});w.updateData(a.id,a).then(function(e){c(n.map(function(t){return t.id!==a.id?t:e})),B(r.a.createElement(i.a,{variant:"success"},"Updated contact ",a.name))}).catch(function(e){B(r.a.createElement(i.a,{variant:"warning"},"Person $",f," has already been deleted"))})}}else{var o={name:f,number:v,id:n.length+1};w.addData(o).then(function(e){c(n.concat(e)),B(r.a.createElement(i.a,{variant:"success"},"Added contact ",f)),E(""),g("")}).catch(function(e){B(r.a.createElement(i.a,{variant:"warning"},"Person validation failed: Name & Number should be a length of minimum 3, 8 respectively. "))})}},person:function(e){return E(e.target.value)},number:function(e){return g(e.target.value)}})),r.a.createElement(p.a,{className:"col-sm-6"},r.a.createElement("h2",null,"Numbers ..."),r.a.createElement(O,{func:q.map(function(e){return r.a.createElement("p",{key:e.id},e.name,": ",e.number," ",r.a.createElement(s.a,{className:"btn btn-sm",onClick:function(){var t;t=e,window.confirm("Wanna delete ".concat(t.name,"?"))&&w.deleteData(t.id).then(function(e){c(n.filter(function(e){return e.id!==t.id})),B(r.a.createElement(i.a,{variant:"success"},"Deleted contact ",t.name))}).catch(function(e){B(r.a.createElement(i.a,{variant:"warning"},"Person $",f," has already been deleted"))})}},"Delete"))})}))),r.a.createElement("p",{className:"footer"},"designed & developed by ",r.a.createElement("a",{href:"https://madhubalajb.github.io/",rel:"noopener noreferrer",target:"_blank"},"madhubala jayakumaran"),r.a.createElement("br",null)," On live since 28th June 2019"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(124);o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},70:function(e,t,n){e.exports=n.p+"static/media/phone-book.55d8da50.png"},74:function(e,t,n){e.exports=n(125)},79:function(e,t,n){}},[[74,1,2]]]);
//# sourceMappingURL=main.14bb6b3d.chunk.js.map