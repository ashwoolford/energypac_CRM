(this["webpackJsonpheader-test"]=this["webpackJsonpheader-test"]||[]).push([[0],{180:function(e,t,n){e.exports=n(349)},185:function(e,t,n){},349:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(8),i=n.n(r),l=(n(185),n(61)),c=n(45),u=n(164),p=n(92),s="FETCH_OPPORTUNITY",m="NEW_OPPORTUNITY",h="DELETE_OPPORTUNITY";function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={items:[],item:[]},f=Object(c.c)({opportunities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return d({},e,{items:t.payload});case h:return d({},e,{items:e.items.filter((function(e){return e.id!==t.payload}))});case m:return d({},e,{item:t.payload});default:return e}}}),O=[u.a],b=Object(c.e)(f,{},Object(c.d)(c.a.apply(void 0,O),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),g=n(31),v=n(32),_=n(34),C=n(33),j=n(35),k=(n(126),n(123)),w=n(13),S=n(75),I=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(_.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(o)))).state={current:"home"},n.handleClick=function(e){console.log("click ",e),n.setState({current:e.key})},n}return Object(j.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(k.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},o.a.createElement(k.a.Item,{key:"home"},o.a.createElement(w.a,{type:"home"}),"Home",o.a.createElement(S.b,{to:"/"})),o.a.createElement(k.a.Item,{key:"users"},o.a.createElement(w.a,{type:"user"}),"Users"),o.a.createElement(k.a.Item,{key:"contacts"},o.a.createElement(w.a,{type:"contacts"}),"Contacts"),o.a.createElement(k.a.Item,{key:"accounts"},o.a.createElement(w.a,{type:"account-book"}),"Accounts"),o.a.createElement(k.a.Item,{key:"opportunities"},o.a.createElement(w.a,{type:"bell"}),"opportunities",o.a.createElement(S.b,{to:"/opportunities"})))}}]),t}(o.a.Component),x=function(e){function t(){return Object(g.a)(this,t),Object(_.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Home"))}}]),t}(a.Component),T=n(351),N=(n(242),n(353)),P=n(352);n(243);var D=n(71),L=n(354),R=n(174),G=n(125),H=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(_.a)(this,Object(C.a)(t).call(this,e))).state={opportunity_name:"",opportunity_type:"",lead_source:"",amount:"",close_date:"",opportunity_status:""},n.onChange=n.onChange.bind(Object(D.a)(n)),n.onSubmit=n.onSubmit.bind(Object(D.a)(n)),n}return Object(j.a)(t,e),Object(v.a)(t,[{key:"onChange",value:function(e){console.log(e.target.name),this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={opportunity_name:this.state.opportunity_name,opportunity_type:this.state.opportunity_type,lead_source:this.state.lead_source,amount:this.state.amount,close_date:this.state.close_date,opportunity_status:this.state.opportunity_status};this.props.createOpportunity(t),this.setState({opportunity_name:"",opportunity_type:"",lead_source:"",amount:"",close_date:"",opportunity_status:""})}},{key:"render",value:function(){return o.a.createElement(L.a,{onSubmit:this.onSubmit},o.a.createElement(L.a.Row,null,o.a.createElement(L.a.Group,{as:R.a,controlId:"opportunity_name"},o.a.createElement(L.a.Label,null,"Opportunity Name"),o.a.createElement(L.a.Control,{name:"opportunity_name",placeholder:"Enter Opportunity Name",onChange:this.onChange,value:this.state.opportunity_name})),o.a.createElement(L.a.Group,{as:R.a,controlId:"formGridOpportunityType"},o.a.createElement(L.a.Label,null,"Opportunity Type"),o.a.createElement(L.a.Control,{as:"select",name:"opportunity_type",onChange:this.onChange,value:this.state.opportunity_type},o.a.createElement("option",{value:""},"Choose..."),o.a.createElement("option",{value:"existing_customer"},"Existing Customer"),o.a.createElement("option",{value:"new_customer"},"New Customer")))),o.a.createElement(L.a.Row,null,o.a.createElement(L.a.Group,{as:R.a,controlId:"formGridLeadSource"},o.a.createElement(L.a.Label,null,"Lead Source"),o.a.createElement(L.a.Control,{as:"select",name:"lead_source",onChange:this.onChange,value:this.state.lead_source},o.a.createElement("option",null,"Choose..."),o.a.createElement("option",null,"Advertisement"),o.a.createElement("option",null,"Employee Referral"),o.a.createElement("option",null,"External Referral"),o.a.createElement("option",null,"Social Media"),o.a.createElement("option",null,"Trade Show"),o.a.createElement("option",null,"Other"))),o.a.createElement(L.a.Group,{controlId:"formGridAmount"},o.a.createElement(L.a.Label,null,"Amount"),o.a.createElement(L.a.Control,{type:"number",placeholder:"Enter Amount",name:"amount",onChange:this.onChange,value:this.state.amount}))),o.a.createElement(L.a.Row,null,o.a.createElement(L.a.Group,{as:R.a,controlId:"formGridCloseDate"},o.a.createElement(L.a.Label,null,"Close Date"),o.a.createElement(L.a.Control,{type:"date",placeholder:"DD/MM/YYYY",name:"close_date",onChange:this.onChange,value:this.state.close_date})),o.a.createElement(L.a.Group,{as:R.a,controlId:"formGridOpportunityStatus"},o.a.createElement(L.a.Label,null,"Opportunity Status"),o.a.createElement(L.a.Control,{as:"select",name:"opportunity_status",onChange:this.onChange,value:this.state.opportunity_status},o.a.createElement("option",null,"Choose..."),o.a.createElement("option",null,"Meeting Scheduled"),o.a.createElement("option",null,"Proposal/Price Quote"),o.a.createElement("option",null,"Negotiation/Review"),o.a.createElement("option",null,"Hold"),o.a.createElement("option",null,"Closed Win"),o.a.createElement("option",null,"Closed Lost")))),o.a.createElement(G.a,{variant:"primary",type:"submit"},"Submit"))}}]),t}(a.Component),A=Object(l.b)(null,{createOpportunity:function(e){return function(t){fetch("https://cors-anywhere.herokuapp.com/http://thawing-earth-45113.herokuapp.com/api/opportunities/",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return t({type:m,payload:e})}))}}})(H),W=T.a.Content,X=(N.a.Column,N.a.ColumnGroup,function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(_.a)(this,Object(C.a)(t).call(this,e))).state={showForm:!1},n}return Object(j.a)(t,e),Object(v.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchOpportunities()}},{key:"componentWillReceiveProps",value:function(e){e.newOpportunities&&this.props.opportunities.push(e.newOpportunities)}},{key:"formVisibilityHandler",value:function(){this.state.showForm?this.setState({showForm:!1}):this.setState({showForm:!0})}},{key:"render",value:function(){var e=this,t=[{title:"Opport. Name",dataIndex:"opportunity_name",key:"opportunity_name"},{title:"Opport. Type",dataIndex:"opportunity_type",key:"opportunity_type"},{title:"Lead Source",dataIndex:"lead_source",key:"lead_source"},{title:"Amount",key:"amount",dataIndex:"amount"},{title:"Action",key:"action",render:function(t,n){return o.a.createElement("span",null,o.a.createElement("a",null," ",n.id),o.a.createElement(P.a,{type:"vertical"}),o.a.createElement("a",{onClick:e.props.deleteOpportunity.bind(e,n.id)},"Delete"))}}],n=this.props.opportunities,a=n.reverse(n);return o.a.createElement("div",null,this.state.showForm?o.a.createElement("div",null,o.a.createElement("div",{className:"text-right mb-3",style:{padding:"0 50px",margin:"16px 0"}},o.a.createElement(G.a,{onClick:function(){return e.formVisibilityHandler()},variant:"primary",size:"sm"},"Close")),o.a.createElement(W,{style:{padding:"0 50px",margin:"16px 0"}},o.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280}},o.a.createElement(A,null)))):o.a.createElement("div",{className:"text-right mb-3",style:{padding:"0 50px",margin:"16px 0"}},o.a.createElement(G.a,{onClick:function(){return e.formVisibilityHandler()},variant:"primary",size:"sm"},"+ New Opportunity")),o.a.createElement(W,{style:{padding:"0 50px",margin:"16px 0"}},o.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280}},o.a.createElement("h2",null,"Opportunities"),o.a.createElement(N.a,{columns:t,dataSource:a}))))}}]),t}(a.Component)),F=Object(l.b)((function(e){return{opportunities:e.opportunities.items,newOpportunities:e.opportunities.item}}),{fetchOpportunities:function(){return function(e){fetch("https://cors-anywhere.herokuapp.com/http://thawing-earth-45113.herokuapp.com/api/opportunities/",{method:"GET",headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(e){return e.json()})).then((function(t){return e({type:s,payload:t})}))}},deleteOpportunity:function(e){return console.log("this is my "+e),function(t){fetch("https://cors-anywhere.herokuapp.com/http://thawing-earth-45113.herokuapp.com/api/opportunities/"+e+"/",{method:"DELETE",headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(n){return t({type:h,payload:e})})).catch((function(e){return console.log(e)}))}}})(X),M=n(49),U=T.a.Footer,Y=function(e){function t(){return Object(g.a)(this,t),Object(_.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(U,{style:{textAlign:"center"}},"\xa92019 Created by Unisoft Business Solution")}}]),t}(a.Component);var V=function(){return o.a.createElement(l.a,{store:b},o.a.createElement(S.a,{basename:"/"},o.a.createElement(T.a,{className:"layout"},o.a.createElement(I,null),o.a.createElement(M.a,{exact:!0,path:"/",component:x}),o.a.createElement(M.a,{path:"/opportunities",component:F}),o.a.createElement(Y,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[180,1,2]]]);
//# sourceMappingURL=main.be522c65.chunk.js.map