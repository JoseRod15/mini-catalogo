import { Link } from "react-router-dom";
import { useState } from "react";
import FormularioAgregarLibro from "./FormularioAgregarLibro";

const ListaLibro = ({libros}) => {
    const [ListaLibro,setListaLibro] = useState(libros);
    const [categoria,setCategoria] = useState("");
    const librosFiltrados = ListaLibro.filter(libro =>libro.categoria === categoria || !categoria);

    const agregarLibro = (nuevoLibro) =>{
        setListaLibro([...ListaLibro,nuevoLibro])
    }
    
    return (
        <>

        <h1>Formulario para Agregar Libros</h1>
        <FormularioAgregarLibro agregarLibro= {agregarLibro}></FormularioAgregarLibro>
        <h1>Catalogo de libros</h1>
        <label className="categorias">Categoria:</label>
        <select className="SelectBox" onChange={(e)=>setCategoria(e.target.value)}>
            <option key="0" value="">Todos</option>
            <option key="1" value="Novela">Novela</option>
            <option key="2" value="Distopía">Distopia</option>
            <option key="3" value="Misterio">Misterio</option>
            <option key="4" value="Clásico">Clasicos</option>
            <option key="5" value="Épica">Epica</option>
            <option key="6" value="Romance">Romance</option>
            <option key="7" value="Ciencia Ficción">Ciencia Ficcion</option>
            <option key="8" value="Fantasía">Fantasia</option>
        </select>
        <div className="book-grid">
            {
                librosFiltrados.map((libro)=>(
                    <div key= {libro.id} className="book-card">
                        <div className="book-title">{libro.titulo}</div>
                        <div>{libro.descripcion}</div>
                        <div>{libro.autor}</div>
                        <div>{libro.categoria}</div>
                        <Link to={`/libro/${libro.id}`}>Ver mas</Link>

                    </div>
                ))
            }
        </div>
        </>
    )
}

export default ListaLibro;
