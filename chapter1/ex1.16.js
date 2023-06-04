/*
fast_expt처럼 연속제곱을 이용하는，그리고 단계 수가 로그인 ‘반복적’ 거듭제곱 과정을 전개하는 함수를 설계하라.
 */

function fast_expt(b, n) {
    return n === 0
           ? 1
           : is_even(n)
           ? square(fast_expt(b, n / 2))
           : b * fast_expt(b, n - 1);
}
function is_even(x) {
    return x % 2 === 0;
}
function square(x) {
    return x * x;
}

console.log(fast_expt(2, 10))

function fast_expt_iter(b, n) {
    function fast_expt_iter_sub(a, b, n) {
        return n === 0
               ? a
               : is_even(n)
               ? fast_expt_iter_sub(a, square(b), n / 2)
               : fast_expt_iter_sub(a * b, b, n - 1)
    }
    return fast_expt_iter_sub(1, b, n)
}

console.log(fast_expt_iter(2, 10))
