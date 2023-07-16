import { app } from "./credenciales.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const db = getFirestore(app);

let formData = {
  id: "",
  nombres: "",
  apellidos: "",
  fechaNacimiento: "",
  cicloIngreso: "",
  cicloEgreso: "",
  campus: "",
  facultad: "",
  carrera: "",
};

document.getElementById("submit").addEventListener("click", async (e) => {
  formData.id = document.getElementById("id").value;
  formData.genero = document.getElementById("genero").value;
  formData.fechaNacimiento = document.getElementById("fechaNacimiento").value;
  formData.cicloIngreso = document.getElementById("cicloIngreso").value;
  formData.cicloEgreso = document.getElementById("cicloEgreso").value;
  formData.campus = document.getElementById("campus").value;
  formData.facultad = document.getElementById("facultad").value;
  formData.carrera = document.getElementById("carrera").value;

  e.preventDefault();
  try {
    saveData(formData);
  } catch (e) {
    console.error("Error al añadir registro");
  }
});

const saveData = (formData) => {
  addDoc(collection(db, "alumnos"), {
    ID: formData.id,
    Genero: formData.genero,
    FechaDeNacimiento: formData.fechaNacimiento,
    CicloDeIngreso: formData.cicloIngreso,
    CicloDeEgreso: formData.cicloEgreso,
    Campus: formData.campus,
    FacultadEscuela: formData.facultad,
    Carrera: formData.carrera,
  });
};
