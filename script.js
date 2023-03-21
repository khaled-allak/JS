




// var nm = (prompt("Enter Your Name, Please"));
// if (isNaN(nm)) {
//     document.write("Welcome dear guest " + nm + "!");
// } else {
//     var error = (prompt("Error: Invalid. Please enter a string"));
// }








var nm = /^[A-Za-z]$/
var ph = /^[0-9]{11}$/

do {
    var nama = prompt("Enter Your name");
    document.write("Welcome dear guest, " + nama);
}while (nama.match(nm))