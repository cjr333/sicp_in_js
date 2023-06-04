/*
잔돈 11센트를 만드는 문제에 대해 §1.2.2의 count.change 함수가 생성하는 과정을 트리 형
태로 표시하라. 잔돈 금액의 증가에 따른 공간 및 단계 수의 증가 차수는 무엇인가?
function count_change(amount) {
  return cc(amount, 5);
}
function cc(amount, kinds_of_coins) {
  return amount === 0
         ? 1
         : amount < 0 || kinds_of_coins === 0
         ? 0
         : cc(amount, kinds_of_coins - 1)
           +
           cc(amount - first_denomination(kinds_of_coins), kinds_of_coins);
}
function first_denomination(kinds_of_coins) {
  return kinds_of_coins === 1 ? 1
       : kinds_of_coins === 2 ? 5
       : kinds_of_coins === 3 ? 10
       : kinds_of_coins === 4 ? 25
       : kinds_of_coins === 5 ? 50
       : 0;
}
 */

/*
count_change(11)
cc(11, 5)
cc(11, 4) + cc(-39, 5)
cc(11, 3) + cc(-14, 5) + 0
cc(11, 2) + cc(1, 3) + 0
cc(11, 1) + cc(6, 2) + cc(1, 2) + cc(-9, 3)
cc(11, 0) + cc(10, 1) + cc(6, 1) + cc(1, 1) + cc(1, 1) + cc(-4, 2) + 0
... (x, 1) => 1 로 축약 생략
0 + 1 + 1 + 1 + 1 + 0
4

단계 증가: theta(n)
공간 증가: theta(2^n)
 */

function count_change(amount) {
    return cc(amount, 5);
}
function cc(amount, kinds_of_coins) {
    return amount === 0
        ? 1
        : amount < 0 || kinds_of_coins === 0
            ? 0
            : cc(amount, kinds_of_coins - 1)
            +
            cc(amount - first_denomination(kinds_of_coins), kinds_of_coins);
}
function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ? 1
        : kinds_of_coins === 2 ? 5
            : kinds_of_coins === 3 ? 10
                : kinds_of_coins === 4 ? 25
                    : kinds_of_coins === 5 ? 50
                        : 0;
}

console.log(count_change(11));
