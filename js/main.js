const sliderListEl = document.querySelector("#js-slider-list");
const sliderButtons = document.querySelectorAll("[data-carousel-button]");

getPosts();
const postListEl = document.querySelector("#js-post-list");
let activeSlideId;

async function getPosts() {
  try {
    // --- NOTE: I could not figure out how to hide my token ---
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
    const result = await response.json();
    // Clear existing HTML content
    sliderListEl.innerHTML = "";
    postListEl.innerHTML = "";

    result.records.forEach((post, index) => {
      // Set data-active attribute for the first post only
      const isActive = index === 0 ? "data-active" : "";

      const html = `
        <li id="js-slide" class="slide" ${isActive}>
          <a href="html/detail.html?id=${post.id}">
            <img src="${post.fields.Assets[0].thumbnails.large.url}" alt="nature photo 1"/>
            <div class="slide-paragraph">
              <h4>${post.fields.author.name}</h4>
              <h2>${post.fields.title}</h2>
              <hr/>
              <p>${post.fields.Notes}</p>
            </div>
          </a>
        </li>
      `;
      sliderListEl.innerHTML += html;

      if (isActive) {
        activeSlideId = post.id;
      }

      postListEl.innerHTML += `
      <li id="js-post-item" class="l-items">
            <a href="html/detail.html?id=${post.id}">
              <img
                id="js-post-thum-img"
                src="${post.fields.Assets[0].thumbnails.large.url}"
                alt=""
              />
              <div class="post-dscptn">
                <h3>${post.fields.title}</h3>
                <hr />
                <p>
                ${post.fields.Notes}
                </p>
              </div>
            </a>
          </li>
      `;
      const postItemEl = document.querySelectorAll("#js-post-item");
      postItemEl.forEach((postItem) => {
        const postThum = postItem.querySelector("#js-post-thum-img");
        postItem.addEventListener("mouseenter", (e) => {
          postThum.classList.add("img-hidden");
        });

        postItem.addEventListener("mouseleave", (e) => {
          postThum.classList.remove("img-hidden");
        });
      });
    });
  } catch (err) {
    console.error(err);
  }
}

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
