// const keyValuePair = function(arr1, arr2) {
//     return arr1.map((key, index) => {
//         return {[key] : arr2[index]}
//     });
// }

// console.log(keyValuePair(["name", "city"], ["test1", "city1"]))


const keyValuePair = function(arr1, arr2) {
    return arr1.map((item, index) => {
        return {...item, ...arr2[index]}
    });
}

console.log(keyValuePair([
    { id: "abdc4051", date: "2017-01-24" }, 
    { id: "abdc4052", date: "2017-01-22" }
  ], [
    { id: "abdc4051", name: "ab" },
    { id: "abdc4052", name: "abc" }
  ]))