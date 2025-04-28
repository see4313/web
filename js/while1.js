// while1.js
// 1~10 까지의 값중에서 홀수값만 콘솔에 출력(for문)

// for(let i = 1; i <= 10; i++){
//   if(i % 2 == 1){
//       console.log(i);
//   }
// }

// 반복횟수와는 상관없이 조건을 만족할 동안만 반복.
// let no = 1;
// while(true) {
//   if(no % 2) {
//   console.log(no);
// }
// no++; //증감순서를 먼저 해주던지 아니면 if의 > 10 말고 >= 10을 해줘도 된다
// if(no > 10){
//   break; //반복종료
// }
// }

// 임의의 값(0~100) 값을 생성하다가 50보다 작은 값이 반복종료
let running = true;
while(running) {
let num = Math.floor(Math.random() * 101); //0은 포함을 하고 101은 포함 안됨 => 0~100까지
console.log(num);

if(num == 100) {
  // break;
  running = false;
}
}
console.log("end of prog.");