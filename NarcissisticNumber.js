function narcissistic( value ) {
    return ('' + value).split('').reduce(function(p, c){
      return p + Math.pow(c, ('' + value).length)
      }, 0) == value;
  }

console.time();
console.log(narcissistic(153));
console.timeEnd();
console.time();
console.log(narcissistic());
console.timeEnd();