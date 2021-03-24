import mazie from './Pictures/mazie.jpg';
import neeko from './Pictures/neeko.jpg';
import family from './Pictures/family.jpg';
import together from './Pictures/together.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={together} className="App-logo" alt="logo" />
        <img src={neeko} className="App-logo" alt="logo" />
        <img src={mazie} className="App-logo" alt="logo" />
        <img src={family} className="App-logo" alt="logo" />
      </header>
      <p className="Header-text">
          KATELYNN'S WEBSITE<br/>
          Welcome to my website!<br/>Feel free to look around!
        </p>
      <div className="App-body">
    
      </div>
    </div>
   ); 
}

export default App;
