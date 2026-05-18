

const NOMBRE = document.getElementById("name");
const APELLIDO = document.getElementById("lastName");
const INTERNET = document.getElementById("internet");
const LUZ = document.getElementById("luz");
const AGUA = document.getElementById("agua");
const GAS = document.getElementById("gas");
const ALQUILER = document.getElementById("alquiler");
const TOTAL = document.getElementById("totalmes");


function calcular(){
     let internet = Number(INTERNET.value);
      let luz = Number(LUZ.value);
       let agua = Number(AGUA.value);
        let gas = Number(GAS.value);
         let alquiler = Number(ALQUILER.value);
         let totaltodo = internet+luz+agua+gas+alquiler;
         TOTAL.innerHTML = ` ${NOMBRE.value} ${APELLIDO.value}: tu gasto fijo total es ${totaltodo} euros. `;
        

}