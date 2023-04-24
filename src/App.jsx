import './App.css'
import { Carousel } from './components/Carousel';
import { Destaques } from './components/Destaques';
import { Header } from './components/Header'
import { MineBanner } from './components/MineBanner';

function App() {
  return (
    <div className='bg-primary-color'>
      <Header/>
      <Carousel/>
      <Destaques/>
    </div>
  );
}

export default App