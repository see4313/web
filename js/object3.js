// object3.js
//indexOf() - 인덱스를 찾기위한 용도로 많이 사용, 위치하는 자리를 찾기위해서도 사용 

let numArr = [10, 21, 33, 53, 16, 72]
let result = numArr.indexOf(333); // -1은 찾느 요소가 없다는 의미
console.log(result);

let strAry = ["홍길동", "김길동", "홍미자"];
strAry.forEach(function(item) {
  if (item.indexOf("홍") == 0) { // 성씨가 "홍"씨인 사람.
    console.log(item);
  }
});

// numAry(변수) => 10~50 사이의 값을 10개 저장. => 콘솔에 출력(forEach);
let numAry = []; //변수선언
  for(i = 1; i <= 10; i++) {
   let no = Math.floor(Math.random() * 41) + 10
   numAry.push(no); // 배열에 추가
  }
  
//10~50 사이의 값이 정상적으로 생성체크 : every()
// let num = numAry.every(item => item >= 10 && item <= 50);
// console.log(num); //방법 1 (간략)

// result = numAry.every(function(item) {
//   return item >= 10 && item <= 50;
// }) //방법 2

result = numAry.every(function (item) {
  if(item >= 10 && item <= 50) {
    return true;
} else {
  return false;
}
  }) //방법3

numAry.forEach(function (item) {
    console.log(item);
  })

