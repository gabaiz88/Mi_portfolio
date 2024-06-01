//Navbar
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

//Chatbot
const responses = {
  "vives": "Vivo en Valencia. C.P. 46024, España",
  "trabajo":
    "Mi último trabajo fue como asesor comercial, en una Universidad en Valencia. Allí he autogestionado una cartera de prospectos, promoviendo formaciones académicas a través de contactos telefónicos y WhatsApp. He asesorado a los alumnos en su inscripción, destacando beneficios y resolviendo dudas para asegurar el cierre de matriculaciones. También he realizado seguimiento y gestión administrativa, manejando situaciones como retrasos en pagos para garantizar una experiencia educativa satisfactoria.",
  "trabajo anterior":
    "En Argentina trabajé más de 12 años en el sector bancario, finalizando como tesorero / Lider de equipo en Banco Credicoop. Brindé asesoramiento financiero estratégico, gestioné la tesorería y mantuve relaciones sólidas con clientes y proveedores, asegurando un servicio al cliente excelente y resolviendo problemas eficazmente.",
  "tiempo libre":
    "En mis tiempos libres, me gusta ver peliculas y series. Soy aficionado por las películas de fantasía como Harry Potter o El señor de los anillos. También me gusta jugar al padel o salir a caminar.",
  "herramientas":
    "Manejo lenguajes de programación como JavaScript, HTML, CSS y Java, junto con frameworks y librerías como React, Bootstrap, Node.js y Tailwind CSS. También utilizo herramientas como Git para control de versiones, Figma para diseño y Firebase para desarrollo backend. Además, aplico metodologías ágiles para gestionar y optimizar los proyectos de manera eficiente.",
  "certificaciones":
    "He completado cursos y certificaciones en Metodologías Ágiles (Scrum) en Udemy (2024), Desarrollo Frontend con React en Coderhouse (2022-2023), Software Testing en Udemy (2023), y poseo un nivel de inglés B2, estudiando actualmente en ABA English (2024).",
  "futuro":
    "A futuro me veo habiendo avanzado significativamente en mi carrera, asumiendo roles de mayor responsabilidad y liderazgo. Espero haber adquirido nuevas competencias técnicas y de gestión, y estar contribuyendo de manera estratégica a los proyectos del equipo. También me gustaría estar involucrado en iniciativas que impulsen la innovación dentro de mi campo.",
};

function handleUserInput() {
  const userSelect = document.getElementById("user-select");
  const selectedValue = userSelect.value;
  const selectedText = userSelect.options[userSelect.selectedIndex].text;

  if (selectedValue) {
    addUserMessage(selectedText);
    addBotResponse(selectedValue);
    userSelect.value = "";
  } else {
    alert("Por favor, selecciona una pregunta.");
  }
}

function addUserMessage(message) {
  const chat = document.getElementById("chat");
  const userMessageDiv = document.createElement("div");
  userMessageDiv.className = "message user-message";
  userMessageDiv.innerText = message;
  chat.appendChild(userMessageDiv);
}

function addBotResponse(selectedValue) {
  const chat = document.getElementById("chat");
  const botMessageDiv = document.createElement("div");
  botMessageDiv.className = "message bot-message";
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
    }, 40);
  }
}

function scrollToBottom() {
  const chat = document.getElementById("chat");
  chat.scrollTop = chat.scrollHeight;
}

// Skills
const skillContent = document.querySelectorAll(".skill");
const skillHeader = document.querySelectorAll(".skills_header");
const skillContentArr = Array.from(skillContent);
const skillHeaderArr = Array.from(skillHeader);

skillHeaderArr.forEach((element, idx) => {
  element.addEventListener("click", function () {
    skillContentArr[idx].classList.toggle("skills_open");
  });
});

// Formspree codigo contacto
const form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("alert");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Your message has been sent.";
      document.querySelector(".alert_style").style.display = "block";

      // hide alert after 3 seconds
      setTimeout(function () {
        document.querySelector(".alert_style").style.display = "none";
      }, 4000);
      form.reset();
    })
    .catch((error) => {
      status.innerHTML =
        "Oops! There was a problem delivering your message, please contact via other means.";
      document.querySelector(".alert_style").style.display = "block";

      // hide alert after 3 seconds
      setTimeout(function () {
        document.querySelector(".alert_style").style.display = "none";
      }, 4000);
    });
}
form.addEventListener("submit", handleSubmit);
