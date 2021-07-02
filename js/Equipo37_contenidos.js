class VM37_contenidos {
    constructor() {
      this.root = document.getElementById("root");
      this.dataContenido;
      this.getData();
    }
  
    //Funcion para dibujar Main
    dibujarMainContenidos() {
      //Div Contenedor principal
      let divMainContenidos = document.createElement("div");
      divMainContenidos.className = "vm37_mainContenidos";
  
      //Div SegundoContenedor
      let divContenedorBuscador = document.createElement("div");
      divContenedorBuscador.className = "vm37_responsive-margins";
      let divBuscador = document.createElement("div");
      divBuscador.className = "vm37_buscador";
  
      //Div Buscador
      let divTitulo = document.createElement("div");
      let divInput = document.createElement("div");
      let h1 = document.createElement("h1");
      h1.innerHTML = "Buscador de libros";
      let input = document.createElement("input");
      input.type = "text";
      input.className = "vm37_form-control";
      input.id = "vm37_inputLibro";
      input.placeholder = "nombre del libro";
      input.name = "search";
  
      //Filtra por letras
      input.addEventListener("keyup", (e) => {
        this.borrar("vm37_cardLibro");
        this.filtrar();
      });
  
      //Div tarjeta de libro
      let divCargar = document.createElement("div");
      divCargar.className = "vm37_cargarDatos";
      let divCard = document.createElement("div");
      divCard.id = "vm37_cardLibro";
  
      //AppendChild
      divMainContenidos.appendChild(divContenedorBuscador);
      divContenedorBuscador.appendChild(divBuscador);
      divBuscador.appendChild(divTitulo);
      divBuscador.appendChild(divInput);
  
      divTitulo.appendChild(h1);
      divInput.appendChild(input);
      // divInput.appendChild(botonLibro);
  
      divContenedorBuscador.appendChild(divCargar);
      divCargar.appendChild(divCard);
      console.log(this.dataContenido);
  
      document.getElementById("root").appendChild(divMainContenidos);
  
      this.mostrarlibros(this.dataContenido);
    }
  
    //FUNCION MOSTRARLIBROS
  
    mostrarlibros(data) {
      console.log(data);
      data.libros.forEach((element) => {
        // borrarLibro();
        let inputLibro = document.getElementById("vm37_inputLibro");
        let name = element.nombre.toLowerCase();
        if (name.startsWith(inputLibro.value.toLowerCase())) {
          let divCardContainer = document.createElement("div");
          let divCard = document.createElement("div");
          divCardContainer.className = "vm37_date-card-little";
          divCard.className = "vm37_date-card vm37_card-contenido";
          let cardCols = document.createElement("div");
          let divRight = document.createElement("div");
          let divLeft = document.createElement("div");
          let h1 = document.createElement("h1");
          let h2 = document.createElement("h2");
          let h3 = document.createElement("h3");
          let p = document.createElement("p");
          let img = document.createElement("img");
          h1.textContent = element.titulo;
          h2.textContent = element.autor;
          h3.textContent = element.publicacion;
          p.textContent = element.descripcion;
          img.src = element.img;
          img.className = "vm37_imgLibros";
          cardCols.className = "vm37_card-cols";
          divLeft.className = "vm37_left-card";
          divRight.className = "vm37_right-card";
  
          divCardContainer.appendChild(divCard);
  
          divCard.appendChild(cardCols);
          cardCols.appendChild(divLeft);
          cardCols.appendChild(divRight);
  
          divLeft.appendChild(h1);
          divLeft.appendChild(h2);
          divLeft.appendChild(h3);
          divLeft.appendChild(p);
  
          divRight.appendChild(img);
  
          document.getElementById("vm37_cardLibro").appendChild(divCard);
        }
      });
    }
  
    //FUNCION
    filtrar() {
      console.log("filtrar");
      this.mostrarlibros(this.dataContenido);
    }
  
    borrar(node) {
      let nodes = document.getElementById(node);
      let child;
      while ((child = nodes.firstChild)) {
        nodes.removeChild(child);
      }
    }
  
    getData() {
      console.log("getData");
      fetch("vm37-libros.json")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.dataContenido = data;
        })
        .catch((err) => console.log(err));
    }
    // console.log(dataContenido);
  }

  export default VM37_contenidos;