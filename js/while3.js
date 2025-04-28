//while.js
//친구이름을 입력. => quit 종료

//화면 요소를 삭제하는 함수
function removeElement(parameter1) {
  console.dir(parameter1.target.parentElement.parentElement
  );
  parameter1.target.parentElement.parentElement.remove(); // 제거
}


// let name = 0;
// document.write('<table>');
// document.write("<tbody>");
// while(true) {
//   document.write('<tr>')
//   name = prompt("친구이름을 입력");
//   if(name === "quit") {
//     break;
//   }
//   document.write(`<td>${name}</td>`);
//   document.write("<td><button>삭제</button>,</td>")
//   document.write('</tr>');

// }
// document.write("</tbody>");
// document.write('</table>');

let str = "<table class='table'><tbody>"
let running =true;
while (running) {
  //사용자의 입력값을 받을 변수.
  let userValue = prompt("친구이름을 입력하세요");
  if (userValue == "quit") {
    running = false; // 종료조건
    // 코드의 실행흐름을 종료
    continue; //continue는 아래쪽 부분을 실행 안하고 윗쪽으로 다시 돌아간다.
  }
  str += `<tr><td>${userValue}</td>
  <td><button onclick ="removeElement(event)" class='btn-danger'>삭제</button></td>
  </tr>`;
} // end of while.
str += `</tbody></table>`;
console.log(str)
document.write(str);