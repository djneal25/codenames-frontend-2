import logo from './logo.svg';
import './App.css';
import Gameboard from './components/Gameboard';
import Lobby from './components/Lobby';
import GuesserView from './components/GuesserView';

function App() {
  return (
    <div className="App">
      <Lobby/>
      <Gameboard />
      <GuesserView />
    </div>
  );
}

export default App;
