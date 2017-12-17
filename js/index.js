$(document).ready(function() {
  $('form#dyan-details').submit(function(event) {
    event.preventDefault()
    $(".dyan").toggle()
  })
})
