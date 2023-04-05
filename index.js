// #!/usr/bin/env node

// const spawn = require("cross-spawn");
// const fs = require("fs");
// const path = require("path");

// const projectName = process.argv[2];

// // Create a project directory with the project name.
// const currentDir = process.cwd();
// const projectDir = path.resolve(currentDir, projectName);
// fs.mkdirSync(projectDir, { recursive: true });

// // A common approach to building a starter template is to
// // create a `template` folder which will house the template
// // and the files we want to create.
// const templateDir = path.resolve(__dirname, "template");
// fs.cpSync(templateDir, projectDir, { recursive: true });

// // fs.renameSync(
// //   path.join(projectDir, 'gitignore'),
// //   path.join(projectDir, '.gitignore')
// // );

// const projectPackageJson = require(path.join(projectDir, "package.json"));
// projectPackageJson.name = projectName;

// fs.writeFileSync(
//   path.join(projectDir, "package.json"),
//   JSON.stringify(projectPackageJson, null, 2)
// );

// // Run `npm install` in the project directory to install
// // the dependencies. We are using a third-party library
// // called `cross-spawn` for cross-platform support.
// // (Node has issues spawning child processes in Windows).
// spawn.sync("npm", ["install"], { stdio: "inherit" });

// console.log("Success! Your new project is ready.");
// console.log(`Created ${projectName} at ${projectDir}`);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the project name: ", (projectName) => {
  console.log(`Creating project "${projectName}"...`);

  // Create a project directory with the project name.
  const currentDir = process.cwd();
  const projectDir = path.resolve(currentDir, projectName);
  fs.mkdirSync(projectDir, { recursive: true });

  // A common approach to building a starter template is to
  // create a `template` folder which will house the template
  // and the files we want to create.
  const templateDir = path.resolve(__dirname, "template");
  fs.cpSync(templateDir, projectDir, { recursive: true });

  // Rename gitignore file.
  fs.renameSync(
    path.join(projectDir, "gitignore"),
    path.join(projectDir, ".gitignore")
  );

  const projectPackageJson = require(path.join(projectDir, "package.json"));
  projectPackageJson.name = projectName;

  fs.writeFileSync(
    path.join(projectDir, "package.json"),
    JSON.stringify(projectPackageJson, null, 2)
  );

  // Run `npm install` in the project directory to install
  // the dependencies. We are using a third-party library
  // called `cross-spawn` for cross-platform support.
  // (Node has issues spawning child processes in Windows).
  spawn.sync("npm", ["install"], { stdio: "inherit" });

  console.log("Success! Your new project is ready.");
  console.log(`Created ${projectName} at ${projectDir}`);

  rl.close();
});
