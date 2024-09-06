import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'
import { Server } from 'socket.io'
import { Socket } from 'dgram'
 
const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
 
app.prepare().then(() => {
  
  const httpServer = createServer((req, res) => {
    const parsedUrl = parse(req.url!, true)
    handle(req, res, parsedUrl)
  }).listen(port)

  const io = new Server(httpServer);

  // io.on("connection",(socket)=>{
  //   console.log("connection done")
  //   socket.on('chat message', (msg) => {
  //     console.log(msg)
  //     io.emit('chat message', msg); // Broadcast the message to all connected clients
  //   });
  
  //   socket.on('disconnect', () => {
  //     console.log('User disconnected');
  //   });
  // })

  const userConnections = new Map(); // Maps conversationId to {userSocketId, adminSocketId}

// io.on("connection", (socket) => {
//   socket.on("join", ({ userId, conversationId, isAdmin }) => {
//     if (isAdmin) {
//       // Admin joins
//       if (userConnections.has(conversationId)) {
//         userConnections.get(conversationId).adminSocketId = socket.id;
//       } else {
//         userConnections.set(conversationId, { adminSocketId: socket.id });
//       }
//     } else {
//       // User joins
//       if (userConnections.has(conversationId)) {
//         userConnections.get(conversationId).userSocketId = socket.id;
//       } else {
//         userConnections.set(conversationId, { userSocketId: socket.id });
//       }
//     }
//   });

//   socket.on("chat message", ({ conversationId, senderId, text }) => {
//     const connection = userConnections.get(conversationId);
//     if (!connection) return;

//     if (connection.adminSocketId && connection.userSocketId) {
//       if (socket.id === connection.adminSocketId) {
//         // Admin sent the message, send to the user
//         io.to(connection.userSocketId).emit("chat message", { senderId, text });
//       } else if (socket.id === connection.userSocketId) {
//         // User sent the message, send to the admin
//         io.to(connection.adminSocketId).emit("chat message", { senderId, text });
//       }
//     }
//   });

//   socket.on("disconnect", () => {
//     // Clean up connections if needed
//     userConnections.forEach((value, key) => {
//       if (value.userSocketId === socket.id) {
//         delete value.userSocketId;
//       } else if (value.adminSocketId === socket.id) {
//         delete value.adminSocketId;
//       }
//       if (!value.userSocketId && !value.adminSocketId) {
//         userConnections.delete(key);
//       }
//     });
//   });
// });
 
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  )
})