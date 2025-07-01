let cadastros = [
  { nome: "João Silva", email: "joao.silva@example.com" },
  { nome: "Maria Souza", email: "maria.souza@example.com" },
  { nome: "Pedro Santos", email: "pedro.santos@example.com" },
  { nome: "Ana Costa", email: "ana.costa@example.com" }
];
let currentIndex = 0;

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "admin") {
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("main-container").classList.remove("hidden");
    showCadastro(); // Mostrar o primeiro cadastro
  } else {
    document.getElementById("login-error").innerText = "Usuário ou senha incorretos.";
  }
}

function addCadastro() {
  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (nome && email) {
    cadastros.push({ nome, email });
    currentIndex = cadastros.length - 1;
    alert("Cadastro incluído!");
    showCadastro();
  }
}

function updateCadastro() {
  if (currentIndex >= 0 && cadastros[currentIndex]) {
    cadastros[currentIndex].nome = document.getElementById("name").value;
    cadastros[currentIndex].email = document.getElementById("email").value;
    alert("Cadastro atualizado!");
  }
}

function removeCadastro() {
  if (currentIndex >= 0) {
    cadastros.splice(currentIndex, 1);
    if (currentIndex > 0) currentIndex--;
    alert("Cadastro removido.");
    showCadastro();
  }
}

function prevCadastro() {
  if (currentIndex > 0) {
    currentIndex--;
    showCadastro();
  }
}

function nextCadastro() {
  if (currentIndex < cadastros.length - 1) {
    currentIndex++;
    showCadastro();
  }
}

function showCadastro() {
  const cadastro = cadastros[currentIndex];
  if (cadastro) {
    document.getElementById("name").value = cadastro.nome;
    document.getElementById("email").value = cadastro.email;
    document.getElementById("cadastro-indice").innerText = `Cadastro ${currentIndex + 1} de ${cadastros.length}`;
  } else {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cadastro-indice").innerText = "Nenhum cadastro";
  }
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}
