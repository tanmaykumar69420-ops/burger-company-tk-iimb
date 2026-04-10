<script>
    document.addEventListener("DOMContentLoaded", function () {

    let index = 0;

    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    function showSlide(i) {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        slides[i].classList.add("active");
    }

    nextBtn.addEventListener("click", function () {
        index++;
        if (index >= slides.length) index = 0;
        showSlide(index);
    });

    prevBtn.addEventListener("click", function () {
        index--;
        if (index < 0) index = slides.length - 1;
        showSlide(index);
    });
        setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 3000);

});
</script>
