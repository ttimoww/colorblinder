import express from 'express';
import path from 'path';
import { Server } from 'colyseus';
import { createServer } from 'http';

const port = Number(process.env.PORT || 4000);
const app = express();

// Attach WebSocket Server on HTTP Server.
const gameServer = new Server({
    server: createServer(app),
    express: app
  });

gameServer.onShutdown(function(){
console.log(`game server is going down.`);
});

app.use(express.static(path.join(__dirname, 'client/build')));

gameServer.listen(port);