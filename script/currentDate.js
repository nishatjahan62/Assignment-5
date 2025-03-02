function dynamicDate() {
  const currentDate = new Date();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = days[currentDate.getDay()];

  const month = currentDate.toLocaleDateString("default", { month: "short" });
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  document.getElementById("dayName").textContent = dayName + ",";
  document.getElementById("date").textContent = month + " " + day + " " + year;
}
dynamicDate()
setInterval(dynamicDate, 60000);
