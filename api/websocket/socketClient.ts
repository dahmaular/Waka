
export default class SocketClient {
  private socket: WebSocket | null = null;

  connect(url: string) {
    this.socket = new WebSocket(url);

    this.socket.onopen = () => {
      console.log('WebSocket connected');
    };

    this.socket.onmessage = (message) => {
      console.log('Received:', message.data);
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this.socket.onclose = () => {
      console.log('WebSocket closed');
    };
  }

  disconnect() {
    this.socket?.close();
  }

  sendMessage(message: string) {
    this.socket?.send(message);
  }
}
