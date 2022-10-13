import './App.css';
import TictactoeBoard from './components/TictactoeBoard';
import { connectToGameSvr } from './interface/GameSvrInterface'
function App() {
  connectToGameSvr();
  return (
    <TictactoeBoard />
  );
}

export default App;
