// Dichiarazione variabili
var addIngredient = document.getElementsByClassName("add-ingredient"),
    burgerName = document.getElementById('burger-name'),
    calculate = document.getElementById('calculate'),
    coupon = document.getElementById('coupon'),
    couponValid,
    couponValidArr = [ "sconto", "paninozzo", "boolean" ],
    i,
    opaqueCoupon = document.getElementById('opaque-coupon-text'),
    opaqueTextBtn = document.getElementById('opaque-text-2'),
    opaqueTextEmpty = document.getElementById('opaque-text-3'),
    opaqueText = document.getElementById('opaque-text'),
    sum,
    total = document.getElementById('total');

//Funzione mostra icona onClick per le checkbox
for ( i = 0; i < addIngredient.length; i++ ) {
  addIngredient[i].addEventListener("click", function() {
    this.classList.toggle("check-add-ingredient");
  });
}

console.log(addIngredient);

// Se l' utente clicca su "calculate" allora...
calculate.addEventListener("click", function() {
  couponValid = false;
  opaqueCoupon.className = "opacity0";
  opaqueTextBtn.className = "opacity0";
  opaqueTextEmpty.className = "";
  opaqueText.className = "opacity0";
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
      for ( i = 0; i < couponValidArr.length; i++ ) {
        if ( coupon.value == couponValidArr[i] ) {
          sum -= sum * 0.2;
          couponValid = true;
        }
      }
      if ( coupon.value != "" && couponValid == false ) {
        opaqueCoupon.className = "opacity1";
      }
    }
    total.innerHTML = "$ " + sum.toFixed(2);
  } else {
    opaqueText.className = "opacity1";
    opaqueTextBtn.className = "opacity1";
  }
}
);
