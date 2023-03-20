// Selecciona todas las img con class "imgCarousel" y las convierte en un array
let images = Array.from(document.getElementsByClassName("imgCarousel"));

// Selecciona la img con ID "mainPhoto"
let mainPhoto = document.getElementById("mainPhoto");

// Obtiene el atributo "name" del elemento de img principal
let mainName = mainPhoto.getAttribute("name");

// actualiza el nombre principal
updateCaption(mainName);

// actualiza img y textos
function updateImage(event) {
  // almacena la img clickeada en la variable "image"
  let image = event.target;
  // obtiene el atributo "name" de la imagen clickeada y lo guarda en la variable "name"
  let name = image.getAttribute("name");
  // cambia la fuente(.jpg) de la imagen principal para que coincida con la imagen clickeada
  mainPhoto.src = image.src;
  // actualiza el pie de foto
  updateCaption(name);
}

// actualiza el pie de foto  utilizando el valor de la img clickeada
function updateCaption(event) {
  // selecciona el elemento con el ID "caption" y establece su contenido en el valor de la img clickeada
  let caption = (document.getElementById("caption").innerHTML = event);
}

// cuando se hace clic en una de las img, se llama a la función "updateImage"
images.forEach(function (image) {
  image.addEventListener("click", updateImage);
});
