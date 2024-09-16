console.log(
  "Dropdown Rotate Reference",
  "https://youtu.be/vKlq91Avgq8?si=szCU2aTynbNdohYr"
);

const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el);
const $main = $("main");
const removeClass = () => {
  [...$$(".button-on")].forEach((el) => el.classList.remove("button-on"));
};

const repeatingLinearGradient = [
  `repeating-linear-gradient(
    black 0 5px,
    white 0 10px
  )`,
  `repeating-linear-gradient(
    45deg,
    black 0 5px,
    white 0 10px
  )`,
  `repeating-linear-gradient(
    -135deg,
    black 0 5px,
    white 0 10px
  )`,
];

const repeatingRadialGradient = [
  `repeating-radial-gradient(
    circle closest-side,
    springgreen 0% 10%,
    violet 10% 20%
  )`,
  `repeating-radial-gradient(
    circle  at 0% 0%,
    skyblue 0% 10%,
    violet 10% 20%
  )`,
  `repeating-radial-gradient(
    ellipse farthest-side	 at 100% 100%,
    black 0% 10%,
    peru 10% 20%
  )`,
];

const repeatingConicGradient = [
  `repeating-conic-gradient(
    from 0deg at 50% 50%, 
    #60efff 0deg 10deg,
    #00ff87 10deg 20deg
  )`,
  ` repeating-conic-gradient(
    from 0deg at 0% 0%,
    #40c9ff 0deg 10deg,
    #e81cff 10deg 20deg
  )`,
  `
  repeating-conic-gradient(
    from 0deg at 100% 100%,
    #ff930f 0deg 10deg,
    #fff95b 10deg 20deg
  )`,
];

document.addEventListener("click", (e) => {
  if (e.target.matches(".am-btn")) {
    e.target.classList.toggle("active");
  }
  if (e.target.matches(".am-dropdown nav button")) {
    removeClass();
    e.target.classList.add("button-on");
  }
  if (e.target.matches("nav .r-l-g-1")) {
    $main.style.backgroundImage = repeatingLinearGradient[0];
  }
  if (e.target.matches("nav .r-l-g-2")) {
    $main.style.backgroundSize = "";
    $main.style.backgroundImage = repeatingLinearGradient[1];
  }
  if (e.target.matches("nav .r-l-g-3")) {
    $main.style.backgroundImage = repeatingLinearGradient[2];
    $main.style.backgroundSize = "20px";
  }
  if (e.target.matches("nav .r-r-g-1")) {
    $main.style.backgroundSize = "";
    $main.style.backgroundImage = repeatingRadialGradient[0];
  }
  if (e.target.matches("nav .r-r-g-2")) {
    $main.style.backgroundSize = "";
    $main.style.backgroundImage = repeatingRadialGradient[1];
  }
  if (e.target.matches("nav .r-r-g-3")) {
    $main.style.backgroundSize = "";
    $main.style.backgroundImage = repeatingRadialGradient[2];
  }
  if (e.target.matches("nav .r-c-g-1")) {
    $main.style.backgroundSize = "";
    $main.style.backgroundImage = repeatingConicGradient[0];
  }
  if (e.target.matches("nav .r-c-g-2")) {
    $main.style.backgroundSize = "";
    $main.style.backgroundImage = repeatingConicGradient[1];
  }
  if (e.target.matches("nav .r-c-g-3")) {
    $main.style.backgroundSize = "";
    $main.style.backgroundImage = repeatingConicGradient[2];
  }
});
