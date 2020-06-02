let getUniqueNames = (names) => {
  let uniqueNames = [];
  for (let name of names) {
    if (!uniqueNames.includes(name)) uniqueNames.push(name);
  }
  return uniqueNames;
};
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
console.log(getUniqueNames(values));
