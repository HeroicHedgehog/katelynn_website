import mazie from './Pictures/mazie.jpg';
import neeko from './Pictures/neeko.jpg';
import family from './Pictures/family.jpg';
import together from './Pictures/together.jpg';
import ProgressBar from './ProgressBar';
import MessageMe from './MessageMe';
import WarningBar from './WarningBar';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <WarningBar text = {"Warning: This website is under construction!"}></WarningBar>
      <header className="App-header">
        <img src={together} className="App-logo" alt="logo" />
        <img src={neeko} className="App-logo" alt="logo" />
        <img src={mazie} className="App-logo" alt="logo" />
        <img src={family} className="App-logo" alt="logo" />
      </header>
      
      <div className="Header-text">
          KATELYNN ROMANOWSKI
        </div>
      <div className="App-body">
          <div className="Mini-header-text">
            SKILLS<br/>
          </div>
          <div className="Skills-body">
            <div className="Skills-text">
              C <ProgressBar count = {4} total = {5}></ProgressBar>
              JavaScript <ProgressBar count = {3} total = {5}></ProgressBar>
              React <ProgressBar count = {2} total = {5}></ProgressBar>
              EasyGui <ProgressBar count = {5} total = {5}></ProgressBar>
              VSCode <ProgressBar count = {4} total = {5}></ProgressBar>
              HTML/CSS <ProgressBar count = {3} total = {5}></ProgressBar>
              Microsoft Office Suite <ProgressBar count = {5} total = {5}></ProgressBar>
            </div>
            <div className="Skills-text2">
            Android <ProgressBar count = {2} total = {5}></ProgressBar> 
            Customer Communication<ProgressBar count = {5} total = {5}></ProgressBar>
            Product Management<ProgressBar count = {3} total = {5}></ProgressBar>
            Risk Assessment<ProgressBar count = {2} total = {5}></ProgressBar>
            Java<ProgressBar count = {2} total = {5}></ProgressBar>
            Windows<ProgressBar count = {5} total = {5}></ProgressBar>
            </div>
          </div>  
        <div className="Mini-header-text">
            ABOUT ME
          </div>
          <div className="Body-text">
            I live in Nashville, TN<br/>I've been married for 4.5 years<br/>
            I graduated with a BA in Information Systems in 2017<br/>I am super bubbly and fun<br/>
            I smile all the time<br/>May or may not be a super hero<br/>
          </div>
          <div className="Mini-header-text">
            MESSAGE ME
          </div>
          <MessageMe></MessageMe>
        
      </div>
    </div>
   ); 
}

export default App;
