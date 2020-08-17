/*
    webpack-scaffold-zzx_scaffold - By zzx
    ----------------------
    Created using https://github.com/rishabh3112/webpack-scaffold-starter
*/
const Generator = require('yeoman-generator');
const {
    List,
    RawList,
    CheckList,
    Input,
    InputValidate,
    Confirm
} = require("@webpack-cli/webpack-scaffold");
const createDevConfig = require('./dev-config');

module.exports = class WebpackGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);
    opts.env.configuration = {
        dev: {
            topScope: [],
            webpackOptions: {}
        }
    }
  }

  prompting() {
//       const done = this.async();
//       console.log(
// `
//     webpack-scaffold-zzx_scaffold
//     -----------------------
//     demo
// `);
//         this.prompt(Confirm("start", "Do you want to scaffold? "))
//         .then((answer) => {
//             if (answer.start) {
//                 console.log("Let's start scaffolding!");
//                 done();
//             }
//             done(); // to end questioning
//         })
    return this.prompt([
      List('confirm', 'Welcome to the demo scaffold! Are you ready?', ['Yes', 'No', 'Pengwings']),
      Input('entry', 'What is the entry point in your app?')
    ]).then(answer => {
      if (answer['confirm'] === 'Pengwings') {
        this.options.env.configuration.dev.webpackOptions = createDevConfig(answer);
      }
    });
  }
/**
 * writing()
 * @description write files in user directory
 */
  writing() {
    this.config.set('configuration', this.options.env.configuration);

  }

  /**
   * install()
   * @description install dependencies in user directory
   */
  install() {
    this.installDependencies();
  }
};