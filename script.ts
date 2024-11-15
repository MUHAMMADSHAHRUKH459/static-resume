// Data for different sections
const resumeData = {
    education: [
        "Founder at Intellibot Creation - Generative AI Engineer (2023-Present)",
        "Governor Initiative For Artificial Intelligence and Computing 2024",
        "Diploma of Science in Computer Science - University of CMS (2019-2023)",
        "Certification in Full Stack Development - Microsoft Azure (2023)"
    ],
    skills: [
        "JavaScript", "TypeScript", "HTML/CSS", "React", "Next.js",
        "Python", "Node.js", "SaaS", "Chatbot", "Generative AI"
    ],
    experience: [
       "Software Developer at Internee.pk (2022-2023)",
       "Founder & Chatbot Developer at Intellibot Creation (2023-Present)"
    ]
};

// Function to populate a section with data
function populateSection(sectionId: string, data: string[]): void {
    const section = document.getElementById(sectionId);
    if (section) {
        if (sectionId === 'skills-content') {
            const skillList = data.map(skill => `<li>${skill}</li>`).join('');
            section.innerHTML = `<h2>Skills</h2><ul class="skill-list">${skillList}</ul>`;
        } else {
            const content = data.map(item => `<p>${item}</p>`).join('');
            section.innerHTML = `<h2>${sectionId.replace('-content', '').replace('-', ' ').toUpperCase()}</h2>${content}`;
        }
    }
}

// Populate sections on DOM load
document.addEventListener('DOMContentLoaded', () => {
    populateSection('education-content', resumeData.education);
    populateSection('skills-content', resumeData.skills);
    populateSection('work-experience-content', resumeData.experience);
});

// contact section

let contact_section = document.getElementById('conct');
let conct_btn = document.getElementById('conct_btn');

conct_btn?.addEventListener('click', () => {
    contact_section!.classList.toggle ('hide')
});

// education section

let education_section = document.getElementById('education-content');
let educ_btn = document.getElementById('educ_btn');

educ_btn?.addEventListener('click', () => {
    education_section!.classList.toggle ('hide')
});

// skill section

let skill_section = document.getElementById('skills-content');
let skill_btn = document.getElementById('skill_btn');

skill_btn?.addEventListener('click', () => {
    skill_section!.classList.toggle ('hide')
});

// experience section 

let exp_section = document.getElementById('work-experience-content');
let exp_btn = document.getElementById('exp_btn');

exp_btn?.addEventListener('click', () => {
    exp_section!.classList.toggle ('hide')
});

// print button 

let print_btn = document.getElementById('print_btn');

print_btn?.addEventListener('click', () => {
    window.print();
});