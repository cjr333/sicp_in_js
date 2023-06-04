/*
function cube(x) {
  return x * x * x;
}
function p(x) {
  return 3 * x - 4 * cube(x);
}
function sine(angle) {
  return !(abs(angle) > 0.1)
         ? angle
         : p(sine(angle / 3));
}
 */

function cube(x) {
    return x * x * x;
}
function p(x) {
    return 3 * x - 4 * cube(x);
}
function abs(x) { return x >= 0 ? x : -x }
function sine(angle) {
    return !(abs(angle) > 0.1)
        ? angle
        : p(sine(angle / 3));
}

/*
a. sine(12.15)를 평가할 때 함수 p가 몇 번이나 적용되는가?
sine(12.15)
p(sine(4.05))
p(p(sine(1.35)))
p(p(p(sine(0.45))))
p(p(p(p(sine(0.15)))))
p(p(p(p(p(sine(0.05))))))
5번
 */
console.log(sine(12.15))
/*
b. sine(a)를 평가할 때 sine 함수가 생성하는 과정에 쓰이는 공간과 단계 수의 증가 차수(a 의함수로서의)는 무엇인가?
log(3, a)
 */
