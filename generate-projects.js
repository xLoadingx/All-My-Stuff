const fs = require('fs');
const path = require('path');

const PROJECTS_PATH = './projects.html';
const PROJECTS_DIR = './projects';

// Function to generate the projects list
const generateProjectsList = () => {
  if (!fs.existsSync(PROJECTS_DIR)) {
    console.error(`The directory ${PROJECTS_DIR} does not exist.`);
    return '';
  }

  const files = fs.readdirSync(PROJECTS_DIR).filter(file => file.endsWith('.html'));

  let projectsList = '';
  files.forEach(file => {
    const projectName = path.basename(file, '.html');
    projectsList += `<li><a href="${PROJECTS_DIR}/${file}">${projectName}</a></li>\n`;
  });

  return projectsList;
};

// Function to generate the projects.html content
const generateProjectsHTML = () => {
  const projectsList = generateProjectsList();

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projects</title>
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
  <header>
    <h1>My Projects</h1>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="https://github.com/xLoadingx">My GitHub Profile</a></li>
        <li><a href="https://github.com/xLoadingx/All-My-Stuff">Original Repository</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2>Project Files</h2>
      <ul>
        ${projectsList}
      </ul>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 ERROR</p>
  </footer>
</body>
</html>`;

  fs.writeFileSync(PROJECTS_PATH, htmlContent);
};

// Generate the projects.html file
generateProjectsHTML();
