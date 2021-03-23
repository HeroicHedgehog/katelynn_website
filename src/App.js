import mazie from './Pictures/mazie.jpg';
import neeko from './Pictures/neeko.jpg';
import family from './Pictures/family.jpg';
import together from './Pictures/together.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mazie} className="App-logo" alt="logo" />
        <img src={neeko} className="App-logo" alt="logo" />
        <img src={family} className="App-logo" alt="logo" />
        <img src={together} className="App-logo" alt="logo" />
        <p>
          KATELYNN'S WEBSITE
        </p>
        <p>
          Welcome to my website! Feel free to look around!
        </p>
      </header>
    </div>
  );
}

export default App;
