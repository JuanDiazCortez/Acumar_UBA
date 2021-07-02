class VM37_map {
    constructor() {
      this.root = document.getElementById("root");
      this.nextEvents;
      this.descriptionCont;
      this.nextEventsPlacement;
      this.nextEventsCont;
      this.idDeTarjetaABorrar;
      this.divABorrar;
      this.myMap;
      this.markers = [];
      this.marker;
      this.id;
      this.modalInputTitle;
      this.cont = 1;
      this.nombre;
      this.ubicacion;
      this.fecha;
      this.foto;
      this.comollegar;
      this.ascendente = true;
      this.porId = true;
      this.locations;
    }
  
    dibujarMarkerAgregado(ev) {
      this.marker["feature"] = {
        type: "Feature",
        feature: {
          properties: {
            id: this.locations.length + 1,
            nombre: this.nombre,
            ubicacion: this.ubicacion,
            fecha: this.fecha,
            foto: this.foto,
            comollegar: this.comollegar,
          },
        },
        properties: {
          id: this.locations.length + 1,
          nombre: this.nombre,
          ubicacion: this.ubicacion,
          fecha: this.fecha,
          foto: this.foto,
          comollegar: this.comollegar,
        },
        geometry: {
          type: "Point",
          coordinates: ev.latlng,
        },
      };
      let provisorioLocations = {
        type: "Feature",
        properties: {
          id: this.locations.length + 1,
          nombre: this.nombre,
          ubicacion: this.ubicacion,
          fecha: this.fecha,
          foto: this.foto,
          comollegar: this.comollegar,
        },
        geometry: {
          type: "Point",
          coordinates: ev.latlng,
        },
      };
      this.locations.push(provisorioLocations);
      this.markers.push(this.marker);
  
      let myPopup = L.DomUtil.create("div", "infoWindow");
      myPopup =
        '<div class="vm37_date-card-big">' +
        '<div class="vm37_date-card">' +
        '<div class="vm37_card-cols">' +
        '<div class="vm37_right-card">' +
        '<div class="vm37_pic-card-cont" style="background-image: url(' +
        this.locations[this.locations.length - 1].properties.foto +
        ')"></div>' +
        "</div>" +
        '<div class="vm37_left-card">' +
        '<div class="vm37_align-middle">' +
        '<div class="vm37_renglon-card"><div class="vm37_icon-card-cont"><div class="vm37_icon-card vm37_libro-icon"></div></div><div class="vm37_renglon-text">' +
        this.locations[this.locations.length - 1].properties.nombre +
        "</div></div>" +
        '<div class="vm37_renglon-card"><div class="vm37_icon-card-cont"><div class="vm37_icon-card vm37_ubicacion-icon"></div></div><div class="vm37_renglon-text">' +
        this.locations[this.locations.length - 1].properties.ubicacion +
        "</div></div>" +
        '<div class="vm37_renglon-card"><div class="vm37_icon-card-cont"><div class="vm37_icon-card vm37_calendario-icon"></div></div><div class="vm37_renglon-text">' +
        this.locations[this.locations.length - 1].properties.fecha +
        "</div></div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        '<a class="vm37_como-llegar" href="' +
        this.locations[this.locations.length - 1].properties.comollegar +
        '" target="_blank"><div class="vm37_icon-card-cont"><div class="vm37_icon-card vm37_external-icon"></div></div><div class="vm37_renglon-text">Cómo llegar</div></a>' +
        "</div>" +
        "</div>";
  
      this.marker.bindPopup(myPopup);
  
      this.dibujarTarjetas(this.markers);
    }
  
    pedidoDeDatosModales(ev) {
      /* Start Pedidos modales de datos */
      let modalContBlock = document.createElement("div");
      let modalContExt = document.createElement("div");
      let modalContInt = document.createElement("div");
      this.modalInputTitle = document.createElement("div");
      let modalInput = document.createElement("input");
      let modalConfirmCont = document.createElement("div");
      let modalConfirm = document.createElement("button");

      modalContBlock.id = "vm37_modal-cont-block";
      modalContBlock.className = "vm37_modal-cont-block";
      modalContExt.className = "vm37_modal-cont-ext";
      modalContInt.className = "vm37_modal-cont-int";
      this.modalInputTitle.className = "vm37_modal-input-title";
      modalInput.className = "vm37_modal-input";
      modalConfirmCont.className = "vm37_modal-confirm-cont";
      modalConfirm.id = "vm37_modal-confirm";
      modalConfirm.className = "vm37_modal-confirm";

      this.modalInputTitle.innerHTML = "1/5. Ingrese el nombre del nuevo evento";
      modalInput.type = "text";
      modalConfirm.innerHTML = "Confirmar";

      this.root.appendChild(modalContBlock);
      modalContBlock.appendChild(modalContExt);
      modalContExt.appendChild(modalContInt);
      modalContInt.appendChild(this.modalInputTitle);
      modalContInt.appendChild(modalInput);
      modalContInt.appendChild(modalConfirmCont);
      modalConfirmCont.appendChild(modalConfirm);

      modalInput.focus();

      document.addEventListener('keypress', this.enterPresionado);

      modalConfirm.onclick = function () {
          if (modalInput.value == "") {
              modalInput.style.backgroundColor = "#ffa7a7";
              modalInput.placeholder = "Debes completar este campo";
              return false;
          }
          else {
              modalInput.style.backgroundColor = "#e2e2e2";
              modalInput.placeholder = "";
              modalInput.focus();
          }
          switch (this.cont) {
              case 1: this.modalInputTitle.innerHTML = "2/5. Ingrese la ubicación del nuevo evento";
                  this.nombre = modalInput.value;
                  modalInput.value = "";
                  this.cont++;
                  return;
              case 2: this.modalInputTitle.innerHTML = "3/5. Ingrese la fecha del nuevo evento";
                  this.ubicacion = modalInput.value;
                  modalInput.required = true;
                  modalInput.type = "datetime-local";
                  let now = new Date();
                  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
                  modalInput.value = now.toISOString().slice(0,16);
                  this.cont++;
                  return;
              case 3: this.modalInputTitle.innerHTML = "4/5. Ingrese la url de la foto del nuevo evento";
                  this.fecha = modalInput.value;
                  modalInput.required = false;
                  modalInput.type = "text";
                  modalInput.value = "";
                  this.cont++;
                  return;
              case 4: this.modalInputTitle.innerHTML = "5/5. Ingrese el link de ruta de Google para el 'cómo llegar' externo del nuevo evento";
                  this.foto = modalInput.value;
                  modalInput.value = "";
                  this.cont++;
                  return;
              case 5: this.comollegar = modalInput.value;
                  modalInput.value = "";
                  this.cont = 1;
                  document.removeEventListener('keypress', this.enterPresionado);
                  this.borrarContenedorSobreRoot(modalContBlock);
                  this.dibujarMarkerAgregado(ev);
                  return;
          }
      }.bind(this);
      /* End Pedidos modales de datos */
  }
  
    enterPresionado(e) {
      if (e.key === "Enter") {
        document.getElementById("vm37_modal-confirm").click();
      }
    }
  
    /* Dibujo div para mapa Start */
    dibujarMapa() {
      let mapCont = document.createElement("div");
      let mapPlacement = document.createElement("div");
  
      mapCont.className = "vm37_map-cont";
      mapPlacement.id = "vm37_myMap";
  
      this.root.appendChild(mapCont);
      mapCont.appendChild(mapPlacement);
    }
    /* Dibujo div para mapa End */
  
    placementMapa() {
      const tilesProvider = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
      //const tilesProvider = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
      //const tilesProvider = 'http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png';
      //const tilesProvider = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
  
      this.myMap = L.map("vm37_myMap").setView(
        [-34.608, -58.42],
        13
      ); /* El primer argumento que pide es la latitud y la longitud para ubicarse, y el segundo argumento es el seteo del zoom. Ambos default. */
  
      // Consultamos a nuestro tiles provider para que nos mande el mapa.
      L.tileLayer(tilesProvider, {
        /* L es la invocación de una biblioteca Leaflet. */ maxZoom: 18,
      }).addTo(this.myMap);
  
      // Traer el icono de ubicacion personalizado
      let iconMarker = L.icon({
        iconUrl: "img37/ubicacion-icon.png",
        iconSize: [60, 60],
        iconAnchor: [30, 40],
      });
  
      const placement = (data) => {
        // Guardo la data del fetch, es decir el json, en la variable locations
        this.locations = data;
        this.markers = [];
        this.id = 0;
  
        // Agregar geojson al mapa, para que clickeando el marker se abra el popup
        L.geoJSON(this.locations, {
          pointToLayer: (feature, latlng) => {
            this.marker = L.marker(latlng, { icon: iconMarker });
            this.id++;
            this.marker._id = this.id;
            this.markers.push(this.marker);
            return this.marker;
          },
          onEachFeature: onEachFeature,
        }).addTo(this.myMap);
        // Dibujo las tarjetas resumidas abajo
        this.dibujarTarjetas(this.markers);
      };
  
      fetch("vm37-locations.json")
        .then((response) => response.json())
        .then((data) => {
          placement(data);
        });
  
      this.myMap.on(
        "click",
        function (ev) {
          this.marker = L.marker(ev.latlng, { icon: iconMarker });
  
          this.marker.addTo(this.myMap);
  
          this.id++;
  
          this.marker._id = this.id;
  
          //let nombre = prompt("Ingrese el nombre del nuevo evento.");
          //let ubicacion = prompt("Ingrese la ubicación del nuevo evento.");
          //let fecha = prompt("Ingrese la fecha del nuevo evento.");
          //let foto = prompt("Ingrese la url de la foto del nuevo evento.");
          /*let comollegar = prompt(
              "Ingrese el link de ruta de Google para el cómo llegar externo del nuevo evento."
            );*/
          this.pedidoDeDatosModales(ev);
        }.bind(this)
      );
  
      /* Habilitación del gestureHandling Start */
      this.myMap.gestureHandling.enable();
      /* Habilitación del gestureHandling End */
  
      function onEachFeature(feature, layer) {
        layer.bindPopup(
          '<div class="vm37_date-card-big">' +
            '<div class="vm37_date-card">' +
            '<div class="vm37_card-cols">' +
            '<div class="vm37_right-card">' +
            '<div class="vm37_pic-card-cont" style="background-image: url(' +
            feature.properties.foto +
            ')"></div>' +
            "</div>" +
            '<div class="vm37_left-card">' +
            '<div class="vm37_align-middle">' +
            '<div class="vm37_renglon-card"><div class="vm37_icon-card-cont"><div class="vm37_icon-card vm37_libro-icon"></div></div><div class="vm37_renglon-text">' +
            feature.properties.nombre +
            "</div></div>" +
            '<div class="vm37_renglon-card"><div class="vm37_icon-card-cont"><div class="vm37_icon-card vm37_ubicacion-icon"></div></div><div class="vm37_renglon-text">' +
            feature.properties.ubicacion +
            "</div></div>" +
            '<div class="vm37_renglon-card"><div class="vm37_icon-card-cont"><div class="vm37_icon-card vm37_calendario-icon"></div></div><div class="vm37_renglon-text">' +
            feature.properties.fecha +
            "</div></div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            '<a class="vm37_como-llegar" href="' +
            feature.properties.comollegar +
            '" target="_blank"><div class="vm37_icon-card-cont"><div class="vm37_icon-card vm37_external-icon"></div></div><div class="vm37_renglon-text">Cómo llegar</div></a>' +
            "</div>" +
            "</div>"
        );
      }
  
      /* Controlador de Zoom Start */
      function addControlPlaceholders(parametroMapa) {
        let corners = parametroMapa._controlCorners,
          l = "leaflet-",
          container = parametroMapa._controlContainer;
  
        function createCorner(vSide, hSide) {
          let className = l + vSide + " " + l + hSide;
  
          corners[vSide + hSide] = L.DomUtil.create("div", className, container);
        }
  
        createCorner("verticalcenter", "left");
        createCorner("verticalcenter", "right");
      }
      addControlPlaceholders(this.myMap);
      /* Controlador de Zoom End */
  
      // Posición del control de zoom
      this.myMap.zoomControl.setPosition("verticalcenterright");
      /* Controlador de Zoom End */
    }
  
    //placementMapa();
  
    // Funcion para traer el valor de cada propiedad "name" de una location del json para mostrarla en el popup cuando se clickea
  
    /* Dibujo nextevents Start */
    dibujarEvents() {
      this.descriptionCont = document.createElement("div");
      let responsiveMarginsDesc1 = document.createElement("div");
      let responsiveMarginsDesc2 = document.createElement("div");
      let descriptionBox = document.createElement("div");
      let descriptionIn = document.createElement("div");
      let mainTitle = document.createElement("h1");
      let h3 = document.createElement("h3");
      this.nextEventsCont = document.createElement("div");
      let encabezadoTarjetas = document.createElement("div");
      let colLeftEncabezadoTarjetas = document.createElement("div");
      let colRightEncabezadoTarjetas = document.createElement("div");
      let h4 = document.createElement("h4");
      let h6 = document.createElement("h6");
      let textContOrdenarPor = document.createElement("div");
      let textOrdenarPor = document.createElement("div");
      let buttonsOrdenar = document.createElement("div");
      let ordenarPorFecha = document.createElement("a");
      let ordenarPorId = document.createElement("a");
      let orderCont = document.createElement("div");
      let orderCell = document.createElement("div");
      let ordenarAscendenteCont = document.createElement("div");
      let ordenarDescendenteCont = document.createElement("div");
      let ordenarAscendente = document.createElement("a");
      ordenarAscendente.style.backgroundColor = "#e2e2e2";
      ordenarAscendente.onclick = function () {
        this.ascendente = true;
        ordenarAscendente.style.backgroundColor = "#e2e2e2";
        ordenarDescendente.style.backgroundColor = "";
        if (this.porId == true) {
          this.ordenar(this.porID_Ascendente);
        }
        if (this.porId == false) {
          this.ordenar(this.porFecha_Ascendente);
        }
      }.bind(this);
      let ordenarDescendente = document.createElement("a");
      ordenarDescendente.onclick = function () {
        this.ascendente = false;
        ordenarAscendente.style.backgroundColor = "";
        ordenarDescendente.style.backgroundColor = "#e2e2e2";
        if (this.porId == true) {
          this.ordenar(this.porID_Descendente);
        }
        if (this.porId == false) {
          this.ordenar(this.porFecha_Descendente);
        }
      }.bind(this);
      this.nextEventsPlacement = document.createElement("div");
  
      this.descriptionCont.className = "vm37_description-cont";
      descriptionBox.className = "vm37_description-box";
      descriptionIn.className = "vm37_description-in";
      responsiveMarginsDesc1.className = "vm37_responsive-margins";
      responsiveMarginsDesc2.className = "vm37_responsive-margins";
      this.nextEventsCont.className = "vm37_next-events-cont";
      h4.className = "vm37_next-events";
      this.nextEventsPlacement.id = "vm37_next-events-placement";
      mainTitle.innerHTML = "Mapa interactivo";
      h3.innerHTML =
        "Buscá en el mapa tu ubicación más cercana y hacé clic sobre la que desees para obtener información.<br />Si deseás agregar un evento, hacé clic en alguna parte del mapa.";
      encabezadoTarjetas.className = "vm37_encabezado-tarjetas";
      colLeftEncabezadoTarjetas.className = "vm37_col-left-encabezado-tarjetas";
      colRightEncabezadoTarjetas.className = "vm37_col-right-encabezado-tarjetas";
      textContOrdenarPor.className = "vm37_text-cont-ordenarPor";
      textOrdenarPor.className = "vm37_text-ordenarPor";
      buttonsOrdenar.className = "vm37_buttons-ordenar";
      orderCont.className = "vm37_order-cont";
      orderCell.className = "vm37_order-cell";
      ordenarAscendenteCont.className = "vm37_ordenar-ascendente-cont";
      ordenarDescendenteCont.className = "vm37_ordenar-descendente-cont";
      ordenarAscendente.className = "vm37_ordenar-ascendente";
      ordenarDescendente.className = "vm37_ordenar-descendente";
      ordenarAscendente.style.backgroundImage = "url('img37/arrow-up.svg')";
      ordenarDescendente.style.backgroundImage = "url('img37/arrow-down.svg')";
      h4.innerHTML = "Resumen de los eventos del mapa...";
      h4.style.margin = 0;
      h6.innerHTML =
        "Para eliminarlos, haga clic en cada cruz. (Se eliminará también el marcador en el mapa).";
      h6.style.margin = 0;
      textOrdenarPor.innerHTML = "Ordenar por:";
      ordenarPorFecha.innerHTML = "Fecha";
      ordenarPorId.innerHTML = "Creación";
      ordenarPorFecha.onclick = function () {
        this.porId = false;
        if (this.ascendente == true) {
          this.ordenar(this.porFecha_Ascendente);
        }
        if (this.ascendente == false) {
          this.ordenar(this.porFecha_Descendente);
        }
      }.bind(this);
      ordenarPorId.onclick = function () {
        this.porId = true;
        if (this.ascendente == true) {
          this.ordenar(this.porID_Ascendente);
        }
        if (this.ascendente == false) {
          this.ordenar(this.porID_Descendente);
        }
      }.bind(this);
      root.appendChild(this.descriptionCont);
      this.descriptionCont.appendChild(responsiveMarginsDesc1);
      responsiveMarginsDesc1.appendChild(descriptionBox);
      descriptionBox.appendChild(descriptionIn);
      descriptionIn.appendChild(mainTitle);
      descriptionIn.appendChild(h3);
      root.appendChild(this.nextEventsCont);
      this.nextEventsCont.appendChild(responsiveMarginsDesc2);
      responsiveMarginsDesc2.appendChild(encabezadoTarjetas);
      encabezadoTarjetas.appendChild(colLeftEncabezadoTarjetas);
      colLeftEncabezadoTarjetas.appendChild(h4);
      colLeftEncabezadoTarjetas.appendChild(h6);
      encabezadoTarjetas.appendChild(colRightEncabezadoTarjetas);
      colRightEncabezadoTarjetas.appendChild(textContOrdenarPor);
      textContOrdenarPor.appendChild(textOrdenarPor);
      colRightEncabezadoTarjetas.appendChild(orderCont);
      orderCont.appendChild(orderCell);
      orderCell.appendChild(ordenarAscendenteCont);
      orderCell.appendChild(ordenarDescendenteCont);
      ordenarAscendenteCont.appendChild(ordenarAscendente);
      ordenarDescendenteCont.appendChild(ordenarDescendente);
      colRightEncabezadoTarjetas.appendChild(buttonsOrdenar);
      buttonsOrdenar.appendChild(ordenarPorFecha);
      buttonsOrdenar.appendChild(ordenarPorId);
      responsiveMarginsDesc2.appendChild(this.nextEventsPlacement);
    }
  
    dibujarTarjetas(vector) {
      this.borrarTodo(this.nextEventsPlacement);
  
      vector.forEach((elemento, indice) => {
        this.nextEvents = document.getElementById("vm37_next-events-placement");
        let putCard = document.createElement("div");
        let dateCard = document.createElement("div");
        let dateCardRemove = document.createElement("a");
        let dateCardRemoveImg = document.createElement("div");
        let cardCols = document.createElement("div");
        let rightCard = document.createElement("div");
        let leftCard = document.createElement("div");
        let comoIrLocacion = document.createElement("a");
        let alignMiddle = document.createElement("div");
        let renglonCard1 = document.createElement("div");
        let renglonCard2 = document.createElement("div");
        let renglonCard3 = document.createElement("div");
        let iconCardCont1 = document.createElement("div");
        let iconCardCont2 = document.createElement("div");
        let iconCardCont3 = document.createElement("div");
        let iconCardCont4 = document.createElement("div");
        let iconLibro = document.createElement("div");
        let iconUbicacion = document.createElement("div");
        let iconCalendario = document.createElement("div");
        let iconExternal = document.createElement("div");
        let renglonText1 = document.createElement("div");
        let renglonText2 = document.createElement("div");
        let renglonText3 = document.createElement("div");
        let nombreLocacion = document.createElement("div");
        let ubicacionLocacion = document.createElement("div");
        let fechaLocacion = document.createElement("div");
        let fotoLocacion = document.createElement("div");
  
        putCard.className = "vm37_date-card-little";
        putCard.id = "vm37_codigoDeTarjeta" + elemento.feature.properties.id;
        dateCard.className = "vm37_date-card";
        dateCardRemove.className = "vm37_date-card-remove-cont";
        dateCardRemove.id =
          "vm37_codigoDeRemovedor" + elemento.feature.properties.id;
        dateCardRemove.onclick = function (e) {
          this.removedorClickeado(dateCardRemove.id);
        }.bind(this);
        dateCardRemoveImg.className = "vm37_date-card-remove-img";
        dateCardRemoveImg.style.backgroundImage = "url('img37/delete.svg')";
        cardCols.className = "vm37_card-cols";
        rightCard.className = "vm37_right-card";
        leftCard.className = "vm37_left-card";
        comoIrLocacion.className = "vm37_como-llegar";
        iconExternal.className = "vm37_icon-card vm37_external-icon";
        alignMiddle.className = "vm37_align-middle";
        renglonCard1.className = "vm37_renglon-card";
        renglonCard2.className = "vm37_renglon-card";
        renglonCard3.className = "vm37_renglon-card";
        iconCardCont1.className = "vm37_icon-card-cont";
        iconCardCont2.className = "vm37_icon-card-cont";
        iconCardCont3.className = "vm37_icon-card-cont";
        iconCardCont4.className = "vm37_icon-card-cont";
        iconLibro.className = "vm37_icon-card vm37_libro-icon";
        iconUbicacion.className = "vm37_icon-card vm37_ubicacion-icon";
        iconCalendario.className = "vm37_icon-card vm37_calendario-icon";
        renglonText1.className = "vm37_renglon-text";
        renglonText2.className = "vm37_renglon-text";
        renglonText3.className = "vm37_renglon-text";
        nombreLocacion.className = "vm37_renglon-text";
        ubicacionLocacion.className = "vm37_renglon-text";
        fechaLocacion.className = "vm37_renglon-text";
        fotoLocacion.className = "vm37_pic-card-cont";
  
        nombreLocacion.innerHTML = elemento.feature.properties.nombre;
        ubicacionLocacion.innerHTML = elemento.feature.properties.ubicacion;
        fechaLocacion.innerHTML = elemento.feature.properties.fecha;
        fotoLocacion.style.backgroundImage =
          "url(" + elemento.feature.properties.foto + ")";
        comoIrLocacion.href = elemento.feature.properties.comollegar;
        comoIrLocacion.setAttribute("target", "_blank");
  
        putCard.appendChild(dateCard);
        dateCard.appendChild(cardCols);
        dateCard.appendChild(comoIrLocacion);
        dateCard.appendChild(dateCardRemove);
        dateCardRemove.appendChild(dateCardRemoveImg);
        comoIrLocacion.appendChild(iconCardCont4);
        iconCardCont4.appendChild(iconExternal);
        comoIrLocacion.innerHTML += "Cómo llegar";
        cardCols.appendChild(rightCard);
        cardCols.appendChild(leftCard);
        rightCard.appendChild(fotoLocacion);
        leftCard.appendChild(alignMiddle);
  
        alignMiddle.appendChild(renglonCard1);
        renglonCard1.appendChild(iconCardCont1);
        iconCardCont1.appendChild(iconLibro);
        renglonCard1.appendChild(renglonText1);
        renglonText1.appendChild(nombreLocacion);
  
        alignMiddle.appendChild(renglonCard2);
        renglonCard2.appendChild(iconCardCont2);
        iconCardCont2.appendChild(iconUbicacion);
        renglonCard2.appendChild(renglonText2);
        renglonText2.appendChild(ubicacionLocacion);
  
        alignMiddle.appendChild(renglonCard3);
        renglonCard3.appendChild(iconCardCont3);
        iconCardCont3.appendChild(iconCalendario);
        renglonCard3.appendChild(renglonText3);
        renglonText3.appendChild(fechaLocacion);
  
        this.nextEvents.appendChild(putCard);
      });
    }
  
    borrarMarker(recibido) {
      this.myMap.removeLayer(this.marker);
    }
  
    clearMarker(id) {
      let new_markers = [];
      this.markers.forEach((marker) => {
        if (marker._id == id) {
          this.myMap.removeLayer(marker);
        } else {
          new_markers.push(marker);
        }
      });
      this.markers = new_markers;
    }
  
    borrarTodo(valor) {
      let child;
  
      while ((child = valor.firstChild)) {
        if (child.hasChildNodes()) {
          this.borrarHijos(child);
        } else {
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
          this.borrarHijos(child);
        } else {
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
          this.borrarHijos(child);
        } else {
          valor.removeChild(child);
          document.getElementById("root").removeChild(valor);
        }
      }
    }
  
    removedorClickeado(id) {
      let idDeTarjetaABorrar = id.substring(22);
      let divABorrar = document.getElementById(
        "vm37_codigoDeTarjeta" + idDeTarjetaABorrar
      );
      this.clearMarker(idDeTarjetaABorrar);
      this.borrarEspecificado(divABorrar);
    }
  
    porID_Ascendente(a, b) {
      return a.feature.properties.id - b.feature.properties.id;
    }
  
    porID_Descendente(a, b) {
      return b.feature.properties.id - a.feature.properties.id;
    }
  
    porFecha_Ascendente(a, b) {
      let _a = a.feature.properties.fecha;
      let _b = b.feature.properties.fecha;
      let d1 = new Date(_a);
      let d2 = new Date(_b);
  
      if (d1.getTime() == d2.getTime()) {
        return 0;
      }
  
      if (d1.getTime() > d2.getTime()) {
        return 1;
      }
      return -1;
    }
  
    porFecha_Descendente(a, b) {
      let _a = a.feature.properties.fecha;
      let _b = b.feature.properties.fecha;
      let d1 = new Date(_a);
      let d2 = new Date(_b);
  
      if (d1.getTime() == d2.getTime()) {
        return 0;
      }
  
      if (d1.getTime() > d2.getTime()) {
        return -1;
      }
      return 1;
    }
  
    ordenar(fOrdenar) {
      this.borrarTodo(this.nextEventsPlacement);
      let resu = this.markers.sort(fOrdenar);
      this.dibujarTarjetas(resu);
    }
  }
export default  VM37_map;