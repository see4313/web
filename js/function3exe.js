// fuction3exe.js
// 1.함수의 이름은 max(10, 7) => "두 숫자중에서 큰값은 10입니다."


function max(num1, num2) {
  if(num1 > num2) {
    console.log(`두 숫자중에서 큰 값은 ${num1}입니다.`);
  } else if (num2 > num1) {
    console.log(`두 숫자중에서 큰 값은 ${num2}입니다.`);
  } else {
    console.log(`두 숫자가 같습니다.`);
  }
}

max(10, 7);

// 2. sumUpto(7) => "1부터 7까지의 합은 28입니다."

function sumUpto(num3) {
  let sum = 0;
  for(let i = 1; i <= num3; i++) {
    sum += i;
  }
  console.log(`1부터 ${num3}까지의 합은 ${sum}입니다.`);
}

sumUpto(7);
// 3. diff(34, 17) => "두 수의 차는 17입니다."


function diff(num3, num4) {
  let sum = 0;
  if(num3 >= num4) {
   sum = num3 - num4;
  }
  // else if(num4 > num3){
  //   sum = num4 -num3;
  // }
  else{
    sum = num4 - num3;
  }
  console.log(`두 수의 차는 ${sum}입니다.`)
}
diff(34, 17);


