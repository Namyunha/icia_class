const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");

const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

const bonobono = document.querySelector("img");
const id1 = document.querySelector("#id1");
const id2 = document.querySelector("#id2");

function fun1() {
  console.log(h2);
}
function fun2() {
  alert(h3.innerHTML);
}

function fun3() {
  id1.innerText = `${h2.innerText} and ${h3.innerText}`;
  id1.classList.toggle("hidden");
}

function fun4() {
  bonobono.classList.add("slide");
  bonobono.classList.toggle("hidden");
}

function fun5() {
  const ul = document.createElement("ul");
  for (i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.innerHTML = i;
    ul.appendChild(li);
    id2.appendChild(ul);
  }
}

btn1.addEventListener("click", fun1);
btn2.addEventListener("click", fun2);
btn3.addEventListener("click", fun3);
btn4.addEventListener("click", fun4);
btn5.addEventListener("click", fun5);
