const buttons = document.querySelectorAll(".btn");

function fun() {
  console.log(btn);
}

// 각 버튼들에 클릭 이벤트를 추가합니다.
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.value; // 클릭된 버튼의 값(value)을 가져옵니다.
    // TODO: 클릭된 버튼의 값(value)에 따라 계산기의 동작을 구현합니다.
    // 예시: 클릭된 버튼의 값(value)을 콘솔에 출력합니다.
    console.log(value);
  });
});
