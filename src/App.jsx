import { Routes, Route } from "react-router-dom";
import { Login } from "./componentes/Login.jsx";
import { Dashboard } from "./componentes/Dashboard.jsx";
import { NuevoEstudiante } from "./componentes/NuevoEstudiante.jsx";
import { EditarEstudiante } from "./componentes/EditarEstudiante.jsx";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/Estudiante/Nuevo" element={<NuevoEstudiante />} />
           <Route path="/estudiante/:IdEstudiante" element={<EditarEstudiante />} />
      </Routes>
    </>
  );
}
