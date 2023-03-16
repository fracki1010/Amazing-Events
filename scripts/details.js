


const queryString = location.search;
let params = new URLSearchParams(queryString);
let id = params.get("id");
let eventos = data.events;
let tarjetaDetalles = eventos.find((evento)=> evento._id == id);
console.log(tarjetaDetalles);

let contenedorDetalle = document.getElementById("detalles");
let string = '';
string +=
    `<div class="card p-3 d-flex imgDetalles" style="width: 10000px; height: auto;">
        <div class="row g-0">
        <div class="col-sm-6 col-12">
        <img src="${tarjetaDetalles.image}" id="" style="width: 100%; height: auto;"
        class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-sm-6 col-12">
    <div class="card-body text-center fs-5">
      <h5 class="card-title fw-bold fs-1 tituloDetalles ">${tarjetaDetalles.name}</h5>
      <p class="card-text text-center fs-5 ps-2">${tarjetaDetalles.description}</p>
      <p class="card-text text-start fs-5 ps-2">Capacity: ${tarjetaDetalles.capacity}</p>
      <p class="card-text text-start fs-5 ps-2">Place Room: ${tarjetaDetalles.place}</p>
      <p class="card-text text-start fs-5 ps-2">Asistance: ${tarjetaDetalles.assistance}</p>
      <p class="card-text text-start fs-5 ps-2">Date: ${tarjetaDetalles.date}</p>
      <p class="card-text text-start fs-5 precioDetalles">Price: ${tarjetaDetalles.price}$</p>
    </div>
  </div>
</div>
</div>`

contenedorDetalle.innerHTML = string;



/* <div class="card p-3 d-flex " style="width: 900px; height: auto;">
        <div class="row g-0">
          <div class="col-sm-6 col-12">
            <img id="imagenDetalle" src="./assets/images/Museum_Tour.jpg" style="width: 100%; height: auto;"
              class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-sm-6 col-12">
            <div class="card-body text-center fs-5">
              <h5 class="card-title">Titulo</h5>
              <p class="card-text">Texto descriptivo</p>
              <p class="card-text">Texto descriptivo</p>
              <p class="card-text">Texto descriptivo</p>
            </div>
          </div>
        </div>
      </div> */