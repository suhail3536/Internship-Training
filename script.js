// Home
document.getElementById("homeLink").addEventListener("click", function() {
    document.getElementById("home").scrollIntoView({behavior: "smooth"});
});

// About
document.getElementById("aboutLink").addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
});

// Skills
document.getElementById("skillsLink").addEventListener("click", function() {
    document.getElementById("skills").scrollIntoView({behavior: "smooth"});
});

// Projects
document.getElementById("projectLink").addEventListener("click", function() {
    document.getElementById("projects").scrollIntoView({behavior: "smooth"});
});

// Contact
document.getElementById("contactLink").addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({behavior: "smooth"});
});

// Download Resume Button
document.getElementById("downloadBtn").addEventListener("click", function () {
    
    // resume.pdf should be inside your project folder
    window.open("resume.pdf", "_blank");

});


// Visit Github Button
document.getElementById("githubBtn").addEventListener("click", function () {

    window.open("https://github.com/Suhailrajput14", "_blank");

});
document.getElementById("downloadBtn").addEventListener("click", function () {

    const link = document.createElement("a");
    link.href = "resume.pdf";
    link.download = "Suhail_Resume.pdf";
    link.click();

});