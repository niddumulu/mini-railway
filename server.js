const WebSocket = require('ws');

const wss = new WebSocket.Server({
  host: '0.0.0.0',
  port: 8080
});

wss.on('connection', ws => {
  console.log('🔌 client connected');

  ws.on('message', msg => {
    wss.clients.forEach(c => {
      if (c !== ws && c.readyState === 1) {
        c.send(msg.toString());
      }
    });
  });

  ws.on('close', () => {
    console.log('❌ client disconnected');
  });
});

console.log('🚄 Mini-Railway running on 0.0.0.0:8080');
