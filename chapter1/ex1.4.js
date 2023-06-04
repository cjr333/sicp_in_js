/*
앞에서 본 함수 적용 평가 모형은 함수 표현식이 복합 표현식인 경우도 허용한다.
이 점을 고려 해서 a_plus_abs_b 함수의 작동 방식을 서술하라.

function plus(a, b) { return a + b; }
function minus(a, b) { return a - b; }
function a_plus_abs_b(a, b) {
  return (b >= 0 ? plus : minus)(a, b);
}
 */

/*
  1. 함수 표현식 평가 => b >= 0 ? plus : minus
  2. 위에서 평가된 함수를 인자 a, b 에 적용.
 */
