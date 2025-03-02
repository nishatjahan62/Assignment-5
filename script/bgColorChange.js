const colors = [
  "#f7b7a3",
  "#a0d1d1",
  "#f2d7f3",
  "#f8e1a1",
  "#f6e6b2",
  "#ffe1e1",
  "#d0f1f1",
  "#d2a9e3",
  "#c6f0c1",
];
let i = 0;
document.getElementById("theme-btn").addEventListener("click", function () {
  document.body.style.backgroundColor = colors[i];
  i = i + 1;
});
