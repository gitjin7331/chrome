const title = document.querySelector("#title"); 

const CLICKED_CLASS = "clicked"

function handleClick(){
  // toggle : 밑의 function이 해주는 일을 자동으로 해준다. 
  const hasClass = title.classList.toggle(CLICKED_CLASS);
}

function handleClick1(){ // toggle을 쓰면 간단함 
  const hasClass = title.classList.contains(CLICKED_CLASS)
  if (hasClass){
    title.classList.remove(CLICKED_CLASS)
  } else {
    title.classList.add(CLICKED_CLASS); 
  }
}

function init(){
  title.addEventListener("click", handleClick);
}
init();
