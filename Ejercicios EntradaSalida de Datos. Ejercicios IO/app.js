//aritmetica
const NUMUNO = document.getElementById("numerouno");
const NUMDOS = document.getElementById("numerodos");
const TOTALUNO = document.getElementById("suma");
// promedio
const NUMEUNO = document.getElementById("numeuno");
const NUMEDOS = document.getElementById("numedos");
const NUMETRES = document.getElementById("numetres");
const TOTALDOS = document.getElementById("resultado");
//multiplicacion
const NUMERO1 = document.getElementById("number1");
const TOTALTRES = document.getElementById("multipli");
//pintura
const ALTO = document.getElementById("number1.1");
const ANCHO = document.getElementById("number1.2");
const COBERTURA = document.getElementById("number1.3");
const RESUPINTURA = document.getElementById("respintura");

function resultado(){
    let numuno = parseInt(NUMUNO.value);
    let numdos = parseInt(NUMDOS.value);
    let suma = numuno + numdos; 
     let resta = numuno - numdos;
     let mul = numuno * numdos;
     let div = numuno / numdos;
    TOTALUNO.innerHTML = ` la suma entre ${numuno} + ${numdos} es ${suma} <br>
    la resta entre ${numuno} + ${numdos} es ${resta} <br> la multiplicacion entre ${numuno} + ${numdos} es  ${mul}
    <br> la division entre ${numuno} + ${numdos} es ${div}
    `;
   

}
function promedio(){
    let numerosuno = parseFloat(NUMEUNO.value);
    let numerosdos = parseFloat(NUMEDOS.value);
    let numerostres = parseFloat(NUMETRES.value);
    let totales = (numerosuno + numerosdos + numerostres)/3;
    TOTALDOS.innerHTML =  `el promedio es ${totales} `;
    
}
function multiplicacion(){
   let numero1 = parseInt(NUMERO1.value);
   let totalmulti = numero1 * 2;
    let totalmulti2 = numero1 * 3;
    TOTALTRES.innerHTML = ` El resultado de este numero es multiplicado por 2 es ${totalmulti} y por 3 es ${totalmulti2}   `;


}
function pintura(){
   let altura = parseInt(ALTO.value);
   let anchura = parseInt(ANCHO.value);
   let usar = parseInt(COBERTURA.value)/12;
   let totalusar = altura * anchura * usar;
   RESUPINTURA.innerHTML = ` El total de pintura a usar es ${totalusar} `;

}