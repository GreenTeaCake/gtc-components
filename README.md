# Web Components Library

List of components:

- [switch](/src/components/switch/readme.md)

## Build Flow

### Pre-requisites

- [Node 20 'Iron' (LTS)](https://nodejs.org/en/download) is installed

> There is `.nvmrc` so you can go like this:
>
> ```shell
> # in workspace root
> $ nvm use
> ```

### Build and Check Code

```shell
# go to workspace root
$ cd <workspace_root>

# install dependencies
$ npm install

# (optional) lint code
$ npm run lint

# (optional) format code
$ npm run format

# (optional) run tests
$ npm run test

# build the code
$ npm run build

# start dev environment at http://localhost:3333/
$ npm run build && npm run start

# start storybook (in dev mode) at http://localhost:6006/
$ npm run build && npm run storybook

# build storybook (in static mode to deploy)
$ npm run build && npm run storybook:build

# serve storybook (in static mode) at http://localhost:3000/
$ npm run build && npm run storybook:build && npm run storybook:serve
```
