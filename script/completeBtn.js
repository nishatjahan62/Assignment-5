// Button-1
document.getElementById("btn1").addEventListener("click", function () {
  //   button disable**
  const disableBtn = document.getElementById("btn1");
  disableBtn.disabled = true;
  disableBtn.textContent = "Completed";
  disableBtn.classList.add("opacity-20");

  //   Alert when click the button
  alert("Board Updated Successfully");

  //   increase and decrease Number
  changeNumber();

  // showing the note Card in the side bar
  document.getElementById("card-1-msg").style.display = "block";

  // dynamic time of massage appearing
  const currentTime = new Date().toLocaleTimeString();

  document.getElementById("msg-1-time").textContent = currentTime;

  finalAlert();
});

// Button-2
document.getElementById("btn2").addEventListener("click", function () {
  //   button disable**
  const disableBtn = document.getElementById("btn2");
  disableBtn.disabled = true;
  disableBtn.textContent = "Completed";
  disableBtn.classList.add("opacity-20");

  //   Alert when click the button
  alert("Board Updated Successfully");

  //   increase and decrease Number
  changeNumber();

  // showing the note Card in the side bar
  document.getElementById("card-2-msg").style.display = "block";

  // dynamic time of massage appearing
  const currentTime = new Date().toLocaleTimeString();
  document.getElementById("msg-2-time").textContent = currentTime;

  finalAlert();
});

// Button-3
document.getElementById("btn3").addEventListener("click", function () {
  //   button disable**
  const disableBtn = document.getElementById("btn3");
  disableBtn.disabled = true;
  disableBtn.textContent = "Completed";
  disableBtn.classList.add("opacity-20");

  //   Alert when click the button
  alert("Board Updated Successfully");

  //   increase and decrease Number
  changeNumber();

  // showing the note Card in the side bar
  document.getElementById("card-3-msg").style.display = "block";

  // dynamic time of massage appearing
  const currentTime = new Date().toLocaleTimeString();
  document.getElementById("msg-3-time").textContent = currentTime;

  finalAlert();
});

// Button-4
document.getElementById("btn4").addEventListener("click", function () {
  //   button disable**
  const disableBtn = document.getElementById("btn4");
  disableBtn.disabled = true;
  disableBtn.textContent = "Completed";
  disableBtn.classList.add("opacity-20");

  //   Alert when click the button
  alert("Board Updated Successfully");

  //   increase and decrease Number
  changeNumber();

  // showing the note Card in the side bar
  document.getElementById("card-4-msg").style.display = "block";

  // dynamic time of massage appearing
  const currentTime = new Date().toLocaleTimeString();
  document.getElementById("msg-4-time").textContent = currentTime;

  finalAlert();
});

// Button-5
document.getElementById("btn5").addEventListener("click", function () {
  //   button disable**
  const disableBtn = document.getElementById("btn5");
  disableBtn.disabled = true;
  disableBtn.textContent = "Completed";
  disableBtn.classList.add("opacity-20");

  //   Alert when click the button
  alert("Board Updated Successfully");

  //   increase and decrease Number
  changeNumber();

  // showing the note Card in the side bar
  document.getElementById("card-5-msg").style.display = "block";

  // dynamic time of massage appearing
  const currentTime = new Date().toLocaleTimeString();
  document.getElementById("msg-5-time").textContent = currentTime;

  finalAlert();
});

// Button-6
document.getElementById("btn6").addEventListener("click", function () {
  //   button disable**
  const disableBtn = document.getElementById("btn6");
  disableBtn.disabled = true;
  disableBtn.textContent = "Completed";
  disableBtn.classList.add("opacity-20");

  //   Alert when click the button
  alert("Board Updated Successfully");

  //   increase and decrease Number
  changeNumber();

  // showing the note Card in the side bar
  document.getElementById("card-6-msg").style.display = "block";

  // dynamic time of massage appearing
  const currentTime = new Date().toLocaleTimeString();
  document.getElementById("msg-6-time").textContent = currentTime;

  finalAlert();
});

function changeNumber() {
  const assignedNumber = document.getElementById("navBtn");
  const taskNumber = document.getElementById("taskNum");

  const currentAssignedNum = parseInt(assignedNumber.textContent);
  const currentTaskNum = parseInt(taskNumber.textContent);

  if (currentAssignedNum > 0) {
    assignedNumber.textContent = currentAssignedNum + 1;
    taskNumber.textContent = currentTaskNum - 1;
  }
}

let finalAlertClick = 0;
function finalAlert() {
  finalAlertClick++;
  if (finalAlertClick === 6) {
    alert("congrats!!! You have completed all the current task");
  }
}
