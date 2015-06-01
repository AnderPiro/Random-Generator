var names = [];
function addName() {
    "use strict";
    var n = document.getElementById("userText").value;
    document.getElementById("userText").value = "";
    names.push(n);
    document.getElementById("names").innerHTML = names.toString();
}
function getOne() {
    "use strict";
    var i = Math.floor(Math.random() * names.length);
    document.getElementById("result").innerHTML = "The random generator chose: " + names[i];
    if (names.length < 1) {
        document.getElementById("result").innerHTML = "You haven't added anything yet! Input some stuff to be randomly chosen first.";
    }
}
function removeAll() {
    "use strict";
    names = [];
    document.getElementById("names").innerHTML = "You haven't added anything yet! Input some stuff to be randomly chosen.";
    document.getElementById("result").innerHTML = "";
}