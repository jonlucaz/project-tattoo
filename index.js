let igLogo = document.getElementById('iglogo')

igLogo.addEventListener("mouseover", function(){
    igLogo.style.width = "8%"; // Aumenta a largura em 20%
})

igLogo.addEventListener("mouseout", function() {
    igLogo.style.width = ""; // Retorna ao tamanho original da largura
    igLogo.style.height = ""; // Retorna ao tamanho original da altura
  });