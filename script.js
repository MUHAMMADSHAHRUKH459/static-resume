// Data for different sections
var resumeData = {
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
function populateSection(sectionId, data) {
    var section = document.getElementById(sectionId);
    if (section) {
        if (sectionId === 'skills-content') {
            var skillList = data.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('');
            section.innerHTML = "<h2>Skills</h2><ul class=\"skill-list\">".concat(skillList, "</ul>");
        }
        else {
            var content = data.map(function (item) { return "<p>".concat(item, "</p>"); }).join('');
            section.innerHTML = "<h2>".concat(sectionId.replace('-content', '').replace('-', ' ').toUpperCase(), "</h2>").concat(content);
        }
    }
}
// Populate sections on DOM load
document.addEventListener('DOMContentLoaded', function () {
    populateSection('education-content', resumeData.education);
    populateSection('skills-content', resumeData.skills);
    populateSection('work-experience-content', resumeData.experience);
});
// contact section
var contact_section = document.getElementById('conct');
var conct_btn = document.getElementById('conct_btn');
conct_btn === null || conct_btn === void 0 ? void 0 : conct_btn.addEventListener('click', function () {
    contact_section.classList.toggle('hide');
});
// education section
var education_section = document.getElementById('education-content');
var educ_btn = document.getElementById('educ_btn');
educ_btn === null || educ_btn === void 0 ? void 0 : educ_btn.addEventListener('click', function () {
    education_section.classList.toggle('hide');
});
// skill section
var skill_section = document.getElementById('skills-content');
var skill_btn = document.getElementById('skill_btn');
skill_btn === null || skill_btn === void 0 ? void 0 : skill_btn.addEventListener('click', function () {
    skill_section.classList.toggle('hide');
});
// experience section 
var exp_section = document.getElementById('work-experience-content');
var exp_btn = document.getElementById('exp_btn');
exp_btn === null || exp_btn === void 0 ? void 0 : exp_btn.addEventListener('click', function () {
    exp_section.classList.toggle('hide');
});
// print button 
var print_btn = document.getElementById('print_btn');
print_btn === null || print_btn === void 0 ? void 0 : print_btn.addEventListener('click', function () {
    window.print();
});
