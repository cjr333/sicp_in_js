function square(x) {
    return x * x;
}
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}
function smallest_divisor(n) {
    return find_divisor(n, 2);
}
function find_divisor(n, test_divisor) {
    sleep(1);
    return square(test_divisor) > n
        ? n
        : divides(test_divisor, n)
            ? test_divisor
            : find_divisor(n, test_divisor + 1);
}
function divides(a, b) {
    return b % a === 0;
}

function is_prime(n) { return smallest_divisor(n) === n; }
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

