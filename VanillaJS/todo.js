const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"), 
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event){
  // event의 부모에 대한 정보를 얻을 수 있다.console.log(event.target.parentNode);
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  // list에 있는 모든 item을 휘한 함수를 실행시킨다.
  // filter 와 forEach의 차이는 뭘까?? 
  const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id); // parseInt : 인트형으로 형변환.
  }); // 중요!!!
  console.log(cleanToDos);
  toDos = cleanToDos; // toDos를 바꾸기 위해서는 let 형이어야함.
  saveToDos(); 
}

function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text + " ";
  li.appendChild(span);
  li.appendChild(document.createTextNode('\u0009')) // \u0009 : 유니코드 탭 
  li.appendChild(delBtn); 
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

// localStorage에 기록이 있다면 불러온다. 
function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null){
    // object 형식으로 바꿔준다.
    const parsedToDos = JSON.parse(loadedToDos);
    // forEach : array에 있는 것을 한번씩 실행해준다.
    parsedToDos.forEach(function(toDo){ // 중요!!!
      paintToDo(toDo.text);
    });
  }
}

function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
