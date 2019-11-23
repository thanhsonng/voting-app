(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(46)},34:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),l=a.n(o),i=a(50),c=(a(28),a(32),a(34),a(14)),s=a.n(c),u=a(18),m=a(3),p=a(4),h=a(6),d=a(5),b=a(7),v=a(1),f=a(51),O=a(49),E=a(52),g=a(48),j=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light"},r.a.createElement(g.a,{to:"/",className:"navbar-brand"},"FCC Voting App"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.a,{to:"/my_polls",className:"nav-link"},"My Polls")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.a,{to:"/new_poll",className:"nav-link"},"New Poll"))),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"navbar-text"},"Hi, ",this.props.username)),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.a,{to:"/login",className:"nav-link active",onClick:this.props.handleLogOut},"Log Out")))))}}]),t}(n.Component),y=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light"},r.a.createElement(g.a,{to:"/",className:"navbar-brand"},"FCC Voting App"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.a,{to:"/login",className:"nav-link"},"Log In")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.a,{to:"/signup",className:"nav-link active"},"Sign Up")))))}}]),t}(n.Component),k=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",{className:"mb-4"},this.props.text)}}]),t}(n.Component),N=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"handleDeletePoll",value:function(e,t){var a=this;window.confirm("Delete poll ".concat(t,"?"))&&fetch("https://fcc-voting-app-backend.herokuapp.com"+"/my_polls/".concat(e),{method:"DELETE",headers:{Authorization:localStorage.getItem("auth_token")}}).then(function(t){t.ok&&a.props.deletePoll(e)})}},{key:"render",value:function(){var e=this.props,t=e.index,a=e.id,n=e.title,o=e.question,l=e.createdBy,i=e.votes,c=e.username;return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,r.a.createElement(g.a,{to:"polls/".concat(a),className:"text-dark"},r.a.createElement("strong",null,n)),r.a.createElement("ul",{className:"list-inline mb-0"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("small",null,o)),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("small",null,"Created by: ",l)),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("small",null,"Votes: ",i)))),l===c&&r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-link text-dark",onClick:this.handleDeletePoll.bind(this,a,n)},"Delete")))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={polls:[],isLoaded:!1},a.updatePolls=a.updatePolls.bind(Object(v.a)(Object(v.a)(a))),a.deletePoll=a.deletePoll.bind(Object(v.a)(Object(v.a)(a))),a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchData(this.props.path,this.props.options,this.updatePolls)}},{key:"updatePolls",value:function(e){this.setState({polls:e,isLoaded:!0})}},{key:"deletePoll",value:function(e){this.setState({polls:this.state.polls.filter(function(t){return t.id!==e})})}},{key:"render",value:function(){var e=this;return this.state.isLoaded?r.a.createElement("table",{className:"table table-light"},r.a.createElement("tbody",null,this.state.polls.map(function(t,a){return r.a.createElement(N,{key:t.title+a,deletePoll:e.deletePoll,index:a,id:t.id,title:t.title,question:t.question,createdBy:t.created_by,votes:t.votes.length,username:e.props.username})}))):r.a.createElement("h3",null,"Loading...")}}]),t}(n.Component),w=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-4"},r.a.createElement(k,{text:"All Polls"}),r.a.createElement(C,{username:this.props.username,fetchData:this.props.fetchData,path:"",options:{}}))}}]),t}(n.Component),S=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"validatePassword",value:function(){var e=document.getElementById("inputPassword"),t=document.getElementById("inputPasswordConfirmation");e.value!==t.value?t.setCustomValidity("Passwords don't match"):t.setCustomValidity("")}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputUsername"},"Username"),r.a.createElement("input",{name:"username",type:"text",required:!0,className:"form-control",id:"inputUsername",placeholder:"Enter unique username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputPassword"},"Password"),r.a.createElement("input",{name:"password",type:"password",required:!0,className:"form-control",id:"inputPassword",placeholder:"Password"})),this.props.passwordConfirmation&&r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputPasswordConfirmation"},"Password confirmation"),r.a.createElement("input",{name:"password_confirmation",type:"password",required:!0,className:"form-control",id:"inputPasswordConfirmation",placeholder:"Re-type password",onChange:this.validatePassword.bind(this)})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Log In"))}}]),t}(n.Component),D=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-4"},r.a.createElement(k,{text:"Log In"}),r.a.createElement(S,{handleSubmit:this.props.handleLogIn}))}}]),t}(n.Component),x=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-4"},r.a.createElement(k,{text:"Sign Up"}),r.a.createElement(S,{handleSubmit:this.props.handleSignUp,passwordConfirmation:!0}))}}]),t}(n.Component),P=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e={headers:{Authorization:localStorage.getItem("auth_token")}};return r.a.createElement("div",{className:"container mt-4"},r.a.createElement(k,{text:"My Polls"}),r.a.createElement(C,{username:this.props.username,fetchData:this.props.fetchData,path:"/my_polls",options:e}))}}]),t}(n.Component),I=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).state={votes:[]},e.addVoteOption=e.addVoteOption.bind(Object(v.a)(Object(v.a)(e))),e.voteNameChange=e.voteNameChange.bind(Object(v.a)(Object(v.a)(e))),e.voteForOption=e.voteForOption.bind(Object(v.a)(Object(v.a)(e))),e.unvoteForOption=e.unvoteForOption.bind(Object(v.a)(Object(v.a)(e))),e.removeVoteOption=e.removeVoteOption.bind(Object(v.a)(Object(v.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(v.a)(Object(v.a)(e))),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"addVoteOption",value:function(){this.setState({votes:this.state.votes.concat({name:"",times:0})})}},{key:"voteNameChange",value:function(e,t){this.setState({votes:this.state.votes.map(function(a,n){return n===t?{name:e.target.value,times:a.times}:a})})}},{key:"voteForOption",value:function(e){this.setState({votes:this.state.votes.map(function(t,a){return a===e?{name:t.name,times:1}:t})})}},{key:"unvoteForOption",value:function(e){this.setState({votes:this.state.votes.map(function(t,a){return a===e?{name:t.name,times:0}:t})})}},{key:"removeVoteOption",value:function(e){this.setState({votes:this.state.votes.filter(function(t,a){return a!==e})})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=new FormData(e.target);this.props.fetchData("/my_polls",{method:"POST",body:a,headers:{Authorization:localStorage.getItem("auth_token")}},function(e){t.props.redirect("polls/".concat(e.id))})}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputTitle"},"Title"),r.a.createElement("input",{name:"title",type:"text",required:!0,className:"form-control",id:"inputTitle",placeholder:"Enter poll title"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputQuestion"},"Question"),r.a.createElement("input",{name:"question",type:"text",required:!0,className:"form-control",id:"inputQuestion",placeholder:"Ask something"})),r.a.createElement("hr",null),this.state.votes.map(function(t,a){return r.a.createElement("div",{key:"option"+a,className:"form-group"},r.a.createElement("label",{htmlFor:"inputVote"+a,className:"d-block"},"Vote option ",a+1),r.a.createElement("input",{name:"votes_attributes[][name]",type:"text",className:"form-control d-inline-block w-75",id:"inputVote"+a,placeholder:"Option ".concat(a+1),onChange:function(t){return e.voteNameChange(t,a)},value:t.name,autoFocus:!0}),r.a.createElement("input",{name:"votes_attributes[][times]",type:"hidden",value:t.times}),t.times?r.a.createElement("button",{type:"button",className:"btn btn-link",onClick:function(){return e.unvoteForOption(a)}},"Unvote"):r.a.createElement("button",{type:"button",className:"btn btn-link",onClick:function(){return e.voteForOption(a)}},"Vote"),r.a.createElement("button",{type:"button",className:"btn btn-link text-danger",onClick:function(){return e.removeVoteOption(a)}},"Remove option"))}),r.a.createElement("button",{type:"button",className:"btn btn-light d-block mb-4",onClick:this.addVoteOption},"Add vote option"),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Create poll"))}}]),t}(n.Component),U=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-4"},r.a.createElement(k,{text:"New Poll"}),r.a.createElement(I,{fetchData:this.props.fetchData,redirect:this.props.redirect}))}}]),t}(n.Component),L=a(22),V=function(e){function t(e){var a;Object(m.a)(this,t);var n=(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).props.votes;return a.state={otherOption:"",voteOption:n.length?n[0].id:0},a.selectOptionChange=a.selectOptionChange.bind(Object(v.a)(Object(v.a)(a))),a.inputChange=a.inputChange.bind(Object(v.a)(Object(v.a)(a))),a.createNewVote=a.createNewVote.bind(Object(v.a)(Object(v.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(Object(v.a)(a))),a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"selectOptionChange",value:function(e){this.setState({voteOption:Number(e.target.value),otherOption:""})}},{key:"inputChange",value:function(e){this.setState({otherOption:e.target.value})}},{key:"createNewVote",value:function(e){this.props.fetchData("".concat(this.props.pollUrl,"/votes"),{method:"POST",body:JSON.stringify({name:e}),headers:{"Content-Type":"application/json"}},this.props.pollUpdated)}},{key:"updateVote",value:function(e){this.props.fetchData("".concat(this.props.pollUrl,"/votes/").concat(e),{method:"PUT"},this.props.pollUpdated)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.voteOption,n=t.otherOption;a?this.updateVote(a):this.createNewVote(n)}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{name:"voteOption",className:"form-control",onChange:this.selectOptionChange},r.a.createElement("option",{disabled:!0},"Choose an option"),this.props.votes.map(function(e,t){return r.a.createElement("option",{key:"vote"+t,value:e.id},e.name)}),r.a.createElement("option",{value:"0"},"Your own option"))),!this.state.voteOption&&r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{name:"otherOption",type:"text",className:"form-control",required:!0,id:"inputVoteOption",placeholder:"Type here",onChange:this.inputChange})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit vote"))}}]),t}(n.Component),F=a(19),_=a.n(F),q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).drawGraph=a.drawGraph.bind(Object(v.a)(Object(v.a)(a))),a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"drawGraph",value:function(){var e=this.props.votes,t=["#037AFB","#6C757D","#55A747","#DC3C45","#F8C133","#48A3B8","#343A40"];this.graph&&this.graph.destroy();var a=[];for(var n in e)a.push(t[n%t.length]);this.graph=new _.a(document.getElementById("pollGraph"),{type:"pie",data:{labels:e.map(function(e){return e.name}),datasets:[{label:"# of Votes",data:e.map(function(e){return e.times}),backgroundColor:a,borderWidth:0}]}})}},{key:"componentDidMount",value:function(){this.drawGraph()}},{key:"componentDidUpdate",value:function(){this.drawGraph()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("canvas",{id:"pollGraph"}))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={id:null,title:"",question:"",created_by:"",votes:[],isLoaded:!1},a.pollUpdated=a.pollUpdated.bind(Object(v.a)(Object(v.a)(a))),a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchData(this.props.url,{},function(t){e.setState(Object(L.a)({},t,{isLoaded:!0}))})}},{key:"pollUpdated",value:function(e){this.setState(e)}},{key:"render",value:function(){return this.state.isLoaded?r.a.createElement("div",{className:"container mt-4"},r.a.createElement(k,{text:this.state.title}),r.a.createElement("p",{className:"lead"},this.state.question),r.a.createElement("p",{className:"small"},"by ",this.state.created_by),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement(V,{votes:this.state.votes,fetchData:this.props.fetchData,pollUrl:this.props.url,pollUpdated:this.pollUpdated})),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement(q,{votes:this.state.votes})))):r.a.createElement("div",{className:"container mt-4"},r.a.createElement("h3",null,"Loading..."))}}]),t}(n.Component),T=function(e){function t(){var e;Object(m.a)(this,t),e=Object(h.a)(this,Object(d.a)(t).call(this));var a=localStorage.getItem("auth_token"),n=localStorage.getItem("username");return e.state=a&&n?{username:n,error:null}:{username:"",error:null},e.saveUserInfo=e.saveUserInfo.bind(Object(v.a)(Object(v.a)(e))),e.removeUserInfo=e.removeUserInfo.bind(Object(v.a)(Object(v.a)(e))),e.redirect=e.redirect.bind(Object(v.a)(Object(v.a)(e))),e.fetchData=e.fetchData.bind(Object(v.a)(Object(v.a)(e))),e.handleLogIn=e.handleLogIn.bind(Object(v.a)(Object(v.a)(e))),e.handleLogOut=e.handleLogOut.bind(Object(v.a)(Object(v.a)(e))),e.handleSignUp=e.handleSignUp.bind(Object(v.a)(Object(v.a)(e))),e.handleError=e.handleError.bind(Object(v.a)(Object(v.a)(e))),e}return Object(b.a)(t,e),Object(p.a)(t,[{key:"saveUserInfo",value:function(e){localStorage.setItem("auth_token",e.auth_token),localStorage.setItem("username",e.user.username),this.setState({username:e.user.username})}},{key:"removeUserInfo",value:function(){localStorage.removeItem("auth_token"),localStorage.removeItem("username"),this.setState({username:""})}},{key:"redirect",value:function(e){this.props.history.push(e)}},{key:"fetchData",value:function(e,t,a){fetch("https://fcc-voting-app-backend.herokuapp.com"+e,t).then(function(){var e=Object(u.a)(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(a=e.sent,t.ok){e.next=7;break}throw new Error(a.message);case 7:return e.abrupt("return",a);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).then(a).catch(this.handleError)}},{key:"handleLogIn",value:function(e){var t=this;e.preventDefault();var a=new FormData(e.target);this.fetchData("/login",{method:"POST",body:a},function(e){t.saveUserInfo(e),t.redirect("/")})}},{key:"handleLogOut",value:function(){this.removeUserInfo()}},{key:"handleSignUp",value:function(e){var t=this;e.preventDefault();var a=new FormData(e.target);this.fetchData("/signup",{method:"POST",body:a},function(e){t.saveUserInfo(e),t.redirect("/")})}},{key:"handleError",value:function(e){this.setState({error:e.message})}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.username;return a?r.a.createElement("div",{className:"container mt-4"},r.a.createElement("code",{className:"text-dark"},r.a.createElement("h1",{className:"text-danger"},"Error"),r.a.createElement("p",null,a))):r.a.createElement("div",{className:"App"},n?r.a.createElement(j,{username:n,handleLogOut:this.handleLogOut}):r.a.createElement(y,{handleLogIn:this.handleLogIn}),r.a.createElement(f.a,null,r.a.createElement(O.a,{path:"/",exact:!0,render:function(){return r.a.createElement(w,{username:n,fetchData:e.fetchData})}}),r.a.createElement(O.a,{path:"/login",exact:!0,render:function(){return r.a.createElement(D,{handleLogIn:e.handleLogIn})}}),r.a.createElement(O.a,{path:"/signup",exact:!0,render:function(){return r.a.createElement(x,{handleSignUp:e.handleSignUp})}}),r.a.createElement(O.a,{path:"/my_polls",exact:!0,render:function(){return r.a.createElement(P,{username:n,fetchData:e.fetchData})}}),r.a.createElement(O.a,{path:"/new_poll",exact:!0,render:function(){return r.a.createElement(U,{fetchData:e.fetchData,redirect:e.redirect})}}),r.a.createElement(O.a,{path:"/polls/:id",exact:!0,render:function(t){var a=t.match;return r.a.createElement(A,{url:a.url,fetchData:e.fetchData})}})))}}]),t}(n.Component),B=Object(E.a)(T);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(43).config(),l.a.render(r.a.createElement(i.a,{basename:"/fcc-voting-app"},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.b88510c7.chunk.js.map