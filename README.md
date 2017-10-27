# Alinta Energy - Code Challenge

> Note: API does not return `Access-Control-Allow-Origin` header. Consider using
  Chrome extension: `https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en`
  when hitting real API from localhost

### Features
- [React](https://facebook.github.io/react/) + [Redux](https://github.com/reactjs/redux)
- [CSS Modules](https://github.com/css-modules/css-modules) + [SASS](http://sass-lang.com/)
- [Conventional change log commit format](https://github.com/conventional-changelog-archived-repos/conventional-changelog-angular/blob/master/convention.md)
- [Jest](https://facebook.github.io/jest/) (Unit Testing)
- [Nightwatch](http://nightwatchjs.org/) (Functional Browser Testing)

> This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Development

Install dependencies

```
npm i
```

or

```
yarn
```

To start app on http://localhost:3000

```
npm start
```

### Production Build

To build an optimised production ready app:

```
npm run build
```

### Unit Tests

```
npm run test
```

### Browser Tests
This project uses [nightwatch](https://github.com/nightwatchjs/nightwatch) to run browser tests.

#### Prerequisites
- Java Runtime Environment

##### Mac OSX? (use homebrew)

Update homebrew:

```
brew update
```

Install java:

```
brew cask install java
```

##### Run tests

```
npm run test:e2e
```
