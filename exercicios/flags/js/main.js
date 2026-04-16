import flags from "./model/flags.js";

for (const bandeira of flags) {
  document.querySelector("main").insertAdjacentHTML("beforeend",
    `<div class="flag col-2 my-2 text-center">
    <img src="${bandeira.image}" alt="${bandeira.name}">
    <p>${bandeira.name}</p>
  </div>`
  )
}
