let images = Array.from(document.getElementsByClassName("imgCarousel"));
let mainPhoto = document.getElementById("mainPhoto");
let mainName = mainPhoto.getAttribute("name");
updateCaption(mainName);
function updateImage(event) {
  let image = event.target;
  let name = image.getAttribute("name");
  mainPhoto.src = image.src;
  updateCaption(name);
}
function updateCaption(event) {
  let caption = (document.getElementById("caption").innerHTML = event);
}
images.forEach(function (image) {
  image.addEventListener("click", updateImage);
});
