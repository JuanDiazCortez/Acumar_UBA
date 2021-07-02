// GRUPO 38 conversion a clase
class Equipo38 {
    constructor() {
      this.container = document.getElementById("root");
      this.mainDiv = document.createElement("main");
      this.PATH_IMG = "img38/";
  
      this.currentSlide = 0;
      this.slides = ["slide1", "slide2", "slide3"];
      this.fotos = ["noticia1.jpg", "noticia2.jpg", "noticia3.jpg"];
      this.textoNoti = [
        "Reciclaje Acumar",
        "Nueva app Biblioteca Movil",
        "Limpieza del Riachuelo",
      ];
      this.idInterval;
      this.datosLibros = null;
      this.fotosradio = ["radio/s1.jpg", "radio/s2.jpg", "radio/s3.jpg"];
    }
    //-----------------------------------------   HEADER   --------------------------------------------
  
    dibujarTodo() {
      this.getData();
      this.dibujaHeader();
      this.main();
      this.dibujarFooter();
    }
  
    dibujaHeader() {
      let header = document.createElement("header");
  
      let divPadre = document.createElement("div");
      let divPadre2 = document.createElement("div");
  
      let nav1 = this.dibujarNav1();
      let nav2 = this.dibujarNav2();
  
      divPadre.appendChild(nav1);
      divPadre2.appendChild(nav2);
  
      header.appendChild(divPadre);
      header.appendChild(divPadre2);
  
      this.container.appendChild(header);
    }
  
    dibujarNav1() {
      let nav = document.createElement("nav");
      nav.id = "nav1vm38";
      nav.className = "navbarvm38";
  
      let div = document.createElement("div");
      div.className = "logovm38";
  
      let a0 = document.createElement("a");
      a0.href = "https://www.acumar.gob.ar";
      a0.target = "_blank";
  
      let img = document.createElement("img");
      img.className = "logo-imgvm38";
      img.src = "img38/ACUMAR2.png";
  
      let a1 = document.createElement("a");
      let span0 = document.createElement("span");
      let ul = document.createElement("ul");
  
      let li1 = document.createElement("li");
      let li2 = document.createElement("li");
      let li3 = document.createElement("li");
  
      let al1 = document.createElement("a");
      let al2 = document.createElement("a");
      let al3 = document.createElement("a");
  
      a1.onclick = function () {
        this.borrarMain();
        this.dibujarPagPrincipal();
      }.bind(this);
  
      span0.className = "logo-textovm38";
      span0.textContent = "Bibliotecas Móviles";
      ul.className = "nav-itemsvm38";
  
      al1.onclick = function () {
        this.borrarMain();
        this.dibujarDondeestamos();
      }.bind(this);
  
      al1.textContent = "¿Dónde estamos?";
  
      al2.onclick = function () {
        this.borrarMain();
        this.dibujarQuienessomos();
      }.bind(this);
  
      al2.textContent = "¿Quiénes somos?";
  
      al3.onclick = function () {
        this.borrarMain();
        this.dibujarAyuda();
      }.bind(this);
      al3.textContent = "Ayuda";
  
      li1.appendChild(al1);
  
      li2.appendChild(al2);
      li3.appendChild(al3);
  
      a0.appendChild(img);
      a1.appendChild(span0);
      div.appendChild(a0);
      div.appendChild(a1);
  
      ul.appendChild(li1);
  
      ul.appendChild(li2);
      ul.appendChild(li3);
  
      nav.appendChild(div);
      nav.appendChild(ul);
  
      return nav;
    }
  
    dibujarNav2() {
      let nav2 = document.createElement("nav");
      nav2.id = "nav2vm38";
      nav2.className = "navbarvm38";
  
      let ul = document.createElement("ul");
      ul.className = "nav-items2vm38";
  
      let li_1 = document.createElement("li");
      li_1.className = "li-ulvm38";
  
      let a_1 = document.createElement("a");
      a_1.onclick = function () {
        console.log(this);
        this.borrarMain();
        this.dibujarPagPrincipal();
      }.bind(this);
  
      a_1.textContent = "Inicio";
  
      let li0 = document.createElement("li");
      li0.className = "li-ulvm38";
  
      let a0 = document.createElement("a");
      a0.onclick = function () {
        this.borrarMain();
        this.dibujarBuscador();
        clearInterval(this.idInterval);
      }.bind(this);
  
      a0.textContent = "Catálogo";
  
      let li1 = document.createElement("li");
      li1.className = "li-ulvm38";
  
      let a1 = document.createElement("a");
      a1.onclick = function () {
        clearInterval(this.idInterval);
        this.borrarMain();
        this.dibujarActividades();
      }.bind(this);
  
      a1.textContent = "Actividades y Concursos";
  
      let li2 = document.createElement("li");
      li2.className = "li-ulvm38";
  
      let a2 = document.createElement("a");
      a2.onclick = function () {
        clearInterval(this.idInterval);
        this.borrarMain();
        this.dibujarRadio();
      }.bind(this);
  
      a2.textContent = "Radio Comunitaria";
  
      li_1.appendChild(a_1);
      li0.appendChild(a0);
      li1.appendChild(a1);
      li2.appendChild(a2);
  
      ul.appendChild(li_1);
      ul.appendChild(li0);
      ul.appendChild(li1);
      ul.appendChild(li2);
  
      nav2.appendChild(ul);
  
      return nav2;
    }
  
    //-----------------------------------------   ACÁ EMPIEZA EL MAIN-pag principal   -----------------------------
  
    main() {
      let main = this.dibujarPagPrincipal();
      this.container.appendChild(main);
  
      this.idInterval = setInterval(
        () => {
          let img = document.getElementById("noticiasvm38");
          //   console.clear();
          console.log("interval");
  
          this.slides.map((elem, index) => {
            if (index === this.currentSlide) {
              console.log("si");
              if (img) {
                img.src = "img38/" + [this.fotos[this.currentSlide]];
              }
            }
          });
  
          this.currentSlide++;
          if (this.currentSlide > 2) {
            this.currentSlide = 0;
          }
        },
  
        5000
      );
    }
  
    dibujarPagPrincipal() {
      let main = document.createElement("div");
  
      //-----------------PRIMERA SECCION (BANNER)-----------------
      let div0 = document.createElement("div");
      div0.className = "contenedor1vm38";
  
      let img0 = document.createElement("img");
      img0.src = "img38/7.jpg";
  
      let div0a = document.createElement("div");
      div0a.className = "fondoinfovm38";
  
      let div0b = document.createElement("div");
      div0b.className = "bibliotecainfovm38";
  
      let div0bh2 = document.createElement("h2");
      div0bh2.textContent = "¿Qué es Bibliotecas Móviles?";
  
      let div0bp = document.createElement("p");
      div0bp.textContent =
        "Un programa de difusión y promoción de la lectura, haciendo hincapié en la temática concerniente a los aspectos culturales, históricos, literarios en torno a la cuenca Matanza - Riachuelo.";
  
      //------------------SEGUNDA SECCION (TARJETAS)--------------------------
  
      let div1 = document.createElement("div");
      div1.className = "contenedor2vm38";
  
      let divcrono = document.createElement("div");
      divcrono.className = "preview-cronovm38";
  
      let cronoimg = document.createElement("img");
      cronoimg.src = "img38/isotipocronograma.svg";
  
      let divcronotexto = document.createElement("div");
      divcronotexto.className = "texto-cronovm38";
  
      let cronoh2 = document.createElement("h2");
      cronoh2.textContent = "Cronograma";
  
      let cronop = document.createElement("p");
      cronop.textContent =
        "Enterate cuando nos movemos, nuestros talleres y concursos.";
  
      let divcronolinks = document.createElement("div");
      divcronolinks.className = "contenedor-linkvm38";
  
      let cronoa = document.createElement("a");
      cronoa.textContent = "Ver más";
  
      cronoa.onclick = function () {
        this.borrarMain();
        this.dibujarDondeestamos();
      }.bind(this);
  
      let divbiblio = document.createElement("div");
      divbiblio.className = "preview-bibliotecavm38";
  
      let biblioimg = document.createElement("img");
      biblioimg.src = "img38/isotipobiblioteca.svg";
  
      let divbibliotexto = document.createElement("div");
      divbibliotexto.className = "texto-bibliotecavm38";
  
      let biblioh2 = document.createElement("h2");
      biblioh2.textContent = "Biblioteca";
  
      let bibliop = document.createElement("p");
      bibliop.textContent = "Accedé al catálogo completo de nuestros libros.";
  
      let divbibliolinks = document.createElement("div");
      divbibliolinks.className = "contenedor-linkvm38";
  
      let biblioa = document.createElement("a");
      biblioa.textContent = "Ver más";
      biblioa.onclick = function () {
        clearInterval(this.idInterval);
        this.borrarMain();
        this.dibujarBuscador();
      }.bind(this);
  
      //--------------------------TERCERA SECCION (NOTICIAS)---------------------
  
      let divnoticias = document.createElement("div");
      divnoticias.className = "noticiasvm38";
  
      let notih2 = document.createElement("h2");
      notih2.textContent = "Noticias";
  
      let div2 = document.createElement("div");
      div2.className = "contenedor3vm38";
  
      let ulslider = document.createElement("ul");
      ulslider.className = "uslidervm38";
  
      let lis1 = document.createElement("li");
      lis1.id = "uslide1vm38";
  
      let s1img = document.createElement("img");
      s1img.id = "noticiasvm38";
      s1img.src = "img38/noticia1.jpg";
  
      let ulmenu = document.createElement("ul");
      ulmenu.className = "menuvm38";
  
      let lim1 = document.createElement("li");
      let lia1 = document.createElement("a");
      lia1.onclick = () => {
        this.currentSlide = 0;
        document.getElementById("noticiasvm38").src =
          "img38/" + [this.fotos[this.currentSlide]];
      };
      lia1.textContent = "1";
  
      let lim2 = document.createElement("li");
      let lia2 = document.createElement("a");
      lia2.onclick = () => {
        this.currentSlide = 1;
        document.getElementById("noticiasvm38").src =
          "img38/" + [this.fotos[this.currentSlide]];
      };
      lia2.textContent = "2";
  
      let lim3 = document.createElement("li");
      let lia3 = document.createElement("a");
      lia3.onclick = () => {
        this.currentSlide = 2;
        document.getElementById("noticiasvm38").src =
          "img38/" + [this.fotos[this.currentSlide]];
      };
      lia3.textContent = "3";
  
      //----------------- APPEND PRIMERA SECCION (BANNER)-------------
  
      div0b.appendChild(div0bh2);
      div0b.appendChild(div0bp);
  
      div0a.appendChild(div0b);
  
      div0.appendChild(div0a);
      div0.appendChild(img0);
  
      //-----------APPEND SEGUNDA SECCION (TARJETAS)-------------------
  
      divcronotexto.appendChild(cronoh2);
      divcronotexto.appendChild(cronop);
      divcronolinks.appendChild(cronoa);
  
      divcrono.appendChild(cronoimg);
      divcrono.appendChild(divcronotexto);
      divcrono.appendChild(divcronolinks);
  
      divbibliotexto.appendChild(biblioh2);
      divbibliotexto.appendChild(bibliop);
      divbibliolinks.appendChild(biblioa);
  
      divbiblio.appendChild(biblioimg);
      divbiblio.appendChild(divbibliotexto);
      divbiblio.appendChild(divbibliolinks);
  
      div1.appendChild(divcrono);
      div1.appendChild(divbiblio);
  
      //-------------------APPEND TERCERA SECCION (NOTICIAS)--------
  
      divnoticias.appendChild(notih2);
  
      lim1.appendChild(lia1);
      lim2.appendChild(lia2);
      lim3.appendChild(lia3);
  
      ulmenu.appendChild(lim1);
      ulmenu.appendChild(lim2);
      ulmenu.appendChild(lim3);
  
      lis1.appendChild(s1img);
  
      ulslider.appendChild(lis1);
  
      div2.appendChild(ulslider);
      div2.appendChild(ulmenu);
  
      //------------APEND MAIN----------------
  
      main.appendChild(div0);
      main.appendChild(div1);
      main.appendChild(div2);
  
      this.mainDiv.appendChild(main);
      return this.mainDiv;
    }
  
    //---------------------------------------------------  ACÁ EMPIEZA EL FOOTER  ---------------------------------
  
    dibujarFooter() {
      let footer = document.createElement("footer");
      footer.className = "footervm38";
  
      let divPadre = document.createElement("div");
      divPadre.className = "mainfootervm38";
  
      let div0 = document.createElement("div");
      div0.className = "container-mainfooter1vm38";
  
      let a0 = document.createElement("a");
      a0.href = "https://www.acumar.gob.ar";
      a0.target = "_blank";
  
      let img0 = document.createElement("img");
      img0.src = "img38/imagotipoblanco.svg";
  
      let div1 = document.createElement("div");
      div1.className = "container-mainfooter2vm38";
  
      let div1h1 = document.createElement("h1");
      div1h1.className = "h1footervm38";
      div1h1.textContent = "SEDE CENTRAL";
  
      let div1p = document.createElement("p");
      div1p.innerHTML = "Esmeralda 255 PB, CABA. <br> De 10 a 17hs.";
  
      let div2 = document.createElement("div");
      div2.className = "container-mainfooter3vm38";
  
      let div2h1 = document.createElement("h1");
      div2h1.className = "h1footervm38";
      div2h1.textContent = "CUENCA MEDIA";
  
      let div2p = document.createElement("p");
      div2p.innerHTML =
        "Nuestras Malvinas 139, Esteban Echeverria. <br> De 9 a 17hs.";
  
      let div3 = document.createElement("div");
      div3.className = "container-mainfooter4vm38";
  
      let div3h1 = document.createElement("h1");
      div3h1.className = "h1footervm38";
      div3h1.textContent = "CUENCA ALTA";
  
      let div3p = document.createElement("p");
      div3p.innerHTML =
        "Libertad 798 (Palacio Municipal) Cañuelas. <br> De 9 a 17hs.";
  
      let div4 = document.createElement("div");
      div4.className = "container-mainfooter5vm38";
  
      let div4h1 = document.createElement("h1");
      div4h1.className = "h1footervm38";
      div4h1.textContent = "Nuestras Redes";
  
      let div4a = document.createElement("div");
      div4a.className = "container-mainfooter5-imagesvm38";
  
      //- fb
  
      let divfacebook = document.createElement("div");
      divfacebook.className = "row-footervm38";
  
      let facebooka = document.createElement("a");
      facebooka.href = "https://www.facebook.com/acumar.riachuelo";
      facebooka.target = "_blank";
  
      let facebookimg = document.createElement("img");
      facebookimg.src = "img38/iconos redes/036-facebook.png";
  
      //- tw
  
      let divtwitter = document.createElement("div");
      divtwitter.className = "row-footervm38";
  
      let twittera = document.createElement("a");
      twittera.href = "https://twitter.com/acumarriachuelo";
      twittera.target = "_blank";
  
      let twitterimg = document.createElement("img");
      twitterimg.src = "img38/iconos redes/008-twitter.png";
  
      //yt
  
      let divyt = document.createElement("div");
      divyt.className = "row-footervm38";
  
      let yta = document.createElement("a");
      yta.href = "https://www.youtube.com/channel/UCG7QxsB4vQSC3IVd7agMP1g";
      yta.target = "_blank";
  
      let ytimg = document.createElement("img");
      ytimg.src = "img38/iconos redes/001-youtube.png";
  
      //insta
  
      let divinsta = document.createElement("div");
      divinsta.className = "row-footervm38";
  
      let instaa = document.createElement("a");
      instaa.href = "https://www.instagram.com/acumar.riachuelo/";
      instaa.target = "_blank";
  
      let instaimg = document.createElement("img");
      instaimg.src = "img38/iconos redes/029-instagram.png";
  
      let div5 = document.createElement("div");
      div5.className = "container-mainfooter6vm38";
  
      let div5h1 = document.createElement("h1");
      div5h1.className = "h1footervm38";
      div5h1.textContent = "Contacto";
  
      let div5a = document.createElement("div");
      div5a.className = "row2-footervm38";
  
      let div5ai = document.createElement("i");
      div5ai.className = "fas fa-mobile-altvm38";
  
      let div5alabel = document.createElement("label");
      div5alabel.textContent = "11 4657 4687";
      div5alabel.className = "labelsvm38";
  
      let div5b = document.createElement("div");
      div5b.className = "row2-footervm38";
  
      let div5bi = document.createElement("i");
      div5bi.className = "far fa-envelopevm38";
  
      let div5blabel = document.createElement("label");
      div5blabel.textContent = "acumar@gmail.com";
      div5blabel.className = "labelsvm38";
  
      a0.appendChild(img0);
  
      div0.appendChild(a0);
  
      div1.appendChild(div1h1);
      div1.appendChild(div1p);
  
      div2.appendChild(div2h1);
      div2.appendChild(div2p);
  
      div3.appendChild(div3h1);
      div3.appendChild(div3p);
  
      divfacebook.appendChild(facebooka);
      facebooka.appendChild(facebookimg);
  
      divtwitter.appendChild(twittera);
      twittera.appendChild(twitterimg);
  
      divyt.appendChild(yta);
      yta.appendChild(ytimg);
  
      divinsta.appendChild(instaa);
      instaa.appendChild(instaimg);
  
      div4a.appendChild(divfacebook);
      div4a.appendChild(divtwitter);
      div4a.appendChild(divyt);
      div4a.appendChild(divinsta);
  
      div4.appendChild(div4h1);
      div4.appendChild(div4a);
  
      div5a.appendChild(div5ai);
      div5a.appendChild(div5alabel);
  
      div5b.appendChild(div5bi);
      div5b.appendChild(div5blabel);
  
      div5.appendChild(div5h1);
      div5.appendChild(div5a);
      div5.appendChild(div5b);
  
      divPadre.appendChild(div0);
      divPadre.appendChild(div1);
      divPadre.appendChild(div2);
      divPadre.appendChild(div3);
      divPadre.appendChild(div4);
      divPadre.appendChild(div5);
  
      footer.appendChild(divPadre);
  
      this.container.appendChild(footer);
    }
  
    // ---------------------------------------------------- ACTIVIDADES Y CONCURSOS ------------------------
  
    dibujarActividades() {
      let titulo = document.createElement("div");
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      titulo.className = "titulovm38";
      h2.textContent = "Actividades y concursos";
      p.textContent =
        "Acá podés encontrar todas las actividades disponibles, el día y horario de cuando se realizan y como inscribirte";
      titulo.appendChild(h2);
      titulo.appendChild(p);
      this.mainDiv.appendChild(titulo);
      this.dibujarSection(
        "actividad1vm38",
        "Taller de escritura",
        "actividades.jpg",
        "Martes - 10 am",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit neque, nam magni sapiente magnam aspernatur tempora! Suscipit veniam possimus natus"
      );
  
      this.dibujarSection(
        "actividad2vm38",
        "Concurso de escritura",
        "actividades.jpg",
        "Jueves - 15 pm ",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit neque, nam magni sapiente magnam aspernatur tempora! Suscipit veniam possimus natus"
      );
  
      this.dibujarSection(
        "actividad3vm38",
        "Taller de fotografía",
        "actividades.jpg",
        "Viernes - 8 am",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit neque, nam magni sapiente magnam aspernatur tempora! Suscipit veniam possimus natus"
      );
    }
  
    dibujarSection(id, titulo, foto, horario, descripcion) {
      let section = document.createElement("section");
      section.id = id;
      section.className = "actividadvm38";
  
      let h2 = document.createElement("h2");
      h2.className = "tit-actividadvm38";
      h2.textContent = titulo;
  
      let div1 = document.createElement("div");
      div1.className = "actividad-contvm38";
  
      let img = document.createElement("img");
      img.src = this.PATH_IMG + foto;
  
      let div2 = document.createElement("div");
      div2.className = "img-actividadvm38";
  
      let div3 = document.createElement("div");
      div3.className = "texto-actividadvm38";
      let h3 = document.createElement("h3");
      h3.textContent = horario;
  
      let p = document.createElement("p");
      p.textContent = descripcion;
  
      div3.appendChild(h3);
      div3.appendChild(p);
  
      div2.appendChild(img);
  
      div1.appendChild(div2);
      div1.appendChild(div3);
  
      section.appendChild(h2);
      section.appendChild(div1);
  
      this.mainDiv.appendChild(section);
    }
  
    borrarMain() {
      let child;
  
      while ((child = this.mainDiv.firstChild)) {
        this.mainDiv.removeChild(child);
      }
    }
  
    //-----------------------------------------------------  CATALOGO   --------------------------------------------------------------
  
    //-----------BUSCAR LA DATA DEL JSON------
  
    getData() {
      fetch("datos.json")
        .then((response) => response.json())
        .then((data) => {
          this.datosLibros = data;
          console.log(this.datosLibros); // ESTO MUESTRA EL ARRAY EN CONSOLA
        });
    }
  
    buscar(queBuscar) {
      console.log(queBuscar);
  
      //console.log(dataJson.libro);
      let result = this.dibujarTarjetaLibros(
        this.datosLibros.libro.filter((ele) => {
          return ele.titulo.toLowerCase() == queBuscar.toLowerCase();
        })
      );
        console.log("termine de buscar");
      return result;
    }
  
    // -------- MOSTRAR LOS RESULTADOS
  
    dibujarTarjetaLibros(dataFiltrada) {
      console.log(dataFiltrada);
  
      dataFiltrada.forEach((element) => {
        let divL = document.createElement("div");
  
        divL.className = "tarjeta-librovm38";
  
        let h2 = document.createElement("h2");
        h2.textContent = element.titulo;
  
        let h3Au = document.createElement("h3");
        h3Au.textContent = "Autor: " + element.autor;
  
        let p = document.createElement("p");
        p.textContent = element.descripcion;
        p.className = "descripcion-librovm38";
  
        let divEA = document.createElement("div");
        divEA.className = "editorial-año-librovm38";
  
        let divE = document.createElement("div");
        divE.className = "editorial-librovm38";
  
        let h3E = document.createElement("h3");
        h3E.textContent = "Editorial: ";
  
        let pE = document.createElement("p");
        pE.textContent = element.editorial;
  
        let divA = document.createElement("div");
        divA.className = "año-librovm38";
  
        let h3A = document.createElement("h3");
        h3A.textContent = "Año de publicación: ";
  
        let pA = document.createElement("p");
        pA.textContent = element.año;
  
        let generoEtiquetas = this.createListaGenero(element.genero);
  
        let divR = document.createElement("div");
        divR.className = "rating-librovm38";
  
        let h3R = document.createElement("h3");
        h3R.textContent = "Rating: ";
  
        let pR = document.createElement("p");
        pR.textContent = element.rating;
  
        divL.appendChild(h2);
        divL.appendChild(h3Au);
  
        divL.appendChild(p);
        divL.appendChild(divEA);
  
        divEA.appendChild(divE);
        divEA.appendChild(divA);
        divEA.appendChild(divR);
  
        divE.appendChild(h3E);
        divE.appendChild(pE);
  
        divA.appendChild(h3A);
        divA.appendChild(pA);
  
        divR.appendChild(h3R);
        divR.appendChild(pR);
  
        divL.appendChild(generoEtiquetas);
  
        document.getElementById("tarjetasvm38").appendChild(divL);
      });
    }
  
    createListaGenero(generoEtiquetas) {
      let divG = document.createElement("div");
      divG.className = "genero-librovm38";
  
      let h3G = document.createElement("h3");
      h3G.textContent = "Género: ";
  
      divG.appendChild(h3G);
  
      generoEtiquetas.forEach((value, index) => {
        let pG = document.createElement("p");
        pG.textContent = value;
        divG.appendChild(pG);
      });
  
      return divG;
    }
  
    dibujarBuscador() {
      let divContenedorTL = document.createElement("div");
      divContenedorTL.className = "pepevm38";
  
      let divTL = document.createElement("div");
      divTL.id = "tarjetasvm38";
  
      let div1 = document.createElement("div");
      div1.className = "buscadorvm38";
  
      let h3 = document.createElement("h3");
      h3.textContent = "Escribí el titulo del libro que quieras encontrar:";
      h3.className = "texto-buscadorvm38";
  
      let form = document.createElement("form");
  
      form.id = "busquedavm38";
      form.method = "submit";
      form.onsubmit = function (evt) {
        evt.preventDefault();
        console.log("submit");
      };
  
      form.className = "examplevm38";
  
      let input = document.createElement("input");
      input.type = "text";
      input.placeholder = "¿Qué libro buscás?";
      input.name = "search";
      input.id = "buscadorvm38";
  
      let button = document.createElement("button");
      button.id = "botonBuscarvm38";
  
      button.onclick = function () {
        console.log("estoy aca");
        this.object.borrarTodo("tarjetasvm38");
        if (this.input.value.length > 0) {
          this.object.buscar(this.input.value);
        }
        if (this.input.value.length == 0) {
          alert("No ingresaste el titulo de el libro ¡Volvé a intentarlo!");
        }
      }.bind({ input: input, object: this });
  
      let i = document.createElement("i");
      i.className = "fa fa-search fa-lgvm38";
  
      button.appendChild(i);
  
      form.appendChild(input);
      form.appendChild(button);
  
      div1.appendChild(h3);
      div1.appendChild(form);
  
      divContenedorTL.appendChild(divTL);
  
      this.mainDiv.appendChild(div1);
      this.mainDiv.appendChild(divContenedorTL);
    }
  
    //--------------------------------------------  RADIO  --------------------------------------------------------------------------
    dibujarRadio() {
      this.idInterval = setInterval(() => {
        let img = document.getElementById("radiovm38");
        console.log("interval");
  
        this.slides.map((elem, index) => {
          if (index === this.currentSlide) {
            console.log("si");
            if (img) {
              img.src = this.PATH_IMG + [this.fotosradio[this.currentSlide]];
            }
            console.log("casi");
          }
        });
        this.currentSlide++;
  
        if (this.currentSlide > 2) {
          this.currentSlide = 0;
        }
      }, 3000);
  
      let h2 = document.createElement("h2");
      h2.className = "titulo-radiovm38";
      h2.textContent = "Radio Comunitaria";
  
      //  PRIMERA LISTA
  
      let div1 = document.createElement("div");
      div1.className = "contenedor-slidervm38";
  
      let d1ula = document.createElement("ul");
      d1ula.className = "slider-radiovm38";
  
      let ul1li1 = document.createElement("li");
      ul1li1.id = "slide1-radiovm38";
  
      let img1 = document.createElement("img");
      img1.id = "radiovm38";
      img1.src = this.PATH_IMG + "radio/s1.jpg";
  
      //  SEGUNDA LISTA
  
      let d1ulb = document.createElement("ul");
      d1ulb.className = "menu-radiovm38";
  
      let ul2li1 = document.createElement("li");
  
      let u2l1a = document.createElement("a");
      u2l1a.onclick = () => {
        this.currentSlide = 0;
        document.getElementById("radiovm38").src =
          this.PATH_IMG + [this.fotosradio[this.currentSlide]];
      };
      u2l1a.textContent = "1";
  
      let ul2li2 = document.createElement("li");
  
      let u2l2a = document.createElement("a");
      u2l2a.onclick = () => {
        this.currentSlide = 1;
        document.getElementById("radiovm38").src =
          this.PATH_IMG + [this.fotosradio[this.currentSlide]];
      };
      u2l2a.textContent = "2";
  
      let ul2li3 = document.createElement("li");
  
      let u2l3a = document.createElement("a");
      u2l3a.onclick = () => {
        this.currentSlide = 2;
        document.getElementById("radiovm38").src =
          this.PATH_IMG + [this.fotosradio[this.currentSlide]];
      };
      u2l3a.textContent = "3";
  
      //  DIV 2
  
      let div2 = document.createElement("div");
      div2.className = "info-radiovm38";
  
      let d2h2 = document.createElement("h2");
      d2h2.textContent = "¿Como participar?";
  
      let d2p = document.createElement("p");
      d2p.textContent =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  
      //  DIV 3
  
      let div3 = document.createElement("div");
      div3.className = "contenedor-linkRvm38";
  
      let div3a = document.createElement("div");
      div3a.className = "link-radiovm38";
  
      let d3aa = document.createElement("a");
      d3aa.href = "https://player.los40.com.ar/"; // ------------------- CAMBIAR LINK EN EL FUTURO
      d3aa.textContent = "Escuchanos en directo";
  
      let d3aimg = document.createElement("img");
      d3aimg.src = this.PATH_IMG + "radio/icono-play.svg";
  
      ul1li1.appendChild(img1);
  
      d1ula.appendChild(ul1li1);
  
      ul2li1.appendChild(u2l1a);
      ul2li2.appendChild(u2l2a);
      ul2li3.appendChild(u2l3a);
  
      d1ulb.appendChild(ul2li1);
      d1ulb.appendChild(ul2li2);
      d1ulb.appendChild(ul2li3);
  
      div1.appendChild(d1ula);
      div1.appendChild(d1ulb);
  
      div2.appendChild(d2h2);
      div2.appendChild(d2p);
  
      d3aa.appendChild(d3aimg);
      div3a.appendChild(d3aa);
      div3.appendChild(div3a);
  
      this.mainDiv.appendChild(h2);
      this.mainDiv.appendChild(div1);
      this.mainDiv.appendChild(div2);
      this.mainDiv.appendChild(div3);
    }
  
    // ----------- DONDE ESTAMOS ----------------
  
    dibujarDondeestamos() {
      let div1 = document.createElement("div");
      div1.className = "map1vm38";
  
      let divtitmap1 = document.createElement("div");
      divtitmap1.className = "divtitmap1vm38";
  
      let titmap1 = document.createElement("h2");
      titmap1.className = "titmap1vm38";
      titmap1.textContent = "SEDE ACTUAL - Hasta el 10/07";
  
      let mapacont1 = document.createElement("div");
      mapacont1.className = "mapacont1vm38";
  
      let mapa1 = document.createElement("iframe");
      mapa1.className = "googlemapvm38";
      mapa1.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13120.83803674582!2d-58.44679784304682!3d-34.699895254481795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9f800b1d674c6bc!2sUnidad%20Sanitaria%20Acumar!5e0!3m2!1ses-419!2sar!4v1622155414511!5m2!1ses-419!2sar";
      mapa1.allowfullscreen = "";
      mapa1.loading = "";
  
      let mapa1info = document.createElement("div");
      mapa1info.className = "mapa1infovm38";
  
      let mapa1Titulo = document.createElement("h2");
      mapa1Titulo.className = "mapa1titulovm38";
      mapa1Titulo.textContent = "Unidad Sanitaria ACUMAR";
  
      let mapa1direc = document.createElement("h3");
      mapa1direc.className = "mapa1direcvm38";
      mapa1direc.textContent = "Larrazabal 1846, Villa Fiorito";
  
      let mapa1hr = document.createElement("p");
      mapa1hr.className = "mapa1hrvm38";
      mapa1hr.textContent = "Lunes a Viernes desde las 10am a 17pm";
  
      let div2 = document.createElement("div");
      div2.className = "map1vm38";
  
      let divtitmap2 = document.createElement("div");
      divtitmap2.className = "divtitmap1vm38";
  
      let titmap2 = document.createElement("h2");
      titmap2.className = "titmap1vm38";
      titmap2.textContent = "PROXIMAMENTE - Desde el 13/07";
  
      let mapacont2 = document.createElement("div");
      mapacont2.className = "mapacont1vm38";
  
      let mapa2 = document.createElement("iframe");
      mapa2.className = "googlemapvm38";
      mapa2.src =
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6563.5517218331825!2d-58.36860876410781!3d-34.66036306664237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33353a4e1a341%3A0xd3f11e06ead0fa8!2sSede%20Club%20Atl%C3%A9tico%20Independiente!5e0!3m2!1ses-419!2sar!4v1623266486044!5m2!1ses-419!2sar";
      mapa2.width = "350";
      mapa2.height = "300";
      mapa2.allowfullscreen = "";
      mapa2.loading = "";
  
      let mapa2info = document.createElement("div");
      mapa2info.className = "mapa1infovm38";
  
      let mapa2Titulo = document.createElement("h2");
      mapa2Titulo.className = "mapa1titulovm38";
      mapa2Titulo.textContent = "Sede Club Atlético Independiente";
  
      let mapa2direc = document.createElement("h3");
      mapa2direc.className = "mapa1direcvm38";
      mapa2direc.textContent = "Av. Bartolomé Mitre 470, Avellaneda";
  
      let mapa2hr = document.createElement("p");
      mapa2hr.className = "mapa1hrvm38";
  
      div1.appendChild(divtitmap1);
      div1.appendChild(mapacont1);
      divtitmap1.appendChild(titmap1);
      mapacont1.appendChild(mapa1);
      mapacont1.appendChild(mapa1info);
      mapa1info.appendChild(mapa1Titulo);
      mapa1info.appendChild(mapa1direc);
      mapa1info.appendChild(mapa1hr);
      mapacont1.appendChild(mapa1info);
  
      div2.appendChild(divtitmap2);
      div2.appendChild(mapacont2);
      divtitmap2.appendChild(titmap2);
      mapacont2.appendChild(mapa2);
      mapacont2.appendChild(mapa2info);
      mapa2info.appendChild(mapa2Titulo);
      mapa2info.appendChild(mapa2direc);
      mapa2info.appendChild(mapa2hr);
      mapacont2.appendChild(mapa2info);
  
      this.mainDiv.appendChild(div1);
      this.mainDiv.appendChild(div2);
  
      return this.mainDiv;
    }
  
    // ---------------------------------------------------- QUIENES SOMOS -------------------------------------------------------------
  
    dibujarQuienessomos() {
      let div1 = document.createElement("div");
      div1.className = "info-quienes-somosvm38";
  
      let d1p = document.createElement("p");
      d1p.innerHTML =
        "Bibliotecas Móviles es un proyecto... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nemo animi hic deleniti quam perspiciatis quis nostrum nulla, ut iusto reiciendis ipsam voluptatibus ad aperiam dignissimos. Optio molestias molestiae impedit?";
  
      let h2 = document.createElement("h2");
      h2.className = "titulo-integrantesvm38";
      h2.textContent = "Integrantes";
  
      div1.appendChild(d1p);
  
      this.mainDiv.appendChild(div1);
      this.mainDiv.appendChild(h2);
  
      this.dibujarSectionQS(
        "quienessomos/integrante1.jpg",
        "Pepe",
        "Secretario general de ACUMAR.<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      );
  
      this.dibujarSectionQS(
        "quienessomos/integrante2.jpg",
        "Juana",
        "Coordinadora.<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      );
  
      this.dibujarSectionQS(
        "quienessomos/integrante3.jpg",
        "Lolo",
        "Secretario general de el departamento de Radio Comunitaria.<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      );
  
      this.dibujarSectionQS(
        "quienessomos/integrante4.jpg",
        "Adela",
        "Coordinadora de las tareas de limpieza del Rio.<br>También es una de las fundadoras de el proyecto de Bibliotecas Moviles."
      );
    }
  
    dibujarSectionQS(imagen, nombre, descripcion) {
      let div2 = document.createElement("div");
      div2.className = "integrantesvm38";
  
      let section = document.createElement("section");
      section.className = "integrantexvm38";
  
      let img = document.createElement("img");
      img.src = this.PATH_IMG + imagen;
  
      let d2a = document.createElement("div");
      d2a.className = "info-integrantevm38";
  
      let h3 = document.createElement("h3");
      h3.textContent = nombre;
  
      let p = document.createElement("p");
      p.innerHTML = descripcion;
  
      d2a.appendChild(h3);
      d2a.appendChild(p);
  
      section.appendChild(img);
      section.appendChild(d2a);
  
      this.mainDiv.appendChild(section);
    }
  
    // -------------------------------------------------------------------- AYUDA ---------------------------------------------------------------
  
    dibujarAyuda() {
      let div1 = document.createElement("div");
      div1.className = "preg-ayudavm38";
  
      let h2a = document.createElement("h2");
      h2a.textContent = "¿Cómo funciona bibliotecas moviles?";
  
      let pa = document.createElement("p");
      pa.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nemo animi hic deleniti quam perspiciatis quis nostrum nulla, ut iusto reiciendis ipsam voluptatibus ad aperiam dignissimos. Optio molestias molestiae impedit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nemo animi hic deleniti quam perspiciatis quis nostrum nulla, ut iusto reiciendis ipsam voluptatibus ad aperiam dignissimos. Optio molestias molestiae impedit?";
  
      let h2b = document.createElement("h2");
      h2b.textContent = "¿Qué tengo que llevar para retirar un libro?";
  
      let pb = document.createElement("p");
      pb.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nemo animi hic deleniti quam perspiciatis quis nostrum nulla, ut iusto reiciendis ipsam voluptatibus ad aperiam dignissimos. Optio molestias molestiae impedit?";
  
      let h2c = document.createElement("h2");
      h2c.textContent = "¿Es totalmente gratis?";
  
      let pc = document.createElement("p");
      pc.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nemo animi hic deleniti quam perspiciatis quis nostrum nulla, ut iusto reiciendis ipsam voluptatibus ad aperiam dignissimos. Optio molestias molestiae impedit?";
  
      let h2d = document.createElement("h2");
      h2d.textContent = "¿Cuánto tiempo me puedo quedar un libro?";
  
      let pd = document.createElement("p");
      pd.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nemo animi hic deleniti quam perspiciatis quis nostrum nulla, ut iusto reiciendis ipsam voluptatibus ad aperiam dignissimos. Optio molestias molestiae impedit?";
  
      let div2 = document.createElement("div");
      div2.className = "contacto-ayudavm38";
  
      let h3 = document.createElement("h3");
      h3.innerHTML =
        "Si te quedó alguna pregunta podes escribirnos un correo haciendo click en <a href='mailto:bibliotecasmoviles@acumar.com.ar'>Bibliotecas Moviles</a>  o envianos un whatsapp.";
  
      div1.appendChild(h2a);
      div1.appendChild(pa);
  
      div1.appendChild(h2b);
      div1.appendChild(pb);
  
      div1.appendChild(h2c);
      div1.appendChild(pc);
  
      div1.appendChild(h2d);
      div1.appendChild(pd);
  
      div2.appendChild(h3);
  
      this.mainDiv.appendChild(div1);
      this.mainDiv.appendChild(div2);
  
      return this.mainDiv;
    }


    borrarTodo(idaborrar) {
      let child;
      let div = document.getElementById(idaborrar);

      while ((child = div.firstChild)) {
        div.removeChild(child);
      }
    }



    borrarTodos() {
      let child;
  console.log("borrar todo");
      while ((child = this.container.firstChild)) {
        this.container.removeChild(child);
      }
    }
  }

  export default Equipo38;