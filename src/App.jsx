import { Route, Routes } from 'react-router-dom';
import './App.css'
import Contacto from './components/ContactPage';
import Inicio from './components/InicioPage';
import ItemDetail from './components/ItemDetailContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='title-container'>
        <h1>MateArg</h1>
      </div>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/productos/:id' element={<ItemDetail />} />
        </Routes>
      </main>
    </>
  )
}

export default App
