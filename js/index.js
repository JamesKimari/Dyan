var showDyan = function(passWord) {
  if (passWord === "DianaMurugi7") {
    $(".dyan").show()
  } else {
    alert("Oooooooh noooo,,, Incorrect Password")
  }
}

$(document).ready(function() {
  $('form#dyan-details').submit(function(event) {
    event.preventDefault()
    var passWord = $("input#password").val()
    showDyan(passWord)
  })
})
