//1) AGREGAR LAS SIGUIENTES HORAS AL ARREGLO DE TRAUMATOLOGÍA

var traumatologia_base = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    nombre: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    nombre: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    nombre: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    nombre: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    nombre: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    nombre: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    nombre: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

//PACIENTES POR INGRESAR A TRAUMATOLOGÍA
var traumatologia_nuevos = [
  {
    hora: "09:00",
    especialista: "RENÉ POBLETE",
    nombre: "ANA GELLONA",
    rut: "13123329-7",
    prevision: "ISAPRE",
  },
  {
    hora: "09:30",
    especialista: "MARIA SOLAR",
    nombre: "RAMIRO ANDRADE",
    rut: "12221451-K",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL LOYOLA",
    nombre: "CARMEN ISLA",
    rut: "10112348-3",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "ANTONIO LARENAS",
    nombre: "PABLO LOAYZA",
    rut: "13453234-1",
    prevision: "ISAPRE",
  },
  {
    hora: "12:00",
    especialista: "MATIAS ARAVENA",
    nombre: "SUSANA POBLETE",
    rut: "14345656-6",
    prevision: "FONASA",
  },
];

// MOSTRAR LISTA DE PACIENTES
var texto_traumatologia =
  "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";

for (var i = 0; i < traumatologia_base.length; i++) {
  texto_traumatologia += `<tr>
       <td>${traumatologia_base[i].hora}</td>
       <td>${traumatologia_base[i].especialista}</td>
       <td>${traumatologia_base[i].nombre}</td>
       <td>${traumatologia_base[i].rut}</td>
       <td>${traumatologia_base[i].prevision}</td>
       </tr>`;
}
document.getElementById("Traumatologia").innerHTML = texto_traumatologia;

//AGREGAR LISTA DE NUEVOS PACIENTES

var insertar = function () {
  for (var i = 0; i < traumatologia_nuevos.length; i++) {
    texto_traumatologia += `<tr>
            <td>${traumatologia_nuevos[i].hora}</td>
            <td>${traumatologia_nuevos[i].especialista}</td>
            <td>${traumatologia_nuevos[i].nombre}</td>
            <td>${traumatologia_nuevos[i].rut}</td>
            <td>${traumatologia_nuevos[i].prevision}</td>
            </tr>`;
  }

  let agregar = (document.getElementById("Traumatologia").innerHTML =
    texto_traumatologia);

  traumatologia_base.push(agregar);
};
insertar();

//2) ELIMINAR EL PRIMER Y EL ÚLTIMO ELEMENTO DEL ARREGLO DE RADIOLOGÍA

var radiologia_base = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    nombre: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    nombre: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    nombre: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    nombre: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    nombre: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

var primero_paciente = radiologia_base.shift();
var ultimo_paciente = radiologia_base.pop();

var texto_radiologia =
  "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";

for (var i = 0; i < radiologia_base.length; i++) {
  texto_radiologia += `<tr>
            <td>${radiologia_base[i].hora}</td>
            <td>${radiologia_base[i].especialista}</td>
            <td>${radiologia_base[i].nombre}</td>
            <td>${radiologia_base[i].rut}</td>
            <td>${radiologia_base[i].prevision}</td>
            </tr>`;
}

document.getElementById("Radiologia").innerHTML = texto_radiologia;

//3) IMPRIMIR EN LA HTML MEDIANTE DOCUMENT.WRITE LAS CONSULTAS DE DENTAL
//3.1) SEPARANDO POR UN GUIÓN CADA DATO DESPLEGADO
//3.2) CADA FILA DE INFORMACIÓN DEBE ESTAR SEPARADA POR UN PÁRRAFO

var dental_base = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    nombre: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    nombre: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    nombre: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    nombre: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    nombre: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    nombre: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

var texto_dental = "<p><strong></p>";

for (var i = 0; i < dental_base.length; i++) {
  texto_dental += `
        <p>${dental_base[i].hora} - ${dental_base[i].especialista} - ${dental_base[i].nombre} - ${dental_base[i].rut} - ${dental_base[i].prevision}</p>`;
}

document.getElementById("Dental").innerHTML = texto_dental;

//4) IMPRIMIR UN LISTADO TOTAL DE TODOS LOS PACIENTES QUE SE ATENDIERON EN EL CENTRO MÉDICO
//4.1) pARA ESTO, DEBERÁ UNIR TODOS LOS NOMBRES DE PACIENTES E IMPRIMIR UNO POR CADA PÁRRAFO

var Texto_atenciones =
  "<tr><strong><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></strong></tr>";

var traumatologia = traumatologia_base.concat(traumatologia_nuevos);
var radio_dental = radiologia_base.concat(dental_base);
var atenciones = traumatologia.concat(radio_dental);

for (var i = 0; i < atenciones.length; i++) {
  Texto_atenciones += `<tr>
       <td>${atenciones[i].hora}</td>
       <td>${atenciones[i].especialista}</td>
       <td>${atenciones[i].nombre}</td>
       <td>${atenciones[i].rut}</td>
       <td>${atenciones[i].prevision}</td>
       </tr>`;
}
document.getElementById("Atencion_total").innerHTML = Texto_atenciones;

//5) FILTRAR AQUELLOS PACIENTES QUE INDICAN SER ISAPRE EN LA LISTA DE CONSULTAS MÉDICA DENTAL

var pacientes_isapre = dental_base.filter(
  (dental) => dental.prevision === "ISAPRE"
);

console.log(pacientes_isapre);

//6) FILTRAR AQUELLOS PACIENTES QUE INDICAN SER FONASA EN LA LISTA DE CONSULTAS MÉDICAS DE TRAUMATOLOGÍA

var pacientes_fonasa = traumatologia_base.filter(function (paciente) {
  return paciente.nombre && paciente.prevision === "FONASA";
});

console.log(pacientes_fonasa);

///////////////
///probando
