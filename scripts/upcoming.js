// capturadores
let contenedorCard = document.getElementById("contenedorCard");
let buscador = document.getElementById("buscador");
let botonBuscador = document.forms[0];
let ContenedorChequeo = document.getElementById("categorias");

//llamadas
dibujarUpComing(data.events, contenedorCard)
dibujarCategorias(data.events)

botonBuscador.addEventListener("submit",(e)=>{
  e.preventDefault()
  FiltroDoble();
})

ContenedorChequeo.addEventListener("change", FiltroDoble)



//funciones
function dibujarUpComing(lista, contenedorHTML){
  if (lista.length == 0) {
    contenedorHTML.innerHTML = `<h3 class="text-light p-3 text-center"> No hay elementos que coincidan con la busqueda</h3>`;
    return
  }
  let stringTarjetas = ``
  for (eventos of lista) {

    if (data.currentDate > eventos.date) {
      stringTarjetas +=
        `<div class="card" id="" style="width: 16rem;">
    <img src="${eventos.image} alt="...">
    <div class="card-body m-0 p-3 d-flex flex-column align-items-center justify-content-around">
      <h5 class="card-title">${eventos.name}</h5>
      <p class="card-text">${eventos.description}</p>
      <div class="d-flex justify-content-between align-items-center container-fluid">
        <h6>Price: <span>${eventos.price}</span>$</h6>
          <a class="btn btn-primary p-1 m-1" href="./details.html">Ver mas...</a>
      </div>
    </div>
  </div>`
    }

  }
  contenedorHTML.innerHTML = stringTarjetas;
}

function dibujarCategorias(lista) {
  let categorias = lista.map((e) => e.category);
  let setCategorias = new Set(categorias.sort((a,b)=>{
    if(a<b){
      return -1;
    }
    if(a>b){
      return 1;
    }
  }));

  let string = ``;
  setCategorias.forEach((e) => {
    string +=
      `<div class="form-check m-3 border-0">
      <input class="form-check-input" type="checkbox" id="${e}" value="${e}">
      <label class="form-check-label" for="${e}">${e}</label>
      </div>`
  ContenedorChequeo.innerHTML = string;

  })
}

function filtroCategorias(lista){
  let checkCategorias = document.querySelectorAll("input[type='checkbox']");
  
  let checkCategoriasArr = Array.from(checkCategorias); //pasar los elementos a un array porque son un Node List
  let checkConfirmados = checkCategoriasArr.filter((e)=> e.checked);

  if(checkConfirmados.length == 0){
    return lista;
  }

  let categoriaCheckbox = checkConfirmados.map ((e)=> e.value);
  let filtrarCheckCategorias = lista.filter((e)=> categoriaCheckbox.includes(e.category));

  return filtrarCheckCategorias;
}

function FiltroDoble(){
  let primerFiltro = filtroBuscador(data.events, buscador.value);
  let segundoFiltro = filtroCategorias(primerFiltro)
  dibujarUpComing(segundoFiltro,contenedorCard); // unica diferencia de las funciones del main
}

function filtroBuscador(lista, texto) {
  let listaFiltrada = lista.filter(element => element.name.toLowerCase().includes(texto.toLowerCase()));
  return listaFiltrada;
}

function dibujarCategorias(lista) {
  let categorias = lista.map((e) => e.category);
  let setCategorias = new Set(categorias.sort((a,b)=>{
    if(a<b){
      return -1;
    }
    if(a>b){
      return 1;
    }
  }));

  let string = ``;
  setCategorias.forEach((e) => {
    string +=
      `<div class="form-check m-3 border-0">
      <input class="form-check-input" type="checkbox" id="${e}" value="${e}">
      <label class="form-check-label" for="${e}">${e}</label>
      </div>`
  ContenedorChequeo.innerHTML = string;

  })
}
