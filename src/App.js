import './App.css';
import TopButtons from './components/TopButtons';
import InPuts from './components/InPuts';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getWeatherData from './services/weatherService';
// import UilReact from '@iconscout/react-unicons/icons/uil-react';



function App() {

  const fetchWeather = async () => {
    const data = await getWeatherData('weather', { q: 'india' });
    console.log(data);
  };

  fetchWeather();

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 
    bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl 
    shadow-gray-400'>
      <TopButtons />
      <InPuts />

      <TimeAndLocation />
      <TemperatureAndDetails />

      <Forecast title='hourly forcast' />
      <Forecast title='daily forcast' />

    </div>
  );
}

export default App;
