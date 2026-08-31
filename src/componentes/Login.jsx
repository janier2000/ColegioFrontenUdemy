import { useState } from "react";
import * as API from "../servicios/data";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [Usuario, setUsuario] = useState({ usuario: "", password: "" });
  const navigate = useNavigate();

  async function ClickIniciar(e) {
    e.preventDefault();
    const response = await API.login(Usuario.usuario, Usuario.password);
    console.log(response);
    if (response.length != 0) {
       sessionStorage.setItem("usuario", response);
       navigate("/dashboard");
    } else {
      alert("Login incorrecto");
      // Swal.fire("Error", "Error al realizar el login", "error");
    }
  }

  return (
    <>
      <h1>Iniciar sesión</h1>

      <div style={{ padding: "20px" }}>
        <form id="formulario" onSubmit={ClickIniciar}>
          <label htmlFor="usuario">Usuario</label>
          <input
            required
            type="text"
            id="usuario"
            onChange={(e) =>
              setUsuario({ ...Usuario, usuario: e.target.value })
            }
          />
          <label htmlFor="pass">Password</label>
          <input
            required
            type="password"
            id="pass"
            onChange={(e) =>
              setUsuario({ ...Usuario, password: e.target.value })
            }
          />
          <input type="submit" id="enviar" value="Enviar" />
        </form>
      </div>
    </>
  );
}