/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let randomNumber = Math.random() * 10;
  document.querySelector("#clic").addEventListener("click", () => {
    document.querySelector("#laExcusa").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let pronombre = ["Un", "El"];
  let sujeto = [
    "gato",
    "perro",
    "tigre",
    "conejo",
    "pajaro",
    "raton",
    "mapache"
  ];
  let adjetivo = ["salvaje", "peludo", "loco", "asesino", "rabioso"];
  let accion = [
    "me ha mordido",
    "me ha perseguido",
    "me ha arañado",
    "me ha aplastado",
    "me ha atacado"
  ];
  let donde = [
    "por toda la playa",
    "en un ascensor",
    "estando en la oficina",
    "en la cocina",
    "en una discoteca",
    "en el hospital"
  ];
  let pronombreIndex = Math.floor(Math.random() * pronombre.length);
  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let adjetivoIndex = Math.floor(Math.random() * adjetivo.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let dondeIndex = Math.floor(Math.random() * donde.length);

  return (
    pronombre[pronombreIndex] +
    " " +
    sujeto[sujetoIndex] +
    " " +
    adjetivo[adjetivoIndex] +
    " " +
    accion[accionIndex] +
    " " +
    donde[dondeIndex] +
    " "
  );
};
