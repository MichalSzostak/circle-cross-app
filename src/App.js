import rock from './images/rock.png';
import paper from './images/paper.png';
import scissors from './images/scissors.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Choose your move </h1>
      </header>
      <div className='move-pick-container'>
          <button className='move-pick-button'><img src={rock} className='buttonPic' alt="rock" /> Rock</button>
          <button className='move-pick-button'><img src={paper} className='buttonPic' alt="paper" /></button>
          <button className='move-pick-button'><img src={scissors}  className='buttonPic'  alt="scissors" /></button>
        </div>
    </div>
  );
}

export default App;
