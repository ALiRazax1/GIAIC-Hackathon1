// Get the form and resume container elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContainer = document.getElementById('generated-resume') as HTMLElement;

// Function to handle form submission and generate resume
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Capture the values from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const degree = (document.getElementById('education-degree') as HTMLInputElement).value;
    const institution = (document.getElementById('education-institution') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const yearsWorked = (document.getElementById('years-worked') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Clear the existing resume content
    resumeContainer.innerHTML = '';

    // Dynamically generate and display the resume
    resumeContainer.innerHTML = `
        <h2>Resume for ${name}</h2>
        <h3>Personal Information</h3>
        <p><strong>Email:</strong> ${email}</p>
        
        <h3>Education</h3>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>Institution:</strong> ${institution}</p>
        
        <h3>Work Experience</h3>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Years Worked:</strong> ${yearsWorked}</p>
        
        <h3>Skills</h3>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    `;
});
