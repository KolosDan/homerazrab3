import React from 'react';
import ReactDOM from 'react-dom';
import { View, Panel, PanelHeader, Group, Cell, Epic, Tabbar, TabbarItem,
List, Button , Avatar , PanelHeaderContent, PanelHeaderButton, PanelHeaderSimple,
Radio, FormLayoutGroup, Select, FormLayout , Root , Textarea, Input, Checkbox, Header, Spinner}  from '@vkontakte/vkui';
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
let user_groups = [];
let user_global_api = {};

const instance = axios.create({
  headers: { 'Access-Control-Allow-Origin': "*" , "X-Requested-With" : "XMLHttpRequest"}
});

connect.send("VKWebAppInit", {});

class Example extends React.Component {
    constructor (props) {
      super(props);
  
      this.state = {
        ready : false,
        activeStory: 'discover', 
        access_token : "",
        register : true,
        loader : true
      };
      this.onStoryChange = this.onStoryChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleCheckbox = this.handleCheckbox.bind(this); 
    }

    handleChange(e) {
      const { name, value } = e.currentTarget;
      console.log(name, value );
      this.setState({ [name]: value });
    }

    handleCheckbox(e) {
      const { name, value } = e.currentTarget;
      console.log(name, value );
      if (e.currentTarget.checked){
        this.state.pref.push(name);
      }else{
        this.state.pref.splice( this.state.pref.indexOf(name),1 );
      }
    }
    
    onStoryChange (e) {
      this.setState({ activeStory: e.currentTarget.dataset.story })
    }

    componentDidMount() {
      connect.subscribe((e) => {
        console.log(e);
        let curret_this = this;

        if (e.detail.type === "VKWebAppGetUserInfoResult") {
          user_obj = e.detail.data;
          console.log(user_obj);
          
          instance.post('https://cors-anywhere.herokuapp.com/http://35.228.42.210:5000/get_user', {
            user_id: user_obj.id,
          })
          .then(function (response) {
            console.log(response.data.result)
           if (response.data.result == "no"){
            curret_this.setState({register : true})
            curret_this.setState({loader : false})
            curret_this.setState({ready : true});
           }
           else {
            curret_this.setState({register : false});
            curret_this.setState({loader : false})
            user_global_api = response.data.result;
            curret_this.setState({ready : true});
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
            "params": { extended: 1, "user_id": user_obj.id, "v": "5.101",  fields : "activity", lang : "ru", count: 1000, "access_token": this.state.access_token }
          });
        }
        else if (e.detail.type === "VKWebAppCallAPIMethodResult") {
          if (e.detail.data.request_id === "groups.get") {
            user_groups = e.detail.data.response.items;
          }
        }
      })

      connect.send("VKWebAppGetUserInfo", {});
      connect.send("VKWebAppGetAuthToken", { "app_id": 7403106, "scope": "groups,friends" });
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
          return (<RegisterForm setIndex={i => this.setState({register: false})} />)
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
              text="Лента"
            ><Icon28AddOutline /></TabbarItem>
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
                      status={user_global_api.geo}
                    >
                      {user_obj.first_name} {user_obj.last_name}
                    </PanelHeaderContent>
                  </PanelHeaderSimple>

                <Group>

                    <FormLayout>
                      <FormLayoutGroup top="Ваш возраст">
                          <Input name="age" onChange={this.handleChange} value={user_global_api.age} type="text"/> 
                      </FormLayoutGroup>
                    </FormLayout>

                    <FormLayout>
                        <Textarea onChange={this.handleChange} name="description"  value={user_global_api.description}  top="О себе"/>
                    </FormLayout>

                    <FormLayout>
                      <Select defaultValue={user_global_api.gender} name="sex" onChange={this.handleChange} top="Ваш гендер" placeholder="">
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
                      <Checkbox checked={user_global_api.preferences.indexOf("male-straight") == -1 ? false : true} onChange={this.handleCheckbox} name="male-straight">Мужчина Натурал</Checkbox>
                      <Checkbox checked={user_global_api.preferences.indexOf("male-straight") == -1 ? false : true} onChange={this.handleCheckbox} name="female-straight">Женщина Натурал</Checkbox>
                      <Checkbox checked={user_global_api.preferences.indexOf("male-straight") == -1 ? false : true} onChange={this.handleCheckbox} name="male-homo">Мужчина Гомосексуалист</Checkbox>
                      <Checkbox checked={user_global_api.preferences.indexOf("male-straight") == -1 ? false : true} onChange={this.handleCheckbox} name="female-homo">Женщина Гомосексуалист</Checkbox>
                      <Checkbox checked={user_global_api.preferences.indexOf("male-straight") == -1 ? false : true} onChange={this.handleCheckbox} name="male-bi">Мужчина Би</Checkbox>
                      <Checkbox checked={user_global_api.preferences.indexOf("male-straight") == -1 ? false : true} onChange={this.handleCheckbox} name="female-bi">Женщина Би</Checkbox>
                      <Checkbox checked={user_global_api.preferences.indexOf("male-straight") == -1 ? false : true} onChange={this.handleCheckbox} name="non-binary">Не бинарный</Checkbox>
                  <Button mode="secondary" size="xl">Обновить</Button>
                  </FormLayout>
                  </Group>

                </Group>
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
      console.log(name, value );
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
      console.log(user_groups)
      let curret_this = this;
      instance.post('https://cors-anywhere.herokuapp.com/http://35.228.42.210:5000/signup', {
        user_id: user_obj.id,
        age: this.state.age,
        geo : user_obj.city.title,
        groups : user_groups,
        description : this.state.description,
        gender : this.state.sex,
        preferences : this.state.pref
      })
        .then(function (response) {
          if (response.data.error) {
            alert(response.data.error);
          }
          else{
            user_global_api.age = curret_this.state.age;
            user_global_api.geo = user_obj.city.title;
            user_global_api.preferences = curret_this.state.pref;
            user_global_api.gender = curret_this.state.sex;
            user_global_api.description = curret_this.state.description;
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
                <Input name="age" onChange={this.handleChange} type="text" placeholder="18" />
              </FormLayoutGroup>
            </FormLayout>

            <FormLayout>
                <Textarea onChange={this.handleChange} name="description" top="О себе" />
            </FormLayout>

            <FormLayout>
              <Select name="sex" onChange={this.handleChange} top="Ваш гендер" >
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
              <Checkbox onChange={this.handleCheckbox} name="male-straight">Мужчина Натурал</Checkbox>
              <Checkbox onChange={this.handleCheckbox} name="female-straight">Женщина Натурал</Checkbox>
              <Checkbox onChange={this.handleCheckbox} name="male-homo">Мужчина Гомосексуалист</Checkbox>
              <Checkbox onChange={this.handleCheckbox} name="female-homo">Женщина Гомосексуалист</Checkbox>
              <Checkbox onChange={this.handleCheckbox} name="male-bi">Мужчина Би</Checkbox>
              <Checkbox onChange={this.handleCheckbox} name="female-bi">Женщина Би</Checkbox>
              <Checkbox onChange={this.handleCheckbox} name="non-binary">Не бинарный</Checkbox>
           <Button mode="secondary" onClick={() => { this.register_user(); this.props.setIndex() }} size="xl">Продолжить</Button>
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