/*
let(block-scoped) : 재할당 가능, 재선언 불가능
const(block-scoped) : 재할당 불가능, 재선언 불가능
var(function-scoped) : 재할당 가능, 재선언 가능

일반적으로 무조건 const를 사용하고 필요한 경우에만 let을 사용한다. 
{} : 객체나 function을 만들 때 사용한다. 
*/
const jyjInfo = { // 안에 있는 변수는 바꿀수 있음.
  name:"Jin",
  age:25,
  gender:"Male",
  isHandsome:true,
  favMovies: ["LOTG", "oldboy", "Avengerse"],
  favFood: [
    {
      name: "Pizza",
      fatty: false
    },
    {
      name: "Chicken",
      fatty: false
    }
  ]
}
console.log(jyjInfo)

function sayHello(name, age){
  return `Hello ${name} you are ${age} years old`
}

hellojyj = sayHello("jyj", 15)

console.log(hellojyj)

const calculator = {
  plus: function(a, b){
    return a + b;
  },
  minus: function(a, b){
    return a - b;
  },
  divide: function(a, b){
    return a / b;
  },
  multiply: function(a, b){
    return a * b;
  },
  squareRoot: function(a){
    return  a ** 0.5;
  },
  square: function(a, b){
    return a ** b;
  }
}

const calcul = calculator.square(2,3)
console.log(calcul)


// DOM(Document Object Model) : XML이나 HTML 문서에 접근하기 위한 일종의 인터페이스
// dir : DOM 객체의 메소드를 보고 싶을 때 사용
const title = document.getElementById("title")
title.innerHTML = "Hi! JavaScript";
title.style.color = "red";
document.title = "I own you now"
console.dir(title)


const title = document.querySelector("#title"); // *

function handleResize(event){
  if(title.style.color === "red"){
    title.style.color = "blue";
  } else {
    title.style.color = "red";
  }
}

// 함수이름() : 즉시 호출한다.
// 함수이름 : 이벤트 발생 시에 호출한다. 즉, 바로 실행x 
window.addEventListener("click", handleResize);

const title = document.querySelector("#title"); 

const BASE_COLOR = 'rgb(244, 238, 255)';
const OTHER_COLOR = 'rgb(66, 72, 116)';

function handleClick(){
  const currentColor = title.style.color;
  if(currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init(){
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}

init();
