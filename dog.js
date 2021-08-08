const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const dog = document.querySelector(".dogs");

function createDogs() {
	const promise = fetch(DOG_URL);
	promise
		.then(function (response) {
			const processingPromise = response.json();
			return processingPromise;
		})
		.then(function (processedResponse) {
			const img = document.createElement("img");
			img.src = processedResponse.message;
			img.alt = "cute dog";
			img.style.width = 500;
			img.style.height = 500;
			dog.appendChild(img);
		});
}

document.querySelector(".create").addEventListener("click", createDogs);
