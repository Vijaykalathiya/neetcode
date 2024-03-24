// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
    result = "likes this";
    if(names.length == 0) {
      result = "no one " + result;
    } else if(names.length == 1) {
      result = names + " " + result;
    } else if(names.length == 2) {
      result = names.join(" and ") + " " + result.replace("likes", "like");
    } else if(names.length == 3) {
      let firstName = names[0] + ", ";
      names.shift();
      result = firstName + names.join(" and ") + " " + result.replace("likes", "like");
    } else if(names.length > 3) {
      result = `${names[0]}, ${names[1]} and ${names.length - 2} others ${result.replace("likes", "like")}`;
    }
    return result;
  }


console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));