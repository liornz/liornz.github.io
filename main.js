console.log("Hello");
function count () {
    var a = 0;
    console.log("reset counter - a = 0");
    return function () {
        a++;
        console.log(a);
    }
}
console.log("counter1");
var counter1 = count();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();

console.log("counter2");
var counter2 = count();
counter2 ();
counter2 ();
counter2 ();
