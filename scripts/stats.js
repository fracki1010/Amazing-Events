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
let estadisticas = document.getElementById("estadisticas")

let estadisticaCategoriasFut = document.getElementById("estadisticaCategoriasFut")
let estadisticaCategoriasPast = document.getElementById("estadisticaCategoriasPast")


//llamadas
fetch(API)
    .then(response => response.json())
    .then(datos => {

        dataEventos = datos.events
        dataAPI = datos


        FiltroEventos(dataEventos)
        DibujarEstadisticas(arrayPast)
        dibujarEstadisticasCategorias(arrayFut, estadisticaCategoriasFut)
        dibujarEstadisticasCategorias(arrayPast, estadisticaCategoriasPast)
    })

console.log(arrayPast);

//funciones

function FiltroEventos(lista) {
    for (eventos of lista) {

        if (dataAPI.currentDate > eventos.date) {
            eventos.porsentaje = (eventos.assistance / eventos.capacity) * 100
            arrayPast.push(eventos)
        }else{
            eventos.porsentaje = (eventos.estimate / eventos.capacity) * 100
            arrayFut.push(eventos)
        }
    }
}

function DibujarEstadisticas(arr) {

    let arrayPorsentajesPast = arr.map((evento) => evento.porsentaje)
    let arrayCapacidadPast = arr.map((evento) => evento.capacity)

    // porsentajes maximos y minimos
    let min = maximoYMinimos(arrayPorsentajesPast, "min")
    let max = maximoYMinimos(arrayPorsentajesPast, "max")
    let maxCapacity = maximoYMinimos(arrayCapacidadPast, "max")
    let string = ``


    let arrEventosMax = arr.filter((evento) => evento.porsentaje == max)
    let arrEventosMin = arr.filter((evento) => evento.porsentaje == min)
    let arrEventosMaxCapac = arr.filter((evento) => evento.capacity == maxCapacity)
    
    string +=
        `<tr>
            <td>${arrEventosMax[0].name} (${arrEventosMax[0].porsentaje} %)</td>
            <td><p>${arrEventosMin[0].name} (${arrEventosMin[0].porsentaje} %)</td>
            <td>${arrEventosMaxCapac[0].name} (${arrEventosMaxCapac[0].capacity})</td>
        </tr>`


    estadisticas.innerHTML = string
}

function dibujarEstadisticasCategorias(arr, contenedor) {
    let categorias = arr.map((evento) => evento.category)
    let setCategoria = new Set(categorias)
    let setArrCategoria = Array.from(setCategoria)
    setArrCategoria.sort()

    let string = ``
    setArrCategoria.forEach((category) => {

        let arrayEventsCategory = arr.filter((evento) => category == evento.category)

        let revenues = fRevenues(arrayEventsCategory)
        let porsentajeAsistence = porsentajeAsistencia(arrayEventsCategory)

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

function fRevenues(arr) {
    let arrayGanancias = arr.map((evento) => evento.estimate || evento.assistance)
    let arrayPrice = arr.map((evento) => evento.price)

    let estimate = arrayGanancias.reduce((acc, ganancias) => acc + ganancias)
    let price = arrayPrice.reduce((acc, price) => acc + price)
    let total = estimate * price

    return total;



}

function porsentajeAsistencia(arr) {
    let asistence = arr.map((evento) => evento.estimate || evento.assistance)
    let capacity = arr.map((evento) => evento.capacity)

    let totalAsistence = asistence.reduce((acc, asistencia) => acc + asistencia)
    let totalCapacity = capacity.reduce((acc, capacity) => acc + capacity)

    let porsentajeAsistence = (totalAsistence / totalCapacity) * 100

    return porsentajeAsistence

}

function maximoYMinimos(arr, result) {
    if (result == "max" || result == "Max") {
        let max = Math.max(...arr)
        return max
    } else {
        let min = Math.min(...arr)
        return min
    }
}