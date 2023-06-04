/*
세 개의 수를 받고 셋 중 가장 작은 것을 제외한 두 수의 제곱들을 합한 결과를 돌려주는 함수
를 선언하라.
 */

function square(x) { return x * x; }

function sum_of_squares(x, y) {
    return square(x) + square(y);
}

function sum_of_squares_of_bigger_ones(x, y, z) {
    return x < y && x < z ?
        sum_of_squares(y, z) :
        y < x && y < z ?
            sum_of_squares(x, z) :
            sum_of_squares(x, y);
}

console.log(sum_of_squares_of_bigger_ones(1, 2, 3));
console.log(sum_of_squares_of_bigger_ones(3, 2, 1));
console.log(sum_of_squares_of_bigger_ones(3, 1, 2));
