import mazie from './Pictures/mazie.jpg';
import neeko from './Pictures/neeko.jpg';
import family from './Pictures/family.jpg';
import together from './Pictures/together.jpg';
import cafe from './Pictures/ios-cafe.svg';
import ProgressBar from './ProgressBar'
import WarningBar from './WarningBar'
import './App.css';
import axios from 'axios';

function App() {
  function sendToDiscord(){
  axios.post('https://discord.com/api/webhooks/830847704225284108/C6uwMW2WQxvZ-fbHJmh2t4ZvZSzgQh7ttBiuHB5yQFoQ3N5sqQ_qwIyB0TIqQbxb-arQ', {
    content: 'Happy Octopus'
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
        {/* <div style = {{width: '100%'}}> */}
          <div className="Body-text">
            ABOUT ME<br/>
            I live in Nashville, TN<br/>I've been married for 4.5 years<br/>
            I graduated with a BA in Information Systems in 2017<br/>I am super bubbly and fun<br/>
            I smile all the time<br/>May or may not be a super hero<br/>
          </div>
        {/* </div> */}
        {/* <div style = {{width: '100%'}}> */}
          <div className="Mini-header-text">
            SKILLS<br/>
          </div>
          <div className="Skills-text">
            <p>C <ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar></p>
            <p>JavaScript <ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar></p>
            <p>React <ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar></p>
            <p>EasyGui <ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar></p>
            <p>VSCode <ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar></p>
            <p>HTML/CSS <ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar></p>
            <p>Microsoft Office Suite <ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar><ProgressBar></ProgressBar></p>
          </div>
          <div className="Skills-text">
          Android<br/>Customer Communication<br/>PSroduct Management<br/>Risk Assessment<br/>Java<br/>Windows<br/><br/>
          </div>
        {/* </div> */}
        <button onClick = {sendToDiscord}>Message me here</button>
      </div>
    </div>
   ); 
}

export default App;
