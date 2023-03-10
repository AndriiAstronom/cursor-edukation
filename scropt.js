let n = parseInt(prompt("Введіть перше число N"));

if (isNaN(n)) {
  console.error("Некоректне значення для N");
}

let m = parseInt(prompt("Введіть друге число M"));

if (isNaN(m)) {
  console.error("Некоректне значення для M");
}

let skipEven = confirm("Пропускати парні числа?");

let sum = 0;

for (let i = n; i <= m; i++) {
  if (skipEven && i % 2 === 0) {
    continue;
  }
  sum += i;
}

console.log("Сума чисел від " + n + " до " + m + " = " + sum);
