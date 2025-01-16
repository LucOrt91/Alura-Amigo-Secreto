let amigos = [];

function agregarAmigo() {
  // Capturar el valor del campo de entrada
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  // Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = "";

  // Actualizar la lista de amigos
  let listaAmigos = document.getElementById("listaAmigos");
  let li = document.createElement("li");
  li.textContent = nombre;
  listaAmigos.appendChild(li);
}
function actualizarListaAmigos() {
  // Obtener el elemento de la lista
  let listaAmigos = document.getElementById("listaAmigos");

  // Limpiar la lista existente
  listaAmigos.innerHTML = "";

  // Iterar sobre el arreglo y agregar elementos a la lista
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }
  // Ocultar la lista de amigos
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.style.display = "none";
  // Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}
