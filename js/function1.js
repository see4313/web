//function.js
// 두개의 수를 큰 값에다가는 10을 더하고 작은값에 5를 더한 후 합을 구하는 기능.

// 함수의 정의
function sum(parameter1, parameter2) {
  // 두개의 수를 큰 값에다가는 10을 더하고 작은값에 5를 더한 후 합을 구하는 기능.
  let result = 0;
  if (parameter1 > parameter2){
    result = (parameter1 + 10) + (parameter2 + 5);
} else{
  result = (parameter2 + 10) + (parameter1 + 5);
}
  // console.log(`결과값 ${result}`);
  return result; //return : 함수를 호출한 영역으로 결과 반환.
} //end of sum()


let num1 = 4,
num2 = 2;
let result = sum(4,2); //반환
document.write(`결과값 ${result}`);

num1 = 5, num2 = 3;
sum(num1, num2);
console.log(`결과값 ${result}`);

  result = sum(20, 19);
  alert(`결과값 ${result}`);
  // document.querySelector(`#result`).value = result;

// let rusult = 0;
// if (num1 > num2) {
//   result = (num1 + 10) + (num2 + 5);
// } else {
//   result = (num2 + 10) + (num1 + 5);
// }
// console.log(`결과값 ${result}`);