import './App.css';
import socketIO from "socket.io-client"
const ENDPOINT="http://localhost:5000"
const socket=socketIO(ENDPOINT,{transports:['websocket']})

function App() {
  socket.on("connnect",()=>{

  })
  return (
    <div className="App">
      <h1>working</h1>
    </div>
  );
}

export default App;
