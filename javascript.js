const db = [];


const title = document.getElementById("title");
const year = document.getElementById("year");
const rating = document.getElementById("rating");


class movie {
    constructor(title, year, rating) {
        this.title = title;
        this.year = year;
        this.rating = rating;
    }
}

function addMovie(){
    let movie1 = new movie(title.value, year.value, rating.value);
    console.log(movie1);
    db.push(movie1);
    populateMovies();

}

function resetForm(){
    document.getElementById('movies').innerHTML = '';
    document.getElementById("title").value = "";
    document.getElementById("year").value = "";
    document.getElementById("rating").value = "";
}

function populateMovies(){
    resetForm();
    const cardContainer = document.querySelector('#movies');
    cardContainer.innerHTML = "";

    if(db.length > 0){
        for(let i=0; i<db.length; i++){
            
        const movieDiv = document.createElement("div");
        movieDiv.classList.add('content');
        

        const title = document.createElement("p");
        title.innerText = `Title: ${db[i].title}`;
        const year = document.createElement("p");
        year.innerText = `Year: ${db[i].year}`;
        const rating = document.createElement("p");
        rating.innerText = `Rating: ${db[i].rating}`;

        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.classList.add("remove-button");
        removeButton.dataset.row = i;
        removeButton.addEventListener('click', (e) => {
            let row = parseInt(e.target.dataset.row);
            db.splice(row, 1);
            populateMovies();
        });

        movieDiv.append(title);
        movieDiv.append(year);
        movieDiv.append(rating);
        movieDiv.append(removeButton);

        document.getElementById("movies").appendChild(movieDiv);
        closeForm();
        }
    }
}

const element = document.getElementById("submit");
element.addEventListener('click', () => {
    if(title.value === "" || year.value === "" || rating.value === ""){
        console.log("Not all fields added");
    }else{
        addMovie();
    }
});

const formPopup =  document.getElementById("form-popup");
function openForm() {
    title.innerHTML = "";
    year.innerHTML = "";
    rating.innerHTML = "";
    formPopup.classList.add('active');
    overlay.classList.add('active');
}

function closeForm() {

    formPopup.classList.remove('active');
    overlay.classList.remove('active');
}