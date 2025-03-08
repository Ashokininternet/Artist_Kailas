import { gridData } from "./data.js";

renderPage()

function renderPage(){
    let pageHTML = ``;

    gridData.forEach((data) => {
        pageHTML += `
        <article class="art-piece">
            <img class="art-img" src="${data.img}" alt="Gojo Satoru">
            <div class="art-details">
                <p class="art-name">Name: ${data.name}</p>
                <!-- <p class="art-price">Price: 10,000rs</p> -->
            </div>
        </article>
        `;
    });

    document.querySelector('.Kai_grid1').innerHTML = pageHTML;
};
console.log("Working");
