let form = document.querySelector("form");

const pollData = JSON.parse(localStorage.getItem("pollData")) || { votes: {}, voters: {} };

function addVote(userEmail, favSport) {
    if (pollData.voters[userEmail]) {
        alert("You have already voted!");
        return false;
    }

    pollData.votes[favSport] = (pollData.votes[favSport] || 0) + 1;

    pollData.voters[userEmail] = favSport;

    localStorage.setItem("pollData", JSON.stringify(pollData));
    alert("Vote submitted successfully!");
    return true;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);

    const userEmail = localStorage.getItem("loggedInUser");

    let favSport;
    for (const entry of data) {
        favSport = entry[1]; 
    }

    if (favSport) {
        addVote(userEmail, favSport);
    } else {
        alert("Please select a sport to vote.");
    }
});
