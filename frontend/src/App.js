import electronlogo from './electron-logo.svg';
import reactlogo from './react-logo.svg';
import springlogo from './spring-logo.svg';

import './App.css';

import Counter from './components/Counter';
import { IncrementButton } from './components/IncrementButton';
import { Loader } from './components/Loader';
import { ViewButton } from './components/ViewButton';
import { Success } from './components/Success';





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
          Congratulations Your App Runs Great <br /> Simulate Backend Calls
        </p>


      </header>
      <body>
        <Loader />
        <Success />
        <Counter />

        <section className='buttons-wrap'>
          <IncrementButton />
          <ViewButton />
        </section>
      </body>
    </div>
  );
}

export default App;
