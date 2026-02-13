const name = {
  firstName: "Ravi",
  lastName: "Ranjan",
};

const printName = function (city, state) {
  console.log(this.firstName + " " + this.lastName);
  console.log("FROM " + city + "," + state);
};

printName.call(name, "Patna", "Bihar");

printName.apply(name, ["Bangalore", "Karnataka"]);

const name2 = printName.bind(name, "Delhi", "India");

name2();
