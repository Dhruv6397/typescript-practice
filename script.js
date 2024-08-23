var a; //number
var arr; //array
var str; //string
var boolean; //boolean
var variable; // we can put any type in it in future
var variableUnkown;
var never; // code after never will not run at all
//tuple
var tuple = [2, "hello"];
//following function explicitly tell the return type
function returnNumber() {
    return 12;
}
//following function explicitly tell the return type
function returnVoid() {
    console.log("nothing would we return");
}
// Enum
var Directions;
(function (Directions) {
    Directions["top"] = "TOP";
    Directions["left"] = "LEFT";
    Directions["right"] = "RIGHT";
    Directions["bottom"] = "BOTTOM";
})(Directions || (Directions = {}));
console.log(Directions.bottom);
function abcd() {
    while (true) {
        console.log("this is infinite loop");
    }
}
abcd();
console.log("this code will not run ever if we put never with abcd loop");
