var botonCerrar = document.getElementsByClassName('botonCerrar');
  for (var i = 0; i < botonCerrar.length; i++) {
    botonCerrar[i].addEventListener('click',function() {
      this.parentNode.parentNode.style.display ="none";
  });
};
 var restaurar = document.getElementById('restaurarFotos');
 var imagenes = document.getElementsByClassName('imagen');
   restaurar.addEventListener('click', function () {
     for (var i = 0; i < imagenes.length; i++) {
       imagenes[i].style.display ="flex";
     }
});
