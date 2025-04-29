//fuction6.js
// 배열 + object(객체)
let num = 10;

let obj = {
  name: "홍길동",
  age: 20,
  phone: "010-0000-0000",
  pets: [{
    name:'야옹이',
    age: 2,
    검진일: ['2025-01-04', '2025-04-03']
  },{
    name: '멍멍이',
    age: 3,
    검진일:['2025-04-29']
  }]
}; // new Object(); - 객체를 생성하겠다는 의미


console.log(obj.pets[1].검진일[0]);

// 배열 + object
let friends = [
{name: "홍길동", age: 20, phone: "010-0000-0000"},
{name: "김민식", age: 22, phone: "010-3344-3456"},
{name: "이춘삼", age: 25, phone: "010-3457-7897"}
];
let max = 0;
for (let i = 0; i < friends.length; i++) {
  if(max< friends[i].age) {
    max = friends[i].age;
  }
}
console.log(max);


