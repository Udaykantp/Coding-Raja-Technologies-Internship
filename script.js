const form = document.getElementById('resume-form');
const previewBtn = document.getElementById('preview-btn');
const downloadBtn = document.getElementById('download-btn');
const resumePreview = document.getElementById('resume-preview');

let resumeData = {};

form.addEventListener('input', (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    resumeData[name] = value;
});

previewBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generateResumePreview();
});

downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    downloadResume();
});

function generateResumePreview() {
    const template = `
        <h1>${resumeData.name}</h1>
        <p><strong>Email:</strong> ${resumeData.email}</p>
        <p><strong>Phone:</strong> ${resumeData.phone}</p>
        <h2>Objective:</h2>
        <p>${resumeData.objective}</p>
        <h2>Education:</h2>
        <p>${resumeData.education}</p>
        <h2>Work Experience:</h2>
        <p>${resumeData.workExperience}</
