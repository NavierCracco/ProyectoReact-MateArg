import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import CarritoPage from './components/CarritoPage';
import ContactoPage from './components/ContactoPage';
import InicioPage from './components/InicioPage';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar';
import ProductosPage from './components/ProductosPage';
import CuraTuMatePage from './components/TipPage';

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("./JSON/productos.json")
      .then((res) => res.json())
      .then((data) => setProductos(data))
  }, []);

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<InicioPage />} />
          <Route path='/productos' element={<ProductosPage productos={productos}/>} />
          <Route path='/curatumate' element={<CuraTuMatePage />} />
          <Route path='/contacto' element={<ContactoPage />} />
          <Route path='/carrito' element={<CarritoPage />} />
          <Route path='/productos/:categoria/:id' element={<ItemDetailContainer productos={productos}/>} />
        </Routes>
    </>
  )
}

export default App
