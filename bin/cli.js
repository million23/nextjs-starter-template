#!/usr/bin/env node
const { execSync } = require("child_process");

const run = (command) => {
	try {
		execSync(command, { stdio: "inherit" });
	} catch (error) {
		console.error(`Failed to execute command [${command}]`, error);
		return false;
	}
	return true;
};

const project_name = process.argv[2];
const git_checkout_command = `git clone --depth 1 https://github.com/million23/nextjs-starter-template.git ${project_name}`;

console.log(`> Creating new template project [${project_name}]...`);

const checkedOut = run(git_checkout_command);
if (!checkedOut) {
	console.error("Failed to checkout template project");
	process.exit(-1);
}

console.log("> Removing remote git repository...");
const removeGit = run(`cd ${project_name} && rm -rf .git`);
if (!removeGit) {
	console.error("Failed to remove git");
	process.exit(-1);
}

console.log("\n\n\n");
console.log(
	"Congratulations! Your project is ready. Please run the following commands to get started:"
);
console.log(`cd ${project_name}`);
console.log("npm install");

console.log("\n\n\n");
console.log("To start the development server:");
console.log("npm run dev");

console.log("\n\n\n");
console.log("To build the project:");
console.log("npm run build");

console.log("\n\n\n");
console.log("To start the production server:");
console.log("npm run start");
