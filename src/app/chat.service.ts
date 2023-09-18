import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private httpClient:HttpClient) { }
  registerUser(user:User){
    return this.httpClient.post("http://12.12.12:7212/api/chat/register-user", user, {responseType:'text'});
  }
}
