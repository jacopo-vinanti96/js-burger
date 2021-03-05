var burgerName = document.getElementById('burger-name'),
    addIngredient = document.getElementsByClassName('add-ingredient'),
    opaqueText = document.getElementsByClassName('opacity0'),
    sum,
    total = document.getElementById('total'),
    calculate = document.getElementById('calculate');

    console.log(addIngredient[1].value);
    console.log(calculate);
    console.log(burgerName);



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
    alert("You must enter a name")
  }
}
);
