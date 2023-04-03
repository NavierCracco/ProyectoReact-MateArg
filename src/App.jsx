import { Route, Routes } from 'react-router-dom';
import './App.css'
import CarritoPage from './components/CarritoPage';
import ContactoPage from './components/ContactoPage';
import InicioPage from './components/InicioPage';
import Navbar from './components/Navbar';
import ProductosPage from './components/ProductosPage';
import CuraTuMatePage from './components/TipPage';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<InicioPage />} />
          <Route path='/productos' element={<ProductosPage />} />
          <Route path='/curatumate' element={<CuraTuMatePage />} />
          <Route path='/contacto' element={<ContactoPage />} />
          <Route path='/carrito' element={<CarritoPage />} />
          {/* <Route path='/productos/:categoria/:id' element={<ItemDetailContainer />} /> */}
        </Routes>
    </>
  )
}

export default App
