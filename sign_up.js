let signup = document.querySelector("#signup");

signup.addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;


    let users = JSON.parse(localStorage.getItem("users")) || [];


    const userAvailable = users.some(
        (user) => user.email === email || user.phone === phone
    );

    if (userAvailable) {
        alert("User Already Exists!");
    } else {
        let userData = {
            name: name,
            email: email, 
            phone: phone,
            password: password, 
        };

        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));

        alert("User Registered Successfully!");
        window.location.href = "mainPage.html"; 
    }
});
