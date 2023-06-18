# Creating an Astro Component template

# How to Replicate

Here are the steps taken to create this repo containing the Maps with Astro components. See https://docs.astro.build/en/reference/publish-to-npm

## Astro Component

To create the template, we started with the official Astro template `component` and started this project called `maps-withastro`.  See https://github.com/withastro/astro/tree/main/examples/component.

```bash
pnpm create astro@latest maps-withastro -- --template component
```

## Demo

The Astro Docs has a section on creating a `demo` directory for testing and demonstrating the component.  See https://docs.astro.build/en/reference/publish-to-npm/#creating-a-package

We followed these notes to add `demo/` in the root of this project.

```bash
pnpm create astro@latest demo -- --template minimal
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── index.ts
├── demo
│   └── Demo Astro project
├── src
│   └── MyComponent.astro
├── tsconfig.json
├── package.json
```

The `index.ts` file is the "entry point" for your package. Export your components in `index.ts` to make them importable from your package.

## 🧞 Commands
All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm link`                | Registers this package locally.
| `pnpm link maps-withastro` | Run in the `demo/` Astro project to install your components
| `npm publish` | [Publishes](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages#publishing-unscoped-public-packages) this package to NPM. Requires you to be [logged in](https://docs.npmjs.com/cli/v8/commands/npm-adduser)
