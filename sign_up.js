let signin = document.getElementById("signin_btn");

signin.addEventListener("click", (e) => {
    e.preventDefault();
    const loginemail = document.getElementById("personalDetails").value;
    const loginpassword = document.getElementById("personalPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const isPresent = users.find(
        (user) => user.email === loginemail && user.password === loginpassword
    );

    if (isPresent) {
        localStorage.setItem("loggedInUser", loginemail); 
        window.location.href = "mainPage.html";
    } else {
        alert("Incorrect Email/Phone Number or Password! Please try again.");
    }
});
