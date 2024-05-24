let menuVisible = false;

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

/* // Create a function to change languange
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
}; */

/* // Check if a hash value exists in the URL
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
} */


//chatbot
const responses = {
  "vives": "Vivo en Valencia. C.P. 46024",
  "trabajo": "En mi último trabajo, me desempeñe como asesor comercial, administrativo para una Universidad, aquí en Valencia. Te describo algunas de mis tareas diarias: - Gestioné cartera de prospectos: Autogestioné la cartera de posibles alumnos, llevando a cabo contactos telefónicos y vía WhatsApp, promoviendo las formaciones académicas de la universidad. - Ventas y asesoramiento: Presenté de manera persuasiva las formaciones ofrecidas, destacando sus beneficios y características relevantes, asesorando a los alumnos en el proceso de inscripción y planificación de sus estudios. - ",
  "trabajo anterior": "En Argentina trabajé durante más de 13 años en el sector financiero / bancario. Los últimos 8 años allí, trabajé para el Banco Credicoop, finalizando mi carrera profesional allí, como tesorero, lider de equipo. Entre mis tareas diarias a destacar estaban: - Asesoramiento financiero estratégico: Brindé orientación a la gerencia en la gestión de recursos financieros y en la planificación a corto y largo plazo. - Gestión integral de tesorería: Supervisé la venta de una variedad de productos financieros, manteniendo un sistema eficiente de políticas y procedimientos para garantizar un adecuado control sobre las actividades de tesorería. - Relaciones sólidas con clientes y proveedores: Mantuve una comunicación sólida con clientes y proveedores de servicios, asegurando un servicio al cliente excelente y resolviendo problemas de manera efectiva.",
  "tiempo libre": "En mis tiempos libres, me gusta ver pelicula, series. Soy aficionado por las películas de fantasía como Harry Potter o El señor de los añillos. También me gusta jugar al padel o salir a caminar."
};

function handleUserInput() {
  const userSelect = document.getElementById('user-select');
  const selectedValue = userSelect.value;
  const selectedText = userSelect.options[userSelect.selectedIndex].text;
  
  if (selectedValue) {
      addUserMessage(selectedText);
      addBotResponse(selectedValue);
      userSelect.value = '';
  } else {
      alert('Por favor, selecciona una pregunta.');
  }
}

function addUserMessage(message) {
  const chat = document.getElementById('chat');
  const userMessageDiv = document.createElement('div');
  userMessageDiv.className = 'message user-message';
  userMessageDiv.innerText = message;
  chat.appendChild(userMessageDiv);
}

function addBotResponse(selectedValue) {
  const chat = document.getElementById('chat');
  const botMessageDiv = document.createElement('div');
  botMessageDiv.className = 'message bot-message';
  chat.appendChild(botMessageDiv);
  
  const response = responses[selectedValue];
  typeText(botMessageDiv, response);
}

function typeText(element, text, index = 0) {
  if (index < text.length) {
      const nextChar = document.createTextNode(text.charAt(index));
      element.appendChild(nextChar);
      setTimeout(() => {
          typeText(element, text, index + 1);
          // Desplaza el contenedor del chat hacia abajo
          scrollToBottom();
      }, 50);
  }
}

function scrollToBottom() {
  const chat = document.getElementById('chat');
  chat.scrollTop = chat.scrollHeight;
}

