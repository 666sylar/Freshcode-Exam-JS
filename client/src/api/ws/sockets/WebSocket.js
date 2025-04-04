import { io } from 'socket.io-client';
import CONSTANTS from '../../../constants';

class WebSocket {
  constructor (dispatch, getState, room) {
    this.dispatch = dispatch;
    this.getState = getState;
    this.socket = io(`ws://localhost:3000/${room}`);
    this.listen();
  }

  listen = () => {
    this.socket.on('connect', () => {
      console.log('WebSocket connected');
      this.anotherSubscribes();
    });

    this.socket.on('connect_error', error => {
      console.log('WebSocket connection error:', error);
    });
  };

  anotherSubscribes = () => {};
}

export default WebSocket;
