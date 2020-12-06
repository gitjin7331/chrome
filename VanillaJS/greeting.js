const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "USER_LS",
SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
  event.preventDefault(); // 이벤트의 기본 동작을 중단한다. 
  // input(html)의 value 값을 가저올 수 있다. 
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null){
    askForName();
  } else{
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}
init();

/*
localStorage.getItem(키) : 로컬 스토리지에서 해당하는 값을 가져온다. 
localStorage.setItem(키,값) : 로컬 스토리지에 해당하는 키와 값을 저장한다. 
*/