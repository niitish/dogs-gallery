const dog = document.querySelector(".dogs");
var selectedBreed = document.querySelector(".breed-selector");

function createDogs(breed) {
	var url = "";
	if (breed === " ") url = "https://dog.ceo/api/breeds/image/random";
	else url = `https://dog.ceo/api/breed/${breed}/images/random`;
	const promise = fetch(url);
	promise
		.then(function (response) {
			const processingPromise = response.json();
			return processingPromise;
		})
		.then(function (processedResponse) {
			const img = document.createElement("img");
			console.log(processedResponse.message);
			img.src = processedResponse.message;
			img.style.cssText =
				"width:90%;margin:10px;padding: 5px;border:2px solid brown;";
			dog.appendChild(img);
		});
}

document.querySelector(".create").addEventListener("click", () => {
	if (!selectedBreed.value) createDogs(" ");
	else createDogs(selectedBreed.value);
});
