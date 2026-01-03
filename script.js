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

// services--------------------------------------
const services = [
    {
        text: "The Blood Availability Search lets users quickly check real-time blood availability across registered blood centers. By selecting State, District, Blood Group, Component and Location, users can easily find the required units. This tool supports patients, donors, and hospitals in making informed decisions during emergencies or planned treatments.",
        button: "Blood Availability Search"
    },
    {
        text: "The Blood Center Directory provides detailed information about registered blood centers including location, contact details, and services offered.",
        button: "Blood Center Directory"
    },
    {
        text: "Blood Donation Camps section helps users locate upcoming donation camps and encourages participation to save lives.",
        button: "Blood Donation Camps"
    },
    {
        text: "Donor Login allows registered donors to manage their profiles, check donation history, and receive notifications.",
        button: "Donor Login"
    },
    {
        text: "Register Voluntary Blood Camps enables organizations to register and manage blood donation camps easily.",
        button: "Register Blood Camps"
    }
];

function showService(index) {
    document.getElementById("serviceText").innerText = services[index].text;
    document.getElementById("serviceBtn").innerText = services[index].button;

    document.querySelectorAll(".card").forEach(card => {
        card.classList.remove("active");
    });

    document.querySelectorAll(".card")[index].classList.add("active");
}
