(()=>{"use strict";document.querySelector(".search__btn").addEventListener("click",(async e=>{e.preventDefault();const s=document.querySelector(".search__bar").value,c=await fetch("http://localhost:8083/recipe",{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:s})});try{const e=await c.json();console.log(e),((e={})=>{const s=document.querySelector("main"),c=`\n        <section class="result">\n            <span>${e.count} results for "${e.q}"</span>\n        </section>\n        <section class="recipe">\n            <ul class="recipe__container">\n                <li class="recipe__card">\n                    <a class="link recipe__link" href="${e.hits[0].recipe.url}">\n                        <img class="recipe__img" src="${e.hits[0].recipe.image}" alt="${e.hits[0].recipe.label}">\n                        <h2 class="recipe__title">${e.hits[0].recipe.label}</h2>\n                        <div class="recipe__meta">\n                            <span class="time">${e.hits[0].recipe.totalTime}mins</span>\n                            <span class="publisher">by ${e.hits[0].recipe.source}</span>\n                            <ul class="tags">\n                                <li class="tag">${e.hits[0].recipe.healthLabels[0]}</li>\n                                <li class="tag">${e.hits[0].recipe.healthLabels[1]}</li>\n                                <li class="tag">${e.hits[0].recipe.healthLabels[2]}</li>\n                            </ul>\n                        </div>\n                    </a>\n                </li>\n            </ul>\n        </section>\n    `;s.insertAdjacentHTML("beforeend",c)})(e)}catch(e){console.error(e)}}))})();