//title �̸� �ٲٱ�
document.title="ahahah";

// ���� title��  id���� title�� element�� �����ͼ� ����
//���� title �� �ؽ�Ʈ ���� 
const title = document.getElementById("title");
title.innerText = " GOt yout!"; 

console.dir(title); //h1#title�� ������ �ִ�  �Ӽ�(object�� ���� ���� 
console.log(title.id);
console.log(title.className);
////////////////////////////
const hellos = document.getElementsByClassName("hello");
//hellosȣ��
console.log(hellos);

const GetTagName = document.getElementsByTagName("h2");
console.log(GetTagName);
//���ֻ����. ù��° ���� ������
const querySel = document.querySelector(".box h2");
console.log(querySel);
//��� ��Ҹ� ������ 
const querySelAll = document.querySelectorAll(".box h2");
console.log(querySelAll);

/////Event
//����ٲٱ�
const first = document.querySelector("h1");
console.dir(first);
first.style.color = "pink";

function handleTitleClick(){
    console.log("title was clicked!!");
    first.style.color = "blue";
}
first.addEventListener("click", handleTitleClick);
//handleTitleClick(); //�Լ�����

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
window.addEventListener("copy", handleWindowCopy);//ctrl+c ���۽� �߻��ϴ� �̺�Ʈ

function handleWindowOffline(){
    alert("SOS NO WIFI!")
}
function handleWindowOnline(){
    alert("WIFI ALL GOOD!")
}
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);//�������� ���� ���� �̺�Ʈ