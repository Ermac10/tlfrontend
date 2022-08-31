import './App.css';
import Profile from './components/Profile'
import Logs from './components/Logs'
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <Profile /> <Nav />
      <Logs />
    </div>
  );
}

export default App;
