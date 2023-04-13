// const emailInput = document.querySelector("#emailInput");
// 이메일 입력칸
const emailSubmit = document.querySelector("#emailSubmit");
// 이메일 버튼
const result = document.querySelector("#result");
// 결과값 출력

const email_check = (event) => {
  event.preventDefault();
  const emailInput = document.getElementById("emailInput").value;
  const exp = /^[a-z\d]{8,16}$/;
  // 정규식 만족여부 체크
  if (emailInput.match(exp)) {
    result.innerHTML = "사용가능한 이메일입니다.";
    result.style.color = "green";
  } else {
    result.innerHTML = "소문자, 숫자 필수 8~16자 이내로 입력해주세요";
    result.style.color = "red";
  }
};
emailInput.addEventListener("blur", email_check);
