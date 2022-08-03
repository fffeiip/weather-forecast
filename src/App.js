import './App.css';
import { ReactComponent as BackArrow } from './assets/back-arrow-navigation-svgrepo-com.svg'
import TownSelect from './components/TownSelect/TownSelect';
import CityWeather from './components/CityWeather/CityWeather';

import { useState } from 'react';


function App() {
  const [currentCity, setCurrentCity] = useState("")
  return (
    <div className="App">
      <nav className='App-header'>
        {!!currentCity && <BackArrow fill="white" width="8vw" height="4vh" onClick={() => setCurrentCity("")} />}
      </nav>
      <main>
        {!!currentCity ? <CityWeather city={currentCity} /> : <TownSelect setCurrentCity={setCurrentCity} />}
      </main>
    </div>
  );
}

export default App;
