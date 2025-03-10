let clouds = document.getElementById("clouds");

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    clouds.style.transform = `translateX(-50%) translateY(${scrollPos * 0.3}px)`;
});

window.addEventListener('scroll', function () {
    let scrolled = window.scrollY;
    document.querySelector('.footer-parallax').style.backgroundPositionY = -(scrolled * 0.5) + 'px';
  });
  
  
  let heading = document.getElementById("heading");

  window.addEventListener("scroll", function() {
      let scrollPos = window.scrollY;
      heading.style.transform = `translateX(-50%) translateY(${scrollPos * 0.5}px)`;
  });
