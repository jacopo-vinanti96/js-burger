// Dichiarazione variabili
var burgerName = document.getElementById('burger-name'),
    addIngredient = document.getElementsByClassName('add-ingredient'),
    opaqueText = document.getElementById('opaque-text'),
    opaqueTextBtn = document.getElementById('opaque-text-2'),
    sum,
    total = document.getElementById('total'),
    calculate = document.getElementById('calculate');

// Se l' utente clicca su "calculate" allora...
calculate.addEventListener("click", function() {
  sum = 50;
  if ( burgerName.value != "" ) {
    for ( var i = 0; i < addIngredient.length; i++ ) {
      if ( addIngredient[i].checked == true ) {
        sum += parseInt(addIngredient[i].value);
      }
    }
    total.innerHTML = sum + "€";
  } else {
    opaqueText.className = "opacity1";
    opaqueTextBtn.className = "opacity1";
  }
}
);
