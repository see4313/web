//object1.js
// 객체지향(자바) + 함수: 컴파일, 함수기반(자바스크립트) + 객체: 인터프리터(따로 컴파일할 필요 없음).

// this의 정의 : 1. 객체(객체를 가리킴). 2. 함수(window 객체) 3. 이벤트(대상)
function sum() {
  console.log(this);
}
sum();   //함수호출.

// 객체: this => 자기자신 
let obj = {
  name: "홍길동",
  age: 20,
  showName: function () {
    console.log(this);
    return `이름은 ${this.name}입니다.` // this는 객체를 가르치는 것
  },
  setName (name) { //setNmae = function(name)
    this.name = name;
  }
}
obj.setName("김길동");
let result = obj.showName();
console.log(result);

//class 생성
class Person {
  //namee, age: 속성
  //showName(), setName(): 메소드
  constructor(name, age) { //생성자(constructor).
    this.name = name;
    this.age = age;
  }
  //메소드
  showName() {
    return `이름은 ${this.name}입니다.`;
  }
  setName(name) {
    this.name = this.name;
  }
  showAge () {
    return `나이는 ${this.age} 입니다.`;
  }
  setAge (age) {
    this.age = age;
  }
}
 let choi = new Person("최민식, 22"); //인스턴스 생성한다라는 의미
 choi.setName("최민수"); // ()의 값을 바꿔주는 -위에 규칙을 만들어놔서 가능
 console.log (choi.showName());

 choi.setAge(38);
 console.log(choi.showAge());
 let park = new Person("박충식", 30); //인스턴스 생성 (여러개의 인스턴스를 생성할때는 위의 방식보다 new 방식 선호, 위의 방식은 객체를 하나 하나 만들어 줘야함)
