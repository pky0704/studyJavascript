// ������ ������ ���� �迭�� ���󿡼� �����;� �մϴ�.
const colorNum =["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("#title");
// ������ �ؽ�Ʈ�� ���콺�� ���� ���� ���� �� ����Ǿ�� �մϴ�.
function handleMouseEnter(){
    title.innerText = "The mouse is here!";
    title.style.color=colorNum[0];
}

// ������ �ؽ�Ʈ�� ���콺�� ���� �� ����Ǿ�� �մϴ�.
function handleMouseLeave(){
    title.innerText = "The mouse is gone!";
    title.style.color=colorNum[1];
}


// â ũ�Ⱑ �����Ǹ� ������ ����Ǿ�� �մϴ�.
function handleWindowResize(){
    title.innerText = "You just resized!";
    title.style.color=colorNum[2];
}

// ���콺 ������ ��ư�� Ŭ���ϸ� ���� ����Ǿ�� �մϴ�.
function handleRightClick(){
    title.innerText = "That was a right click!";
    title.style.color = colorNum[3];
}
//��� �Լ� �ڵ鷯�� "superEventHandler"�� ���ο� �־�� �մϴ�.
function superEventHandler(){
    title.addEventListener("mouseenter", handleMouseEnter);
    title.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("auxclick", handleRightClick);
}
superEventHandler();