document.getElementById('generate-resume')!.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fathername = (document.getElementById('fathername') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const gender = (document.getElementById('gender') as HTMLSelectElement).value;
    const age = (document.getElementById('age') as HTMLInputElement).value;
    const birthdate = (document.getElementById('birthdate') as HTMLInputElement).value;
    const birthplace = (document.getElementById('birthplace') as HTMLInputElement).value;
    const nationality = (document.getElementById('nationality') as HTMLInputElement).value;
    const status = (document.getElementById('status') as HTMLSelectElement).value;
    const religion = (document.getElementById('religion') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;

    // Get profile picture input
    const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
    const resumePictureDiv = document.getElementById('resume-picture')!;

    // Clear previous picture
    resumePictureDiv.innerHTML = '';

    // Check if a picture is uploaded
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(event) {
            // Create an image element to display the uploaded picture
            const img = document.createElement('img');
            img.src = event.target!.result as string;  // Set the image source to the file's data URL
            resumePictureDiv.appendChild(img);  // Append image to the div
        };

        reader.readAsDataURL(profilePictureInput.files[0]);
    }

    // Generate resume content
    const resumeContent = `
        <html>
        <head>
            <style>
                /* Include the CSS here for the downloaded file */
                body {
                    font-family: Arial, sans-serif;
                    background-color: #d4a816;
                    margin: 0;
                    padding: 0;
                }

                .container {
                    max-width: 800px;
                    margin: 50px auto;
                    padding: 20px;
                    background-color: #fffaa1;
                    border-radius: 10px;
                    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
                }

                h1 {
                    text-align: center;
                    color: #333;
                }

                h2 {
                    color: #021688;
                }

                #resume-picture {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin: 10px auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                }

                #resume-picture img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                p {
                    font-size: 16px;
                    margin-bottom: 8px;
                }

                h3 {
                    color: #2646fd;
                }

                .hidden {
                    display: none;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>${name}</h1>
                <div id="resume-picture"></div>  <!-- Profile picture will appear here -->
                <p><strong>Father's Name:</strong> ${fathername}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Age:</strong> ${age}</p>
                <p><strong>Birthdate:</strong> ${birthdate}</p>
                <p><strong>Birthplace:</strong> ${birthplace}</p>
                <p><strong>Nationality:</strong> ${nationality}</p>
                <p><strong>Status:</strong> ${status}</p>
                <p><strong>Religion:</strong> ${religion}</p>
                <h3>Experience</h3>
                <p>${experience}</p>
                <h3>Education</h3>
                <p>${education}</p>
            </div>
        </body>
        </html>
    `;

    const resumeOutput = document.getElementById('resume-output')!;
    const resumeContentDiv = document.getElementById('resume-content')!;

    // Show the generated resume
    resumeContentDiv.innerHTML = resumeContent;
    resumeOutput.classList.remove('hidden');

    // Add the download functionality
    const downloadButton = document.createElement('button');
    downloadButton.textContent = 'Download Resume';
    downloadButton.addEventListener('click', () => {
        const blob = new Blob([resumeContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${name}_Resume.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    resumeOutput.appendChild(downloadButton);  // Append download button

    // Add the Edit functionality
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit Resume';
    editButton.addEventListener('click', () => {
        // Fill the form with the current values for editing
        (document.getElementById('name') as HTMLInputElement).value = name;
        (document.getElementById('fathername') as HTMLInputElement).value = fathername;
        (document.getElementById('email') as HTMLInputElement).value = email;
        (document.getElementById('phone') as HTMLInputElement).value = phone;
        (document.getElementById('gender') as HTMLSelectElement).value = gender;
        (document.getElementById('age') as HTMLInputElement).value = age;
        (document.getElementById('birthdate') as HTMLInputElement).value = birthdate;
        (document.getElementById('birthplace') as HTMLInputElement).value = birthplace;
        (document.getElementById('nationality') as HTMLInputElement).value = nationality;
        (document.getElementById('status') as HTMLSelectElement).value = status;
        (document.getElementById('religion') as HTMLInputElement).value = religion;
        (document.getElementById('experience') as HTMLTextAreaElement).value = experience;
        (document.getElementById('education') as HTMLTextAreaElement).value = education;

        // Remove the generated resume from view
        resumeOutput.classList.add('hidden');
    });

    resumeOutput.appendChild(editButton);  // Append edit button
});
