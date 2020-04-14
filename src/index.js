import React from 'react';
import ReactDOM from 'react-dom';
import { View, Panel, PanelHeader, Group, Cell, Epic, Tabbar, TabbarItem,
List, Button , Avatar , PanelHeaderContent, PanelHeaderButton, PanelHeaderSimple,
FormLayoutGroup, Select, FormLayout , Root , Textarea, Input, Checkbox, Header,
Spinner, TabsItem, HorizontalScroll, Tabs, Div, PanelHeaderBack, Alert, Separator, Gallery}  from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import axios from 'axios';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';   
import * as connect from '@vkontakte/vkui-connect'; 

let user_obj = {};
let user_groups = [];
let user_global_api = {};
let parent_context = {};

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const instance = axios.create({
  headers: { 'Access-Control-Allow-Origin': "*" , "X-Requested-With" : "XMLHttpRequest"}
});

connect.send("VKWebAppInit", {});

class Example extends React.Component {
    constructor (props) {
      super(props);
  
      this.state = {
        ready : false,
        activeStory: 'feed', 
        access_token : "",
        register : true,
        loader : true,
        pref : [],
        users : [],
        notifications : [],
        popout: null,
        current_notification : {interests : []},
        notification_count : 0,
        questions_value : ["",""],
        user_photos : [],
        gender_mapping : {
          "male-straight": "Мужчина, гетеросексуальный", 
          "female-straight": "Женщина, гетеросексуальная",
          "male-homo": "Мужчина, гомосексуальный",
          "female-homo": "Женщина, гомосексуальная",
          "male-bi": "Мужчина, бисексуальныйсексуал",
          "female-bi": "Женщина, бисексуальнаясексуал",
          "non-binary": "Другое"
         },
        avatar_links : ['https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/green-apple.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/red-apple.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/pear.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/tangerine.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/lemon.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/banana.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/watermelon.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/grapes.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/strawberry.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/melon.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/cherries.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/peach.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/mango.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/pineapple.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/coconut.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/kiwi-fruit.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/tomato.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/eggplant.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/avocado.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/broccoli.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/leafy-green.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/cucumber.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/hot-pepper.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/ear-of-corn.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/carrot.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/potato.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/roasted-sweet-potato.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/croissant.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/bagel.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/bread.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/baguette-bread.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/pretzel.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/cheese-wedge.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/egg.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/cooking.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/pancakes.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/bacon.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/cut-of-meat.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/poultry-leg.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/meat-on-bone.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/bone.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/hot-dog.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/hamburger.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/french-fries.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/pizza.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/sandwich.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/stuffed-flatbread.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/taco.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/burrito.png', 
        'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/green-salad.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/shallow-pan-of-food.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/canned-food.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/spaghetti.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/steaming-bowl.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/pot-of-food.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/curry-rice.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/sushi.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/bento-box.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/dumpling.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/fried-shrimp.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/rice-ball.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/cooked-rice.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/rice-cracker.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/fish-cake-with-swirl.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/fortune-cookie.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/moon-cake.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/oden.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/dango.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/shaved-ice.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/ice-cream.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/soft-ice-cream.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/pie.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/dog-face.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/cat-face.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/mouse-face.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/hamster-face.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/rabbit-face.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/fox-face.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/bear-face.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/panda-face.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/koala.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/tiger-face.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/lion-face.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/cow-face.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/pig-face.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/pig-nose.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/frog-face.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/monkey-face.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/see-no-evil-monkey.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/hear-no-evil-monkey.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/speak-no-evil-monkey.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/monkey.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/chicken.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/penguin.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/bird.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/baby-chick.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/hatching-chick.png',
        'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/front-facing-baby-chick.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/duck.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/eagle.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/owl.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/bat.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/wolf-face.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/boar.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/horse-face.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/unicorn-face.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/honeybee.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/bug.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/butterfly.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/snail.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/lady-beetle.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/ant.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/mosquito.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/cricket-1.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/spider.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/spider-web.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/scorpion.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/turtle.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/snake.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/lizard.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/t-rex.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/sauropod.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/octopus.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/squid.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/shrimp.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/lobster.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/crab.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/blowfish.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/tropical-fish.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/fish.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/dolphin.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/spouting-whale.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/whale.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/shark.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/crocodile.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/tiger.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/leopard.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/zebra.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/gorilla.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/elephant.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/hippopotamus.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/rhinoceros.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/camel.png', 'https://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-12/128/two-hump-camel.png']
      
      };
      this.onStoryChange = this.onStoryChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleCheckbox = this.handleCheckbox.bind(this); 
      this.update_user_data = this.update_user_data.bind(this); 
      this.get_users = this.get_users.bind(this);  
      this.start_dialog = this.start_dialog.bind(this);  
      this.get_notifications = this.get_notifications.bind(this);   
      this.get_notification_user = this.get_notification_user.bind(this);
      this.resolve_notification = this.resolve_notification.bind(this);
      this.get_photos = this.get_photos.bind(this);

      this.closePopout = this.closePopout.bind(this);
      this.openDefault = this.openDefault.bind(this);
    }
    

    handleChange(e) {
      const { name, value } = e.currentTarget;
      this.setState({ [name]: value });
    }

    handleCheckbox(e) {
      const { name, value } = e.currentTarget;
      if (e.currentTarget.checked){
        this.state.pref.push(name);
      }else{
        this.state.pref.splice( this.state.pref.indexOf(name),1 );
      }
    }
    
    onStoryChange (e) {
      this.setState({ activeStory: e.currentTarget.dataset.story })
    }

    start_dialog(id_to){
      instance.post('https://kolosyamba.pythonanywhere.com/start_dialog', {
        from: user_obj.id,
        to : id_to
      })
      .then(function (response) {
        console.log(response.data.result)
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    get_users(){
      instance.post('https://kolosyamba.pythonanywhere.com/browse', {
        user_id: user_obj.id,
        filter : "default",
        value : "hoy"
      })
      .then(function (response) {
        parent_context.setState({ users : response.data.result }, () => {
        parent_context.setState({ loader:false })
      });
      })
      .catch(function (error) {
        console.log(error);
      });
      this.setState({ loader:true })
    }

    get_notifications(){
      instance.post('https://kolosyamba.pythonanywhere.com/get_notifications', {
        user_id: user_obj.id,
      })
      .then(function (response) {
        parent_context.setState({notifications : response.data.result})
        parent_context.setState({notification_count : response.data.result.length})
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    resolve_notification(to ,type, value){
      instance.post('https://kolosyamba.pythonanywhere.com/resolve_notification', {
        from: to,
        to : user_obj.id,
        type : type,
        value : value
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    update_user_data(){
      let checked = [];
      ["male-straight","female-straight","male-homo","female-homo","male-bi","female-bi","non-binary"].map(val => { document.getElementsByName(val)[0].checked ? checked.push(val) : console.log() })
      user_global_api.age = document.getElementsByName("age")[0].value;
      user_global_api.description = document.getElementsByName("description")[0].value;
      user_global_api.gender = document.getElementsByName("sex")[0].value;
      user_global_api.preferences = checked;

      instance.post('https://kolosyamba.pythonanywhere.com/edit_profile', {
        user_id: user_obj.id,
        age : document.getElementsByName("age")[0].value,
        description : document.getElementsByName("description")[0].value,
        gender : document.getElementsByName("sex")[0].value,
        preferences : checked
      })
      .then(function (response) {
        parent_context.setState({ loader:false })
        console.log(response.data.result)
      })
      .catch(function (error) {
        console.log(error);
      });
      this.setState({ loader:true })
    }

    get_notification_user(id){

      instance.post('https://kolosyamba.pythonanywhere.com/get_user', {
        user_id: id,
      })
      .then(function (response) {
        // console.log(response.data.result)
       if (response.data.result === "no"){
        console.log("NO BLYAT")
       }
       else {
        parent_context.setState({ current_notification : response.data.result})
      };
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    get_photos (id) {
      connect.send("VKWebAppCallAPIMethod", {
        "method": "photos.get",
        "request_id": "photos.get",
        "params": { "owner_id": id, "album_id" : "profile", "count" : 10, "v": "5.101", "access_token": this.state.access_token }
      });
    }

    openDefault () {
      this.setState({ popout:
        <Alert
          actions={[{
            title: 'Ok',
            autoclose: true
          }]}
          onClose={this.closePopout}
        >
          <h2>Запрос отправлен!</h2>
        </Alert>
      });
    }

    closePopout () {
      this.setState({ popout: null });
    }

    componentDidMount() {
      shuffle(this.state.avatar_links);

      setInterval(() => {
        this.get_notifications();
      }, 3000);

      connect.subscribe((e) => {
        console.log(e);
        let curret_this = this;
        parent_context = this;

        if (e.detail.type === "VKWebAppGetUserInfoResult") {
          user_obj = e.detail.data;
                    
          instance.post('https://kolosyamba.pythonanywhere.com/get_user', {
            user_id: user_obj.id,
          })
          .then(function (response) {
            // console.log(response.data.result)
           if (response.data.result === "no"){
            curret_this.setState({register : true})
            curret_this.setState({loader : false})
            curret_this.setState({ready : true});
           }
           else {
            curret_this.get_users()
            curret_this.setState({register : false});
            // curret_this.setState({loader : false});
            user_global_api = response.data.result;
            curret_this.setState({ready : true});
            if(!response.data.result.notify){
              connect.send("VKWebAppAllowNotifications", {});
            }
          };
          })
          .catch(function (error) {
            console.log(error);
          });

        }
        else if (e.detail.type === "VKWebAppAccessTokenReceived") {
          this.state.access_token = e.detail.data.access_token;
          connect.send("VKWebAppCallAPIMethod", {
            "method": "groups.get",
            "request_id": "groups.get",
            "params": { extended: 1, "user_id": user_obj.id, "v": "5.101",  fields : "activity", lang : "ru", count: 100, "access_token": this.state.access_token }
          });
        }
        else if (e.detail.type === "VKWebAppAllowNotificationsResult") {
          if(e.detail.data.result){
            instance.post('https://kolosyamba.pythonanywhere.com/add_to_push', {
              user_id: user_obj.id,
            })
            .then(function (response) {
            })
            .catch(function (error) {
              console.log(error);
            });
          }
        }
        else if (e.detail.type === "VKWebAppCallAPIMethodResult") {
          if (e.detail.data.request_id === "groups.get") {
            console.log("GOT GROUPS")
            user_groups = e.detail.data.response.items;
          } else if (e.detail.data.request_id === "photos.get") {
            console.log("GOT PHOTOS")
            if( this.state.user_photos.length !== 0){
              this.state.user_photos = [];
            }
            e.detail.data.response.items.map( (item) => { this.state.user_photos.push(item.sizes.pop().url) } )
          }
        }
      })

      connect.send("VKWebAppGetUserInfo", {});
      connect.send("VKWebAppGetAuthToken", { "app_id": 7403106, "scope": "groups,friends"});
    }
  
  
    render () {

      if (this.state.loader){
        return (
         <View activePanel="spinner">
          <Panel id="spinner">
            <PanelHeader>Loading...</PanelHeader>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <Spinner size="large" style={{ marginTop: 100 }} />
            </div>
          </Panel>
        </View>)
      }


      if (this.state.ready){
        if(this.state.register) { 
          return (<RegisterForm  />)
        } else { 
          return (
        <Epic activeStory={this.state.activeStory} tabbar={
          <Tabbar>
              <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'discover'}
              data-story="discover"
              text="Профиль"
            ><Icon24Settings   /></TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'feed'}
              data-story="feed"
              text="Знакомства"
            ><Icon28AddOutline /></TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'messages'}
              data-story="messages"
              label={this.state.notification_count.toString()}
              text="Уведомления"
            ><Icon28Newsfeed /></TabbarItem>
          </Tabbar>
        }>

          <View popout={this.state.popout} id="feed" activePanel="feed">
            <Panel id="feed">
              <PanelHeader>Пользователи</PanelHeader>
            <Group>
              <List>
              {parent_context.state.users.map((item, index) =>
              <Div>
                  <Cell
                    before={<Avatar size={72} src={this.state.avatar_links[index]}/>}
                    size="l"
                    description={item.geo}
                    bottomContent={
                      <div style={{ display: 'flex' }}>
                        <Button onClick={() => {this.start_dialog(item.user_id); this.openDefault() }} mode="outline" size="m">Познакомиться 😉</Button>
                      </div>
                    }
                  >
                    {item.first_name} ( {this.state.gender_mapping[item.gender]}, {item.age} )</Cell>
                    {item.description}
                   <Tabs mode="buttons">
                    <HorizontalScroll>
                    {item.interests.map((interest) =>
                      <TabsItem selected> {interest} </TabsItem>
                    )}
                    </HorizontalScroll>
                  </Tabs>
                  <Separator wide />
                </Div>
                
                  )}
              </List>
            </Group>
            </Panel>
          </View>

          <View id="discover"  activePanel="discover">
          
              <Panel id="discover" separator={false}>
                  <PanelHeaderSimple
                    right={<PanelHeaderButton></PanelHeaderButton>}
                  >
                    <PanelHeaderContent
                      before={<Avatar size={48} src={user_obj.photo_100} />}
                      status={user_global_api.geo}
                    >
                      {user_obj.first_name} {user_obj.last_name}
                    </PanelHeaderContent>
                  </PanelHeaderSimple>

                <Group>

                    <FormLayout>
                      <FormLayoutGroup top="Ваш возраст">
                          <Input name="age" onChange={this.handleChange} defaultValue={user_global_api.age} type="text"/> 
                      </FormLayoutGroup>
                    </FormLayout>

                    <FormLayout>
                        <Textarea onChange={this.handleChange} name="description"  defaultValue={user_global_api.description}  top="О себе"/>
                    </FormLayout>

                    <Group header={<Header mode="secondary">Ваши интересы</Header>}>
                      <Tabs mode="buttons">
                        <HorizontalScroll>
                        {user_global_api.interests.map((item) =>
                          <TabsItem selected> {item} </TabsItem>
                        )}
                        </HorizontalScroll>
                      </Tabs>
                     <Div style={{ fontWeight : 600 }}> Список интересов собран на основе данных о ваших сообществах и подписках. </Div>
                    </Group>

                    <FormLayout>
                      <Select defaultValue={user_global_api.gender} name="sex" onChange={this.handleChange} top="Укажите ваш пол и ориентацию" placeholder="">
                        <option value="male-straight">Мужчина, гетеросексуальный</option>
                        <option value="female-straight">Женщина, гетеросексуальная</option>
                        <option value="male-homo">Мужчина, гомосексуальный</option>
                        <option value="female-homo">Женщина, гомосексуальная</option>
                        <option value="male-bi">Мужчина, бисексуальный</option>
                        <option value="female-bi">Женщина, бисексуальная</option>
                        <option value="non-binary">Другое</option>
                      </Select>
                  </FormLayout>

                  <Group header={<Header mode="secondary">Ваши предпочтения</Header>}>
                  <FormLayout>
                      <Checkbox defaultChecked={user_global_api.preferences.indexOf("male-straight") === -1 ? false : true} onChange={this.handleCheckbox} name="male-straight">Мужчина, гетеросексуальный</Checkbox>
                      <Checkbox defaultChecked={user_global_api.preferences.indexOf("female-straight") === -1 ? false : true} onChange={this.handleCheckbox} name="female-straight">Женщина, гетеросексуальная</Checkbox>
                      <Checkbox defaultChecked={user_global_api.preferences.indexOf("male-homo") === -1 ? false : true} onChange={this.handleCheckbox} name="male-homo">Мужчина, гомосексуальный</Checkbox>
                      <Checkbox defaultChecked={user_global_api.preferences.indexOf("female-homo") === -1 ? false : true} onChange={this.handleCheckbox} name="female-homo">Женщина, гомосексуальная</Checkbox>
                      <Checkbox defaultChecked={user_global_api.preferences.indexOf("male-bi") === -1 ? false : true} onChange={this.handleCheckbox} name="male-bi">Мужчина, бисексуальный</Checkbox>
                      <Checkbox defaultChecked={user_global_api.preferences.indexOf("female-bi") === -1 ? false : true} onChange={this.handleCheckbox} name="female-bi">Женщина, бисексуальная</Checkbox>
                      <Checkbox defaultChecked={user_global_api.preferences.indexOf("non-binary") === -1 ? false : true} onChange={this.handleCheckbox} name="non-binary">Другое</Checkbox>
                  <Button mode="secondary" size="xl" onClick={() => { this.update_user_data() }} >Сохранить изменения</Button>
                  </FormLayout>
                  </Group>

                </Group>
              </Panel>
        </View>


        <View id="messages" activePanel="messages">
            <Panel id="messages">
              <PanelHeader>Уведомления</PanelHeader>
              {this.state.notifications.length === 0 ?  <Div style={{textAlign :"center", marginTop: "200px"}}>Новых уведомлений нет 🤷 </Div> : <Div> </Div> }
                  {this.state.notifications.map((notification) => {
                      if (notification.type === "init"){
                            return (
                            <Div>
                                <Div style={{ fontWeight : 500, paddingLeft : "20px" }}>{notification.from_name} хочет с вами познакомиться 😏</Div>
                                <Div>
                                <Button onClick={ () => {shuffle(this.state.avatar_links); this.setState({ activeStory: "notify" }); this.get_notification_user(notification.from) } } mode="secondary">Подробнее</Button>
                                </Div>
                                <Separator wide />
                            </Div>)
                      }else if (notification.type === "photo"){
                          return (
                          <Div>
                            <Div style={{ fontWeight : 500, paddingLeft : "20px" }}> Посмотрите на фото {notification.from_name} 📷 </Div>
                            <Button onClick={ () => {this.get_photos(notification.from); this.setState({ activeStory: "notify_photo" }); this.get_notification_user(notification.from)} } mode="secondary">Подробнее</Button>
                          </Div>)
                      }else if (notification.type === "q_set"){
                        return (
                        <Div>
                           <Div style={{ fontWeight : 500, paddingLeft : "20px" }}> Вы можете задать два вопроса для {notification.from_name} 🤔 </Div>
                          <Button onClick={ () => {this.get_photos(notification.from); this.setState({ activeStory: "notify_qset" }); this.get_notification_user(notification.from)} } mode="secondary">Подробнее</Button>
                        </Div>)
                      }else if (notification.type === "q_answer"){
                        return (
                        <Div>
                            <Div style={{ fontWeight : 500, paddingLeft : "20px" }}>Ответьте на вопросы, которые вам задал {notification.from_name} 😬 </Div>
                          <Button onClick={ () => {this.get_photos(notification.from); this.setState({ activeStory: "notify_qanswer" , questions_value : notification.value}); this.get_notification_user(notification.from)} } mode="secondary">Подробнее</Button>
                        </Div>)
                      }else if (notification.type === "q_resolve"){
                        return (
                        <Div>
                           <Div style={{ fontWeight : 500, paddingLeft : "20px" }}>{notification.from_name} ответил на ваши вопросы 👉 </Div>
                          <Button onClick={ () => {this.get_photos(notification.from); this.setState({ activeStory: "notify_qresolve" , questions_value : notification.value}); this.get_notification_user(notification.from)} } mode="secondary">Подробнее</Button>
                        </Div>)
                      }
                       else if (notification.type === "match"){
                        return (
                        <Div>
                           <Div style={{ fontWeight : 500, paddingLeft : "20px" }}>Вы подходите {notification.from_name} ! Получите ссылку на страницу 😌 </Div>
                          <Button onClick={ () => {this.get_photos(notification.from); this.setState({ activeStory: "notify_match" , questions_value : notification.value}); this.get_notification_user(notification.from)} } mode="secondary">Подробнее</Button>
                        </Div>)
                      }else if (notification.type === "decline"){
                        return (
                        <Div>
                           <Div style={{ fontWeight : 500, paddingLeft : "20px" }}> {notification.from_name} отклонил ваш запрос. Познакомьтесь с кем-нибудь другим 👽 </Div>
                        </Div>)
                      }
                    }
                  )}
            </Panel>
          </View>
        
        
          {this.state.current_notification !== {} ? 
          <View id="notify" activePanel="notify">
              <Panel id="notify">
                <PanelHeader left={<PanelHeaderBack onClick={ () => {this.setState({ activeStory: "messages" });}}  />}>
                      Уведомление
                </PanelHeader>
                <Div>
                  <Cell
                    before={<Avatar size={72} src={this.state.avatar_links[0]}/>}
                    size="l"
                    description={this.state.current_notification.geo}
                  >
                    {this.state.current_notification.first_name}</Cell>
                    {this.state.current_notification.description}
                   <Tabs mode="buttons">
                    <HorizontalScroll>
                    {this.state.current_notification.interests.map((interest) =>
                      <TabsItem selected> {interest} </TabsItem>
                    )}
                    </HorizontalScroll>
                  </Tabs>
                  <Div style={{display: 'flex'}}>
                    <Button style={{ padding : "10px" }} size="l" onClick={ () => { shuffle(this.state.avatar_links); this.resolve_notification(this.state.current_notification.user_id, "init", true); this.setState({ activeStory: "messages" }) } }  stretched mode="commerce">Принять</Button>
                    <Button style={{ padding : "10px" }} size="l" onClick={ () => { shuffle(this.state.avatar_links); this.resolve_notification(this.state.current_notification.user_id, "init", false); this.setState({ activeStory: "messages" }) } }  stretched mode="destructive">Отклонить</Button>
                  </Div>
                </Div>
              </Panel>
         </View> : <Div></Div>}

         {this.state.current_notification !== {} ? 
          <View id="notify_photo" activePanel="notify_photo">
              <Panel id="notify_photo">
                <PanelHeader left={<PanelHeaderBack onClick={ () => {this.setState({ activeStory: "messages" });}}  />}>
                      Уведомление
                </PanelHeader>
                <Div>
                  <Cell
                    before={<Avatar size={72} src={this.state.avatar_links[0]}/>}
                    size="l"
                    description={this.state.current_notification.geo}
                  >
                    {this.state.current_notification.first_name}</Cell>
                    <Group header={<Header mode="secondary">Фото</Header>}>
                      <Gallery
                        slideWidth="100%"
                        style={{ height: 400 }}
                        bullets="dark"
                      >
                        {this.state.user_photos.map((photo) => (
                          <div style={{backgroundSize: "contain" ,backgroundRepeat: "no-repeat", marginRight: "auto",marginLeft: "auto", display: "block", width: "90%", backgroundImage: "url(" + photo + ")"}}>
                          </div>
                        ))}
                      </Gallery>
                    </Group>
                  <Div style={{display: 'flex'}}>
                    <Button style={{ padding : "10px" }}  size="l" onClick={ () => { shuffle(this.state.avatar_links); this.resolve_notification(this.state.current_notification.user_id, "photo", true); this.setState({ activeStory: "messages" }) } }  stretched mode="commerce">Принять</Button>
                    <Button style={{ padding : "10px" }}  size="l" onClick={ () => { shuffle(this.state.avatar_links); this.resolve_notification(this.state.current_notification.user_id, "photo", false); this.setState({ activeStory: "messages" }) } }  stretched mode="destructive">Отклонить</Button>
                  </Div>
                </Div>
              </Panel>
         </View> : <Div></Div>}


         {this.state.current_notification !== {} ? 
          <View id="notify_qset" activePanel="notify_qset">
              <Panel id="notify_qset">
                <PanelHeader left={<PanelHeaderBack onClick={ () => {this.setState({ activeStory: "messages" });}}  />}>
                      Вопросы
                </PanelHeader>
                <Div>
                    <Group >
                       Вы можете задать два вопроса для {this.state.current_notification.first_name}. Хорошо подумайте, сейчас это единственный способ узнать больше об этом человеке 👀 
                      <FormLayout>
                    <FormLayoutGroup top="Первый вопрос">
                      <Input name="q_1" type="text" />
                    </FormLayoutGroup>

                    <FormLayoutGroup top="Второй вопрос">
                      <Input name="q_2" type="text" />
                    </FormLayoutGroup>
                  </FormLayout>
                    </Group>
                  <Div style={{display: 'flex'}}>
                    <Button size="l" onClick={ () => { this.resolve_notification(this.state.current_notification.user_id, "q_set", [document.getElementsByName("q_1")[0].value, document.getElementsByName("q_2")[0].value]); this.setState({ activeStory: "messages" }) } }  stretched>Отправить</Button>
                  </Div>
                </Div>
              </Panel>
         </View> : <Div></Div>}


         {this.state.current_notification !== {} ? 
          <View id="notify_qanswer" activePanel="notify_qanswer">
              <Panel id="notify_qanswer">
                <PanelHeader left={<PanelHeaderBack onClick={ () => {this.setState({ activeStory: "messages" });}}  />}>
                      Вопросы
                </PanelHeader>
                <Div>
                    <Group >
                      {this.state.current_notification.first_name} задал вам 2 вопроса:
                      <FormLayout>
                    <FormLayoutGroup top={this.state.questions_value[0]}>
                      <Input name="qa_1" type="text" />
                    </FormLayoutGroup>

                    <FormLayoutGroup top={this.state.questions_value[1]}>
                      <Input name="qa_2" type="text" />
                    </FormLayoutGroup>
                  </FormLayout>
                    </Group>
                  <Div style={{display: 'flex'}}>
                    <Button size="l" onClick={ () => { this.resolve_notification(this.state.current_notification.user_id, "q_answer", [ {"question" : this.state.questions_value[0], "answer": document.getElementsByName("qa_1")[0].value}, {"question" : this.state.questions_value[1], "answer" : document.getElementsByName("qa_2")[0].value}]); this.setState({ activeStory: "messages" }) } }  stretched>Отправить</Button>
                  </Div>
                </Div>
              </Panel>
         </View> : <Div></Div>}

         {this.state.current_notification !== {} ? 
          <View id="notify_qresolve" activePanel="notify_qresolve">
              <Panel id="notify_qresolve">
                <PanelHeader left={<PanelHeaderBack onClick={ () => {this.setState({ activeStory: "messages" });}}  />}>
                      Вопросы
                </PanelHeader>
                <Div>
                    <Group >
                      {this.state.current_notification.first_name} ответил на ваши вопросы
                      <Group header={<Header mode="secondary">{this.state.questions_value[0]['question']}</Header>}>
                        {this.state.questions_value[0]['answer']}
                      </Group>
                      <Group header={<Header mode="secondary">{this.state.questions_value[1]['question']}</Header>}>
                        {this.state.questions_value[1]['answer']}
                      </Group>
                    </Group>
                  <Div style={{display: 'flex'}}>
                    <Button style={{ padding : "10px" }}  size="l" onClick={ () => {  this.resolve_notification(this.state.current_notification.user_id, "q_resolve", true); this.setState({ activeStory: "messages" }) } }  stretched mode="commerce">Принять</Button>
                    <Button style={{ padding : "10px" }}  size="l" onClick={ () => {  this.resolve_notification(this.state.current_notification.user_id, "q_resolve", false); this.setState({ activeStory: "messages" }) } }  stretched mode="destructive">Отклонить</Button>
                  </Div>
                </Div>
              </Panel>
         </View> : <Div></Div>}


         {this.state.current_notification !== {} ? 
          <View id="notify_match" activePanel="notify_match">
              <Panel id="notify_match">
                <PanelHeader left={<PanelHeaderBack onClick={ () => {this.setState({ activeStory: "messages" });}}  />}>
                      Match!
                </PanelHeader>
                <Div>
                  <Div>
                    <Div style={{ fontWeight : 600 }}>  Ссылка на пользователя:  </Div> 
                      <Button href={"https://vk.com/id" + this.state.current_notification.user_id} size="xl" mode="secondary">Link</Button>
                    </Div>
                  </Div>
              </Panel>
         </View> : <Div></Div>}
          
        </Epic>
      )
    }
    
    } else{
      return <div />
    }
  }
}


  class RegisterForm extends React.Component {
    constructor (props) {
      super(props);
  
      this.state = {
        activeStory : "discover",
        sex : "male-straight",
        pref : [],
        age : 18,
        description : ""
      };
      // this.handleChange_sex = this.handleChange_sex.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.onStoryChange = this.onStoryChange.bind(this);
      this.handleCheckbox = this.handleCheckbox.bind(this); 
      this.register_user = this.register_user.bind(this);
    } 

    handleChange(e) {
      const { name, value } = e.currentTarget;
      console.log(name, value );
      this.setState({ [name]: value });
    }

    handleCheckbox(e) {
      const { name, value } = e.currentTarget;
      if (e.currentTarget.checked){
        this.state.pref.push(name);
      }else{
        this.state.pref.splice( this.state.pref.indexOf(name),1 );
      }
    }


    onStoryChange (e) {
      this.setState({ activeStory: e.currentTarget.dataset.story })
    }

    register_user() {
      parent_context.setState({loader: true})
      instance.post('https://kolosyamba.pythonanywhere.com/signup', {
        user_id: user_obj.id,
        age: this.state.age,
        geo : user_obj.city.title,
        groups : user_groups,
        description : this.state.description,
        gender : this.state.sex,
        preferences : this.state.pref,
        first_name : user_obj.first_name
      })
        .then(function (response) {
          if (response.data.error) {
            alert(response.data.error);
          }
          else{
            parent_context.get_users()
            instance.post('https://kolosyamba.pythonanywhere.com/get_user', {
              user_id: user_obj.id,
            })
            .then(function (response) {
             if (response.data.result === "no"){
              alert("wtf??")
             }
             else {
              user_global_api = response.data.result;
              parent_context.setState({ready : true});
              parent_context.setState({register: false})
              parent_context.setState({loader: false})
              console.log(user_global_api);
            };
            })
            .catch(function (error) {
              console.log(error);
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  
    render () {
      return (
<Root activeView={this.state.activeStory}>

    <View id="discover" activePanel="discover">
      <Panel id="discover" separator={false}>
          <PanelHeaderSimple
            right={<PanelHeaderButton></PanelHeaderButton>}
          >
            <PanelHeaderContent
              before={<Avatar size={48} src={user_obj.photo_100} />}
            >
              {user_obj.first_name} {user_obj.last_name}
            </PanelHeaderContent>
          </PanelHeaderSimple>

        <Group> 
            <Div style={{padding : "20px"}}> Приветствуем в приложении для знакомств “SUP”. Расскажите вашим будущим мэтчам о себе 🙌 </Div>
            <FormLayout>
              <FormLayoutGroup top="Введите ваш возраст">
                <Input name="age" onChange={this.handleChange} type="text" placeholder="18" />
              </FormLayoutGroup>
            </FormLayout>

            <FormLayout>
                <Textarea onChange={this.handleChange} name="description" top="О себе" />
            </FormLayout>

            <FormLayout>
              <Select name="sex" onChange={this.handleChange} top="Укажите ваш пол и ориентацию" >
                <option value="male-straight">Мужчина, гетеросексуальный</option>
                <option value="female-straight">Женщина, гетеросексуальная</option>
                <option value="male-homo">Мужчина, гомосексуальный</option>
                <option value="female-homo">Женщина, гомосексуальная</option>
                <option value="male-bi">Мужчина, бисексуальный</option>
                <option value="female-bi">Женщина, бисексуальная</option>
                <option value="non-binary">Другое</option>
              </Select>
          </FormLayout>

          <Group header={<Header mode="secondary">Ваши предпочтения</Header>}>
          <FormLayout>
              <Checkbox onChange={this.handleCheckbox} name="male-straight">Мужчина, гетеросексуальный</Checkbox>
              <Checkbox onChange={this.handleCheckbox} name="female-straight">Женщина, гетеросексуальная</Checkbox>
              <Checkbox onChange={this.handleCheckbox} name="male-homo">Мужчина, гомосексуальный</Checkbox>
              <Checkbox onChange={this.handleCheckbox} name="female-homo">Женщина, гомосексуальная</Checkbox>
              <Checkbox onChange={this.handleCheckbox} name="male-bi">Мужчина, бисексуальный</Checkbox>
              <Checkbox onChange={this.handleCheckbox} name="female-bi">Женщина, бисексуальная</Checkbox>
              <Checkbox onChange={this.handleCheckbox} name="non-binary">Другое</Checkbox>
           <Button mode="secondary" onClick={() => { this.register_user(); }} size="xl">Продолжить</Button>
          </FormLayout>
          </Group>

        </Group>
       </Panel>
    </View>

</Root>
      )
    }
  }


ReactDOM.render(<Example />, document.getElementById('root'));