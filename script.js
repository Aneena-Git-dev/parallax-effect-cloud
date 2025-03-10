let clouds = document.getElementById("clouds");

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    clouds.style.transform = `translateX(-50%) translateY(${scrollPos * 0.3}px)`;
});


  

document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    document.querySelector(".footer-parallax").style.backgroundPositionY = `${scrollPosition * 0.5}px`;

  });
