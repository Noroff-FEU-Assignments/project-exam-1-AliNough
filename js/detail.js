const postEle = document.querySelector("#js-post-container");
const authorDetailsEle = document.querySelector("#js-author-container");

console.log(authorDetailsEle);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url =
  "https://api.airtable.com/v0/appDPWYku93IboXID/tblIT67fkOEOObBLn/" + id;

async function getDeets() {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer patvU0pWinUI9upgH.c376b35680439358130c45d6db19525fbd87aefe238310fb292b3502312be0e7",
      },
    });
    console.log(response);

    const details = await response.json();
    console.log(details);

    document.title = details.fields.title + " - MindInk";

    authorDetailsEle.innerHTML = `
        <div class="prof-pic-border">
          <img src="${details.fields.profilePic[0].url}" alt="Profile picture" />
        </div>
        <h3>${details.fields.author.name}</h3>
        <a id="js-prof-btn" class="view-prof-btn" href="">Profile</a>
        `;

    postEle.innerHTML = `
        <div class="post-specs">
            <p aria-label="post date">${details.fields.dateCreated}</p>
            <h2 aria-label="post title">${details.fields.title}</h2>
            <hr />
          </div>
          <img
            src="${details.fields.Assets[0].thumbnails.large.url}"
            alt=""
          />
          <p class="post-copy">
            ${details.fields.Notes}
          </p>
    `;
    const profBtnEle = document.querySelector("#js-prof-btn");
    const errExtBtnEl = document.querySelector("#js-err-ext-btn");
    const errContEle = document.querySelector("#err-container");

    errExtBtnEl.addEventListener("click", (e) => {
      e.preventDefault();
      errContEle.classList.remove("err-toggled");
    });

    profBtnEle.addEventListener("click", (e) => {
      e.preventDefault();
      errContEle.classList.add("err-toggled");
    });

    console.log(profBtnEle);
  } catch (err) {
    console.error(err);
  }
}

getDeets();
