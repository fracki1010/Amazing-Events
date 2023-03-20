//variables
let API = "https://mindhub-xj03.onrender.com/api/amazing"
let dataEventos
let dataAPI
let arrayPast = []
let arrayFut = []

//capturadores
let eventMaxAsist = document.getElementById("eventMaxAsist")
let eventMinAsist = document.getElementById("eventMinAsist")
let eventMaxCapac = document.getElementById("eventMaxCapac")

let estadisticaCategoriasFut = document.getElementById("estadisticaCategoriasFut")
let estadisticaCategoriasPast = document.getElementById("estadisticaCategoriasPast")


//llamadas
fetch(API)
    .then(response => response.json())
    .then(datos => {

        dataEventos = datos.events
        dataAPI = datos


        FiltroEventosPasados(dataEventos)
        FiltroEventosFuturos(dataEventos)
        DibujarEstadisticas()
        dibujarEstadisticasCategorias(arrayFut,estadisticaCategoriasFut)
        dibujarEstadisticasCategorias(arrayPast,estadisticaCategoriasPast)
    })

    console.log(arrayPast);

//funciones

function FiltroEventosPasados(lista) {
    for (eventos of lista) {

        if (dataAPI.currentDate > eventos.date) {
            eventos.porsentaje = (eventos.assistance / eventos.capacity) * 100
            arrayPast.push(eventos)
        }
    }
}
function FiltroEventosFuturos(lista) {
    for (eventos of lista) {

        if (dataAPI.currentDate < eventos.date) {
            eventos.porsentaje = (eventos.assistance / eventos.capacity) * 100
            arrayFut.push(eventos)
        }
    }
}


function DibujarEstadisticas() {
    let arrEventosMax
    let arrEventosMin
    let arrEventosMaxCapac
    let maxCapacity

    let arrayPorsentajesPast = arrayPast.map((evento) => evento.porsentaje)
    let arrayCapacidadPast = arrayPast.map((evento) => evento.capacity)
    // porsentajes maximos y minimos
    let min
    let max
    max = Math.max(...arrayPorsentajesPast);
    min = Math.min(...arrayPorsentajesPast);
    maxCapacity = Math.max(...arrayCapacidadPast);

    arrEventosMax = arrayPast.filter((evento) => evento.porsentaje == max)
    arrEventosMin = arrayPast.filter((evento) => evento.porsentaje == min)
    arrEventosMaxCapac = arrayPast.filter((evento) => evento.capacity == maxCapacity)

    eventMaxAsist.innerHTML = `<p>${arrEventosMax[0].name} (${arrEventosMax[0].porsentaje} %)</p>`
    eventMinAsist.innerHTML = `<p>${arrEventosMin[0].name} (${arrEventosMin[0].porsentaje} %)</p>`
    eventMaxCapac.innerHTML = `<p>${arrEventosMaxCapac[0].name} (${arrEventosMaxCapac[0].capacity})</p>`
}

function dibujarEstadisticasCategorias(arr,contenedor) {
    let categorias = arr.map((evento) => evento.category)
    let setCategoria = new Set(categorias)
    let setArrCategoria = Array.from(setCategoria)

   
    let string = ``
    setArrCategoria.forEach((category) => {

        let arrayEventsCategory = arr.filter((evento)=> category == evento.category)
        
        let arrayGanancias = arrayEventsCategory.map((evento)=> evento.estimate || evento.assistance)
        let arrayPrice = arrayEventsCategory.map((evento)=> evento.price)

        let estimate = arrayGanancias.reduce((acc,ganancias)=> acc + ganancias)
        let price = arrayPrice.reduce((acc, price)=> acc + price)
        let revenues = estimate*price

        let asistence = arrayEventsCategory.map((evento)=> evento.estimate || evento.assistance)
        let totalAsistence = asistence.reduce((acc, asistencia)=> acc+asistencia)
        
        let capacity = arrayEventsCategory.map((evento)=>evento.capacity)
        let totalCapacity = capacity.reduce((acc, capacity)=> acc+capacity)
        
        let porsentajeAsistence = (totalAsistence/totalCapacity)*100
        

        string +=
            `<tr>
            <td>${category}</td>
            <td>$ ${revenues}</td>
            <td>${porsentajeAsistence.toFixed(2)} %</td>`
    })
    contenedor.innerHTML = string

}

function ordenar() {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

/* function fRevenues(arr){
    let arrayGanancias = arr.map((evento)=> evento.estimate)
    let arrayPrice = arr.map((evento)=> evento.price)

    let estimate = arrayGanancias.reduce((acc,ganancias)=> acc + ganancias)
    let price = arrayPrice.reduce((acc, price)=> acc + price)
    let revenues = estimate*price

    

} */