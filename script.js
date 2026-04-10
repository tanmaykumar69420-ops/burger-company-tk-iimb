<script>
document.addEventListener("DOMContentLoaded", function () {

    let index = 0;
    const slides = document.querySelectorAll(".slide");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    function showSlide(i) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[i].classList.add("active");
    }

    next.addEventListener("click", function () {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    prev.addEventListener("click", function () {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });

});
</script>
