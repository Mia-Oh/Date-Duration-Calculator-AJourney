import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Pages/Main';
import Calculator from './Pages/Calculator';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <div className='content'>
          <Routes>
            <Route path="/index.html" element={<Main />}/>
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
