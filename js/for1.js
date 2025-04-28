// for1.js
//반복문
let sum = 0;
for (let i = 1; i <= 5; i++) { //1) 초기값 2) 조건 3)증감식
  sum = sum + i;
}
console.log('sum의 값은' + sum);

//1~20 반복 => 짝수인 경우 합을 구하고 싶음.
//2,3,4,6,8,10 ...20
let sum1 = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) { //조건 : 짝수일때만 합.
    sum1 = sum1 + i; //sum이라는 변수에 누적.
  } // end of if.
} //end of for.
console.log('sum1의 값은' + sum1);