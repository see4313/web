//function5.js
let names = ["홍길동", "박춘식", "김민수", "이춘삼"];

let search = prompt("검색할 이름 입력: ");
let i = 0;
let exists = false; // 존재여부를 확인

while (true) {
  if(i < names.length) {
  } else {
    break;
  }

  if (search == names[i++]) { // 찾는 친구의 이름이 존재하는 경우.
    exists = true;
    break;
  }
} // end of while.
if(exists) {
  alert("있음");
} else{
  alert("없음");
}


// for (let i = 0; i < names.length; i++) {
//   if (search == names[i]) {
//     alert(`있음`);

//   } else {
//     alert(`없음`);
//   }
// };