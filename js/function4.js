//function4.js
//함수 + 반복문 + 배열 :

let num = 10;
num = "10, 홍길동";

let numAry = [10, 20]; //[]배열 객체, new Array();
numAry[2] = 30;
numAry[3] = 50;
numAry[4] = "Hong"; //문자배열 가능은 하지만 안씀
numAry[4] = 70;
numAry[5] = 90;
numAry[6] = 110;


console.log(numAry[6]);
console.log(`배열의 크기: ${numAry.length}`); //length 속성은 배열의 크기를 알수 있다.

// 배열 + for반복문과 잘 맞다.
for (let i = 0; i < numAry.length; i++) {
  console.log(`[i]의 값:${i}, 배열의 값: ${numAry[i]}`);
}

// 배열의 값으로 연산 가능 
console.log(`numAry[6] - numAry[2] => ${numAry[6] - numAry[2]}`);

//배열 요소의 합.
let sum = 0;

for (let i = 0; i < numAry.length; i++) {
  // 1,3,5,7번째
  // if(i % 2 == 0)
  // 값중에서 50보다 큰 값
  if (numAry[i] > 50) {
    sum += numAry[i];
  }
}
console.log(`sum=>${sum}`);


// 배열 변수 이름이 ages 27,28,25,30,36

let ages = [27,28,25,30,36];
// max(초기값 : 0) => "36이 제일 많은 나이입니다."

// 함수. getMax()
function getMax(param1= []){
  let max = 0;
  for(i = 0;  i< param1.length; i++) {
    if(max < param1[i]) { // 현재 max 갑보다 더 큰 요소가 있다면.
     max = param1[i]; //max의 변수에 할당.
    }
  }
  console.log(`${max}이 제일 많은 나이입니다.`)
}
// 함수 실행
getMax(ages);
getMax([30,27,34,22,27]);

// 함수 getMinValue(벨류는 매개값으로 배열) 제일 작은 값을 반환;

function getMinValue(param = []) {
  let min = 100; // 0을 하면 리저트의 값보다 작음
  for(i = 0; i < param.length; i++) {
    if(param[i] < min) {
      min = param[i];
    }
  } 
  return min; // return은 반환하다의미.
}
let result = getMinValue([20,27,17,30]);
result = getMinValue([17,28,40,38]);
console.log(`결과는 ${result}`);