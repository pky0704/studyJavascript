//title 이름 바꾸기
document.title="ahahah";

// 변수 title에  id값이 title인 element를 가져와서 저장
//변수 title 에 텍스트 선언 
const title = document.getElementById("title");
title.innerText = " GOt yout!"; 

console.dir(title); //h1#title이 가지고 있는  속성(object을 볼수 있음 
console.log(title.id);
console.log(title.className);
////////////////////////////
const hellos = document.getElementsByClassName("hello");
//hellos호출
console.log(hellos);

const GetTagName = document.getElementsByTagName("h2");
console.log(GetTagName);
//자주사용함. 첫번째 값만 가져옴
const querySel = document.querySelector(".box h2");
console.log(querySel);
//모든 요소를 가져옴 
const querySelAll = document.querySelectorAll(".box h2");
console.log(querySelAll);

/////Event
//색상바꾸기
const first = document.querySelector("h1");
console.dir(first);
first.style.color = "pink";

function handleTitleClick(){
    console.log("title was clicked!!");
    first.style.color = "blue";
}
first.addEventListener("click", handleTitleClick);
//handleTitleClick(); //함수실행

function handleMouseEnter(){
    first.innerText = "Mouse is here!";
}
function handleMouseLeave(){
    first.innerText = "Mouse is gone!";
}

first.onclick = handleTitleClick;
first.addEventListener("mouseenter", handleMouseEnter);
first.addEventListener("mouseleave", handleMouseLeave);

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);

function handleWindowCopy(){
    alert("copier!");
}
window.addEventListener("copy", handleWindowCopy);//ctrl+c 동작시 발생하는 이벤트

function handleWindowOffline(){
    alert("SOS NO WIFI!")
}
function handleWindowOnline(){
    alert("WIFI ALL GOOD!")
}
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);//와이파이 동작 여부 이벤트