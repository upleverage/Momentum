const LoginForm = document.querySelector('#login-form');
const LoginInput = document.querySelector('#login-form input');
const greetings = document.querySelector('#greetings');

// 변수 지정
const HIDDEN_CLASSNAME = 'hidden';
const USER_NAME = 'username';

function onLoginSubmit(event) {
   event.preventDefault();
   LoginForm.classList.add(HIDDEN_CLASSNAME);
   const username = LoginInput.value;
   localStorage.setItem(USER_NAME, username);
   PaintGreetings(username);
}

LoginForm.addEventListener('submit', onLoginSubmit);

function PaintGreetings(username) {
   greetings.innerText = `${username}님, 안녕하세요!`;
   greetings.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USER_NAME);

if (savedUsername === null) {
   LoginForm.classList.remove(HIDDEN_CLASSNAME);
   LoginForm.addEventListener('submit', onLoginSubmit);
} else {
   PaintGreetings(savedUsername);
}