const login = document.querySelector(".login_form")
const loginBack = document.querySelector(".login_back")
const loginId = login.querySelector("#login_id")
const userName = document.querySelector(".user_name")
const header = document.querySelector('.headline') 
const NAME_KEY = "name";
const HIDDEN_CLASS = "hidden";

function loginHandler (event) {
    event.preventDefault();
    login.classList.add(HIDDEN_CLASS)
    loginBack.classList.add(HIDDEN_CLASS)
    const nameValue = loginId.value;
    localStorage.setItem(NAME_KEY,nameValue);
    paintHandler(nameValue)
}

function paintHandler (nameValue) {
    userName.innerText = nameValue
    header.innerText = `${nameValue}의 미니홈피 입니다.`
}

const savedName = localStorage.getItem(NAME_KEY);

if(savedName === null) {
    login.classList.remove(HIDDEN_CLASS)
    loginBack.classList.remove(HIDDEN_CLASS)
    login.addEventListener("submit", loginHandler )
} else {
    paintHandler(savedName)
}
