// Function to get form data and generate resume content
document.getElementById('generate-resume').addEventListener('click', function () {
    var resumeData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        gender: document.getElementById('gender').value,
        age: document.getElementById('age').value,
        birthdate: document.getElementById('birthdate').value,
        birthplace: document.getElementById('birthplace').value,
        nationality: document.getElementById('nationality').value,
        fathername: document.getElementById('fathername').value,
        status: document.getElementById('status').value,
        religion: document.getElementById('religion').value,
        experience: document.getElementById('experience').value,
        education: document.getElementById('education').value,
    };
    var resumeContent = "\n        <h1>".concat(resumeData.name, "</h1>\n        <h3>Personal Information</h3>\n        <p><strong>Email:</strong> ").concat(resumeData.email, "</p>\n        <p><strong>Phone:</strong> ").concat(resumeData.phone, "</p>\n        <p><strong>Gender:</strong> ").concat(resumeData.gender, "</p>\n        <p><strong>Age:</strong> ").concat(resumeData.age, "</p>\n        <p><strong>Birthdate:</strong> ").concat(resumeData.birthdate, "</p>\n        <p><strong>Birthplace:</strong> ").concat(resumeData.birthplace, "</p>\n        <p><strong>Nationality:</strong> ").concat(resumeData.nationality, "</p>\n        <p><strong>Father's Name:</strong> ").concat(resumeData.fathername, "</p>\n        <p><strong>Status:</strong> ").concat(resumeData.status, "</p>\n        <p><strong>Religion:</strong> ").concat(resumeData.religion, "</p>\n        <h3>Experience</h3>\n        <p>").concat(resumeData.experience, "</p>\n        <h3>Education</h3>\n        <p>").concat(resumeData.education, "</p>\n    ");
    var resumeOutput = document.getElementById('resume-output');
    var resumeContentDiv = document.getElementById('resume-content');
    // Display the generated resume content
    resumeContentDiv.innerHTML = resumeContent;
    resumeOutput.classList.remove('hidden');
});
// Function to download the generated resume as PDF
document.getElementById('download-pdf').addEventListener('click', function () {
    var resumeContentDiv = document.getElementById('resume-content');
    html2pdf().from(resumeContentDiv).save('resume.pdf');
});
// Function to copy resume data to localStorage and generate a shareable link
document.getElementById('copy-link').addEventListener('click', function () {
    var resumeData = document.getElementById('resume-content').innerHTML;
    localStorage.setItem('resumeData', resumeData);
    // Generate a link with the stored data
    var shareableLink = "".concat(window.location.origin).concat(window.location.pathname, "?resumeData=true");
    navigator.clipboard.writeText(shareableLink).then(function () {
        alert('Shareable link copied to clipboard!');
    }).catch(function (err) {
        console.error('Failed to copy link: ', err);
    });
});
// Function to load resume from localStorage if link includes ?resumeData=true
window.addEventListener('load', function () {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('resumeData') === 'true') {
        var savedResumeData = localStorage.getItem('resumeData');
        if (savedResumeData) {
            document.getElementById('resume-content').innerHTML = savedResumeData;
            document.getElementById('resume-output').classList.remove('hidden');
        }
    }
});
