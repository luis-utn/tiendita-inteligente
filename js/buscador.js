document.getElementById("icon-menu").addEventListener("click", mostrar_menu);
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

function mostrar_menu() {
    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}

function mostrar_buscador() {
    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();
}

function ocultar_buscador() {
    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
}

const bars_search = document.getElementById("ctn-bars-search");
const cover_ctn_search = document.getElementById("cover-ctn-search");
const inputSearch = document.getElementById("inputSearch");
const resultado = document.getElementById('resultado-busqueda');
const enlacesAgregados = [];

inputSearch.addEventListener('input', function () {
  const searchText = inputSearch.value.toLowerCase();
  const allLinks = document.querySelectorAll('nav a');

  resultado.innerHTML = '';

  if (searchText.trim() === "") {
    resultado.style.display = 'none';
    return; // Salir de la función si no hay texto de búsqueda
  }

  let resultadosEncontrados = false;

  for (let i = 0; i < allLinks.length; i++) {
    let link = allLinks[i];
    let linkText = link.textContent.toLowerCase();

    if (linkText.includes(searchText) && !enlacesAgregados.includes(link.href)) {
      let li = document.createElement('li');
      let anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.textContent = linkText;
      li.appendChild(anchor);
      resultado.appendChild(li);
      enlacesAgregados.push(link.href);
      resultadosEncontrados = true;
    }
  }

  if (resultadosEncontrados) {
    resultado.style.display = 'block';
    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
  } else {
    resultado.style.display = 'none';
    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
  }
});
