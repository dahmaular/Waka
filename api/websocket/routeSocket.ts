import SocketClient from './socketClient';

const socket = new SocketClient();

export const connectToTransportUpdates = () => {
  socket.connect(process.env.WEBSOCKET_URL || 'ws://localhost:3001');
};

export const disconnectFromUpdates = () => {
  socket.disconnect();
};

export const sendPing = () => {
  socket.sendMessage('ping');
};
