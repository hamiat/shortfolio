const t4Box = document.getElementById("t4");
const aboutText = document.getElementById("aboutText");
const t5Box = document.getElementById("t5");
const contactLinks = document.querySelector(".contactLinks");
const allLinks = document.querySelectorAll(".contactLinks a");
const t10Box = document.getElementById("t10");
const t8Box = document.getElementById("t8");
const t9Box = document.getElementById("t9");
const t1Box = document.getElementById("t1");
const aframeGameText = document.getElementById("aframeGameText");
const pomodoroText = document.getElementById("pomodoroText");
const textLogoText = document.getElementById("textLogoText");
const gameHowTo = document.getElementById("gameHowTo");

const hideStuff = () => {
  contactLinks.style.display = "none";
  aboutText.style.display = "none";
  t4Box.classList.remove("displayingAbout");
  t5Box.classList.remove("displayingContacts");
  document.querySelector(".aboutH2").style.fontSize = "1.3em";
  document.querySelector(".contactH2").style.fontSize = "1.3em";
};

document.addEventListener("mouseup", hideStuff, false);

t4Box.addEventListener("click", () => {
  t4Box.classList.add("displayingAbout");
  aboutText.style.display = "block";
  document.querySelector(".aboutH2").style.fontSize = "2em";
});

t5Box.addEventListener("click", () => {
  t5Box.classList.add("displayingContacts");
  contactLinks.style.display = "grid";
  contactLinks.style.fontSize = "0.7em";
  document.querySelector(".contactH2").style.fontSize = "1.8em";
});



t8Box.addEventListener("mouseenter", () => {
  pomodoroText.style.display = "block";
  pomodoroText.style.textAlign = "start";
  pomodoroText.style.fontSize = "1.3em";
});

const forDesktop = () => {
  aframeGameText.style.display = "block";
  aframeGameText.style.textAlign = "start";
  aframeGameText.style.fontSize = "1.3em";
}


t9Box.addEventListener("mouseenter", () => {
  const mediaQuery = window.matchMedia("(max-width: 810px)");
  if (mediaQuery.matches) {
    gameHowTo.style.display = "none";
  } else {
    textLogoText.style.display = "block";
    textLogoText.style.textAlign = "start";
    textLogoText.style.fontSize = "1.3em";
    forDesktop()
  }

 
});



t10Box.addEventListener("mouseenter", () => {
  const mediaQuery = window.matchMedia("(max-width: 810px)");
  if (mediaQuery.matches) {
    gameHowTo.style.display = "none";
  } else {
    gameHowTo.style.display = "block";
    gameHowTo.style.width = "200%";
    gameHowTo.style.textAlign = "flex-end";
    gameHowTo.style.fontSize = "1.3em";
    forDesktop()
  }
 
});

t8Box.addEventListener("mouseleave", () => {
  pomodoroText.style.display = "none";
});

t9Box.addEventListener("mouseleave", () => {
  textLogoText.style.display = "none";
  aframeGameText.style.display = "none";
});

t10Box.addEventListener("mouseleave", () => {
  aframeGameText.style.display = "none";
  gameHowTo.style.display = "none";
});
