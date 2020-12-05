for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var k = this.innerHTML;

    sound(k);
    sounds(k);
  });
}
document.addEventListener("keydown", keyprd);
function keyprd(event) {
  sound(event.key);
  sounds(event.key);
}

function sounds(k) {
  switch (k) {
    case "a":
      var active = document.querySelector(".a");

      active.classList.add("pressed");
      setTimeout(function () {
        active.classList.remove("pressed");
      }, 1000);
      break;

    case "s":
      var active = document.querySelector(".s");

      active.classList.add("pressed");

      setTimeout(function () {
        active.classList.remove("pressed");
      }, 1000);
      break;

    case "d":
      var active = document.querySelector(".d");

      active.classList.add("pressed");

      setTimeout(function () {
        active.classList.remove("pressed");
      }, 1000);
      break;

    case "f":
      var active = document.querySelector(".f");

      active.classList.add("pressed");

      setTimeout(function () {
        active.classList.remove("pressed");
      }, 1000);
      break;

    case "g":
      var active = document.querySelector(".g");

      active.classList.add("pressed");

      setTimeout(function () {
        active.classList.remove("pressed");
      }, 1000);
      break;

    case "h":
      var active = document.querySelector(".h");

      active.classList.add("pressed");

      setTimeout(function () {
        active.classList.remove("pressed");
      }, 1000);
      break;
    case "j":
      var active = document.querySelector(".j");

      active.classList.add("pressed");

      setTimeout(function () {
        active.classList.remove("pressed");
      }, 1000);
      break;
    default:
      break;
  }
}

function sound(k) {
  switch (k) {
    case "a":
      var audio = new Audio("sound/Claps & Snares/10.wav");
      audio.play();

      break;
    case "s":
      var audio = new Audio("sound/Kicks/Kick2.wav");
      audio.play();

      break;
    case "d":
      var audio = new Audio("sound/Claps & Snares/7.wav");
      audio.play();

      break;
    case "f":
      var audio = new Audio("sound/Kicks/Kick5.wav");
      audio.play();

      break;
    case "g":
      var audio = new Audio("sound/Percs/Perc4.wav");
      audio.play();
      break;
    case "h":
      var audio = new Audio("sound/Percs/Perc7.wav");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sound/West Coast Synth Leads/1.wav");
      audio.play();
      break;

    default:
      break;
  }
}
function animation(ko) {
  var q = document.querySelector("." + ko);
  q.classList.add("pressed");
  setTimeout(function () {
    q.classList.remove("pressed");
  }, 3000);
}
