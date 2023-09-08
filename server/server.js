// const WebSocket = require('ws');
import { WebSocketServer } from 'ws';
import room from './room.js';


const wsServer = new WebSocketServer({port:3000})

wsServer.on('connection', onConnect);
wsServer.on('listening', function(){console.log('Ожидание поодключения')});
wsServer.on('error', function(error){console.log('ошибка: ',error )});
wsServer.on('upgrade', function(){console.log('upgrade')});




let clients = {}

let rooms  = {}

function onConnect(ws) {
    
    let id =parseInt(Math.random()*1000000);
    clients[id] = ws;
    // createRoom(id);
    //{type:"service",action:"welcome"}
    console.log("новое соединение " + id);
    ws.send('Привет');
   
    ws.on('message', function(message) {
      console.log('получено сообщение ' + message);
     
      for (var key in clients) {
        clients[key].send(message);
      }
    });
    
    ws.on('close', function() {
      console.log('соединение закрыто ' + id);
      delete clients[id];
    });
  }

function createRoom(userId){
  let id =parseInt(Math.random()*1000000);
  let newRoom =  new room();
  console.log(newRoom)
  newRoom.addUser(userId);
  // rooms[id] = newRoom;  
  } 
function sendServiceInfo(id,code,...args){
  let msg = JSON.stringify()
  clients[id].send(msg)
}



  
