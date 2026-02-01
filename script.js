// Toggle menu mobile
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Impede que o clique no botão propague
  navLinks.classList.toggle("show");
});

// Fechar o menu ao clicar fora
document.addEventListener("click", (e) => {
  // Se o clique NÃO foi dentro do menu ou do botão de toggle
  if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
    navLinks.classList.remove("show");
  }
});

// Ativar link do menu baseado no scroll
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Ativar link ao clicar
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // Fechar o menu após clicar em um link
    navLinks.classList.remove("show");
  });
});

// Formulário de Contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validação simples
    if (name && email && message) {
        // Aqui você pode adicionar a lógica para enviar os dados para um servidor, se necessário
        document.getElementById('responseMessage').textContent = 'Mensagem enviada com sucesso!';
        document.getElementById('responseMessage').style.color = '#5cb85c'; // Verde
        // Limpa os campos
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('responseMessage').textContent = 'Por favor, preencha todos os campos.';
        document.getElementById('responseMessage').style.color = '#d9534f'; // Vermelho
    }
});
