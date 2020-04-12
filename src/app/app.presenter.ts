import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppPresenter {
  socket: WebSocket;

  constructor() { }

  startRandomDataGeneration(): void {
    this.socket = new WebSocket('ws://localhost:8080');

    this.socket.onopen = () => {
      console.log('** Websocket Opened **');
      setInterval(() => {
        const date = new Date();
        this.socket.send(JSON.stringify({ value: Math.trunc(Math.random() * 1024), date: date }));
      }, 10000);
    };
  }

  stopRandomDataGeneration(): void {
    console.log('** Closing websocket **');
    this.socket.close();
  }
}
