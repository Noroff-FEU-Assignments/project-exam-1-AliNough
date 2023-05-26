const postsListEL = document.querySelector("#js-blogs-list");

getPosts();

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
    postsListEL.innerHTML = "";

    result.records.forEach((post, index) => {
      // Set data-active attribute for the first post only

      const html = `
      <li class="post">
        <a href="detail.html?id=${post.id}">
        <img class="img-placeholder" src="${post.fields.Assets[0].thumbnails.large.url}" alt=""/>
            <div class="bp-copy-container">
                <h2>
                ${post.fields.title}
                </h2>
                <hr>
                <p>
                ${post.fields.Notes}
                </p>
            </div>
      </a>
    </li>
      `;
      postsListEL.innerHTML += html;
    });

    console.log(postsListEL.firstChild);
  } catch (err) {
    console.error(err);
  }
}
