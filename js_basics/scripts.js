// const person1 = {
//   name: "Tirelo",
//   age: 15,
//   status: "resident",
// };
// const person2 = {
//   name: "Tracey",
//   age: 22,
//   status: "tourist",
// };

// if (person1.age > 18) {
//   person1.status = "resident";
//   console.log(person1);
// }
// if (person2.age > 18) {
//   person2.status = "resident";
//   console.log(person2);
// }
// //////////////
// const me = { firstName: "Tirelo", lastName: "Mputle" };
// const fullName = ({ firstName, lastName }) => {
//   const result = `${firstName} ${lastName}`;

//   return result;
// };
// console.log(fullName(me));
// +++++++++++++++
const names = ["Tirelo", "Tracy", "Tshepang"];
const lastName = "Mputle";
let newArray = [];

for (let i = 0; i < names.length; i++) {
  const fullName = `${names[i]} ${lastName}`;
  newArray.push(fullName);
}
console.log(newArray);
