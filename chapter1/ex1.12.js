/*
다음과 같은 패턴으로 배치된 수들을 파스칼의 삼각형(Pascals triangle)이라고 부른다.
        1
      1   1
    1   2   1
  1   3   3   1
1   4   6   4   1
....

이 삼각형의 두 빗변(양쪽 가장자리)에 해당하는 성분들은 모두 1이고 그 안쪽 수들은 각각 그 윗 행에 있는 두 수의 합이다.
파스칼의 삼각형의 성분들을 재귀적 과정으로 계산하는 함수를 작성하라.
 */

function pt(r, c) {
    return c === 0 || r === c
        ? 1
        : pt(r - 1, c - 1) + pt(r - 1, c);
}

console.log(pt(3, 1))
console.log(pt(4, 2))