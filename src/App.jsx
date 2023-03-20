import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Contacto from './components/ContactoPage';
import Inicio from './components/InicioPage';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar';
import ProductosPage from './components/ProductosPage';
import CuraTuMate from './components/TipPage';

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
          <Route path='/' element={<Inicio />} />
          <Route path='/productos' element={<ProductosPage productos={productos}/>} />
          <Route path='/curatumate' element={<CuraTuMate />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/productos/:categoria/:id' element={<ItemDetailContainer productos={productos}/>} />
        </Routes>
    </>
  )
}

export default App
