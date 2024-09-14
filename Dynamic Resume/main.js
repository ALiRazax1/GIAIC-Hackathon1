// Get the form and resume container elements
var form = document.getElementById('resume-form');
var resumeContainer = document.getElementById('generated-resume');
// Function to handle form submission and generate resume
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Capture the values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var degree = document.getElementById('education-degree').value;
    var institution = document.getElementById('education-institution').value;
    var jobTitle = document.getElementById('job-title').value;
    var company = document.getElementById('company').value;
    var yearsWorked = document.getElementById('years-worked').value;
    var skills = document.getElementById('skills').value.split(',');
    // Clear the existing resume content
    resumeContainer.innerHTML = '';
    // Dynamically generate and display the resume
    resumeContainer.innerHTML = "\n        <h2>Resume for ".concat(name, "</h2>\n        <h3>Personal Information</h3>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        \n        <h3>Education</h3>\n        <p><strong>Degree:</strong> ").concat(degree, "</p>\n        <p><strong>Institution:</strong> ").concat(institution, "</p>\n        \n        <h3>Work Experience</h3>\n        <p><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n        <p><strong>Company:</strong> ").concat(company, "</p>\n        <p><strong>Years Worked:</strong> ").concat(yearsWorked, "</p>\n        \n        <h3>Skills</h3>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    ");
});
