//Appel du Jquery aprés le chargement de la page
$(function(){
  // Variable pour calculer toute la largeur et la hauteur de la fenêtre
  var maxWidth = $(document).width();
  var maxHeight = $(document).height();
  // Variable pour annoncer la largeur et la hauteur minimum
  var minWidth = 0;
  var minHeight = 0;
  // Variable qui calculer le pas (en pixel)
  var stepX, stepY;
  // Variable pour calculer la largeur du carré + les marges et les bordures
  var squareSize = $('#rebound').outerWidth(true);
  $('input').keydown(function(e){
    var positionX = $('#rebound').offset().left;
    var positionY = $('#rebound').offset().top;
    // Le switch associe un évenement précis (case) et which définie les touches
    switch (e.which){
      case 37:    // flèche gauche
      /* condition if (?) qui dit que si la positionX et supérieur ou égale
      à "minWidth" alors on diminue le pas de 10px, ensuite on a le
      else (:) qui dit sinon on soustrait la largeur du carré a la largeur
      maximal*/
      stepX = (positionX >= minWidth) ? '-=10' : maxWidth - squareSize;
      $('#rebound').finish().animate({
        left: stepX
      });
      // Arrête toute les fonctions si une est executé
      break;
      case 38:    // flèche haut
      /* condition if (?) qui dit que si la positionY et supérieur ou égale
      à "minHeight" alors on diminue le pas de 10px, ensuite on a le
      else (:) qui dit sinon on soustrait la hauteur du carré a la hauteur
      maximal*/
      stepY = (positionY >= minHeight) ? '-=10' : maxHeight - squareSize;
      $('#rebound').finish().animate({
        top: stepY
      });
      break;
      case 39:    // flèche droite
      /* condition if (?) qui dit que si la positionX + la largeur
      du carré et inférieur ou égale
      à "minWidth" alors on augmente le pas de 10px, ensuite on a le
      else (:) qui dit sinon égale 0*/
      stepX = ((positionX + squareSize) <= maxWidth) ? '+=10' : '0';
      $('#rebound').finish().animate({
        left: stepX
      });
      break;
      case 40:    // flèche du bas
      /* condition if (?) qui dit que si la positionY + la largeur
      du carré et inférieur ou égale
      à "maxWidth" alors on augmente le pas de 10px, ensuite on a le
      else (:) qui dit sinon égale 0*/
      stepY = ((positionY + squareSize) <= maxHeight) ? '+=10' : '0';
      $('#rebound').finish().animate({
        top: stepY
      });
      break;
    }
  });
});
