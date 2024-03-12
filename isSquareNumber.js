var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0;
  }


console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(1));
console.log(isSquare(3));
console.log(isSquare(8));
console.log(isSquare(25));
console.log(isSquare(26));