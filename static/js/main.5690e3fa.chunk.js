(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{93:function(e,t,a){e.exports=a(94)},94:function(e,t,a){"use strict";a.r(t);var n=a(23),o=a(24),c=a(25),l=a(27),r=a(26),i=a(28),s=a(6),m=a(0),d=a.n(m),u=a(18),h=a.n(u),f=a(2),p=(a(109),a(51)),g=a.n(p),E=a(52),b=a.n(E),y=a(53),v=a.n(y),_=a(54),C=a.n(_),k=a(19),S={},O=[],x={},j={},w=g.a.create({headers:{"Access-Control-Allow-Origin":"*","X-Requested-With":"XMLHttpRequest"}});k.send("VKWebAppInit",{});var z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(r.a)(t).call(this,e))).state={ready:!1,activeStory:"feed",access_token:"",register:!0,loader:!0,pref:[],users:[],notifications:[],popout:null,current_notification:{interests:[]},notification_count:0},a.onStoryChange=a.onStoryChange.bind(Object(s.a)(Object(s.a)(a))),a.handleChange=a.handleChange.bind(Object(s.a)(Object(s.a)(a))),a.handleCheckbox=a.handleCheckbox.bind(Object(s.a)(Object(s.a)(a))),a.update_user_data=a.update_user_data.bind(Object(s.a)(Object(s.a)(a))),a.get_users=a.get_users.bind(Object(s.a)(Object(s.a)(a))),a.start_dialog=a.start_dialog.bind(Object(s.a)(Object(s.a)(a))),a.get_notifications=a.get_notifications.bind(Object(s.a)(Object(s.a)(a))),a.openModal=a.openModal.bind(Object(s.a)(Object(s.a)(a))),a.get_notification_user=a.get_notification_user.bind(Object(s.a)(Object(s.a)(a))),a.resolve_notification=a.resolve_notification.bind(Object(s.a)(Object(s.a)(a))),a.get_photos=a.get_photos.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.currentTarget,a=t.name,o=t.value;console.log(a,o),this.setState(Object(n.a)({},a,o))}},{key:"handleCheckbox",value:function(e){var t=e.currentTarget,a=t.name,n=t.value;console.log(a,n),e.currentTarget.checked?this.state.pref.push(a):this.state.pref.splice(this.state.pref.indexOf(a),1)}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"start_dialog",value:function(e){w.post("https://kolosyamba.pythonanywhere.com/start_dialog",{from:S.id,to:e}).then(function(e){console.log(e.data.result)}).catch(function(e){console.log(e)})}},{key:"get_users",value:function(){w.post("https://kolosyamba.pythonanywhere.com/browse",{user_id:S.id,filter:"default",value:"hoy"}).then(function(e){j.setState({users:e.data.result},function(){j.setState({loader:!1})}),console.log(e.data.result)}).catch(function(e){console.log(e)}),this.setState({loader:!0})}},{key:"get_notifications",value:function(){w.post("https://kolosyamba.pythonanywhere.com/get_notifications",{user_id:S.id}).then(function(e){j.setState({notifications:e.data.result}),j.setState({notification_count:e.data.result.length})}).catch(function(e){console.log(e)})}},{key:"resolve_notification",value:function(e,t,a){w.post("https://kolosyamba.pythonanywhere.com/resolve_notification",{from:e,to:S.id,type:t,value:a}).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})}},{key:"update_user_data",value:function(){var e=[];["male-straight","female-straight","male-homo","female-homo","male-bi","female-bi","non-binary"].map(function(t){document.getElementsByName(t)[0].checked?e.push(t):console.log()}),x.age=document.getElementsByName("age")[0].value,x.description=document.getElementsByName("description")[0].value,x.gender=document.getElementsByName("sex")[0].value,x.preferences=e,w.post("https://kolosyamba.pythonanywhere.com/edit_profile",{user_id:S.id,age:document.getElementsByName("age")[0].value,description:document.getElementsByName("description")[0].value,gender:document.getElementsByName("sex")[0].value,preferences:e}).then(function(e){j.setState({loader:!1}),console.log(e.data.result)}).catch(function(e){console.log(e)}),this.setState({loader:!0})}},{key:"get_notification_user",value:function(e){w.post("https://kolosyamba.pythonanywhere.com/get_user",{user_id:e}).then(function(e){"no"===e.data.result||j.setState({current_notification:e.data.result})}).catch(function(e){console.log(e)})}},{key:"get_photos",value:function(e){k.send("VKWebAppCallAPIMethod",{method:"photos.get",request_id:"photos.get",params:{owner_id:e,album_id:"profile",count:10,v:"5.101",access_token:this.state.access_token}})}},{key:"openModal",value:function(){this.setState({popout:d.a.createElement(f.a,{actions:[{title:"\u041e\u043a",autoclose:!0,mode:"cancel"}],onClose:this.setState({popout:null})},d.a.createElement("h2",null,"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"))})}},{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.get_notifications()},3e3),k.subscribe(function(t){console.log(t);var a=e;j=e,"VKWebAppGetUserInfoResult"===t.detail.type?(S=t.detail.data,w.post("https://kolosyamba.pythonanywhere.com/get_user",{user_id:S.id}).then(function(e){"no"===e.data.result?(a.setState({register:!0}),a.setState({loader:!1}),a.setState({ready:!0})):(a.get_users(),a.setState({register:!1}),x=e.data.result,a.setState({ready:!0}))}).catch(function(e){console.log(e)})):"VKWebAppAccessTokenReceived"===t.detail.type?(e.state.access_token=t.detail.data.access_token,k.send("VKWebAppCallAPIMethod",{method:"groups.get",request_id:"groups.get",params:{extended:1,user_id:S.id,v:"5.101",fields:"activity",lang:"ru",count:1e3,access_token:e.state.access_token}})):"VKWebAppCallAPIMethodResult"===t.detail.type&&("groups.get"===t.detail.data.request_id?(console.log("GOT GROUPS"),O=t.detail.data.response.items):"photos.get"===t.detail.data.request_id&&(console.log("GOT PHOTOS"),t.detail.data.response.items.map(function(e){console.log(e.sizes.pop())})))}),k.send("VKWebAppGetUserInfo",{}),k.send("VKWebAppGetAuthToken",{app_id:7403106,scope:"groups,friends"})}},{key:"render",value:function(){var e=this;return this.state.loader?d.a.createElement(f.E,{activePanel:"spinner"},d.a.createElement(f.p,{id:"spinner"},d.a.createElement(f.q,null,"Loading..."),d.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},d.a.createElement(f.y,{size:"large",style:{marginTop:100}})))):this.state.ready?this.state.register?d.a.createElement(A,null):d.a.createElement(f.g,{activeStory:this.state.activeStory,tabbar:d.a.createElement(f.z,null,d.a.createElement(f.A,{onClick:this.onStoryChange,selected:"discover"===this.state.activeStory,"data-story":"discover",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},d.a.createElement(b.a,null)),d.a.createElement(f.A,{onClick:this.onStoryChange,selected:"feed"===this.state.activeStory,"data-story":"feed",text:"\u041b\u0435\u043d\u0442\u0430"},d.a.createElement(v.a,null)),d.a.createElement(f.A,{onClick:this.onStoryChange,selected:"messages"===this.state.activeStory,"data-story":"messages",label:this.state.notification_count.toString(),text:"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"},d.a.createElement(C.a,null)))},d.a.createElement(f.E,{id:"feed",activePanel:"feed"},d.a.createElement(f.p,{id:"feed"},d.a.createElement(f.q,null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"),d.a.createElement(f.k,null,d.a.createElement(f.o,null,j.state.users.map(function(t){return d.a.createElement(f.f,null,d.a.createElement(f.d,{before:d.a.createElement(f.b,{size:72}),size:"l",description:t.geo,bottomContent:d.a.createElement("div",{style:{display:"flex"}},d.a.createElement(f.c,{onClick:function(){e.start_dialog(t.user_id),e.openModal()},mode:"outline",size:"m"},"\u041f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f\ud83d\ude09"))},t.first_name),t.description,d.a.createElement(f.B,{mode:"buttons"},d.a.createElement(f.m,null,t.interests.map(function(e){return d.a.createElement(f.C,{selected:!0}," ",e," ")}))),d.a.createElement(f.x,{wide:!0}))}))))),d.a.createElement(f.E,{id:"discover",activePanel:"discover"},d.a.createElement(f.p,{id:"discover",separator:!1},d.a.createElement(f.u,{right:d.a.createElement(f.s,null)},d.a.createElement(f.t,{before:d.a.createElement(f.b,{size:48,src:S.photo_100}),status:x.geo},S.first_name," ",S.last_name)),d.a.createElement(f.k,null,d.a.createElement(f.h,null,d.a.createElement(f.i,{top:"\u0412\u0430\u0448 \u0432\u043e\u0437\u0440\u0430\u0441\u0442"},d.a.createElement(f.n,{name:"age",onChange:this.handleChange,defaultValue:x.age,type:"text"}))),d.a.createElement(f.h,null,d.a.createElement(f.D,{onChange:this.handleChange,name:"description",defaultValue:x.description,top:"\u041e \u0441\u0435\u0431\u0435"})),d.a.createElement(f.k,{header:d.a.createElement(f.l,{mode:"secondary"},"\u0412\u0430\u0448\u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u044b")},d.a.createElement(f.B,{mode:"buttons"},d.a.createElement(f.m,null,x.interests.map(function(e){return d.a.createElement(f.C,{selected:!0}," ",e," ")})))),d.a.createElement(f.h,null,d.a.createElement(f.w,{defaultValue:x.gender,name:"sex",onChange:this.handleChange,top:"\u0412\u0430\u0448 \u0433\u0435\u043d\u0434\u0435\u0440",placeholder:""},d.a.createElement("option",{value:"male-straight"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),d.a.createElement("option",{value:"female-straight"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),d.a.createElement("option",{value:"male-homo"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),d.a.createElement("option",{value:"female-homo"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),d.a.createElement("option",{value:"male-bi"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0411\u0438"),d.a.createElement("option",{value:"female-bi"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0411\u0438"),d.a.createElement("option",{value:"non-binary"},"\u041d\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439"))),d.a.createElement(f.k,{header:d.a.createElement(f.l,{mode:"secondary"},"\u0412\u0430\u0448\u0438 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u044f")},d.a.createElement(f.h,null,d.a.createElement(f.e,{defaultChecked:-1!==x.preferences.indexOf("male-straight"),onChange:this.handleCheckbox,name:"male-straight"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),d.a.createElement(f.e,{defaultChecked:-1!==x.preferences.indexOf("female-straight"),onChange:this.handleCheckbox,name:"female-straight"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),d.a.createElement(f.e,{defaultChecked:-1!==x.preferences.indexOf("male-homo"),onChange:this.handleCheckbox,name:"male-homo"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),d.a.createElement(f.e,{defaultChecked:-1!==x.preferences.indexOf("female-homo"),onChange:this.handleCheckbox,name:"female-homo"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),d.a.createElement(f.e,{defaultChecked:-1!==x.preferences.indexOf("male-bi"),onChange:this.handleCheckbox,name:"male-bi"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0411\u0438"),d.a.createElement(f.e,{defaultChecked:-1!==x.preferences.indexOf("female-bi"),onChange:this.handleCheckbox,name:"female-bi"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0411\u0438"),d.a.createElement(f.e,{defaultChecked:-1!==x.preferences.indexOf("non-binary"),onChange:this.handleCheckbox,name:"non-binary"},"\u041d\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439"),d.a.createElement(f.c,{mode:"secondary",size:"xl",onClick:function(){e.update_user_data()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f")))))),d.a.createElement(f.E,{id:"messages",activePanel:"messages"},d.a.createElement(f.p,{id:"messages"},d.a.createElement(f.q,null,"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),this.state.notifications.map(function(t){return"init"===t.type?d.a.createElement(f.f,null,t.from_name," \u0445\u043e\u0447\u0435\u0442 \u0441 \u0432\u0430\u043c\u0438 \u043f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f",d.a.createElement(f.f,null,d.a.createElement(f.c,{onClick:function(){e.setState({activeStory:"notify"}),e.get_notification_user(t.from)},mode:"secondary"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")),d.a.createElement(f.x,{wide:!0})):"photo"===t.type?d.a.createElement(f.f,null,"\u0424\u043e\u0442\u043e ",t.from_name,d.a.createElement(f.c,{onClick:function(){e.get_photos(t.from),e.setState({activeStory:"notify_photo"}),e.get_notification_user(t.from)},mode:"secondary"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")):d.a.createElement(f.f,null,d.a.createElement(f.c,{onClick:function(){e.setState({activeStory:"notify"}),e.get_notification_user(t.from)},mode:"secondary"},"LEL"))}))),this.state.current_notification!=={}?d.a.createElement(f.E,{id:"notify",activePanel:"notify"},d.a.createElement(f.p,{id:"notify"},d.a.createElement(f.q,{left:d.a.createElement(f.r,{onClick:function(){e.setState({activeStory:"messages"})}})},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435"),d.a.createElement(f.f,null,d.a.createElement(f.d,{before:d.a.createElement(f.b,{size:72}),size:"l",description:this.state.current_notification.geo},this.state.current_notification.first_name),this.state.current_notification.description,d.a.createElement(f.B,{mode:"buttons"},d.a.createElement(f.m,null,this.state.current_notification.interests.map(function(e){return d.a.createElement(f.C,{selected:!0}," ",e," ")}))),d.a.createElement(f.f,{style:{display:"flex"}},d.a.createElement(f.c,{size:"l",onClick:function(){e.resolve_notification(e.state.current_notification.user_id,"init",!0),e.setState({activeStory:"messages"})},stretched:!0,mode:"commerce"},"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"),d.a.createElement(f.c,{size:"l",onClick:function(){e.resolve_notification(e.state.current_notification.user_id,"init",!1),e.setState({activeStory:"messages"})},stretched:!0,mode:"destructive"},"\u041e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c"))))):d.a.createElement(f.f,null),this.state.current_notification!=={}?d.a.createElement(f.E,{id:"notify_photo",activePanel:"notify_photo"},d.a.createElement(f.p,{id:"notify_photo"},d.a.createElement(f.q,{left:d.a.createElement(f.r,{onClick:function(){e.setState({activeStory:"messages"})}})},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435"),d.a.createElement(f.f,null,d.a.createElement(f.d,{before:d.a.createElement(f.b,{size:72}),size:"l",description:this.state.current_notification.geo},this.state.current_notification.first_name),d.a.createElement(f.k,{header:d.a.createElement(f.l,{mode:"secondary"},"\u0424\u043e\u0442\u043e")},d.a.createElement(f.j,{slideWidth:"100%",style:{height:150},bullets:"dark"},d.a.createElement("div",{style:{backgroundColor:"var(--destructive)"}}),d.a.createElement("div",{style:{backgroundColor:"var(--button_commerce_background)"}}),d.a.createElement("div",{style:{backgroundColor:"var(--accent)"}}))),d.a.createElement(f.f,{style:{display:"flex"}},d.a.createElement(f.c,{size:"l",onClick:function(){e.resolve_notification(e.state.current_notification.user_id,"photo",!0),e.setState({activeStory:"messages"}),alert("gotovo")},stretched:!0,mode:"commerce"},"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"),d.a.createElement(f.c,{size:"l",onClick:function(){e.resolve_notification(e.state.current_notification.user_id,"photo",!1),e.setState({activeStory:"messages"})},stretched:!0,mode:"destructive"},"\u041e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c"))))):d.a.createElement(f.f,null)):d.a.createElement("div",null)}}]),t}(d.a.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(r.a)(t).call(this,e))).state={activeStory:"discover",sex:"male-straight",pref:[],age:18,description:""},a.handleChange=a.handleChange.bind(Object(s.a)(Object(s.a)(a))),a.onStoryChange=a.onStoryChange.bind(Object(s.a)(Object(s.a)(a))),a.handleCheckbox=a.handleCheckbox.bind(Object(s.a)(Object(s.a)(a))),a.register_user=a.register_user.bind(Object(s.a)(Object(s.a)(a))),a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.currentTarget,a=t.name,o=t.value;console.log(a,o),this.setState(Object(n.a)({},a,o))}},{key:"handleCheckbox",value:function(e){var t=e.currentTarget,a=t.name;t.value;e.currentTarget.checked?this.state.pref.push(a):this.state.pref.splice(this.state.pref.indexOf(a),1)}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"register_user",value:function(){j.setState({loader:!0}),w.post("https://kolosyamba.pythonanywhere.com/signup",{user_id:S.id,age:this.state.age,geo:S.city.title,groups:O,description:this.state.description,gender:this.state.sex,preferences:this.state.pref,first_name:S.first_name}).then(function(e){e.data.error?alert(e.data.error):(j.get_users(),w.post("https://kolosyamba.pythonanywhere.com/get_user",{user_id:S.id}).then(function(e){"no"===e.data.result?alert("wtf??"):(x=e.data.result,j.setState({ready:!0}),j.setState({register:!1}),j.setState({loader:!1}),console.log(x))}).catch(function(e){console.log(e)}))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return d.a.createElement(f.v,{activeView:this.state.activeStory},d.a.createElement(f.E,{id:"discover",activePanel:"discover"},d.a.createElement(f.p,{id:"discover",separator:!1},d.a.createElement(f.u,{right:d.a.createElement(f.s,null)},d.a.createElement(f.t,{before:d.a.createElement(f.b,{size:48,src:S.photo_100})},S.first_name," ",S.last_name)),d.a.createElement(f.k,null,d.a.createElement(f.h,null,d.a.createElement(f.i,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0432\u043e\u0437\u0440\u0430\u0441\u0442"},d.a.createElement(f.n,{name:"age",onChange:this.handleChange,type:"text",placeholder:"18"}))),d.a.createElement(f.h,null,d.a.createElement(f.D,{onChange:this.handleChange,name:"description",top:"\u041e \u0441\u0435\u0431\u0435"})),d.a.createElement(f.h,null,d.a.createElement(f.w,{name:"sex",onChange:this.handleChange,top:"\u0412\u0430\u0448 \u0433\u0435\u043d\u0434\u0435\u0440"},d.a.createElement("option",{value:"male-straight"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),d.a.createElement("option",{value:"female-straight"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),d.a.createElement("option",{value:"male-homo"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),d.a.createElement("option",{value:"female-homo"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),d.a.createElement("option",{value:"male-bi"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0411\u0438"),d.a.createElement("option",{value:"female-bi"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0411\u0438"),d.a.createElement("option",{value:"non-binary"},"\u041d\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439"))),d.a.createElement(f.k,{header:d.a.createElement(f.l,{mode:"secondary"},"\u0412\u0430\u0448\u0438 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u044f")},d.a.createElement(f.h,null,d.a.createElement(f.e,{onChange:this.handleCheckbox,name:"male-straight"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),d.a.createElement(f.e,{onChange:this.handleCheckbox,name:"female-straight"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),d.a.createElement(f.e,{onChange:this.handleCheckbox,name:"male-homo"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),d.a.createElement(f.e,{onChange:this.handleCheckbox,name:"female-homo"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),d.a.createElement(f.e,{onChange:this.handleCheckbox,name:"male-bi"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0411\u0438"),d.a.createElement(f.e,{onChange:this.handleCheckbox,name:"female-bi"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0411\u0438"),d.a.createElement(f.e,{onChange:this.handleCheckbox,name:"non-binary"},"\u041d\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439"),d.a.createElement(f.c,{mode:"secondary",onClick:function(){e.register_user()},size:"xl"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c")))))))}}]),t}(d.a.Component);h.a.render(d.a.createElement(z,null),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.5690e3fa.chunk.js.map