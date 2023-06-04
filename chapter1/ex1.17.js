/*
function times(a, b) {
  return b === 0
         ? 0
         : a + times(a, b - 1);
}
이 알고리즘의 단계 수는 b에 정비례한다(선형).
이 함수 외에，주어진 정수를 두 배로 만드는 double 함수와 주어진 짝수 정수를 2로 나누는 halve 함수가 있다고 하자.
이 함수들을 이용 해서，fast_expt처럼 단계 수가 로그인 곱셈 함수를 설계하라.
 */

function times(a, b) {
    return b === 0
        ? 0
        : a + times(a, b - 1);
}
function double(a) { return a + a; }
function is_even(x) {
    return x % 2 === 0;
}
function halve(a) { return a / 2 }

function fast_times_recur(a, b) {
    return b === 0
           ? 0
           : is_even(b)
           ? double(fast_times_recur(a, halve(b)))
           : a + fast_times_recur(a, b - 1);
}

console.log(fast_times_recur(2, 9));
console.log(fast_times_recur(2, 10));

function fast_times_iter(a, b) {
    function fast_times_iter_sub(part, a, b) {
        return b === 0
            ? part
            : is_even(b)
                ? fast_times_iter_sub(part, double(a), halve(b))
                : fast_times_iter_sub(part + a, a, b - 1);
    }
    return fast_times_iter_sub(0, a, b);
}

console.log(fast_times_iter(2, 9));
console.log(fast_times_iter(2, 10));

