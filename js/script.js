// Dichiarazione variabili
var addIngredient = document.getElementsByClassName('add-ingredient'),
    burgerName = document.getElementById('burger-name'),
    calculate = document.getElementById('calculate'),
    coupon = document.getElementById('coupon'),
    couponValid = [ "sconto", "paninozzo", "boolean" ],
    i,
    opaqueText = document.getElementById('opaque-text'),
    opaqueTextBtn = document.getElementById('opaque-text-2'),
    opaqueTextEmpty = document.getElementById('opaque-text-3'),
    sum,
    total = document.getElementById('total');

// Se l' utente clicca su "calculate" allora...
calculate.addEventListener("click", function() {
  opaqueText.className = "opacity0";
  opaqueTextBtn.className = "opacity0";
  opaqueTextEmpty.className = "";
  sum = 50;
  if ( burgerName.value != "" ) {
    for ( i = 0; i < addIngredient.length; i++ ) {
      if ( addIngredient[i].checked == true ) {
        sum += parseInt(addIngredient[i].value);
      }
    }
    if ( sum == 50 ) {
      opaqueTextEmpty.className = "opacity1";
    } else {
      for ( i = 0; i < couponValid.length; i++ ) {
        if ( coupon.value == couponValid[i] ) {
          sum -= sum * 0.2;
        }
      }
    }
    total.innerHTML = sum.toFixed(2) + "€";
  } else {
    opaqueText.className = "opacity1";
    opaqueTextBtn.className = "opacity1";
  }
}
);
