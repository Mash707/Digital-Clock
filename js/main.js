showTime = () => {
  const timeObj = new Date();
  let hours = timeObj.getHours();
  let minutes = timeObj.getMinutes();
  let secs = timeObj.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  secs = secs < 10 ? "0" + secs : secs;

  currentTime = hours + ":" + minutes + ":" + secs;

  const displayTime = document.querySelector(".Clock");
  displayTime.innerHTML = currentTime;

  /*   console.log(displayTime); */
  setTimeout(showTime, 1000);
};

showTime();
