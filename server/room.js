function room() {
  //название коменты
  let name;
  //пользователи которые находятся в комнате 
  let users = [];
  //id пользователя у которого есть права на изменение 
  let adminID = 0;
  //статус комнаты 
  let status = "lobby";

  //вызываем колбек функции которая уничтожает эту комнату 
  let onEmptyRoom;
  
  //добавление пользователя при успещной авторизации 
  let addUser = (ws,password,isAdmin) => {
    ws.addEventListener("message", listener, false);

  };

  let deleteUser = (id) => {
    delete this.users[id];
    if (this.users <= 0) {
      onEmptyRoom();
    }
  };
}
