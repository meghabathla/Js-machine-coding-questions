function pipe(...fnc) {
  return function (initialValue) {
    return fnc.reduce((acc, fnc) => fnc(acc), initialValue);
  };
}

//Example usuage
const getName = (object) => object.name;
const makeUpperCase = (string) => string.toUpperCase();
const slice = (string) => string.slice(0, 3);

const method = pipe(getName, makeUpperCase, slice);
const value = method({ name: "chaiaurcode" });
console.log(value);
