/*
function expmod(base, exp, m) {
    sleep(1);
    return exp === 0
           ? 1
           : is_even(exp)
           ? (expmod(base, exp / 2, m) * expmod(base, exp / 2, m)) % m
           : (base * expmod(base, exp - 1, m)) % m;
}
위의 함수는 기존 expmod 에 비해 단계수가 theta(log n) -> theta(n) 으로 증가함을 보여라.
 */

/*
square 는 상수단계이지만 expmod 를 각각의 메서드 호출로 단계를 늘리면 2 ^ log n 이 되면서 n 단계가 된다.
 */
