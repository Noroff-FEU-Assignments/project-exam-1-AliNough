async function getPosts() {
  try {
    const response = await fetch(
      "https://api.airtable.com/v0/appDPWYku93IboXID/tblIT67fkOEOObBLn",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer patvU0pWinUI9upgH.c376b35680439358130c45d6db19525fbd87aefe238310fb292b3502312be0e7",
        },
      }
    );

    if (response.ok) {
      const result = await response.json();
      console.log(result);
    }
  } catch (err) {
    console.error(err);
  }
}

getPosts();

const sliderButtons = document.querySelectorAll("[data-carousel-button]");

sliderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    }
    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
