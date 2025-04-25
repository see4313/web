//variable2.js
let num1 = 100; //int num1;
num1 = "hundred";
console.log(typeof num1);

let num_2 = 200; //변수는 맨앞자리는 영어 숫자는 오류
let nameOfFreiend = "홍길동";

let birthOfDate = new Date(); // O vs. o 대소문자 구분해서 씀, 단어 첫글자 대문자
console.log(typeof birthOfDate);

let isOK = true;
isOK = 10 < 5; //false.
isOK = 10 > 5; //true.

if (isOK) {
  //isOK 값이 true일 경우 {} 블럭을 실행.
  console.log('isOK는 참입니다.');
}

//배열: [100, 200, 250] 여러개의 값을 저장.
let numAry = [10, 20, 25, 31]; //인텍스는 0부터 시작.
console.log(numAry[0]);

let strAry = ["Hello", "Nice", "Good", 300]; //숫자와 문자를 같이쓴는게 가능은 하지만 안쓰도록 합니다.2025.04.25

//객체(object). 키: 값의 형태로 정보를 저장.
let person = {
  name: "홍길동",
  age: 20,
  height: 168.9,
  weight: 65.3,
  perosnInfo: function() { // 함수는 기능. 
    console.log('이름은 ' + person.name + '이고 나이는 ' + person.age);
  }
}
person.perosnInfo(); // person이란는 메소드를 호출하는거(call)


console.log(person.name); // .은 속성을 선택할 수 있음

//undefied(선언만 되어있는 상태), null(정체가 모호한 값)
let whatIsThis;
whatIsThis = document.querySelector('#userValu');
// console.log(whatIsThis) // null 상태
console.log(typeof whatIsThis); //