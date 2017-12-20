var showDyan = function(passWord) {
  var userName = $("input#Username").val()
  var passWord = $("input#password").val()
  if (passWord === "DiAnaMuRUgi7") {
    $(".dyan2").show()
  } else {
    alert("Oooops! Sorry " + userName + ", " + passWord + " is an incorrect password.")
  }
}

$(document).ready(function() {
  $('form#dyan-details').submit(function(event) {
    event.preventDefault()
    var userName = $("input#Username").val()
    var passWord = $("input#password").val()
    showDyan(passWord)
    scrollTo($('.dyan2'), 1000);
  })
  $(".clickme").click(function() {
    $('.dyan3').show()
    scrollTo($('.somemagic'), 2000);
  })
  $('.somemagic').click(function() {
    $('.typewriter').show()
    scrollTo($('.Diana'), 2000);
  })
  $('.Diana').click(function() {
    $('.HBD').show()
    scrollTo($('#Diana2'), 2000);
  })
})
