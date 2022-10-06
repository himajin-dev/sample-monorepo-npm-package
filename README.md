# sample-monorepo-npm-package

This is a sample npm packages in monorepo hosted at GitHub Packages.

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
yarn workspace @himajin-dev/sample-monorepo-npm-package-foo build
yarn workspace @himajin-dev/sample-monorepo-npm-package-bar build
```

### Publish

Publish to GitHub Packages:

```
yarn workspace @himajin-dev/sample-monorepo-npm-package-foo publish
yarn workspace @himajin-dev/sample-monorepo-npm-package-bar publish
```

If you are not logged in, log in to GitHub Packages:

```
npm login --registry=https://npm.pkg.github.com
```
