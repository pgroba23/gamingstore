import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import { CustomProvider } from './context/CustomProvider';

import './index.css';

function App() {
  return (
    <CustomProvider>
      <div className="grid grid-rows-auto h-screen mx-auto">
        <BrowserRouter>
          <NavBar />
          <Home />
          <Footer />
        </BrowserRouter>
      </div>
    </CustomProvider>
  );
}

export default App;
