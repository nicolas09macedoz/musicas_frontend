const urlBackend = "http://localhost:3001";
const listaMusicas = document.getElementById('lista-musicas');

async function buscarMusicas() {
  const resposta = await fetch(urlBackend);
  const musicas = await resposta.json();

  musicas.forEach((musica) => {
    listaMusicas.innerHTML += `
      <div class="card-musica">
        <h3>${musica.titulo}</h3>
        <p>${musica.artista}</p>
        <p>${musica.genero}</p>
        <p>${musica.ano}</p>
        <p>${musica.duracao}</p>
        <a href="editar.html?id=${musica.id}">Editar</a>
      </div>
    `;
  });
}

buscarMusicas();