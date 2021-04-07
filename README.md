# GistPad CLI 📘

GistPad CLI is a companion CLI for the [GistPad extension](https://aka.ms/gistpad), that makes it easy to manage gists and repos in VS Code, directly from your terminal. Since GistPad allows you to browse and edit files, without cloning or commiting anything, this provides a simple workflow for exploring and working on code, without needing to clutter your local machine with anything. Additionally, if you're using GistPad to manage your [notes](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.gistfs#wikis), this CLI allows you to quickly launch a new [scratch note](#scratch-notes), or [today page](#today-page) 🔥

<img width="800px" src="https://user-images.githubusercontent.com/116461/113492695-2d3a6280-948e-11eb-8045-309c75327300.png"  />

## Getting Started

1. Run `npm i -g gistpad-cli`
1. Run `gistpad <gistOrRepo>` (e.g. `gistpad lostintangent/gistpad`, `gistpad 9fe2a7792b025db004ff44b91fccdfbf`)

    > Alternatively, you could just run `npx gistpad-cli <gistOrRepo>` if you'd prefer not to install the CLI.

This will launch VS Code, and open the specified repo or gist. If you don't already have the GistPad extension installed, it will walk you through installing it. 

## VS Code Insiders

If you'd prefer to open the specified gist or repo within VS Code Insiders, then simply pass the `-i` or `--insiders` flag to the `gistpad` command. For example: `gistpad -i lostintangent/gistpad`.

## Launch Behavior

If you specify a gist ID, then GistPad will open the files contained within the gist. However, if you specify a repo name, then GistPad will open the repo's `README` (if it has one), and then automatically focus the specified repo in the `Repos` tree view. This makes it easy to browse/edit other files within the repo.

<img src="https://user-images.githubusercontent.com/116461/113492550-edbf4680-948c-11eb-8a16-a36dcfcae39f.gif" />

## Scratch Notes

If you're using GistPad for capturing ["scratch notes"](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.gistfs#scratch-notes), then you can create a new one simply by running `gistpad scratch`. This will launch VS Code, create a new scratch note, and then open it in the editor 🚀

## Today Page

If you're using GistPad for managing a wiki, then you can launch your [today page](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.gistfs#daily-pages) from the CLI by simply running `gistpad today` 📆