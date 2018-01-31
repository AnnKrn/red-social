function loadPage(){
  // splash();
  $textBtn.on('click', botonSend);
  // $newsfeed.click(changeView);
};

function splash(){
  $('.homePage').hide();
  setTimeout(function() {
    $('#logo').fadeOut(500);
    $('.homePage').show();
  }, 2000);
}

// función para publicar texto
var $textArea = $('.new-text');
var $textBtn = $('#send');
var $container = $('#content');

function botonSend(){
  if ($textArea.val()) {
    $container.prepend('<div class="new-item"><div class="row"><div class="col-md-10" id="new-container"></div></div></div>');
    var $text = $('#new-container');
    var $parrafo = $('<p/>', { 'class': 'paragraph' });
    $parrafo.text($textArea.val());
    $text.prepend($parrafo);
    $textArea.val('');
    $textArea.focus();
  }
};

// cambiar Vista, por revisar
// var $newsfeed = $('#logIn');
// function changeView(){
//   location.href = 'views/newsfeed.html';
// };


$(document).ready(loadPage);
