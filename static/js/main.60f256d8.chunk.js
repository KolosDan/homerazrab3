(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{96:function(e,t,a){e.exports=a(97)},97:function(e,t,a){"use strict";a.r(t);var n=a(23),r=a(24),l=a(25),o=a(27),c=a(26),s=a(28),i=a(12),d=a(0),h=a.n(d),m=a(18),u=a.n(m),p=a(2),g=(a(112),a(49)),f=a.n(g),E=a(50),b=a.n(E),v=a(51),y=a.n(v),C=a(52),k=a.n(C),x=a(19),O={},_=[],S={},j={},z=f.a.create({headers:{"Access-Control-Allow-Origin":"*","X-Requested-With":"XMLHttpRequest"}});x.send("VKWebAppInit",{});var w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={ready:!1,activeStory:"feed",access_token:"",register:!0,loader:!0,pref:[]},a.onStoryChange=a.onStoryChange.bind(Object(i.a)(Object(i.a)(a))),a.handleChange=a.handleChange.bind(Object(i.a)(Object(i.a)(a))),a.handleCheckbox=a.handleCheckbox.bind(Object(i.a)(Object(i.a)(a))),a.update_user_data=a.update_user_data.bind(Object(i.a)(Object(i.a)(a))),a.get_users=a.get_users.bind(Object(i.a)(Object(i.a)(a))),a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=e.currentTarget,a=t.name,r=t.value;console.log(a,r),this.setState(Object(n.a)({},a,r))}},{key:"handleCheckbox",value:function(e){var t=e.currentTarget,a=t.name,n=t.value;console.log(a,n),e.currentTarget.checked?this.state.pref.push(a):this.state.pref.splice(this.state.pref.indexOf(a),1)}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"get_users",value:function(){z.post("https://cors-anywhere.herokuapp.com/http://35.228.42.210:5000/browse",{user_id:O.id,filter:"default",value:"hoy"}).then(function(e){console.log(e.data.result),this.setState({loader:!1})}).catch(function(e){console.log(e)}),this.setState({loader:!0})}},{key:"update_user_data",value:function(){var e=[];["male-straight","female-straight","male-homo","female-homo","male-bi","female-bi","non-binary"].map(function(t){document.getElementsByName(t)[0].checked?e.push(t):console.log()}),S.age=document.getElementsByName("age")[0].value,S.description=document.getElementsByName("description")[0].value,S.gender=document.getElementsByName("sex")[0].value,S.preferences=e,z.post("https://cors-anywhere.herokuapp.com/http://35.228.42.210:5000/edit_profile",{user_id:O.id,age:document.getElementsByName("age")[0].value,description:document.getElementsByName("description")[0].value,gender:document.getElementsByName("sex")[0].value,preferences:e}).then(function(e){j.setState({loader:!1}),console.log(e.data.result)}).catch(function(e){console.log(e)}),this.setState({loader:!0})}},{key:"componentDidMount",value:function(){var e=this;x.subscribe(function(t){console.log(t);var a=e;j=e,"VKWebAppGetUserInfoResult"===t.detail.type?(O=t.detail.data,z.post("https://cors-anywhere.herokuapp.com/http://35.228.42.210:5000/get_user",{user_id:O.id}).then(function(e){"no"==e.data.result?(a.setState({register:!0}),a.setState({loader:!1}),a.setState({ready:!0})):(S=e.data.result,a.get_users(),a.setState({register:!1}),a.setState({ready:!0}))}).catch(function(e){console.log(e)})):"VKWebAppAccessTokenReceived"===t.detail.type?(e.state.access_token=t.detail.data.access_token,x.send("VKWebAppCallAPIMethod",{method:"groups.get",request_id:"groups.get",params:{extended:1,user_id:O.id,v:"5.101",fields:"activity",lang:"ru",count:1e3,access_token:e.state.access_token}})):"VKWebAppCallAPIMethodResult"===t.detail.type&&"groups.get"===t.detail.data.request_id&&(_=t.detail.data.response.items)}),x.send("VKWebAppGetUserInfo",{}),x.send("VKWebAppGetAuthToken",{app_id:7403106,scope:"groups,friends"})}},{key:"render",value:function(){var e=this;return this.state.loader?h.a.createElement(p.z,{activePanel:"spinner"},h.a.createElement(p.m,{id:"spinner"},h.a.createElement(p.n,null,"Loading..."),h.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},h.a.createElement(p.t,{size:"large",style:{marginTop:100}})))):this.state.ready?this.state.register?h.a.createElement(A,null):h.a.createElement(p.e,{activeStory:this.state.activeStory,tabbar:h.a.createElement(p.u,null,h.a.createElement(p.v,{onClick:this.onStoryChange,selected:"discover"===this.state.activeStory,"data-story":"discover",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},h.a.createElement(b.a,null)),h.a.createElement(p.v,{onClick:this.onStoryChange,selected:"feed"===this.state.activeStory,"data-story":"feed",text:"\u041b\u0435\u043d\u0442\u0430"},h.a.createElement(y.a,null)),h.a.createElement(p.v,{onClick:this.onStoryChange,selected:"messages"===this.state.activeStory,"data-story":"messages",label:"12",text:"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"},h.a.createElement(k.a,null)))},h.a.createElement(p.z,{id:"feed",activePanel:"feed"},h.a.createElement(p.m,{id:"feed"},h.a.createElement(p.n,null,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"),h.a.createElement(p.h,null,h.a.createElement(p.l,null,h.a.createElement(p.c,{before:h.a.createElement(p.a,{size:72}),size:"l",description:"\u0427\u0435 \u0434\u0435\u0441\u043a\u0440\u0438\u043f\u0448\u043e\u043d?",bottomContent:h.a.createElement("div",{style:{display:"flex"}},h.a.createElement(p.b,{size:"m"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))},"\u042d\u043a\u043e\u043d\u043e\u043c\u0438\u043a\u0430"),h.a.createElement(p.c,{before:h.a.createElement(p.a,{size:72}),size:"l",description:"\u0427\u0435 \u0434\u0435\u0441\u043a\u0440\u0438\u043f\u0448\u043e\u043d?",bottomContent:h.a.createElement("div",{style:{display:"flex"}},h.a.createElement(p.b,{onClick:function(){e.setState({activeStory:"messages"})},size:"m"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))},"\u0424\u0438\u0437\u0438\u043a\u0430"),h.a.createElement(p.c,{before:h.a.createElement(p.a,{size:72}),size:"l",description:"\u0427\u0435 \u0434\u0435\u0441\u043a\u0440\u0438\u043f\u0448\u043e\u043d?",bottomContent:h.a.createElement("div",{style:{display:"flex"}},h.a.createElement(p.b,{size:"m"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))},"\u0425\u0438\u043c\u0438\u044f"))))),h.a.createElement(p.z,{id:"discover",activePanel:"discover"},h.a.createElement(p.m,{id:"discover",separator:!1},h.a.createElement(p.q,{right:h.a.createElement(p.o,null)},h.a.createElement(p.p,{before:h.a.createElement(p.a,{size:48,src:O.photo_100}),status:S.geo},O.first_name," ",O.last_name)),h.a.createElement(p.h,null,h.a.createElement(p.f,null,h.a.createElement(p.g,{top:"\u0412\u0430\u0448 \u0432\u043e\u0437\u0440\u0430\u0441\u0442"},h.a.createElement(p.k,{name:"age",onChange:this.handleChange,defaultValue:S.age,type:"text"}))),h.a.createElement(p.f,null,h.a.createElement(p.y,{onChange:this.handleChange,name:"description",defaultValue:S.description,top:"\u041e \u0441\u0435\u0431\u0435"})),h.a.createElement(p.h,{header:h.a.createElement(p.i,{mode:"secondary"},"\u0412\u0430\u0448\u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u044b")},h.a.createElement(p.w,{mode:"buttons"},h.a.createElement(p.j,null,S.interests.map(function(e){return h.a.createElement(p.x,{selected:!0}," ",e," ")})))),h.a.createElement(p.f,null,h.a.createElement(p.s,{defaultValue:S.gender,name:"sex",onChange:this.handleChange,top:"\u0412\u0430\u0448 \u0433\u0435\u043d\u0434\u0435\u0440",placeholder:""},h.a.createElement("option",{value:"male-straight"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),h.a.createElement("option",{value:"female-straight"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),h.a.createElement("option",{value:"male-homo"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),h.a.createElement("option",{value:"female-homo"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),h.a.createElement("option",{value:"male-bi"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0411\u0438"),h.a.createElement("option",{value:"female-bi"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0411\u0438"),h.a.createElement("option",{value:"non-binary"},"\u041d\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439"))),h.a.createElement(p.h,{header:h.a.createElement(p.i,{mode:"secondary"},"\u0412\u0430\u0448\u0438 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u044f")},h.a.createElement(p.f,null,h.a.createElement(p.d,{defaultChecked:-1!=S.preferences.indexOf("male-straight"),onChange:this.handleCheckbox,name:"male-straight"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),h.a.createElement(p.d,{defaultChecked:-1!=S.preferences.indexOf("female-straight"),onChange:this.handleCheckbox,name:"female-straight"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),h.a.createElement(p.d,{defaultChecked:-1!=S.preferences.indexOf("male-homo"),onChange:this.handleCheckbox,name:"male-homo"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),h.a.createElement(p.d,{defaultChecked:-1!=S.preferences.indexOf("female-homo"),onChange:this.handleCheckbox,name:"female-homo"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),h.a.createElement(p.d,{defaultChecked:-1!=S.preferences.indexOf("male-bi"),onChange:this.handleCheckbox,name:"male-bi"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0411\u0438"),h.a.createElement(p.d,{defaultChecked:-1!=S.preferences.indexOf("female-bi"),onChange:this.handleCheckbox,name:"female-bi"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0411\u0438"),h.a.createElement(p.d,{defaultChecked:-1!=S.preferences.indexOf("non-binary"),onChange:this.handleCheckbox,name:"non-binary"},"\u041d\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439"),h.a.createElement(p.b,{mode:"secondary",size:"xl",onClick:function(){e.update_user_data()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"))))))):h.a.createElement("div",null)}}]),t}(h.a.Component),A=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={activeStory:"discover",sex:"male-straight",pref:[],age:18,description:""},a.handleChange=a.handleChange.bind(Object(i.a)(Object(i.a)(a))),a.onStoryChange=a.onStoryChange.bind(Object(i.a)(Object(i.a)(a))),a.handleCheckbox=a.handleCheckbox.bind(Object(i.a)(Object(i.a)(a))),a.register_user=a.register_user.bind(Object(i.a)(Object(i.a)(a))),a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=e.currentTarget,a=t.name,r=t.value;console.log(a,r),this.setState(Object(n.a)({},a,r))}},{key:"handleCheckbox",value:function(e){var t=e.currentTarget,a=t.name;t.value;e.currentTarget.checked?this.state.pref.push(a):this.state.pref.splice(this.state.pref.indexOf(a),1)}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"register_user",value:function(){j.setState({loader:!0}),z.post("https://cors-anywhere.herokuapp.com/http://35.228.42.210:5000/signup",{user_id:O.id,age:this.state.age,geo:O.city.title,groups:_,description:this.state.description,gender:this.state.sex,preferences:this.state.pref}).then(function(e){e.data.error?alert(e.data.error):z.post("https://cors-anywhere.herokuapp.com/http://35.228.42.210:5000/get_user",{user_id:O.id}).then(function(e){"no"==e.data.result?alert("wtf??"):(S=e.data.result,j.setState({ready:!0}),j.setState({register:!1}),j.setState({loader:!1}),console.log(S))}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return h.a.createElement(p.r,{activeView:this.state.activeStory},h.a.createElement(p.z,{id:"discover",activePanel:"discover"},h.a.createElement(p.m,{id:"discover",separator:!1},h.a.createElement(p.q,{right:h.a.createElement(p.o,null)},h.a.createElement(p.p,{before:h.a.createElement(p.a,{size:48,src:O.photo_100})},O.first_name," ",O.last_name)),h.a.createElement(p.h,null,h.a.createElement(p.f,null,h.a.createElement(p.g,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0432\u043e\u0437\u0440\u0430\u0441\u0442"},h.a.createElement(p.k,{name:"age",onChange:this.handleChange,type:"text",placeholder:"18"}))),h.a.createElement(p.f,null,h.a.createElement(p.y,{onChange:this.handleChange,name:"description",top:"\u041e \u0441\u0435\u0431\u0435"})),h.a.createElement(p.f,null,h.a.createElement(p.s,{name:"sex",onChange:this.handleChange,top:"\u0412\u0430\u0448 \u0433\u0435\u043d\u0434\u0435\u0440"},h.a.createElement("option",{value:"male-straight"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),h.a.createElement("option",{value:"female-straight"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),h.a.createElement("option",{value:"male-homo"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),h.a.createElement("option",{value:"female-homo"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),h.a.createElement("option",{value:"male-bi"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0411\u0438"),h.a.createElement("option",{value:"female-bi"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0411\u0438"),h.a.createElement("option",{value:"non-binary"},"\u041d\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439"))),h.a.createElement(p.h,{header:h.a.createElement(p.i,{mode:"secondary"},"\u0412\u0430\u0448\u0438 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u044f")},h.a.createElement(p.f,null,h.a.createElement(p.d,{onChange:this.handleCheckbox,name:"male-straight"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),h.a.createElement(p.d,{onChange:this.handleCheckbox,name:"female-straight"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),h.a.createElement(p.d,{onChange:this.handleCheckbox,name:"male-homo"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),h.a.createElement(p.d,{onChange:this.handleCheckbox,name:"female-homo"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),h.a.createElement(p.d,{onChange:this.handleCheckbox,name:"male-bi"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0411\u0438"),h.a.createElement(p.d,{onChange:this.handleCheckbox,name:"female-bi"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0411\u0438"),h.a.createElement(p.d,{onChange:this.handleCheckbox,name:"non-binary"},"\u041d\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439"),h.a.createElement(p.b,{mode:"secondary",onClick:function(){e.register_user()},size:"xl"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c")))))))}}]),t}(h.a.Component);u.a.render(h.a.createElement(w,null),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.60f256d8.chunk.js.map