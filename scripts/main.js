const { createApp } = Vue

  createApp({
    data() {
      return {
        dataApi: "https://mindhub-xj03.onrender.com/api/amazing",
        data: [],
        eventos: [],
        buscador: "",
        botonBuscador: "",
        eventosFiltrados: [],
        categorys: [],
        categoryCheck:[]
      }
    },
    created(){
      this.getdata()

    },
    mounted(){

    },
    methods:{
      getdata(){
        fetch(this.dataApi)
        .then(response => response.json())
        .then(data => {
          
          this.datos = data
          this.eventos = data.events
          this.eventosFiltrados = data.events
          this.getcategory(data.events)
        })
      },
      getcategory(arr){
        arr.forEach(evento => {
          if(!this.categorys.includes(evento.category)){
            this.categorys.push(evento.category)
          }
        });
      },

    },
    computed:{
      filtroBuscador(){
        if(!this.buscador.length){
          this.eventosFiltrados = this.eventos
          this.botonBuscador = ""
        }else{
          let primerFiltro = this.eventos.filter(evento => evento.name.toLowerCase().includes(this.botonBuscador.toLowerCase()))
          if(!this.categoryCheck.length){
            this.eventosFiltrados = primerFiltro
          }else{
            this.eventosFiltrados = primerFiltro.filter(evento => this.categoryCheck.includes(evento.category))
          }
        }
      }
    }
  }).mount('#app')
