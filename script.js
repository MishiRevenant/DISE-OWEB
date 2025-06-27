
$(function(){




  $('#toggle-categorias').on('click', function(){
    $('#categorias-lista').slideToggle(200);

    // Cambiar texto del botón
    var txt = $('#toggle-text').text();
    $('#toggle-text').text(txt.includes('más') ? 'ver menos ↑' : 'ver más ↓');
  });


  /* Aplicar / quitar oferta (semana 10) */
  const $price = $('.price').first();
  let originalPrice = $price.text();
  $('#B_trans').on('click', function(){
      if($price.text() === originalPrice){
          const nuevo = originalPrice.replace(/([0-9]+\.?[0-9]*)/, function(num){
              return (parseFloat(num)*0.9).toFixed(2);
          });
          $price.text(nuevo + " (¡Oferta!)");
      }else{
          $price.text(originalPrice);
      }
  });

  /* Añadir imagen  */
  $('#B_append').on('click', function(){
      const url = $('#input').val().trim();
      if(url){
          $('#img').append('<img src="'+url+'" alt="img" style="width:120px;height:auto;border-radius:8px;">');
          $('#input').val('');
      }
  });

const $btn = $('#theme-toggle');
  const DARK_CLASS = 'dark-mode';

  // 1) Al cargar, lee preferencia y la aplica
  if (localStorage.getItem('dark') === 'true') {
    $('body').addClass(DARK_CLASS);
    $btn.text('☀️');
  }

  // 2) Al hacer click: alterna clase, texto y guarda en localStorage
  $btn.on('click', function(){
    $('body').toggleClass(DARK_CLASS);
    const isDark = $('body').hasClass(DARK_CLASS);
    $btn.text(isDark ? '☀️' : '🌙');
    localStorage.setItem('dark', isDark);
  });
});

