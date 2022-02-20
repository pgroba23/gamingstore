import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="grid grid-rows-auto h-screen mx-auto">
      <BrowserRouter>
        <NavBar />
        <Home />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
