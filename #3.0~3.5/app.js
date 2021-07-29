// 제목의 색상은 색상 배열의 색상에서 가져와야 합니다.
const colorNum =["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("#title");
// 제목의 텍스트는 마우스가 제목 위에 있을 때 변경되어야 합니다.
function handleMouseEnter(){
    title.innerText = "The mouse is here!";
    title.style.color=colorNum[0];
}

// 제목의 텍스트는 마우스가 떠날 때 변경되어야 합니다.
function handleMouseLeave(){
    title.innerText = "The mouse is gone!";
    title.style.color=colorNum[1];
}


// 창 크기가 조정되면 제목이 변경되어야 합니다.
function handleWindowResize(){
    title.innerText = "You just resized!";
    title.style.color=colorNum[2];
}

// 마우스 오른쪽 버튼을 클릭하면 제목도 변경되어야 합니다.
function handleRightClick(){
    title.innerText = "That was a right click!";
    title.style.color = colorNum[3];
}
//모든 함수 핸들러는 "superEventHandler"의 내부에 있어야 합니다.
function superEventHandler(){
    title.addEventListener("mouseenter", handleMouseEnter);
    title.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("auxclick", handleRightClick);
}
superEventHandler();