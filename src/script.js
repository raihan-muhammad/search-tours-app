const requestApi = async () => {
  try {
    const req = await fetch(
      "https://natours-raihan.herokuapp.com/api/v1/tours"
    );
    const res = await req.json();
    const target = document.getElementById("result");


    res.data.data.forEach((tours) => {
      target.innerHTML = `
            <div class="card">
                <img
                src="https://natours-raihan.herokuapp.com/img/tours/${tours.images[0]}"
                class="card-img-top"
                alt="..."
                />
            <div class="card-body">
              <h5 class="card-title">${tours.name}</h5>
              <p class="card-text">
                ${tours}
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        `;
    });
  } catch (error) {
    console.log(error);
  }
};

requestApi();
