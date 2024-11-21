document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const interest = document.getElementById("interest").value;

    if (!name || !email || !interest) {
        alert("Please fill out all fields.");
    } else {
        alert(`Thank you, ${name}! We have received your inquiry.`);
        this.reset();
    }
});



let currentIndex = 0;

    function showNextSlide() {
        const slides = document.querySelectorAll(".slide");
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");
        const slider = document.querySelector(".slides");
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    setInterval(showNextSlide, 3000);