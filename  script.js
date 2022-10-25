const h3 = document.querySelector("h3");
const colorRight = document.querySelector(".colorRight");
const colorLeft = document.querySelector(".colorLeft");
const body = document.querySelector("body")

function linearGradient() {
  body.style.background = `linear-gradient(to right, ${colorLeft.value}, ${colorRight.value})`
  h3.textContent = body.style.background + ";"
}

colorRight.addEventListener("input", linearGradient)
colorLeft.addEventListener("input", linearGradient)
