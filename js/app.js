const about = `
    <h2>
        Front End Web Developer
    </h2>

    <h3>Who I am</h3>
    <p>
        I'm a programmer. I want to keep learning new things and understand how it really works under the hood of a website.
    </p>

    <h3>What I know</h3>
    <p>
        I am learning Web Programming, especially Front End Web Development at Teamtreehouse and figuring out how to build awesome websites. 
    </p>
    <p>
        My background was in JavaScript programming for almost two years experience learning web development and I'm passionate about coding. Since I was a child, I have enjoyed playing games that had something to do with technology but never thought about the technology behind games development. I finally realized the importance of understanding the code that were written by professional programmers.
    </p>
    <p>
        For web development I work with HTML5, CSS3, and JavaScript to build modern, responsive and performance optimized web sites and applications. I have started learning React library and I liked it a lot, the ability to make SPA with react router, the ability to mix html with javascript and do some powerful things is really great, and it's fast.
    </p>

    <h3>What I'm looking for</h3>
    <p>
        I am looking for a company who wants a long term collaboration. Preferably it's a remote friendly job.
        I'm open for an employment or a freelance solution.
    </p>

    <h3>What I do offline</h3>
    <p>
        I stay a lot at home. Because I like reading useful information and interesting articles.
    </p>`;

const projects = [
    {
    "name"       : "Online Registration Form",
    "tag"        : "web",
    "skills"     : ["HTML", "CSS"],
    "description": "In this project I built a responsive, mobile-friendly registration form using a wide variety of HTML form input types and attributes. Using the supplied mockup files, I built a mobile and desktop version of the form using media queries, and a \"mobile-first\" approach.",
    "source"    : "https://github.com/Excell07/third-project",
    "image"       : "img/portfolio/online-registration-form.jpg",
    "demo"        : "https://excell07.github.io/third-project"
    },
    {
    "name"       : "Interactive Photo Gallery",
    "tag"        : "web",
    "skills"     : ["HTML", "CSS", "JavaScript", "jQuery"],
    "description": "In this project I created an interactive photo gallery using JavaScript and jQuery. Thumbnails and photos were provided with descriptions. At the top of the page I implemented a search function that will hide and show images depending on user input. When the user clicks on a thumbnail, the photo will display in a lightbox.",
    "source"    : "https://github.com/Excell07/fourth-project",
    "image"       : "img/portfolio/interactive-photo-gallery.jpg",
    "demo"        : "https://excell07.github.io/fourth-project"
    },
    {
    "name"       : "Web Style Guide",
    "tag"        : "web",
    "skills"     : ["HTML", "CSS", "Sass", "BEM"],
    "description": "In this project, I was provided an index.html file with a set of class names already defined. I was responsible for creating rules to style the web page using each of those class names. I create a sass project to do this, using partials, variables, extends, and mixins to apply the styles and classes to the style guide page.",
    "source"    : "https://github.com/Excell07/fifth-project",
    "image"       : "img/portfolio/web-style-guide.jpg",
    "demo"        : "https://excell07.github.io/fifth-project"
    },
    {
    "name"       : "Interactive Video Player",
    "tag"        : "web",
    "skills"     : ["HTML", "CSS", "JavaScript"],
    "description": "In this project, I built an HTML5 video player using JavaScript and the HTML5 Video API. Using the supplied mockups, video files, and transcript, I built an interactive video player that synchronizes a video and its transcript. The transcript highlight as the video progresses. When a user clicks any part of the transcript it takes them to the appropriate place in the video.",
    "source"    : "https://github.com/Excell07/sixth-project",
    "image"       : "img/portfolio/interactive-video-player.jpg",
    "demo"        : "https://excell07.github.io/sixth-project"
    },
    {
    "name"       : "Wheel of Success Game",
    "tag"        : "web",
    "skills"     : ["HTML", "CSS", "JavaScript"],
    "description": "In this project, I created a browser version of 'Wheel of Success', a word guessing game where players will click letters from an onscreen keyboard to try to guess a random phrase.",
    "source"    : "https://github.com/Excell07/seventh-project",
    "image"       : "img/portfolio/wheel-of-success.jpg",
    "demo"        : "https://excell07.github.io/seventh-project"
    },
    {
    "name"       : "SVG Animations",
    "tag"        : "web",
    "skills"     : ["HTML", "CSS", "SVG"],
    "description": "In this project, I used SVGs to spruce up and add a bit of character to a website. I was given a mockup, some basic HTML and CSS, and matching SVG files. I learned how to create SVG symbols and to manipulate SVGs depending of media queries.",
    "source"    : "https://github.com/Excell07/eighth-project",
    "image"       : "img/portfolio/svg-animations.jpg",
    "demo"        : "https://excell07.github.io/eighth-project"
    },
    {
    "name"       : "Web App Dashboard",
    "tag"        : "web",
    "skills"     : ["HTML", "CSS", "Sass", "jQuery"],
    "description": "In this project, I built a web dashboard with JavaScript-driven charts and graphs. I also saved settings in the local storage so it would remain after re-loading the page.",
    "source"    : "https://github.com/Excell07/ninth-project",
    "image"       : "img/portfolio/web-app-dashboard.jpg",
    "demo"        : "https://excell07.github.io/ninth-project"
    },
    {
    "name"       : "Employee Directory",
    "tag"        : "web",
    "skills"     : ["HTML", "CSS", "JavaScript", "JSON", "Public API"],
    "description": "In this project, I used the Random User Generator API (https://randomuser.me/) to grab information for 12 random 'employees', and used that data to build a prototype for an Awesome Startup employee directory. The app requests a JSON object from the API and parse the data so that 12 employees are listed in a gred with their thumbnail image, full name, email, and location. Clicking the employee's image or name will open a modal window with more detailed information, such as the employee's birthday and address.",
    "source"    : "https://github.com/Excell07/tenth-project",
    "image"       : "img/portfolio/employee-directory.jpg",
    "demo"        : "https://excell07.github.io/tenth-project"
    },
    {
    "name"       : "React Flickr Gallery",
    "tag"        : "web",
    "skills"     : ["CSS", "ReactJS", "React Router 4", "NPM"],
    "description": "In this project, I built an image gallery using React and the Flickr API. After creating the project with create-react-app, I did build the gallery components, wrote the CSS and did set up routing.",
    "source"    : "https://github.com/Excell07/eleventh-project",
    "image"       : "img/portfolio/react-flickr-gallery.jpg",
    "demo"        : ""
    },
];

const contact = `
    <h2>Contact</h2>
    <p>
        Feel free to reach out to me. I'm almost always available in the digital world.
       I'm currently living in Manado in Indonesia.
    </p>
    <p>
        <strong>Email</strong></br>
        developerzero7@gmail.com
    </p>`;

const aboutLink = document.getElementById('nav-about');
const portfolioLink = document.getElementById('nav-portfolio');
const contactLink = document.getElementById('nav-contact');
const mainNav = document.getElementById('main-nav');
const navLinks = [aboutLink, portfolioLink, contactLink];
const main = document.getElementsByTagName('main')[0];
const body = document.body;

// Load about page
function loadPage(){
    createNavLinks();
    const container = document.createElement('div');
    main.appendChild(container);
    container.innerHTML = about;
}

// Nav Links
function createNavLinks(){
    mainNav.addEventListener('click', e => {
        e.preventDefault();
        if(e.target.tagName === 'A'){
            e.preventDefault();

            navLinks.forEach(function(link){
                link.classList.remove('current');
            });

            e.target.className = 'current';

            while(main.firstChild){
                main.removeChild(main.firstChild);
            }
            loadContent(e.target.id);
        }
    });
}

// Load page content for each page
function loadContent(clickedLink){
    if(clickedLink === 'nav-about'){
        main.innerHTML = about;
    }
    else if(clickedLink === 'nav-portfolio'){
        const projectsTitle = document.createElement('h2');
        projectsTitle.innerHTML = "Projects";
        main.appendChild(projectsTitle);

        const projectContainer = document.createElement('div');
        projectContainer.className = 'project-container';
        main.appendChild(projectContainer);

        projects.forEach(function(project){
            const projectDiv = document.createElement('div');

            projectDiv.className = 'project';

            // Add click functionality to project to read more
            projectDiv.addEventListener('click', function(){
                const overlay = document.createElement('div');
                overlay.id = 'overlay';
                body.appendChild(overlay);

            // Close overlay on click
            overlay.addEventListener('click', function(e){
                if (e.target !== this){
                    return;
                }
                else {
                    overlay.remove();
                }
            });

            // Project Card
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            overlay.appendChild(projectCard);

            // Close button
            const close = document.createElement('p');
            close.className = 'close-button';
            close.innerHTML = '&times;';
            close.addEventListener('click', function() {
                overlay.remove();
            });
            projectCard.appendChild(close);

            // Project's Details
            const projectName = document.createElement('h3');
            projectName.innerHTML = project.name;
            projectCard.appendChild(projectName);

            const projectImage = document.createElement('img');
            projectImage.src = project.image;
            projectImage.alt = project.name;
            projectImage.className = "project-image";
            projectCard.appendChild(projectImage);

            const skills = document.createElement('div');
            skills.className = 'skills';
            projectCard.appendChild(skills);
            for (let i = 0; i < project.skills.length; i++){
                const skill = document.createElement('span');
                skill.className = 'skill';
                skill.innerHTML = project.skills[i];
                skills.appendChild(skill);
            }

            const projectDescription = document.createElement('div');
            projectCard.appendChild(projectDescription);

            const descriptionTitle = document.createElement('h4');
            descriptionTitle.innerHTML = 'Project Description';
            projectDescription.appendChild(descriptionTitle);

            const description = document.createElement('p');
            description.innerHTML = project.description;
            projectDescription.appendChild(description);

						const sourceCode = document.createElement('a');
						sourceCode.href = project.source;
						sourceCode.target = "_blank";
						sourceCode.className = "btngit"
						sourceCode.innerHTML = "Source Code";
						projectDescription.appendChild(sourceCode);
						
						if (project.demo !== ""){
							const livePage = document.createElement('a');
							livePage.href = project.demo;
							livePage.target = "_blank";
							livePage.className = "btngit";
							livePage.innerHTML = "Demo";
							projectDescription.appendChild(livePage);
            }
            });

            // Project Overview
            const projectName = document.createElement('h3');
            projectName.innerHTML = project.name;
            projectDiv.appendChild(projectName);

            const projectImage = document.createElement('img');
            projectImage.src = project.image;
            projectImage.alt = project.name;
            projectImage.className = 'project-image';
            projectDiv.appendChild(projectImage);

            projectContainer.appendChild(projectDiv);
        });
    }
    else {
        main.innerHTML = contact;
    }
}

loadPage();