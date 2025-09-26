async function renderingData() {
  try {
    const mainContent = document.getElementById("main-content");

    const response = await fetch("./../data/article.json");
    const data = await response.json();

    for (let i = 0; i <= data.length; i++) {
      mainContent.innerHTML += `
                <div class="card">
                    <img src="${data[i].image}" />
                    <div class="description">
                        <h3> ${data[i].tittle} </h3>
                        <p> ${data[i].description}</p>
                    </div>
                    <div class="account">
                        <img src="${data[i].user.avatar}" />
                        <div class="id">
                            <p class="id-name">${data[i].user.name}</p>
                            <p class="id-status">${
                              data[i].user.position
                            } di <span>${data[i].user.company}</span></p>
                        </div>
                    </div>
                    <div class="rating">
                        <div class="rating-star">
                            <div class="star">
                                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                    class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet"
                                    fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                                            fill="#ffce31"></path>
                                    </g>
                                </svg>
                            </div>
                            <div class="star">
                                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                    class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet"
                                    fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                                            fill="#ffce31"></path>
                                    </g>
                                </svg>
                            </div>
                            <div class="star">
                                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                    class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet"
                                    fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                                            fill="#ffce31"></path>
                                    </g>
                                </svg>
                            </div>
                            <div class="star">
                                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                    class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet"
                                    fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                                            fill="#3A35411F"></path>
                                    </g>
                                </svg>
                            </div>
                            <div class="star">
                                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                    class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet"
                                    fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
                                            fill="#3A35411F"></path>
                                    </g>
                                </svg>
                            </div>
                            <div class="review">
                                <p>${data[i].rating.rating} (${
        data[i].rating.review
      })</p>
                            </div>

                        </div>
                        <div class="price">
                            <p>Rp ${formatNumber(data[i].price)}</p>
                        </div>

                    </div>
                </div>
      `;
    }
  } catch (e) {
    console.log(e);
  }

  function formatNumber(number) {
    if (number >= 1000) {
      return (number / 1000).toFixed(0) + "K";
    }
  }
}
renderingData();
