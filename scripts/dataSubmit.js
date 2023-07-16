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

document.getElementById("id").addEventListener("change", function () {
  formData.id = this.value;
});

document.getElementById("nombres").addEventListener("change", function () {
  formData.nombres = this.value;
});

document.getElementById("apellido").addEventListener("change", function () {
  formData.apellidos = this.value;
});

document
  .getElementById("fechaNacimiento")
  .addEventListener("change", function () {
    formData.fechaNacimiento = this.value;
  });

document.getElementById("cicloIngreso").addEventListener("change", function () {
  formData.cicloIngreso = this.value;
});

document.getElementById("cicloEgreso").addEventListener("change", function () {
  formData.cicloEgreso = this.value;
});

document.getElementById("campus").addEventListener("change", function () {
  formData.campus = this.value;
});

document.getElementById("facultad").addEventListener("change", function () {
  formData.facultad = this.value;
});

document.getElementById("carrera").addEventListener("change", function () {
  formData.carrera = this.value;
});

document.getElementById("submit").addEventListener("click", async (e) => {
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
    Nombres: formData.nombres,
    Apellidos: formData.apellidos,
    FechaDeNacimiento: formData.fechaNacimiento,
    CicloDeIngreso: formData.cicloIngreso,
    CicloDeEgreso: formData.cicloEgreso,
    Campus: formData.campus,
    FacultadEscuela: formData.facultad,
    Carrera: formData.carrera,
  });
};
