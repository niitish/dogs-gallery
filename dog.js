const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const drop = document.querySelector(".breed-selector");

const dogs = document.querySelector(".dogs");
const selectedBreed = document.querySelector(".breed-selector");

var count = 0;

const loader = document.createElement("div");
loader.className = "loader";

function createList() {
	fetch(BREEDS_URL)
		.then(function (response) {
			return response.json();
		})
		.then(function (processedResponse) {
			let breedsList = Object.keys(processedResponse.message);
			breedsList.forEach((breed) => {
				let html = `<option value=${breed}>${breed.toUpperCase()}</option> `;
				drop.innerHTML += html;
			});
		});
}

createList();

function createDogs(breed) {
	var url = "";
	if (breed === " ") url = "https://dog.ceo/api/breeds/image/random";
	else url = `https://dog.ceo/api/breed/${breed}/images/random`;
	fetch(url)
		.then(function (response) {
			const processingPromise = response.json();
			return processingPromise;
		})
		.then(function (processedResponse) {
			const div = document.createElement("div");
			div.className = "dog";
			div.appendChild(loader);

			dogs.appendChild(div);

			div.scrollIntoView({ behavior: "smooth" });

			const img = document.createElement("img");
			img.id = `dog-${count}`;
			img.src = processedResponse.message;
			img.onclick = function () {
				window.open(processedResponse.message, "_blank");
			};

			img.onload = function () {
				div.removeChild(loader);
				div.appendChild(img);
			};

			++count;
		});
}

document.querySelector(".create").addEventListener("click", () => {
	console.log(selectedBreed.value);
	if (!selectedBreed.value) createDogs(" ");
	else createDogs(selectedBreed.value);
});
