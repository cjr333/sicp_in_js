/*
세제곱근을 위한 뉴턴 방법에서는，y가 x의 세제곱근을 근사하는 값이라고 할 때 다음 공식으로 더 나은 근삿값을 구한다.
(x/y^2 + 2y) / 3
이 공식을 이용해서 제곱근 함수와 비슷한 형태의 세제곱근 함수를 구현하라.
(§1.3.4에서는 이 제곱근 함수와 세제곱근 함수를 추상화한 것에 해당하는，일반적인 뉴턴 방법의 구현을 이야기한다.)
 */

function cubic_root_iter(guess, x) {
    const next_guess = improve(guess, x);
    return is_good_enough(guess, next_guess)
        ? guess
        : cubic_root_iter(next_guess, x);
}
function improve(guess, x) {
    return (x/square(guess) + 2 * guess) / 3;
}
function abs(x) { return x >= 0 ? x : -x; }
function square(x) { return x * x; }
function cubic(x) { return x * x * x; }
function is_good_enough(guess, next_guess) {
    return abs(guess - next_guess) / guess < 0.0001;
}
function cubic_root(x) {
    return cubic_root_iter(1, x);
}

const too_small = 0.0000012345678;
const too_big = 12345678912345678;
const normal = 1000_000_000;

console.log(`org = ${too_small}, cubic of cubic_root = ${cubic(cubic_root(too_small))}`);
console.log(`org = ${too_big}, cubic of cubic_root = ${cubic(cubic_root(too_big))}`);
console.log(`org = ${normal}, cubic of cubic_root = ${cubic(cubic_root(normal))}`);
