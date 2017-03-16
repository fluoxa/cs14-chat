import {Component, OnInit, OnDestroy} from '@angular/core';
import {ChatService} from "../shared/chat.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  messages = [];
  connection;
  message;

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute) {
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    const room = this.route.params['room'];
    this.connection = this.chatService.getMessages(room).subscribe(message => {
      this.messages.push(message);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
