import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from "./shared/chat.service"
import {RouterModule} from "@angular/router";

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'chat/lobby',
    pathMatch: 'full'
  },
  {
    path: 'chat/:room',
    component: ChatComponent
  },
  {
    path: 'chat',
    redirectTo: 'chat/lobby',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
