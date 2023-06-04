/*
피보나치 수를 로그 단계 수로 계산하는 똑똑한 알고리즘이 있다.
§1.2.2의 fib.iter 과정 에서 상태 변수 a와 b를 a = a+b 와 b = a로 변환했음을 기억할 것이다.
이 변환을 T라고 할 때，a=1과 b=0에서 출발해서 T를 n번 거듭 적용하면 Fib(n+1)과 Fib(n)이 나온다.
다른 말로 하면，쌍 (1，0)에 출발해서 를 n번 적용한 ‘변환 거듭제곱(power of transformation)’ T^n은 피보나치 수열을 산출한다.
이제 T가 좀 더 일반적인 변환들의 모임 (family) T(pq)에서 p=0이고 q=1인 특수 사례라고 생각해 보자. 여기서 T(pq)는 쌍 (a，b) 를
a = bq+aq+ap 와 b = bp+aq 에 따라 변환한다.
그러한 변환 T(pq)를 두 번 적용한 것이 같은 형태의 변환 T(p'q')를 한 번 적용한 것과 동일한 효과를 낼 수 있음을 증명하고，
그러한 조건 을 만족하는 p'와 q'를 p와 q로 표현하라. 이 문제를 풀면 이런 변환을 제곱(2제곱)하는 양함수 형태의 공식을 얻을 수 있으며，
그러면 fast.expt 함수에서처럼 연속제곱을 이용해서 T^n 을 계산할 수 있게 된다. 마지막으로，이 모든 것을 모아서 다음과 같이 단계 수가 로그인 피보나치 수 계산 함수를 완성하라
 */

function is_even(x) {
    return x % 2 === 0;
}
function fib(n) {
    return fib_iter(1, 0, 0, 1, n);
}
function fib_iter(a, b, p, q, count) {
    return count === 0
           ? b
           : is_even(count)
           ? fib_iter(
               a,
                b,
                p * p + q * q,
                2 * p * q + q * q,
                count / 2
            )
           : fib_iter(
               b * q + a * q + a * p,
                b * p + a * q,
                p,
                q,
                count - 1
            );
}
/*
T(pq)
a = (bq + aq + ap)
b = (bp + aq)
T(pq)
a = (bp + aq)q + (bq + aq + ap)q + (bq + aq + ap)p
  = bpq + aqq + bqq + aqq + apq + bpq + apq + app
  = b(2pq+qq) + a(2pq+qq) + a(pp+qq)
b = (bp + aq)p + (bq + aq + ap)q
  = bpp + apq + bqq + aqq + apq
  = b(pp+qq) + a(2pq+qq)

T^2(pq) = T(p'q') // p' = (pp+qq), q' = (2pq+qq)
 */

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(18));   // 2584

