//sign up-------------------------------
function validateSignup() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let bloodGroup = document.getElementById("bloodType").value;
    let email = document.getElementById("email").value;
    if (name === "" || age === "" || bloodGroup === "" || email === "") {
        alert("Please fill all fields!");
    } 
    else if (age < 18) {
        alert("You must be at least 18 to donate blood.");
    } 
    else {
        alert("Signup Successful ❤️ Redirecting to Home...");
        // 👉 Redirect to Home page
        window.location.href = "index.html";
    }
}
//menu section----------------------------------
document.getElementById("searchInput").addEventListener("input", function () {
    console.log("Searching for:", this.value);
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
        dropdown.querySelector('.dropdown-menu').style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.dropdown-menu').style.display = 'none';
    });
});
