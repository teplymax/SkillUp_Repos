//=============task1====================
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return this.name + " " + this.surname;
  }
}
class Student extends User {
  constructor(year, name, surname) {
    super(name, surname);
    this.year = year;
  }
  getCourse() {
    let date = new Date(),
      course = 0;
    this.year > date.getFullYear()
      ? console.log("Error year is > then current year")
      : (course = date.getFullYear() - this.year);
    if (course > 5) return `graduated ${course - 5} years ago`;
    else return course;
  }
}
let s1 = new Student(2013, "max", "teplyi");
console.log(s1.name);
console.log(s1.surname);
console.log(s1.year);
console.log(s1.getFullName());
console.log(s1.getCourse());
//======task2==============
class Validator {
  isEmail(str) {
    let reg = new RegExp(
      "^([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$",
      "g"
    );
    return reg.test(str);
  }
  isPhone(str) {
    let reg = new RegExp("^+d{2}(d{3})d{3}-d{2}-d{2}$", "g");
    return reg.test(str);
  }
  isDomain(str) {
    let reg = new RegExp(
      "([a-z0-9]{1})((.[a-z0-9-])|([a-z0-9-]))*.([a-z]{2,6})(/?)$",
      "g"
    );
    return reg.test(str);
  }
  isDate(str) {
    let reg = new RegExp(
      "^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]d{4}$",
      "g"
    );
    return reg.test(str);
  }
}
let validator = new Validator();

console.log(validator.isEmail("phphtml@mail.ru"));
console.log(validator.isDomain("phphtml.net"));
console.log(validator.isDate("12.05.2020"));
console.log(validator.isPhone("+38(044)555-55-55"));
