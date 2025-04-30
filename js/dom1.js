// dom1.js

// creatElement()-요소 만드는것, appendChild()-부모 자식요소를 만드는것, setAttribute(), querySelector()

/////////////////////////////
//이벤트.
document.querySelector(`#addBtn`)
.addEventListener('click', addCallback);

//삭제버튼들.
document.querySelectorAll('ul button').forEach(function(item){
  console.log(item);
  item.addEventListener('click', function() {
    item.parentElement.remove();  //요소 삭제.
  })
});

// li에 스타일.
document.querySelectorAll('li').forEach(item => {
  item.addEventListener('mouseover', function() {
    item.style.backgroundColor = "red";
  })
  item.addEventListener('mouseout', function () {
    item.style.backgroundColor = "";
  })
});


//콜백함수
function addCallback() {
    let fruit = document.getElementById('fruit').value;
    let price = document.querySelector('#price').value; //getElementById = querySelector

    // 입력값이 있는지 체크
    if(!fruit || !price) { // !는 not의 의미
      alert('값입력하세요.');
      return;  //함수의 실행 종료 
    }
  
    let newList = createLi(fruit,price);
    document.querySelector('ul').appendChild(newList);  //부모와 자식 관계형성
  
    // 입력값을 초기화.
    document.getElementById('fruit').value = "";
    document.querySelector('#price').value = 0;
  }
/////////////////////////////////////
//함수.
function createLi(fruitName, fruitPrice) {
  let li = document.createElement("li");  // <li/>
  // li.innerText = "Test"
  let sp1 = document.createElement("span")
  sp1.innerText = fruitName;
  let sp2 = document.createElement("span")
  sp2.innerText = fruitPrice + "원";
  let txt = document.createTextNode("  ");

  // 삭제버튼.
  let btn = document.createElement("button"); //<button id="delBtn" class= "btn btn-danger">삭제</button>
  btn.innerText = "삭제";
  // btn.setAttribute('class', 'btn brn-danger');  //속성추가
  btn.className = "btn btn-danger";
  btn.addEventListener('click', function (){
    btn.parentElement.remove();
  });  //클릭이벤트 등록
   
  li.addEventListener('mouseover', function(){
    li.style.backgroundColor= "red";
  })
  li.addEventListener('mouseout', function(){
    li.style.backgroundColor ="";
  })


  li.appendChild(sp1);   // appendChild는 순서가 중요. 먼저 쓰면 먼저 나옴.
  li.appendChild(txt); // "띄우기"
  li.appendChild(sp2);
  li.appendChild(btn);

  return li;  //<li/> 반환.
} // end of createLi().

 // 추가등록에도 마우스색상 들어가게하기 
 // 19장 실습& 읽어보기 
