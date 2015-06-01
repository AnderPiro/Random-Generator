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
    window.alert(names[i]);
}
function removeAll() {
    "use strict";
    names = [];
    document.getElementById("names").innerHTML = "";
}