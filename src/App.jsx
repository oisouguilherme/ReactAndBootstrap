import './App.css'
import { Carousel } from './components/Carousel';
import { Destaques } from './components/Destaques';
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { Info } from './components/Info';

function App() {
  return (
    <div className='bg-primary-color'>
      <Header/>
      <Carousel/>
      <Destaques/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App
