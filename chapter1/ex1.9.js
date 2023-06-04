/*
다음 두 함수는 주어진 인수를 1 증가하는 함수 inc와 1 감소하는 함수 dec를 이용해서 두 양의 정수의 덧셈을 구현한다.
function plus(a, b) {
  return a === 0 ? b : inc(plus(dec(a), b));
}
function plus(a, b) {
  return a === 0 ? b : plus(dec(a), inc(b));
}
plus(4, 5);를 평가할 때 각 함수가 생성하는 과정을 치환 모형으로 표현하라. 이 과정들은 반복적인가，아니면 재귀적인가?
 */

/*
1. plus(4, 5)
   inc(plus(3, 5))
   inc(inc(plus(2, 5)))
   inc(inc(inc(plus(1, 5))))
   inc(inc(inc(inc(plus(0, 5)))))
   inc(inc(inc(inc(5))))
   inc(inc(inc(6)))
   inc(inc(7))
   inc(8)
   9    // 재귀적

2. plus(4, 5)
   plus(3, 6)
   plus(2, 7)
   plus(1, 8)
   plus(0, 9)
   9    // 반복적
 */
