const loginForm = document.getElementById("loginForm");
const loginFormId = document.getElementById("loginFormId");
const loginFormIdInput = document.getElementById("loginFormIdInput");

const loginFormEmail = document.getElementById("loginFormEmail");
const loginFormEmailInput = document.getElementById("loginFormEmailInput");
const loginFormPw = document.getElementById("loginFormPw");
const loginFormPwInput = document.getElementById("loginFormPwInput");
const idResult = document.querySelector(".loginFormIdInput_input");

function handleForm(event) {
  event.preventDefault();
  if (loginFormIdInput.value.length == 0) {
    idResult.innerText = "8~20자로 입력해주세요";
  } else if (
    loginFormIdInput.value.length >= 8 &&
    loginFormIdInput.value.length <= 20
  ) {
    idResult.innerText = "좋습니다";
  } else if (loginFormIdInput.value.length > 20) {
    idResult.innerText = "8~20자로 입력해주세요";
  }
}
function handleForm(event) {
  event.preventDefault();
  if (
    loginFormIdInput.value.length == 0 ||
    loginFormEmailInput.value.length == 0 ||
    loginFormPwInput.value.length == 0
  ) {
    idResult.innerText = "8~20자로 입력해주세요";
  }
}

loginForm.addEventListener("submit", handleForm);
