//object4.js
//filter() => 조건을 만족하는 요소를 새로운 배열로 생성.
 
let numAry = [20, 27, 33, 42, 19, 63, 52]
let filterAry = numAry.filter(function(item, idx, ary) {
  if(item % 2 == 0) {
  return true;
}
return false;     //return 을 안하면 undefiend => falsy;
});

console.log(filterAry);


////////// selary 가 5000이 넘는 사원들을 empAry에 저장.
console.log(json);
let data = JSON.parse(json);

  let empAry = data.filter(function (item) {
  if (item.salary >= 5000){
    console.log(item);
    return true;
} 
 return false;
})
console.log(empAry);
