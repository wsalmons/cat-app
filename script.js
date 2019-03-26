function loadPosts() {
	fetch('https://api.thecatapi.com/v1/breeds')
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((myJson) => {
			const cards = myJson.map(index => {
				return `
  <div class="card my-3 shadow">
  <div class="card-body">
    <h5 class="card-title">${index.name}</h5>
    <p class="card-text">${index.description}</p>
    <p class="card-text"><strong>Temperment: </strong>${index.temperament}</p>
    <p class="card-text"><strong>Origin: </strong>${index.origin}</p>
    <p class="card-text"><strong>Weight: </strong>${index.weight.imperial} lbs</p>
  </div>
  </div>
    `
			});
			let html = document.getElementById("target");
			html.innerHTML = cards.join("\r\n")
		});
}
