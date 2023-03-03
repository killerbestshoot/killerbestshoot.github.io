document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("box");
  var animation = anime({
    targets: box,
    top: 190,
    duration: 800,
    easing: "easeInOutQuad",
  });
  // Lancement de l'animation
  animation.play();
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    var animations = anime({
      targets: [box.children],
      opacity: 0,
      duration: 800,
      easing: "easeInOutQuad",
    });
    var animations2 = anime({
      targets: box,
      width: window.innerWidth,
      height: window.innerHeight,
      top: 0,
      duration: 800,
      easing: "easeInOutQuad",
      complete: () => {
        setTimeout(() => {
          document.getElementById("msg").classList.add("hidden");
          document.getElementById("msg1").classList.add("hidden");
          document.getElementById("btn").classList.add("hidden");
        }, 500);
        window.location.href = "home.html";
        // console.log("redir");
      },
    });
    animations.play();
    animations2.play();
  });
    document.getElementById("idi")
});
