import './App.css';
import join from './components/Join/join';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom'
const ENDPOINT="http://localhost:5000"

function App() {
  
  return (
    <div className="App">
      <Router>
        <Route path="/" component={join} />
        <Route path="/chat" />

      </Router>
    </div>
  );
}

export default App;
