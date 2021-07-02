class Equipo36 {

  constructor() {
      console.log("consructor");
      this.contenedor = document.getElementById("root");
      this.ejecutarPrimero = true;
      this.BASE_PATH='img36';
      this.arrayImgMenu = [this.BASE_PATH+"/7a.jpg", this.BASE_PATH+"/5.jpg", this.BASE_PATH+"/2.jpg", this.BASE_PATH+"/4.jpg"];
      this.imgAutomaticaActivado = true;
      this.imgAutomatica; //variable para imagenes automaticas
      this.imgAutomaticaPausa;
      this.cont = 0;
      this.datosTextos 
      this.cargarTextos();
      this.imprimoTexto1;
      this.imprimoTexto2;
      this.queImprimo;
  }

  //----------------> Funciones para borrar <---------------
  borrarTodo(idABorrar) {
      let child;
       let queBorrar =document.getElementById(idABorrar);
     

      while (child = queBorrar.firstChild) {

          if (child.hasChildNodes()) {  
              this.borrarHijos(child);

          } else { 
             
              queBorrar.removeChild(child);
                }

          }
      }
  
  borrarHijos(nodes) {
      let child;
     
      while (child = nodes.firstChild) {
          
          nodes.removeChild(child);
         
      }

  }
  
  cargarTextos() {
      fetch("vm36-textos.json")
        .then((res) => res.json())
        .then((datos) => {
          this.datosTextos = datos;
         
          
      })
     
  }
    
    filtrarTextos(){   
        this.obtenerTexto(this.datosTextos)
    }
    
    
    obtenerTexto(data){

        
        data.textos.forEach((element)=>{            
            if(element.nombre === this.queImprimo){
              
            this.imprimoTexto1 =element.descripcion1;
            this.imprimoTexto2 =element.descripcion2;
            }   
            

            
        })
        
    }
    
        
    
  ejecutar() {
      if (this.ejecutarPrimero) {
          this.cargarTextos();
          this.cabecera();
          this.dibujarImagenes();         
          this.ejecutarPrimero = false;
      }
  } //el if lo paso a función porq no se si lo ejecuta
    

  crearElemento(definicion) {



      let elemento = document.createElement(definicion.tipo);

      if (definicion.id) {
          elemento.id = definicion.id;
      }

      if (definicion.clase) {
          elemento.className = definicion.clase;
      }

      if (definicion.texto) {
          elemento.innerHTML = definicion.texto;
      }

      if (definicion.src) {
     
          elemento.src = definicion.src;
      }
      
      if(definicion.tipo = "iframe"){
          elemento.allowfullscreen= definicion.allowfullscreen;
          elemento.loading = definicion.loading;
      }

      if (definicion.link) {
          elemento.href = definicion.link
      }

      if (definicion.events) {

          definicion.events.forEach(element => {

              if (element.nombre = "click") {
                 
                  elemento.onclick = element.funcion;
              }

              if (element.nombre = 'hover') {
                  element.onmouseover = element.funcion;
              }

          });
      }

      return elemento;
  }

  cabecera() {

      let divMenu = this.crearElemento({
          tipo: "header",
          clase: "divMenu"
      })

      let navMenu = this.crearElemento({
          tipo: "nav",
          id: "navM",
          clase: "navMenu"
      })

      let divLogo = this.crearElemento({
          tipo: "a",
          clase: "divLogo",
          link: "#",
          events: [{
              nombre: "click",
              funcion: () => {
                  this.borrarTodo("divCuerpo");
                  this.dibujarImagenes()
              }
             }]
      })

      let imgLogo = this.crearElemento({
          tipo: "img",
          src: this.BASE_PATH+"/logoacumar.svg",
      })

      let divSuscribite = this.crearElemento({
          tipo: "a",
          link: "#",
          clase: "divSuscribite",
          texto: "Contactanos",
          events: [{
              nombre: "click",
              funcion: function abrirUrl() {
                  window.open('https://api.whatsapp.com/send?phone=541154674781&fbclid=IwAR1U2QqRvgF7B1KOJ-DvmyCoVmwRlKOjiXOZxgTF4SUc_pF_BKqmLm9JfKk')
              }
               }]
      }) 


      let ulMenu = this.crearElemento({
          tipo: "ul",
          clase: "ulMenu",

      })

      let liMenu0 = this.crearElemento({
          tipo: "li",

      })

      let aMenu0 = this.crearElemento({
          tipo: "a",
          clase: "links",
          texto: "Inicio",
          link: "#",
          events: [{
              nombre: "click",
              funcion: () => {
                  this.borrarTodo("divCuerpo");
                  this.dibujarImagenes()
              }
             }]
      })

      let liMenu1 = this.crearElemento({
          tipo: "li",

      })
      let aMenu1 = this.crearElemento({
          tipo: "a",
          clase: "links",
          texto: "Quienes Somos",
          link: "#",
          events: [{
              nombre: "click",
              funcion: () => {
                  this.borrarTodo("divCuerpo");
                  this.dibujarQuienesSomos()
                
              }
             }]
      })

      let liMenu2 = this.crearElemento({
          tipo: "li",
      })
      let aMenu2 = this.crearElemento({
          tipo: "a",
          clase: "links",
          texto: "Que Hacemos",
          link: "#",
          events: [{
              nombre: "click",
              funcion: () => {
                  this.borrarTodo("divCuerpo");
                  this.dibujarQueHacemos();
                
              }
             }]
      })

      let liMenu3 = this.crearElemento({
          tipo: "li",
      })
      let aMenu3 = this.crearElemento({
          tipo: "a",
          clase: "links",
          texto: "Sumate",
          link: "#",
          events: [{
              nombre: "click",
              funcion: () => {
                  this.borrarTodo("divCuerpo");
                  this.dibujarSumate();                    
              }
             }]
      })

      let liMenu4 = this.crearElemento({
          tipo: "li",
      })
      let aMenu4 = this.crearElemento({
          tipo: "a",
          clase: "links",
          texto: "Contacto",
          link: "#",
          events: [{
              nombre: "click",
              funcion: () => {
                  this.borrarTodo("divCuerpo");
                  this.dibujarContacto();
               
              }
             }]
      })

      let divCuerpo = this.crearElemento({
          tipo: "body",
          id: "divCuerpo",
      }) 

      liMenu4.appendChild(aMenu4);
      liMenu3.appendChild(aMenu3);
      liMenu2.appendChild(aMenu2);
      liMenu1.appendChild(aMenu1);
      liMenu0.appendChild(aMenu0);
      ulMenu.appendChild(liMenu0);
      ulMenu.appendChild(liMenu1);
      ulMenu.appendChild(liMenu2);
      ulMenu.appendChild(liMenu3);
      ulMenu.appendChild(liMenu4);
      divLogo.appendChild(imgLogo);
      navMenu.appendChild(divLogo);
      navMenu.appendChild(divSuscribite);
      navMenu.appendChild(ulMenu);

      divMenu.appendChild(navMenu)
      this.contenedor.appendChild(divMenu);
      this.contenedor.appendChild(divCuerpo);

      this.footer();

      //_____________CAMBIA DE CLASE EL .navMenu para cuando scroleamos__________
      const nav = document.querySelector(".navMenu");

      window.addEventListener("scroll", function () {
          nav.classList.toggle("active", window.scrollY > 0)
      });

  }


  /**************************FOOTER**********************************/

  footer() {

      let divFooter = this.crearElemento({
          tipo: "footer",
          clase: "divFooter",
      })

      let navFooter = this.crearElemento({
          tipo: "nav",
          id: "navF",
          clase: "navFooter"
      })

      let ulFooter = this.crearElemento({
          tipo: "ul",
          clase: "ulFooter",

      })

      let liFooter0 = this.crearElemento({
          tipo: "li",

      })
      let aFooter0 = this.crearElemento({
          tipo: "a",
          clase: "links",
          link: "#",
          events: [{
              nombre: "click",
              funcion: function abrirUrl() {
                  window.open("https://www.instagram.com/cooperativamerlorecicla/");
              }
              }]
      })
      let imgIG = this.crearElemento({
          tipo: "img",
          src: this.BASE_PATH+"/instagram.svg",
      })

      let liFooter1 = this.crearElemento({
          tipo: "li",

      })
      let aFooter1 = this.crearElemento({
          tipo: "a",
          clase: "links",
          link: "#",
          events: [{
              nombre: "click",
              funcion: function abrirUrl() {
                  window.open("https://www.facebook.com/cooperativamerlorecicla");
              }
              }]
      })
      let imgFB = this.crearElemento({
          tipo: "img",
          src: this.BASE_PATH+"/facebook.svg",
      })

      let liFooter2 = this.crearElemento({
          tipo: "li",
      })
      let aFooter2 = this.crearElemento({
          tipo: "a",
          clase: "links",
          link: "#",
          events: [{
              nombre: "click",
              funcion: function abrirUrl() {
                  window.open("https://api.whatsapp.com/send?phone=541154674781&fbclid=IwAR1U2QqRvgF7B1KOJ-DvmyCoVmwRlKOjiXOZxgTF4SUc_pF_BKqmLm9JfKk");
              }
              }]

      })
      let imgWP = this.crearElemento({
          tipo: "img",
          src: this.BASE_PATH+"/whatsapp.svg",
      })

      let ulTextFooter = this.crearElemento({
          tipo: "ul",
          clase: "ulTextFooter",
      })

      let liTextFooter0 = this.crearElemento({
          tipo: "li",
          clase: "liTextFooter",
      })
      let h3Footer0 = this.crearElemento({
          tipo: "h3",
          clase: "footerTextos",
          texto: "cooperativamerlorecicla@gmail.com" + " " + " " + " " + " /",
      })

      let liTextFooter1 = this.crearElemento({
          tipo: "li",
          clase: "liTextFooter",
      })
      let h3Footer1 = this.crearElemento({
          tipo: "h3",
          clase: "footerTextos",
          texto: "+54 11 5467-4781 /",
      })

      let liTextFooter2 = this.crearElemento({
          tipo: "li",
          clase: "liTextFooter",
      })
      let h3Footer2 = this.crearElemento({
          tipo: "h3",
          clase: "footerTextos",
          texto: "Olaya y Matheu. Merlo, Provincia de Buenos Aires",
      })

      let h3Footer3 = this.crearElemento({
          tipo: "h3",
          clase: "footerTextos",
          texto: "- Acumar - Cooperativa Merlo Recicla",
      })


      aFooter0.appendChild(imgIG);
      aFooter1.appendChild(imgFB);
      aFooter2.appendChild(imgWP);

      liFooter2.appendChild(aFooter2);
      liFooter1.appendChild(aFooter1);
      liFooter0.appendChild(aFooter0);
      ulFooter.appendChild(liFooter0);
      ulFooter.appendChild(liFooter1);
      ulFooter.appendChild(liFooter2);
      navFooter.appendChild(ulFooter);

      liTextFooter0.appendChild(h3Footer0);
      liTextFooter1.appendChild(h3Footer1);
      liTextFooter2.appendChild(h3Footer2);

      ulTextFooter.appendChild(liTextFooter0);
      ulTextFooter.appendChild(liTextFooter1);
      ulTextFooter.appendChild(liTextFooter2);


      navFooter.appendChild(ulTextFooter);
      navFooter.appendChild(h3Footer3);

      divFooter.appendChild(navFooter);
      this.contenedor.appendChild(divFooter);
  }

  /*************************MENU IMAGENES****************************/

  dibujarImagenes() {

      
      let divMenuImg = this.crearElemento({
          tipo: "div",
          id: "menuImg"

      })
      let divImg = this.crearElemento({
          tipo: "div",
          id: "divImgMenu"

      })
      let imgMenu = this.crearElemento({
          tipo: "img",
          id: "imgMenu",
          src: this.arrayImgMenu[0],

      })
      let ulSlider = this.crearElemento({
          tipo: "ul",
          clase: "ulSlider"
      })
      let liSlider1 = this.crearElemento({
          tipo: "li",
          clase: "liSlider",
      })
      let aSlider1 = this.crearElemento({
          tipo: "a",
          texto: "",
          link: "#",
          clase: "aSlider",
          events: [{
              nombre: "click",
              funcion: () => {
                  this.cargarImagen(0);
              }
             }]



      })
      let liSlider2 = this.crearElemento({
          tipo: "li",
          clase: "liSlider",
      })
      let aSlider2 = this.crearElemento({
          tipo: "a",
          texto: "",
          link: "#",
          clase: "aSlider",
          events: [{
              nombre: "click",
              funcion: () => {
                  this.cargarImagen(1);
              }
             }]
      })
      let liSlider3 = this.crearElemento({
          tipo: "li",
          clase: "liSlider",
      })
      let aSlider3 = this.crearElemento({
          tipo: "a",
          texto: "",
          link: "#",
          clase: "aSlider",
          events: [{
              nombre: "click",
              funcion: function(){                
                  this.cargarImagen(2);
              }.bind(this)
             }]
      })
      let liSlider4 = this.crearElemento({
          tipo: "li",
          clase: "liSlider",
      })
      let aSlider4 = this.crearElemento({
          tipo: "a",
          texto: "",
          link: "#",
          clase: "aSlider",
          events: [{
              nombre: "click",
              funcion: function(){                 
                  this.cargarImagen(3);
              }.bind(this)
             }]
      })
      let tituloImgMenu = this.crearElemento({
          tipo: "div",
          id: "tituloImgMenu",
          texto: "Bienvenido a Merlo Recicla - Cooperativa de trabajo",
      })
      
      
      /****reciclar******/
      let divInicio = this.crearElemento({
          tipo: "div",
          clase: "subMenuInicio",

      })
      let tituloInicio = this.crearElemento({
          tipo: "h3",
          id: "tituloInicio",
          texto: "¿Como separo mis residuos?",
      })
      let pInicio = this.crearElemento({
          tipo: "p",
          clase: "pInicio",
          texto: "Reciclando evitamos que los productos y materiales se conviertan en residuos, transformándolos en nuevos elementos, alargando su vida útil y ayudando a la preservación de los recursos naturales del planeta. Por esto tu ayuda sería un gran cambio para mejorar cada vez mas nuestro hábitat, por lo que te enseñamos como separar tus residuos:</br></br>-Basura (Tubos de pasta dental, encendedor, vidrios rotos, tubos o lámparas, etc)</br></br>-Desechos orgánicos (También pueden ser utilizados en Compost, verduras, frutas, etc)</br></br>-Reciclables se deben separar, limpiar y secar, para una mejor guía dejamos el siguiente listado:",
      })
      
      let ulInicio = this.crearElemento({
          tipo: "ul",
          clase: "ulInicio",
      })
      let liInicio1 = this.crearElemento({
          tipo: "li",
          clase: "liInicio",
      })
      let imgInicio1 = this.crearElemento({
          tipo: "img",
          clase: "imgInicio",
          src: "img36/papel.svg",
      })
      let textoInicio1 = this.crearElemento({
          tipo: "h3",
          clase: "textoInicio",
          texto: "Papel y cartón:</br></br> Carpetas, cuadernos, papeles, cajas, envases de cartón, diarios, revistas, fotocopias",
      })
      let liInicio2 = this.crearElemento({
          tipo: "li",
          clase: "liInicio",
      })
      let imgInicio2 = this.crearElemento({
          tipo: "img",
          clase: "imgInicio",
          src: "img36/plastico.svg",
      })
      let textoInicio2 = this.crearElemento({
          tipo: "h3",
          clase: "textoInicio",
          texto: "Plástico:</br></br>Tapas, bolsas, envases de comida y bebida, vasos y cubiertos descartables, macetas, sillas, mesas, CDs, DVDs",
      })
      let liInicio3 = this.crearElemento({
          tipo: "ul",
          clase: "liInicio",
      })
      let imgInicio3 = this.crearElemento({
          tipo: "img",
          clase: "imgInicio",
          src: "img36/vidrio.svg",
      })
      let textoInicio3 = this.crearElemento({
          tipo: "h3",
          clase: "textoInicio",
          texto: "Vidrio:</br></br>Envases de alimentos, frascos, botellas",
      })
      let liInicio4 = this.crearElemento({
          tipo: "ul",
          clase: "liInicio",
      })
      let imgInicio4 = this.crearElemento({
          tipo: "img",
          clase: "imgInicio",
          src: "img36/metal.svg",
      })
      let textoInicio4 = this.crearElemento({
          tipo: "h3",
          clase: "textoInicio",
          texto: "Metal:</br></br>Latas, aluminio, hierro, llaves, cobre, pilas",
      })
      
      /*****reciclar*/

      divImg.appendChild(imgMenu);
      ulSlider.appendChild(liSlider1);
      liSlider1.appendChild(aSlider1);
      ulSlider.appendChild(liSlider2);
      liSlider2.appendChild(aSlider2);
      ulSlider.appendChild(liSlider3);
      liSlider3.appendChild(aSlider3);
      ulSlider.appendChild(liSlider4);
      liSlider4.appendChild(aSlider4);
      divMenuImg.appendChild(divImg);
      divMenuImg.appendChild(tituloImgMenu);
      divMenuImg.appendChild(ulSlider);
      
      /************reciclar********/
      
      liInicio1.appendChild(imgInicio1);
      liInicio1.appendChild(textoInicio1);
      liInicio2.appendChild(imgInicio2);
      liInicio2.appendChild(textoInicio2);
      liInicio3.appendChild(imgInicio3);
      liInicio3.appendChild(textoInicio3);
      liInicio4.appendChild(imgInicio4);
      liInicio4.appendChild(textoInicio4);
      ulInicio.appendChild(liInicio1);
      ulInicio.appendChild(liInicio2);
      ulInicio.appendChild(liInicio3);
      ulInicio.appendChild(liInicio4);    
    divInicio.appendChild(tituloInicio);
     divInicio.appendChild(pInicio);

      divInicio.appendChild(ulInicio);


      divCuerpo.appendChild(divMenuImg);
      divCuerpo.appendChild(divInicio);
      
      
      
      if (this.imgAutomaticaActivado) {

         this.tiempoImagen();
          //se pasan las imagenes solas
      }

  }

  dibujarQuienesSomos() {
      
      this.queImprimo = "Quienes Somos";
      
      this.filtrarTextos();
      clearInterval(this.imgAutomatica);
      clearInterval(this.imgAutomaticaPausa);
     
      

      let divQuienesSomos = this.crearElemento({
          tipo: "div",
          clase: "subMenuQuienesSomos",
      })
      
     /* let imgQuienesSomos = this.crearElemento({
        tipo:"img",
        id:"imgQuienesSomos",
        src:"img36/quienessomos.jpg",         
      })*/
      
      let divDegradeImg = this.crearElemento({
          tipo: "div",
          id: "degradeImg",          
      })
      

      
      let tituloQuienesSomos0 = this.crearElemento({
          tipo: "h3",
          id: "tituloQuienesSomos0",
          texto: "Somos una cooperativa de trabajo dedicada a la recolección diferenciada de residuos sólidos urbanos para su clasificación y posterior reciclado.",
      })
      let pQuienesSomos0 = this.crearElemento({
          tipo: "p",
          clase: "pCuerpo",
          texto: this.imprimoTexto1,

      })
      let tituloQuienesSomos1 = this.crearElemento({
          tipo: "h3",
          id: "tituloQuienesSomos1",
          texto: "Nuestra Historia",
      })
      let pQuienesSomos1 = this.crearElemento({
          tipo: "p",
          clase: "pCuerpo",
          texto: this.imprimoTexto2,
      })

     /* divQuienesSomos.appendChild(imgQuienesSomos);*/
      divQuienesSomos.appendChild(divDegradeImg);            
      divQuienesSomos.appendChild(tituloQuienesSomos0);
      divQuienesSomos.appendChild(pQuienesSomos0);

      divQuienesSomos.appendChild(tituloQuienesSomos1);
      divQuienesSomos.appendChild(pQuienesSomos1);
      divCuerpo.appendChild(divQuienesSomos);
      
      const fondo = document.getElementById("degradeImg");
     
      fondo.style.backgroundImage = "linear-gradient(to top, rgba(55,236,186,0.5) 0%, rgba(114,175,211,0.5) 100%),url(img36/quienessomos.jpg)";
      
 
  }

  dibujarQueHacemos() {
      
      this.queImprimo = "Que Hacemos";
      this.filtrarTextos();
      clearInterval(this.imgAutomatica);
      clearInterval(this.imgAutomaticaPausa);

      let divQueHacemos = this.crearElemento({
          tipo: "div",
          clase: "subMenu",

      })
      let tituloQueHacemos = this.crearElemento({
          tipo: "h3",
          id: "tituloQueHacemos",
          texto: "La actividad principal de la Cooperativa hoy en día es la Recolección diferenciada de residuos a través de jornadas de recepción de éstos.",
      })
      let pQueHacemos = this.crearElemento({
          tipo: "p",
          clase: "pCuerpo",
          texto: this.imprimoTexto1,
      })
      let ullustraciones = this.crearElemento({
          tipo: "ul",
          clase: "ulIlustraciones",
      })
      let liIlus1 = this.crearElemento({
          tipo: "li",
          clase: "liIlus"
      })
      let imgTarea1 = this.crearElemento({
          tipo: "img",
          clase: "imgTarea",
          src: "img36/recicla1.svg",
      })
      let textoTarea1 = this.crearElemento({
          tipo: "h3",
          clase: "textoTarea",
          texto: "Pasamos a retirar tus reciclables",
      })
      let liIlus2 = this.crearElemento({
          tipo: "li",
          clase: "liIlus"
      })
      let imgTarea2 = this.crearElemento({
          tipo: "img",
          clase: "imgTarea",
          src: "img36/contaminacion1.svg",
      })
      let textoTarea2 = this.crearElemento({
          tipo: "h3",
          clase: "textoTarea",
          texto: "Disminuimos la contaminación ambiental"
      })
      let liIlus3 = this.crearElemento({
          tipo: "ul",
          clase: "liIlus"
      })
      let imgTarea3 = this.crearElemento({
          tipo: "img",
          clase: "imgTarea",
          src: "img36/recicla2.svg",
      })
      let textoTarea3 = this.crearElemento({
          tipo: "h3",
          clase: "textoTarea",
          texto: "Cuidamos nuestro habitat",
      })

      liIlus1.appendChild(imgTarea1);
      liIlus1.appendChild(textoTarea1);
      liIlus2.appendChild(imgTarea2);
      liIlus2.appendChild(textoTarea2);
      liIlus3.appendChild(imgTarea3);
      liIlus3.appendChild(textoTarea3);
      ullustraciones.appendChild(liIlus1);
      ullustraciones.appendChild(liIlus2);
      ullustraciones.appendChild(liIlus3);

      divQueHacemos.appendChild(tituloQueHacemos);

      divQueHacemos.appendChild(ullustraciones);

      divQueHacemos.appendChild(pQueHacemos);

      divCuerpo.appendChild(divQueHacemos);

  }

  dibujarSumate() {

      this.queImprimo = "Sumate";
      this.filtrarTextos();
      clearInterval(this.imgAutomatica);
      clearInterval(this.imgAutomaticaPausa);

      let divSumate = this.crearElemento({
          tipo: "div",
          clase: "subMenu",

      })
      let pSumate = this.crearElemento({
          tipo: "p",
          clase: "pSumate",
          texto: this.imprimoTexto1,
      })
      let h4a = this.crearElemento({
          tipo: "a",
          link: "#",
          clase: "h4Cuerpo",
          texto: "¡Quiero ser parte!",
          events: [{
              nombre: "click",
              funcion: function abrirUrl() {
                  window.open('https://api.whatsapp.com/send?phone=541154674781&fbclid=IwAR1U2QqRvgF7B1KOJ-DvmyCoVmwRlKOjiXOZxgTF4SUc_pF_BKqmLm9JfKk');
              }
      }]

      })
      let ulIlustracionesSumate = this.crearElemento({
          tipo: "ul",
          clase: "ulIlustracionesSumate",
      })
      let liIlusSumate = this.crearElemento({
          tipo: "li",
          clase: "liIlus"
      })
      let imgIlusSumate = this.crearElemento({
          tipo: "img",
          clase: "imgIlusSumate",
          src: "img36/sumateimg2.svg",
      })
      let p1IlusSumate = this.crearElemento({
          tipo: "p",
          clase: "p1IlusSumate",
          texto: "De ambas maneras estás colaborando con nosotros y el ambiente. ¡Te esperamos!",
      })

      liIlusSumate.appendChild(imgIlusSumate);
      liIlusSumate.appendChild(p1IlusSumate);

      ulIlustracionesSumate.appendChild(liIlusSumate);
      divSumate.appendChild(pSumate);
      divSumate.appendChild(h4a);
      divSumate.appendChild(ulIlustracionesSumate);
      divCuerpo.appendChild(divSumate);

  }

  dibujarContacto() {

      clearInterval(this.imgAutomatica);
      clearInterval(this.imgAutomaticaPausa);

      let divContacto = this.crearElemento({
          tipo: "div",
          clase: "subMenu1",

      })
      let h3Contacto = this.crearElemento({
          tipo: "h3",
          clase: "h3Contacto",
          texto: "¿Necesitas que retiremos tus residuos reciclables por tu domicilio, (personal o laboral)?",
      })
      let pContacto = this.crearElemento({
          tipo: "p",
          clase: "pContacto",
          texto: "Completá el formulario así podremos contactarnos con vos y acordar el día y la hora lo más pronto posible. </br></br><strong>*Recordá que el domicilio tiene que estar dentro del Partido de Merlo ya que, por el momento, la Cooperativa sólo se maneja dentro de esta zona</strong>",
      })
      let botonContacto = this.crearElemento({
          tipo: "a",
          link: "#",
          clase: "botonContacto",
          texto: "Necesito que retiren mis residuos",
          events: [{
              nombre: "click",
              funcion: function abrirUrl2() {

                  window.open('https://docs.google.com/forms/d/e/1FAIpQLSeSFr0dL0YeTk3CJy7ZD5QBY-BfiQTQK7zqWdMwfeizqmSaXA/viewform?usp=sf_link');

              }
              }]

      })
      
      let divImgMapa = this.crearElemento({
          tipo: "div",
          clase: "divImgMapa"})      
      let googleMaps = this.crearElemento({
          tipo:"iframe",
          id:"googleMaps",         
          src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.780672510014!2d-58.741548684768205!3d-34.68548458043836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bceaa9902c09a5%3A0x6cca85426b70a390!2sOlaya%20%26%20Matheu%2C%20Merlo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1625177822785!5m2!1ses-419!2sar",
          allowfullscreen:"",
          loading:"",
      })      

      
      let p0Redes = this.crearElemento({
          tipo: "p",
          clase: "p0Redes",
          texto: "Tambien podes dejarnos tus reciclables en nuestro Punto Verde: Barrio Procrear, calles Matheu y Olaya"
      })
      let h4Redes = this.crearElemento({
          tipo: "h4",
          clase: "h4Redes",
          texto: "Si tenés alguna duda o queres contactarnos por otra causa, no dudes en hablarnos a través de nuestras redes, chat de WhatsApp ó e-mail",
      })
      let p1Redes = this.crearElemento({
          tipo: "p1",
          clase: "p1Redes",
          texto: "¡Gracias por ser parte de este proyecto!",
      })
  
      
  /*******************************************************************************************/    
      let ulRedes = this.crearElemento({
          tipo: "ul",
          clase: "ulRedes",
      })

      let liRedes0 = this.crearElemento({
          tipo: "li",

      })
      let aRedes0 = this.crearElemento({
          tipo: "a",
          clase: "aRedes",
          link: "#",
          events: [{
              nombre: "click",
              funcion: function abrirUrl() {
                  window.open("https://www.instagram.com/cooperativamerlorecicla/");
              }
              }]
      })
      
      let imgIG = this.crearElemento({
          tipo: "img",
          src: this.BASE_PATH+"/instagram.svg",
      })

      let liRedes1 = this.crearElemento({
          tipo: "li",

      })
      let aRedes1 = this.crearElemento({
          tipo: "a",
          clase: "aRedes",
          link: "#",
          events: [{
              nombre: "click",
              funcion: function abrirUrl() {
                  window.open("https://www.facebook.com/cooperativamerlorecicla");
              }
              }]
      })
      let imgFB = this.crearElemento({
          tipo: "img",
          src: this.BASE_PATH+"/facebook.svg",
      })

      let liRedes2 = this.crearElemento({
          tipo: "li",
      })
      let aRedes2 = this.crearElemento({
          tipo: "a",
          clase: "aRedes",
          link: "#",
          events: [{
              nombre: "click",
              funcion: function abrirUrl() {
                  window.open("https://api.whatsapp.com/send?phone=541154674781&fbclid=IwAR1U2QqRvgF7B1KOJ-DvmyCoVmwRlKOjiXOZxgTF4SUc_pF_BKqmLm9JfKk");
              }
              }]

      })
      let imgWP = this.crearElemento({
          tipo: "img",
          src: this.BASE_PATH+"/whatsapp.svg",
      })

      
 /***************************************************************************************************************/ 
      aRedes0.appendChild(imgIG);
      liRedes0.appendChild(aRedes0);
      ulRedes.appendChild(liRedes0);
      aRedes1.appendChild(imgFB);
      liRedes1.appendChild(aRedes1);
      ulRedes.appendChild(liRedes1);
      aRedes2.appendChild(imgWP);
      liRedes2.appendChild(aRedes2);
      ulRedes.appendChild(liRedes2);
      
      divContacto.appendChild(h3Contacto);
      divContacto.appendChild(pContacto);
      divContacto.appendChild(botonContacto);
      divContacto.appendChild(p1Redes);
      divContacto.appendChild(p0Redes);
      divImgMapa.appendChild(googleMaps);
      divContacto.appendChild(divImgMapa);      
      divContacto.append(h4Redes);
      divContacto.appendChild(ulRedes);
      divContacto.appendChild(p1Redes);
      

      divCuerpo.appendChild(divContacto);
  }

  //----------------> Funciones para botones de imagen <---------------


  //funciones "tiempoImagen" y "cargarImagenesSiguente" que hace que las imagenes se pasen automaticamente
  tiempoImagen() {

      this.imgAutomatica = setInterval( function()  {

          let imagen = document.getElementById("imgMenu");
          
  
          if (imagen) {
  
              this.cont += 1;
                             
              if (this.cont > (this.arrayImgMenu.length - 1)) {
                  this.cont = 0
  
              }
                  
              
              imagen.src = this.arrayImgMenu[this.cont];
                  
          }
      }.bind(this), 4000);

  }
  //dibuja imagen siguiene
  cargarImagenSiguiente() {

      let imagen = document.getElementById("imgMenu");


      if (imagen) {

          this.cont += 1;
          
          
          if (this.cont > (this.arrayImgMenu.length - 1)) {
              this.cont = 0


            
              this.imagen.src = this.arrayImgMenu[this.cont];

          }
         
      }
  }

  //función para dibujar "x" imagen en la pantalla
  cargarImagen(n) {

      clearInterval(this.imgAutomatica) //detiene imagen aleatoria
     
      let imagen = document.getElementById("imgMenu");
      imagen.src = this.arrayImgMenu[n]
      this.imgAutomaticaPausa = setTimeout(function(){this.tiempoImagen()}.bind(this), 6000);

  }

  cargarImagenAnterior() {
      let imagen = document.getElementById("imgMenu");

      this.cont -= 1;
      if (this.cont < 0) {
          this.cont = 0;
      }

      imagen.src = this.arrayImgMenu[this.cont];
  }

}

  export default Equipo36;