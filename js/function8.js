//function8.js
// 1. JSON.parse vs. JSON stringify (stringify 객체를 문자로 변환)

console.log(json); // 문자열.
let data = JSON.parse(json); // json문자열을 객체로 변환. (parse=해석해서)
console.log(data); // 객체.

//button<삭제> 템플릿.
let btnTemplate = "<button calss='btn btn-danger' onclick ='deleteTr(event)'>삭제</button>";

console.clear(); //로그 지우기.

//속성을 정의. , 함수안에서 선언된 변수는 함수 안에서만 사용.
let fields = ['id', 'first_name', 'gender', 'salary'];

// 사원목록(table형식)을 출력.
let elist = "<table class='table'><thead><tr>";
for(let field of fields) {
  elist +=`<th>${field}</th>`;
}
elist += `<th>삭제</th>`
elist +="</tr></thead><tbody>";

for (let emp of data) { // = let(let i=0; i<data.length; i++)
  // console.log(emp);
  elist += makeTr(emp);
}
elist += "</tbody></table>";
document.write(elist);

////////////////////////////////////
///////////////// 이벤트..

// 1.버튼을 클릭하는 이벤트 - 'click';
document.querySelector('button#searchBtn').addEventListener('click', function () {
  // 입력값
  let searchValue = document.querySelector(`#userValue`).value;
  let list = "";
  for(let emp of data) {
    if (searchValue == 'All' || searchValue == emp.gender) {
      list += makeTr(emp); 
    } 
  } 
document.querySelector('table.table>tbody').innerHTML = list;
   });

// 2. 값을 선택하는 이벤트 - select "change"; 
document.querySelector('select#selectGender').addEventListener('change', function () {
  let changeValue = document.querySelector('#selecGender').value;
  let list = "";
  for (let emp of data) {
    if (searchValue == 'All' || searchValue == emp.gender) {
      list += makeTr(emp);
    }
  }
  document.querySelector('table.table>tbody').innerHTML = list;
});





// tr을 생성하는 함수.
function makeTr(emp = {}) {
  let str = "<tr>";
  
  for (let field of fields) {
    // console.log(emp[field]); //emp['id'] == emp.id
    str +=`<td>${emp[field]}</td>`;
  }
  str += `<td>${btnTemplate}</td>`; 
  str +="</tr>";
  return str;
} //end of makeTr.



 console.log(makeTr({id:12, first_name:"kildong", email: "kildong@email.com"}));

