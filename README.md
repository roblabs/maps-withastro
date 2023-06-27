# Creating an Astro Component template for Web Maps

https://Astro.build is a great start for creating web sites.  This project allows you to bring Leaflet & MapLibre maps directly into Astro.

## Architecture

The architecture is to pass in Astro properties via an HTMLElement dataset property.  The pattern for the Leaflet map example is from an Astro project called `hello-astro`.  

```JavaScript
// Copyright (c) 2022 Hello Tham Pty Ltd.  https://github.com/hellotham/hello-astro 
// SPDX-License-Identifier: MIT
```

See https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
 
### Leaflet with Astro

See [demo/src/pages/index.astro](demo/src/pages/index.astro).

```jsx
<Leaflet 
  latitude={latitude}
  longitude={longitude}
  zoom={zoom}
  container="leafletmap"
  tileLayer={tileLayer}
  attribution={attribution}
/>
```

### MapLibre with Astro

```jsx
<MapLibre
  container="maplibremap"
  latitude={latitude}
  longitude={longitude}
  zoom={zoom}
  mapstyle={mapstyle}
  interactive="true"
/>
```

### Mapbox with Astro

```jsx
<Mapbox
  container="mapboxmap"
  latitude={latitude}
  longitude={longitude}
  zoom={zoom}
  mapstyle={mapstyle}
  interactive="false"
/>
```

### MapKit with Astro

* Use either `zoom` or `cameradistance`.  If both are given, then `zoom` is preferred.
* Pass in JSON Web Token as either a URL or string
  * jwt="http://localhost:3141/jwt"
  * jwt="eyJhxGciO...."

```jsx
<MapKit
  container="mapkitmap"
  containerstyle="width: 512px; height: 512px"
  latitude={latitude}
  longitude={longitude}
  cameradistance={cameradistance}
  zoom={zoom}
  interactive="false"
  maptype="MutedStandard"
  showstileinfo="false"
  jwt="http://localhost:3141/jwt"
/>
```

# How to Replicate

Here are the steps taken to create this repo containing the Maps with Astro components. See https://docs.astro.build/en/reference/publish-to-npm

You can make use of these notes if you want to extend the Map components with Astro beyond Leaflet or MapLibre.

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

### Leaflet dependencies

```bash
# done for you, left here for replication notes
# pnpm install leaflet --workspace-root
# pnpm install @types/leaflet --save-dev --workspace-root
```

### MapLibre dependencies

```bash
# done for you, left here for replication notes
# pnpm install maplibre-gl --workspace-root
```

### Mapbox dependencies

```bash
# done for you, left here for replication notes
# pnpm install mapbox-gl --workspace-root
```

### MapKit dependencies

* https://www.npmjs.com/package/@types/apple-mapkit-js-browser

```bash
# done for you, left here for replication notes
# pnpm install @types/apple-mapkit-js-browser --save-dev --workspace-root
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
│   └── Leaflet.astro
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
