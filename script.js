const apiKey = "4a35c19e6308c880b7d3905fc358e98a"; 
document.getElementById("search").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("city-name").textContent = data.name;
      document.getElementById("temperature").textContent = `${data.main.temp}°C`;
      document.getElementById("description").textContent =
        data.weather[0].description;
    })
    .catch((error) => console.error("Error fetching weather data:", error));
});

const images = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8'];
let currentImageIndex = 0;

function changeImage() {
  const slideshow = document.querySelector('.slideshow');
  slideshow.classList.remove(images[currentImageIndex]);

  currentImageIndex = (currentImageIndex + 1) % images.length;
  slideshow.classList.add(images[currentImageIndex]);
}

setInterval(changeImage, 5000)
