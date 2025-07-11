import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRouter.js";
import {Server} from "socket.io";
import { log } from "console";

//create express app and http server
const app = express();
const server = http.createServer(app);

//intiallize socket.io server
export const io = new Server(server, {
    cors: {origin: "*"}
})

//store online users
export const userSocketMap = {};// { userId: socketId }

//Socket.io connectionhandler
io.on("connection", (socket) => {
    const userId= socket.hanshake.quesry.userId;
    console.log("User connected" , userId);

    if(userId){
        userSocketMap[userId] = socket.id;
    }

    //emit online users to all clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("User disconnected", userId);
        delete userSocketMap[userId];
        //emit online users to all clients
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})

//middleware setup  
app.use(express.json({limit: "4mb"}));
app.use(cors());

//Route setup
app.use("/api/status", (req, res) => res.send("Server is live!"));
app.use("/api/auth", userRouter);
app.use("/api/messages" , messageRouter);

//connect to mongodb
await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("Server is running on PORT: " + PORT));