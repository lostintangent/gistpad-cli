# GistPad CLI 📘

GistPad CLI is a companion CLI for the [GistPad extension](https://aka.ms/gistpad), that makes it easy to open gists and repos in VS Code, directly from your terminal.

## Getting Started

1. Run `npm i -g gistpad-cli`
1. Run `gistpad <gistOrRepo>` (e.g. `gistpad lostintangent/gistpad`, `gistpad 9fe2a7792b025db004ff44b91fccdfbf`)

    > Alternatively, you could just run `npx gistpad-cli <gistOrRepo>` if you'd prefer not to install the CLI.

This will launch VS Code, and open the specified repo or gist. If you don't already have the GistPad extension installed, it will walk you through installing it. 

## Launch Behavior

If you specify a gist ID, then GistPad will open the files contained within the gist. However, if you specify a repo name, then GistPad will open the repo's `README` (if it has one), and then automatically focus the specified repo in the `Repos` tree view. This makes it easy to browse/edit other files within the repo.

## VS Code Insiders

If you'd prefer to open the specified gist or repo within VS Code Insiders, then simply pass the `-i` or `--insiders` flag to the `gistpad` command. For example: `gistpad -i lostintangent/gistpad`.
