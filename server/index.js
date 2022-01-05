const http=require("http")
const express=require("express")
const cors=require("cors")
const socketIO=require("socket.io")
const app=express();
app.use(cors)
const port=5000||process.env.PORT
app.get("/",(req,res)=>{
    res.send("working")
})
const server=http.createServer(app)
const io=socketIO(server)
io.on("connection",(socket)=>{
    console.log("new connection")
})
server.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)

})