window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const totalImages = 6; // Total de imágenes que tienes
  const imageIndex =
    (Math.floor(
      (scrollPosition / (document.body.clientHeight - window.innerHeight)) *
        totalImages
    ) %
      totalImages) +
    1;
  document.getElementById("scrollImage").src = `imagen${imageIndex}.jpeg`;
});
