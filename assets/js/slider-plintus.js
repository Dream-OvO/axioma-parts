const mainSlide = document.getElementById('main')

function setImageSlide(imgName) {
  mainSlide.setAttribute(
    'style',
    `background-image: url(./assets/img/${imgName}.jpg);`
  )
}
