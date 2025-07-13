function add(a, b) {
  return a + b;
}

const firstInt = Number(process.argv[2]);
const secondInt = Number(process.argv[3]);

console.log(add(firstInt, secondInt));
