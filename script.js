// Task 1: Dark / Light Mode

let themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (themeButton.innerText === "Dark Mode") {
        themeButton.innerText = "Light Mode";
    } else {
        themeButton.innerText = "Dark Mode";
    }

});


// Task 2: Show More / Show Less

let aboutButton = document.getElementById("about-button");
let moreAbout = document.getElementById("more-about");

aboutButton.addEventListener("click", function () {

    moreAbout.classList.toggle("hidden-about");

    if (aboutButton.innerText === "Show More") {
        aboutButton.innerText = "Show Less";
    } else {
        aboutButton.innerText = "Show More";
    }

});


// Task 3: Dynamic Projects

let projects = [

    {
        title: "Personal CV Website",
        year: "2026",
        description: "Created a responsive personal CV website to present my education, experience, projects, and skills.",
        category: "Web",
        technologies: "HTML, CSS, JavaScript",
        details: []
    },

    {
        title: "Laundry Management System – Software Engineering Course Project",
        year: "2025",
        description: "Developed a Java-based laundry management system as part of a software engineering course project.",
        category: "Programming",
        technologies: "Java, UML",
        details: [
            "Contributed to UML system design and UI/UX development for the application interface.",
            "Implemented core system features while collaborating in an Agile team."
        ]
    },

    {
        title: "1st Place Winner – SiyahaThon Hackathon (TechHub)",
        year: "2024",
        description: "Developed the concept of an AI-powered solution to enhance tourism experience and cultural engagement in Saudi Arabia.",
        category: "Design",
        technologies: "UI/UX Design, Figma",
        details: [
            "Led the UI/UX design and built the complete interactive prototype demonstrating the app's user journey and key features.",
            "Contributed to structuring the project presentation and pitch delivered to judges.",
            "Successfully presented the solution and prototype, achieving 1st place among competing teams."
        ]
    }

];


let projectsGrid = document.getElementById("projects-grid");


// Display all projects or projects from one category

function renderProjects(category) {

    // Clear previous cards to avoid duplicates
    projectsGrid.innerHTML = "";

    projects.forEach(function (project) {

        if (category === "All" || project.category === category) {

            // Create the project card
            let card = document.createElement("article");
            card.classList.toggle("project-item");

            // Create the heading
            let heading = document.createElement("div");
            heading.classList.toggle("project-heading");

            let title = document.createElement("h3");
            title.innerText = project.title;

            let year = document.createElement("span");
            year.innerText = project.year;

            heading.appendChild(title);
            heading.appendChild(year);

            // Create the description
            let description = document.createElement("p");
            description.innerText = project.description;

            // Create category and technologies
            let categoryText = document.createElement("p");
            categoryText.innerText = "Category: " + project.category;

            let technologies = document.createElement("p");
            technologies.innerText = "Technologies: " + project.technologies;

            // Add elements to the card
            card.appendChild(heading);
            card.appendChild(description);
            card.appendChild(categoryText);
            card.appendChild(technologies);

            // Add project details if available
            if (project.details.length > 0) {

                let detailsList = document.createElement("ul");

                project.details.forEach(function (detail) {

                    let item = document.createElement("li");
                    item.innerText = detail;

                    detailsList.appendChild(item);

                });

                card.appendChild(detailsList);
            }

            // Add the card to the page
            projectsGrid.appendChild(card);

        }

    });

}


// Task 4: Project Filtering

document.getElementById("all-button").addEventListener("click", function () {
    renderProjects("All");
});

document.getElementById("web-button").addEventListener("click", function () {
    renderProjects("Web");
});

document.getElementById("programming-button").addEventListener("click", function () {
    renderProjects("Programming");
});


// Display all projects when the page loads
renderProjects("All");


// Task 5: Print / Save as PDF

document.getElementById("print-button").addEventListener("click", function () {

    // Show all projects before printing
    renderProjects("All");

    window.print();

});