function room(id=0) {
  this.id = id;
  //название коменты
  this.name;
  //пользователи которые находятся в комнате 
  this.users = [];
  //id пользователя у которого есть права на изменение 
  this.adminID = 0;
  //статус комнаты 
  this.status = "lobby";

  //вызываем колбек функции которая уничтожает эту комнату 
  this.onEmptyRoom;
  
  //добавление пользователя при успещной авторизации 
  this.addUser=(ws,password,isAdmin)=>{
    ws.addEventListener("message", listener, id);

  };

  this.deleteUser = (id) => {
    delete this.users[id];
    if (this.users <= 0) {
      onEmptyRoom();
    }
  };

  function update(id)
  {

  }
}
export default room