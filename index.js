// Efeito de digitação
window.addEventListener('DOMContentLoaded', () => {
  const nome = document.querySelector('#nomeTexto');
  const cargo = document.querySelector('#cargoTexto');

  function typeEffect(element, delay = 0, speed = 120) {
    const text = element.textContent.trim();
    element.textContent = '';
    let i = 0;

    element.style.opacity = 0;
    element.style.transition = 'opacity 0.8s ease-in-out';

    function type() {
      if (i === 0) element.style.opacity = 1;
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        element.classList.add('typing-done');
      }
    }

    setTimeout(type, delay);
  }

  typeEffect(nome, 0, 300);
  typeEffect(cargo, 2800, 130);

//  // 🌙 Modo escuro / claro
//  const clicar = document.getElementById("check");
//  clicar.addEventListener("change", () => {
//    document.body.classList.toggle("dark", clicar.checked);
//  });


 // 🌙 Modo escuro / claro
  const clicar = document.getElementById("color_mode")
  clicar.addEventListener("change", () => {
    document.body.classList.toggle("dark", clicar.checked)
    localStorage.setItem("darkMode", clicar.checked)
  })

  // Restore dark mode preference
  if (localStorage.getItem("darkMode") === "true") {
    clicar.checked = true
    document.body.classList.add("dark")
  }
})






// Efeito de revelação ao rolar a página
//ROLAR


window.addEventListener('scroll', revelar);


function revelar() {
  let elementos = document.querySelectorAll('.reveal'); // ta pegando todos os elementos que tem essa classe


  for (let i = 0; i < elementos.length; i++) { //vai ver se ele está visivel na tela
    let windowHeight = window.innerHeight;               // altura visível da tela
    let elementoTop = elementos[i].getBoundingClientRect().top; // distância do topo da tela até o elemento
    let visivel = 150;                                   // quanto antes o elemento começa a aparecer


    if (elementoTop < windowHeight - visivel) {
      elementos[i].classList.add('active');
    } else {
      elementos[i].classList.remove('active');
    }
  }
}


function abrirModal() {
const modal = document.getElementById("modal")
modal.showModal()
}

function fechar(){
let modal = document.getElementById("modal")
modal.close()
}



// MÁSCARAS E VALIDAÇÕES DO FORMULÁRIO

document.addEventListener("DOMContentLoaded", () => {
  const nome = document.querySelector("#nomeInput");
  const telefone = document.querySelector("#telefoneInput");
  const email = document.querySelector("#emailInput");
  const mensagem = document.querySelector("#mensagemInput");
  const form = document.querySelector("#forms");

  // Máscara de telefone (formato: (99) 99999-9999)
  telefone.addEventListener("input", () => {
    let valor = telefone.value.replace(/\D/g, "");
    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length > 6) {
      telefone.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
    } else if (valor.length > 2) {
      telefone.value = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    } else {
      telefone.value = valor;
    }
  });

  // Validação do email (básica)
  email.addEventListener("blur", () => {
    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!padraoEmail.test(email.value)) {
      alert("Por favor, insira um e-mail válido!");
      email.focus();
    }
  });

  // Bloquear números no campo nome
  nome.addEventListener("input", () => {
    nome.value = nome.value.replace(/[0-9]/g, "");
  });

  // Envio do formulário
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (nome.value && telefone.value && email.value && mensagem.value) {
      alert("Formulário enviado com sucesso! 🚀");
      form.reset();
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  });
});








