/*
만일 n<3이면 f(n)=n 이고 만일 n>=3이면 f(n)=f(n-1)+2f(n-2)+3f(n-3)으로 정의되는 함수 f가 있다.
재귀적 과정으로 f를 계산하는 자바스크립트 함수를 작성하라. 반복적 과정으로 f를 계산하는 자바스크립트 함수를 작성하라.
 */

function f_recur(n) {
    return n < 3 ? n : f_recur(n - 1) + 2 * f_recur(n - 2) + 3 * f_recur(n - 3);
}

function f_iter(n) {
    return n < 3 ? n : f_iter_sub(n - 2, 2, 1, 0);

    function f_iter_sub(count, first_prev, second_prev, third_prev) {
        return count === 0 ? first_prev
            : f_iter_sub(count - 1, first_prev + 2 * second_prev + 3 * third_prev, first_prev, second_prev);
    }
}

console.log(f_recur(10));
console.log(f_iter(10))
