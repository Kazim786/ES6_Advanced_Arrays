// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArr = []

// array.forEach(num.username => {
//   newArr.push(!)

// })

array.forEach((user) => {
  let { username } = user;
  //using destructuring
  username = username + "!";
  newArr.push(username);
})

//Create an array using map that has all the usernames with a "? to each of the usernames

const mappedArr = array.map((num) => {
  let {username} = num
  //pulling username using destructuring out of the array of objects
  username = username + "?"
  return username
  //now new Array => mappedArr will have username that is followed with ?
})

//Filter the array to only include users who are on team: red
const filtered = array.filter((num) => {
  
  return num.team === "red"
  
})

//Find out the total score of all users using reduce

const total = array.reduce((a, user) => {
return user.score + a
}, 0) 
//accumulator takes in the current value that it is given, 
//in this case 0. Then each time it iterates and adds on (accumulates)
// whatever the call back return value is added onto it.
//For instance first the value of accumulator is 0. But when you add user.score which is 5 to it. 
//Accumulator becomes 5 too as it takes on the call back return value.
//Then when you add user.score again which has the value of 10 to accumulator which is 5. The call back return value becomes 15 and is thus also the value of the accumulator.
//This process keeps repeating until all numbers are added

console.log(total) 

//Did reduce by myself *Cool face*







// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
