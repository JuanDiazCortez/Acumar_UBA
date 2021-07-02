import Equipo36 from "./equipo36.js";
import VM37_map from "./Equipo37_map.js";
import VM37_contenidos from "./Equipo37_contenidos.js";
import Equipo38 from "./Equipo38.js";

var eq = {}; //----> variable de la instanciacion del objeto <----//

class VM37_main {
  constructor() {
    this.root = document.getElementById("root");
    this.mapa = new VM37_map();
    this.contenidos = new VM37_contenidos();
  }

  dibujarHeader() {
    let header = document.createElement("div");
    let responsiveMargins = document.createElement("div");
    let menuColumns = document.createElement("div");
    let logoCont = document.createElement("div");
    let logoLink = document.createElement("a");
    let logo = document.createElement("div");
    let menu = document.createElement("div");
    let menuNav = document.createElement("nav");
    let menuList = document.createElement("ul");
    let menuGroup1 = document.createElement("li");
    let menuGroup2 = document.createElement("li");
    let menuGroup3 = document.createElement("li");
    let menuLink1 = document.createElement("a");
    let menuLink2 = document.createElement("a");
    let menuLink3 = document.createElement("a");
    let mobileButton = document.createElement("button");
    let menuHamburger = document.createElement("span");
    let menuLabel = document.createElement("span");
    let menuReader = document.createElement("span");

    header.className = "vm37_header";
    header.id = "vm37_header";
    responsiveMargins.className = "vm37_responsive-margins";
    menuColumns.className = "vm37_menu-columns";
    logoCont.className = "vm37_logo-cont";
    logoLink.className = "vm37_logo-link";
    logoLink.onclick = function () {
      this.dibujarTotalidadMapa();
    }.bind(this);
    logo.className = "vm37_logo";
    logo.style.backgroundImage = "url('img37/vm37_logo-bibliotecas.svg')";
    menu.className = "vm37_menu";
    menuNav.className = "vm37_menu__nav";
    menuList.className = "vm37_menu__list vm37_r-list";
    menuGroup1.className = "vm37_menu__group";
    menuGroup2.className = "vm37_menu__group";
    menuGroup3.className = "vm37_menu__group";
    menuLink1.className = "vm37_menu__link vm37_r-link";
    menuLink1.onclick = function () {
      this.dibujarTotalidadMapa();
    }.bind(this);
    menuLink2.className = "vm37_menu__link vm37_r-link";
    menuLink2.id = "vm37_contenidos";
    menuLink2.onclick = function () {
      this.dibujarTotalidadContenidos();
    }.bind(this);
    menuLink3.className = "vm37_menu__link vm37_r-link";
    mobileButton.className = "vm37_menu__toggle vm37_r-button";
    menuHamburger.className = "vm37_menu__hamburger vm37_m-hamburger";
    menuLabel.className = "vm37_m-hamburger__label";
    menuReader.className = "vm37_menu__screen-reader vm37_screen-reader";

    menuLink1.innerHTML = "Mapa de recorrido";
    menuLink2.innerHTML = "Contenidos";
    menuLink3.innerHTML = "Contacto";
    menuLink3.onclick = function () {
        this.dibujarTotalidadContacto();
    }.bind(this);
    menuReader.innerHTML = "Abrir menú";
    mobileButton.type = "button";

    this.root.appendChild(header);
    header.appendChild(responsiveMargins);
    responsiveMargins.appendChild(menuColumns);
    menuColumns.appendChild(logoCont);
    logoCont.appendChild(logoLink);
    logoLink.appendChild(logo);
    menuColumns.appendChild(menu);
    menu.appendChild(menuNav);
    menuNav.appendChild(menuList);
    menuList.appendChild(menuGroup1);
    menuGroup1.appendChild(menuLink1);
    menuList.appendChild(menuGroup2);
    menuGroup2.appendChild(menuLink2);
    menuList.appendChild(menuGroup3);
    menuGroup3.appendChild(menuLink3);
    menu.appendChild(mobileButton);
    mobileButton.appendChild(menuHamburger);
    menuHamburger.appendChild(menuLabel);
    menuLabel.appendChild(menuReader);

    (function () {
      "use strict";

      class Menu {
        constructor(settings) {
          this.menuNode = settings.menuNode;
          this.state = false;
          this.menuStateTextNode =
            settings.menuStateTextNode ||
            this.menuNode.querySelector(".vm37_menu__screen-reader");
          this.menuOpenedText = settings.menuOpenedText || "Open menu";
          this.menuClosedText = settings.menuClosedText || "Close menu";
        }

        changeState(state) {
          return (this.state = !state);
        }

        changeStateText(state, node) {
          let text = state !== true ? this.menuOpenedText : this.menuClosedText;

          node.textContent = text;
          return text;
        }

        toggleMenuState(className) {
          let state;

          if (typeof className !== "string" || className.length === 0) {
            return console.log(
              "you did not give the class for the toggleState function"
            );
          }

          state = this.changeState(this.state);

          this.changeStateText(state, this.menuStateTextNode);
          this.menuNode.classList.toggle(className);

          return state;
        }
      }

      const jsMenuNode = document.querySelector(".vm37_menu");
      const demoMenu = new Menu({
        menuNode: jsMenuNode,
      });

      function callMenuToggle(event) {
        demoMenu.toggleMenuState("vm37_menu_activated");
      }

      jsMenuNode
        .querySelector(".vm37_menu__toggle")
        .addEventListener("click", callMenuToggle);
    })();
  }

  dibujarFooter() {
    let footer = document.createElement("div");
    footer.className = "vm37_footer";

    let responsiveMargins = document.createElement("div");
    responsiveMargins.className = "vm37_responsive-margins";

    let divInfo = document.createElement("div");
    divInfo.className = "vm37_footer-info";
    let img = document.createElement("img");
    img.src = "img37/vm37_logoacumar2.png";
    let p = document.createElement("p");
    p.innerHTML = "Autoridad de Cuenca Matanza Riachuelo";
    let disclaimerCont = document.createElement("div");
    let disclaimerText = document.createElement("div");
    disclaimerText.innerHTML =
      "Los contenidos publicados en estas páginas han sido tomados por alumnos de una materia de la Universidad de Buenos Aires para la realización de un trabajo práctico. Los textos, logotipos, fotografías, tipografías, etc., pueden no ser de su autoría y sólo son utilizados a los fines prácticos del ejercicio.";

    let divRedes = document.createElement("div");
    divRedes.className = "vm37_footer-redes";
    disclaimerCont.className = "vm37_disclaimer-cont";
    disclaimerText.className = "vm37_disclaimer-text";

    let divInstagram = document.createElement("div");
    divInstagram.className = "vm37_footer-red";
    let a_inst = document.createElement("a");
    a_inst.href = "https://www.instagram.com/acumar.riachuelo/";
    a_inst.target = "_blank";
    let i_inst = document.createElement("i");
    i_inst.className = "fab fa-instagram";

    let divFacebook = document.createElement("div");
    divFacebook.className = "vm37_footer-red";
    let a_face = document.createElement("a");
    a_face.href = "https://www.facebook.com/acumar.riachuelo/";
    a_face.target = "_blank";
    let i_face = document.createElement("i");
    i_face.className = "fab fa-facebook-f";

    let divYoutube = document.createElement("div");
    divYoutube.className = "vm37_footer-red";
    let a_you = document.createElement("a");
    a_you.href = "https://www.youtube.com/c/AcumarRiachuelo";
    a_you.target = "_blank";
    let i_you = document.createElement("i");
    i_you.className = "fab fa-youtube";

    this.root.appendChild(footer);

    footer.appendChild(responsiveMargins);

    responsiveMargins.appendChild(divInfo);
    responsiveMargins.appendChild(divRedes);

    divInfo.appendChild(img);
    divInfo.appendChild(p);

    divRedes.appendChild(divInstagram);
    divRedes.appendChild(divFacebook);
    divRedes.appendChild(divYoutube);

    divInstagram.appendChild(a_inst);

    divFacebook.appendChild(a_face);

    divYoutube.appendChild(a_you);

    a_inst.appendChild(i_inst);
    a_face.appendChild(i_face);
    a_you.appendChild(i_you);

    divInfo.appendChild(disclaimerCont);
    disclaimerCont.appendChild(disclaimerText);

    document.getElementById("root").appendChild(footer);
  }

  dibujarContacto() {
    let contenedorContact = document.createElement("div");
    let responsiveMarginsContact = document.createElement("div");
    let mainContact = document.createElement("div");
    let encabezadoContact = document.createElement("h1");
    let contenidoContact = document.createElement("div");
    let imgContactMainDiv = document.createElement("div");
    let imgContactA = document.createElement("a");
    let imgContactDiv = document.createElement("div");
    let imgContact = document.createElement("img");
    let mailContact = document.createElement("h2");

    responsiveMarginsContact.className = "vm37_responsive-margins";
    mainContact.className = "vm37_main-contact";
    encabezadoContact.className = "vm37_encabezado-contact";
    imgContactMainDiv.className = "vm37_img-contact-main-div";
    imgContactA.className = "vm37_img-contact-a";
    imgContactA.href = "mailto:example@example.com";
    imgContactDiv.className = "vm37_img-contact-div";
    imgContact.className = "vm37_img-contact";
    imgContact.src = "img37/vm37_contact.svg";
    mailContact.className = "vm37_mail-contact";

    encabezadoContact.innerHTML = "Hablemos";
    mailContact.innerHTML = "example@example.com";

    this.root.appendChild(contenedorContact);
    contenedorContact.appendChild(responsiveMarginsContact);
    responsiveMarginsContact.appendChild(mainContact)
    mainContact.appendChild(encabezadoContact);
    mainContact.appendChild(contenidoContact);
    contenidoContact.appendChild(imgContactMainDiv);
    imgContactMainDiv.appendChild(imgContactA);
    imgContactA.appendChild(imgContact);
    contenidoContact.appendChild(mailContact);
}

  dibujarTotalidadMapa() {
    this.borrarTodo(this.root);
    this.dibujarHeader();

    this.mapa.dibujarMapa();
    this.mapa.placementMapa();
    this.mapa.dibujarEvents();

    this.dibujarFooter();
  }

  dibujarTotalidadContenidos() {
    this.borrarTodo(this.root);
    this.dibujarHeader();

    this.contenidos.dibujarMainContenidos();

    this.dibujarFooter();
  }

  dibujarTotalidadContacto() {
    this.borrarTodo(this.root);
    this.dibujarHeader();
    this.dibujarContacto();
    this.dibujarFooter();
}

  borrarTodo(valor) {
    let child;

    while ((child = valor.firstChild)) {
      if (child.hasChildNodes()) {
        // si tiene
        this.borrarHijos(child);
      } else {
        // no tiene
        valor.removeChild(child);
      }
    }
  }

  borrarHijos(nodes) {
    let child;

    while ((child = nodes.firstChild)) {
      nodes.removeChild(child);
    }
  }

  borrarEspecificado(valor) {
    let child;

    while ((child = valor.firstChild)) {
      if (child.hasChildNodes()) {
        // si tiene
        borrarHijos(child);
      } else {
        // no tiene
        valor.removeChild(child);
        document
          .getElementById("vm37_next-events-placement")
          .removeChild(valor);
      }
    }
  }

  borrarContenedorSobreRoot(valor) {
    let child;

    while ((child = valor.firstChild)) {
      if (child.hasChildNodes()) {
        // si tiene
        borrarHijos(child);
      } else {
        // no tiene
        // if (child.id != "dibCaf") {
        //valor.removeChild(child);
        valor.removeChild(child);
        document.getElementById("root").removeChild(valor);
        //  }
      }
    }
  }
}

var b = document.getElementById("blibio-vm38");
var b2 = document.getElementById("merlo-vm36");
var b3 = document.getElementById("mapa-vm37");

b.onclick = function () {
  eq = new Equipo38();
  console.log(eq);
  eq.borrarTodos();
  eq.dibujarTodo();
};

b2.onclick = function () {
  eq = new Equipo36();
  eq.borrarTodo("root");
  eq.ejecutar();
  console.log(eq);
};

b3.onclick = function () {
  eq = new VM37_main();
  eq.borrarTodo("root");
  eq.dibujarTotalidadMapa();
  console.log(eq);
};
