// Dichiarazione variabili
var burgerName = document.getElementById('burger-name'),
    addIngredient = document.getElementsByClassName('add-ingredient'),
    opaqueText = document.getElementById('opaque-text'),
    opaqueTextBtn = document.getElementById('opaque-text-2'),
    opaqueTextEmpty = document.getElementById('opaque-text-3'),
    sum,
    total = document.getElementById('total'),
    calculate = document.getElementById('calculate');

// Se l' utente clicca su "calculate" allora...
calculate.addEventListener("click", function() {
  opaqueText.className = "opacity0";
  opaqueTextBtn.className = "opacity0";
  sum = 50;
  if ( burgerName.value != "" ) {
    for ( var i = 0; i < addIngredient.length; i++ ) {
      if ( addIngredient[i].checked == true ) {
        sum += parseInt(addIngredient[i].value);
      }
    }
    if ( sum = 50 ) {
      opaqueTextEmpty.className = "opacity1";
    }
    total.innerHTML = sum + "€";
  } else {
    opaqueText.className = "opacity1";
    opaqueTextBtn.className = "opacity1";
  }
}
);
