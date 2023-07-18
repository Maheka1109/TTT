const Abutton = document.getElementsByClassName('.btn');
function myButton() {
  var Pname = prompt("Choose your name!");

  if (Pname == null || Pname == "") {
    txt = "Player";
  }
  else {
    txt = "Hello!" + Pname + "!";
  }
  alert(txt);
  const updateName = document.querySelector('h3');
  updateName.textContent = Pname;
}
Abutton.addEventListener('click', myButton);


const Bbutton = document.getElementsByClassName('.btn');
function myButton1() {
  var Pname = prompt("Choose your name!");

  if (Pname == null || Pname == "") {
    txt = "Player";
  }
  else {
    txt = "Hello!" + Pname + "!";
  }
  alert(txt);
  const updateName = document.getElementById('k');
  updateName.textContent = Pname;
}
Bbutton.addEventListener('click', myButton1);