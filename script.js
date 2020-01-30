var name = window.prompt("Please Enter your Name");
function first(name) {
  var letter = name.charAt(0);
  return letter
}

function index(letter) {
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  letter=letter.toLowerCase();
  document.write("Index of the First Letter is "+alphabet.indexOf(letter));
}

letter=first(name);
index(letter);