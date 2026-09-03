const URL = "https://localhost:7154/api/";

export function login(usuario, pass) {
  let datos = { usuario: usuario, pass: pass };
  return fetch(URL + `autenticacion/${usuario}/${pass}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.text());
  // .then((response) =>
  //   response.text().then((data) => {
  //     debugger
  //     console.log(data);
  //   }),
  // );
}

export function ObtenerLstEstudiantes(usuario) {
  return fetch(URL + "alumnosProfesor?usuario=" + usuario, {
    headers: {
      "Content-Type": "application/json",
      //'Authorization': 'Bearer '+ token
    },
  }).then((data) => data.json());
}

export function ObtenerDetalleEstudiante(id) {
  return fetch(URL + "Alumno?id=" + id, {
    headers: {
      "Content-Type": "application/json",
      //'Authorization': 'Bearer '+ token
    },
  }).then((data) => data.json());
}

export function EliminarEstudiante(id) {
  return (
    fetch(URL + "Alumno?id=" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        //'Authorization': 'Bearer '+ token
      },
    })
      //.then(data => data.json());
      .then((data) => data.text())
  );
}

export function CrearEstudiante(EstudianteENT) {
  let data = {
    dni: EstudianteENT.dni,
    nombre: EstudianteENT.nombre,
    direccion: EstudianteENT.direccion,
    edad: EstudianteENT.edad,
    email: EstudianteENT.email,
  };
  return (
    fetch(URL + "Alumno?id_asig=" + EstudianteENT.asignatura, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        //'Authorization': 'Bearer '+ token
      },
    })
      //.then(data => data.json());
      .then((data) => data.text())
  );
}

export function EditarEstudiante(student) {
  let data = {
    id: student.id,
    dni: student.dni,
    nombre: student.nombre,
    direccion: student.direccion,
    edad: student.edad,
    email: student.email,
  };
  return (
    fetch(URL + "Alumno", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        //'Authorization': 'Bearer '+ token
      },
    })
      //.then(data => data.json());
      .then((data) => data.text())
  );
}

export function ObtenerCalificaciones(id) {
  return fetch(URL + "calificaciones?idMatricula=" + id, {
    headers: {
      "Content-Type": "application/json",
      //'Authorization': 'Bearer '+ token
    },
  }).then((data) => data.json());
}

export function CrearCalificacion(calificacion, id) {
  // let data = {
  //   descripcion: calificacion.descripcion,
  //   nota: calificacion.nota,
  //   porcentaje: calificacion.porcentaje,
  //   matriculaId: id,
  // };
  return (
    fetch(URL +  `calificacion/${calificacion.descripcion}/${calificacion.nota}/${calificacion.porcentaje}/${id}`, {
      method: "POST",
      // body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        //'Authorization': 'Bearer '+ token
      },
    })
      //.then(data => data.json());
      .then((data) => data.text())
  );
}

export function EliminarCalificacion(id) {
  return (
    fetch(URL + "Calificacion?id=" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        //'Authorization': 'Bearer '+ token
      },
    })
      //.then(data => data.json());
      .then((data) => data.text())
  );
}
