const loginForm = document.getElementById("loginForm");
const loginFormId = document.getElementById("loginFormId");
const loginFormIdInput = document.getElementById("loginFormIdInput");

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

const domain_select = () => {
  console.dir(emailDomainSelect.value);
  emailDomain.value = emailDomainSelect.value;
};

function handleForm() {
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

function handleEmailClick() {
  const loginFormEmailInput = document.querySelector(
    "#loginFormEmailInput"
  ).value;
  console.log(loginFormEmailInput);
  const exp = /^[a-z\d]{8,20}$/;
  // 정규식 만족여부 체크
  if (loginFormEmailInput.match(exp)) {
    console.log("정규식 만족");
    loginFormEmailInputInput.innerText = "좋아요";
  } else {
    console.log("정규식 만족하지 않음");
    loginFormEmailInputInput.innerText = "싫어요";
  }
}

function handlePwClick() {
  const loginFormPwInputInput =
    document.querySelector("#loginFormPwInput").value;
  console.log(loginFormPwInputInput);
  const exp = /^[a-z\d]{8,16}$/;
  // 정규식 만족여부 체크
  if (loginFormPwInputInput.match(exp)) {
    console.log("정규식 만족");
    loginFormPwInputText.innerText = "좋아요";
  } else {
    console.log("정규식 만족하지 않음");
    loginFormPwInputText.innerText = "싫어요";
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

loginFormPwInputBtn.addEventListener("click", handlePwClick);

loginFormEmailInputBtn.addEventListener("click", handleEmailClick);
loginFormIdInputBtn.addEventListener("click", handleForm);
