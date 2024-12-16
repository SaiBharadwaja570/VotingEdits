let form = document.querySelector("form");
const pollData = JSON.parse(localStorage.getItem("pollData")) || { votes: {}, voters: {} };

function addVote(userEmail, favSport) {
    // Check if the user already voted
    if (pollData.voters[userEmail]) {
        alert("You have already voted!");
        return false;
    }

    // Increment the vote count for the selected option
    pollData.votes[favSport] = (pollData.votes[favSport] || 0) + 1;

    // Record that the user voted
    pollData.voters[userEmail] = favSport;

    // Update localStorage
    localStorage.setItem("pollData", JSON.stringify(pollData));
    alert("Vote submitted successfully!");
    return true;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const userEmail = localStorage.getItem("loggedInUser"); // Assume user is logged in
    let favSport;

    for (const entry of data) {
        favSport = entry[1]; // Extract selected option
    }

    if (userEmail && favSport) {
        addVote(userEmail, favSport);
    } else {
        alert("Please log in and select an option.");
    }
});
