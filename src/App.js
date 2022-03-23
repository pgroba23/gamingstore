import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import { CustomProvider } from './context/CartContext';
import { useState } from 'react';

import './index.css';

function App() {
  const [search, setSearch] = useState('');
  return (
    <CustomProvider>
      <div className="grid grid-rows-auto h-screen mx-auto">
        <BrowserRouter>
          <NavBar search={search} setSearch={setSearch} />
          <Home search={search} />
          <Footer />
        </BrowserRouter>
      </div>
    </CustomProvider>
  );
}

export default App;
