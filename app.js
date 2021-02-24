const textarea = document.querySelector("textarea");
const count = document.querySelector(".count");

function countLetters() {
  const text = textarea.value;
  const textLength = textarea.value.length;
  count.innerText = textLength;
}

document.querySelector(".btn").addEventListener("click", counterReset);

function counterReset() {
  document.getElementById("counter").textContent = "0";
  document.getElementById("myText").value = "";
}

counterReset();
