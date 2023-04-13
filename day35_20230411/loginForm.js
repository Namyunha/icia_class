const loginForm = document.getElementById("loginForm");
const loginFormId = document.getElementById("loginFormId");

const loginFormIdInput_input = document.querySelector(
  ".loginFormIdInput_input"
);
const loginFormEmail = document.getElementById("loginFormEmail");
const loginFormIdInputBtn = document.getElementById("loginFormIdInput_btn");

const loginFormPw = document.getElementById("loginFormPw");
const loginFormPwInput = document.getElementById("loginFormPwInput");
const idResult = document.querySelector(".loginFormIdInput_input");
// email
const loginFormEmailInputBtn = document.querySelector(
  "#loginFormEmailInput_btn"
);

const loginFormEmailInputInput = document.querySelector(
  ".loginFormEmailInput_input"
);

const emailDomain = document.querySelector("#email-domain");

// pw
const loginFormPwInputBtn = document.querySelector("#loginFormPwInput_btn");
const loginFormPwInputText = document.querySelector(".loginFormPwInput_input");
const emailDomainSelect = document.querySelector("#email-domain-select");
const checkFormPwInputBtn = document.querySelector("#checkFormPwInput_btn");

// phone
let receiveValidate = document.querySelector("#receive_validate");
const loginFormPhoneInputBtn = document.querySelector(
  "#loginFormPhoneInput_btn"
);
let checkPhoneInput = document.querySelector("#checkPhoneInput");

const checkPhoneBtn = document.querySelector("#checkPhone_btn");

let carrier = document.querySelector("#carrier");

// 성별div
const Gender = document.querySelector("#Gender");

const domain_select = () => {
  console.dir(emailDomainSelect.value);
  emailDomain.value = emailDomainSelect.value;
};

function handleForm() {
  const loginFormIdInput = document.getElementById("loginFormIdInput").value;
  console.log(loginFormIdInput);
  const exp = /^[a-z\d]{8,20}$/;
  // 정규식 만족여부 체크
  if (loginFormIdInput.match(exp)) {
    idResult.innerText = "사용가능한 이메일입니다.";
    idResult.style.color = "green";
  } else {
    idResult.innerText = "영소문자,숫자 포함 8 ~ 20자리";
    idResult.style.color = "red";
  }
}
function handleEmailClick() {
  const loginFormEmailInput = document.querySelector(
    "#loginFormEmailInput"
  ).value;
  console.log(loginFormEmailInput);
  const exp = /^[a-z\d]{8,20}$/;
  // 정규식 만족여부 체크
  if (loginFormEmailInput.match(exp)) {
    loginFormEmailInputInput.innerText = "사용가능한 이메일입니다.";
    loginFormEmailInputInput.style.color = "green";
  } else {
    loginFormEmailInputInput.innerText = "영소문자,숫자 포함 8 ~ 20자리";
    loginFormEmailInputInput.style.color = "red";
  }
}
function handlePwClick() {
  const loginFormPwInputInput =
    document.querySelector("#loginFormPwInput").value;
  console.log(loginFormPwInputInput);
  const exp = /^[a-z\d]{8,16}$/;
  // 정규식 만족여부 체크
  if (loginFormPwInputInput.match(exp)) {
    loginFormPwInputText.innerText = "사용가능한 비밀번호입니다.";
    loginFormPwInputText.style.color = "green";
  } else {
    loginFormPwInputText.innerText = "영소문자,숫자 포함 8 ~ 16자리";
    loginFormPwInputText.style.color = "red";
  }
}
function reCheck() {
  const loginFormPwInputInput =
    document.querySelector("#loginFormPwInput").value;
  const checkPwInput = document.querySelector("#checkPwInput").value;
  const checkFormPwInput = document.querySelector(".checkFormPwInput");
  if (loginFormPwInputInput == checkPwInput) {
    checkFormPwInput.innerText = "비밀번호가 일치합니다.";
    checkFormPwInput.style.color = "green";
  } else {
    checkFormPwInput.innerText = "비밀번호가 일치하지않습니다.";
    checkFormPwInput.style.color = "red";
  }
}
function sample6_execDaumPostcode() {
  new daum.Postcode({
    oncomplete: function (data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
      // 각 주소의 노출 규칙에 따라 주소를 조합한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      var addr = ""; // 주소 변수
      var extraAddr = ""; // 참고항목 변수

      //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === "R") {
        // 사용자가 도로명 주소를 선택했을 경우
        addr = data.roadAddress;
      } else {
        // 사용자가 지번 주소를 선택했을 경우(J)
        addr = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
      if (data.userSelectedType === "R") {
        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
          extraAddr += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== "" && data.apartment === "Y") {
          extraAddr +=
            extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraAddr !== "") {
          extraAddr = " (" + extraAddr + ")";
        }
        // 조합된 참고항목을 해당 필드에 넣는다.
        document.getElementById("sample6_extraAddress").value = extraAddr;
      } else {
        document.getElementById("sample6_extraAddress").value = "";
      }

      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      document.getElementById("sample6_postcode").value = data.zonecode;
      document.getElementById("sample6_address").value = addr;
      // 커서를 상세주소 필드로 이동한다.
      document.getElementById("sample6_detailAddress").focus();
    },
  }).open();
}
let number;

// function phoneBtnClick() {
//   const checkPhoneInput = document.querySelector("#checkPhoneInput").value;
//   number = Math.floor(1111111 * Math.random());
//   const phoneResult = document.querySelector("#phone_result");
//   const exp = /^\d{3}-\d{4}-\d{4}$/;
//   // 정규식 만족여부 체크
//   if (checkPhoneInput.match(exp)) {
//     phoneResult.innerText = "인증번호발송";
//     phoneResult.style.color = "green";
//     phoneResult.style.margin = "10px";
//     receiveValidate.disabled = false;
//     checkPhoneBtn.disabled = false;
//     checkPhoneBtn.addEventListener("click", validateCheck);
//     alert(number);
//   } else {
//     phoneResult.innerText = "올바른 연락처를 입력해주세요";
//     phoneResult.style.color = "red";
//     phoneResult.style.margin = "10px";
//   }
// }

function phoneBtnClick() {
  const checkPhoneInput = document.querySelector("#checkPhoneInput").value;
  number = Math.floor(1111111 * Math.random());
  const phoneResult = document.querySelector("#phone_result");
  const exp = /^\d{3}-\d{4}-\d{4}$/;
  // 정규식 만족여부 체크
  if (checkPhoneInput.match(exp)) {
    phoneResult.innerText = "인증번호를 입력해주세요";
    phoneResult.style.color = "green";
    phoneResult.style.margin = "10px";
    receiveValidate.disabled = false;
    checkPhoneBtn.disabled = false;
    checkPhoneBtn.addEventListener("click", validateCheck);
    alert(number);
  } else {
    phoneResult.innerText = "올바른 연락처를 입력해주세요";
    phoneResult.style.color = "red";
    phoneResult.style.margin = "10px";
  }
}

function validateCheck() {
  const validateResult = document.querySelector("#validate_result");
  if (number == Number(receiveValidate.value)) {
    validateResult.innerHTML = "인증에 성공하셨습니다.";
    validateResult.style.color = "green";
  } else {
    validateResult.innerHTML = "인증에 실패하셨습니다.";
    validateResult.style.color = "red";
  }
  console.log(typeof number);
  console.log(typeof Number(receiveValidate.value));
}

loginFormPwInputBtn.addEventListener("click", handlePwClick);
loginFormEmailInputBtn.addEventListener("click", handleEmailClick);
loginFormIdInputBtn.addEventListener("click", handleForm);
checkFormPwInputBtn.addEventListener("click", reCheck);
loginFormPhoneInputBtn.addEventListener("click", phoneBtnClick);
