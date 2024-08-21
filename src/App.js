
import './App.css';
import ListaLibro from './components/ListaLibros';
import { libros } from './data/libros';
import { peliculas } from './data/pelis';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AcercaDe from './components/AcercaDe';
import PaginaNoFound from './components/PaginaNoFound';
import Menu from './components/Menu';
import DetalleLibro from './components/DetalleDeLibro';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <Menu></Menu>
          <Routes>
            <Route path='/' element={<ListaLibro libros={libros}></ListaLibro>}></Route>
            <Route path='/libro/:id' element={<DetalleLibro libros={libros}></DetalleLibro>} />
            <Route path='/acerca-de' element={<AcercaDe></AcercaDe>}></Route>
            <Route path='*' element={<PaginaNoFound></PaginaNoFound>}></Route>
            
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
