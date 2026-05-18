//titulos
const TITULO1 = document.getElementById("titulo1");
const TITULO2 = document.getElementById("titulo2");
const TITULO3 = document.getElementById("titulo3");
//Ordena estos animales en orden de preferencia
const AB = document.getElementById("vaquita");
const BB = document.getElementById("tigrecito");
const CB = document.getElementById("obejita");
const DB = document.getElementById("caballito");
const EB = document.getElementById("monito");
//Escribe una palabra que describa lo siguiente
const PERRO = document.getElementById("perrito");
const GATO = document.getElementById("gatito");
const RATA = document.getElementById("ratita");
const CAFE = document.getElementById("cafecito");
const MAR = document.getElementById("marcito");


//Indica alguien importante para tí, que te sugiera este color
const AMARILLO = document.getElementById("amarillito");
const NARANJA = document.getElementById("naranjita");
const BLANCO = document.getElementById("blanquito");
const ROJO = document.getElementById("rojito");
const VERDE = document.getElementById("verdecito");


//funcion
function resultado(){
    TITULO1.innerHTML = ` Tu orden de prioridades son: `;
     AB.innerHTML = `Tu Carrera: `;
      BB.innerHTML = `El Orgullo: `;
        CB.innerHTML = `El Amor: `;
          DB.innerHTML = `La Familia: `;
            EB.innerHTML = `El Dinero: `;
            TITULO2.innerHTML = ` Como ves la vida: `;
              PERRO.innerHTML = `Yo soy... `;
      GATO.innerHTML = `Mi pareja `;
        RATA.innerHTML = `Lo que mas odio: `;
          CAFE.innerHTML = `Para mi el sexo es `;
            MAR.innerHTML = `y la vida `;
            TITULO3.innerHTML = ` Tu gente: `;
             AMARILLO.innerHTML = `Nunca te olvidara  `;
      NARANJA.innerHTML = `Puede ser tu gran amigo/a:`;
        BLANCO.innerHTML = `Tu alma gemela `;
          ROJO.innerHTML = `Realmente amas a `;
            VERDE.innerHTML = `Simepre estara en tu memoria `;
}

