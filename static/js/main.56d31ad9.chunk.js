(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(101)},101:function(e,t,a){"use strict";a.r(t);var n=a(38),r=a(23),l=a(24),c=a(26),o=a(25),s=a(27),i=a(17),d=a(0),m=a.n(d),h=a(18),u=a.n(h),p=a(3),E=(a(116),a(45)),g=a.n(E),b=a(46),f=a.n(b),v=a(47),y=a.n(v),C=a(48),k=a.n(C),x=a(49),S=a.n(x),O=a(50),j=a.n(O),_=a(51),A=a.n(_),z=a(52),w=a.n(z),I=a(19),V={},W=[],K=g.a.create({headers:{"Access-Control-Allow-Origin":"*","X-Requested-With":"XMLHttpRequest"}});I.send("VKWebAppInit",{});var T=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={ready:!1,activeStory:"feed",access_token:"",register:!0},a.onStoryChange=a.onStoryChange.bind(Object(i.a)(Object(i.a)(a))),a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"componentDidMount",value:function(){var e=this;I.subscribe(function(t){console.log(t),"VKWebAppGetUserInfoResult"===t.detail.type?(V=t.detail.data,console.log(V),e.setState({ready:!0}),K.post("https://cors-anywhere.herokuapp.com/http://35.228.42.210:5000/get_user",{user_id:V.id}).then(function(e){console.log(e.data.result)}).catch(function(e){console.log(e)})):"VKWebAppAccessTokenReceived"===t.detail.type?(e.state.access_token=t.detail.data.access_token,I.send("VKWebAppCallAPIMethod",{method:"groups.get",request_id:"groups.get",params:{extended:1,user_id:V.id,v:"5.101",fields:"activity",lang:"ru",count:1e3,access_token:e.state.access_token}})):"VKWebAppCallAPIMethodResult"===t.detail.type&&"groups.get"===t.detail.data.request_id&&(W=t.detail.data.response.items)}),I.send("VKWebAppGetUserInfo",{}),I.send("VKWebAppGetAuthToken",{app_id:7403106,scope:"groups,friends"})}},{key:"render",value:function(){var e=this;return this.state.ready?this.state.register?m.a.createElement(q,{setIndex:function(t){return e.setState({register:!1})}}):m.a.createElement(p.e,{activeStory:this.state.activeStory,tabbar:m.a.createElement(p.s,null,m.a.createElement(p.t,{onClick:this.onStoryChange,selected:"feed"===this.state.activeStory,"data-story":"feed",text:"\u041b\u0435\u043d\u0442\u0430"},m.a.createElement(y.a,null)),m.a.createElement(p.t,{onClick:this.onStoryChange,selected:"discover"===this.state.activeStory,"data-story":"discover",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},m.a.createElement(f.a,null)),m.a.createElement(p.t,{onClick:this.onStoryChange,selected:"messages"===this.state.activeStory,"data-story":"messages",label:"12",text:"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"},m.a.createElement(k.a,null)))},m.a.createElement(p.v,{id:"feed",activePanel:"feed"},m.a.createElement(p.l,{id:"feed"},m.a.createElement(p.m,null,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"),m.a.createElement(p.h,null,m.a.createElement(p.k,null,m.a.createElement(p.c,{before:m.a.createElement(p.a,{size:72}),size:"l",description:"\u0427\u0435 \u0434\u0435\u0441\u043a\u0440\u0438\u043f\u0448\u043e\u043d?",bottomContent:m.a.createElement("div",{style:{display:"flex"}},m.a.createElement(p.b,{size:"m"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))},"\u042d\u043a\u043e\u043d\u043e\u043c\u0438\u043a\u0430"),m.a.createElement(p.c,{before:m.a.createElement(p.a,{size:72}),size:"l",description:"\u0427\u0435 \u0434\u0435\u0441\u043a\u0440\u0438\u043f\u0448\u043e\u043d?",bottomContent:m.a.createElement("div",{style:{display:"flex"}},m.a.createElement(p.b,{onClick:function(){e.setState({activeStory:"messages"})},size:"m"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))},"\u0424\u0438\u0437\u0438\u043a\u0430"),m.a.createElement(p.c,{before:m.a.createElement(p.a,{size:72}),size:"l",description:"\u0427\u0435 \u0434\u0435\u0441\u043a\u0440\u0438\u043f\u0448\u043e\u043d?",bottomContent:m.a.createElement("div",{style:{display:"flex"}},m.a.createElement(p.b,{size:"m"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))},"\u0425\u0438\u043c\u0438\u044f"))))),m.a.createElement(p.v,{id:"discover",activePanel:"discover"},m.a.createElement(p.l,{id:"discover",separator:!1},m.a.createElement(p.p,{right:m.a.createElement(p.n,null)},m.a.createElement(p.o,{before:m.a.createElement(p.a,{size:48,src:V.photo_100})},V.first_name," ",V.last_name)),m.a.createElement(p.h,null,m.a.createElement(p.c,{before:m.a.createElement(j.a,null)},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),m.a.createElement(p.c,{before:m.a.createElement(S.a,null)},"\u041d\u0435 \u0431\u0435\u0441\u043f\u043e\u043a\u043e\u0438\u0442\u044c"),m.a.createElement(p.c,{before:m.a.createElement(A.a,null)},"\u0423\u0447\u0451\u0442\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c"),m.a.createElement(p.c,{before:m.a.createElement(w.a,null)},"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435"))))):m.a.createElement("div",null)}}]),t}(m.a.Component),q=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={activeStory:"discover",sex:"men",pref:[],age:18,description:""},a.handleChange=a.handleChange.bind(Object(i.a)(Object(i.a)(a))),a.onStoryChange=a.onStoryChange.bind(Object(i.a)(Object(i.a)(a))),a.handleCheckbox=a.handleCheckbox.bind(Object(i.a)(Object(i.a)(a))),a.register_user=a.register_user.bind(Object(i.a)(Object(i.a)(a))),a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=e.currentTarget,a=t.name,r=t.value;console.log(a,r),this.setState(Object(n.a)({},a,r))}},{key:"handleCheckbox",value:function(e){var t=e.currentTarget,a=t.name,n=t.value;console.log(a,n),e.currentTarget.checked?this.state.pref.push(a):this.state.pref.splice(this.state.pref.indexOf(a),1)}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"register_user",value:function(){console.log(W),K.post("https://cors-anywhere.herokuapp.com/http://35.228.42.210:5000/signup",{user_id:V.id,age:this.state.age,geo:V.city.title,groups:W,description:this.state.description,gender:this.state.sex,preferences:this.state.pref}).then(function(e){e.data.error&&alert(e.data.error)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return m.a.createElement(p.q,{activeView:this.state.activeStory},m.a.createElement(p.v,{id:"discover",activePanel:"discover"},m.a.createElement(p.l,{id:"discover",separator:!1},m.a.createElement(p.p,{right:m.a.createElement(p.n,null)},m.a.createElement(p.o,{before:m.a.createElement(p.a,{size:48,src:V.photo_100})},V.first_name," ",V.last_name)),m.a.createElement(p.h,null,m.a.createElement(p.f,null,m.a.createElement(p.g,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0432\u043e\u0437\u0440\u0430\u0441\u0442"},m.a.createElement(p.j,{name:"age",onChange:this.handleChange,type:"text",placeholder:"18"}))),m.a.createElement(p.f,null,m.a.createElement(p.u,{onChange:this.handleChange,name:"description",top:"\u041e \u0441\u0435\u0431\u0435"})),m.a.createElement(p.f,null,m.a.createElement(p.r,{name:"sex",onChange:this.handleChange,top:"\u0412\u0430\u0448 \u0433\u0435\u043d\u0434\u0435\u0440",placeholder:""},m.a.createElement("option",{value:"male-straight"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),m.a.createElement("option",{value:"female-straight"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),m.a.createElement("option",{value:"male-homo"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),m.a.createElement("option",{value:"female-homo"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),m.a.createElement("option",{value:"male-bi"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0411\u0438"),m.a.createElement("option",{value:"female-bi"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0411\u0438"),m.a.createElement("option",{value:"non-binary"},"\u041d\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439"))),m.a.createElement(p.h,{header:m.a.createElement(p.i,{mode:"secondary"},"\u0412\u0430\u0448\u0438 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u044f")},m.a.createElement(p.f,null,m.a.createElement(p.d,{onChange:this.handleCheckbox,name:"male-straight"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),m.a.createElement(p.d,{onChange:this.handleCheckbox,name:"female-straight"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),m.a.createElement(p.d,{onChange:this.handleCheckbox,name:"male-homo"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),m.a.createElement(p.d,{onChange:this.handleCheckbox,name:"female-homo"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),m.a.createElement(p.d,{onChange:this.handleCheckbox,name:"male-bi"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0411\u0438"),m.a.createElement(p.d,{onChange:this.handleCheckbox,name:"female-bi"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0411\u0438"),m.a.createElement(p.d,{onChange:this.handleCheckbox,name:"non-binary"},"\u041d\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439"),m.a.createElement(p.b,{mode:"secondary",onClick:function(){e.register_user(),e.props.setIndex()},size:"xl"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c")))))))}}]),t}(m.a.Component);u.a.render(m.a.createElement(T,null),document.getElementById("root"))}},[[100,1,2]]]);
//# sourceMappingURL=main.56d31ad9.chunk.js.map