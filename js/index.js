var showDyan = function(passWord) {
  var userName = $("input#Username").val()
  var passWord = $("input#password").val()
  if (passWord === "DianaMurugi7") {
    $(".dyan2").show()
  } else {
    alert(userName + ", Oooops! " + passWord + " is an incorrect password")
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
    scrollTo($('.somemagic'), 1000);
  })
  $('.somemagic').click(function() {
    $('.typewriter').show()
    scrollTo($('.Diana'),2000);
  })
})
