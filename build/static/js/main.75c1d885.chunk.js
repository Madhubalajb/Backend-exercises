(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),l=(a(82),a(72)),u=a(24),s=a(76),i=a(12),m=a(133),d=a(138),p=a(131),f=a(69),E=a(33),h=a.n(E),b=a(130),v=function(){return r.a.createElement("center",{className:"container"},r.a.createElement("div",null,r.a.createElement("img",{src:h.a,alt:"Logo"}),r.a.createElement("h2",null,"Phonebook App"),r.a.createElement("p",null,r.a.createElement(b.a,null,"React JS")," + ",r.a.createElement(b.a,null,"Node JS")," + ",r.a.createElement(b.a,null,"REST API")," + ",r.a.createElement(b.a,null,"Express")," + ",r.a.createElement(b.a,null,"MongoDB")," + ",r.a.createElement(b.a,null,"SASS")," + ",r.a.createElement(b.a,null,"Bootstrap"))),r.a.createElement("p",{className:"footer"},"designed & developed by ",r.a.createElement("a",{href:"https://madhubalajb.github.io/",rel:"noopener noreferrer",target:"_blank"},"madhubala jayakumaran"),r.a.createElement("br",null)," On live since 28th June 2019"))},g=a(134),w=function(e){return r.a.createElement(g.a,null,r.a.createElement(f.a,{sm:"3"},r.a.createElement(g.a.Control,{className:"filter",onChange:e.filters,placeholder:"Search Contacts ..."})))},O=function(e){var t=e.filteredItems;return r.a.createElement("div",null,t.map(function(t){return r.a.createElement("p",{key:t.id}," ",r.a.createElement("i",{className:"material-icons"},"assignment_ind"),t.name,": ",t.number,r.a.createElement("i",{class:"material-icons",onClick:function(){e.removePerson(t)}},"delete"))}))},j=a(132),k=function(e){return r.a.createElement(g.a,{onSubmit:e.add},r.a.createElement(p.a,null,r.a.createElement(f.a,{sm:"2"},r.a.createElement("i",{className:"material-icons"},"person_add")),r.a.createElement(f.a,{sm:"10"},r.a.createElement(g.a.Control,{onChange:e.person,value:e.newPerson||"",placeholder:"Contact Name",required:!0}))),r.a.createElement(p.a,null,r.a.createElement(f.a,{sm:"2"},r.a.createElement("i",{className:"material-icons"},"phone")),r.a.createElement(f.a,{sm:"10"},r.a.createElement(g.a.Control,{onChange:e.number,value:e.newNumber||"",placeholder:"Phone Number",required:!0}))),r.a.createElement(j.a,{className:"btn-sm btn_icon",type:"submit"},r.a.createElement("i",{className:"material-icons"},"add_circle"),r.a.createElement("span",null,"Add")))},S=function(e){return null===e.msg?null:e.msg},y=a(7),N=a.n(y),x=a(13),C=a(20),P=a.n(C),_="/api/persons",D=null,A={setToken:function(e){D="bearer ".concat(e)},getData:function(){var e=Object(x.a)(N.a.mark(function e(){var t;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get(_);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),addData:function(){var e=Object(x.a)(N.a.mark(function e(t){var a,n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:D}},e.next=3,P.a.post(_,t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),deleteData:function(){var e=Object(x.a)(N.a.mark(function e(t){var a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.delete("".concat(_,"/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),updateData:function(){var e=Object(x.a)(N.a.mark(function e(t,a){var n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.put("".concat(_,"/").concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},L=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),u=l[0],E=l[1],b=Object(n.useState)(""),v=Object(i.a)(b,2),g=v[0],j=v[1],y=Object(n.useState)(""),N=Object(i.a)(y,2),x=N[0],C=N[1],P=Object(n.useState)(""),_=Object(i.a)(P,2),D=_[0],L=_[1];Object(n.useEffect)(function(){var e=window.localStorage.getItem("logged_PhoneApp_User");e&&A.getData().then(function(t){return c(t.filter(function(t){return t.user.id===JSON.parse(e).id}))})},[]);var B=function(e){L(e),setTimeout(function(){L(null)},5e3)},I=a.filter(function(e){return-1!==e.name.toLowerCase().indexOf(x.toLowerCase())});return r.a.createElement("center",{className:"container"},r.a.createElement(S,{msg:D}),r.a.createElement("div",null,r.a.createElement("img",{src:h.a,alt:"Logo"}),r.a.createElement("h2",null,"Phonebook App"),r.a.createElement(w,{filters:function(e){return C(e.target.value)}})),r.a.createElement("div",{className:"row main-row"},r.a.createElement(d.a,{className:"col-sm-6"},r.a.createElement("h2",null,"Add a contact"),r.a.createElement(k,{add:function(e){if(e.preventDefault(),a.some(function(e){return e.name===u})){if(window.confirm("".concat(u," is already exists, do you want to replace the number?"))){var t=a.find(function(e){return e.name===u}),n=Object(s.a)({},t,{number:g});A.updateData(n.id,n).then(function(e){c(a.map(function(t){return t.id!==n.id?t:e})),B(r.a.createElement(m.a,{variant:"success"},"Updated contact ",n.name)),j(""),E("")}).catch(function(e){B(r.a.createElement(m.a,{variant:"warning"},"Person $",u," has already been deleted")),E(""),j("")})}}else{var o={name:u,number:g,id:a.length+1};A.addData(o).then(function(e){c(a.concat(e)),B(r.a.createElement(m.a,{variant:"success"},"Added contact ",u)),E(""),j("")}).catch(function(e){B(r.a.createElement(m.a,{variant:"warning"},"Person validation failed: Name & Number should be a length of minimum 3, 8 respectively. ")),E(""),j("")})}},person:function(e){return E(e.target.value)},number:function(e){return j(e.target.value)},newNumber:g,newPerson:u})),r.a.createElement(d.a,{className:"col-sm-6"},r.a.createElement(p.a,null,r.a.createElement(f.a,{className:"col-sm-10"},r.a.createElement("h2",null,"Contacts")),r.a.createElement(f.a,{className:"col-sm-1"},r.a.createElement("i",{className:"material-icons"},"contact_phone"))),r.a.createElement(O,{filteredItems:I,remove:function(e){window.confirm("Wanna delete ".concat(e.name,"?"))&&A.deleteData(e.id).then(function(t){c(a.filter(function(t){return t.id!==e.id})),B(r.a.createElement(m.a,{variant:"success"},"Deleted contact ",e.name))}).catch(function(e){B(r.a.createElement(m.a,{variant:"warning"},"Person $",u," has already been deleted"))})}}))))},B=a(137),I=a(136),J=a(135),U=function(e){return r.a.createElement(J.a,{show:e.show,onHide:e.close},r.a.createElement(J.a.Header,{closeButton:!0},r.a.createElement("b",null,"Login")),r.a.createElement(J.a.Body,null,r.a.createElement(g.a,{onSubmit:e.login},r.a.createElement(g.a.Control,{type:"text",placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(g.a.Control,{type:"password",placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(j.a,{type:"submit"},"Login")))))},q=function(e){return r.a.createElement(J.a,{show:e.show,onHide:e.close},r.a.createElement(J.a.Header,{closeButton:!0},"Sign Up"),r.a.createElement(J.a.Body,null,r.a.createElement(g.a,{onSubmit:e.signup},r.a.createElement(g.a.Control,{type:"text",placeholder:"Name",onChange:e.name,required:!0}),r.a.createElement(g.a.Control,{type:"text",placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(g.a.Control,{type:"password",placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(j.a,{type:"submit"},"Signup")))))},T={login:function(){var e=Object(x.a)(N.a.mark(function e(t){var a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},H={signup:function(){var e=Object(x.a)(N.a.mark(function e(t){var a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.post("/api/users",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},W=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],o=function(){return c(!1)},l=Object(n.useState)(!1),u=Object(i.a)(l,2),s=u[0],m=u[1],d=function(){return m(!1)},p=Object(n.useState)(""),f=Object(i.a)(p,2),E=f[0],h=f[1],b=Object(n.useState)(""),v=Object(i.a)(b,2),g=v[0],w=v[1],O=Object(n.useState)(""),j=Object(i.a)(O,2),k=j[0],S=j[1],y=Object(n.useState)(""),C=Object(i.a)(y,2),P=C[0],_=C[1];Object(n.useEffect)(function(){var e=window.localStorage.getItem("logged_PhoneApp_User");if(e){var t=JSON.parse(e);h(t),A.setToken(t.token)}},[]);var D=function(e){return S(e.target.value)},L=function(e){return _(e.target.value)},B=function(){var e=Object(x.a)(N.a.mark(function e(t){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,T.login({username:k,password:P}).then(function(e){window.localStorage.setItem("logged_PhoneApp_User",JSON.stringify(e)),A.setToken(e.token),h(e),S(""),_(""),o()}).catch(function(e){h(""),S(""),_(""),o()});case 3:window.location.reload(!1);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(x.a)(N.a.mark(function e(t){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,H.signup({name:g,username:k,password:P}).then(function(e){h(""),w(""),S(""),_(""),d()});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return""===E?r.a.createElement("div",null,r.a.createElement(I.a.Link,{onClick:function(){return c(!0)}},"Login"),r.a.createElement(U,{show:a,close:o,username:D,pwd:L,login:B}),r.a.createElement(I.a.Link,{onClick:function(){return m(!0)}},"Signup"),r.a.createElement(q,{show:s,close:d,name:function(e){return w(e.target.value)},username:D,pwd:L,signup:J})):r.a.createElement("div",null,r.a.createElement(I.a.Link,{onClick:function(){h(""),window.localStorage.removeItem("logged_PhoneApp_User"),A.setToken(""),window.location.reload(!1)}},"Logout"))},$=function(){return r.a.createElement(B.a,{collapseOnSelect:!0,expand:"sm",className:"fixed-top"},r.a.createElement(B.a.Brand,{href:"/"},r.a.createElement("i",{className:"material-icons house"},"house")),r.a.createElement(B.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(B.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(I.a,{className:"ml-auto"},r.a.createElement(I.a.Link,{href:"/about"},"about"),r.a.createElement(W,null))))},R=function(){return r.a.createElement(l.a,null,r.a.createElement($,null),r.a.createElement(u.a,{exact:!0,path:"/",component:L}),r.a.createElement(u.a,{exact:!0,path:"/about",component:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(127);o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},33:function(e,t,a){e.exports=a.p+"static/media/phone-book.55d8da50.png"},77:function(e,t,a){e.exports=a(128)},82:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.75c1d885.chunk.js.map