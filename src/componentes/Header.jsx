import {Link} from 'react-router-dom';


export function Header() {
  return (
    <>
      <p>
        <Link to="/cerrar-sesion">Cerrar sesión</Link> / 
        <Link to="/Dashboard">Listado</Link> / 
        <Link to="/Estudiante/Nuevo">Nuevo</Link>
      </p>
    </>
  );
}