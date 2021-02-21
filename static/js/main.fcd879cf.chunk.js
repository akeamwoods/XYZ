(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{504:function(e,t,n){},505:function(e,t,n){"use strict";n.r(t);var r,a,c,i=n(1),s=n.n(i),o=n(39),u=n.n(o),d=n(49),l=n(118),b=n(30),f=n(27),j=n(28),p=j.a.div(r||(r=Object(f.a)(["\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: #04a9cd;\n  p {\n    color: #fff;\n    margin: 0;\n    font-weight: 400;\n  }\n  align-items: center;\n  box-shadow: 0px 22px 24px 0px rgba(46, 51, 51, 0.07);\n"]))),x=j.a.nav(a||(a=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),h=Object(j.a)(l.b)(c||(c=Object(f.a)(["\n  padding: 5px 10px;\n  text-decoration: none;\n  color: #fff;\n  font-weight: 0;\n  transition: 0.3s;\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  border-radius: 4px;\n  svg {\n    margin-right: 10px;\n  }\n  :hover {\n    background: rgba(0, 0, 0, 0.1);\n  }\n"]))),g=n(163),O=n(7),y=function(){return Object(O.jsx)(p,{children:Object(O.jsxs)(x,{children:[Object(O.jsxs)(h,{exact:!0,to:"/",activeStyle:{background:"rgba(0,0,0,0.3)"},children:[Object(O.jsx)(g.a,{size:"24"}),"Table View"]}),Object(O.jsxs)(h,{exact:!0,to:"/graphs",activeStyle:{background:"rgba(0,0,0,0.3)"},children:[Object(O.jsx)(g.b,{size:"24"}),"Graph View"]})]})})},m=n(514),v=n(515),w=n(245),_=n(130),k=n(511),L=n(250),C=n(60),S=n(249),D=n(229),M=n(66),T=n(32),Q=Object(T.createAction)("customer data fetched")(),A=Object(T.createAction)("sort button pressed")(),R=Object(T.createAction)("filter input updated")(),I=Object(T.createAction)("search query modified")(),B=Object(T.createAction)("search term selected")(),K=Object(T.createAction)("auto suggest cleared")(),E={customerDataFetched:Q,filterButtonPressed:A,searchQueryModified:I,filterInputUpdated:R,searchTermSelected:B,dataLimitModified:Object(T.createAction)("data limit modified")(),autoSuggestCleared:K},F=n(230),P=n(512),U=function(e,t,n){return null===e?1:null===t?-1:e===t?0:n?e<t?-1:1:n?t-e:e<t?1:-1},z=n(53),G=n.n(z),H=n(77),J=G.a.mark(W),V=G.a.mark(X),q=G.a.mark(Y);function W(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.a)([X(),Object(H.e)(Object(T.getType)(E.filterInputUpdated),Y)]);case 2:case"end":return e.stop()}}),J)}function X(){var e;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(H.b)((function(){return fetch("./MOCK_DATA.json").then((function(e){return e.json()}))}));case 3:if(!(e=t.sent)){t.next=9;break}return t.next=7,Object(H.d)(E.customerDataFetched(e));case 7:t.next=9;break;case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),V,null,[[0,11]])}function Y(e){var t;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(H.c)(333);case 4:return n.next=6,Object(H.d)(E.searchQueryModified(t));case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),q,null,[[1,8]])}var Z=Object(S.a)(),N=Object(C.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{userData:[],activeSort:void 0,filterQuery:"",searchResults:[],dataLimit:500},t=arguments.length>1?arguments[1]:void 0;return Object(F.a)(e,(function(e){switch(t.type){case Object(T.getType)(E.customerDataFetched):e.userData=t.payload;break;case Object(T.getType)(E.filterButtonPressed):var n=t.payload;switch(n){case"dob_descending":e.userData=Object(M.a)(e.userData.sort((function(e,t){return Object(P.a)(e.date_of_birth,"dd/MM/yyyy",new Date).getTime()-Object(P.a)(t.date_of_birth,"dd/MM/yyyy",new Date).getTime()})));break;case"dob_ascending":e.userData=e.userData.reverse();break;case"industry_descending":e.userData=Object(M.a)(e.userData.sort((function(e,t){return e.industry?t.industry?"n/a"===e.industry?1:"n/a"===t.industry?-1:e.industry<t.industry?1:-1:-1:1})));break;case"industry_ascending":e.userData=Object(M.a)(e.userData.sort((function(e,t){return e.industry?t.industry?"n/a"===e.industry?1:"n/a"===t.industry?-1:t.industry<e.industry?1:-1:-1:1})));break;case"salary_descending":e.userData=Object(M.a)(e.userData.sort((function(e,t){return U(e.salary,t.salary,!1)})));break;case"salary_ascending":e.userData=Object(M.a)(e.userData.sort((function(e,t){return U(e.salary,t.salary,!0)})))}e.activeSort=n;break;case Object(T.getType)(E.filterInputUpdated):e.filterQuery=t.payload;break;case Object(T.getType)(E.searchTermSelected):var r,a;e.filterQuery="".concat(null===(r=t.payload.first_name)||void 0===r?void 0:r.toLowerCase()," ").concat(null===(a=t.payload.last_name)||void 0===a?void 0:a.toLowerCase()),e.searchResults=[];break;case Object(T.getType)(E.searchQueryModified):e.filterQuery?e.searchResults=e.userData.filter((function(t){var n,r;return(null===(n=t.first_name)||void 0===n?void 0:n.toLowerCase().includes(e.filterQuery.toLowerCase()))||(null===(r=t.last_name)||void 0===r?void 0:r.toLowerCase().includes(e.filterQuery.toLowerCase()))||t.first_name&&t.last_name&&t.first_name.toLowerCase().concat(t.last_name.toLowerCase()).replace(/\s/g,"").includes(e.filterQuery.replace(/\s/g,"").toLowerCase())})):e.searchResults=[];break;case Object(T.getType)(E.autoSuggestCleared):e.searchResults=[];break;case Object(T.getType)(E.dataLimitModified):t.payload?e.dataLimit=t.payload:e.dataLimit=0}}))}),Object(D.composeWithDevTools)(Object(C.applyMiddleware)(Z)));Z.run(W);var $,ee,te,ne,re,ae,ce,ie,se,oe,ue,de,le=d.c,be=j.a.div($||($=Object(f.a)(["\n  position: relative;\n"]))),fe=j.a.input(ee||(ee=Object(f.a)(["\n  padding: 5px;\n  margin-right: 10px;\n"]))),je=j.a.ul(te||(te=Object(f.a)(["\n  position: absolute;\n  background: rgb(255, 255, 255);\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  top: 12px;\n  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),\n    0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);\n"]))),pe=j.a.li(ne||(ne=Object(f.a)(["\n  list-style: none;\n  padding: 5px;\n  cursor: pointer;\n  :hover {\n    background: rgba(0, 0, 0, 0.2);\n  }\n"]))),xe=function(){var e=Object(d.b)(),t=le((function(e){return e.filterQuery})),n=le((function(e){return e.searchResults})),r=s.a.useRef(null);return function(e,t){var n=function(n){e.current&&!e.current.contains(n.target)&&t()};Object(i.useEffect)((function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}))}(r,(function(){e(E.autoSuggestCleared())})),Object(O.jsxs)(be,{ref:r,children:[Object(O.jsx)(fe,{placeholder:"Search either first or last name",value:t,onChange:function(t){return e(E.filterInputUpdated(t.target.value))}}),Object(O.jsx)(je,{children:n.slice(0,15).map((function(t,n){return Object(O.jsx)(pe,{onClick:function(){return e(E.searchTermSelected(t))},children:"".concat(t.first_name," ").concat(t.last_name)},n)}))})]})},he=n(164),ge=(j.a.div(re||(re=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  h4 {\n    margin: 0 10px 0 0;\n  }\n"]))),j.a.button(ae||(ae=Object(f.a)(["\n  padding: 5px 10px;\n  border: none;\n  cursor: pointer;\n  margin: 5px;\n"])))),Oe=function(e){var t=e.label,n=e.currentSort,r=e.descendingSort,a=e.ascendingSort,c=Object(d.b)();return Object(O.jsxs)(ge,{onClick:function(){return c(n===r?E.filterButtonPressed(a):E.filterButtonPressed(r))},children:[t,n===r?Object(O.jsx)(he.a,{}):n===a?Object(O.jsx)(he.b,{}):null]})},ye=j.a.div(ce||(ce=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  h4 {\n    margin: 0 10px 0 0;\n  }\n"]))),me=j.a.input(ie||(ie=Object(f.a)(["\n  padding: 5px;\n"]))),ve=function(e){var t=e.totalResults,n=e.resultsShowing,r=le((function(e){return e.activeSort})),a=le((function(e){return e.dataLimit})),c=Object(d.b)();return Object(O.jsxs)("span",{children:[Object(O.jsxs)(ye,{children:[Object(O.jsx)("h4",{children:"Filter:"}),Object(O.jsx)(xe,{}),Object(O.jsx)("h4",{children:"Sort by:"}),Object(O.jsx)(Oe,{label:"Date of Birth",currentSort:r,ascendingSort:"dob_ascending",descendingSort:"dob_descending"}),Object(O.jsx)(Oe,{label:"Industry",currentSort:r,ascendingSort:"industry_ascending",descendingSort:"industry_descending"}),Object(O.jsx)(Oe,{label:"Salary",currentSort:r,ascendingSort:"salary_ascending",descendingSort:"salary_descending"}),Object(O.jsx)("h4",{children:"Maximum Results:"}),Object(O.jsx)(me,{type:"number",value:a,min:0,onChange:function(e){return c(E.dataLimitModified(parseInt(e.target.value)))}})]}),Object(O.jsx)("p",{children:"".concat(t," results found, showing ").concat(n)})]})},we=j.a.div(se||(se=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: auto;\n  padding: 20px 30px 0 30px;\n  overflow: hidden;\n"]))),_e=n(127),ke=(n(503),j.a.div(oe||(oe=Object(f.a)(["\n  display: flex;\n  flex: 1;\n"])))),Le=function(e){var t=e.list,n=Object.keys(Object.assign.apply(Object,[{}].concat(Object(M.a)(t))));return Object(O.jsx)(ke,{children:Object(O.jsx)(_e.a,{children:function(e){var r=e.height,a=e.width;return Object(O.jsx)(_e.c,{width:a,height:r,headerHeight:30,rowHeight:25,rowCount:t.length,rowGetter:function(e){var n=e.index;return t[n]},children:n.map((function(e,t){return Object(O.jsx)(_e.b,{width:0===t?300:5===t?3e3:a,label:e,dataKey:e},e)}))})}})})},Ce=j.a.div(ue||(ue=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: auto;\n  padding: 0 30px;\n  overflow: hidden;\n"]))),Se=j.a.div(de||(de=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n"])));n(504);u.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(d.a,{store:N,children:Object(O.jsx)(l.a,{basename:"/XYZ",children:Object(O.jsxs)(Se,{children:[Object(O.jsx)(y,{}),Object(O.jsx)(b.a,{exact:!0,path:"/",component:function(){var e=le((function(e){return e.userData})),t=le((function(e){return e.filterQuery})),n=le((function(e){return e.dataLimit})),r=s.a.useMemo((function(){return""===t?e.filter((function(e,t){return!n||t<n})):e.filter((function(e){var n,r;return(null===e||void 0===e||null===(n=e.first_name)||void 0===n?void 0:n.toLowerCase().includes(t.toLowerCase()))||(null===e||void 0===e||null===(r=e.last_name)||void 0===r?void 0:r.toLowerCase().includes(t))||e.first_name&&e.last_name&&e.first_name.toLowerCase().concat(e.last_name.toLowerCase()).replace(/\s/g,"").includes(t.replace(/\s/g,"").toLowerCase())})).filter((function(e,t){return!n||t<n}))}),[t,e,n]);return Object(O.jsxs)(Ce,{children:[Object(O.jsx)("h1",{children:"Customer Information"}),Object(O.jsx)(ve,{totalResults:e.length,resultsShowing:r.length}),Object(O.jsx)(Le,{list:r})]})}},1),Object(O.jsx)(b.a,{exact:!0,path:"/graphs",component:function(){var e=le((function(e){return e.userData})),t=le((function(e){return e.filterQuery})),n=le((function(e){return e.dataLimit})),r=s.a.useMemo((function(){return""===t?e.filter((function(e,t){return!n||t<n})):e.filter((function(e){var n,r;return(null===e||void 0===e||null===(n=e.first_name)||void 0===n?void 0:n.toLowerCase().includes(t.toLowerCase()))||(null===e||void 0===e||null===(r=e.last_name)||void 0===r?void 0:r.toLowerCase().includes(t))||e.first_name&&e.last_name&&e.first_name.toLowerCase().concat(e.last_name.toLowerCase()).replace(/\s/g,"").includes(t.replace(/\s/g,"").toLowerCase())})).filter((function(e,t){return!n||t<n}))}),[t,e,n]);return Object(O.jsxs)(we,{children:[Object(O.jsx)(ve,{totalResults:e.length,resultsShowing:r.length}),Object(O.jsx)("h1",{children:"Graphs"}),Object(O.jsx)(m.a,{width:"100%",aspect:4/3,children:Object(O.jsxs)(v.a,{width:400,height:400,data:r,children:[Object(O.jsx)(w.a,{dataKey:"years_of_experience"}),Object(O.jsx)(_.a,{}),Object(O.jsx)(k.a,{stroke:"#f5f5f5"}),Object(O.jsx)(L.a,{type:"monotone",dataKey:"date_of_birth",stroke:"#ff7300",yAxisId:0}),Object(O.jsx)(L.a,{dataKey:"salary",stroke:"#387908",yAxisId:1})]})})]})}},2)]})})})}),document.getElementById("root"))}},[[505,1,2]]]);
//# sourceMappingURL=main.fcd879cf.chunk.js.map