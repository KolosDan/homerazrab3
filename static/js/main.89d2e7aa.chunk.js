(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(23),r=a(24),l=a(25),c=a(27),o=a(26),s=a(28),i=a(16),h=a(0),m=a.n(h),d=a(18),u=a.n(d),p=a(3),g=(a(115),a(49)),E=a.n(g),f=a(50),b=a.n(f),v=a(51),C=a.n(v),y=a(52),k=a.n(y),x=(a(133),a(134),a(135),a(136),a(19)),O={},S=[],j={},_={},w=E.a.create({headers:{"Access-Control-Allow-Origin":"*","X-Requested-With":"XMLHttpRequest"}});x.send("VKWebAppInit",{});var z=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={ready:!1,activeStory:"feed",access_token:"",register:!0,loader:!0},a.onStoryChange=a.onStoryChange.bind(Object(i.a)(Object(i.a)(a))),a.handleChange=a.handleChange.bind(Object(i.a)(Object(i.a)(a))),a.handleCheckbox=a.handleCheckbox.bind(Object(i.a)(Object(i.a)(a))),a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=e.currentTarget,a=t.name,r=t.value;console.log(a,r),this.setState(Object(n.a)({},a,r))}},{key:"handleCheckbox",value:function(e){var t=e.currentTarget,a=t.name,n=t.value;console.log(a,n),e.currentTarget.checked?this.state.pref.push(a):this.state.pref.splice(this.state.pref.indexOf(a),1)}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"componentDidMount",value:function(){var e=this;x.subscribe(function(t){console.log(t);var a=e;_=e,"VKWebAppGetUserInfoResult"===t.detail.type?(O=t.detail.data,console.log(O),w.post("https://cors-anywhere.herokuapp.com/http://35.228.42.210:5000/get_user",{user_id:O.id}).then(function(e){console.log(e.data.result),"no"==e.data.result?(a.setState({register:!0}),a.setState({loader:!1}),a.setState({ready:!0})):(a.setState({register:!1}),a.setState({loader:!1}),j=e.data.result,a.setState({ready:!0}))}).catch(function(e){console.log(e)})):"VKWebAppAccessTokenReceived"===t.detail.type?(e.state.access_token=t.detail.data.access_token,x.send("VKWebAppCallAPIMethod",{method:"groups.get",request_id:"groups.get",params:{extended:1,user_id:O.id,v:"5.101",fields:"activity",lang:"ru",count:1e3,access_token:e.state.access_token}})):"VKWebAppCallAPIMethodResult"===t.detail.type&&"groups.get"===t.detail.data.request_id&&(S=t.detail.data.response.items)}),x.send("VKWebAppGetUserInfo",{}),x.send("VKWebAppGetAuthToken",{app_id:7403106,scope:"groups,friends"})}},{key:"render",value:function(){var e=this;return this.state.loader?m.a.createElement(p.w,{activePanel:"spinner"},m.a.createElement(p.l,{id:"spinner"},m.a.createElement(p.m,null,"Loading..."),m.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},m.a.createElement(p.s,{size:"large",style:{marginTop:100}})))):this.state.ready?this.state.register?m.a.createElement(A,null):m.a.createElement(p.e,{activeStory:this.state.activeStory,tabbar:m.a.createElement(p.t,null,m.a.createElement(p.u,{onClick:this.onStoryChange,selected:"discover"===this.state.activeStory,"data-story":"discover",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},m.a.createElement(b.a,null)),m.a.createElement(p.u,{onClick:this.onStoryChange,selected:"feed"===this.state.activeStory,"data-story":"feed",text:"\u041b\u0435\u043d\u0442\u0430"},m.a.createElement(C.a,null)),m.a.createElement(p.u,{onClick:this.onStoryChange,selected:"messages"===this.state.activeStory,"data-story":"messages",label:"12",text:"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"},m.a.createElement(k.a,null)))},m.a.createElement(p.w,{id:"feed",activePanel:"feed"},m.a.createElement(p.l,{id:"feed"},m.a.createElement(p.m,null,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"),m.a.createElement(p.h,null,m.a.createElement(p.k,null,m.a.createElement(p.c,{before:m.a.createElement(p.a,{size:72}),size:"l",description:"\u0427\u0435 \u0434\u0435\u0441\u043a\u0440\u0438\u043f\u0448\u043e\u043d?",bottomContent:m.a.createElement("div",{style:{display:"flex"}},m.a.createElement(p.b,{size:"m"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))},"\u042d\u043a\u043e\u043d\u043e\u043c\u0438\u043a\u0430"),m.a.createElement(p.c,{before:m.a.createElement(p.a,{size:72}),size:"l",description:"\u0427\u0435 \u0434\u0435\u0441\u043a\u0440\u0438\u043f\u0448\u043e\u043d?",bottomContent:m.a.createElement("div",{style:{display:"flex"}},m.a.createElement(p.b,{onClick:function(){e.setState({activeStory:"messages"})},size:"m"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))},"\u0424\u0438\u0437\u0438\u043a\u0430"),m.a.createElement(p.c,{before:m.a.createElement(p.a,{size:72}),size:"l",description:"\u0427\u0435 \u0434\u0435\u0441\u043a\u0440\u0438\u043f\u0448\u043e\u043d?",bottomContent:m.a.createElement("div",{style:{display:"flex"}},m.a.createElement(p.b,{size:"m"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))},"\u0425\u0438\u043c\u0438\u044f"))))),m.a.createElement(p.w,{id:"discover",activePanel:"discover"},m.a.createElement(p.l,{id:"discover",separator:!1},m.a.createElement(p.p,{right:m.a.createElement(p.n,null)},m.a.createElement(p.o,{before:m.a.createElement(p.a,{size:48,src:O.photo_100}),status:j.geo},O.first_name," ",O.last_name)),m.a.createElement(p.h,null,m.a.createElement(p.f,null,m.a.createElement(p.g,{top:"\u0412\u0430\u0448 \u0432\u043e\u0437\u0440\u0430\u0441\u0442"},m.a.createElement(p.j,{name:"age",onChange:this.handleChange,value:j.age,type:"text"}))),m.a.createElement(p.f,null,m.a.createElement(p.v,{onChange:this.handleChange,name:"description",value:j.description,top:"\u041e \u0441\u0435\u0431\u0435"})),m.a.createElement(p.f,null,m.a.createElement(p.r,{defaultValue:j.gender,name:"sex",onChange:this.handleChange,top:"\u0412\u0430\u0448 \u0433\u0435\u043d\u0434\u0435\u0440",placeholder:""},m.a.createElement("option",{value:"male-straight"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),m.a.createElement("option",{value:"female-straight"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),m.a.createElement("option",{value:"male-homo"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),m.a.createElement("option",{value:"female-homo"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),m.a.createElement("option",{value:"male-bi"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0411\u0438"),m.a.createElement("option",{value:"female-bi"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0411\u0438"),m.a.createElement("option",{value:"non-binary"},"\u041d\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439"))),m.a.createElement(p.h,{header:m.a.createElement(p.i,{mode:"secondary"},"\u0412\u0430\u0448\u0438 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u044f")},m.a.createElement(p.f,null,m.a.createElement(p.d,{checked:-1!=j.preferences.indexOf("male-straight"),onChange:this.handleCheckbox,name:"male-straight"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),m.a.createElement(p.d,{checked:-1!=j.preferences.indexOf("female-straight"),onChange:this.handleCheckbox,name:"female-straight"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),m.a.createElement(p.d,{checked:-1!=j.preferences.indexOf("male-homo"),onChange:this.handleCheckbox,name:"male-homo"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),m.a.createElement(p.d,{checked:-1!=j.preferences.indexOf("female-homo"),onChange:this.handleCheckbox,name:"female-homo"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),m.a.createElement(p.d,{checked:-1!=j.preferences.indexOf("male-bi"),onChange:this.handleCheckbox,name:"male-bi"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0411\u0438"),m.a.createElement(p.d,{checked:-1!=j.preferences.indexOf("female-bi"),onChange:this.handleCheckbox,name:"female-bi"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0411\u0438"),m.a.createElement(p.d,{checked:-1!=j.preferences.indexOf("non-binary"),onChange:this.handleCheckbox,name:"non-binary"},"\u041d\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439"),m.a.createElement(p.b,{mode:"secondary",size:"xl"},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"))))))):m.a.createElement("div",null)}}]),t}(m.a.Component),A=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).state={activeStory:"discover",sex:"male-straight",pref:[],age:18,description:""},a.handleChange=a.handleChange.bind(Object(i.a)(Object(i.a)(a))),a.onStoryChange=a.onStoryChange.bind(Object(i.a)(Object(i.a)(a))),a.handleCheckbox=a.handleCheckbox.bind(Object(i.a)(Object(i.a)(a))),a.register_user=a.register_user.bind(Object(i.a)(Object(i.a)(a))),a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=e.currentTarget,a=t.name,r=t.value;console.log(a,r),this.setState(Object(n.a)({},a,r))}},{key:"handleCheckbox",value:function(e){var t=e.currentTarget,a=t.name,n=t.value;console.log(a,n),e.currentTarget.checked?this.state.pref.push(a):this.state.pref.splice(this.state.pref.indexOf(a),1)}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"register_user",value:function(){console.log(S);var e=this;w.post("https://cors-anywhere.herokuapp.com/http://35.228.42.210:5000/signup",{user_id:O.id,age:this.state.age,geo:O.city.title,groups:S,description:this.state.description,gender:this.state.sex,preferences:this.state.pref}).then(function(t){t.data.error?alert(t.data.error):(j.age=e.state.age,j.geo=O.city.title,j.preferences=e.state.pref,j.gender=e.state.sex,j.description=e.state.description,_.setState({register:!1}))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return m.a.createElement(p.q,{activeView:this.state.activeStory},m.a.createElement(p.w,{id:"discover",activePanel:"discover"},m.a.createElement(p.l,{id:"discover",separator:!1},m.a.createElement(p.p,{right:m.a.createElement(p.n,null)},m.a.createElement(p.o,{before:m.a.createElement(p.a,{size:48,src:O.photo_100})},O.first_name," ",O.last_name)),m.a.createElement(p.h,null,m.a.createElement(p.f,null,m.a.createElement(p.g,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0432\u043e\u0437\u0440\u0430\u0441\u0442"},m.a.createElement(p.j,{name:"age",onChange:this.handleChange,type:"text",placeholder:"18"}))),m.a.createElement(p.f,null,m.a.createElement(p.v,{onChange:this.handleChange,name:"description",top:"\u041e \u0441\u0435\u0431\u0435"})),m.a.createElement(p.f,null,m.a.createElement(p.r,{name:"sex",onChange:this.handleChange,top:"\u0412\u0430\u0448 \u0433\u0435\u043d\u0434\u0435\u0440"},m.a.createElement("option",{value:"male-straight"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),m.a.createElement("option",{value:"female-straight"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),m.a.createElement("option",{value:"male-homo"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),m.a.createElement("option",{value:"female-homo"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),m.a.createElement("option",{value:"male-bi"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0411\u0438"),m.a.createElement("option",{value:"female-bi"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0411\u0438"),m.a.createElement("option",{value:"non-binary"},"\u041d\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439"))),m.a.createElement(p.h,{header:m.a.createElement(p.i,{mode:"secondary"},"\u0412\u0430\u0448\u0438 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u044f")},m.a.createElement(p.f,null,m.a.createElement(p.d,{onChange:this.handleCheckbox,name:"male-straight"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),m.a.createElement(p.d,{onChange:this.handleCheckbox,name:"female-straight"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),m.a.createElement(p.d,{onChange:this.handleCheckbox,name:"male-homo"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),m.a.createElement(p.d,{onChange:this.handleCheckbox,name:"female-homo"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),m.a.createElement(p.d,{onChange:this.handleCheckbox,name:"male-bi"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0411\u0438"),m.a.createElement(p.d,{onChange:this.handleCheckbox,name:"female-bi"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0411\u0438"),m.a.createElement(p.d,{onChange:this.handleCheckbox,name:"non-binary"},"\u041d\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439"),m.a.createElement(p.b,{mode:"secondary",onClick:function(){e.register_user()},size:"xl"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c")))))))}}]),t}(m.a.Component);u.a.render(m.a.createElement(z,null),document.getElementById("root"))},99:function(e,t,a){e.exports=a(100)}},[[99,1,2]]]);
//# sourceMappingURL=main.89d2e7aa.chunk.js.map