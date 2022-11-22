function init(){
  
  var input = document.getElementById('entryinput')
  var pressButton = document.getElementById('entrybutton')
  var output = document.getElementById('textoutput')
  
  function alertFunc() {
    //sends the alert
    alert('Daniel Lim: ' + input.value)
    //changes h2
    output.innerHTML = input.value;
  }
  
  pressButton.addEventListener('click', alertFunc);

}
window.addEventListener('load', init);