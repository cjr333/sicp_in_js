/*
function conditional(predicate, then_clauseJ else_clause) {
  return predicate ? then_clause : else_clause;
}
function sqrt_iter(guess, x) {
  return conditional(is_good_enough(guess, x),
            guess,
            sqrt_iter(improve(guess, x),x)
  );
}
이 함수로 제곱근을 계산하면 어떤 일이 생기는지 설명하라.
 */

/*
인자 우선 평가 방식의 경우 else_clause 를 항상 평가해서 전달해야한다.
 */
