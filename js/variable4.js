//variable4.js
//연산자(할당여산자 524p)

let num1 = "10";
num1 = num1 + "20"; //"1020"
num1 = num1 + "30"; //"102030"
console.log(num1);

num1 += "40"; // num1 = num1 + "40";

let num2 = 10; //number
num2 += 20;
num2 += 30; //+= 원래 연산자에다가 할달량을 주곗다

num2 = num2 -5; // =55
num2 -= 5; // 55-5 = 50

num2 = num2 * 2; // =100
num2 *= 2; // =200
num2 = 10203040;

//비교연산자.
console.log(num2 == num1); //동일. == 결과값만 보니까 T
console.log(num2 === num1); //다름. ===은 과정(타입)까지 보니까 F ("10203040-문자" , 10203040-숫자)

console.log(num2 != num1); // ==값만 비교
console.log(num2 !==num1); // ===값, 타입 비교

//논리연산자.
console.clear();
console.log(num1 >= num2 || num1 < 100);
console.log(num1 >= num2 && (!num1 < 100));