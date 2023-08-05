import reactlogo from './react-logo.svg';
import electronlogo from './electron-logo.svg'
import springlogo from './spring-logo.svg'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo-container'>
          <img src={reactlogo} className="App-logo" alt="react-logo" />
          <img src={electronlogo} className="App-logo" alt="electron-logo" />
          <img src={springlogo} className="App-logo" alt="spring-logo" />
        </div>
        <p>
          Congratulations Your App Runs Great
        </p>
      </header>
    </div>
  );
}

export default App;
