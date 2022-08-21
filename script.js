const countrys = [
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
    name: "Germany",
    population: "81,770,900",
    region: "Europe",
    capital: "Berlin"
  },
  {
    id: 2,
    img: "https://nationalflagfoundation.org/wp-content/uploads/1795.png",
    name: "Germany",
    population: "323,947,000",
    region: "Americas",
    capital: "Washington D.C"
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png",
    name: "Brazil",
    population: "206,135,893",
    region: "Americas",
    capital: "Brasília"
  },
  {
    id: 4,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1024px-Flag_of_Iceland.svg.png",
    name: "Iceland",
    population: "334,300",
    region: "Europe",
    capital: "Reykjavík"
  },
  {
    id: 5,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/1024px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png",
    name: "Afghanistan",
    population: "27,657,145",
    region: "Asia",
    capital: "Kabul"
  },
  {
    id: 6,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png",
    name: "Uzbekistan",
    population: "35,482,369",
    region: "Asia",
    capital: "Tashkent"
  },
  {
    id: 7,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2560px-Flag_of_Albania.svg.png",
    name: "Albania",
    population: "2,886,026",
    region: "Europe",
    capital: "Tirana"
  },
  {
    id: 8,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1280px-Flag_of_Algeria.svg.png",
    name: "Algeria",
    population: "40,400,000",
    region: "Africa",
    capital: "Algiers"
  },
]

const elModeChangeBtn = document.querySelector(".header-dark-mode-switch-btn");
const elMainInner = document.querySelector(".main-inner");
const cssRoot = document.querySelector(':root');

let darkMode = false;  // default mode is light mode

elModeChangeBtn.addEventListener("click", () => {
  if (darkMode === false) {
    elModeChangeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon me-2" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/></svg>
  Light Mode`; // change the text of the button to dark mode
  cssRoot.style.setProperty('--white-color', '#000');
  cssRoot.style.setProperty('--black-color', '#fff');
  cssRoot.style.setProperty('--black-box-shadow', 'rgba(255, 255, 255, 0.507)');
  darkMode = true; // change to dark mode
  cssRoot.style.setProperty('--white-box-shadow', 'rgba(0, 0, 0, 0.15)');
  } else {
    elModeChangeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon me-2" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/></svg>
  Dark Mode`; // change text content of the button
  cssRoot.style.setProperty('--white-color', '#fff');
  cssRoot.style.setProperty('--black-color', '#000');
  cssRoot.style.setProperty('--black-box-shadow', 'rgba(0, 0, 0, 0.15)');
  cssRoot.style.setProperty('--white-box-shadow', 'rgba(255, 255, 255, 0.507)');
  darkMode = false; // change to light mode
  }
} );

// main country card creator function

for (let count of countrys) {
  const elCountryCard = document.createElement("div");
  elMainInner.appendChild(elCountryCard);
  elCountryCard.classList.add("country-card" , "mb-5", "rounded");
  elCountryCard.style.width = "370px";
  elCountryCard.style.boxShadow = "0 0 .7rem .3rem var(--black-box-shadow)";
  // card image
  const elCountryCardImg = document.createElement("img");
  elCountryCard.appendChild(elCountryCardImg);
  elCountryCardImg.classList.add("img-fluid","rounded-top");
  elCountryCardImg.style.height = "266px";
  elCountryCardImg.src = count.img;
  elCountryCardImg.alt = count.name;
  // card info
  const elCountryCardInform = document.createElement("div");
  elCountryCard.appendChild(elCountryCardInform);
  elCountryCardInform.classList.add("count-inform-box", "px-3", "mt-4");
  // card name
  const elCountryCardName = document.createElement("h4");
  elCountryCardInform.appendChild(elCountryCardName);
  elCountryCardName.classList.add("country-title", "fw-bold", "fs-5", "ms-1");
  elCountryCardName.textContent = count.name;
  // card population
  const elCountryCardPopulation = document.createElement("p");
  elCountryCardInform.appendChild(elCountryCardPopulation);
  elCountryCardPopulation.classList.add("country-population", "fw-bold", "fs-5", "ms-1", "mt-4", "mb-1");
  elCountryCardPopulation.textContent = `Population: `;
  // card population value
  const elCountryCardPopulationValue = document.createElement("span");
  elCountryCardPopulation.appendChild(elCountryCardPopulationValue);
  elCountryCardPopulationValue.classList.add("population-span", "fw-normal");
  elCountryCardPopulationValue.textContent = count.population;
  // card capital
  const elCountryCardRegion = document.createElement("p");
  elCountryCardInform.appendChild(elCountryCardRegion);
  elCountryCardRegion.classList.add("country-region", "fw-bold", "fs-5", "ms-1", "mb-1");
  elCountryCardRegion.textContent = `Region: `;
  // card capital value
  const elCountryCardRegionValue = document.createElement("span");
  elCountryCardRegion.appendChild(elCountryCardRegionValue);
  elCountryCardRegionValue.classList.add("region-span", "fw-normal");
  elCountryCardRegionValue.textContent = count.region;
  // card capital
  const elCountryCardCapital = document.createElement("p");
  elCountryCardInform.appendChild(elCountryCardCapital);
  elCountryCardCapital.classList.add("country-capital", "fw-bold", "fs-5", "ms-1", "mb-5");
  elCountryCardCapital.textContent = `Capital: `;
  // card capital value
  const elCountryCardCapitalValue = document.createElement("span");
  elCountryCardCapital.appendChild(elCountryCardCapitalValue);
  elCountryCardCapitalValue.classList.add("capital-span", "fw-normal");
  elCountryCardCapitalValue.textContent = count.capital;
}