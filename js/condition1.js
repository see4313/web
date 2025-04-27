//condition.js
let isTrue = true;
let num1 = 5;
let num2 = 10;

isTrue = 3 < 5;
isTrue = num1 < 5;
isTrue = --num1 < 5;
isTrue = --num1 <= 4 && num2++ == 10;
isTrue = ++num2 % 2; // true/false => truthy / falsy(0, "공백", null, undefied,NaN-낫어넘버)
console.log(num1, num2);

if (isTrue) {
//isTrue 의 참 => if블럭 실행.
console.log('참');
}else{
//isTrue 의 거짓 => else블럭 실행.
console.log('거짓');
}