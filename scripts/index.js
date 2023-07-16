window.onload = function () {
  let campusSelect = document.getElementById("campus");
  let campusList = [...new Set(carreras.map((item) => item.Campus))];
  campusList.forEach((campus) => {
    let opt = document.createElement("option");
    opt.value = campus;
    opt.innerHTML = campus;
    campusSelect.appendChild(opt);
  });
  updateFacultad();
  disableTabs();
};

function updateFacultad() {
  let selectedCampus = document.getElementById("campus").value;
  let facultadSelect = document.getElementById("facultad");

  let facultadList = [
    ...new Set(
      carreras
        .filter((item) => item.Campus === selectedCampus)
        .map((item) => item.Facultad_Escuela)
    ),
  ];

  facultadSelect.innerHTML = "";

  facultadList.forEach((facultad) => {
    let opt = document.createElement("option");
    opt.value = facultad;
    opt.innerHTML = facultad;
    facultadSelect.appendChild(opt);
  });

  updateCarrera();
}

function updateCarrera() {
  let selectedCampus = document.getElementById("campus").value;
  let selectedFacultad = document.getElementById("facultad").value;
  let carreraSelect = document.getElementById("carrera");

  let carreraList = [
    ...new Set(
      carreras
        .filter(
          (item) =>
            item.Campus === selectedCampus &&
            item.Facultad_Escuela === selectedFacultad
        )
        .map((item) => item.Carrera)
    ),
  ];

  carreraSelect.innerHTML = "";

  carreraList.forEach((carrera) => {
    let opt = document.createElement("option");
    opt.value = carrera;
    opt.innerHTML = carrera;
    carreraSelect.appendChild(opt);
  });
}

function disableTabs() {
  var tabs = document.getElementsByClassName("nav-link");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.add("disabled");
    tabs[i].setAttribute("tabindex", "-1");
    tabs[i].setAttribute("aria-disabled", "true");
    tabs[i].addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }
}

function goToTab(tabId) {
  if (tabId === "pills-thanks-tab") {
    disableTabs();
  }
  var tab = new bootstrap.Tab(document.getElementById(tabId));
  tab.show();
}

const carreras = [
  {
    Campus: "Aguascalientes",
    Facultad_Escuela: "Arquitectura",
    Carrera: "Arquitectura",
  },
  {
    Campus: "Aguascalientes",
    Facultad_Escuela: "Pedagogía",
    Carrera: "Pedagogía",
  },
  {
    Campus: "Aguascalientes",
    Facultad_Escuela: "Derecho",
    Carrera: "Derecho",
  },
  {
    Campus: "Aguascalientes",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería Bioelectrónica",
  },
  {
    Campus: "Aguascalientes",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería Civil y Administración",
  },
  {
    Campus: "Aguascalientes",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería en Innovación y Diseño",
  },
  {
    Campus: "Aguascalientes",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería en Inteligencia Artificial",
  },
  {
    Campus: "Aguascalientes",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería en Tecnologías Energéticas",
  },
  {
    Campus: "Aguascalientes",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería Industrial",
  },
  {
    Campus: "Aguascalientes",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería Mecatrónica",
  },
  {
    Campus: "Aguascalientes",
    Facultad_Escuela: "Empresariales",
    Carrera: "Administración y Dirección",
  },
  {
    Campus: "Aguascalientes",
    Facultad_Escuela: "Empresariales",
    Carrera: "Administración y Finanzas",
  },
  {
    Campus: "Aguascalientes",
    Facultad_Escuela: "Empresariales",
    Carrera: "Administración y Mercadotecnia",
  },
  {
    Campus: "Aguascalientes",
    Facultad_Escuela: "Empresariales",
    Carrera: "Administración y Negocios Internacionales",
  },
  {
    Campus: "Aguascalientes",
    Facultad_Escuela: "Empresariales",
    Carrera: "Contaduría",
  },
  {
    Campus: "Aguascalientes",
    Facultad_Escuela: "Dirección de Negocios Alimentarios",
    Carrera: "Dirección de Negocios Gastronómicos",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Bellas Artes",
    Carrera: "Música e Innovación",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Comunicación",
    Carrera: "Comunicación",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Hospitalidad",
    Carrera: "Hospitality Management",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Pedagogía",
    Carrera: "Pedagogía",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Ciencias de la Salud",
    Carrera: "Enfermería",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Ciencias de la Salud",
    Carrera: "Medicina",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Ciencias de la Salud",
    Carrera: "Psicología",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Derecho",
    Carrera: "Derecho",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Filosofía",
    Carrera: "Filosofía",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería en Animación y Videojuegos",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería en Innovación y Diseño",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería en Inteligencia de Datos y Ciberseguridad",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería Industrial e Innovación Basada en Datos",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería Mecánica",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería Mecatrónica",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Ingeniería",
    Carrera:
      "Ingeniería en Tecnologías de la Información y Sistemas Inteligentes",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería Industrial y Gestión de la Innovación",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Empresariales",
    Carrera: "Administración y Finanzas",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Empresariales",
    Carrera: "Administración y Mercadotecnia",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Empresariales",
    Carrera: "Administración y Negocios Internacionales",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Empresariales",
    Carrera: "Administración y Recursos Humanos",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Empresariales",
    Carrera: "Contaduría",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Empresariales",
    Carrera: "Business Intelligence",
  },
  {
    Campus: "Mixcoac",
    Facultad_Escuela: "Matemáticas Aplicadas",
    Carrera: "Matemáticas Aplicadas",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Arquitectura",
    Carrera: "Arquitectura",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Comunicación",
    Carrera: "Comunicación y Creación Audiovisual",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Comunicación",
    Carrera: "Comunicación y Periodismo",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Comunicación",
    Carrera: "Comunicación, Publicidad y Relaciones Públicas",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Hospitalidad",
    Carrera: "Administración y Hospitalidad",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Pedagogía",
    Carrera: "Pedagogía e Innovación Educativa",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Pedagogía",
    Carrera: "Psicopedagogía",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Pedagogía",
    Carrera: "Psicología",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Derecho",
    Carrera: "Derecho",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería Civil y Administración",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería en Animación Digital",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería en Innovación y Diseño",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería en Sistemas y Gráficas Computacionales",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería Industrial e Innovación de Negocios",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería Mecatrónica",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Empresariales",
    Carrera: "Administración y Dirección",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Empresariales",
    Carrera: "Administración y Dirección de Empresas Familiares",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Empresariales",
    Carrera: "Administración y Finanzas",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Empresariales",
    Carrera: "Administración y Mercadotecnia",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Empresariales",
    Carrera: "Administración y Negocios Internacionales",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Empresariales",
    Carrera: "Administración y Recursos Humanos",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Empresariales",
    Carrera: "Contaduría",
  },
  {
    Campus: "Guadalajara",
    Facultad_Escuela: "Dirección de Negocios Alimentarios",
    Carrera: "Dirección de Negocios Gastronómicos",
  },
  {
    Campus: "Ciudad Panamericana",
    Facultad_Escuela: "Gobierno y Economía",
    Carrera: "Economía",
  },
  {
    Campus: "Ciudad Panamericana",
    Facultad_Escuela: "Gobierno y Economía",
    Carrera: "Gobierno",
  },
  {
    Campus: "Ciudad Panamericana",
    Facultad_Escuela: "Derecho",
    Carrera: "Derecho",
  },
  {
    Campus: "Ciudad Panamericana",
    Facultad_Escuela: "Ingeniería",
    Carrera: "Ingeniería Industrial e Innovación Basada en Datos",
  },
  {
    Campus: "Ciudad Panamericana",
    Facultad_Escuela: "Business & Management",
    Carrera: "Business & Management",
  },
  {
    Campus: "Ciudad Panamericana",
    Facultad_Escuela: "Finanzas Cuantitativas",
    Carrera: "Finanzas Cuantitativas",
  },
];
