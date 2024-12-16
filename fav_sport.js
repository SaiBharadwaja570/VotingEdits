let form = document.querySelector("form");
let log = document.querySelector("#log");

const sports = JSON.parse(localStorage.getItem("sports"))|| [];

function addUser(favSport){
    sports.push({favSport});
}

form.addEventListener("submit", (event) => {
    const data = new FormData(form);

    for(const entry of data){
        addUser(entry[1]);
    }
    localStorage.setItem("sports",JSON.stringify(sports))
    event.preventDefault();
}
);