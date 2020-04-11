import React from 'react';
import ReactDOM from 'react-dom';
import { View, Panel, PanelHeader, Group, Cell, Epic, Tabbar, TabbarItem,
List, Button , Avatar , PanelHeaderContent, PanelHeaderButton, PanelHeaderSimple,
Radio, FormLayoutGroup, Select, FormLayout , Root , Textarea, Input, Checkbox, Header} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import axios from 'axios';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';   
import Icon28BlockOutline from '@vkontakte/icons/dist/28/block_outline';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28SlidersOutline from '@vkontakte/icons/dist/28/sliders_outline';
import * as connect from '@vkontakte/vkui-connect'; 

let user_obj = {};

const instance = axios.create({
  headers: { 'Access-Control-Allow-Origin': "*" }
});

connect.send("VKWebAppInit", {});

class Example extends React.Component {
    constructor (props) {
      super(props);
  
      this.state = {
        ready : false,
        activeStory: 'feed', 
        access_token : "",
        register : true
      };
      this.onStoryChange = this.onStoryChange.bind(this);
    }

    componentDidMount() {
      connect.subscribe((e) => {
        console.log(e);
        if (e.detail.type === "VKWebAppGetUserInfoResult") {
          user_obj = e.detail.data;
          console.log(user_obj);
          this.setState({ready : true});
        }
        else if (e.detail.type === "VKWebAppAccessTokenReceived") {
          this.state.access_token = e.detail.data.access_token;
          connect.send("VKWebAppCallAPIMethod", {
            "method": "groups.get",
            "request_id": "groups.get",
            "params": { extended: 1, "user_id": user_obj.id, "v": "5.101", filter: "groups", count: 1000, "access_token": this.state.access_token }
          });
        }
        else if (e.detail.type === "VKWebAppCallAPIMethodResult") {
          if (e.detail.data.request_id === "groups.get") {
            // console.log(e.detail.data.items);
          }
        }
      })

      connect.send("VKWebAppGetUserInfo", {});
      connect.send("VKWebAppGetAuthToken", { "app_id": 7403106, "scope": "groups,friends" });
    }
  
    
    onStoryChange (e) {
      this.setState({ activeStory: e.currentTarget.dataset.story })
    }
  
    render () {
      if (this.state.ready){
        console.log(this.state.ready);
        if(this.state.register) { 
          return (<RegisterForm setIndex={i => this.setState({register: false})} />)
        } else { 
          return (
        <Epic activeStory={this.state.activeStory} tabbar={
          <Tabbar>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'feed'}
              data-story="feed"
              text="Лента"
            ><Icon28AddOutline /></TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'discover'}
              data-story="discover"
              text="Профиль"
            ><Icon24Settings   /></TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'messages'}
              data-story="messages"
              label="12"
              text="Уведомления"
            ><Icon28Newsfeed /></TabbarItem>
          </Tabbar>
        }>

          <View id="feed" activePanel="feed">
            <Panel id="feed">
              <PanelHeader>Категории</PanelHeader>
            <Group>
              <List>
                <Cell
                  before={<Avatar size={72} />}
                  size="l"
                  description="Че дескрипшон?"
                  bottomContent={
                    <div style={{ display: 'flex' }}>
                      <Button size="m">Подробнее</Button>
                    </div>
                  }
                >
                  Экономика</Cell>
                <Cell
                  before={<Avatar size={72} />}
                  size="l"
                  description="Че дескрипшон?"
                  bottomContent={
                    <div style={{ display: 'flex' }}>
                      <Button onClick={() => { this.setState({ activeStory: 'messages' }) }} size="m">Подробнее</Button>
                    </div>
                  }
                >
                  Физика</Cell>
                <Cell
                  before={<Avatar size={72} />}
                  size="l"
                  description="Че дескрипшон?"
                  bottomContent={
                    <div style={{ display: 'flex' }}>
                      <Button  size="m">Подробнее</Button>
                    </div>
                  }
                >
                  Химия</Cell>
              </List>
            </Group>
            </Panel>
          </View>

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


                <Group >
                  <Cell before={<Icon28Notifications />}>Уведомления</Cell>
                  <Cell before={<Icon28BlockOutline />}>Не беспокоить</Cell>

                  <Cell before={<Icon28UserOutline />}>Учётная запись</Cell>
                  <Cell before={<Icon28SlidersOutline />}>Основные</Cell>
                  
                </Group>
                <FormLayout>
                <Textarea top="О себе" />
                </FormLayout>
            </Panel>
          </View>
          
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
        sex : "men",
        pref : "",
        age : 18
      };
      this.handleChange_sex = this.handleChange_sex.bind(this);
      this.handleChange_age = this.handleChange_age.bind(this);
      this.onStoryChange = this.onStoryChange.bind(this);
    }

    handleChange_sex(event) {
      console.log(event.target.value);
      this.setState({sex: event.target.value});
    }

    handleChange_age(event) {
      console.log("age");
      // this.setState({age: event.target.value});
    }


    onStoryChange (e) {
      this.setState({ activeStory: e.currentTarget.dataset.story })
    }

    register_user() {
      instance.post('http://35.228.42.210:5000/signup', {
        user_id: user_obj.id,
        age: ""
      })
        .then(function (response) {
          if (response.data.error) {
            alert(response.data.error);
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

            <FormLayout>
              <FormLayoutGroup top="Введите ваш возраст">
                <Input onChange={this.handleChange_age()} type="text" placeholder="18" />
              </FormLayoutGroup>
            </FormLayout>

            <FormLayout>
              <Select onChange={this.handleChange()} top="Ваш гендер" placeholder="">
                <option value="male-straight">Мужчина Натурал</option>
                <option value="female-straight">Женщина Натурал</option>
                <option value="male-homo">Мужчина Гомосексуалист</option>
                <option value="female-homo">Женщина Гомосексуалист</option>
                <option value="male-bi">Мужчина Би</option>
                <option value="female-bi">Женщина Би</option>
                <option value="non-binary">Не бинарный</option>
              </Select>
          </FormLayout>

          <Group header={<Header mode="secondary">Ваши предпочтения</Header>}>
          <FormLayout>
              <Checkbox value="male-straight">Мужчина Натурал</Checkbox>
              <Checkbox value="female-straight">Женщина Натурал</Checkbox>
              <Checkbox value="male-homo">Мужчина Гомосексуалист</Checkbox>
              <Checkbox value="female-homo">Женщина Гомосексуалист</Checkbox>
              <Checkbox value="male-bi">Мужчина Би</Checkbox>
              <Checkbox value="female-bi">Женщина Би</Checkbox>
              <Checkbox value="non-binary">Не бинарный</Checkbox>
           <Button mode="secondary" onClick={() => this.props.setIndex()} size="xl">Продолжить</Button>
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