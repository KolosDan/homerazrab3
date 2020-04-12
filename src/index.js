import React from 'react';
import ReactDOM from 'react-dom';
import { View, Panel, PanelHeader, Group, Cell, Epic, Tabbar, TabbarItem,
List, Button , Avatar , PanelHeaderContent, PanelHeaderButton, PanelHeaderSimple,
FormLayoutGroup, Select, FormLayout , Root , Textarea, Input, Checkbox, Header,
Spinner, TabsItem, HorizontalScroll, Tabs, Div, PanelHeaderBack, Alert}  from '@vkontakte/vkui';
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
        popout: null
      };
      this.onStoryChange = this.onStoryChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleCheckbox = this.handleCheckbox.bind(this); 
      this.update_user_data = this.update_user_data.bind(this); 
      this.get_users = this.get_users.bind(this);  
      this.start_dialog = this.start_dialog.bind(this);  
      this.get_notifications = this.get_notifications.bind(this);  
      this.openModal = this.openModal.bind(this);
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
        console.log(response.data.result)
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

    openModal () {
      this.setState({ popout:
        <Alert
          actions={[{
            title: 'Ок',
            autoclose: true,
            mode: 'cancel'
          }]}
          onClose={this.setState({ popout: null })}>
          <h2>Уведомление отправлено</h2>
        </Alert>
      });
    }

    componentDidMount() {

      setInterval(() => {
        this.get_notifications();
      }, 10000);

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
           if (response.data.result == "no"){
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
            console.log("GOT GROUPS")
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
              <PanelHeader>Пользователи</PanelHeader>
            <Group>
              <List>
              {parent_context.state.users.map((item) =>
              <Div>
                  <Cell
                    before={<Avatar size={72} />}
                    size="l"
                    description={item.geo}
                    bottomContent={
                      <div style={{ display: 'flex' }}>
                        <Button onClick={() => {this.start_dialog(item.user_id); this.openModal() }} mode="outline" size="m">Познакомиться😉</Button>
                      </div>
                    }
                  >
                    {item.first_name}</Cell>
                    {item.description}
                   <Tabs mode="buttons">
                    <HorizontalScroll>
                    {item.interests.map((interest) =>
                      <TabsItem selected> {interest} </TabsItem>
                    )}
                    </HorizontalScroll>
                  </Tabs>
                </Div>
                  )}
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
                    </Group>

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
                      <Checkbox defaultChecked={user_global_api.preferences.indexOf("male-straight") == -1 ? false : true} onChange={this.handleCheckbox} name="male-straight">Мужчина Натурал</Checkbox>
                      <Checkbox defaultChecked={user_global_api.preferences.indexOf("female-straight") == -1 ? false : true} onChange={this.handleCheckbox} name="female-straight">Женщина Натурал</Checkbox>
                      <Checkbox defaultChecked={user_global_api.preferences.indexOf("male-homo") == -1 ? false : true} onChange={this.handleCheckbox} name="male-homo">Мужчина Гомосексуалист</Checkbox>
                      <Checkbox defaultChecked={user_global_api.preferences.indexOf("female-homo") == -1 ? false : true} onChange={this.handleCheckbox} name="female-homo">Женщина Гомосексуалист</Checkbox>
                      <Checkbox defaultChecked={user_global_api.preferences.indexOf("male-bi") == -1 ? false : true} onChange={this.handleCheckbox} name="male-bi">Мужчина Би</Checkbox>
                      <Checkbox defaultChecked={user_global_api.preferences.indexOf("female-bi") == -1 ? false : true} onChange={this.handleCheckbox} name="female-bi">Женщина Би</Checkbox>
                      <Checkbox defaultChecked={user_global_api.preferences.indexOf("non-binary") == -1 ? false : true} onChange={this.handleCheckbox} name="non-binary">Не бинарный</Checkbox>
                  <Button mode="secondary" size="xl" onClick={() => { this.update_user_data() }} >Сохранить изменения</Button>
                  </FormLayout>
                  </Group>

                </Group>
              </Panel>
        </View>


        <View id="messages" activePanel="messages">
            <Panel id="messages">
              <PanelHeader>Уведомления</PanelHeader>
                  {this.state.notifications.map((notification) => {
                    console.log(notification)
                      if (notification.type == "init"){
                            return (
                            <Div>
                                {notification.from_name} хочет с вами познакомиться
                                <Div>
                                <Button onClick={ () => { this.setState({ activeStory: "notify" }); } } mode="secondary">Подробнее</Button>
                                </Div>
                            </Div>)
                            }else{
                                return (
                                <Div>
                                  <Button onClick={ () => {this.setState({ activeStory: "notify" }); } } mode="secondary">Подробнее</Button>
                                </Div>)
                            }
                    }
                  )}
            </Panel>
          </View>
        
          <View id="notifiy" activePanel="notifiy">
              <Panel id="notifiy">
                <PanelHeader left={<PanelHeaderBack  data-to="messages" />}>
                      Уведомление
                </PanelHeader>
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
             if (response.data.result == "no"){
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