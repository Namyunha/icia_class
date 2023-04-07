const snowflakeCount = 50; // 눈송이 개수
const snowflakeSize = 20; // 눈송이 크기
const snowflakeSpeed = 10; // 눈송이 속도

for (let i = 0; i < snowflakeCount; i++) {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.innerHTML = "❄";
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * snowflakeSpeed + 1}s`;
  snowflake.style.fontSize = `${Math.random() * snowflakeSize + 10}px`;
  document.body.appendChild(snowflake);
}
