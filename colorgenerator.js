let randomcolor = function () {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red},${green},${blue})`;
  return color;
};
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let abc = randomcolor();
  let h1 = document.querySelector("h1");
  h1.innerText = abc;
  document.querySelector("div").style.backgroundColor = abc;
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function () {
  box.style.backgroundColor = "red";
});
box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "white";
});
box.addEventListener("click", function () {
  alert("you can't exit");
});
