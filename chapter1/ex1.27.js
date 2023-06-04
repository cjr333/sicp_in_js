/*
카마이클 수 테스트
 */

function square(x) {
    return x * x;
}
function is_even(x) {
    return x % 2 === 0;
}
function expmod(base, exp, m) {
    return exp === 0
        ? 1
        : is_even(exp)
            ? square(expmod(base, exp / 2, m)) % m
            : (base * expmod(base, exp - 1, m)) % m;
}
function fermat_test(n, a) {
    function try_it(a) {
        return expmod(a, n, n) === a;
    }

    return n === a
           ? true
           : try_it(a)
           ? fermat_test(n, a + 1)
           : false;
}
function is_prime(n) {
    return fermat_test(n, 2);
}

console.log(is_prime(561));
console.log(is_prime(1105));
console.log(is_prime(1729));
console.log(is_prime(2465));
console.log(is_prime(2821));
console.log(is_prime(6601));
