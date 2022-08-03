import './App.css';
import { ReactComponent as BackArrow } from './assets/back-arrow-navigation-svgrepo-com.svg'
import TownSelect from './components/TownSelect/TownSelect';
import CityWeather from './components/CityWeather/CityWeather';
import WeatherContext from './context/weather';

import { useState, useContext } from 'react';


function App() {
  const [currentCity, setCurrentCity] = useState("")
  let { background, changeBackground } = useContext(WeatherContext)
  const handleReturn = () => {
    changeBackground('home')
    setCurrentCity("")
  }
  return (
      <div className="App" style={{
          backgroundImage: `var(${background})`
        }}>
        <nav className='App-header'>
          {!!currentCity && <BackArrow fill="white" width="8vw" height="4vh" onClick={() => handleReturn()} />}
        </nav>
        <main>
          {!!currentCity ? <CityWeather city={currentCity} /> : <TownSelect setCurrentCity={setCurrentCity} />}
        </main>
      </div>
  );
}

export default App;
