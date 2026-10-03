const { WebSocketServer } = require('ws');

const port = process.env.PORT || 8080;
const wss = new WebSocketServer({ port });

console.log(`WPlace-AutoBot Dashboard Server avviato sulla porta ${port}`);
console.log("In attesa che le schede del bot si connettano...");

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    try {
      const parsed = JSON.parse(data);
      if (parsed && parsed.room) {
        ws.room = parsed.room; // Assegna il client alla stanza
      }
    } catch(e) {}

    // Inoltra il messaggio solo agli altri client nella STESSA stanza
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === 1 && client.room === ws.room) {
        client.send(data.toString());
      }
    });
  });

  ws.on('error', console.error);
});
