
import logo from './logo.svg';
import Header from './components/header/Header';
import MainSection from './components/MainSection/MainSection';
import Footer from './components/footer/Footer';
import Carousel from './components/carousel/Carousel'
import WeatherCard from './components/weather/WeatherCard';



function App() {
  return (
    <div className="App">
       <Header />
       <MainSection />
       <Carousel />
       <WeatherCard />
       <Footer />
    
    </div>
  );
}

export default App;
