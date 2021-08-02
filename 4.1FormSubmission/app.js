//const loginForm = document.getElementById("login-form");
//const loginForm = document.querySelector("#login-form");
//const loginInput = loginFrom.querySelector("input");
//const loginButton = loginForm.querySelector("button");

//const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

//유효성 검사
function onLoginBtnClick(){
    const username = loginInput.value;
    if(username === ""){
        alert("please write your name")
    }else if(username.length > 15){
        alert("your name is long!")
    }
}
//로그인 버튼 클릭 이벤트
loginButton.addEventListener("click",onLoginBtnClick);
