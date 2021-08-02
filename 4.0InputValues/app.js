//const loginForm = document.getElementById("login-form");
//const loginForm = document.querySelector("#login-form");
//const loginInput = loginFrom.querySelector("input");
//const loginButton = loginForm.querySelector("button");

//const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    //console.dir(loginInput);
    //console.log("click!");
    console.log(loginInput.value);
    
}
//로그인 버튼 클릭 이벤트
loginButton.addEventListener("click",onLoginBtnClick);
