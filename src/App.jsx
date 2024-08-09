import './App.css';
import Header from './components/header/Header';
import WeatherBoard from './components/weather/WeatherBoard';
import { FavouriteProvider, WeatherProvider } from './provider';

function App() {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        <div className='grid place-items-center h-screen'>
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </FavouriteProvider>
    </WeatherProvider>
  );
}

export default App;
