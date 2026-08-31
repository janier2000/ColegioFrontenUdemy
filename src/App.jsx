import { Routes, Route } from "react-router-dom";
import { Login } from "./componentes/Login.jsx";
import { Dashboard } from "./componentes/Dashboard.jsx";
export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
           <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
