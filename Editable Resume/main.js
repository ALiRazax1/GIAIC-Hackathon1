// Get the form and resume container elements
var form = document.getElementById('resume-form');
var resumeContainer = document.getElementById('generated-resume');
// Function to handle form submission and generate the editable resume
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
    // Dynamically generate and display the editable resume
    resumeContainer.innerHTML = "\n        <h2 contenteditable=\"true\">".concat(name, "</h2>\n        <h3>Personal Information</h3>\n        <p contenteditable=\"true\"><strong>Email:</strong> ").concat(email, "</p>\n        \n        <h3>Education</h3>\n        <p contenteditable=\"true\"><strong>Degree:</strong> ").concat(degree, "</p>\n        <p contenteditable=\"true\"><strong>Institution:</strong> ").concat(institution, "</p>\n        \n        <h3>Work Experience</h3>\n        <p contenteditable=\"true\"><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n        <p contenteditable=\"true\"><strong>Company:</strong> ").concat(company, "</p>\n        <p contenteditable=\"true\"><strong>Years Worked:</strong> ").concat(yearsWorked, "</p>\n        \n        <h3>Skills</h3>\n        <ul contenteditable=\"true\">\n            ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    ");
    // Add contenteditable attribute to each resume section
    makeSectionsEditable();
});
// Function to make sections editable and handle blur event
function makeSectionsEditable() {
    var editableSections = resumeContainer.querySelectorAll('[contenteditable="true"]');
    editableSections.forEach(function (section) {
        section.addEventListener('blur', function (event) {
            var element = event.target;
            // Save changes when the user clicks out of the editable section
            console.log("".concat(element.tagName, " content updated: ").concat(element.innerText));
        });
    });
}
