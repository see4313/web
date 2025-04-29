//function2.js

function sum(num1 = 0, num2 = 0) { //매개변수의 초기값.
  let result = 0;
  result = num1 + num2;
  return result; // 반환.
}

function printStar(times = 1, shape = '⭐') {
  let str = '';
  for (let i = 1; i <= times; i++) {
    str += shape;
  }
  console.log(str)
}

//구구단을 출력하는 함수
function printGugudan(dan = 5) {
  //document영역에 출력하는 함수.
  for (let i = 1; i <= 9; i++) {
    document.write(`<p>${dan} * ${i} = ${dan * i}</p>`)
  }
}

printGugudan(5); // function 함수는 기능을 실행하려고 하면 호출해줘야한다.

// printStar(2, '🌞');

console.log(sum(10,20));