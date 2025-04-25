// variable3.js
//연산자(+, -, /, *, %)
let num1 = document.querySelector('#num1').value;
let num2 = document.querySelector('#num2').value; //대소문자 확인 하기
num1 = parseInt(num1); // 삼공 이라는 문자가 삼십으로 변경하게 해주는게 parseInt
num2 = parseInt(num2); //"17" -> 17

num1++; //31
let result = ++num1 + --num2; // 30 + 17 = 47, "30" + 17" = "3017"; 47
console.log(result, num1, num2);
// ++, -- 위치가 숫자의 앞이냐 뒤냐에 따라 결과값이 달라진다 (왼쪽 연산전, 오른쪽 연산이 끝난 후 다음부터 실행)
console.log(result);
// result 값을 input#result의 value 속성에 대입.
document.querySelector('#result').value = result;