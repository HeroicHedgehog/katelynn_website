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
        <p className="Body-text">
          ABOUT ME<br/>
          I'm 27 Years old<br/>I live in Nashville, TN<br/>I've been married for 4.5 years<br/>
          I graduated with a BA in Information Systems in 2017<br/>I am super bubbly and fun<br/>
          I smile all the time<br/>May or may not be a super hero<br/>
        </p>
        <p className="Mini-header-text">
          SKILLS<br/>
        </p>
        <p className="Skills-text">
          C<br/>JavaScript<br/>React<br/>EasyGui<br/>VSCode<br/>HTML/CSS<br/>Microsoft Office Suite
        </p>
        <p className="Skills-text2">
        Android<br/>Customer Communication<br/>Product Management<br/>Risk Assessment<br/>Java<br/>Windows<br/><br/>
        </p>
      </div>
    </div>
   ); 
}

export default App;
