#!/usr/bin/env node

const insidersFlag = ["--insiders", "-i"];
const usageInfo = `gistpad [${insidersFlag.join("|")}] <gistOrRepo>.`;
const commands = ["today", "scratch"];

function printHelp() {
    console.log(
        `👋 Specify the name of a GitHub repo (owner/repo) or gist ID: ${usageInfo}`
    );
}

let [,, flag, gistOrRepo] = process.argv;

// If the user just ran "gistpad", then we
// want to display the CLI help text w/args.
if (!flag && !gistOrRepo) {
    return printHelp();
}

if (!gistOrRepo) {
    // If the user just ran "gistpad -i",
    // then print the help text.
    if (flag.startsWith("-")) {
        return printHelp();
    } else {
        // The user didn't specify a build flag, so
        // we'll treat the first arg as the repo/gist.
        gistOrRepo = flag;
        flag = undefined;
    }
} else {
    // The user specified two flags, so let's verify that
    // they provided a valid VS Code quality type or not.
    if (!insidersFlag.includes(flag)) {
        return console.error(
            `❌ The specified VS Code quality isn't valid. Please try again: ${usageInfo}`
        );
    }
}

const quality = insidersFlag.includes(flag) ? "vscode-insiders" : "vscode";
const param = gistOrRepo.includes("/") ? "repo" : "gist"

const urlRoot = `${quality}://vsls-contrib.gistfs`;
const path = commands.includes(gistOrRepo) ? gistOrRepo : `open?${param}=${gistOrRepo}`;

const url = `${urlRoot}/${path}`;
require("open")(url);