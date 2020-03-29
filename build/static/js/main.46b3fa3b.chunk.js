(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),l=(a(83),a(35)),s=a(23),u=a(77),i=a(10),m=a(137),d=a(131),p=a(67),f=a(31),E=a.n(f),b=a(133),h=function(e){return r.a.createElement(b.a,null,r.a.createElement(p.a,{sm:"3"},r.a.createElement(b.a.Control,{className:"filter",onChange:e.filters,placeholder:"Search Contacts ..."})))},g=function(e){var t=e.filteredItems;return r.a.createElement("div",null,t.map(function(t){return r.a.createElement("div",{key:t.id,className:"contact"},r.a.createElement("i",{className:"material-icons person"},"assignment_ind"),r.a.createElement("span",{className:"name"},t.name)," - ",r.a.createElement("span",{className:"number"},t.number),r.a.createElement("i",{className:"material-icons delete",title:"Remove Contact",onClick:function(){return e.remove(t)}},"delete"))}))},v=a(132),w=function(e){return r.a.createElement(b.a,{onSubmit:e.add},r.a.createElement(d.a,null,r.a.createElement(p.a,{sm:"2"},r.a.createElement("i",{className:"material-icons"},"person_add")),r.a.createElement(p.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:e.person,value:e.newPerson||"",placeholder:"Contact Name",required:!0}))),r.a.createElement(d.a,null,r.a.createElement(p.a,{sm:"2"},r.a.createElement("i",{className:"material-icons"},"phone")),r.a.createElement(p.a,{sm:"10"},r.a.createElement(b.a.Control,{onChange:e.number,value:e.newNumber||"",placeholder:"Phone Number",required:!0}))),r.a.createElement(v.a,{className:"btn-sm btn_icon",type:"submit",title:"Add Contact"},r.a.createElement("i",{className:"material-icons"},"add_circle"),r.a.createElement("span",null,"Add")))},k=function(e){return null===e.msg?null:e.msg},N=a(6),j=a.n(N),O=a(13),S=a(20),x=a.n(S),y="/api/persons",C=null,P={setToken:function(e){C="bearer ".concat(e)},getData:function(){var e=Object(O.a)(j.a.mark(function e(){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(y);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),addData:function(){var e=Object(O.a)(j.a.mark(function e(t){var a,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:C}},e.next=3,x.a.post(y,t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),deleteData:function(){var e=Object(O.a)(j.a.mark(function e(t){var a,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:C}},e.next=3,x.a.delete("".concat(y,"/").concat(t),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),updateData:function(){var e=Object(O.a)(j.a.mark(function e(t,a){var n,r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:C}},e.next=3,x.a.put("".concat(y,"/").concat(t),a,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},_=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),s=l[0],f=l[1],b=Object(n.useState)(""),v=Object(i.a)(b,2),N=v[0],j=v[1],O=Object(n.useState)(""),S=Object(i.a)(O,2),x=S[0],y=S[1],C=Object(n.useState)(""),_=Object(i.a)(C,2),A=_[0],D=_[1];Object(n.useEffect)(function(){var e=window.localStorage.getItem("logged_PhoneApp_User");e&&P.getData().then(function(t){return c(t.filter(function(t){return t.user.id===JSON.parse(e).id}))})},[]);var L=function(e){D(e),setTimeout(function(){D(null)},5e3)},B=function(){f(""),j("")},U=a.filter(function(e){return-1!==e.name.toLowerCase().indexOf(x.toLowerCase())});return r.a.createElement("center",{className:"container"},r.a.createElement(k,{msg:A}),r.a.createElement("div",null,r.a.createElement("img",{className:"phonebook_logo",src:E.a,alt:"Phonebook Logo"}),r.a.createElement("h2",null,"Phonebook"),r.a.createElement(h,{filters:function(e){return y(e.target.value)}})),r.a.createElement("div",{className:"row main-row"},r.a.createElement(m.a,{className:"col-sm-6"},r.a.createElement("h2",null,"Add a contact"),r.a.createElement(w,{add:function(e){if(e.preventDefault(),!0===function(e){if("number"===typeof e){for(var t=String(e),a=0,n=0;n<t.length;n++)"0"===t[n]&&(a+=1);return a!==t.length}return!1}(N))if(a.some(function(e){return e.name===s})){if(window.confirm("".concat(s," is already exists, do you want to replace the number?"))){var t=a.find(function(e){return e.name===s}),n=Object(u.a)({},t,{number:N});P.updateData(n.id,n).then(function(e){c(a.map(function(t){return t.id!==n.id?t:e})),L(r.a.createElement("div",{id:"snackbar"},"Updated contact ",n.name)),B()}).catch(function(e){L(r.a.createElement("div",{id:"snackbar"},"Person ",s," has already been deleted")),B()})}}else{var o={name:s,number:N,id:a.length+1};P.addData(o).then(function(e){c(a.concat(e)),L(r.a.createElement("div",{id:"snackbar"},"Added contact ",s)),B()}).catch(function(e){L(r.a.createElement("div",{id:"snackbar"},"Person validation failed: Name & Number should be a length of minimum 3, 8 respectively. ")),B()})}else L(r.a.createElement("div",{id:"snackbar"},"Enter valid Number")),B()},person:function(e){return f(e.target.value)},number:function(e){return j(e.target.value)},newNumber:N,newPerson:s})),r.a.createElement(m.a,{className:"col-sm-6"},r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement("h2",null,"Contacts"))),r.a.createElement(g,{filteredItems:U,remove:function(e){window.confirm("Wanna delete ".concat(e.name,"?"))&&P.deleteData(e.id).then(function(t){c(a.filter(function(t){return t.id!==e.id})),L(r.a.createElement("div",{id:"snackbar"},"Deleted contact ",e.name))}).catch(function(e){L(r.a.createElement("div",{id:"snackbar"},"Person ",s," has already been deleted"))})}}))))},A=a(68),D=a.n(A),L=a(69),B=a.n(L),U=a(70),I=a.n(U),T=function(){return r.a.createElement("center",{className:"container"},r.a.createElement("div",null,r.a.createElement("img",{className:"phonebook_logo",src:E.a,alt:"Phonebook Logo"}),r.a.createElement("h2",null,"Phonebook"),r.a.createElement("div",{className:"logos"},r.a.createElement("span",{className:"logo react"},r.a.createElement("img",{src:D.a,alt:"Reactjs",title:"React"})),r.a.createElement("span",{className:"plus"},"+"),r.a.createElement("span",{className:"logo node"},r.a.createElement("img",{src:B.a,alt:"Nodejs",title:"Node JS"})),r.a.createElement("span",{className:"plus"},"+"),r.a.createElement("span",{className:"logo mongodb"},r.a.createElement("img",{src:I.a,alt:"Mongodb",title:"mongo DB"}))),r.a.createElement("ol",{className:"stack"},r.a.createElement("li",{className:"tech"},"Express"),r.a.createElement("li",{className:"tech"},"REST API"),r.a.createElement("li",{className:"tech"},"SASS"),r.a.createElement("li",{className:"tech"},"Bootstrap"))),r.a.createElement("p",{className:"footer"},"designed & developed by ",r.a.createElement("a",{href:"https://madhubalajb.github.io/",rel:"noopener noreferrer",target:"_blank"},"madhubala jayakumaran")))},q=a(136),J=a(135),H=a(134),R=function(e){return r.a.createElement(H.a,{show:e.show,onHide:e.close},r.a.createElement(H.a.Header,{closeButton:!0},r.a.createElement("b",null,"Login")),r.a.createElement(H.a.Body,null,r.a.createElement(b.a,{onSubmit:e.login},r.a.createElement(b.a.Control,{type:"text",placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(b.a.Control,{type:"password",placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(v.a,{type:"submit"},"Login")))))},z=function(e){return r.a.createElement(H.a,{show:e.show,onHide:e.close},r.a.createElement(H.a.Header,{closeButton:!0},"Sign Up"),r.a.createElement(H.a.Body,null,r.a.createElement(b.a,{onSubmit:e.signup},r.a.createElement(b.a.Control,{type:"text",placeholder:"Name",onChange:e.name,required:!0}),r.a.createElement(b.a.Control,{type:"text",placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(b.a.Control,{type:"password",placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(v.a,{type:"submit"},"Signup")))))},W={login:function(){var e=Object(O.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},M={signup:function(){var e=Object(O.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/api/users",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},$=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],o=function(){return c(!1)},l=Object(n.useState)(!1),s=Object(i.a)(l,2),u=s[0],m=s[1],d=function(){return m(!1)},p=Object(n.useState)(""),f=Object(i.a)(p,2),E=f[0],b=f[1],h=Object(n.useState)(""),g=Object(i.a)(h,2),v=g[0],w=g[1],N=Object(n.useState)(""),S=Object(i.a)(N,2),x=S[0],y=S[1],C=Object(n.useState)(""),_=Object(i.a)(C,2),A=_[0],D=_[1],L=Object(n.useState)(""),B=Object(i.a)(L,2),U=B[0],I=B[1];Object(n.useEffect)(function(){var e=window.localStorage.getItem("logged_PhoneApp_User");if(e){var t=JSON.parse(e);b(t),P.setToken(t.token)}},[]);var T=function(e){I(e),setTimeout(function(){I(null)},5e3)},q=function(e){return y(e.target.value)},H=function(e){return D(e.target.value)},$=function(){var e=Object(O.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,W.login({username:x,password:A}).then(function(e){window.localStorage.setItem("logged_PhoneApp_User",JSON.stringify(e)),P.setToken(e.token),b(e),y(""),D(""),o(),T(r.a.createElement("div",{id:"snackbar"},"Hi ",e.username," :)"))}).catch(function(e){b(""),y(""),D(""),o(),T(r.a.createElement("div",{id:"snackbar"},"Sorry ",E.username," :("))});case 3:window.location.reload(!1);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(O.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,M.signup({name:v,username:x,password:A}).then(function(e){b(""),w(""),y(""),D(""),d(),T(r.a.createElement("div",{id:"snackbar"},"User ",e.username," added :)"))});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return""===E?r.a.createElement("div",null,r.a.createElement(k,{msg:U}),r.a.createElement(J.a.Link,{onClick:function(){return c(!0)}},"Login"),r.a.createElement(R,{show:a,close:o,username:q,pwd:H,login:$}),r.a.createElement(J.a.Link,{onClick:function(){return m(!0)}},"Signup"),r.a.createElement(z,{show:u,close:d,name:function(e){return w(e.target.value)},username:q,pwd:H,signup:F})):r.a.createElement("div",null,r.a.createElement(k,{msg:U}),r.a.createElement(J.a.Link,{onClick:function(){b(""),window.localStorage.removeItem("logged_PhoneApp_User"),P.setToken(""),window.location.reload(!1)}},"Logout"))},F=function(){return r.a.createElement(q.a,{collapseOnSelect:!0,expand:"sm",className:"fixed-top"},r.a.createElement(q.a.Brand,{href:"/"},r.a.createElement("i",{className:"material-icons house"},"house")),r.a.createElement(q.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(q.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(J.a,{className:"ml-auto"},r.a.createElement(J.a.Link,{href:"/about"},r.a.createElement(l.b,{to:"/about"},"about")),r.a.createElement($,null))))},G=function(){return r.a.createElement(l.a,null,r.a.createElement(F,null),r.a.createElement(s.a,{exact:!0,path:"/",component:_}),r.a.createElement(s.a,{exact:!0,path:"/about",component:function(){return r.a.createElement(T,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(128);o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},31:function(e,t,a){e.exports=a.p+"static/media/phone-book.55d8da50.png"},68:function(e,t,a){e.exports=a.p+"static/media/reactjs.815bfb21.png"},69:function(e,t,a){e.exports=a.p+"static/media/nodejs.dacb853d.png"},70:function(e,t,a){e.exports=a.p+"static/media/mongodb.3bd34a07.png"},78:function(e,t,a){e.exports=a(129)},83:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.46b3fa3b.chunk.js.map