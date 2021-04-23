import mazie from './Pictures/mazie.jpg';
import neeko from './Pictures/neeko.jpg';
import family from './Pictures/family.jpg';
import together from './Pictures/together.jpg';
import ProgressBar1 from './ProgressBar1';
import ProgressBar2 from './ProgressBar2';
import ProgressBar3 from './ProgressBar3';
import ProgressBar4 from './ProgressBar4';
import ProgressBar5 from './ProgressBar5';
import WarningBar from './WarningBar';
import './App.css';
import axios from 'axios';

function App() {
  function sendToDiscord(){
  axios.post('https://discord.com/api/webhooks/830847704225284108/C6uwMW2WQxvZ-fbHJmh2t4ZvZSzgQh7ttBiuHB5yQFoQ3N5sqQ_qwIyB0TIqQbxb-arQ', {
    content: 'Angry Octopus'
    })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
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
          KATELYNN'S WEBSITE<br/>
          Welcome to my website!<br/>Feel free to look around!
        </div>
      <div className="App-body">
        <div className="Mini-header-text">
            ABOUT ME
          </div>
          <div className="Body-text">
            I live in Nashville, TN<br/>I've been married for 4.5 years<br/>
            I graduated with a BA in Information Systems in 2017<br/>I am super bubbly and fun<br/>
            I smile all the time<br/>May or may not be a super hero<br/>
          </div>
          <div className="Mini-header-text">
            SKILLS<br/>
          </div>
          <div className="Skills-body">
            <div className="Skills-text">
              C <ProgressBar4></ProgressBar4>
              JavaScript <ProgressBar3></ProgressBar3>
              React <ProgressBar2></ProgressBar2>
              EasyGui <ProgressBar5></ProgressBar5>
              VSCode <ProgressBar4></ProgressBar4>
              HTML/CSS <ProgressBar3></ProgressBar3>
              Microsoft Office Suite <ProgressBar5></ProgressBar5>
            </div>
            <div className="Skills-text2">
            Android <ProgressBar2></ProgressBar2> 
            Customer Communication<ProgressBar5></ProgressBar5>
            Product Management<ProgressBar3></ProgressBar3>
            Risk Assessment<ProgressBar2></ProgressBar2>
            Java<ProgressBar3></ProgressBar3>
            Windows<ProgressBar5></ProgressBar5>
            </div>
          </div>
        <button onClick = {sendToDiscord}>Message me here</button>
      </div>
    </div>
   ); 
}

export default App;
