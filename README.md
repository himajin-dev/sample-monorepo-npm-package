# sample-monorepo-npm-package

This is a sample npm packages in monorepo hosted at GitHub Packages.

Use Lerna to run commands and publish packages.

## Features

- Use [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) to install development packages.
- Use [Lerna](https://github.com/lerna/lerna) to build and publish packages.
- Import without including `dist` in the path. Copy `package.json` to `dist` directory when publish packages.
- Use [tsc-alias](https://github.com/justkey007/tsc-alias) to replace alias paths with relative paths.

## Use in project

Sample project is [here](https://github.com/himajin-dev/sample-ts-project).

Create `.npmrc`:

```
@himajin-dev:registry=https://npm.pkg.github.com
```

Install npm packages:

```
npm install @himajin-dev/sample-monorepo-npm-package-foo
npm install @himajin-dev/sample-monorepo-npm-package-bar
npm install @himajin-dev/sample-monorepo-npm-package-baz
```

Import packages:

```ts
import { bar } from "@himajin-dev/sample-monorepo-npm-package-baz/foo/bar";

bar("hello")
```

## Development

### Setup

Install dependencies:

```
yarn install
```

### Build

Transpile to JavaScript:

```
yarn build
```

### Publish

Publish to GitHub Packages:

Note that this is not `yarn publish` command.

```
yarn run publish
```

If you are not logged in, log in to GitHub Packages:

```
npm login --registry=https://npm.pkg.github.com
```
