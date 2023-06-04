console.log(10);
console.log(5 + 3 + 4); // 12;
console.log(9 - 1); // 8;
console.log(6 / 2); // 3;
console.log(2 * 4 + (4 - 6)); // 6;

const a = 3;
const b = a + 1; // 4;
console.log(a + b + a * b); // 19;
console.log(a === b); // false;
console.log(b > a && b < a * b ? b : a ); // true && true ? b : a => 4;
console.log(
    a === 4
        ? 6
        : b === 4 ? 6 + 7 + a : 25
); // false ? 6 : true ? 16 : 25 => 16;
console.log(2 + (b > a ? b : a)); // 2 + true ? 4 : 3 => 6;
console.log(
    (a > b ? a
        : a < b ? b
            : -1)
    *
    (a + 1)
); // (false ? 3 : true ? 4 : -1) * 4 => 16;

