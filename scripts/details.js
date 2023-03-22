//variables


//capturadores
let contenedorDetalle = document.getElementById("detalles");


//llamadas

fetch(API)
  .then((response)=>response.json())
  .then(datos => datos.events)
  .then((dataEventos)=>{

    const queryString = location.search;
    let params = new URLSearchParams(queryString);
    let id = params.get("id");
    
    let tarjetaDetalles = dataEventos.find((evento)=> evento._id == id);


    dibujarDetalles(tarjetaDetalles)
    
  })



//funciones
function dibujarDetalles(obj){

  let string = '';
  string +=
      `<div class="card p-3 d-flex imgDetalles" style="width: 10000px; height: auto;">
          <div class="row g-0">
          <div class="col-sm-6 col-12">
          <img src="${obj.image}" id="" style="width: 100%; height: auto;"
          class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-sm-6 col-12">
      <div class="card-body text-center fs-5">
        <h5 class="card-title fw-bold fs-1 tituloDetalles ">${obj.name}</h5>
        <p class="card-text text-center fs-5 ps-2">${obj.description}</p>
        <p class="card-text text-start fs-5 ps-2">Capacity: ${obj.capacity}</p>
        <p class="card-text text-start fs-5 ps-2">Place Room: ${obj.place}</p>
        <p class="card-text text-start fs-5 ps-2">Asistance: ${obj.assistance}</p>
        <p class="card-text text-start fs-5 ps-2">Date: ${obj.date}</p>
        <p class="card-text text-start fs-5 precioDetalles">Price: ${obj.price}$</p>
      </div>
    </div>
  </div>
  </div>`
  
  contenedorDetalle.innerHTML = string;
}
