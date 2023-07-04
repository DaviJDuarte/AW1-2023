function mudar() {
  document.getElementsByTagName("body")[0].style.color = 'white';
  document.getElementsByTagName("body")[0].style.filter = 'brightness(70%)';
  
  document.getElementById("fearless-cover").style.transform = "rotate(180deg)";
  document.getElementById("fearless-cover").style.filter = "blur(2px)";

  document.querySelector("img#fearless-cover").style.margin = "5px";
  document.querySelector("img#fearless-cover").style.border = "10px solid pink"

  document.getElementsByClassName("album")[0].style.background = "rgba(0, 0, 0, .2";
  document.getElementsByClassName("album")[0].style.padding = "3px";

  document.getElementsByName("speak-now")[0].style.transform = "rotate(90deg)";
  document.getElementsByName("speak-now")[0].style.filter = "blur(1px)";
}

