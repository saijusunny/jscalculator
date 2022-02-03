// Clears the screen on click of C button.
function clearScreen() {
    document.getElementById("result").value = "";
  }
  // Displays entered value on screen.
  function live(value) {
    document.getElementById("result").value += value;
}