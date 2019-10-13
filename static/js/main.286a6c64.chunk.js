(this["webpackJsonpheader-test"]=this["webpackJsonpheader-test"]||[]).push([[0],{171:function(e,t,a){e.exports=a(323)},176:function(e,t,a){},323:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(8),i=a.n(r),l=(a(176),a(60)),c=a(44),u=a(155),p=a(91),s="FETCH_OPPORTUNITY",m="NEW_OPPORTUNITY";function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={items:[],item:[]},E=Object(c.c)({opportunities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return y({},e,{items:t.payload});case m:return y({},e,{item:t.payload});default:return e}}}),b=[u.a],O=Object(c.e)(E,{},Object(c.d)(c.a.apply(void 0,b),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),f=a(30),_=a(31),g=a(33),v=a(32),C=a(34),j=(a(124),a(121)),k=a(13),w=a(74),S=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={current:"home"},a.handleClick=function(e){console.log("click ",e),a.setState({current:e.key})},a}return Object(C.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return o.a.createElement(j.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},o.a.createElement(j.a.Item,{key:"home"},o.a.createElement(k.a,{type:"home"}),"Home",o.a.createElement(w.b,{to:"/"})),o.a.createElement(j.a.Item,{key:"users"},o.a.createElement(k.a,{type:"user"}),"Users"),o.a.createElement(j.a.Item,{key:"contacts"},o.a.createElement(k.a,{type:"contacts"}),"Contacts"),o.a.createElement(j.a.Item,{key:"accounts"},o.a.createElement(k.a,{type:"account-book"}),"Accounts"),o.a.createElement(j.a.Item,{key:"opportunities"},o.a.createElement(k.a,{type:"bell"}),"opportunities",o.a.createElement(w.b,{to:"/opportunities"})))}}]),t}(o.a.Component),x=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Home"))}}]),t}(n.Component),I=a(325),N=(a(233),a(326));var P=a(70),T=a(327),D=a(165),G=a(123),L=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).state={opportunity_name:"",opportunity_type:"",lead_source:"",amount:"",close_date:"",opportunity_status:""},a.onChange=a.onChange.bind(Object(P.a)(a)),a.onSubmit=a.onSubmit.bind(Object(P.a)(a)),a}return Object(C.a)(t,e),Object(_.a)(t,[{key:"onChange",value:function(e){console.log(e.target.name),this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={opportunity_name:this.state.opportunity_name,opportunity_type:this.state.opportunity_type,lead_source:this.state.lead_source,amount:this.state.amount,close_date:this.state.close_date,opportunity_status:this.state.opportunity_status};this.props.createOpportunity(t),this.setState({opportunity_name:"",opportunity_type:"",lead_source:"",amount:"",close_date:"",opportunity_status:""})}},{key:"render",value:function(){return o.a.createElement(T.a,{onSubmit:this.onSubmit},o.a.createElement(T.a.Row,null,o.a.createElement(T.a.Group,{as:D.a,controlId:"opportunity_name"},o.a.createElement(T.a.Label,null,"Opportunity Name"),o.a.createElement(T.a.Control,{name:"opportunity_name",placeholder:"Enter Opportunity Name",onChange:this.onChange,value:this.state.opportunity_name})),o.a.createElement(T.a.Group,{as:D.a,controlId:"formGridOpportunityType"},o.a.createElement(T.a.Label,null,"Opportunity Type"),o.a.createElement(T.a.Control,{as:"select",name:"opportunity_type",onChange:this.onChange,value:this.state.opportunity_type},o.a.createElement("option",{value:""},"Choose..."),o.a.createElement("option",{value:"existing_customer"},"Existing Customer"),o.a.createElement("option",{value:"new_customer"},"New Customer")))),o.a.createElement(T.a.Row,null,o.a.createElement(T.a.Group,{as:D.a,controlId:"formGridLeadSource"},o.a.createElement(T.a.Label,null,"Lead Source"),o.a.createElement(T.a.Control,{as:"select",name:"lead_source",onChange:this.onChange,value:this.state.lead_source},o.a.createElement("option",null,"Choose..."),o.a.createElement("option",null,"Advertisement"),o.a.createElement("option",null,"Employee Referral"),o.a.createElement("option",null,"External Referral"),o.a.createElement("option",null,"Social Media"),o.a.createElement("option",null,"Trade Show"),o.a.createElement("option",null,"Other"))),o.a.createElement(T.a.Group,{controlId:"formGridAmount"},o.a.createElement(T.a.Label,null,"Amount"),o.a.createElement(T.a.Control,{type:"number",placeholder:"Enter Amount",name:"amount",onChange:this.onChange,value:this.state.amount}))),o.a.createElement(T.a.Row,null,o.a.createElement(T.a.Group,{as:D.a,controlId:"formGridCloseDate"},o.a.createElement(T.a.Label,null,"Close Date"),o.a.createElement(T.a.Control,{type:"date",placeholder:"DD/MM/YYYY",name:"close_date",onChange:this.onChange,value:this.state.close_date})),o.a.createElement(T.a.Group,{as:D.a,controlId:"formGridOpportunityStatus"},o.a.createElement(T.a.Label,null,"Opportunity Status"),o.a.createElement(T.a.Control,{as:"select",name:"opportunity_status",onChange:this.onChange,value:this.state.opportunity_status},o.a.createElement("option",null,"Choose..."),o.a.createElement("option",null,"Meeting Scheduled"),o.a.createElement("option",null,"Proposal/Price Quote"),o.a.createElement("option",null,"Negotiation/Review"),o.a.createElement("option",null,"Hold"),o.a.createElement("option",null,"Closed Win"),o.a.createElement("option",null,"Closed Lost")))),o.a.createElement(G.a,{variant:"primary",type:"submit"},"Submit"))}}]),t}(n.Component),R=Object(l.b)(null,{createOpportunity:function(e){return function(t){fetch("https://cors-anywhere.herokuapp.com/http://thawing-earth-45113.herokuapp.com/api/opportunities/",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return t({type:m,payload:e})}))}}})(L),H=I.a.Content,A=N.a.Column,F=(N.a.ColumnGroup,function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).state={showForm:!1},a}return Object(C.a)(t,e),Object(_.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchOpportunities()}},{key:"componentWillReceiveProps",value:function(e){e.newOpportunities&&this.props.opportunities.push(e.newOpportunities)}},{key:"formVisibilityHandler",value:function(){this.state.showForm?this.setState({showForm:!1}):this.setState({showForm:!0})}},{key:"render",value:function(){var e=this,t=(this.props.opportunities.map((function(e){return o.a.createElement("div",{key:e.id},o.a.createElement("h3",null,e.opportunity_name),o.a.createElement("p",null,e.opportunity_type))})),this.props.opportunities),a=t.reverse(t);return o.a.createElement("div",null,this.state.showForm?o.a.createElement("div",null,o.a.createElement("div",{className:"text-right mb-3",style:{padding:"0 50px",margin:"16px 0"}},o.a.createElement(G.a,{onClick:function(){return e.formVisibilityHandler()},variant:"primary",size:"sm"},"Close")),o.a.createElement(H,{style:{padding:"0 50px",margin:"16px 0"}},o.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280}},o.a.createElement(R,null)))):o.a.createElement("div",{className:"text-right mb-3",style:{padding:"0 50px",margin:"16px 0"}},o.a.createElement(G.a,{onClick:function(){return e.formVisibilityHandler()},variant:"primary",size:"sm"},"+ New Opportunity")),o.a.createElement(H,{style:{padding:"0 50px",margin:"16px 0"}},o.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280}},o.a.createElement("h2",null,"Opportunities"),o.a.createElement(N.a,{dataSource:a},o.a.createElement(A,{title:"Opport. Name",dataIndex:"opportunity_name",key:"opportunity_name"}),o.a.createElement(A,{title:"Opport. Type",dataIndex:"opportunity_type",key:"opportunity_type"}),o.a.createElement(A,{title:"Lead Source",dataIndex:"lead_source",key:"lead_source"}),o.a.createElement(A,{title:"Amount",dataIndex:"amount",key:"amount"}),o.a.createElement(A,{title:"Opport. Status",dataIndex:"opportunity_status",key:"opportunity_status"}),o.a.createElement(A,{title:"Close Date",dataIndex:"close_date",key:"close_date"}),o.a.createElement(A,{title:"Created At",dataIndex:"created_at",key:"created_at"})))))}}]),t}(n.Component)),W=Object(l.b)((function(e){return{opportunities:e.opportunities.items,newOpportunities:e.opportunities.item}}),{fetchOpportunities:function(){return function(e){fetch("https://cors-anywhere.herokuapp.com/http://thawing-earth-45113.herokuapp.com/api/opportunities/",{method:"GET",headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(e){return e.json()})).then((function(t){return e({type:s,payload:t})}))}}})(F),M=a(48),U=I.a.Footer,X=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return o.a.createElement(U,{style:{textAlign:"center"}},"\xa92019 Created by Unisoft Business Solution")}}]),t}(n.Component);var Y=function(){return o.a.createElement(l.a,{store:O},o.a.createElement(w.a,{basename:"/"},o.a.createElement(I.a,{className:"layout"},o.a.createElement(S,null),o.a.createElement(M.a,{exact:!0,path:"/",component:x}),o.a.createElement(M.a,{path:"/opportunities",component:W}),o.a.createElement(X,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[171,1,2]]]);
//# sourceMappingURL=main.286a6c64.chunk.js.map