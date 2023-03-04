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
  if (btn != null) {
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
  } else {
    const headers = document.getElementById("head");
    var headeranim = anime({
      targets: headers,
      top: 0,
      duration: 1000,
      easing: "easeInOutQuad",
      complete: () => {
        const pied = document.getElementsByTagName("footer");
        var animePied = anime({
          targets: pied,
          bottom: 0,
          duration: 1000,
          easing: "easeInOutQuad",
          complete: () => {
            const cs = document.getElementById("cs");
            var csanim = anime({
              targets: cs,
              opacity: 10,
              duration: 800,
              easing: "easeInOutQuad",
            });
          },
        });
        animePied.play();
      },
    });
    headeranim.play();
  }
});
// console.log(headeranim.play);
//   var headanim = anime
//     .timeline({
//       duration: 1500,
//       easing: "easeOutExpo",
//       autoplay: true,
//     })
//     .add({
//       targets: header,
//       translateY: ["-50%", "0"],
//       rotateX: ["-90deg", "0deg"],
//       easing: "easeOutExpo",
//       duration: 1000,
//     })
//     .add({
//       targets: header,
//       translateY: ["0", "50%"],
//       rotateX: ["0deg", "90deg"],
//       easing: "easeInExpo",
//       duration: 500,
//       offset: "-=500",
//     });
//   headanim.play();
