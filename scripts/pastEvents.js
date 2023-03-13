let contenedorCard = document.getElementById("contenedorCard")

let stringTarjetas = ``

for (eventos of data.events) {

    if (data.currentDate < eventos.date) {
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
contenedorCard.innerHTML = stringTarjetas;