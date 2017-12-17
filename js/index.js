var showDyan = function(passWord) {
  if (passWord === "DianaMurugi7") {
    $(".dyan").show()
  } else {
    alert(passWord + " is an incorrect password")
  }
}

$(document).ready(function() {
  $('form#dyan-details').submit(function(event) {
    event.preventDefault()
    var userName = $("input#Username").val()
    var passWord = $("input#password").val()
    showDyan(passWord)
  })
  $(".clickme").click(function() {
    $('.dyan2').show()
  })
})
