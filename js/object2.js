//object2.js
// 배열내장객체 : new Array() 또는 []
// 관련메소드 : push, pop, unshift, shift => forEach(메소드)- 함수(기능)가 매개값으로 온다

let arr1 = [10, 20, 30]; // = new Array(); 
arr1[3] = 40;
arr1.push(50) // push는 제일 뒤에 메소드 추가하는 기능 <=> for앞에서부터 추가 
arr1.unshift(60);
// 60, 10, 20, 30, 40,50
arr1.pop(); // 60, 10,20,30,40
arr1.pop(); // 60, 10,20,30 
arr1.shift(); // 10,20,30
// 10 (15) 20 30 -> 15를 추가하기위해 splice(추가, 삭제, 수정 가능)사용
arr1.splice(1, 0, 15,16,17); // b자리에 0(대체하지 않겠다-그래야 추가됨/)해야 뒤에서부터 생성, 1은 대체해서 사라지고 그자리에 생김

// every, some - 정상적으로 생성된건지 확인하는 게 every(전부다 true에충족해야된다), some() 이다
let result = arr1.some(item => item % 2 == 1);
console.log(result);


arr1.forEach(function (item, idx, ary) { //이름이 없는 함수는 익명함수
  console.log(item, idx); // a는 배열의 요소가리킴, b는 index , c는 배열 자신 -> 이름을 적는것과는 별개로 순서가 중요
});

console.log(arr1);
