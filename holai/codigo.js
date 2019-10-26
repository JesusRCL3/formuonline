function solonumeros(e){ 
        key=e.keyCode;
        teclado=String.fromCharCode(key);
        numero="0123456789";
        especiales="8-37-38-46";
        teclado_especial=false;
         for(var i in especiales){
             if(key==especiales[i]){
                    teclado_especial=true;

             }
         }
         if(numero.indexOf(teclado)==-1 && !teclado_especial){
             return false;
         }
}
var texto1 = document.getElementById("texto1");
var texto2 = document.getElementById("texto2");
var boton = document.getElementById("boton")

boton.addEventListener("click", p);

function p(){ 
    var p = alert(texto1.value + " de " + texto2.value + " años");
}

