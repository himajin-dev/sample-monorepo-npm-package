# sample-monorepo-npm-package

This is a sample npm packages in monorepo hosted at GitHub Packages.

Use Lerna to run commands and publish packages.

## Install

Create `.npmrc`:

```
@himajin-dev:registry=https://npm.pkg.github.com
```

Install npm packages:

```
npm install @himajin-dev/sample-monorepo-npm-package-foo
npm install @himajin-dev/sample-monorepo-npm-package-bar
```

## Development

### Setup

Install dependencies:

```
yarn install
```

### Usage

Transpile to JavaScript:

```
yarn build
```

### Publish

Publish to GitHub Packages:

```
yarn publish
```

If you are not logged in, log in to GitHub Packages:

```
npm login --registry=https://npm.pkg.github.com
```
