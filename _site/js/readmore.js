var myFunction = function() {
  var dots = document.getElementById("dots");
  var dots2 = document.getElementById("dots2");

  var moreText = document.getElementById("more");
  var moreText2 = document.getElementById("more2");

  var btnText = document.getElementById("readmore");
  var btnText2 = document.getElementById("readmore2");


  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }


if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less";
    moreText2.style.display = "inline";
  }


}