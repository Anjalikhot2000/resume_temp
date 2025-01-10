// Preview Profile Picture
function previewImage(event) {
    const file = event.target.files[0];
    const preview = document.getElementById("profile-picture-preview");
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = "block";
            preview.style.width = "100px";
            preview.style.height = "100px";
            preview.style.objectFit = "cover";
            preview.style.borderRadius = "50%";
        };
        reader.readAsDataURL(file);
    }
}

// Add Experience
function addExperience() {
    const container = document.getElementById("experience-container");
    const div = document.createElement("div");
    div.innerHTML = `
        <input type="text" placeholder="Job Title">
        <input type="text" placeholder="Company">
        <input type="text" placeholder="Years">
        <textarea placeholder="Description"></textarea>
    `;
    container.appendChild(div);
}

// Add Education
function addEducation() {
    const container = document.getElementById("education-container");
    const div = document.createElement("div");
    div.innerHTML = `
        <input type="text" placeholder="Degree">
        <input type="text" placeholder="School">
        <input type="text" placeholder="Years">
    `;
    container.appendChild(div);
}

// Add Skill
function addSkill() {
    const skill = document.getElementById("skill-input").value;
    if (skill) {
        const container = document.getElementById("skills-container");
        const span = document.createElement("span");
        span.className = "skill";
        span.textContent = skill;
        container.appendChild(span);
    }
}

// Generate Resume
function generateResume() {
    document.getElementById("form-section").style.display = "none";
    document.getElementById("resume-preview").style.display = "flex";
    document.getElementById("back-button").style.display = "inline-block";
    document.getElementById("print-button").style.display = "inline-block";

    const profilePicture = document.getElementById("profile-picture-preview").src;
    document.getElementById("resume-profile-picture").src = profilePicture;
    document.getElementById("resume-profile-picture").style.display = "block";

    document.getElementById("resume-name").textContent = document.getElementById("full-name").value;
    document.getElementById("resume-role").textContent = document.getElementById("role").value;

    const contact = `
        <p>${document.getElementById("phone").value}</p>
        <p>${document.getElementById("email").value}</p>
        <p>${document.getElementById("address").value}</p>
    `;
    document.getElementById("resume-contact").innerHTML = contact;

    document.getElementById("resume-about").innerHTML = `<h3>About Me</h3><p>${document.getElementById("about-me").value}</p>`;

    const experienceContainer = document.getElementById("experience-container");
    const resumeExperience = document.getElementById("resume-experience");
    resumeExperience.innerHTML = "<h3>Experience</h3>";
    experienceContainer.querySelectorAll("div").forEach((experience) => {
        const title = experience.querySelector("input:nth-of-type(1)").value;
        const company = experience.querySelector("input:nth-of-type(2)").value;
        const years = experience.querySelector("input:nth-of-type(3)").value;
        const description = experience.querySelector("textarea").value;

        resumeExperience.innerHTML += `
            <p><strong>${title}</strong> at <strong>${company}</strong> (${years})</p>
            <p>${description}</p>
        `;
    });

    const educationContainer = document.getElementById("education-container");
    const resumeEducation = document.getElementById("resume-education");
    resumeEducation.innerHTML = "<h3>Education</h3>";
    educationContainer.querySelectorAll("div").forEach((education) => {
        const degree = education.querySelector("input:nth-of-type(1)").value;
        const school = education.querySelector("input:nth-of-type(2)").value;
        const years = education.querySelector("input:nth-of-type(3)").value;

        resumeEducation.innerHTML += `
            <p><strong>${degree}</strong>, ${school} (${years})</p>
        `;
    });

    const skillsContainer = document.getElementById("skills-container");
    const resumeSkills = document.getElementById("resume-skills");
    resumeSkills.innerHTML = "<h3>Skills</h3>";
    skillsContainer.querySelectorAll(".skill").forEach((skill) => {
        resumeSkills.innerHTML += `<span class="skill">${skill.textContent}</span>`;
    });
}

// Back to Form
function goBack() {
    document.getElementById("form-section").style.display = "block";
    document.getElementById("resume-preview").style.display = "none";
    document.getElementById("back-button").style.display = "none";
    document.getElementById("print-button").style.display = "none";
}

// Print Resume
function printResume() {
    const printButton = document.getElementById("print-button");
    const backButton = document.getElementById("back-button");

    printButton.style.display = "none";
    backButton.style.display = "none";

    window.print();

    printButton.style.display = "inline-block";
    backButton.style.display = "inline-block";
}
