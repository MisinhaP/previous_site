var myFunction = function() {
  var dots = document.getElementById("dots");
  var dots2 = document.getElementById("dots2");
  var dots3 = document.getElementById("dots3");
  var dots4 = document.getElementById("dots4");

  var moreText = document.getElementById("more");
  var moreText2 = document.getElementById("more2");
  var moreText3 = document.getElementById("more3");
  var moreText4 = document.getElementById("more4");

  var btnText = document.getElementById("readmore");
  var btnText2 = document.getElementById("readmore2");
  var btnText3 = document.getElementById("readmore3");
  var btnText4 = document.getElementById("readmore4");


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


  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "Read more";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "Read less";
    moreText3.style.display = "inline";
  }

  if (dots4.style.display === "none") {
    dots4.style.display = "inline";
    btnText4.innerHTML = "Read more";
    moreText4.style.display = "none";
  } else {
    dots4.style.display = "none";
    btnText4.innerHTML = "Read less";
    moreText4.style.display = "inline";
  }


}