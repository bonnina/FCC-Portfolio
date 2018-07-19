$(function() {
  
  function newTab() {
    window.open(this.href);
    return false;
  }

  $('.button, #cert').click(newTab);
  $('.button, #cert').keypress(function() {
    if(event.which == 13 || event.which == 32 ) newTab()
  });

})
