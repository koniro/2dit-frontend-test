//  корректное отображение вводимого номера в поле формы
function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }
  window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#phone--input--field");
    input.addEventListener("input", mask, false);
    // input.focus();
    // setCursorPosition(3, input);
  });

// отправка формы
window.addEventListener( "load", function () {
    function sendData() {
      const XHR = new XMLHttpRequest();
  
      // Связка объекта FormData и элемента формы
      const FD = new FormData( form );
  
      // Определяем, что происходит при успешной отправке данных
      XHR.addEventListener( "load", function(event) {
        alert( event.target.responseText );
      } );
  
      // Определяем, что произойдет в случае ошибки
      XHR.addEventListener( "error", function( event ) {
        alert( 'Oops! Something went wrong.' );
      } );
  
      // Настраиваем запрос
      XHR.open( "POST", "https://example.com/cors.php" );
  
      // Отправляемые данные - это то, что пользователь указал в форме
      XHR.send( FD );
    }
  
    // Получаем форму
    const form = document.getElementById( "ex4--form" );
  
    // и отправляем данные
    form.addEventListener( "submit", function ( event ) {
      event.preventDefault();
  
      sendData();
    } );
  } );


  const link = document.querySelector(".footer--link")
  link.addEventListener("click", function () {

    link.classList.add("visited")

  });



  var acc = document.getElementsByClassName("accordion");
  var i;
  

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var arrow = document.getElementById("arrow");
      arrow.classList.toggle("arrow--active")

      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

