const BREEDS_URL = " https://dog.ceo/api/breeds/list/all";
const drop = document.querySelector(".breed-selector");

function createList() {
	const promise = fetch(BREEDS_URL);
	promise
		.then(function (response) {
			return response.json();
		})
		.then(function (processedResponse) {
			var breedsList = Object.keys(processedResponse.message);
			drop.innerHTML = "";
			breedsList.forEach((breed) => {
				var html = `<option>${breed}</option> `;
				drop.innerHTML += html;
			});
		});
}

createList();
