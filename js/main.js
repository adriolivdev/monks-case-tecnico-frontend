// ======================
// Lógica do Captcha
// ======================

// Gera dois números aleatórios entre 100 e 999
function gerarCaptcha() {
  const num1 = Math.floor(Math.random() * 900) + 100;
  const num2 = Math.floor(Math.random() * 900) + 100;

  // Atualiza os spans com os números gerados
  document.getElementById("num1").textContent = num1;
  document.getElementById("num2").textContent = num2;
}

// Valida se a soma inserida está correta
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const num1 = parseInt(document.getElementById("num1").textContent);
  const num2 = parseInt(document.getElementById("num2").textContent);
  const resultado = parseInt(document.getElementById("captchaInput").value);
  const msg = document.getElementById("captchaMsg");

  if (resultado === num1 + num2) {
    msg.textContent = "✔ Captcha verificado com sucesso!";
    msg.style.color = "green";
  } else {
    msg.textContent = "❌ Resultado incorreto. Tente novamente.";
    msg.style.color = "red";
  }
});

// Gera o captcha ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  gerarCaptcha();

  // ======================
  // Menu Hamburguer
  // ======================
  const hamburger = document.getElementById("hamburger");
  const navCategorias = document.getElementById("menuCategorias");

  if (hamburger && navCategorias) {
    hamburger.addEventListener("click", () => {
      navCategorias.classList.toggle("active");
    });
  }
});
