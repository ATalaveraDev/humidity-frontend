import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppPresenter {
  socket: WebSocket;
  plants: Array<string>;

  constructor() {
    this.plants = [
      'Plant A',
      'Plant B'
    ];
  }

  startRandomDataGeneration(): void {
    this.socket = new WebSocket('ws://localhost:8080');

    this.socket.onopen = () => {
      console.log('** Websocket Opened **');
      setInterval(() => {
        const date = new Date();
        this.socket.send(JSON.stringify({ value: Math.trunc(Math.random() * 1024), date: date, plant: this.plants[Math.trunc(Math.random() * this.plants.length)] }));
      }, 10000);
    };
  }

  stopRandomDataGeneration(): void {
    console.log('** Closing websocket **');
    this.socket.close();
  }
}
