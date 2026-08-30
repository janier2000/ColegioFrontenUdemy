import { useState, useEffect } from "react";

export function Login() {
  const [profesor, setprofesor] = useState({ usuario: "", password: "" });

  return (
    <>
      <Heading>Iniciar sesión</Heading>

      <Box p="20px">
        <form id="formulario">
          <FormLabel>Usuario</FormLabel>
          <Input required type="text" id="usuario" />
          <FormLabel>Password</FormLabel>
          <Input required type="password" id="pass" />
        </form>
      </Box>
    </>
  );
}
