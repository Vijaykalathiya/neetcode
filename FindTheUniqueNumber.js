function findUniq(arr) {
    for(i = 0; i < arr.length; i++) {
      if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) return arr[i];
    }
  }
  

  console.log(findUniq([ 0, 0, 1 ]));