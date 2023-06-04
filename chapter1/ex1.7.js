/*
제곱근 계산에 쓰인 is_good_enough 술어의 판정 방식은 아주 작은 수의 제곱근을 구할 때는 그리 효과적이지 않다.
그리고 실제 컴퓨터에서 산술 연산은 거의 항상 정밀도(유효자릿수)가 제한된 상태로 수행되기 때문에，is_good_enough의 판정 방식은 아주 큰 수의 제곱근 계 산에도 부적합하다.
이러한 점을 좀 더 자세히 설명하고，작은 수와 큰 수에 대해 판정이 실패하는 사례들을 제시하라.
is_good_enough를 구현하는 또 다른 전략은 반복 과정에서 guess 의 변화랑을 추적하면서 변화량이 guess의 아주 작은 비율보다 작으면 충분히 좋은 추측값이 라고 판정하는 것이다.
이런 종류의 반복 종료 판정 방식을 사용하는 제곱근 함수를 설계하라. 작은 수와 큰 수에 대해 그 함수가 본문의 함수보다 더 잘 작동하는가?
 */

function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
    ? guess
    : sqrt_iter(improve(guess, x), x);
}
function improve(guess, x) {
    return average(guess, x / guess);
}

function average(x, y) {
    return (x + y) / 2;
}
function abs(x) { return x >= 0 ? x : -x; }
function square(x) { return x * x; }
function is_good_enough(guess, x) {
    return abs(square(guess) - x) < 0.001;
}
function sqrt(x) {
    return sqrt_iter(1, x);
}

const too_small = 0.0000012345678;
const too_big = 12345678912345678;

// 숫자가 너무 작아서 잘못된 추측값이 오차내에 쉽게 들어와서 잘못된 결과 출력
console.log(`org = ${too_small}, square of sqrt = ${square(sqrt(too_small))}`);
// stack overflow - 숫자가 너무 커서 오차가 0.001 보다 작아지지 않음
// console.log(`org = ${too_big}, square of sqrt = ${square(sqrt(too_big))}`);

function sqrt2(x) {
    return sqrt_iter2(1, x);
}
function sqrt_iter2(guess, x) {
    const next_guess = improve(guess, x);
    return is_good_enough2(guess, next_guess)
        ? guess
        : sqrt_iter2(next_guess, x);
}
function is_good_enough2(guess, next_guess) {
    return abs(guess - next_guess) / guess < 0.0001;
}

console.log("=====================")
console.log(`org = ${too_small}, square of sqrt = ${square(sqrt2(too_small))}`);
console.log(`org = ${too_big}, square of sqrt = ${square(sqrt2(too_big))}`);



