let populateTable = function (string, table_id) {
  let res = string.split("");
  let current_table = document.getElementById(table_id);
  for (var i = 0; i < string.lenght(); i++) {
    let new_td = document.createElement("td");
    new_td.innerHTML = res[i];
    current_table.appendChild(new_td);
  }
};
//Funcion generica para esconder elementos por su ID
let hide = function (elementId) {
  let elem = document.getElementById(elementId);
  elem.style.display = "none";
};

let display = function (elementId) {
  let elem = document.getElementById(elementId);
  elem.style.display = "block";
};


//Funcion para remover y agregar elemento
let el = document.getElementById("start");
el.addEventListener("click", function () {
  hide("screen1");
});
el.addEventListener("click", function () {
  display("screen2");
});

/*
let displayScreen2 = function () {
  let new_div = document.createElement("div");
  new_div.innerHTML = '<input id="text1" class="button" name="text1" ></input>';
  document.getElementById("screen2").appendChild(new_div);
};

let remove = function (elementId) {
  let elem = document.getElementById(elementId);
  elem.parentNode.removeChild(elem);
};
*/
