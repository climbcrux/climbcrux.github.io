# Common Loader Configurations
This folder contains some common loader configurations for use with a webpack
configuration file. 

Each loader configuration has instructions on what it allows you to do in your
application as well as the necessary npm packages required for it to work.

## Format for docs
### `name-of-loader-config-file` : `preloader || loader`

>The second part indicates whether this loader config should go in `preloader`
section of the webpack config or the `loader` section.

* Decription of what this loader configuration is for.

```
Code example of what the loader allows you to write in your javascript.
```

## Loader Configuration Docs

### `babel-stage-1.js` : `loader`
* Allows you to write ES6 (Babel stage 1) JavaScript in your application.

```
// We can use any features of es6 (es7ish) see
// https://babeljs.io/docs/plugins/preset-stage-1/ for a list.

// e.g. Allows us to use es6 modules
import something from 'somewhere';
```

* NPM Package Dependencies
    - `babel-loader`
    - `babel-preset-es2015`
    - `babel-preset-stage-1`

### `babel-stage-1-react.js` : `loader`
* Allows you to write ES6 (Babel stage 1) JavaScript in your react application.
```
// We can use any features of es6 (es7ish) see
// https://babeljs.io/docs/plugins/preset-stage-1/ for a list.

// e.g. Allows us to use es6 modules
import something from 'somewhere';
```
* NPM Package Dependencies
    - `babel-loader`
    - `babel-preset-es2015`
    - `babel-preset-react`
    - `babel-preset-stage-1`


### `css-modules.js` : `loader`
* Allows you to use [css-modules](https://github.com/css-modules/css-modules)
in your javascript

```
import styles from './main.css';

const myComponent = (props) => {
    return (
        <div className={styles.container}>
            Great job!
        </div>
    );
};
```

* NPM Package Dependencies
    - `style-loader`
    - `css-loader`

### `less.js` : `loader`
* Allows you to import less files in your JavaScript.

```
import './main.less';
```

* NPM Package Dependencies
    - `css-loader`
    - `style-loader`
    - `less-loader`

### `css.js` : `loader`
* Allows you to import css files in your JavaScript.

```
import './main.css';
```

* NPM Package Dependencies
    - `css-loader`

### `test-ignore.js` : `loader`
* Allows you to ignore image and styling files when running tests.
* NPM Package Dependencies
    - `null-loader`

## Preloader Configuration Docs

### `eslint.js` : `preloader`
* Allows you to run eslint on your javascript files.
* NPM Package Dependencies
    - `eslint-loader`

###  `test-coverage.js` : `preloader`
* Instrument JS files with [Isparta](https://github.com/douglasduteil/isparta)
for subsequent code coverage reporting.
* NPM Package Dependencies
    - `isparta-instrumenter-loader`
