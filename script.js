var colors = ["btn-danger", "btn-warning", "btn-success"];
var currentIndex = 0;

var trafficLightBtn = document.getElementById("trafficLightBtn");
trafficLightBtn.addEventListener("click", function() {
    trafficLightBtn.classList.remove(colors[currentIndex]);
    currentIndex = (currentIndex + 1) % colors.length;
    trafficLightBtn.classList.add(colors[currentIndex]);
});