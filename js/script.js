let menuVisible = false;
let contenidoModals = [];

function show_hidden_menu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function select() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

// Create a function to change languange
function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

// Define the language reload anchors
var language = {
  eng: {
    welcome: "A LITTLE BIT ABOUT MYSELF..",
    education: "EDUCATION",
    decription:
      " For the last 2 years, I have been involved in programming languages such as JAVA, JAVASCRIPT, HTML, CSS, SASS and C#. Prior to this, I worked in the banking and financial sector for over 14 years. These roles allowed me to develop leadership and management skills, as well as effective communication and collaboration skills. I am used to remaining calm while working in high pressure environments, and I have strong problem-solving skills. In the last year I studied and trained in the IT area, by taking Web Development courses, as well as undertaking the Systems Analyst career in ORT Institute in Buenos Aires. I'm looking for a new challenge that would allow me to further develop my system analyst skills.",
    experience: "EXPERIENCE",
    first_job: "Head Teller - Branch Operations Manager",
    second_job: "Bank Teller",
    third_job: "Credit Risk Analyst",
    fourth_job: "Head Teller",
    fifth_job: "Teller",
  },
  es: {
    welcome: "UN POCO ACERCA DE MI..",
    education: "EDUCACION",
    decription:
      " Durante los últimos 2 años, he estado involucrado en lenguajes de programación como JAVA, JAVASCRIPT, HTML, CSS, SASS y C#. Previo a esto, trabajé en el sector bancario y financiero por más de 14 años. Estos roles me permitieron desarrollar habilidades de liderazgo y gestión, así como habilidades efectivas de comunicación y colaboración. Estoy acostumbrado a mantener la calma mientras trabajo en entornos de alta presión y tengo fuertes habilidades para resolver problemas. En el último año estudié y me formé en el área de IT, tomando cursos de Desarrollo Web, así como cursando la carrera de Analista de Sistemas en el Instituto ORT de Buenos Aires. Estoy buscando un nuevo desafío que me permita desarrollar aún más mis habilidades como analista de sistemas.",
    experience: "EXPERIENCIA",
    first_job: "Tesorero de Sucursal",
    second_job: "Cajero de Banco",
    third_job: "Analista de Riesgos Crediticios",
    fourth_job: "Tesorero",
    fifth_job: "Cajero",
  },
};

// Check if a hash value exists in the URL
if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash == "#es") {
    about_me.textContent = language.es.welcome;
    about_me_description.textContent = language.es.decription;
    education_title.textContent = language.es.education;
    experience_title.textContent = language.es.experience;
    first_job.textContent = language.es.first_job;
    second_job.textContent = language.es.second_job;
    third_job.textContent = language.es.third_job;
    fourth_job.textContent = language.es.fourth_job;
    fifth_job.textContent = language.es.fifth_job;
  } else if (window.location.hash == "#eng") {
    about_me.textContent = language.eng.welcome;
    about_me_description.textContent = language.eng.decription;
    education_title.textContent = language.eng.education;
    experience_title.textContent = language.eng.experience;
    first_job.textContent = language.eng.first_job;
    second_job.textContent = language.eng.second_job;
    third_job.textContent = language.eng.third_job;
    fourth_job.textContent = language.eng.fourth_job;
    fifth_job.textContent = language.eng.fifth_job;
  }
}

//Funcion fetch del data.json
function traerModals() {
  fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      contenidoModals = data;
      console.log(contenidoModals);
      });
}

traerModals();

const listarModals = (id) => {
    
}