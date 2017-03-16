import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  constructor() {
  }

  private url = '/';
  private socket;

  sendMessage(message) {
    this.socket.emit('add-message', message);
  }

  getMessages(room) {
    let observable = new Observable(observer => {
      this.socket = io(this.url);

      if(room == null) {
        room = "lobby";
      }

      this.socket.emit('join-room', room);

      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
}
