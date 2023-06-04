function square(x) {
    return x * x;
}
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}
function expmod(base, exp, m) {
    sleep(1);
    return exp === 0
           ? 1
           : is_even(exp)
           ? square(expmod(base, exp / 2, m)) % m
           : (base * expmod(base, exp - 1, m)) % m;
}
function fermat_test(n) {
    function try_it(a) {
        return expmod(a, n, n) === a;
    }
    return try_it(1 + Math.floor(Math.random() * (n - 1)));
}
function fast_is_prime(n, times) {
    return times === 0
        ? true
        : fermat_test(n)
            ? fast_is_prime(n, times - 1) : false;
}

function is_prime(n) { return fast_is_prime(n, 3); }
function display(n) { console.log(n); }
function get_time() { return Date.now(); }
function timed_prime_test(n) {
    return start_prime_test(n, get_time());
}
function start_prime_test(n, start_time) {
    return is_prime(n)
        ? report_prime(n, get_time() - start_time)
        : false;
}
function report_prime(prime, elapsed_time) {
    display("  ***  ");
    display(`${elapsed_time} for ${prime}`);
    return true;
}

function is_even(x) {
    return x % 2 === 0;
}
function search_for_primes(start, end, limit) {
    return start > end || limit === 0
        ? false
        : is_even(start)
            ? search_for_primes(start + 1, end, limit)
            : timed_prime_test(start)
                ? search_for_primes(start + 1, end, limit - 1)
                : search_for_primes(start + 1, end, limit)
}

search_for_primes(1000, 1_000_000_000, 3);
search_for_primes(100_000, 1_000_000_000, 3);
search_for_primes(1_000_000, 1_000_000_000, 3);

