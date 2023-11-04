function submitForm() {
    
    if (validateForm()) {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const gender = [...document.getElementsByName("gender")]
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value)
            .join(", ");
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        const popupResults = document.getElementById("popup-results");
        popupResults.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

        
        const popup = document.getElementById("popup");
        popup.style.display = "flex";
    }
}

function validateForm() {
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const dob = document.getElementById("dob").value;
const country = document.getElementById("country").value;
const genderChecked = Array.from(document.getElementsByName("gender")).some(checkbox => checkbox.checked);
const profession = document.getElementById("profession").value;
const email = document.getElementById("email").value;
const mobile = document.getElementById("mobile").value;

if (firstName === "" || lastName === "" || dob === "" || country === "" || !genderChecked || profession === "" || email === "" || mobile === "") {
alert("Please fill out all required fields.");
return false; 
}

// Email validation
if (!isValidEmail(email)) {
alert("Please enter a valid email address.");
return false;
}

// Mobile number validation
if (!isValidMobile(mobile)) {
alert("Please enter a valid mobile number.");
return false;
}

return true; 
}


function isValidEmail(email) {
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailPattern.test(email);
}


function isValidMobile(mobile) {
const mobilePattern = /^[0-9]{10}$/;
return mobilePattern.test(mobile);
}



function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
document.getElementById("popup").style.display = "none"; 
resetForm();
}
