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

console.log("=================")
var i = 10;
while (i--) {
    console.log(`i = ${i}`);
}

let username = "3hf4d&t%";
let userCheck = /(?=.{8,})(?=.*\W+)/;
let result = userCheck.test(username);
console.log(result);

function listPrimes(num) {
    let primeArr = [2, 3]
  for (let i=4; i<=num; i++) {
    if (primeArr.every(item => i%item!==0)) {
      primeArr.push(i);
    }
  }
  console.log(primeArr);
  return primeArr;
}

listPrimes(1000);

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  var fullName = firstAndLast;
  this.getFirstName = function() {
    
    return fullName.split(" ")[0];
  };
  this.getLastName = function() {
    return fullName.split(" ")[1];
  };
  this.getFullName = function() {
    return fullName;
  };
  this.setFirstName = function(first) {
    fullName = first + " " + fullName.split(" ")[1];
  };
  this.setLastName = function(last) {
    fullName = fullName.split(" ")[0] + " " + last;
  };
  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person('Bob Ross');
bob.setLastName("Dampling");
console.log(bob.getFullName());
bob.getFullName();


function checkCashRegister(price, cash, cid) {
  console.log("Parameters", price, cash, cid);
  const cobi = [1/100, 5/100, 1/10, 1/4, 1, 5, 10, 20, 100];
  const cidOrg = cid.slice(0);
  var back = cash - price;
  console.log("initial back = ", back, "cid Original = ", cidOrg);
  var change = [];
  for (let i = 8; i>=0 && back>0; i--) {
    if (back >= cobi[i] && cid[i][1] > 0) {
      let req = Math.floor(back/cobi[i]) * cobi[i];
      if (cid[i][1]>=req) {
        change.push([cid[i][0], req]);
        back -= req;
        back = Math.round(back*100)/100;
        cid[i][1] -= req;

      } else {
        change.push([cid[i][0], cid[i][1]]);
        back -= cid[i][1];
        back = Math.round(back*100)/100;
        cid[i][1] = 0;
      }
    }
  }
  console.log("cid", cid);
  console.log("Result", back, change);
  if (back>0) {
    console.log({status: "INSUFFICIENT_FUNDS", change: []});
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (cid.reduce((sum, item) => sum+item[1], 0)===0) {
    console.log({status: "CLOSED", change: cid});
    return {status: "CLOSED", change: cid};
  } else {
    console.log({status: "OPEN", change: change});
    return {status: "OPEN", change: change};
  }
  
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

