const exec = require("child_process").exec;
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../packages/components/.env"),
});

console.log("Deploy components to Chromatic");

exec(
  `npx chromatic --project-token ${process.env.CHROMATIC_PROJECT_TOKEN}`,
  {
    cwd: process.cwd(),
  },
  (error, stdout) => {
    if (error) console.log(error);
    console.log(stdout);
  }
);
