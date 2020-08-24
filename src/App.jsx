import { h } from 'preact';
import logo from './logo.png';
import './App.css';
import CatsDogsDetection from './CatsDogsDetection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CatsDogsDetection />
      </header>
    </div>
  );
}

export default App;
