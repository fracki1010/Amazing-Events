
/*  for(let i = 0; i<14; i++){
   if(data.events[i].category == "Museum"){
       console.log(data.events[i].category)
   }
 };
*/




/*  let listaDeCards = document.getElementsByClassName("card");
 let listaCategorias = document.getElementsByClassName("lCategorias")


 console.log(listaDeCards[0]);

 for(let a = 0; a<14; a++){
   listaDeCards[a].childNodes[3].childNodes[1].innerText = data.events[a].name //titulo de cada tarjeta
   listaDeCards[a].children[1].children[1].innerText = data.events[a].description //descripcion de cada tarjeta
   listaDeCards[a].children[0].src = data.events[a].image //imagenes de cada tarjeta
   listaDeCards[a].children[1].children[2].children[0].children[0].innerText = data.events[a].price //precio de cada tarjeta
   
 }

 for(let b=0; b<8; b++){
   console.log(listaCategorias[b].children[0].value);
   if(listaCategorias[b].children[0].value == data.events[b].category){

   }
 }

 for(eventos of data.events){
   console.log(eventos);
 } */


let contenedorCard = document.getElementById("contenedorCard")

let stringTarjetas = ``


{/* <div class="card" id="" style="width: 16rem;">
        <img src="./assets/images/Music_Concert.jpg" class="card-img-top" alt="...">
        <div class="card-body m-0 p-3 d-flex flex-column align-items-center justify-content-around">
          <h5 class="card-title">Titulo</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <div class="d-flex justify-content-between align-items-center container-fluid">
            <h6>Price: <span>300</span>$</h6>
              <a class="btn btn-primary p-1 m-1" href="./details.html">Ver mas...</a>
          </div>
        </div>
      </div> */}



function dibujarTarjetas(obj) {
  for (eventos of obj) {

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
  contenedorCard.innerHTML = stringTarjetas;
}

dibujarTarjetas(data.events)

/* let listaCategorias = document.querySelectorAll(".lCategorias")

let cat_1 = document.getElementById("buscar");

cat_1.addEventListener("click",function(){
  console.log("encendido");
  listaCategorias.forEach((e) => {
    if(e.checked == true){
      console.log(e.value)
    }
  });
}) */

/* console.log(listaCategorias[0].children[0].value); */

