(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{93:function(e,t,o){e.exports=o(94)},94:function(e,t,o){"use strict";o.r(t);var a=o(23),n=o(24),r=o(25),i=o(27),c=o(26),l=o(28),s=o(6),m=o(0),p=o.n(m),d=o(18),h=o.n(d),g=o(2),u=(o(109),o(51)),f=o.n(u),k=o(52),j=o.n(k),b=o(53),E=o.n(b),y=o(54),_=o.n(y),v=o(19),C={},S=[],x={},O={},w=f.a.create({headers:{"Access-Control-Allow-Origin":"*","X-Requested-With":"XMLHttpRequest"}});v.send("VKWebAppInit",{});var z=function(e){function t(e){var o;return Object(n.a)(this,t),(o=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={ready:!1,activeStory:"feed",access_token:"",register:!0,loader:!0,pref:[],users:[],notifications:[],popout:null,current_notification:{interests:[]},notification_count:0,user_photos:[],avatar_links:["http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/green-apple.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/red-apple.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/pear.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/tangerine.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/lemon.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/banana.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/watermelon.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/grapes.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/strawberry.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/melon.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/cherries.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/peach.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/mango.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/pineapple.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/coconut.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/kiwi-fruit.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/tomato.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/eggplant.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/avocado.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/broccoli.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/leafy-green.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/cucumber.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/hot-pepper.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/ear-of-corn.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/carrot.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/potato.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/roasted-sweet-potato.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/croissant.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/bagel.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/bread.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/baguette-bread.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/pretzel.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/cheese-wedge.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/egg.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/cooking.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/pancakes.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/bacon.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/cut-of-meat.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/poultry-leg.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/meat-on-bone.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/bone.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/hot-dog.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/hamburger.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/french-fries.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/pizza.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/sandwich.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/stuffed-flatbread.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/taco.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/burrito.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/green-salad.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/shallow-pan-of-food.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/canned-food.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/spaghetti.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/steaming-bowl.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/pot-of-food.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/curry-rice.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/sushi.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/bento-box.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/dumpling.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/fried-shrimp.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/rice-ball.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/cooked-rice.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/rice-cracker.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/fish-cake-with-swirl.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/fortune-cookie.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/moon-cake.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/oden.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/dango.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/shaved-ice.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/ice-cream.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/soft-ice-cream.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/pie.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/dog-face.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/cat-face.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/mouse-face.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/hamster-face.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/rabbit-face.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/fox-face.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/bear-face.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/panda-face.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/koala.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/tiger-face.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/lion-face.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/cow-face.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/pig-face.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/pig-nose.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/frog-face.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/monkey-face.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/see-no-evil-monkey.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/hear-no-evil-monkey.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/speak-no-evil-monkey.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/monkey.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/chicken.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/penguin.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/bird.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/baby-chick.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/hatching-chick.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/front-facing-baby-chick.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/duck.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/eagle.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/owl.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/bat.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/wolf-face.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/boar.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/horse-face.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/unicorn-face.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/honeybee.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/bug.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/butterfly.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/snail.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/lady-beetle.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/ant.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/mosquito.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/cricket-1.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/spider.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/spider-web.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/scorpion.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/turtle.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/snake.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/lizard.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/t-rex.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/sauropod.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/octopus.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/squid.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/shrimp.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/lobster.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/crab.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/blowfish.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/tropical-fish.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/fish.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/dolphin.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/spouting-whale.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/whale.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/shark.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/crocodile.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/tiger.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/leopard.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/zebra.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/gorilla.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/elephant.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/hippopotamus.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/rhinoceros.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/camel.png","http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/two-hump-camel.png"]},o.onStoryChange=o.onStoryChange.bind(Object(s.a)(Object(s.a)(o))),o.handleChange=o.handleChange.bind(Object(s.a)(Object(s.a)(o))),o.handleCheckbox=o.handleCheckbox.bind(Object(s.a)(Object(s.a)(o))),o.update_user_data=o.update_user_data.bind(Object(s.a)(Object(s.a)(o))),o.get_users=o.get_users.bind(Object(s.a)(Object(s.a)(o))),o.start_dialog=o.start_dialog.bind(Object(s.a)(Object(s.a)(o))),o.get_notifications=o.get_notifications.bind(Object(s.a)(Object(s.a)(o))),o.openModal=o.openModal.bind(Object(s.a)(Object(s.a)(o))),o.get_notification_user=o.get_notification_user.bind(Object(s.a)(Object(s.a)(o))),o.resolve_notification=o.resolve_notification.bind(Object(s.a)(Object(s.a)(o))),o.get_photos=o.get_photos.bind(Object(s.a)(Object(s.a)(o))),o}return Object(l.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){var t=e.currentTarget,o=t.name,n=t.value;console.log(o,n),this.setState(Object(a.a)({},o,n))}},{key:"handleCheckbox",value:function(e){var t=e.currentTarget,o=t.name,a=t.value;console.log(o,a),e.currentTarget.checked?this.state.pref.push(o):this.state.pref.splice(this.state.pref.indexOf(o),1)}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"start_dialog",value:function(e){w.post("https://kolosyamba.pythonanywhere.com/start_dialog",{from:C.id,to:e}).then(function(e){console.log(e.data.result)}).catch(function(e){console.log(e)})}},{key:"get_users",value:function(){w.post("https://kolosyamba.pythonanywhere.com/browse",{user_id:C.id,filter:"default",value:"hoy"}).then(function(e){O.setState({users:e.data.result},function(){O.setState({loader:!1})}),console.log(e.data.result)}).catch(function(e){console.log(e)}),this.setState({loader:!0})}},{key:"get_notifications",value:function(){w.post("https://kolosyamba.pythonanywhere.com/get_notifications",{user_id:C.id}).then(function(e){O.setState({notifications:e.data.result}),O.setState({notification_count:e.data.result.length})}).catch(function(e){console.log(e)})}},{key:"resolve_notification",value:function(e,t,o){w.post("https://kolosyamba.pythonanywhere.com/resolve_notification",{from:e,to:C.id,type:t,value:o}).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)})}},{key:"update_user_data",value:function(){var e=[];["male-straight","female-straight","male-homo","female-homo","male-bi","female-bi","non-binary"].map(function(t){document.getElementsByName(t)[0].checked?e.push(t):console.log()}),x.age=document.getElementsByName("age")[0].value,x.description=document.getElementsByName("description")[0].value,x.gender=document.getElementsByName("sex")[0].value,x.preferences=e,w.post("https://kolosyamba.pythonanywhere.com/edit_profile",{user_id:C.id,age:document.getElementsByName("age")[0].value,description:document.getElementsByName("description")[0].value,gender:document.getElementsByName("sex")[0].value,preferences:e}).then(function(e){O.setState({loader:!1}),console.log(e.data.result)}).catch(function(e){console.log(e)}),this.setState({loader:!0})}},{key:"get_notification_user",value:function(e){w.post("https://kolosyamba.pythonanywhere.com/get_user",{user_id:e}).then(function(e){"no"===e.data.result||O.setState({current_notification:e.data.result})}).catch(function(e){console.log(e)})}},{key:"get_photos",value:function(e){v.send("VKWebAppCallAPIMethod",{method:"photos.get",request_id:"photos.get",params:{owner_id:e,album_id:"profile",count:10,v:"5.101",access_token:this.state.access_token}})}},{key:"openModal",value:function(){this.setState({popout:p.a.createElement(g.a,{actions:[{title:"\u041e\u043a",autoclose:!0,mode:"cancel"}],onClose:this.setState({popout:null})},p.a.createElement("h2",null,"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"))})}},{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.get_notifications()},3e3),v.subscribe(function(t){console.log(t);var o=e;O=e,"VKWebAppGetUserInfoResult"===t.detail.type?(C=t.detail.data,w.post("https://kolosyamba.pythonanywhere.com/get_user",{user_id:C.id}).then(function(e){"no"===e.data.result?(o.setState({register:!0}),o.setState({loader:!1}),o.setState({ready:!0})):(o.get_users(),o.setState({register:!1}),x=e.data.result,o.setState({ready:!0}))}).catch(function(e){console.log(e)})):"VKWebAppAccessTokenReceived"===t.detail.type?(e.state.access_token=t.detail.data.access_token,v.send("VKWebAppCallAPIMethod",{method:"groups.get",request_id:"groups.get",params:{extended:1,user_id:C.id,v:"5.101",fields:"activity",lang:"ru",count:1e3,access_token:e.state.access_token}})):"VKWebAppCallAPIMethodResult"===t.detail.type&&("groups.get"===t.detail.data.request_id?(console.log("GOT GROUPS"),S=t.detail.data.response.items):"photos.get"===t.detail.data.request_id&&(console.log("GOT PHOTOS"),t.detail.data.response.items.map(function(t){e.state.user_photos.push(t.sizes.pop().url)})))}),v.send("VKWebAppGetUserInfo",{}),v.send("VKWebAppGetAuthToken",{app_id:7403106,scope:"groups,friends"})}},{key:"render",value:function(){var e=this;return this.state.loader?p.a.createElement(g.E,{activePanel:"spinner"},p.a.createElement(g.p,{id:"spinner"},p.a.createElement(g.q,null,"Loading..."),p.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},p.a.createElement(g.y,{size:"large",style:{marginTop:100}})))):this.state.ready?this.state.register?p.a.createElement(q,null):p.a.createElement(g.g,{activeStory:this.state.activeStory,tabbar:p.a.createElement(g.z,null,p.a.createElement(g.A,{onClick:this.onStoryChange,selected:"discover"===this.state.activeStory,"data-story":"discover",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},p.a.createElement(j.a,null)),p.a.createElement(g.A,{onClick:this.onStoryChange,selected:"feed"===this.state.activeStory,"data-story":"feed",text:"\u041b\u0435\u043d\u0442\u0430"},p.a.createElement(E.a,null)),p.a.createElement(g.A,{onClick:this.onStoryChange,selected:"messages"===this.state.activeStory,"data-story":"messages",label:this.state.notification_count.toString(),text:"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"},p.a.createElement(_.a,null)))},p.a.createElement(g.E,{id:"feed",activePanel:"feed"},p.a.createElement(g.p,{id:"feed"},p.a.createElement(g.q,null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"),p.a.createElement(g.k,null,p.a.createElement(g.o,null,O.state.users.map(function(t){return p.a.createElement(g.f,null,p.a.createElement(g.d,{before:p.a.createElement(g.b,{size:72,src:e.state.avatar_links[Math.floor(Math.random()*e.state.avatar_links.length)]}),size:"l",description:t.geo,bottomContent:p.a.createElement("div",{style:{display:"flex"}},p.a.createElement(g.c,{onClick:function(){e.start_dialog(t.user_id),e.openModal()},mode:"outline",size:"m"},"\u041f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f\ud83d\ude09"))},t.first_name),t.description,p.a.createElement(g.B,{mode:"buttons"},p.a.createElement(g.m,null,t.interests.map(function(e){return p.a.createElement(g.C,{selected:!0}," ",e," ")}))),p.a.createElement(g.x,{wide:!0}))}))))),p.a.createElement(g.E,{id:"discover",activePanel:"discover"},p.a.createElement(g.p,{id:"discover",separator:!1},p.a.createElement(g.u,{right:p.a.createElement(g.s,null)},p.a.createElement(g.t,{before:p.a.createElement(g.b,{size:48,src:C.photo_100}),status:x.geo},C.first_name," ",C.last_name)),p.a.createElement(g.k,null,p.a.createElement(g.h,null,p.a.createElement(g.i,{top:"\u0412\u0430\u0448 \u0432\u043e\u0437\u0440\u0430\u0441\u0442"},p.a.createElement(g.n,{name:"age",onChange:this.handleChange,defaultValue:x.age,type:"text"}))),p.a.createElement(g.h,null,p.a.createElement(g.D,{onChange:this.handleChange,name:"description",defaultValue:x.description,top:"\u041e \u0441\u0435\u0431\u0435"})),p.a.createElement(g.k,{header:p.a.createElement(g.l,{mode:"secondary"},"\u0412\u0430\u0448\u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u044b")},p.a.createElement(g.B,{mode:"buttons"},p.a.createElement(g.m,null,x.interests.map(function(e){return p.a.createElement(g.C,{selected:!0}," ",e," ")})))),p.a.createElement(g.h,null,p.a.createElement(g.w,{defaultValue:x.gender,name:"sex",onChange:this.handleChange,top:"\u0412\u0430\u0448 \u0433\u0435\u043d\u0434\u0435\u0440",placeholder:""},p.a.createElement("option",{value:"male-straight"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),p.a.createElement("option",{value:"female-straight"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),p.a.createElement("option",{value:"male-homo"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),p.a.createElement("option",{value:"female-homo"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),p.a.createElement("option",{value:"male-bi"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0411\u0438"),p.a.createElement("option",{value:"female-bi"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0411\u0438"),p.a.createElement("option",{value:"non-binary"},"\u041d\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439"))),p.a.createElement(g.k,{header:p.a.createElement(g.l,{mode:"secondary"},"\u0412\u0430\u0448\u0438 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u044f")},p.a.createElement(g.h,null,p.a.createElement(g.e,{defaultChecked:-1!==x.preferences.indexOf("male-straight"),onChange:this.handleCheckbox,name:"male-straight"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),p.a.createElement(g.e,{defaultChecked:-1!==x.preferences.indexOf("female-straight"),onChange:this.handleCheckbox,name:"female-straight"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),p.a.createElement(g.e,{defaultChecked:-1!==x.preferences.indexOf("male-homo"),onChange:this.handleCheckbox,name:"male-homo"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),p.a.createElement(g.e,{defaultChecked:-1!==x.preferences.indexOf("female-homo"),onChange:this.handleCheckbox,name:"female-homo"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),p.a.createElement(g.e,{defaultChecked:-1!==x.preferences.indexOf("male-bi"),onChange:this.handleCheckbox,name:"male-bi"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0411\u0438"),p.a.createElement(g.e,{defaultChecked:-1!==x.preferences.indexOf("female-bi"),onChange:this.handleCheckbox,name:"female-bi"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0411\u0438"),p.a.createElement(g.e,{defaultChecked:-1!==x.preferences.indexOf("non-binary"),onChange:this.handleCheckbox,name:"non-binary"},"\u041d\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439"),p.a.createElement(g.c,{mode:"secondary",size:"xl",onClick:function(){e.update_user_data()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f")))))),p.a.createElement(g.E,{id:"messages",activePanel:"messages"},p.a.createElement(g.p,{id:"messages"},p.a.createElement(g.q,null,"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),this.state.notifications.map(function(t){return"init"===t.type?p.a.createElement(g.f,null,t.from_name," \u0445\u043e\u0447\u0435\u0442 \u0441 \u0432\u0430\u043c\u0438 \u043f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f",p.a.createElement(g.f,null,p.a.createElement(g.c,{onClick:function(){e.setState({activeStory:"notify"}),e.get_notification_user(t.from)},mode:"secondary"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")),p.a.createElement(g.x,{wide:!0})):"photo"===t.type?p.a.createElement(g.f,null,"\u0424\u043e\u0442\u043e ",t.from_name,p.a.createElement(g.c,{onClick:function(){e.get_photos(t.from),e.setState({activeStory:"notify_photo"}),e.get_notification_user(t.from)},mode:"secondary"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")):"q_set"===t.type?p.a.createElement(g.f,null,"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f ",t.from_name,p.a.createElement(g.c,{onClick:function(){e.get_photos(t.from),e.setState({activeStory:"notify_qset"}),e.get_notification_user(t.from)},mode:"secondary"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")):p.a.createElement(g.f,null,p.a.createElement(g.c,{onClick:function(){e.setState({activeStory:"notify"}),e.get_notification_user(t.from)},mode:"secondary"},"LEL"))}))),this.state.current_notification!=={}?p.a.createElement(g.E,{id:"notify",activePanel:"notify"},p.a.createElement(g.p,{id:"notify"},p.a.createElement(g.q,{left:p.a.createElement(g.r,{onClick:function(){e.setState({activeStory:"messages"})}})},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435"),p.a.createElement(g.f,null,p.a.createElement(g.d,{before:p.a.createElement(g.b,{size:72,src:this.state.avatar_links[Math.floor(Math.random()*this.state.avatar_links.length)]}),size:"l",description:this.state.current_notification.geo},this.state.current_notification.first_name),this.state.current_notification.description,p.a.createElement(g.B,{mode:"buttons"},p.a.createElement(g.m,null,this.state.current_notification.interests.map(function(e){return p.a.createElement(g.C,{selected:!0}," ",e," ")}))),p.a.createElement(g.f,{style:{display:"flex"}},p.a.createElement(g.c,{size:"l",onClick:function(){e.resolve_notification(e.state.current_notification.user_id,"init",!0),e.setState({activeStory:"messages"})},stretched:!0,mode:"commerce"},"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"),p.a.createElement(g.c,{size:"l",onClick:function(){e.resolve_notification(e.state.current_notification.user_id,"init",!1),e.setState({activeStory:"messages"})},stretched:!0,mode:"destructive"},"\u041e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c"))))):p.a.createElement(g.f,null),this.state.current_notification!=={}?p.a.createElement(g.E,{id:"notify_photo",activePanel:"notify_photo"},p.a.createElement(g.p,{id:"notify_photo"},p.a.createElement(g.q,{left:p.a.createElement(g.r,{onClick:function(){e.setState({activeStory:"messages"})}})},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435"),p.a.createElement(g.f,null,p.a.createElement(g.d,{before:p.a.createElement(g.b,{size:72,src:this.state.avatar_links[Math.floor(Math.random()*this.state.avatar_links.length)]}),size:"l",description:this.state.current_notification.geo},this.state.current_notification.first_name),p.a.createElement(g.k,{header:p.a.createElement(g.l,{mode:"secondary"},"\u0424\u043e\u0442\u043e")},p.a.createElement(g.j,{slideWidth:"100%",style:{height:400},bullets:"dark"},this.state.user_photos.map(function(e){return p.a.createElement("div",{style:{backgroundSize:"contain",backgroundRepeat:"no-repeat",marginRight:"auto",marginLeft:"auto",display:"block",width:"90%",backgroundImage:"url("+e+")"}})}))),p.a.createElement(g.f,{style:{display:"flex"}},p.a.createElement(g.c,{size:"l",onClick:function(){e.resolve_notification(e.state.current_notification.user_id,"photo",!0),e.setState({activeStory:"messages"})},stretched:!0,mode:"commerce"},"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"),p.a.createElement(g.c,{size:"l",onClick:function(){e.resolve_notification(e.state.current_notification.user_id,"photo",!1),e.setState({activeStory:"messages"})},stretched:!0,mode:"destructive"},"\u041e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c"))))):p.a.createElement(g.f,null),this.state.current_notification!=={}?p.a.createElement(g.E,{id:"notify_qset",activePanel:"notify_qset"},p.a.createElement(g.p,{id:"notify_qset"},p.a.createElement(g.q,{left:p.a.createElement(g.r,{onClick:function(){e.setState({activeStory:"messages"})}})},"\u0412\u043e\u043f\u0440\u043e\u0441\u044b"),p.a.createElement(g.f,null,p.a.createElement(g.k,null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u0434\u0430\u0442\u044c \u043f\u0430\u0440\u0443 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u0434\u043b\u044f  ",this.state.current_notification.first_name,p.a.createElement(g.h,null,p.a.createElement(g.i,{top:"\u041f\u0435\u0440\u0432\u044b\u0439 \u0432\u043e\u043f\u0440\u043e\u0441"},p.a.createElement(g.n,{name:"q_1",type:"text"})),p.a.createElement(g.i,{top:"\u0412\u0442\u043e\u0440\u043e\u0439 \u0432\u043e\u043f\u0440\u043e\u0441"},p.a.createElement(g.n,{name:"q_2",type:"text"})))),p.a.createElement(g.f,{style:{display:"flex"}},p.a.createElement(g.c,{size:"l",onClick:function(){e.resolve_notification(e.state.current_notification.user_id,"q_set",[document.getElementsByName("q_1")[0].value,document.getElementsByName("q_2")[0].value]),e.setState({activeStory:"messages"})},stretched:!0},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))):p.a.createElement(g.f,null)):p.a.createElement("div",null)}}]),t}(p.a.Component),q=function(e){function t(e){var o;return Object(n.a)(this,t),(o=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={activeStory:"discover",sex:"male-straight",pref:[],age:18,description:""},o.handleChange=o.handleChange.bind(Object(s.a)(Object(s.a)(o))),o.onStoryChange=o.onStoryChange.bind(Object(s.a)(Object(s.a)(o))),o.handleCheckbox=o.handleCheckbox.bind(Object(s.a)(Object(s.a)(o))),o.register_user=o.register_user.bind(Object(s.a)(Object(s.a)(o))),o}return Object(l.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){var t=e.currentTarget,o=t.name,n=t.value;console.log(o,n),this.setState(Object(a.a)({},o,n))}},{key:"handleCheckbox",value:function(e){var t=e.currentTarget,o=t.name;t.value;e.currentTarget.checked?this.state.pref.push(o):this.state.pref.splice(this.state.pref.indexOf(o),1)}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"register_user",value:function(){O.setState({loader:!0}),w.post("https://kolosyamba.pythonanywhere.com/signup",{user_id:C.id,age:this.state.age,geo:C.city.title,groups:S,description:this.state.description,gender:this.state.sex,preferences:this.state.pref,first_name:C.first_name}).then(function(e){e.data.error?alert(e.data.error):(O.get_users(),w.post("https://kolosyamba.pythonanywhere.com/get_user",{user_id:C.id}).then(function(e){"no"===e.data.result?alert("wtf??"):(x=e.data.result,O.setState({ready:!0}),O.setState({register:!1}),O.setState({loader:!1}),console.log(x))}).catch(function(e){console.log(e)}))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return p.a.createElement(g.v,{activeView:this.state.activeStory},p.a.createElement(g.E,{id:"discover",activePanel:"discover"},p.a.createElement(g.p,{id:"discover",separator:!1},p.a.createElement(g.u,{right:p.a.createElement(g.s,null)},p.a.createElement(g.t,{before:p.a.createElement(g.b,{size:48,src:C.photo_100})},C.first_name," ",C.last_name)),p.a.createElement(g.k,null,p.a.createElement(g.h,null,p.a.createElement(g.i,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u0432\u043e\u0437\u0440\u0430\u0441\u0442"},p.a.createElement(g.n,{name:"age",onChange:this.handleChange,type:"text",placeholder:"18"}))),p.a.createElement(g.h,null,p.a.createElement(g.D,{onChange:this.handleChange,name:"description",top:"\u041e \u0441\u0435\u0431\u0435"})),p.a.createElement(g.h,null,p.a.createElement(g.w,{name:"sex",onChange:this.handleChange,top:"\u0412\u0430\u0448 \u0433\u0435\u043d\u0434\u0435\u0440"},p.a.createElement("option",{value:"male-straight"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),p.a.createElement("option",{value:"female-straight"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),p.a.createElement("option",{value:"male-homo"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),p.a.createElement("option",{value:"female-homo"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),p.a.createElement("option",{value:"male-bi"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0411\u0438"),p.a.createElement("option",{value:"female-bi"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0411\u0438"),p.a.createElement("option",{value:"non-binary"},"\u041d\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439"))),p.a.createElement(g.k,{header:p.a.createElement(g.l,{mode:"secondary"},"\u0412\u0430\u0448\u0438 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u044f")},p.a.createElement(g.h,null,p.a.createElement(g.e,{onChange:this.handleCheckbox,name:"male-straight"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),p.a.createElement(g.e,{onChange:this.handleCheckbox,name:"female-straight"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u041d\u0430\u0442\u0443\u0440\u0430\u043b"),p.a.createElement(g.e,{onChange:this.handleCheckbox,name:"male-homo"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),p.a.createElement(g.e,{onChange:this.handleCheckbox,name:"female-homo"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0413\u043e\u043c\u043e\u0441\u0435\u043a\u0441\u0443\u0430\u043b\u0438\u0441\u0442"),p.a.createElement(g.e,{onChange:this.handleCheckbox,name:"male-bi"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430 \u0411\u0438"),p.a.createElement(g.e,{onChange:this.handleCheckbox,name:"female-bi"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430 \u0411\u0438"),p.a.createElement(g.e,{onChange:this.handleCheckbox,name:"non-binary"},"\u041d\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439"),p.a.createElement(g.c,{mode:"secondary",onClick:function(){e.register_user()},size:"xl"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c")))))))}}]),t}(p.a.Component);h.a.render(p.a.createElement(z,null),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.6e63abf8.chunk.js.map