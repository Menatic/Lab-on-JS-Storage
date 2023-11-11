//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.
const userData = {
  firstName: 'Bhuvan',
  lastName: 'V',
  age: '18',
  state: 'Karnataka',
};
for (const key in userData) {
  localStorage.setItem(key, userData[key]);
}
console.log(localStorage);
//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.

const receivedData ={
  firstName: localStorage.getItem('firstName'),
  lastName: localStorage.getItem('lastName'),
  age: localStorage.getItem('age'),
  state: localStorage.getItem('state'),
}
console.log(receivedData);
//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.

localStorage.removeItem('state');
console.log(localStorage);

//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.

localStorage.clear();
console.log(localStorage)

//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};

const String = JSON.stringify(user);
console.log(String);