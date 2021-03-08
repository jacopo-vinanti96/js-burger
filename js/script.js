// Dichiarazione variabili
var addIngredient = document.querySelectorAll(".add-ingredient"),
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
// addIngredient[0].addEventListener("click", function() {
//   if ( addIngredient[0].checked == true ) {
//   addIngredient[0].className += " check-add-ingredient";
//   } else {
//     addIngredient[0].className = "add-ingredient";
//   }
// }
// );
//
// addIngredient[1].addEventListener("click", function() {
//   if ( addIngredient[1].checked == true ) {
//   addIngredient[1].className += " check-add-ingredient";
//   } else {
//     addIngredient[1].className = "add-ingredient";
//   }
// }
// );
//
// addIngredient[2].addEventListener("click", function() {
//   if ( addIngredient[2].checked == true ) {
//   addIngredient[2].className += " check-add-ingredient";
//   } else {
//     addIngredient[2].className = "add-ingredient";
//   }
// }
// );
//
// addIngredient[3].addEventListener("click", function() {
//   if ( addIngredient[3].checked == true ) {
//   addIngredient[3].className += " check-add-ingredient";
//   } else {
//     addIngredient[3].className = "add-ingredient";
//   }
// }
// );
//
// addIngredient[4].addEventListener("click", function() {
//   if ( addIngredient[4].checked == true ) {
//   addIngredient[4].className += " check-add-ingredient";
//   } else {
//     addIngredient[4].className = "add-ingredient";
//   }
// }
// );
//
// addIngredient[5].addEventListener("click", function() {
//   if ( addIngredient[5].checked == true ) {
//   addIngredient[5].className += " check-add-ingredient";
//   } else {
//     addIngredient[5].className = "add-ingredient";
//   }
// }
// );

// function check() {
//   for ( i = 0; i < addIngredient.length; i++ ) {
//     if ( addIngredient[i].checked == true ) {
//       if ( addIngredient[i].classList.contains("check-add-ingredient") == false ) {
//         addIngredient[i].classList.add("check-add-ingredient");
//       }
//     } else {
//       addIngredient[i].classList.remove("check-add-ingredient");
//     }
//   }
// }

// addIngredient.forEach( item => {
//   item.addEventListener("click", function() {
//     for ( i = 0; i < addIngredient.length; i++ ) {
//       if ( addIngredient[i].checked == true ) {
//         if ( addIngredient[i].classList.contains("check-add-ingredient") == false ) {
//           addIngredient[i].classList.add("check-add-ingredient");
//         }
//       } else {
//         addIngredient[i].classList.remove("check-add-ingredient");
//       }
//     }
//   });
// });

addIngredient.forEach( item => {
  item.addEventListener("click", function() {
    if ( item.checked == true ) {
      if ( item.classList.contains("check-add-ingredient") == false ) {
        item.classList.add("check-add-ingredient");
      }
    } else {
      item.classList.remove("check-add-ingredient");
    }
  });
});

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
