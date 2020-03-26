(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),u=(n(72),n(65)),l=n(10),s=n(122),i=n(123),m=n(128),d=n(6),p=n.n(d),f=n(11),E=n(18),h=n.n(E),b="/api/persons",v=null,g={setToken:function(e){v="bearer ".concat(e)},getData:function(){var e=Object(f.a)(p.a.mark(function e(){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(b);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),addData:function(){var e=Object(f.a)(p.a.mark(function e(t){var n,a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:v}},e.next=3,h.a.post(b,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),deleteData:function(){var e=Object(f.a)(p.a.mark(function e(t){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("".concat(b,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),updateData:function(){var e=Object(f.a)(p.a.mark(function e(t,n){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put("".concat(b,"/").concat(t),n);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},w=n(120),O=function(e){var t=e.filteredItems;return r.a.createElement("div",null,function(){return t.map(function(t){return r.a.createElement("p",{key:t.id},t.name,": ",t.number," ",r.a.createElement(w.a,{className:"btn btn-sm",onClick:function(){e.removePerson(t)}},"Delete"))})})},j=n(124),S=n(121),k=n(60),y=function(e){return r.a.createElement(j.a,{onSubmit:e.add},r.a.createElement(S.a,null,r.a.createElement(k.a,null,"Name"),r.a.createElement(k.a,{sm:"8"},r.a.createElement(j.a.Control,{onChange:e.person,value:e.newPerson||"",placeholder:"Contact Name",required:!0}))),r.a.createElement(S.a,null,r.a.createElement(k.a,null,"Number"),r.a.createElement(k.a,{sm:"8"},r.a.createElement(j.a.Control,{onChange:e.number,value:e.newNumber||"",placeholder:"Phone Number",required:!0}))),r.a.createElement(w.a,{className:"btn btn-sm",type:"submit"},"Add"))},x=function(e){return r.a.createElement(j.a,null,r.a.createElement(k.a,{sm:"3"},r.a.createElement(j.a.Control,{className:"filter",onChange:e.filters,placeholder:"Search Contacts ..."})))},C=function(e){return null===e.msg?null:e.msg},N=n(127),P=n(126),D=n(125),A=function(e){return r.a.createElement(D.a,{show:e.show,onHide:e.close},r.a.createElement(D.a.Header,{closeButton:!0},r.a.createElement("b",null,"Login")),r.a.createElement(D.a.Body,null,r.a.createElement(j.a,{onSubmit:e.login},r.a.createElement(j.a.Control,{type:"text",placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(j.a.Control,{type:"password",placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(w.a,{type:"submit"},"Login")))))},L=function(e){return r.a.createElement(D.a,{show:e.show,onHide:e.close},r.a.createElement(D.a.Header,{closeButton:!0},"Sign Up"),r.a.createElement(D.a.Body,null,r.a.createElement(j.a,{onSubmit:e.signup},r.a.createElement(j.a.Control,{type:"text",placeholder:"Name",onChange:e.name,required:!0}),r.a.createElement(j.a.Control,{type:"text",placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(j.a.Control,{type:"password",placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(w.a,{type:"submit"},"Signup")))))},B={login:function(){var e=Object(f.a)(p.a.mark(function e(t){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},_={signup:function(){var e=Object(f.a)(p.a.mark(function e(t){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},I=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],o=function(){return c(!1)},u=Object(a.useState)(!1),s=Object(l.a)(u,2),i=s[0],m=s[1],d=function(){return m(!1)},E=Object(a.useState)(""),h=Object(l.a)(E,2),b=h[0],v=h[1],w=Object(a.useState)(""),O=Object(l.a)(w,2),j=O[0],S=O[1],k=Object(a.useState)(""),y=Object(l.a)(k,2),x=y[0],C=y[1],N=Object(a.useState)(""),D=Object(l.a)(N,2),I=D[0],J=D[1];Object(a.useEffect)(function(){var e=window.localStorage.getItem("logged_PhoneApp_User");if(e){var t=JSON.parse(e);v(t),g.setToken(t.token)}},[]);var U=function(e){return C(e.target.value)},q=function(e){return J(e.target.value)},T=function(){var e=Object(f.a)(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.login({username:x,password:I}).then(function(e){window.localStorage.setItem("logged_PhoneApp_User",JSON.stringify(e)),g.setToken(e.token),v(e),C(""),J(""),o()}).catch(function(e){v(""),C(""),J(""),o()});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(f.a)(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,_.signup({name:j,username:x,password:I}).then(function(e){v(""),S(""),C(""),J(""),d()});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return""===b?r.a.createElement("div",null,r.a.createElement(P.a.Link,{onClick:function(){return c(!0)}},"Login"),r.a.createElement(A,{show:n,close:o,username:U,pwd:q,login:T}),r.a.createElement(P.a.Link,{onClick:function(){return m(!0)}},"Signup"),r.a.createElement(L,{show:i,close:d,name:function(e){return S(e.target.value)},username:U,pwd:q,signup:H})):r.a.createElement("div",null,r.a.createElement(P.a.Link,{onClick:function(){v(""),window.localStorage.removeItem("logged_PhoneApp_User"),g.setToken("")}},"Logout"))},J=function(){return r.a.createElement(N.a,{collapseOnSelect:!0,expand:"sm",className:"fixed-top"},r.a.createElement(N.a.Brand,{href:"/about"},"about"),r.a.createElement(N.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(N.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(P.a,{className:"ml-auto"},r.a.createElement(I,null))))},U=n(63),q=n.n(U),T=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),d=Object(l.a)(o,2),p=d[0],f=d[1],E=Object(a.useState)(""),h=Object(l.a)(E,2),b=h[0],v=h[1],w=Object(a.useState)(""),j=Object(l.a)(w,2),S=j[0],k=j[1],N=Object(a.useState)(""),P=Object(l.a)(N,2),D=P[0],A=P[1];Object(a.useEffect)(function(){var e=window.localStorage.getItem("logged_PhoneApp_User");e?g.getData().then(function(t){return c(t.filter(function(t){return t.user==JSON.parse(e).id}))}):(c(""),k("fuck"))},[]);var L=function(e){A(e),setTimeout(function(){A(null)},5e3)},B=n.filter(function(e){return-1!==e.name.toLowerCase().indexOf(S.toLowerCase())});return r.a.createElement("center",{className:"container"},r.a.createElement(J,null),r.a.createElement(C,{msg:D}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:q.a,alt:"Logo"}),r.a.createElement("h2",null,"Phonebook App")),r.a.createElement("p",null,r.a.createElement(i.a,null,"React JS")," + ",r.a.createElement(i.a,null,"Node JS")," + ",r.a.createElement(i.a,null,"REST API")," + ",r.a.createElement(i.a,null,"Express")," + ",r.a.createElement(i.a,null,"MongoDB")," + ",r.a.createElement(i.a,null,"SASS")," + ",r.a.createElement(i.a,null,"Bootstrap")),r.a.createElement(x,{filters:function(e){return k(e.target.value)}})),r.a.createElement("div",{className:"row main-row"},r.a.createElement(m.a,{className:"col-sm-6"},r.a.createElement("h2",null,"Add a contact"),r.a.createElement(y,{add:function(e){if(e.preventDefault(),n.some(function(e){return e.name===p})){if(window.confirm("".concat(p," is already exists, do you want to replace the number?"))){var t=n.find(function(e){return e.name===p}),a=Object(u.a)({},t,{number:b});g.updateData(a.id,a).then(function(e){c(n.map(function(t){return t.id!==a.id?t:e})),L(r.a.createElement(s.a,{variant:"success"},"Updated contact ",a.name)),v(""),f("")}).catch(function(e){L(r.a.createElement(s.a,{variant:"warning"},"Person $",p," has already been deleted")),f(""),v("")})}}else{var o={name:p,number:b,id:n.length+1};g.addData(o).then(function(e){c(n.concat(e)),L(r.a.createElement(s.a,{variant:"success"},"Added contact ",p)),f(""),v("")}).catch(function(e){L(r.a.createElement(s.a,{variant:"warning"},"Person validation failed: Name & Number should be a length of minimum 3, 8 respectively. ")),f(""),v("")})}},person:function(e){return f(e.target.value)},number:function(e){return v(e.target.value)},newNumber:b,newPerson:p})),r.a.createElement(m.a,{className:"col-sm-6"},r.a.createElement("h2",null,"Contacts"),r.a.createElement(O,{filteredItems:B,persons:n,remove:function(e){window.confirm("Wanna delete ".concat(e.name,"?"))&&g.deleteData(e.id).then(function(t){c(n.filter(function(t){return t.id!==e.id})),L(r.a.createElement(s.a,{variant:"success"},"Deleted contact ",e.name))}).catch(function(e){L(r.a.createElement(s.a,{variant:"warning"},"Person $",p," has already been deleted"))})}}))),r.a.createElement("p",{className:"footer"},"designed & developed by ",r.a.createElement("a",{href:"https://madhubalajb.github.io/",rel:"noopener noreferrer",target:"_blank"},"madhubala jayakumaran"),r.a.createElement("br",null)," On live since 28th June 2019"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(117);o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},63:function(e,t,n){e.exports=n.p+"static/media/phone-book.55d8da50.png"},66:function(e,t,n){e.exports=n(118)},72:function(e,t,n){}},[[66,1,2]]]);
//# sourceMappingURL=main.dfe8cddb.chunk.js.map