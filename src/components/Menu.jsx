import { Link } from "react-router-dom";


const Menu = () =>(
    <nav className="navegador">
        <Link className="enlace" to="/">Catalogo de libros</Link>
        <Link className="enlace" to="/acerca-de">Acerca De</Link>
    </nav>
);

export default Menu;