(this["webpackJsonpreact-sinhala"]=this["webpackJsonpreact-sinhala"]||[]).push([[0],{22:function(e,t,a){},33:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),i=a(15),n=a.n(i),r=(a(22),a(7)),l=a(2),o=a(14),j=a(16),d=a.n(j),b=a(0);var m=function(e){return Object(b.jsx)("li",{className:"list-group-item shadow-md",children:Object(b.jsxs)("div",{className:"row align-items-center",children:[Object(b.jsx)("div",{className:"col align-items-center",children:Object(b.jsx)("img",{src:e.avatar,alt:e.name,className:"border border-dark rounded-circle shadow-md"})}),Object(b.jsxs)("div",{className:"col align-items-center",children:[Object(b.jsx)("h4",{children:e.name}),Object(b.jsxs)("p",{children:[e.city," | ",e.email]}),Object(b.jsx)("small",{children:d()(e.birthday).format("DD-MM-YYYY")})]})]})})};var h=function(){var e=Object(c.useState)(new Date),t=Object(o.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)([{id:1,name:{title:"mr",first:"Brad",last:"Gibson"},location:{city:"kilcoole"},email:"brad.gibson@example.com",dob:{date:"1993-07-20T09:44:18.674Z",age:26},picture:{medium:"https://randomuser.me/api/portraits/med/men/75.jpg"}}]),r=Object(o.a)(n,2),l=r[0],j=r[1];return Object(c.useEffect)((function(){fetch("https://randomuser.me/api").then((function(e){return e.json()})).then((function(e){j((function(t){return[e.results[0]]}))}))}),[a]),Object(b.jsx)(s.a.Fragment,{children:Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("button",{className:"btn btn-primary mb-3",onClick:function(){i(new Date)},children:"Generate Name"}),Object(b.jsx)("ul",{className:"list-group",children:l.map((function(e){return Object(b.jsx)(m,{name:"".concat(e.name.first," ").concat(e.name.last),city:e.location.city,email:e.email,birthday:e.dob.date,avatar:e.picture.medium},e.id)}))})]})})};var u=function(){return Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary shadow",style:{color:"white"},children:[Object(b.jsx)("span",{className:"navbar-brand mb-0 h1",style:{marginLeft:"10px"},children:"Automatic Names Generator"}),Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{to:"/",className:"nav-link",style:{color:"white"},children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{to:"/about",className:"nav-link",style:{color:"white"},children:"About"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsxs)(r.b,{to:"/namelist",className:"nav-link",style:{color:"white"},children:[" ","Name List"]})})]})]})};var x=function(){return Object(b.jsxs)("div",{className:"container mt-5",style:{textAlign:"center"},children:[Object(b.jsx)("h1",{children:"Welcome All!"}),Object(b.jsx)("h4",{style:{marginTop:"30px"},children:"This is a simple Web Application designed to generate details of people automatically including their Profile Picture, Full name & Last name, City, Email and Birthday"}),Object(b.jsx)("h4",{style:{marginTop:"30px",color:"red"},children:"Don't Wait! Let's Generate Names"}),Object(b.jsx)(r.b,{to:"/namelist",class:"btn btn-primary btn-lg active",role:"button","aria-pressed":"true",style:{marginTop:"20px"},children:"TRY IT NOW"})]})},p=a.p+"static/media/avatar.4ce6126a.jpg";var O=function(){return Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h2",{style:{marginBottom:"20px"},children:"About Me"}),Object(b.jsx)("li",{className:"list-group-item shadow-md",style:{backgroundColor:"#f7f7f7",borderColor:"#3e4fff"},children:Object(b.jsxs)("div",{className:"row align-items-center",children:[Object(b.jsx)("div",{className:"col-2",children:Object(b.jsx)("img",{src:p,height:"150px",width:"150px;",alt:"Isuru",className:"border border-dark rounded-circle shadow-md"})}),Object(b.jsxs)("div",{className:"col align-items-center",children:[Object(b.jsx)("h4",{children:"Isuru Prabhath"}),Object(b.jsx)("p",{children:"Kurunegala | jmisuruprabhath@gmail.com"}),Object(b.jsx)("small",{children:"Undergraduate at SLIIT | Data Science"})]})]})}),Object(b.jsx)("p",{style:{marginTop:"25px",fontSize:"20px",textAlign:"justify"},children:"I'm a second year undergraduate at Sri Lanka Institute of Information Technology. For the second-year second semester, we have to create a fully functional Web Application including CRUD operations, form validations, search operation, and reports generation. We have selected MERN Stack as the technology to develop the web application. The main purpose of creating this project is to learn fundamentals of React in deep & to learn usage of API in web applications."})]})};a(33);var f=function(){return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)("div",{className:"container ",children:Object(b.jsxs)("div",{className:"row align-items-center",children:[Object(b.jsx)("div",{className:"col-1",children:Object(b.jsx)("a",{href:"https://www.facebook.com/isuru.prabhath.7731",target:"_blank",style:{color:"white"},children:Object(b.jsx)("i",{className:"fa fa-facebook-official fa-lg white-text fa-2x mt-3 mb-3"})})}),Object(b.jsx)("div",{className:"col-1",children:Object(b.jsx)("a",{href:"https://twitter.com/jmisuruprabhath",target:"_blank",style:{color:"white"},children:Object(b.jsx)("i",{className:"fa fa-twitter fa-lg white-text fa-2x mt-3 mb-3"})})}),Object(b.jsx)("div",{className:"col-1",children:Object(b.jsx)("a",{href:"https://www.linkedin.com/in/isuru-prabhath-28b4911b6/",target:"_blank",style:{color:"white"},children:Object(b.jsx)("i",{className:"fa fa-linkedin fa-lg white-text fa-2x mt-3 mb-3"})})}),Object(b.jsx)("div",{className:"col-1",children:Object(b.jsx)("a",{href:"https://github.com/jmisuruprabhath",target:"_blank",style:{color:"white"},children:Object(b.jsx)("i",{className:"fa fa-github fa-lg white-text fa-2x"})})}),Object(b.jsx)("div",{className:"col-8",style:{fontSize:"15px"},children:"\xa9 2021 Copyright | Isuru Creations"})]})})})};var g=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(u,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/about",children:Object(b.jsx)(O,{})}),Object(b.jsx)(l.a,{path:"/namelist",children:Object(b.jsx)(h,{})}),Object(b.jsx)(l.a,{path:"/",children:Object(b.jsx)(x,{})})]}),Object(b.jsx)(f,{})]})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),i(e),n(e)}))};a(34),a(35);n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),v()}},[[36,1,2]]]);
//# sourceMappingURL=main.77f89689.chunk.js.map